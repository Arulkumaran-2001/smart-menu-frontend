export interface Rolepermissions {
  [key:string] : string[];
}

export const rolePermissions: Rolepermissions  = {
  superAdmin: ['All'],
  admin: ['Dashboard', 'Orders', 'Products', 'Categories', 'Users', 'Settings'],
  manager: ['Dashboard', 'Orders', 'Products', 'Categories'],
  user: ["menu", "cart", "profile"],
}