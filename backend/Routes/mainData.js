const router = require('express').Router();
const db = require('../Database/Connection');

router.get('/:username', async(req,res)=>{
    try{
        const currentUser = req.params.username;
        db.query('SELECT * FROM userData WHERE USERNAME = ?',[currentUser],(err,result)=>{
            res.send(result);
        })
    }catch(e){
        console.log(e);
    }
})
router.post('/update/:username',async(req,res)=>{
    try{
        const USERNAME  = req.params.username;
        const PRODUCT_NAME= req.body.PRODUCT_NAME;
        const ACTUAL_REVENUE = req.body.ACTUAL_REVENUE;
        const TARGETED_REVENUE = req.body.TARGETED_REVENUE;
        const PROFIT_SHARE =req.body.PROFIT_SHARE;
        db.query('INSERT INTO userData(USERNAME,PRODUCT_NAME,ACTUAL_REVENUE,TARGETED_REVENUE,PROFIT_SHARE) VALUES(?,?,?,?,?)',
        [USERNAME,PRODUCT_NAME,ACTUAL_REVENUE,TARGETED_REVENUE,PROFIT_SHARE],(err,result)=>{
            console.log(err);
            console.log(result);
        })
    }catch(e){
        console.log(e);
    }
})


module.exports = router;