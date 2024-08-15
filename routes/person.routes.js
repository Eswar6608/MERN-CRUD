let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Student Model
let personSchema = require("../Models/Person");

// CREATE Student
router.route("/create-details").post(async (req, res, next) => {
  await personSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// READ Students
router.route("/").get(async (req, res, next) => {
  await personSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: "All items successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// Get Single Student
router.route("/get-details/:id").get(async (req, res, next) => {
  await personSchema
    .findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// Update Student
router.route("/update-details/:id").put(async (req, res, next) => {
  await personSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((result) => {
      console.log(result);
      res.json({
        data: result,
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete Student
router.route("/delete-details/:id").delete(async (req, res, next) => {
  await personSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
