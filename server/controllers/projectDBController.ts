import { Request, Response, NextFunction } from 'express';
import { QueryResult } from 'pg';
import db from '../models/projectDB'
import { Table } from '../types/Table';

export const projectDBController = {
  async getAllTables(req: Request, res: Response, next: NextFunction) {
    try {
      const query = `
      SELECT pg_.tablename, info_.column_name, info_.data_type, info_.is_nullable, info_.is_updatable, info_.column_default 
      FROM pg_catalog.pg_tables pg_ JOIN information_schema.columns info_ 
      ON pg_.tablename = info_.table_name
      WHERE pg_.schemaname != 'pg_catalog' 
      AND pg_.schemaname != 'information_schema'
      ORDER BY pg_.tablename
      `;
      const queryResult = await db.query(query);
      res.locals.userDbResponse = rowsToTable(queryResult.rows);
      return next();
    }
    catch (err) {
      return next({
        log: `Express error handler caught error in the getAllTables controller, ${err}`,
        message: { err: 'An error occurred in the getAllTables controller'}
      });
    }
  },
}

//helper function to shape response array of Table objects
/***modified queryResult to type any[]***/
function rowsToTable(queryResult: any[]): Table[] {
  const tablesObject = queryResult.reduce((tablesObject: { [key: string]: Table }, curr: { [key: string]: string }) => {
    const { tablename, column_name, data_type, is_nullable, is_updatable, column_default } = curr;
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
      column_name,
      data_type,
      is_nullable,
      is_updatable,
      column_default
    });
    return tablesObject;
  }, {});

  return Object.values(tablesObject);
}