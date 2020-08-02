const reservations = require("../data/reservations.json");
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
          //All reservations
          res.send(reservations);
});

router.get("/:id", (req, res) => {
          // Reservation access with id
          const getId = parseInt(req.params.id);
          const getreservation = reservations.filter(
                    (reservation) => reservation.id === getId
          );
          if (getreservation.length == 0) {
                    res.send("Reservation does not  exists of this");
          }
          res.send(getreservation);
});

module.exports = router;
