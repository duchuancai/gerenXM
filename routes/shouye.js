const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
	var sql=`SELECT * FROM mi_shouye_img where price="3955.00"`;

	pool.query(sql,[],(err,result)=>{
		if(err)throw err
		res.send(result);	
	})
})

module.exports=router;
