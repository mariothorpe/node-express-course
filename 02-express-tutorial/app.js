const express = require('express');
const app = express();
const { products } = require("./data");
 
app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
    res.json({ message: "It Worked!"});
    }); 

app.get("/api/v1/products", (req, res) => {
    res.json(products);
    });
   
app.get("/api/v1/products/:productID", (req, res) => {
    const idToFind = parseInt(req.params.productID); 
    const product = products.find((p) => p.id === idToFind);
    if (!product) {
        return res.status(404).send("That product was not found.");
      }
      res.json(product);
    });

    app.get("/api/v1/query", (req, res) => {
        const search = req.query.search;
        const limit = req.query.limit;
        let results = [...products];

        if (search) {
            results =  results.filter((p) => p.name.startsWith(search));
        }

        if (limit) {
            results = results.slice(0, parseInt(limit));
          }

        res.json(results);
    });


app.all('*', (req, res) => {
    res.status(404).send('<h1>404: Page Not Found</h1><p>Sorry, the page you are looking for does not exist.</p>');
    });


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});