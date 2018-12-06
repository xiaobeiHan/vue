const express = require('express');
const app = express();
const mysql = require('mysql');
const conn = mysql.createConnection({
	host: 'localhost', //数据库地址
	user: 'root', //账号
	password: 'Hanjie289@123!', //密码
	database: 'mytest', //库名
	multipleStatements: true //允许执行多条语句
});
//查询出所有数据
app.get('/api/createTable', (req, res) => {
	const sqlStr = 'create table my_test2 (id varchar(10));'
	conn.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '创建失败',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: '创建成功'
		})
	})
});
app.get('/api/dropTable', (req, res) => {
	const sqlStr = 'drop table my_test2;'
	conn.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '创建失败',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: '创建成功'
		})
	})
});
app.listen(3000, () => {
	console.log('正在监听端口3000,http://193.112.56.98:3000');
})