const { buildSchema } = require('graphql');
import { SQLConversionHelpers } from './SQLConversionHelpers'
import { Table, Column } from '../types/Table';
const {checkIsTableJoin, fieldValueCreator, inObjectTypeCase} = SQLConversionHelpers;


export const GQLObjectTypeCreator = (tableObject: any) => {
    const {tablename, columns} = tableObject;
    let type = "";
    if(checkIsTableJoin(columns)){
      return;
    } else { 
      type += `type ${inObjectTypeCase(tablename)} {\n`;
      columns.forEach((columnObj: any) => {
      const{column_name, constraint_type, primary_table} = columnObj;
      if(constraint_type === 'FOREIGN KEY') {
        type += ` ${primary_table}: ${inObjectTypeCase(primary_table)}\n`
      } else{
        type += ` ${column_name}: ${fieldValueCreator(columnObj)}\n`
      }
    });
  }
    type += '}\n';
    
    return type;
  }

