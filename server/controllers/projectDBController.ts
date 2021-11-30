import { Request, Response, NextFunction } from 'express';
import { QueryResult } from 'pg';
import db from '../models/projectDB'
import { Table } from '../types/Table';

const projectDBController = {
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
      const result = await db.query(query);
      res.locals.userDbResponse = rowsToTable(result);
      return next();
    }
    catch (err) {
      console.log(err);
      return next({
        log: "error in line 23 of projectDBController.ts",
        message: { err: "error in getAllTables function" }
      }
      );
    }
  },

  //end of project dbController module
}

function rowsToTable(queryResult: QueryResult<any>): Table[] {
  const array = queryResult.rows;
  console.log(array);
  const ret = array.reduce((acc: { [key: string]: Table }, curr: { [key: string]: string }) => {
    const { tablename, column_name, data_type, is_nullable, is_updatable, column_default } = curr;
    if (!acc.hasOwnProperty(tablename)) {
      acc[tablename] = {
        tablename: tablename,
        columns: [],
      }
    }
    acc[tablename].columns.push({
      column_name,
      data_type,
      is_nullable,
      is_updatable,
      column_default
    });
    return acc;
  }, {});
  return Object.values(ret);
}


export default projectDBController;