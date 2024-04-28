
var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

app.use(cors());
app.use(bodyParser.json());

const port = "8081";
const host = "localhost";

// MongoDB
const url = "mongodb://127.0.0.1:27017";
const dbName = "reactdata";
const client = new MongoClient(url);
const db = client.db(dbName);

app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});

app.get("/listProducts", async (req, res) => {
    await client.connect();
    const query = {};
    const results = await db
        .collection("fakestore_catalog")
        .find(query)
        .limit(100)
        .toArray();
    res.status(200);
    res.send(results);
});

app.post("/addProduct", async (req, res) => {

    try {
        await client.connect();

        const newProduct = {
            "title": req.body.title,
            "price": req.body.price,
            "description": req.body.description,
            "category": req.body.category,
            "image": req.body.image,
            "rating":
            {
                "rate": req.body.rating.rate,
                "count": req.body.rating.count
            }
        };

        const results = await db
            .collection("fakestore_catalog")
            .insertOne(newProduct);

        res.status(200);
        res.send(results);
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

app.delete("/deleteProduct/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        await client.connect();

        const query = { id: id };

        const productDeleted = await db.collection("fakestore_catalog").findOne(query);
        const results = await db.collection("fakestore_catalog").deleteOne(query);

        res.status(200);
        res.send(productDeleted);
    }
    catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

app.put("/updateProduct/:id", async (req, res) => {
    try {

        const id = Number(req.params.id);
        const query = { id: id };

        await client.connect();

        const updateData = {
            $set: {
                "title": req.body.title,
                "price": req.body.price,
                "description": req.body.description,
                "category": req.body.category,
                "image": req.body.image,
                "rating":
                {
                    "rate": req.body.rating.rate,
                    "count": req.body.rating.count
                }
            }
        };

        const productUpdated = await db.collection("fakestore_catalog").findOne(query);
        const results = await db.collection("fakestore_catalog").updateOne(query, updateData, {});

        if (results.matchedCount === 0) {
            return res.status(404).send({ message: 'Product not found' });
        }

        res.status(200);
        res.send(productUpdated);
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});