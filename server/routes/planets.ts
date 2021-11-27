import express, {Request, Response, NextFunction} from 'express';
import dbController from '../controllers/dbController';
const planetRouter = express.Router();

// gets a user with a given username
planetRouter.get('/:id', dbController.getPlanet, (req: Request, res: Response, next: NextFunction) => {
  return res.json(res.locals.planet);
})

// posts a user of given name and password
planetRouter.post('/', dbController.createUser, (req: Request, res: Response, next: NextFunction) => {
  return res.json({});
})

// updates user of a given id 
planetRouter.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  return res.json({});
})

// deletes a user of given id
planetRouter.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  return res.json({});
})

export default planetRouter;