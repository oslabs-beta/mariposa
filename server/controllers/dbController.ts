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
        VALUES($1, $2, $3) RETURNING user_id, username, email`;
      const values = [username, email, encrypted];
      const result = await db.query(query, values)
      const user = result.rows[0];
      const newUser = new User(user.user_id, user.username, user.email);
      res.locals.user = newUser;
      return next();
    }
    catch (err) {
      return next(err);
    }
  },

  async getPerson(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const query = `SELECT * FROM people where _id = $1`
      const values = [id];
      const result = await db.query(query, values);
      res.locals.user = result.rows[0];
      return next();
    }
    catch (err) {
      return next(err)
    }
  },
  async getPlanet(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const query = `SELECT * FROM planets where _id = $1`
      const values = [id];
      const result = await db.query(query, values);
      res.locals.planet = result.rows[0];
      return next();
    }
    catch (err) {
      return next(err)
    }
  },
  // end of dbController class
}


export default dbController;