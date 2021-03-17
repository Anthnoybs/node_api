module.exports = app => {
    const article = require("../controllers/article.controller.js");

    // Retrieve all Articles
    app.get("/articles", article.findAll);
    
};