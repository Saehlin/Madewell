const express = require('express');

const passport = require('passport');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

//gibt zurück was Avatar gerade trägt
router.get('/', wrapAsync(async (req, res) => {
  //await BlogsService.create(req.body.data, req.currentUser);
  const payload = [0, 1, 1, 0, 0];
  res.status(200).send(payload);
}));

//getragene Klamotten ändern
router.put('/', wrapAsync(async (req, res) => {
  //await BlogsService.create(req.body.data, req.currentUser);
  const payload = 0;
  res.status(200).send(payload);
}));

//alle Klamotten für Avatar zurückgeben
router.get('/clothes', wrapAsync(async (req, res) => {
  //await BlogsService.create(req.body.data, req.currentUser);
  const payload = 0;
  res.status(200).send(payload);
}));

//zurückgeben welche Klamotten im Besitz
router.get('/owned', wrapAsync(async (req, res) => {
  //await BlogsService.create(req.body.data, req.currentUser);
  const payload = 0;
  res.status(200).send(payload);
}));

//Klamotten freischalten
router.post('/buy', wrapAsync(async (req, res) => {
  //await BlogsService.create(req.body.data, req.currentUser);
  const payload = 0;
  res.status(200).send(payload);
}));

//Coins gutschreiben
router.post('/coins', wrapAsync(async (req, res) => {
  //await BlogsService.create(req.body.data, req.currentUser);
  const payload = 0;
  res.status(200).send(payload);
}));

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;