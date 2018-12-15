const express=require("express");
const pool=require("../pool");
const router=express.Router();
router.get("/",(req,res)=>{
	var lid=req.query.lid;
	var output={product:{},pics:[],specs:[]};
//用lid查当前商品信息
var sql1="SELECT * FROM mi_detalis where lid=?";
var sql2="SELECT * FROM mi_pic where lid=?";//用lid查当前商品图片列表
var sql3="SELECT lid,specs FROM mi_detalis where mid=( select mid from mi_detalis where lid=? ) ";//用lid查当前商品同系列的规格列表
Promise.all([
    new Promise(function(open){
      pool.query(sql1,[lid],(err,result)=>{
        if(err) console.log(err);
        output.product=result[0];
        open();
        console.log("查询product完成!");
      })
    }),
    new Promise(function(open){
      pool.query(sql2,[lid],(err,result)=>{
        if(err) console.log(err);
        output.pics=result;
        open()
        console.log("查询pics完成");
      })
    }),
    new Promise(function(open){
      pool.query(sql3,[lid],(err,result)=>{
        if(err) console.log(err);
        output.specs=result;
        open()
        console.log("查询specs完成");
      })
    })
]).then(function(){
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(output));
    res.end();
    console.log("响应完成!");
    console.log(output);
  })
	
})

module.exports=router;
