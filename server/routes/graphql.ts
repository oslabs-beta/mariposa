import { makeExecutableSchema } from '@graphql-tools/schema';
import { IResolvers } from '@graphql-tools/utils';
import express, { Request, Response, NextFunction, Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';


class GQLRouter {
  // router: Router;
  schema?: GraphQLSchema


  updateSchema(typeDefs: string, resolvers: IResolvers) {
    console.log("SCHEMA TYPES", typeDefs);
    console.log("SCHEMA RESOLVERS", resolvers);
    this.schema = makeExecutableSchema({
      typeDefs,
      resolvers
    });
  }
}
export const schema = new GQLRouter();

class GlobalRouterVariables {
  typeDefs?: string;
  resolvers?: IResolvers
  endpoint?: any
  
  updateTypeDefs(typeDefs: string) {
    this.typeDefs = typeDefs;
    console.log("Global Type Defs", this.typeDefs)
  }
  updateResolvers(resolver: IResolvers) {
    this.resolvers = resolver;
    console.log("Global Resolvers", this.resolvers)
  }
  updateEndPoint(typeDefs: string, resolvers: IResolvers) {
    this.endpoint = graphqlHTTP({
      schema: makeExecutableSchema({
        typeDefs,
        resolvers,
      }),
      graphiql: true,
    });
  }
}

export const globalRouterVars = new GlobalRouterVariables();


const gqlRouter = express.Router();


gqlRouter.use('/', (req: Request, res: Response, next: NextFunction) => {
  const {typeDefs, resolvers, endpoint} = globalRouterVars
  if(typeDefs && resolvers) {
    res.redirect(globalRouterVars.endpoint);
  } 
  else return res.status(404).send("No GraphQL Schema Available");
});


export default gqlRouter;
