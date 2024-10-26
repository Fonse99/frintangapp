// Crear la tabla de usuarios si no existe
const CREATE_USER_TABLE = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    active INTEGER DEFAULT 1
);`;
// Crear la tabla de usuarios si no existe
const CREATE_ORDERS_TABLE = `CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    number INTEGER NOT NULL,
    otro_campo TEXT NOT NULL,
    active INTEGER DEFAULT 1
);`;

const CREATE_BILLING_TABLE = `CREATE TABLE IF NOT EXISTS billing (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    number INTEGER NOT NULL,
    otro_campo TEXT NOT NULL,
    active INTEGER DEFAULT 1
);`;

export const tables = [
  CREATE_USER_TABLE,
  CREATE_ORDERS_TABLE,
  CREATE_BILLING_TABLE,
];
