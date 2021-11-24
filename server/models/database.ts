import { Pool, QueryResult } from 'pg';

const PG_URI: string = `URI`;

const pool: Pool = new Pool({
  connectionString: PG_URI,
});

// for Response, may need to use the express version not the Fetch version
const db = {
  query: (text: string, params: string[], callback: (err: Error, result: QueryResult<any>) => void): void => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

export default db;