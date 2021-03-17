const sql = require("./db.js");

// constructor
const Article = function (article) {
    this.id = article.afmm__id;
    this.famille = article.afmm__famille;
    this.modele = article.afmm__modele;
}

Article.getAll = result => {
    sql.query("SELECT afmm__id , afmm__modele FROM art_fmm ORDER BY afmm__id LIMIT 200", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("customers: ", res);
        result(null, res);
    });
};


module.exports = Article;