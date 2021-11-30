import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
const app = express();
export const PORT = 3000;
//require in routers
import mariposaRouter from './routes/mariposa';
import projectRouter from './routes/project';
// gql shit
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema';

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

app.use("*", (req: Request, res: Response) => {
  return res.status(404).send("Error, path not found");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const errorObj = {
    log: "global error handler in express app",
    message: { err: "global error handler in express app" },
  };
  const errorObject = Object.assign({}, errorObj, err);
  console.log(errorObject);
  return res.status(500).json(errorObject);
});

//////////

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
  });
}

export default app;