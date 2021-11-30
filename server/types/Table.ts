/*
Used in rowsToTable helper function in getAllTables method found in projectDBController.
Used to return an array of Table objects.    
*/

export interface Table {
  tablename: string, 
  columns: Column[] // contains columns associated with a given SQL table
}

//includes relevant columns from the INFORMATION_SCHEMA_COLUMNS in SQL server 
export interface Column {
  column_name: string,
  data_type: string, // make an enumorator to convert to TS data types
  is_nullable: string, // make boolean
  is_updatable: string, // make boolean
  column_default: string | null,
}

