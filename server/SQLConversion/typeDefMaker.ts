import { Table } from "../types/Table";
import { GQLMutationTypeCreator } from "./GQLMutationTypeCreator";
import { GQLObjectTypeCreator } from "./GQLObjectTypeCreator";
import { GQLQueryTypeCreator } from "./GQLQueryTypeCreator";

export const typeDefMaker = {
  generateTypes(tables: Table[]): string {
    let typeDefs = '';
    typeDefs += tables.reduce((acc: string, table: Table) => {
      acc += GQLObjectTypeCreator(table);
      return acc;
    }, '');

    let queryTypes = 'type Query {';
    tables.forEach((table: Table) => {
      queryTypes += GQLQueryTypeCreator(table);
    });
    queryTypes += '\n}';
    typeDefs += queryTypes;

    let mutationTypes = `\ntype Mutation {`;
    tables.forEach((table: Table) => {
      mutationTypes += GQLMutationTypeCreator(table);
    });
    mutationTypes = mutationTypes.substring(0, mutationTypes.length - 1) + '\n}';
    typeDefs += mutationTypes;

    return typeDefs;
  }
}