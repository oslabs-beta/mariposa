const { buildSchema } = require('graphql');
import { Table } from '../types/Table';



export const gqlHelperFunctions = {
  //arrayOfTableObjects.array.forEach((tableObject: { [key: number]: Table }) => {

   gqlTypeCreator(tableObject: { [key: string]: Table }): void{
    const{tablename, columns} = tableObject;
    console.log(tablename);
  }

}