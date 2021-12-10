import express, {Request, Response, NextFunction} from 'express';
import mariposaDBController from '../controllers/mariposaDBController';
const mariposaRouter = express.Router();

// gets a user with a given username
mariposaRouter.get('/:id', mariposaDBController.getPerson, (req: Request, res: Response, next: NextFunction) => {
  return res.json(res.locals.user);
})

// posts a user of given name and password
mariposaRouter.post('/signup', mariposaDBController.signUp, (req: Request, res: Response, next: NextFunction) => {
  return res.json({message: res.locals.status});
})

// updates user of a given id 
mariposaRouter.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  return res.json({});
})

// deletes a user of given id
mariposaRouter.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  return res.json({});
})

export default mariposaRouter;