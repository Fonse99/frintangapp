import { Injectable } from '@angular/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite';
import { tables } from './app.database';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;

  constructor() {}

  async initDb() {
    try {
      const isConn = await this.sqlite.isConnection('fritang-app', false);

      if (!isConn.result) {
        const dbExists = await this.sqlite.isDatabase('fritang-app');

        if (!dbExists) {
          this.createDatabase();
        }

        this.db = await this.sqlite.createConnection(
          'fritang-app',
          false,
          'no-encryption',
          1,
          false
        );
      } else {
        // Se recupera la conexión a BD
        this.db = await this.sqlite.retrieveConnection('fritang-app', false);
      }

      this.db.open();
    } catch (error) {
      console.error('Error al inicializar la base de datos:', error);
    }
  }

  async getDBConnection() {
    if (!this.db) {
      await this.initDb();
    }

    return this.db;
  }

  async createDatabase() {
    this.db = await this.sqlite.createConnection(
      'fritang-app',
      false,
      'no-encryption',
      1,
      false
    );

    this.db.open();

    let tableCreation = tables.reduce((p, c, i) => p + '\n\n' + c);
    console.log(tableCreation);
    await this.db.execute(tableCreation);
  }

  async loadUsers() {
    const loadUser = `SELECT * FROM users;`;
    const users = await this.db.query(loadUser);
    return users.values || [];
  }

  async crateUser(name: string, username: string, password: string) {
    const createUser = `INSERT INTO 
    users (name, username, password)
    VALUES (?, ?, ?);`;

    // const result = await this.db.execute(createUser);
    const result = await this.db.run(
      createUser,
      [name, username, password],
      true
    );

    console.log('Resultado del Insert: ' + result.changes?.values);
  }
}
