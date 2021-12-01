import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { QueryResult } from "pg";
import { makeExecutableSchema } from 'graphql-tools';
import db from '../models/projectDB';

const PersonType: GraphQLObjectType = new GraphQLObjectType({
  name: "Person",
  fields: () => ({
    _id: { type: GraphQLInt },
    name: { type: GraphQLString },
    mass: { type: GraphQLInt },
    hair_color: { type: GraphQLString },
    skin_color: { type: GraphQLString },
    eye_color: { type: GraphQLString },
    birth_year: { type: GraphQLString },
    gender: { type: GraphQLString },
    species_id: { type: GraphQLInt },
    homeworld: {
      type: PlanetType,
      async resolve(parent, args) {
        try {
          const result = await Queries.planet(parent.homeworld_id)
          return result.rows[0];
        } catch (err) {
          console.log(err);
        }
      }
    },
    height: { type: GraphQLInt },
  })
});

const PlanetType: GraphQLObjectType = new GraphQLObjectType({
  name: "Planet",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    rotation_period: { type: GraphQLInt },
    orbital_period: { type: GraphQLInt },
    diameter: { type: GraphQLInt },
    climate: { type: GraphQLString },
    gravity: { type: GraphQLString },
    terrain: { type: GraphQLString },
    surface_water: { type: GraphQLString },
    population: { type: GraphQLString },
    // residents: {
    //   type: new GraphQLList(PersonType),
    //   async resolve(parent, args) {
    //     try {
    //       const result = await Queries.planet(homeworld_id, parent._id)
    //       return result.rows;
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    // },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    person: {
      type: PersonType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        try {
          const result = await Queries.person(args.id)
          return result.rows[0];
        } catch (err) {
          console.log(err);
        }
      }
    },
    planet: {
      type: PlanetType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        try {
          const result = await Queries.planet(args.id)
          return result.rows[0];
        } catch (err) {
          console.log(err);
        }
      }
    },
    people: {
      type: GraphQLList(PersonType),
      async resolve(parent, args) {
        try {
          const result = await Queries.people();
          return result.rows;
        } catch (err) {
          console.log(err);
        }
      }
    },
    planets: {
      type: GraphQLList(PlanetType),
      async resolve(parent, args) {
        try {
          const result = await Queries.planets();
          return result.rows;
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
});

// TODO - Abstract this so that table gets passed in as arg
const Queries = {
  //TODO get args of any to be more strongly typed
  person: (id: number | string): Promise<QueryResult> => {
    const query = `SELECT * FROM people WHERE _id = $1`;
    const values = [id.toString()];
    return db.query(query, values);
  },

  people: (): Promise<QueryResult> => {
    const query = `SELECT * FROM people`;
    return db.query(query);
  },
  
  planet: (id: number | string): Promise<QueryResult> => {
    const query = `SELECT * FROM planets WHERE _id = $1`;
    return db.query(query, [id.toString()]);
  },
  
  planets: (): Promise<QueryResult> => {
    const query = `SELECT * FROM planets`;
    return db.query(query);
  },

}

const Mutation: GraphQLObjectType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPerson: {
      type: PersonType,
      args: {
        name: { type: GraphQLString },
        mass: { type: GraphQLInt },
        hair_color: { type: GraphQLString },
        skin_color: { type: GraphQLString },
        eye_color: { type: GraphQLString },
        birth_year: { type: GraphQLString },
        gender: { type: GraphQLString },
        species_id: { type: GraphQLInt },
        homeworld_id: { type: GraphQLID },
        height: { type: GraphQLInt },
      }
    },
  }
});

// const schema = new GraphQLSchema({
//   query: RootQuery,
//   mutation: Mutation,
// });

const typeDefs = `
  type People {
    _id: Int!
    name: String!
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    species_id: Int
    homeworld_id: Int
    height: Int
  }

  type Query {
    people: [People]
  }
`
const resolvers = {
  Query: {
    people: async () => {
      try {
        const result = await Queries.people();
        // console.log(result.rows);
        return result.rows;
      }
      catch(err) {
        console.log(err);
      }
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default schema;


