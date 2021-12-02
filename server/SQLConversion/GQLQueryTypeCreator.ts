const { buildSchema } = require('graphql');
import { SQLConversionHelpers } from './SQLConversionHelpers'
import { Table, Column } from '../types/Table';
const {checkIsTableJoin, fieldValueCreator, inObjectTypeCase, queryPluralCase, querySingularCase} = SQLConversionHelpers;


export const GQLQueryTypeCreator = (tableObject: any) => {
    const {tablename, columns} = tableObject;
    let queryType = "";
    if(checkIsTableJoin(columns)){
      return;
    } else { 
      const typeObject = inObjectTypeCase(tablename);
      let queryPluralType = `\n ${queryPluralCase(tablename)}: [${typeObject}]!`;
      let querySingularType = `\n ${querySingularCase(tablename)}(`;
      columns.forEach((columnObj: any) => {
        const{column_name, constraint_type, data_type} = columnObj;
        if(constraint_type === 'PRIMARY KEY') {
          //args creator, account for more than one arg
          querySingularType += `${column_name}: ${fieldValueCreator(columnObj)},`;
        }
      });
      //remove ending comma and replace with '): [typeObject]'
      querySingularType = querySingularType.substring(0, querySingularType.length - 1) + `): ${typeObject}!`; 
      queryType += queryPluralType + querySingularType;
    }
    console.log(queryType)
    return queryType;
  }

