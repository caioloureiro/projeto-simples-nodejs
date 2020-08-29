/*Start - dados básicos do servidor */
/*
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res) => {
	
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('Projeto em Node.JS');
	
});

server.listen(port, hostname, () => {
	
	console.log('Servidor do PROJETO-NODE rodando.');
	
});
*/
/*Ir no CMD e digitar para ligar o server: node index.js */

/*End - dados básicos do servidor */

/*Start - Servidor Express */
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req,res){
	
	res.sendFile(path.join(__dirname +'/index.html'));
	
});

router.get('/sobre', function(req,res){
	
	res.sendFile(path.join(__dirname +'/sobre.html'));
	
});

router.get('/home', function(req,res){
	
	res.sendFile(path.join(__dirname +'/index.html'));
	
});

app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Servidor Express do PROJETO-NODE rodando.');
/*End - Servidor Express */