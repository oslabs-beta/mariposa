export const types = `
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
  species(_id: ID!): Species!
  starshipSpecs: [StarshipSpec]!
  starshipSpec(_id: ID!): StarshipSpec!
  vessels: [Vessel]!
  vessel(_id: ID!): Vessel!
 }
`