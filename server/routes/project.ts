import express, { Request, Response, NextFunction } from 'express';
import { projectDBController } from '../controllers/projectDBController';
import { D3Column, D3Schema, D3Table, DBQueryResponse, Table } from '../types/Table';
const projectRouter = express.Router();
const { getAllTables, createObjectTypes, createQueryTypes, createMutationsTypes } = projectDBController;

//returns all tables and relevant SQL schema from user's provided db 
projectRouter.get('/tables', getAllTables, createObjectTypes, createQueryTypes, createMutationsTypes, (req: Request, res: Response, next: NextFunction) => {
  return res.json(rowsToTable(res.locals.userDbResponse));
});

//returns all tables and relevant SQL schema from user's provided db in desired D3 form 
projectRouter.get('/D3tables', getAllTables, (req: Request, res: Response, next: NextFunction) => {
  return res.json(rowsToD3(res.locals.userDbResponse));
});

//helper function to shape response array of Table objects
/***modified queryResult to type any[]***/
function rowsToTable(queryResult: DBQueryResponse[]): Table[] {
  const tablesObject = queryResult.reduce((tablesObject: { [key: string]: Table }, curr: DBQueryResponse) => {
    const { tablename, column_id, column_name, data_type, is_nullable, is_updatable, column_default, constraint_name, constraint_type, primary_table, primary_column } = curr;
    //check to see if tablesObject has a tablename property
    if (!tablesObject.hasOwnProperty(tablename)) {
      //if falsy, create a tablename property and assign it to an object with tablename and columns properties
      tablesObject[tablename] = {
        tablename: tablename,
        columns: [],
      }
    }
    /*if tablename is a property of tablesObject, then bundle the associated columns in an object 
    and push them into a columns array*/
    tablesObject[tablename].columns.push({
      column_id,
      column_name,
      data_type,
      is_nullable,
      is_updatable,
      column_default,
      constraint_name,
      constraint_type,
      primary_table,
      primary_column
    });
    return tablesObject;
  }, {});
  return Object.values(tablesObject);
}

function rowsToD3(queryResult: DBQueryResponse[]): D3Schema {
  let schemaname = '';
  const tablesObject = queryResult.reduce((tablesObject: { [key: string]: D3Table }, curr: DBQueryResponse) => {
    const { schema, tablename, column_name, data_type, constraint_type } = curr;
    schemaname = schema;
    //check to see if tablesObject has a tablename property
    if (!tablesObject.hasOwnProperty(tablename)) {
      tablesObject[tablename] = new D3Table(tablename, []);
    }
    const attribute: { data_type: string, constraint?: string } = constraint_type ? { data_type, constraint: constraint_type } : { data_type }
    tablesObject[tablename].children.push(new D3Column(column_name, attribute));
    return tablesObject;
  }, {});

  return new D3Schema(schemaname, Object.values(tablesObject));
}

export default projectRouter;