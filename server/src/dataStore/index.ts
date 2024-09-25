import { UserDao } from "./dao/UserDao";
import { sqlDataStore } from "./sql";

export interface DataStore extends UserDao {}

export let db: DataStore;

export async function initDB() {
  db = await new sqlDataStore().openDb();
}
