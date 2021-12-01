const { buildSchema } = require('graphql');
import { SQLConversionHelpers } from './SQLConversionHelpers'
import { Table, Column } from '../types/Table';
const {fieldValueCreator, inPascalCase} = SQLConversionHelpers;


export const GQLTypeCreator = (tableObject: any) => {
    const {tablename, columns} = tableObject;    
    const result = `type ${inPascalCase(tablename)}`;
    console.log(result);
  }

