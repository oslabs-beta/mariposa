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
        acc["Mutation"] = makeMutationResolver(acc["Mutation"], curr, db);

        const tab = inObjectTypeCase(tablename);
        if (!acc.hasOwnProperty(tab)) {
          acc[tab] = {};
        }
        // should have something for all foreign keys
        for (let i = 0; i < columns.length; i++) {
          const { constraint_type, column_name, primary_table, primary_column } = columns[i];
          if(constraint_type === 'FOREIGN KEY' && primary_table && primary_table && primary_column) {
            acc[tab] = makeTypeResolver(acc[tab], column_name, primary_table, primary_column, db);
          }
        }
      }

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
  
  mutationObj[`add${inObjectTypeCase(tablename)}`] = async (parent: any, args: { [key: string]: any }) => {
    console.log('Arguments', args);
    
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
      
      mutationObj[`update${inObjectTypeCase(tablename)}`] = async (parent: any, args: { [key: string]: any }) => {
        console.log('Arguments', args);
        
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

function makeTypeResolver(typeObj: {[key: string]: any}, column_name: string, primary_table: string, primary_column: string, db: PoolWrapper): object {
  typeObj[primary_table] = async (parent: any) => {
    try {
      const query = `SELECT * FROM ${primary_table} WHERE ${primary_column} = $1`;
      const result = await db.query(query, [parent[column_name]]);
      return result.rows[0];
    } catch(err) {
      console.log(err)
      /* INSERT ERROR HANDLING HERE */
    }
  }
  return typeObj;
}

export default resolverMaker;