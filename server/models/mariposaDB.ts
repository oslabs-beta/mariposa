import { PoolWrapper } from '../types/PoolWrapper';

const PG_URI: string = `postgres://osvbvnuc:Z2tsRaYf1dkGkjRySrOZRbq9cw-3uaVx@castor.db.elephantsql.com/osvbvnuc`;

const db = new PoolWrapper(PG_URI);

export default db;