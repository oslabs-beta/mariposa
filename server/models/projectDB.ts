import { Pool, QueryResult } from 'pg';

// To be updated by state
const PG_URI: string = `postgres://vozivmzl:6vudzc_5vjGcmGFKOClHXhcJfXLW-QXB@fanny.db.elephantsql.com/vozivmzl`;

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