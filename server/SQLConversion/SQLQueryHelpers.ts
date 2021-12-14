//helper function to shape response array of Table objects
/***modified queryResult to type any[]***/

import {DBQueryResponse, Table } from '../types/Table';

export default function rowsToTable(queryResult: any[]): Table[] {
  const tablesObject = queryResult.reduce((tablesObject: { [key: string]: Table }, curr: DBQueryResponse) => {
    const { tablename, column_id, column_name, data_type, is_nullable, is_updatable, column_default, constraint_name, constraint_type, primary_table, primary_column } = curr;
    //check to see if tablesObject has a tablename property
    if (!tablesObject.hasOwnProperty(tablename)) {
      //if falsy, create a tablename property and assign it to an object with tablename and columns properties
      tablesObject[tablename] = {
        tablename: tablename,
        columns: [],
      }
    }
    /*if tablename is a property of tablesObject, then bundle the associated columns in an object 
    and push them into a columns array*/
    tablesObject[tablename].columns.push({
      column_id,
      column_name,
      data_type,
      is_nullable,
      is_updatable,
      column_default,
      constraint_name,
      constraint_type,
      primary_table,
      primary_column
    });
    return tablesObject;
  }, {});
  return Object.values(tablesObject);
}