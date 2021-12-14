import { Table } from "../types/Table";
import { SQLConversionHelpers } from './SQLConversionHelpers';
const { checkIsTableJoin, inObjectTypeCase, queryPluralCase, querySingularCase } = SQLConversionHelpers;


export const resolverStringMaker = {
  generateResolverString(tables: Table[]): any {
    const resolver = tables.reduce((acc: { [key: string]: { [key: string]: string } }, curr: Table) => {
      const { tablename, columns } = curr;
      if (!checkIsTableJoin(columns)) {
        acc["Query"] = makeQueryString(acc["Query"], curr);
        acc["Mutation"] = makeMutationString(acc["Mutation"], curr);
        const tab = inObjectTypeCase(tablename);
        if (!acc.hasOwnProperty(tab)) {
          acc[tab] = {};
        }
        // should have something for all foreign keys
        acc[tab] = makeTypeString(acc[tab], curr);
      }

      // for (let i = 0; i < columns.length; i++) {
      //   const { constraint_type, column_name, primary_table, primary_column } = columns[i];
      //   if(constraint_type === 'FOREIGN KEY' && primary_table && primary_table && primary_column) {
      //     acc[upCaseTabNam] = makeTypeResolver(acc[upCaseTabNam], column_name, primary_table, primary_column);
      //   }
      // }

      return acc;
    }, {
      Query: {},
      Mutation: {},
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

function makeQueryString(queryObj: { [key: string]: string }, table: Table): { [key: string]: string } {
  const { tablename, columns } = table;

  queryObj[queryPluralCase(tablename)] = `async () => {
    try {
      const query = \`SELECT * FROM ${tablename}\`;
      const result = await db.query(query);
      return result.rows;
    } catch (err) {
      console.log(err)
      /* INSERT YOUR ERROR HANDLING HERE */
    }
  }`

  for (let i = 0; i < columns.length; i++) {
    const { constraint_type, column_name } = columns[i];
    if (constraint_type === "PRIMARY KEY") {
      // person, film, planet, etc.
      queryObj[querySingularCase(tablename)] = `async (parent: any, args: { [key: string]: any }) => {
        try {
          const query = \`SELECT * FROM ${tablename} WHERE ${column_name} = $1\`;
          const result = await db.query(query, [args[${column_name}].toString()]);
          return result.rows[0];
        } catch (err) {
          console.log(err)
          /* INSERT YOUR ERROR HANDLING HERE */
        }
      }`
      break;
    }
  }

  return queryObj;
}

function makeMutationString(mutationObj: { [key: string]: string }, table: Table): { [key: string]: string } {

  const { tablename, columns } = table;

  const col_array: string[] = [];
  const val_array: string[] = [];
  const param_array: string[] = [];
  let primary_key: string = '';
  // loop through all columnes and get the right columns for add and for update 
  for (let i = 0; i < columns.length; i++) {
    const { column_name, constraint_type } = columns[i];
    if (constraint_type !== 'PRIMARY KEY') {
      col_array.push(column_name)
      param_array.push(`$${col_array.length}`);
      val_array.push(`args[\"${column_name}\"]`)
    }
    else {
      primary_key = column_name;
    }
  }

  mutationObj[`add${inObjectTypeCase(tablename)}`] = `async (parent: any, args: { [key: string]: any }) => {
    try {
      const query = \`INSERT INTO ${tablename}(${col_array.join()}) VALUES (${param_array.join()}) RETURNING *\`;
      const result = await db.query(query, ${val_array});
      return result.rows[0];
    } catch (err) {
      console.log(err)
      /* INSERT YOUR ERROR HANDLING HERE */
    }
  }`

  const update_array = col_array.reduce((acc: string[], curr: string, i: number) => {
    acc.push(`${curr} = $${i + 1}`)
    return acc;
  }, [])
  val_array.push(`args[\"${primary_key}\"]`);

  mutationObj[`update${inObjectTypeCase(tablename)}`] = `async (parent: any, args: { [key: string]: any }) => {
    try {
        const query = \`UPDATE ${tablename} SET ${update_array.join()} WHERE ${primary_key} = $${val_array.length} RETURNING *\`;
        const result = await db.query(query, [${val_array}]);
        return result.rows[0];
      } catch (err) {
        console.log(err)
        /* INSERT YOUR ERROR HANDLING HERE */
      }
    }`

  return mutationObj;
}

function makeTypeString(tpyeObj: { [key: string]: any }, table: Table): { [key: string]: string } {

  return {};
}

// export default resolverStringMaker;