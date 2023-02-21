const jwt = require("jsonwebtoken");
const path_ = require("path");
const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");
const filePath = path_.join(__dirname, "./db.sqlite");
// const db = new sqlite3.Database(filePath);
// function sqlData (){
//     const filePath = path_.join(__dirname, "./db.sqlite");
//     const db = new sqlite3.Database(filePath);
//     db.all("SELECT * FROM auth WHERE username = ?", ["test"],function (err, data) {
//         return  data;
//     });
// }


const sign = async (event, context) => {
    try {
        // console.log(jwt);
        // console.log(JSON.parse(event.body));
        const pathArr = event.path.split("/");
        const path = pathArr[pathArr.length - 1];
        const db = await open({
            filename: filePath,
            driver: sqlite3.Database
        })
        if (event.httpMethod === "POST") {
            const res = await db.all("SELECT * FROM auth WHERE username = ?", ["test"]);
            console.log(res);
            // db.serialize(function () {
            //     db.parallelize(function () {
            // db.all("SELECT * FROM auth WHERE username = ?", ["test"],()=>{});
            // db.on("profile", function (data) {
            //     console.log(data);
            //     return {
            //         statusCode: 200,
            //         body: JSON.stringify({ data: data }),
            //     }
            // });
            //     })
            // })
            // switch (path) {
            //     case "login":
            //         return {
            //             statusCode: 200,
            //             body: JSON.stringify({ data: "login" }),
            //         }
            //     case "register":
            //         const filePath = path_.join(__dirname, "./db.sqlite");
            //         const db = new sqlite3.Database(filePath);
            //         db.serialize(function () {
            //             db.all("SELECT * FROM auth WHERE username = ?", ["test"], function (err, data) {
            //                 return {
            //                     statusCode: 200,
            //                     body: JSON.stringify({ data: data }),
            //                 }
            //             });
            //         })
            //     // db.run("INSERT INTO auth (username, password) VALUES (?, ?)", ["test", "test"],
            //     //     function (err) {
            //     //         console.log(err);
            //     //     });

            //     // return {
            //     //     statusCode: 200,
            //     //     body: JSON.stringify({ data: "register" }),
            //     // }
            //     default:
            return {
                statusCode: 401,
                body: JSON.stringify({ data: res }),
            }
        }
        // } else {
        //     return {
        //         statusCode: 200,
        //         body: JSON.stringify({ data: "sign" }),
        //     }
        // }

    }
    catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = {
    handler: sign
}