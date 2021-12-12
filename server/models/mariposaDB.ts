import { PoolWrapper } from '../types/PoolWrapper';

const PG_URI: string = `postgres://dqexxfpt:6D6Lf1JqByYbEhVQeJnm3zsdNop4X_cd@castor.db.elephantsql.com/dqexxfpt`;

const db = new PoolWrapper(PG_URI);

export default db;