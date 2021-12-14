import { QueryResult } from "pg";
import { makeExecutableSchema } from '@graphql-tools/schema';
import { gql } from 'apollo-server-express';
import { IResolvers } from '@graphql-tools/utils';
import db from '../models/projectDB';
import resolverMaker from "../SQLConversion/resolverMaker";
import { tables } from "../types/dummyTables";
import { GraphQLSchema } from "graphql/type/schema";
import { resolverStringMaker } from "../SQLConversion/resolverStringMaker";


const typeDefs = gql`
type Film {
  _id: ID!
  title: String!
  episode_id: Int!
  opening_crawl: String!
  director: String!
  producer: String!
  release_date: String!
 }
 type Person {
  _id: ID!
  name: String!
  mass: String
  hair_color: String
  skin_color: String
  eye_color: String
  birth_year: String
  gender: String
  species: Species
  planets: Planet
  height: Int
 }
 type Planet {
  _id: ID!
  name: String
  rotation_period: Int
  orbital_period: Int
  diameter: Int
  climate: String
  gravity: String
  terrain: String
  surface_water: String
  population: Int
 }
 type Species {
  _id: ID!
  name: String!
  classification: String
  average_height: String
  average_lifespan: String
  hair_colors: String
  skin_colors: String
  eye_colors: String
  language: String
  planets: Planet
 }
 type StarshipSpec {
  _id: ID!
  hyperdrive_rating: String
  MGLT: String
  vessels: Vessel
 }
 type Vessel {
  _id: ID!
  name: String!
  manufacturer: String
  model: String
  vessel_type: String!
  vessel_class: String!
  cost_in_credits: Int
  length: String
  max_atmosphering_speed: String
  crew: Int
  passengers: Int
  cargo_capacity: String
  consumables: String
 }
 type Query {
  films: [Film]!
  film(_id: ID!): Film!
  people: [Person]!
  person(_id: ID!): Person!
  planets: [Planet]!
  planet(_id: ID!): Planet!
  species: [Species]!
  specie(_id: ID!): Species!
  starshipSpecs: [StarshipSpec]!
  starshipSpec(_id: ID!): StarshipSpec!
  vessels: [Vessel]!
  vessel(_id: ID!): Vessel!
 }type Mutation {
  addFilm(
   _id: ID!,
   title: String!,
   episode_id: Int!,
   opening_crawl: String!,
   director: String!,
   producer: String!,
   release_date: String!): Film!
 
  updateFilm(
   _id: ID!,
   title: String!,
   episode_id: Int!,
   opening_crawl: String!,
   director: String!,
   producer: String!,
   release_date: String!): Film!
 
  deleteFilm(_id: ID!): Film!
 
  addPerson(
   _id: ID!,
   name: String!,
   mass: String,
   hair_color: String,
   skin_color: String,
   eye_color: String,
   birth_year: String,
   gender: String,
   species_id: ID,
   homeworld_id: ID,
   height: Int): Person!
 
  updatePerson(
   _id: ID!,
   name: String!,
   mass: String,
   hair_color: String,
   skin_color: String,
   eye_color: String,
   birth_year: String,
   gender: String,
   species_id: ID,
   homeworld_id: ID,
   height: Int): Person!
 
  deletePerson(_id: ID!): Person!
 
  addPlanet(
   _id: ID!,
   name: String,
   rotation_period: Int,
   orbital_period: Int,
   diameter: Int,
   climate: String,
   gravity: String,
   terrain: String,
   surface_water: String,
   population: Int): Planet!
 
  updatePlanet(
   _id: ID!,
   name: String,
   rotation_period: Int,
   orbital_period: Int,
   diameter: Int,
   climate: String,
   gravity: String,
   terrain: String,
   surface_water: String,
   population: Int): Planet!
 
  deletePlanet(_id: ID!): Planet!
 
  addSpecies(
   _id: ID!,
   name: String!,
   classification: String,
   average_height: String,
   average_lifespan: String,
   hair_colors: String,
   skin_colors: String,
   eye_colors: String,
   language: String,
   homeworld_id: ID): Species!
 
  updateSpecies(
   _id: ID!,
   name: String!,
   classification: String,
   average_height: String,
   average_lifespan: String,
   hair_colors: String,
   skin_colors: String,
   eye_colors: String,
   language: String,
   homeworld_id: ID): Species!
 
  deleteSpecies(_id: ID!): Species!
 
  addStarshipSpec(
   _id: ID!,
   hyperdrive_rating: String,
   MGLT: String,
   vessel_id: ID!): StarshipSpec!
 
  updateStarshipSpec(
   _id: ID!,
   hyperdrive_rating: String,
   MGLT: String,
   vessel_id: ID!): StarshipSpec!
 
  deleteStarshipSpec(_id: ID!): StarshipSpec!
 
  addVessel(
   _id: ID!,
   name: String!,
   manufacturer: String,
   model: String,
   vessel_type: String!,
   vessel_class: String!,
   cost_in_credits: Int,
   length: String,
   max_atmosphering_speed: String,
   crew: Int,
   passengers: Int,
   cargo_capacity: String,
   consumables: String): Vessel!
 
  updateVessel(
   _id: ID!,
   name: String!,
   manufacturer: String,
   model: String,
   vessel_type: String!,
   vessel_class: String!,
   cost_in_credits: Int,
   length: String,
   max_atmosphering_speed: String,
   crew: Int,
   passengers: Int,
   cargo_capacity: String,
   consumables: String): Vessel!
 
  deleteVessel(_id: ID!): Vessel!
 }
`;

// TODO IMPORTANT: ensure that column names and type parameters are always the same.

const resolvers: IResolvers = resolverMaker.generateResolvers(tables, db);

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// TODO figure out how to updat this later