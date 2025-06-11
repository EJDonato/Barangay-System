use rusqlite::{Connection, Result};
use crate::models::Person;


#[tauri::command]
pub fn get_person_by_name(name: String) -> Result<Vec<Person>, String> {
    // Open the db
    let db = Connection::open("../database/cases.db")
        .map_err(|e| e.to_string())?;

    
    // SQL query
    let mut statement = database.prepare(
        "SELECT * FROM people WHERE LOWER(full_name) = LOWER(?1)"
    ).map_err(|e| e.to_string())?;
}