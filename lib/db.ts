
import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.resolve(process.cwd(), 'db.sqlite'));

db.exec(`
  CREATE TABLE IF NOT EXISTS post (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    name TEXT UNIQUE,
    email TEXT, 
    description TEXT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;
