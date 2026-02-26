import db from "../db/db.js";
import bcrypt from "bcrypt";

// ------------------- HELPERS ------------------------

export const hashPassword = async (plainPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(plainPassword,salt);

    return hash; 
};

export const validatePassword = async (plainPassword, storedPassHash) => {
    
};

// ------------------- USER RECORDS ------------------------

export const findUserById = async (userId) => {
    const id = Number(userId);
    if (Number.isNaN(id)) return null;

    const [ results ] = await db.query(
        "SELECT userId, username, password, role FROM users WHERE userId = ? LIMIT 1",
        [id]
    );

    return results;
};

export const findUserByUsername = async (username) => {
    const [ results ] = await db.query(
        "SELECT userId, username, password, role FROM users WHERE username = ? LIMIT 1",
        [username]
    );

    return results[0];
};

export const createUser = async (username, plainPassword, role = "user") => {
    if (!username) throw new Error("Username is required.");
    console.log(role);
    if (role !== "user" && role !== "admin") throw new Error("Invalid role.");

    //store a hash of the password here...
    const passwordHash = await hashPassword(plainPassword);

    const result = await db.execute(
        "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
        [username, passwordHash, role]
    );

    return {
        userId: result.insertId,
        username,
        role
    };
};