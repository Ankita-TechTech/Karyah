import mysql from 'mysql2';
import dotenv from 'dotenv'

dotenv.config();
 // require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}).promise()


export async function getAllUsers() {
  const [rows] = await pool.query("SELECT * FROM users")
  return rows
}

export async function getUser(id) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM users
  WHERE id = ?
  `, [id])   //`, [1])
  return rows[0]
}


export async function createUser(name, mobile, email) {  
  const [result] = await pool.query(`
  INSERT INTO users (name, mobile, email)
  VALUES (?, ?, ?)
  `, [name, mobile, email])
  const id = result.insertId
  return getUser(id)
}

// const insertU = await createUser('Kajal', '9876543210', 'kajal@gmail.com')
// console.log("insertUser - ",insertU)