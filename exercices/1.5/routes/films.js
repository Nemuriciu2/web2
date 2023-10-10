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
  // Or filtered
  router.get('/', (req, res, next) => {
    console.log('GET /films');

    const minimumFilmDuration = req?.query ? Number(req.query['minimum-duration']) : undefined;

    if (typeof minimumFilmDuration !== 'number' || minimumFilmDuration <= 0)
      return res.sendStatus(400);

    if (!minimumFilmDuration) return res.json(FILMS);

    const filmsReachingMinimumDuration = FILMS.filter(
      (film) => film.duration >= minimumFilmDuration
    );

    return res.json(filmsReachingMinimumDuration);
  });

  // Read the films by the ID
  router.get('/:id', (req, res) =>{
    console.log(`GET /films/${req.params.id}`);

    const indexFilm = FILMS.findIndex(film => film.id == req.params.id);
    if(indexFilm === -1){
      return res.sendStatus(404);
    }

    res.json(FILMS[indexFilm]);
  });

  // Create a new film
  router.post('/', (req, res) =>{
    const title = req?.body?.title.length !== 0 ? req.body.title : undefined;
    const duration = req?.body?.duration.length !== 0 ? req.body.duration : undefined;
    const budget = req?.body?.budget.length !== 0 ? req.body.budget : undefined;
    const link = req?.body?.link.length !== 0 ? req.body.link : undefined;

    if(!title || !duration || !budget || !link){
      res.sendStatus(400);
    }

    const existingFilm = FILMS.find((film) => film.title.toLowerCase() === title.toLowerCase());
    
    if (existingFilm) return res.sendStatus(409);

    const lastItemIndex = FILMS?.length !== 0 ? FILMS.length - 1 : undefined;
    const lastID = lastItemIndex !== undefined ? FILMS[lastItemIndex]?.id : 0;
    const nextID = lastID + 1;

    const newFilm = {
      id : nextID,
      title : title,
      duration : duration,
      budget : budget,
      link : link
    }

    FILMS.push(newFilm);
    res.json(newFilm);
  });

module.exports = router;