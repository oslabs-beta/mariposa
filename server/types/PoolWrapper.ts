import { Pool, QueryResult } from "pg";

export class PoolWrapper {
  pg_uri: string;
  pool: Pool;

  constructor(pg_uri: string) {
    this.pg_uri = pg_uri;
    this.pool = new Pool({
      connectionString: this.pg_uri,
    })
  }
  query = (text: string, params: string[] = []): Promise<QueryResult> => {
    console.log('executed query', text);
    return new Promise((resolve, reject) => {
      this.pool.query(text, params, (err, res) => {
        if(err) return reject(err);
        else {
          resolve((res));
        }
      });
    }); 
  }
}