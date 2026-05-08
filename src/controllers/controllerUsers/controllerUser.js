import { validateName } from "../../validators/validatName.js";

export const createUser = async (req, res) => {
  try {
    const { name } = req.body;
    if (!validateName(name)) {
      return res.status(400).json({ error: "Invalid name format" });
    }
    // Continue with user creation logic here
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};
