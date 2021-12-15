import express, { Request, Response, NextFunction } from 'express';
import { graphqlHTTP } from 'express-graphql';
import path from 'path';
import mariposaRouter from './routes/mariposa';
import projectRouter from './routes/project';
import { schema } from './schema/schema';
/*require in routers: mariposaRouter for app requests / projectRouter 
for user db/graphql migration*/
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;
const GRAPHQL_PORT = 3001;

const graphiql = graphqlHTTP({
  schema,
  graphiql: true
});

// let graphQLServer;
// function createGraphQLServer(callback) {
//   if (graphQLServer) {
//     graphQLServer.close();
//     delete require.cache[path.resolve('./data/database.js')];
//     delete require.cache[path.resolve('./data/schema.js')];
//   }
//   const {Schema} = require('./data/schema');
//   const graphQLApp = express();
//   graphQLApp.use('/', graphQLHTTP({
//     graphiql: true,
//     pretty: true,
//     schema: Schema,
//   }));
//   graphQLServer = graphQLApp.listen(GRAPHQL_PORT, () => {
//     console.log(
//       `GraphQL server is now running on http://localhost:${GRAPHQL_PORT}`
//     );
//     if (callback) {
//       callback();
//     }
//   });
// }
// const watcher = chokidar.watch('./data/{database,schema}.js');
// watcher.on('change', path => {
//   console.log(`\`${path}\` changed. Restarting the GraphQL server.`);
//   createGraphQLServer(() =>
//     console.log('Restart your browser to use the updated schema.')
//   );
// });
// createGraphQLServer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/mariposa/auth', mariposaRouter);
app.use('/project', projectRouter);
app.use('/graphql', graphiql);

if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../dist/index.html'));
  });
  app.use('/js', express.static(path.resolve(__dirname, '../dist/js')));
};

app.use("*", (req: Request, res: Response) => {
  return res.status(404).send("Error, path not found");
});

//global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const errorObj = {
    log: "global error handler in express app",
    message: { err: "global error handler in express app" },
  };
  const errorObject = Object.assign({}, errorObj, err);
  console.log(errorObject);
  return res.status(500).json(errorObject);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
  });
}

export default app;