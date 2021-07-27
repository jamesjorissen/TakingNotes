const fs = require("fs");
var data = JSON.parse(fs.readFileSync("./db/db.json" "utf-8"));

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(data);
    });


    app.get("/api/notes/:id", function (req, res) {
        res.json(data[Number(req.params.id)])
    });

    app.post("/api/notes", function (req, res) {
        let note = req.body;
        let newId = (data.length).toString();
        console.log(newId);
        note.id = newId;
        data.push(note);

        fs.writeFileSync("./db/db.json", JSON.stringify(data), function (err) {
            if (err) throw (err);
        });

        res.json(data);

    });

    app.delete("/api/notes/:id", function (req, res) {
        let noteTwo = req.params.id;
        let newId = 0;
        console.log(`Deleting note ${newId}`);
        data = data.filter(noteTwo => {
            return noteTwo.id != newId;
        });

        for (noteTwo of data) {
            noteTwo.id = newId.toString();
            Id++;
        }
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.json(data);
    });
}

