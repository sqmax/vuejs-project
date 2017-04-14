var express = require('express');
var config = require('./config/index');
var http = require('http');
var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
	req.url = '/index.html';
	next();
});

app.use(router);

var appData = require('./data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();

apiRoutes.get('/seller', function (req, res) {
	res.json({
		errno: 0,
		data: seller
	});
});

apiRoutes.get('/goods', function (req, res) {

	http.get('http://sell.liaoshixiong.cn/sell/buyer/product/list', function(data){
    let rawData = '';
    data.on('data', (chunk) => rawData += chunk);
    data.on('end', () => {
      try {
        let parsedData = JSON.parse(rawData);
        console.log(parsedData);
        res.json({
          errno: parsedData.code,
          data: parsedData.data
        })
      } catch (e) {
        console.log(e.message);
      }
    });
});

apiRoutes.get('/ratings', function (req, res) {
	res.json({
		errno: 0,
		data: ratings
	});
}); 

app.use('/api', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
});