import { IResolvers } from "@graphql-tools/utils";
import { PoolWrapper } from "../types/PoolWrapper";
import { Table } from "../types/Table";

const resolverMaker = {
  generateResolvers(tables: Table[], db: PoolWrapper): IResolvers {
    const resolver = tables.reduce((acc: IResolvers, curr: Table) => {
      acc["Query"] = makeQueryResolver(acc["Query"], curr, db);
      acc["Mutation"] = makeMutationResolver(acc["Mutation"], curr, db);
      return acc;
    }, {
      Query: {},
      Mutation: {},
    });

    return resolver;
  }
}

function makeQueryResolver(queryObj: { [key: string]: any }, table: Table, db: PoolWrapper): object {
  const { tablename, columns } = table;

  queryObj[tablename] = async () => {
    try {
      const query = `SELECT * FROM ${tablename}`;
      const result = await db.query(query);
      return result.rows;
    } catch (err) {
      console.log(err)
      /* INSERT YOUR ERROR HANDLING HERE */
    }
  }

  for (let i = 0; i < columns.length; i++) {
    const { constraint_type, column_name } = columns[i];
    if (constraint_type === "PRIMARY KEY") {
      queryObj[`${tablename}_by_id`] = async (parent: any, args: { [key: string]: any }) => {
        console.log('Arguments', args);
        try {
          const query = `SELECT * FROM ${tablename} WHERE ${column_name} = $1`;
          const result = await db.query(query, [args[column_name].toString()]);
          return result.rows[0];
        } catch (err) {
          console.log(err)
          /* INSERT YOUR ERROR HANDLING HERE */
        }
      }
      break;
    }
  }

  return queryObj;
}

function makeMutationResolver(queryObj: { [key: string]: any }, table: Table, db: PoolWrapper): object {

  const { tablename, columns } = table;
  for (let i = 0; i < columns.length; i++) {
    const { constraint_type, column_name } = columns[i];
    if (constraint_type === "PRIMARY KEY") { // TODO change parent from ANY to whatever a parent is
      queryObj[`add_${tablename}`] = async (parent: any, args: { [key: string]: any }) => {
        console.log('Arguments', args);
        //TODO OPTION 2: instead of dynamically generating cols which won't work a static export,
        // use every column that you're given, and set the default params = null for any nullable item.
        // I.e. 1. loop through columns, if its PK don't include, if there's default val don't include, etc.
        // inner function with everything in args and default values of null for any nullable
        try {
          const col_array: string[] = [];
          const val_array: string[] = [];
          const param_array: string[] = [];
          for (const [key, value] of Object.entries(args)) {
            col_array.push(key);
            param_array.push(`$${col_array.length}`)
            val_array.push(value.toString())
          };
          const query = `INSERT INTO ${tablename}(${col_array.join()}) VALUES (${param_array.join()}) RETURNING *`;
          const result = await db.query(query, val_array);
          return result.rows[0];
        } catch (err) {
          console.log(err)
          /* INSERT YOUR ERROR HANDLING HERE */
        }
      }
      break;
    }
  }

  return queryObj;
}

export default resolverMaker;