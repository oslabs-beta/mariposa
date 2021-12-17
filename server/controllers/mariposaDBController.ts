import { Request, Response, NextFunction } from 'express';
import db from '../models/mariposaDB'

const dbController = {
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const { firstname, lastname, username, email, password }: { firstname: string, lastname: string, username: string, email: string, password: string } = req.body;
      const query = `INSERT INTO user_accounts(firstname, lastname, username, email, password)
        VALUES($1, $2, $3, $4, $5) RETURNING firstname, lastname, username, email, password`;
      const values = [firstname, lastname, username, email, password];
      const result = await db.query(query, values);
      
      res.locals.signup = 'Successful registration';
      return next();
    }
    catch (err) {
      return next(err);
    }
  },
  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const {username, password }: { username: string, password: string } = req.body;
      //check to see if username provided is an email instead
      const regex = new RegExp('@');
      const userColumn = !regex.test(username) ? 'username' : 'email';
      
      const query = `SELECT * FROM user_accounts WHERE ${userColumn} = $1 AND password = $2`
      const values = [username, password];
      
      const result = await db.query(query, values);
      const user = result.rows[0];
      
      res.locals.accessToken = user ? 'dfj23424fwefw' : '';
      return next();
    }
    catch (err) {
      return next(err);
    }
  },
  // end of dbController class
}


export default dbController;