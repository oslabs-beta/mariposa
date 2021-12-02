const { buildSchema } = require('graphql');
import { SQLConversionHelpers } from './SQLConversionHelpers'
import { Table, Column } from '../types/Table';
const {checkIsTableJoin, fieldValueCreator, inObjectTypeCase, queryPluralCase, querySingularCase} = SQLConversionHelpers;


export const GQLQueryTypeCreator = (tableObject: any) => {
    const {tablename, columns} = tableObject;
    let queryField = "";
    if(checkIsTableJoin(columns)){
      return;
    } else { 
      const typeObject = inObjectTypeCase(tableObject);
      queryField += ` ${queryPluralCase(tablename)}: [${typeObject}]!\n`;
      columns.forEach((columnObj: any) => {
      const{column_name, constraint_type, primary_table} = columnObj;
      if(constraint_type === 'PRIMARY KEY') {
      }
    });
  }
    queryField += '}\n'
    console.log(queryField);
  }

