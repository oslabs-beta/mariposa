import express, { Request, Response, NextFunction } from 'express';
import { projectDBController } from '../controllers/projectDBController';
import { rowsToD3, rowsToTable } from '../SQLConversion/SQLSchemaHelpers';
const projectRouter = express.Router();
const { getAllTables, createObjectTypes, createQueryTypes, createMutationsTypes } = projectDBController;

//returns all tables and relevant SQL schema from user's provided db 
projectRouter.get('/tables', getAllTables, createObjectTypes, createQueryTypes, createMutationsTypes, (req: Request, res: Response, next: NextFunction) => {
  return res.json(rowsToTable(res.locals.userDbResponse));
});

projectRouter.post('/tables', getAllTables, (req: Request, res: Response, next: NextFunction) => {
  return res.status(201).send("Schema built successfully!");
});

//returns all tables and relevant SQL schema from user's provided db in desired D3 form 
projectRouter.get('/D3tables', getAllTables, (req: Request, res: Response, next: NextFunction) => {
  return res.json(rowsToD3(res.locals.userDbResponse));
});

export default projectRouter;