import { SQLConversionHelpers } from './SQLConversionHelpers'
import { Table, Column } from '../types/DBResponseTypes';
const {checkIsTableJoin, fieldValueCreator, inObjectTypeCase, queryPluralCase, querySingularCase} = SQLConversionHelpers;


export const GQLMutationTypeCreator = (tableObject: Table): string => {
    const {tablename, columns} = tableObject;
    let mutationType = '';
    if(checkIsTableJoin(columns)){
      return '';
    } else { 
      const typeObject = inObjectTypeCase(tablename);
      let mutationFields = ''
      let primaryKey;
      columns.forEach((columnObj: Column) => {
        const{column_name, constraint_type} = columnObj;
        if(constraint_type === "PRIMARY KEY") primaryKey = column_name;
        mutationFields += `\n  ${column_name}: ${fieldValueCreator(columnObj)},`;
      });
      mutationFields = mutationFields.substring(0, mutationFields.length - 1)
      const addMutation = `\n add${typeObject}(${mutationFields}): ${typeObject}!\n`;
      const updateMutation = `\n update${typeObject}(${mutationFields}): ${typeObject}!\n`;
      const deleteMutation =`\n delete${typeObject}(${primaryKey}: ID!): ${typeObject}!\n`;
      //remove ending comma and replace with '): [typeObject]'
      mutationType = addMutation + updateMutation + deleteMutation;
    }
    return mutationType;
  }

