import { Column } from '../types/Table';

function checkIsNullable(isNullable){
  return isNullable === "NO" ? '!' : ''; 
}

export const SQLConversionHelpers = {

  fieldValueCreator(columnObject){
    const{data_type, is_nullable} = columnObject;
    const dataTypeConversion = {
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
    
    const gqlDataType = (dataTypeConversion[data_type] || undefined);
    const nullable = gqlDataType ? checkIsNullable(is_nullable) : '';
    const fieldValue = `${gqlDataType} + ${nullable}`;

    return fieldValue;
  },
  inPascalCase({tablename}){
    return tablename[0].toUpperCase() + tablename.substring(1).toLowerCase();
  }
}