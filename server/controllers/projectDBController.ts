import { Request, Response, NextFunction } from 'express';
import db from '../models/projectDB'
import { Table } from '../types/Table';
import { GQLObjectTypeCreator } from '../SQLConversion/GQLObjectTypeCreator';
import { GQLQueryTypeCreator } from '../SQLConversion/GQLQueryTypeCreator';
import { GQLMutationTypeCreator } from '../SQLConversion/GQLMutationTypeCreator';
import rowsToTable from '../SQLConversion/SQLQueryHelpers';
import { IResolvers } from '@graphql-tools/utils';
import resolverMaker from '../SQLConversion/resolverMaker';
import { PoolWrapper } from '../types/PoolWrapper';


export const projectDBController = {
  async getAllTables(req: Request, res: Response, next: NextFunction) {
    try {
      const query = `
        SELECT col.table_schema AS schema, 
          col.table_name AS tablename,
          col.ordinal_position AS column_id,
          col.column_name,
          col.data_type, 
          col.is_nullable, 
          col.is_updatable, 
          col.column_default,
          kcu.constraint_name,
          tc.constraint_type,
          kcu2.table_name as primary_table,
          kcu2.column_name as primary_column
        FROM information_schema.columns col
          JOIN pg_catalog.pg_tables pg_
          ON col.table_name = pg_.tablename
        LEFT JOIN information_schema.key_column_usage kcu
          ON col.table_name = kcu.table_name
          AND col.column_name = kcu.column_name
        LEFT JOIN information_schema.table_constraints tc
          ON kcu.constraint_name = tc.constraint_name
        LEFT JOIN information_schema.referential_constraints rc
          ON kcu.constraint_name = rc.constraint_name
        LEFT JOIN information_schema.key_column_usage kcu2
          ON kcu2.constraint_name = rc.unique_constraint_name

        WHERE pg_.schemaname != 'pg_catalog'
        AND pg_.schemaname != 'information_schema'
        ORDER BY col.table_schema,
          col.table_name,
          column_id;
      `;
      const queryResult = await db.query(query);
      res.locals.userDbResponse = queryResult.rows;
      return next();
    }
    catch (err) {
      return next({
        log: `Express error handler caught error in the getAllTables controller, ${err}`,
        message: { err: 'An error occurred in the getAllTables controller' }
      });
    }
  },
  createObjectTypes(req: Request, res: Response, next: NextFunction) {
    const arrayOfTableObjects = rowsToTable(res.locals.userDbResponse);
    res.locals.tablesArray = arrayOfTableObjects;

    let objectTypes = "";
    //iterate through array and extract each table object, feed tablename and columns into helper function  
    arrayOfTableObjects.forEach((tableObject: Table) => {
      objectTypes += GQLObjectTypeCreator(tableObject);
    });
    res.locals.typeDefs = objectTypes;
    return next();
  },
  createQueryTypes(req: Request, res: Response, next: NextFunction) {
    const arrayOfTableObjects = res.locals.tablesArray;
    let queryTypes = 'type Query {';
   
    arrayOfTableObjects.forEach((tableObject: Table) => {
      queryTypes += GQLQueryTypeCreator(tableObject);
    });
    queryTypes += '\n}';
    console.log(queryTypes);
    res.locals.typeDefs += queryTypes;
    return next();
  },
  buildResolvers(req: Request, res: Response, next: NextFunction) {
    const arrayOfTableObjects: Table[] = res.locals.tablesArray;
    const { url } = req.body;
    const db = new PoolWrapper(url);
    const resolvers: IResolvers = resolverMaker.generateResolvers(arrayOfTableObjects, db);
    res.locals.resolvers = resolvers;
  },
  buildSchema(req: Request, res: Response, next: NextFunction) {
    
    
    return next();
  },
  createMutationsTypes(req: Request, res: Response, next: NextFunction){
    const arrayOfTableObjects = res.locals.tablesArray;
    let mutationTypes = `type Mutation {`;
    arrayOfTableObjects.forEach((tableObject: Table) => {
      mutationTypes += GQLMutationTypeCreator(tableObject);
    });
    mutationTypes = mutationTypes.substring(0, mutationTypes.length - 1) + '\n}';
    console.log(mutationTypes);
    res.locals.typeDefs += mutationTypes;
    return next();
  }
}
