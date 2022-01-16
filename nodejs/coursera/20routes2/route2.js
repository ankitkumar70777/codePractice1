








const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
         res.send('this is get req')
});

router.post('/',(req,res)=>{
         res.send('this is post req')
});

router.get('/about',(req,res)=>{
         res.send('this is about post req')
});


module.exports = router;