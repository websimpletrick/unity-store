import { Database, open } from "sqlite";
import { DataStore } from "..";
import sqlite3 from "sqlite3";
import path from "path";
import { User } from "../../types/type";

export class sqlDataStore implements DataStore {
  private db!: Database<sqlite3.Database, sqlite3.Statement>;

  public async openDb() {
    this.db = await open({
      filename: path.join(__dirname, "unity_store.sqlite"),
      driver: sqlite3.Database,
    });

    await this.db.migrate({
      migrationsPath: path.join(__dirname, "migrations"),
    });

    return this;
  }

  createUser(user: User): Promise<void> {
    console.log(user);
    throw new Error("Method not implemented.");
  }

  deleteUser(id: string): Promise<void> {
    console.log(id);
    throw new Error("Method not implemented.");
  }

  getAllUsers(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

  getUserByEmail(email: string): Promise<User> {
    console.log(email);
    throw new Error("Method not implemented.");
  }

  getUserById(id: string): Promise<User> {
    console.log(id);
    throw new Error("Method not implemented.");
  }

  updateUser(user: User): Promise<void> {
    console.log(user);
    throw new Error("Method not implemented.");
  }
}
