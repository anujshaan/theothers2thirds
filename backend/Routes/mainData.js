const router = require('express').Router();
const db = require('../Database/Connection');

router.get('/:username/:place', async(req,res)=>{
    
    try{
        const currentUser = req.params.username;
        const currentLocation = req.params.place;

        db.query('SELECT * FROM userData WHERE USERNAME = ? AND LOCATION = ?',[currentUser,currentLocation],(err,result)=>{
            res.send(result);
        })
    }catch(e){
        console.log(e);
    }
})
router.post('/add/:username',async(req,res)=>{
    try{
        const USERNAME  = req.params.username;
        const PRODUCT_NAME= req.body.PRODUCT_NAME;
        const ACTUAL_REVENUE = req.body.ACTUAL_REVENUE;
        const TARGETED_REVENUE = req.body.TARGETED_REVENUE;
        const PROFIT_SHARE =req.body.PROFIT_SHARE;
        const LOCATION = req.body.LOCATION;
        db.query('INSERT INTO userData(USERNAME,PRODUCT_NAME,ACTUAL_REVENUE,TARGETED_REVENUE,PROFIT_SHARE,LOCATION) VALUES(?,?,?,?,?,?)',
        [USERNAME,PRODUCT_NAME,ACTUAL_REVENUE,TARGETED_REVENUE,PROFIT_SHARE,LOCATION],(err,result)=>{
            console.log(err);
            console.log(result);
        })
        res.status(200).json("data sent");
    }catch(e){
        console.log(e);
    }
})


module.exports = router;