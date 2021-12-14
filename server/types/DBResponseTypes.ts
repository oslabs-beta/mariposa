// interface that follows the structure of D3 data
export interface D3Data {
  name: string,
  children: D3Data[]
  attributes?: {[key: string]: string},
}

export class D3Schema implements D3Data {
  name: string;
  children: D3Table[];
  attributes?: {[key: string]: string};

  constructor(name: string, children: D3Table[], attributes?: {[key: string]: string}) {
    this.name = name,
    this.attributes = attributes,
    this.children = children 
  }
}

export class D3Table implements D3Data {
  name: string;
  children: D3Column[];
  attributes?: {[key: string]: string};

  constructor(name: string, children: D3Column[], attributes?: {[key: string]: string}) {
    this.name = name,
    this.attributes = attributes,
    this.children = children
  }
}

export class D3Column implements D3Data {
  name: string;
  children: D3Data[];
  attributes: {
    data_type: string,
    constraint?: string
  };

  constructor(name: string, attributes: {data_type: string, constraint?: string}, children: D3Column[] = []) {
    this.name = name,
    this.attributes = attributes,
    this.children = children
  }
}

/*
Used in rowsToTable helper function in getAllTables method found in projectDBController.
Used to return an array of Table objects.    
*/
export interface Table {
  tablename: string 
  columns: Column[] // contains columns associated with a given SQL table
}

//includes relevant columns from the INFORMATION_SCHEMA_COLUMNS in SQL server 
export interface Column {
  column_id: number,
  column_name: string,
  data_type: string, 
  is_nullable: string, 
  is_updatable: string, 
  column_default: string | null,
  constraint_name: string | null,
  constraint_type: string | null,
  primary_table: string | null,
  primary_column: string | null, 
}

export interface DBQueryResponse extends Column {
  schema: string,
  tablename: string,
}