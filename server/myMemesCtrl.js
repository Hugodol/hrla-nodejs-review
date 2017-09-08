const myMemes = require('../data/data');

module.exports = {
  fetch: (req, res) => {
    res.status(200).send(myMemes);
  },
  create: (req, res) => {
    myMemes.push(req.body);
    res.status(201).send(myMemes);
  },
};
