const jwt = require("jsonwebtoken");
const path_ = require("path");
const sqlite3 = require("sqlite3").verbose();
const sign = async (event, context) => {
    try {
        // console.log(jwt);
        // console.log(JSON.parse(event.body));
        const pathArr = event.path.split("/");
        const path = pathArr[pathArr.length - 1];
        if (event.httpMethod === "POST") {
            switch (path) {
                case "login":
                    return {
                        statusCode: 200,
                        body: JSON.stringify({ data: "login" }),
                    }
                case "register":
                    const filePath = path_.join(__dirname, "./db.sqlite");
                    const db = new sqlite3.Database(filePath);
                    // db.run("INSERT INTO auth (username, password) VALUES (?, ?)", ["test", "test"],
                    //     function (err) {
                    //         console.log(err);
                    //     });
                    db.all("SELECT * FROM auth WHERE username = ?", ["test"], (err, rows) => {
                        if (err) {
                            throw err;
                        }
                        console.log(rows);
                    });
                    console.log("serialize", db);
                    return {
                        statusCode: 200,
                        body: JSON.stringify({ data: "register" }),
                    }
                default:
                    return {
                        statusCode: 401,
                        body: JSON.stringify({ data: "error" }),
                    }
            }
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify({ data: "sign" }),
            }
        }

    }
    catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = {
    handler: sign
}