use serde::Serialize;


#[derive(Serialize)]
pub struct Person {
    pub people_id: i32,
    pub full_name: String,
    pub birthdate: String,
    pub gender: String,
    pub address: String,
}