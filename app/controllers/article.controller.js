const article = require("../models/article.js");


// Retrieve all Articles from the database.
exports.findAll = (req, res) => {

    article.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving articles."
            });
        else res.send(data);
    });
};




