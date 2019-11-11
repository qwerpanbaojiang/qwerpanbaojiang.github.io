var express = require('express');
var router = express.Router();

const {
  find,
  insert,
  update,
  delet,
} = require('./port');
/* GET home page. */
router.get('/banner', async function (req, res, next) {
  let bodyParser = await req.query;
  // console.log(bodyParser)
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('home', bodyParser);
  res.json(data);
});

router.get('/goods', async function (req, res, next) {
  let bodyParser = await req.query;
  // console.log(bodyParser)
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('home', bodyParser);
  res.json(data);
});
router.get('/typeImg', async function (req, res, next) {
  let bodyParser = await req.query;
  // console.log(bodyParser)
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('categroy', bodyParser);
  res.json(data);
});
router.get('/listImg', async function (req, res, next) {
  let bodyParser = await req.query;
  // console.log(bodyParser)
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('list', bodyParser);
  res.json(data);
});
router.get('/detail', async function (req, res, next) {
  let bodyParser = await req.query;
  // console.log(bodyParser)
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('goods', bodyParser);
  res.json(data);
});
router.get('/goodpug', async function (req, res, next) {
  let bodyParser = await req.query.pugArr;
  console.log(bodyParser)
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('goods', {
    goods_id: {
      $in: bodyParser
    }
  });
  data.sort((a, b) => {
    return bodyParser.indexOf(a.goods_id) - bodyParser.indexOf(b.goods_id);
  });
  res.json(data);
});

router.get('/shopcart', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let reqParser = await req.query;
  let goods = {
    usid: reqParser.usid,
    goods_id: reqParser.goods_id,
  };
  let insertGood = {
    usid: reqParser.usid,
    goods_id: reqParser.goods_id,
    size: reqParser.size,
    num: reqParser.num,
    color: reqParser.color,
  };

  let upData = reqParser.upData
  let changeNum = reqParser.chooseNum;
  let deletGood = reqParser.deletGood;
  let findID = reqParser.findID;
  // console.log(reqParser)
  //  1、点击加入购物车，无则插入，有则数量增加
  if (upData) {
    let data = await find('shopcart', goods);
    if (data.length < 1) {
      await insert('shopcart', [insertGood]);
      res.json('inYes');
    }
  };

  //  查询该用户的购物车商品
  if (findID) {
    let data = await find('shopcart', reqParser.usid);
    res.json(data);
  }

  //  加减输入框的值变化修改数量
  console.log(changeNum)
  if (changeNum) {
    update('shopcart', goods, {
      $set: {
        num: reqParser.num
      }
    });
  };
  //  删除购物车商品
  if (deletGood) {
    delet('shopcart', goods);
  }

});
module.exports = router;