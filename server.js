kconst express = require("express");
const fs = require("fs");


var app = express();
var PORT = process.env.PORT || 8080


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));

// moving before listen
require("./routes/html")(app);
require("./routes/api")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
