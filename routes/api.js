var dbJson = require("../db/db.json");

module.exports = function (app) {
    app.get("/api/note", function (req, res) {
        return res.json(dbJson);
    });

    app.post("/api/note", function (req, res) {
        const newNote = req.body;
        dbJson.push(newNote);

        fs.writeFile("../db/db.json", JSON.stringify(dbJson), function (err) {
            if (err) throw err;
            console.log("test");
        });

        return res.json(true);

    });
}