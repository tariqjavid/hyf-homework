const allReservation=require('../data/reservations.json')

 module.exports=(req,res)=>{

    res.send(allReservation);
 }