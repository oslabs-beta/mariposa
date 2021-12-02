import express, { Request, Response, NextFunction } from 'express';
import { projectDBController } from '../controllers/projectDBController';
import { rowsToD3, rowsToTable } from '../SQLConversion/SQLSchemaHelpers';
const projectRouter = express.Router();
const { getAllTables, createObjectTypes, createQueryTypes, createMutationsTypes, buildResolvers, buildSchema } = projectDBController;

//returns all tables and relevant SQL schema from user's provided db 
projectRouter.get('/tables', getAllTables, createObjectTypes, createQueryTypes, createMutationsTypes, buildResolvers, (req: Request, res: Response, next: NextFunction) => {
  return res.json(rowsToTable(res.locals.userDbResponse));
});

projectRouter.post('/tables', getAllTables, createObjectTypes, createQueryTypes, createMutationsTypes, buildResolvers, buildSchema, (req: Request, res: Response, next: NextFunction) => {
  return res.status(201).json({
    typeDefs: res.locals.typeDefs,
    resolvers: res.locals.resolvers,
  });
});

// TODO combine D3 and SCHEMA builder into one request. 
//returns all tables and relevant SQL schema from user's provided db in desired D3 form 
projectRouter.get('/D3tables', getAllTables, (req: Request, res: Response, next: NextFunction) => {
  return res.json(rowsToD3(res.locals.userDbResponse));
});

export default projectRouter;