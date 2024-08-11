import { create, find } from "../db/queries.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await find();
        return res.status(200).json({ products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Occured" });
    }
}
export const getProduct = async (req, res) => {
}
export const createProduct = async (req, res) => {
    try {
        const { title, description, price } = req.body;
        if (!title || !description || !price) {
            return res
                .status(403)
                .json({ message: "Input Parameters were not provided" })
        }
        const product = await create(title, description, price);
        return res.status(201).json({ product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Occured" });
    }
}
export const updateProduct = async (req, res) => {
}
export const deleteProduct = async (req, res) => {
}