import { User } from "../../types/type";

export interface UserDao {
  createUser(user: User): Promise<void>;
  getUserById(id: string): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
  updateUser(user: User): Promise<void>;
  deleteUser(id: string): Promise<void>;
  getAllUsers(): Promise<User[]>;
}
