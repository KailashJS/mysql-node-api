import { create, deleteProductById, find, findById, update } from "../db/queries.js"

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
    try {
        const { id } = req.params;
        const products = await findById(id)
        return res.status(200).json({ products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Occured" });
    }
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
    try {
        const { title, description, price } = req.body;
        const { id } = req.params;
        if (!title || !description || !price || !id) {
            return res
                .status(403)
                .json({ message: "Input Parameters were not provided" })
        }
        // const product = await create(title, description, price);
        const product = await update(title, description, price, id);
        return res.status(201).json({ product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Occured while Updating" })
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await deleteProductById(id);
        return res.status(200).json({ product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Occured While deleting" })
    }
}