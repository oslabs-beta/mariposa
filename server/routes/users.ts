import express, {Request, Response, NextFunction} from 'express';
const router = express.Router();

// gets a user with a given username
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  return res.json({});
})

// posts a user of given name and password
router.post('/', (req: Request, res: Response, next: NextFunction) => {
  return res.json({});
})

// updates user of a given id 
router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  return res.json({});
})

// deletes a user of given id
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  return res.json({});
})