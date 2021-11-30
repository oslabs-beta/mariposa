import { Pool, QueryResult } from 'pg';

const PG_URI: string = `postgres://osvbvnuc:Z2tsRaYf1dkGkjRySrOZRbq9cw-3uaVx@castor.db.elephantsql.com/osvbvnuc`;

const pool: Pool = new Pool({
  connectionString: PG_URI,
});

// for Response, may need to use the express version not the Fetch version
const db = {
  query: (text: string, params: string[] = []): Promise<QueryResult> => {
    console.log('executed query', text);
    return new Promise((resolve, reject) => {
      pool.query(text, params, (err, res) => {
        if(err) return reject(err);
        else {
          resolve((res));
        }
      })
    }) 
  }
};

export default db;