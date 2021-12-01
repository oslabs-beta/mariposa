const { buildSchema } = require('graphql');
import { SQLConversionHelpers } from './SQLConversionHelpers'
import { Table, Column } from '../types/Table';
const {checkIsTableJoin, fieldValueCreator, inObjectTypeCase} = SQLConversionHelpers;


export const GQLQueryTypeCreator = (tableObject: any) => {
    const {tablename, columns} = tableObject;
    let queryType = 'type Query {';
    if(checkIsTableJoin(columns)){
      return;
    } else { 
      type += `type ${inPascalCase(tablename)} {\n`;
      columns.forEach((columnObj: any) => {
      const{column_name, constraint_type, primary_table} = columnObj;
      if(constraint_type === 'FOREIGN KEY') {
        type += ` ${primary_table}: [${inPascalCase(primary_table)}]\n`
      } else{
        type += ` ${column_name}: ${fieldValueCreator(columnObj)}\n`
      }
    });
  }
    type += '}\n'
    console.log(type);
  }

