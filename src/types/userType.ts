export interface User {
  id: `${string}-${string}-${string}-${string}-${string}`,
  profilePhotoURL: string;
  enrollment: number;
  email: string;
  passwrd: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  createdAt: Date;
}