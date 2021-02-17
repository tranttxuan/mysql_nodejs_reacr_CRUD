var express = require('express');
var router = express.Router();
const db = require("../dbService")

//get all data
router.get("/", (req, res) => {
  let sqlQuery = "SELECT * FROM names";
  db.query(sqlQuery, (err, result) => {
    if (err) res.status(500).json({ message: err });
    console.log(result)
    res.status(200).json(result)
  });
})

//create
router.post('/create', (req, res, next) => {
  // console.log(req.body)
  req.body.date_at = new Date();

  let sqlQuery = "INSERT INTO names SET ?";
  db.query(sqlQuery, req.body, (err, result) => {
    if (err) res.status(500).json({ message: err });
    // console.log(result.insertId)
    res.status(200).json(result)
  })

});

//edit
router.patch("/:id", (req, res) => {
  console.log("check req.body", req.body)
  let sqlQuery = "UPDATE names SET name=? WHERE id=?;";
  db.query(sqlQuery, [req.body.name, req.params.id], (err, result) => {
    if (err) res.status(500).json({ message: err });
    console.log("resul>>", result)
    res.status(200).json(result)
  })
})

//delete
router.delete("/:id", (req, res) => {
  let sqlQuery = "DELETE FROM names WHERE id=?"
  db.query(sqlQuery, req.params.id, (err, result) => {
    if (err) res.status(500).json({ message: err });
    console.log(result)
    res.status(200).json(result)
  })
})


module.exports = router;
