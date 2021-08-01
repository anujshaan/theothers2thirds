const router = require('express').Router();
const db = require('../Database/Connection')
const nodemailer = require('nodemailer');
const dotenv =require('dotenv');

//nodemailer transporter setup
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.USER,
        pass:process.env.PASS
    }
});

//registration page 
router.post('/register',async(req,res)=>{
    
    try{
        //getting every value
        const compName = req.body.compName;
        const gstNum = req.body.gstNum;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        //check if username is available or not
        db.query("SELECT * FROM users WHERE USERNAME =?",[username],(err,result)=>{
            console.log(err);
            console.log(result);
            if(result.length == 0){

                //check if email is available or not
                db.query("Select * from users where email_address = ?",[email],(err,result)=>{
                    if(result.length == 0)
                    {
                        //if both are available then only insert data
                        db.query(
                            "INSERT INTO users(COMPANY_NAME, GST_NO, USERNAME, EMAIL_ADDRESS, USER_PASSWORD) VALUES(?,?,?,?,?)",
                            [compName,gstNum,username,email,password],(err,result)=>{
                                console.log(err);
                                console.log(result);
                            }
                        )

                        //sending mail format setup
                        let mailOptions ={
                            from:'mailtoonlinedashboard@gmail.com',
                            to:[email],
                            subject:'welcome mail from online dashboard',
                            text:`Thankyou for registering on Online dashboard
                                    your email is : ${email} and password is: ${password}`
                        };

                        transporter.sendMail(mailOptions,(err,data)=>{
                            if(err){
                                console.log('email sending error',err);
                            }else{
                                console.log('email sent');
                            }
                        })

                        res.status(200).json(username);
                    }else{
                        console.log('email already taken');
                        res.status(500).json(message='email already taken');
                    }
                })
            }else{
                console.log('username already taken');
                res.status(500).json(messgae='username already taken');
            }
        })
    }catch(e){
        res.status(500).json(e);
    }

})

//login page
router.post('/login', async(req,res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;

        db.query("SELECT * FROM users WHERE USERNAME = ? AND USER_PASSWORD = ?",
        [username,password],(err,result)=>{
            if(err){
                console.log(err);
            }
            if(result){
                res.send(result);
            }else{
                res.send({message:"Wrong username passsword"});
            }
        })
    }catch(e){
        res.status(500).json(e);
    }
})

router.post('/forgot-password', async(req,res)=>{
    try{
        const email = req.body.email;
        console.log(email);
        db.query("select * from users where EMAIL_ADDRESS = ?",[email],(err,result)=>{
            console.log(err);
            const password = result[0].USER_PASSWORD;
            if(result.length == 0){
                res.status(404).json('no user found')
            }else{
                let mailOptions ={
                    from:'mailtoonlinedashboard@gmail.com',
                    to:[email],
                    subject:'forgot password mail from online dashboard',
                    text:`
                            your email is : ${email} and password is: ${password}`
                };

                transporter.sendMail(mailOptions,(err,data)=>{
                    if(err){
                        console.log('email sending error',err);
                    }else{
                        console.log('email sent');
                    }
                })
            }
        })
    }catch(e){
        res.status(500).json(e);
    }
})

module.exports = router;