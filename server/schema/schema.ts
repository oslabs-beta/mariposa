import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import _ from 'lodash';
import { QueryResult } from "pg";
import { ids } from "webpack";
import db from '../models/database';

// dummy data
const people = [
  {
    "_id": "1",
    "name": "Luke Skywalker",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "species_id": "1",
    "homeworld_id": "1",
    "height": 172
  },
  {
    "_id": "2",
    "name": "C-3PO",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
    "species_id": "2",
    "homeworld_id": "1",
    "height": 167
  },
  {
    "_id": "3",
    "name": "R2-D2",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a",
    "species_id": "2",
    "homeworld_id": "8",
    "height": 96
  }
];

const planets = [
  {
    "_id": "1",
    "name": "Tatooine",
    "rotation_period": 23,
    "orbital_period": 304,
    "diameter": 10465,
    "climate": "arid",
    "gravity": "1 standard",
    "terrain": "desert",
    "surface_water": "1",
    "population": "200000"
  },
  {
    "_id": "8",
    "name": "Naboo",
    "rotation_period": 26,
    "orbital_period": 312,
    "diameter": 12120,
    "climate": "temperate",
    "gravity": "1 standard",
    "terrain": "grassy hills, swamps, forests, mountains",
    "surface_water": "12",
    "population": "4500000000"
  }
]



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

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

export default schema;