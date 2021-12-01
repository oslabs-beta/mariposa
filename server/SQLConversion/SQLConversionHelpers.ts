import { Table, Column } from '../types/Table';

function checkIsNullable(isNullable: any){
  return isNullable === "NO" ? '!' : ''; 
}

export const SQLConversionHelpers = {
  //given a column object, returns a supported GrapqhQL datatype with field nullability
  fieldValueCreator(columnObject: any){
    const{data_type, is_nullable} = columnObject;
    
    const dataTypeConversion: any = {
      'bigint': 'Int',
      'boolean': 'Boolean',
      'character': 'String',
      'character varying': 'String',
      'date': 'String',
      'integer': 'Int',
      'numeric': 'Int',
      'json': 'JSON',
      'smallint': 'Int',
      'timestamp with time zone': 'String',
      'timestamp without time zone': 'String'
    }
    //if SQL datatype not included in dataTypeConversion object, return undefined
    const gqlDataType = dataTypeConversion[data_type];
    //check for nullability only if gqlDataType is defined
    const nullable = gqlDataType ? checkIsNullable(is_nullable) : '';

    return `${gqlDataType}${nullable}`;
  },
  //given a table name, converts to Pascal case as per Type names naming convention  
  inPascalCase(tablename : any){
    return tablename[0].toUpperCase() + tablename.substring(1).toLowerCase(); 
   }
}