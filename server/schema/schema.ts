import { makeExecutableSchema } from '@graphql-tools/schema';
import { IResolvers } from '@graphql-tools/utils';
import db from '../models/projectDB';
import resolverMaker from "../SQLConversion/resolverMaker";
import { GraphQLSchema } from "graphql/type/schema";
import { resolverStringMaker } from "../SQLConversion/resolverStringMaker";
import { typeDefMaker } from "../SQLConversion/typeDefMaker";
import { tables } from '../types/dummyTables';

const resolvers: IResolvers = resolverMaker.generateResolvers(tables, db);

const typeDefs = typeDefMaker.generateTypes(tables);
console.log(typeDefs);

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})