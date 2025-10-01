export interface UserType {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "superAdmin" | "admin" | "manager" | "user";
}

export const users: UserType[] = [
  {
    id: 1,
    name: "Super Admin",
    email: "superadmin@example.com",
    password: "super123",
    role: "superAdmin",
  },
  {
    id: 2,
    name: "Admin One",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: 3,
    name: "Manager One",
    email: "manager@example.com",
    password: "manager123",
    role: "manager",
  },
  {
    id: 4,
    name: "Customer One",
    email: "user@example.com",
    password: "user123",
    role: "user",
  },
];
