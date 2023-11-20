import mysql from 'mysql2/promise';

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'root',
  port: 3307,
  password: 'root',
  database: 'fin_tech_api_db'
};
const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG;

const connection = await mysql.createConnection(connectionString);

export class MovementModel {
  static async getByAccount ({ accountId }) {
    const [movements] = await connection.query(
      'SELECT movement_type, amount FROM movements WHERE account_id = ?;',
      [accountId]
    );

    if (movements.length === 0) return null;

    return movements;
  }
}
