import { Request, Response, NextFunction } from 'express';
import db from '../models/projectDB'

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
      res.locals.userDbResponse = result.rows;
      return next();
    }
    catch (err) {
      return next(err);
    }
  },

  //end of project dbController module
}


export default projectDBController;