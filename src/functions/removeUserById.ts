import type { User } from "@customTypes/userType";

export const removeUserById = function(users: User[], idToRemove: string): User[] {
  return users.filter(user => user.id !== idToRemove);
}
