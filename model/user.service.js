import db from "../db/db.js";
import { ensureUsersTable, hashPassword, validatePassword } from "./user.model.js";

export const initUsers = async () => {
    await ensureUsersTable();
};

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
        [u]
    );

    return results;
};

export const createUser = async (username, plainPassword, role = "user") => {
    if (!username) throw new Error("Username is required.");
    if (role !== "user" && role !== "admin") throw new Error("Invalid role.");

    //store a hash of the password here...
    const passwordHash = plainPassword;

    const result = await db.exec(
        "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
        [username, passwordHash, role]
    );

    return {
        userId: result.insertId,
        username,
        role
    };
};

export const verifyLogin = async (username, plainPassword) => {
    const user = await findUserByUsername(username);
    if (!user) return null;

    //validate password here...
    const ok = true;
    if (!ok) return null;

    //don't send password
    return {
        userId: user.userId,
        username: user.username,
        role: user.role
    };
};