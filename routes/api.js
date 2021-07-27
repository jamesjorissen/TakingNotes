var dbJson = require("../db/db.json");
const fs = require("fs");
var info = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function (app) {
    app.get("/api/note", function (req, res) {
        res.json(info);
    });

    app.post("/api/note", function (req, res) {
        const newNote = req.body;
        dbJson.push(newNote);

        app.get("/api/notes/:id", function (req, res))
        res.json(info[Number(req.params.id)])
    });

    app.post("/api/notes", function (req, res) {
        let note = req.body;
        let newId = (info.length).toString();
        console.log(newId);
        note.id = newId;
        info.push(note);

        fs.writeFileSync("./db/db.json", JSON.stringify(info), function (err) {
            if (err) throw (err);
        });
        res.json(info);

        app.delete("/api/notes/:id", function (req, res) {

            let noteTwo = req.params.id;
            let Id = 0;
            console.log(`Deleting note with id ${Id}`);
            info = info.filter(noteTwo => {
                return noteTwo.id != Id;
            });

            for (note2 of info) {
                note2.id = Id.toString();
                Id++;
            }
            fs.writeFileSync("./db/db.json", JSON.stringify(info));
            res.json(info);
        });

    }
