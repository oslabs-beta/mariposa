const { buildSchema } = require('graphql');
import { SQLConversionHelpers } from './SQLConversionHelpers'
import { Table, Column } from '../types/Table';
const {checkIsTableJoin, fieldValueCreator, inObjectTypeCase, queryPluralCase, querySingularCase} = SQLConversionHelpers;


export const GQLMutationTypeCreator = (tableObject: any) => {
    const {tablename, columns} = tableObject;
    let mutationType = '';
    if(checkIsTableJoin(columns)){
      return '';
    } else { 
      const typeObject = inObjectTypeCase(tablename);
      let mutationFields = ''
      let primaryKey;
      columns.forEach((columnObj: any) => {
        const{column_name, constraint_type} = columnObj;
        if(constraint_type === "PRIMARY KEY") primaryKey = column_name;
        mutationFields += `\n ${column_name}: ${fieldValueCreator(columnObj)},`;
      });
      mutationType = `type Mutation {`
      const addMutation = `\n add${typeObject}}(${mutationFields})`;
      const updateMutation = `\n update${typeObject}}(${mutationFields})`;
      const deleteMutation =`\n delete${typeObject}}(${primaryKey}: ID!): ${typeObject}!`;
      //remove ending comma and replace with '): [typeObject]'
    }
    console.log(mutationType)
    return mutationType;
  }

