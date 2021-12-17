import { PoolWrapper } from '../types/PoolWrapper';

const PG_URI: string = `YOUR_USER_DB`;

const db = new PoolWrapper(PG_URI);

export default db;
