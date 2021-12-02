export const tables = [
  // {
  //   "tablename": "films",
  //   "columns": [
  //     {
  //       "column_id": 1,
  //       "column_name": "_id",
  //       "data_type": "integer",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": "nextval('films__id_seq'::regclass)",
  //       "constraint_name": "films_pk",
  //       "constraint_type": "PRIMARY KEY",
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 2,
  //       "column_name": "title",
  //       "data_type": "character varying",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 3,
  //       "column_name": "episode_id",
  //       "data_type": "integer",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 4,
  //       "column_name": "opening_crawl",
  //       "data_type": "character varying",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 5,
  //       "column_name": "director",
  //       "data_type": "character varying",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 6,
  //       "column_name": "producer",
  //       "data_type": "character varying",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 7,
  //       "column_name": "release_date",
  //       "data_type": "date",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     }
  //   ]
  // },
  {
    "tablename": "people",
    "columns": [
      {
        "column_id": 1,
        "column_name": "_id",
        "data_type": "integer",
        "is_nullable": "NO",
        "is_updatable": "YES",
        "column_default": "nextval('people__id_seq'::regclass)",
        "constraint_name": "people_pk",
        "constraint_type": "PRIMARY KEY",
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 2,
        "column_name": "name",
        "data_type": "character varying",
        "is_nullable": "NO",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 3,
        "column_name": "mass",
        "data_type": "character varying",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 4,
        "column_name": "hair_color",
        "data_type": "character varying",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 5,
        "column_name": "skin_color",
        "data_type": "character varying",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 6,
        "column_name": "eye_color",
        "data_type": "character varying",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 7,
        "column_name": "birth_year",
        "data_type": "character varying",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 8,
        "column_name": "gender",
        "data_type": "character varying",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 9,
        "column_name": "species_id",
        "data_type": "bigint",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": "people_fk0",
        "constraint_type": "FOREIGN KEY",
        "primary_table": "species",
        "primary_column": "_id"
      },
      {
        "column_id": 10,
        "column_name": "homeworld_id",
        "data_type": "bigint",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": "people_fk1",
        "constraint_type": "FOREIGN KEY",
        "primary_table": "planets",
        "primary_column": "_id"
      },
      {
        "column_id": 11,
        "column_name": "height",
        "data_type": "integer",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      }
    ]
  },
  // {
  //   "tablename": "people_in_films",
  //   "columns": [
  //     {
  //       "column_id": 1,
  //       "column_name": "_id",
  //       "data_type": "integer",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": "nextval('people_in_films__id_seq'::regclass)",
  //       "constraint_name": "people_in_films_pk",
  //       "constraint_type": "PRIMARY KEY",
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 2,
  //       "column_name": "person_id",
  //       "data_type": "bigint",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": "people_in_films_fk0",
  //       "constraint_type": "FOREIGN KEY",
  //       "primary_table": "people",
  //       "primary_column": "_id"
  //     },
  //     {
  //       "column_id": 3,
  //       "column_name": "film_id",
  //       "data_type": "bigint",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": "people_in_films_fk1",
  //       "constraint_type": "FOREIGN KEY",
  //       "primary_table": "films",
  //       "primary_column": "_id"
  //     }
  //   ]
  // },
  // {
  //   "tablename": "pilots",
  //   "columns": [
  //     {
  //       "column_id": 1,
  //       "column_name": "_id",
  //       "data_type": "integer",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": "nextval('pilots__id_seq'::regclass)",
  //       "constraint_name": "pilots_pk",
  //       "constraint_type": "PRIMARY KEY",
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 2,
  //       "column_name": "person_id",
  //       "data_type": "bigint",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": "pilots_fk0",
  //       "constraint_type": "FOREIGN KEY",
  //       "primary_table": "people",
  //       "primary_column": "_id"
  //     },
  //     {
  //       "column_id": 3,
  //       "column_name": "vessel_id",
  //       "data_type": "bigint",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": "pilots_fk1",
  //       "constraint_type": "FOREIGN KEY",
  //       "primary_table": "vessels",
  //       "primary_column": "_id"
  //     }
  //   ]
  // },
  // {
  //   "tablename": "planets",
  //   "columns": [
  //     {
  //       "column_id": 1,
  //       "column_name": "_id",
  //       "data_type": "integer",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": "nextval('planets__id_seq'::regclass)",
  //       "constraint_name": "planets_pk",
  //       "constraint_type": "PRIMARY KEY",
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 2,
  //       "column_name": "name",
  //       "data_type": "character varying",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 3,
  //       "column_name": "rotation_period",
  //       "data_type": "integer",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 4,
  //       "column_name": "orbital_period",
  //       "data_type": "integer",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 5,
  //       "column_name": "diameter",
  //       "data_type": "integer",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 6,
  //       "column_name": "climate",
  //       "data_type": "character varying",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 7,
  //       "column_name": "gravity",
  //       "data_type": "character varying",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 8,
  //       "column_name": "terrain",
  //       "data_type": "character varying",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 9,
  //       "column_name": "surface_water",
  //       "data_type": "character varying",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 10,
  //       "column_name": "population",
  //       "data_type": "bigint",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     }
  //   ]
  // },
  // {
  //   "tablename": "planets_in_films",
  //   "columns": [
  //     {
  //       "column_id": 1,
  //       "column_name": "_id",
  //       "data_type": "integer",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": "nextval('planets_in_films__id_seq'::regclass)",
  //       "constraint_name": "planets_in_films_pk",
  //       "constraint_type": "PRIMARY KEY",
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 2,
  //       "column_name": "film_id",
  //       "data_type": "bigint",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": "planets_in_films_fk0",
  //       "constraint_type": "FOREIGN KEY",
  //       "primary_table": "films",
  //       "primary_column": "_id"
  //     },
  //     {
  //       "column_id": 3,
  //       "column_name": "planet_id",
  //       "data_type": "bigint",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": "planets_in_films_fk1",
  //       "constraint_type": "FOREIGN KEY",
  //       "primary_table": "planets",
  //       "primary_column": "_id"
  //     }
  //   ]
  // },
  {
    "tablename": "species",
    "columns": [
      {
        "column_id": 1,
        "column_name": "_id",
        "data_type": "integer",
        "is_nullable": "NO",
        "is_updatable": "YES",
        "column_default": "nextval('species__id_seq'::regclass)",
        "constraint_name": "species_pk",
        "constraint_type": "PRIMARY KEY",
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 2,
        "column_name": "name",
        "data_type": "character varying",
        "is_nullable": "NO",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 3,
        "column_name": "classification",
        "data_type": "character varying",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 4,
        "column_name": "average_height",
        "data_type": "character varying",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 5,
        "column_name": "average_lifespan",
        "data_type": "character varying",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 6,
        "column_name": "hair_colors",
        "data_type": "character varying",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 7,
        "column_name": "skin_colors",
        "data_type": "character varying",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 8,
        "column_name": "eye_colors",
        "data_type": "character varying",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 9,
        "column_name": "language",
        "data_type": "character varying",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": null,
        "constraint_type": null,
        "primary_table": null,
        "primary_column": null
      },
      {
        "column_id": 10,
        "column_name": "homeworld_id",
        "data_type": "bigint",
        "is_nullable": "YES",
        "is_updatable": "YES",
        "column_default": null,
        "constraint_name": "species_fk0",
        "constraint_type": "FOREIGN KEY",
        "primary_table": "planets",
        "primary_column": "_id"
      }
    ]
  },
  // {
  //   "tablename": "species_in_films",
  //   "columns": [
  //     {
  //       "column_id": 1,
  //       "column_name": "_id",
  //       "data_type": "integer",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": "nextval('species_in_films__id_seq'::regclass)",
  //       "constraint_name": "species_in_films_pk",
  //       "constraint_type": "PRIMARY KEY",
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 2,
  //       "column_name": "film_id",
  //       "data_type": "bigint",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": "species_in_films_fk0",
  //       "constraint_type": "FOREIGN KEY",
  //       "primary_table": "films",
  //       "primary_column": "_id"
  //     },
  //     {
  //       "column_id": 3,
  //       "column_name": "species_id",
  //       "data_type": "bigint",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": "species_in_films_fk1",
  //       "constraint_type": "FOREIGN KEY",
  //       "primary_table": "species",
  //       "primary_column": "_id"
  //     }
  //   ]
  // },
  // {
  //   "tablename": "starship_specs",
  //   "columns": [
  //     {
  //       "column_id": 1,
  //       "column_name": "_id",
  //       "data_type": "integer",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": "nextval('starship_specs__id_seq'::regclass)",
  //       "constraint_name": "starship_specs_pk",
  //       "constraint_type": "PRIMARY KEY",
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 2,
  //       "column_name": "hyperdrive_rating",
  //       "data_type": "character varying",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 3,
  //       "column_name": "MGLT",
  //       "data_type": "character varying",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 4,
  //       "column_name": "vessel_id",
  //       "data_type": "bigint",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": "starship_specs_fk0",
  //       "constraint_type": "FOREIGN KEY",
  //       "primary_table": "vessels",
  //       "primary_column": "_id"
  //     }
  //   ]
  // },
  // {
  //   "tablename": "vessels",
  //   "columns": [
  //     {
  //       "column_id": 1,
  //       "column_name": "_id",
  //       "data_type": "integer",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": "nextval('vessels__id_seq'::regclass)",
  //       "constraint_name": "vessels_pk",
  //       "constraint_type": "PRIMARY KEY",
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 2,
  //       "column_name": "name",
  //       "data_type": "character varying",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 3,
  //       "column_name": "manufacturer",
  //       "data_type": "character varying",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 4,
  //       "column_name": "model",
  //       "data_type": "character varying",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 5,
  //       "column_name": "vessel_type",
  //       "data_type": "character varying",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 6,
  //       "column_name": "vessel_class",
  //       "data_type": "character varying",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 7,
  //       "column_name": "cost_in_credits",
  //       "data_type": "bigint",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 8,
  //       "column_name": "length",
  //       "data_type": "character varying",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 9,
  //       "column_name": "max_atmosphering_speed",
  //       "data_type": "character varying",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 10,
  //       "column_name": "crew",
  //       "data_type": "integer",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 11,
  //       "column_name": "passengers",
  //       "data_type": "integer",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 12,
  //       "column_name": "cargo_capacity",
  //       "data_type": "character varying",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 13,
  //       "column_name": "consumables",
  //       "data_type": "character varying",
  //       "is_nullable": "YES",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": null,
  //       "constraint_type": null,
  //       "primary_table": null,
  //       "primary_column": null
  //     }
  //   ]
  // },
  // {
  //   "tablename": "vessels_in_films",
  //   "columns": [
  //     {
  //       "column_id": 1,
  //       "column_name": "_id",
  //       "data_type": "integer",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": "nextval('vessels_in_films__id_seq'::regclass)",
  //       "constraint_name": "vessels_in_films_pk",
  //       "constraint_type": "PRIMARY KEY",
  //       "primary_table": null,
  //       "primary_column": null
  //     },
  //     {
  //       "column_id": 2,
  //       "column_name": "vessel_id",
  //       "data_type": "bigint",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": "vessels_in_films_fk0",
  //       "constraint_type": "FOREIGN KEY",
  //       "primary_table": "vessels",
  //       "primary_column": "_id"
  //     },
  //     {
  //       "column_id": 3,
  //       "column_name": "film_id",
  //       "data_type": "bigint",
  //       "is_nullable": "NO",
  //       "is_updatable": "YES",
  //       "column_default": null,
  //       "constraint_name": "vessels_in_films_fk1",
  //       "constraint_type": "FOREIGN KEY",
  //       "primary_table": "films",
  //       "primary_column": "_id"
  //     }
  //   ]
  // }
]
