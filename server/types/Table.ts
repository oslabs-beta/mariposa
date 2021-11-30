export interface Table {
  tablename: string,
  columns: Column[]
}

export interface Column {
  column_name: string,
  data_type: string, // make an enumorator to convert to TS data types
  is_nullable: string, // make boolean
  is_updatable: string, // make boolean
  column_default: string | null,
}

