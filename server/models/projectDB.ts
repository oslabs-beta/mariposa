import { PoolWrapper } from '../types/PoolWrapper';

// To be updated by state
const PG_URI: string = `postgres://vozivmzl:6vudzc_5vjGcmGFKOClHXhcJfXLW-QXB@fanny.db.elephantsql.com/vozivmzl`;

const db = new PoolWrapper(PG_URI);

export default db;