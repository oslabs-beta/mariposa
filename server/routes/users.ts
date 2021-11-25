import express, {Request, Response, NextFunction} from 'express';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import dbController from '../controllers/dbController';
const userRouter = express.Router();

// gets a user with a given username
userRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  return res.json(res.locals.user);
})

// posts a user of given name and password
userRouter.post('/', dbController.createUser, (req: Request, res: Response, next: NextFunction) => {
  return res.json({});
})

// updates user of a given id 
userRouter.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  return res.json({});
})

// deletes a user of given id
userRouter.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  return res.json({});
})

export default userRouter;