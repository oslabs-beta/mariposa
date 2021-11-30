import express, {Request, Response, NextFunction} from 'express';
import projectDBController from '../controllers/projectDBController';
const projectRouter = express.Router();


projectRouter.get('/tables', projectDBController.getAllTables, (req: Request, res: Response, next: NextFunction) => {
  return res.json(res.locals.userDbResponse);
});


export default projectRouter;