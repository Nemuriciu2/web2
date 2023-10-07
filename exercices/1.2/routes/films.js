var express = require('express');
var router = express.Router();

const FILMS = [
    {
      id: 1,
      title: 'Iron Man',
      duration: 100,
      budget: 500,
      link: 'ironman.com',
    },
    {
      id: 2,
      title: 'Iron',
      duration: 70,
      budget: 250,
      link: 'iron.com',
    },
    {
      id: 3,
      title: 'Man',
      duration: 50,
      budget: 100,
      link: 'man.com',
    }
  ];
  
  // Read all the films from the array FILMS
  router.get('/', (req, res, next) => {
    console.log('GET /films');
    res.json(FILMS);
  });

module.exports = router;