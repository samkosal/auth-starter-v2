import bcrypt from "bcrypt";
import db from "../db/db.js";

export const ensureUsersTable = async () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS users (
            userId INT NOT NULL AUTO_INCREMENT,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            role ENUM('user','admin') NOT NULL DEFAULT 'user',
            PRIMARY KEY (userId)
        );
    `;
    await db.query(sql);
};

export const hashPassword = async (plainPassword) => {
    
};

export const validatePassword = async (plainPassword, passwordHash) => {
    
};