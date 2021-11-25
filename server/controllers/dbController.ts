import bcrypt from 'bcrypt'; //js?
import { Request, Response, NextFunction } from 'express';
import User from '../../user';
import db from '../models/database'

const dbController = {
  // TODO: make this check for valid emails
  // TODO: make this check for no spaces in username
  // TODO: make error object more custom
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password }: { username: string, email: string, password: string } = req.body;
      const encrypted = await bcrypt.hash(password, 10);
      const query = `INSERT INTO users(username, email, password)
        VALUES($1, $2, $3) RETURNING user_id, username, email`
      const values = [username, email, encrypted];
      db.query(query, values, (err, result) => {
        if (err) {
          // TODO
          const newError = new Error('line 19 yo');
          console.error(newError);
          return next(newError);
        }
        else {
          const { user_id, username, email }: { user_id: number, username: string, email: string } = result.rows[0];
          const newUser = new User(user_id, username, email);
          res.locals.user = newUser;
          return next();
        }
      });
    }
    catch (err) {
      return next(err);
    }
  }

// end of dbController class
}


export default dbController;