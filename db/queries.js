import { pool } from "./index.js";

export const find = async () => {
    const QUERY = "SELECT * FROM products";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        return result[0];
    } catch (error) {
        console.log("Error Occured: ", error);
        throw error;
    }
}

export const findById = async (id) => {
    const QUERY = "SELECT * FROM products WHERE id = ?";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [id]);
        return result;
    } catch (error) {
        console.log("Error Occured: ", error);
        throw error;
    }
}

export const create = async (title, description, price) => {
    const QUERY = `INSERT INTO products 
                    (title, description, price)
                    VALUES(?,?,?)`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [title, description, price]);
        return result;
    } catch (error) {
        console.log("Error Occured while creating new record", error);
        throw error;
    }
}