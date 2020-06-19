const reviews=require('../data/reviews.json')
const express=require('express');
const router=express.Router();
router.get('/reviews',(req, res) => { // All reveiws
res.send(reviews);
})
router.get('/reviews/:id',(req, res) => {
         
    const getId=parseInt(req.params.id);
    const getReview=reviews.filter(review=>review.id===getId); //Reviews with id
    if(getReview.length==0)
        {
            res.send('Review does not  exists againt meal');
        } 
         res.send(getReview) 
         console.log(getReview)
       })

module.exports=router;

