import express, {Request, Response, NextFunction} from 'express';
import mariposaDBController from '../controllers/mariposaDBController';
const mariposaRouter = express.Router();

// posts a user of given name and password
mariposaRouter.post('/signup', mariposaDBController.signUp, (req: Request, res: Response, next: NextFunction) => {
  return res.json({message: res.locals.signup});
});

mariposaRouter.post('/signin', mariposaDBController.signUp, (req: Request, res: Response, next: NextFunction) => {
  return res.json({message: res.locals.status});
});


export default mariposaRouter;