const pluralize = require('pluralize');
const { singular } = pluralize;
import { Table, Column } from '../types/Table';


function checkIsNullable(isNullable: string): string {
  return isNullable === "NO" ? '!' : '';
}

function inPascalCase(tablename: string): string {
  const regex = /(^|_)./g;
  return tablename.replace(regex, (str: string) => str.slice(-1).toUpperCase());
}

export const SQLConversionHelpers = {
  //given a column object, returns a supported GrapqhQL datatype with field nullability
  checkIsTableJoin(columnsArr: Column[]): boolean {
    let foreignKeyCount = 0;
    columnsArr.forEach((columnsObj: Column) => {
      const { constraint_type } = columnsObj;
      if (constraint_type === 'FOREIGN KEY') foreignKeyCount++;
    })
    return foreignKeyCount === columnsArr.length - 1 ? true : false;
  },

  fieldValueCreator(columnObject: Column): string {
    const { data_type, is_nullable, constraint_type } = columnObject;
    if (constraint_type === 'PRIMARY KEY' || constraint_type === 'FOREIGN KEY') return 'ID' + checkIsNullable(is_nullable); // CHECK IF IT's KEY OR NOT
    const dataTypeConversion: { [key: string]: string } = {
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
    return  gqlDataType + checkIsNullable(is_nullable);
  },
  //given a table name, converts to Pascal case as per Type names naming convention  
  inObjectTypeCase(tablename: string): string {
    const pascalizedName = inPascalCase(tablename);
    return singular(pascalizedName);
  },
  queryPluralCase(tablename: string): string {
    let pascalizedName = inPascalCase(tablename);
    return pascalizedName[0].toLowerCase() + pascalizedName.substring(1);
  },
  querySingularCase(tablename: string): string {
    let pascalizedName = inPascalCase(tablename);
    return singular(pascalizedName[0].toLowerCase() + pascalizedName.substring(1));
  }
}