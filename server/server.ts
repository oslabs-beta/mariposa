import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import mariposaRouter from './routes/mariposa';
import projectRouter from './routes/project';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema'; // TODO figure out how to build schema later
/*require in routers: mariposaRouter for app requests / projectRouter 
for user db/graphql migration*/
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/mariposa', mariposaRouter);
app.use('/project', projectRouter);
app.use('/graphql', graphqlHTTP({ // include graphiql here for sandbox
  schema,
  graphiql: true,
}));

if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../dist/index.html'));
  });
  app.use('/js', express.static(path.resolve(__dirname, '../dist/js')));
}

//*****is this needed? We're creating a desktop app
app.use("*", (req: Request, res: Response) => {
  return res.status(404).send("Error, path not found");
});

//global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
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