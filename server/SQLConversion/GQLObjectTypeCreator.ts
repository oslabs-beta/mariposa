import { SQLConversionHelpers } from './SQLConversionHelpers'
import { Table, Column } from '../types/DBResponseTypes';
const { checkIsTableJoin, fieldValueCreator, inObjectTypeCase } = SQLConversionHelpers;

// IF IN JOIN TABLE IT's an [TYPE], othersie TYPE
export const GQLObjectTypeCreator = (tableObject: Table): string => {
  const { tablename, columns } = tableObject;
  let type = "";
  if (checkIsTableJoin(columns)) {
    return '';
  } else {
    type += `type ${inObjectTypeCase(tablename)} {\n`;
    columns.forEach((columnObj: Column) => {
      const { column_name, constraint_type, primary_table } = columnObj;
      if (constraint_type === 'FOREIGN KEY' && primary_table) {
        type += ` ${primary_table}: ${inObjectTypeCase(primary_table)}\n`
      } else {
        type += ` ${column_name}: ${fieldValueCreator(columnObj)}\n`
      }
    });
  }
  type += '}\n';

  return type;
}

