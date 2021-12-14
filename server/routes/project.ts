import express, { Request, Response, NextFunction } from 'express';
import { projectDBController } from '../controllers/projectDBController';
import { rowsToD3, rowsToTable } from '../SQLConversion/SQLSchemaHelpers';
const projectRouter = express.Router();
const { updateDatabase, getAllTables, createObjectTypes, createQueryTypes, createMutationsTypes, buildResolvers, buildSchema } = projectDBController;

//returns all tables and relevant SQL schema from user's provided db 
// projectRouter.get('/tables', getAllTables, createObjectTypes, createQueryTypes, createMutationsTypes, buildResolvers, (req: Request, res: Response, next: NextFunction) => {
//   return res.json(rowsToTable(res.locals.userDbResponse));
// });

projectRouter.post('/tables', updateDatabase, getAllTables, createObjectTypes, createQueryTypes, createMutationsTypes, buildResolvers, buildSchema, (req: Request, res: Response, next: NextFunction) => {
  return res.status(201).json({
    typeDefs: res.locals.typeDefs,
    resolverString: res.locals.resolverString,
  });
});

projectRouter.get('/tables', getAllTables, (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json(rowsToTable(res.locals.userDbResponse));
});


//returns all tables and relevant SQL schema from user's provided db in desired D3 form 
projectRouter.post('/D3tables', updateDatabase, getAllTables, (req: Request, res: Response, next: NextFunction) => {
  return res.status(201).json(rowsToD3(res.locals.userDbResponse));
});

export default projectRouter;