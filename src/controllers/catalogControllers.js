import { db } from "../database/database.js";

export async function catalog(req, res) {
  const { name, price, description, picture } = req.body;

  try {
    await db
      .collection("products")
      .insertOne({ name, price, description, picture });
    res.status(200).send("Created!");
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function getStock(req, res) {
  try {
    const stock = await db.collection("products").find().toArray();
    res.send(stock);
  } catch (err) {
    res.status(500).send(err);
  }
}
