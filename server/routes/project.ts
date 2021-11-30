import express, {Request, Response, NextFunction} from 'express';
import { projectDBController } from '../controllers/projectDBController';
const projectRouter = express.Router();
const{getAllTables, convertTablestoSchemas} = projectDBController;

//returns all tables and relevant SQL schema from user's provided db 
projectRouter.get('/tables', getAllTables, convertTablestoSchemas, (req: Request, res: Response, next: NextFunction) => {
  return res.json(res.locals.userDbResponse);
});


export default projectRouter;