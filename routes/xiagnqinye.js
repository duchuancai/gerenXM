const express=require("express");
const pool=require("../pool");
const router=express.Router();
router.get("/",(req,res)=>{
	var sql=`SELECT * FROM mi_detalis `;
//var mid=req.query.mid;
//var output={
	//product:{},
	//pics:[]
//};
/*var sql="SELECT * FROM mi_detalis where mid=?";

	pool.query(sql,[mid],(err,result)=>{
		if(err)throw err
		//res.send(result);	
		output.product=result[0];
	})
	pool.query(sql1,[mid],(err,result)=>{
		if(err)throw err
		//res.send(result);	
		output.pics=result;
	})*/
	pool.query(sql,[],(err,result)=>{
		if(err)throw err
		res.send(result);	
	})
		/*pool.query(sql1,[],(err,result)=>{
		if(err)throw err
		res.send(result);	
	})*/
})

module.exports=router;
