//使用express构建web服务器 
const express = require('express');
const pool=require("./pool")
const bodyParser = require('body-parser');
const session=require('express-session');
/*引入路由模块*/
const shouye=require("./routes/shouye");
const xiangqingye=require("./routes/xiangqingye");
const denglu=require("./routes/denglu");

var app = express();
var server=app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    secret:'128位随机数',
    resave:false,
    saveUninitialized:true,
}))
//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
app.use("/shouye",shouye);
app.use("/xiangqingye",xiangqingye);
app.use("/denglu",denglu);