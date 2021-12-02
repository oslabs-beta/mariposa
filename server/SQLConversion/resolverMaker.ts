import { IResolvers } from "@graphql-tools/utils";
import { PoolWrapper } from "../types/PoolWrapper";
import { Table } from "../types/Table";
import { SQLConversionHelpers } from './SQLConversionHelpers'
const {checkIsTableJoin, inObjectTypeCase, queryPluralCase, querySingularCase} = SQLConversionHelpers;


const resolverMaker = {
  generateResolvers(tables: Table[], db: PoolWrapper): IResolvers {
    const resolver = tables.reduce((acc: IResolvers, curr: Table) => {
      const { tablename, columns } = curr;
      if(!checkIsTableJoin(columns)) {
        acc["Query"] = makeQueryResolver(acc["Query"], curr, db);
        // acc["Mutation"] = makeMutationResolver(acc["Mutation"], curr, db);
      }

      // const upCaseTabNam = tablename.charAt(0).toUpperCase() + tablename.slice(1);
      // if(!acc.hasOwnProperty(upCaseTabNam)) {
      //   acc[upCaseTabNam] = {};
      // }
      // for (let i = 0; i < columns.length; i++) {
      //   const { constraint_type, column_name, primary_table, primary_column } = columns[i];
      //   if(constraint_type === 'FOREIGN KEY' && primary_table && primary_table && primary_column) {
      //     acc[upCaseTabNam] = makeTypeResolver(acc[upCaseTabNam], column_name, primary_table, primary_column);
      //   }
      // }

      return acc;
    }, {
      Query: {},
      // Mutation: {},
    });

    // resolver["People"] = {
    //   species: async (parent) => {
    //     console.log('Person:', parent);
    //     try {
    //       const query = `SELECT * FROM species WHERE _id = $1`;
    //       const result = await db.query(query, [parent.species_id]);
    //       return result.rows[0]
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    // }

    return resolver;
  }
}

function makeQueryResolver(queryObj: { [key: string]: any }, table: Table, db: PoolWrapper): object {
  const { tablename, columns } = table;

  queryObj[queryPluralCase(tablename)] = async () => { // people, films, planets, etc.
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
      // person, film, planet, etc.
      queryObj[querySingularCase(tablename)] = async (parent: any, args: { [key: string]: any }) => {
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

function makeMutationResolver(mutationObj: { [key: string]: any }, table: Table, db: PoolWrapper): object {

  const { tablename, columns } = table;

  mutationObj[`add_${tablename}`] = async (parent: any, args: { [key: string]: any }) => {
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

  for (let i = 0; i < columns.length; i++) {
    const { constraint_type, column_name } = columns[i];
    if (constraint_type === "PRIMARY KEY") {

      mutationObj[`update_${tablename}_by_id`] = async (parent: any, args: { [key: string]: any }) => {
        console.log('Arguments', args);
        //TODO OPTION 2: instead of dynamically generating cols which won't work a static export,
        // use every column that you're given, and set the default params = null for any nullable item.
        // I.e. 1. loop through columns, if its PK don't include, if there's default val don't include, etc.
        // inner function with everything in args and default values of null for any nullable
        try {
          const col_array: string[] = [];
          const val_array: string[] = [];
          for (const [key, value] of Object.entries(args)) {
            if (key !== column_name) {
              col_array.push(`${key} = $${col_array.length + 1}`);
              val_array.push(value.toString())
            }
          };
          // ['name = $1', 'mass = $2']

          val_array.push(args[column_name]);
          const query = `UPDATE ${tablename} SET ${col_array.join()} WHERE ${column_name} = $${col_array.length + 1} RETURNING *`;
          const result = await db.query(query, val_array);
          return result.rows[0];
        } catch (err) {
          console.log(err)
          /* INSERT YOUR ERROR HANDLING HERE */
        }
      }
    }
  }
  return mutationObj;
}

function makeTypeResolver(queryObj: {[key: string]: any}, column_name: string, primary_table: string, primary_column: string): object {
  
  return {};
}

export default resolverMaker;