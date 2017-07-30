// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */


app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/inordeck/express-personal-api",
    base_url: "https://thawing-anchorage-60764.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/info", description: "info about me"},
      {method: "GET", path: "/api/albums", description: "list of my top 25 most influential albums"},
      {method: "POST", path: "/api/albums", description: "add album to list"},
      {method: "DELETE", path: "/api/albums", description: "update my top 25 most influential albums"}
    ]
  });
});

app.get('/api/info', function api_index(req, res) {
  db.Info.find()
    .exec(function(err, info){
      console.log("test");
      console.log(info);
      if (err) { return console.log("error: " + err); }
       res.json(info);
    });
});

// get all albums
app.get('/api/albums', function api_index(req, res) {
  db.Album.find()
    .exec(function(err, info){
      if (err) { return console.log("error: " + err); }
       res.json(info);
    });
});

// get one album
app.get('/api/albums/:id', function (req, res){
  db.Album.findOne({ _id: req.params.id }, function(err, data) {
    res.json(data);
  });
});

// add new album
app.post('/api/albums', function (req, res){
  var newAlbum = new db.Album({
    album: req.body.album,
    title: req.body.title,
    artist: req.body.artist,
    release: req.body.release,
    format: req.body.format
  });
  console.log(newAlbum);
  newAlbum.save(function(err, album){
    if (err) {
      return console.log("save error: " + err);
    }
    console.log("saved ", album.title);
    res.json(album);
  });
});

// update album
app.put('/api/albums/:id', function (req, res){
  var id = req.params.id;

  db.Album.findOne({_id: id}, function(err, albums){
    if(err) res.json({message: 'could not find album because ' + err});
    if(req.body.album) albums.album = req.body.album;
    if(req.body.title) albums.title = req.body.title;
    if(req.body.artist) albums.artist = req.body.artist;
    if(req.body.release) albums.release = req.body.release;
    if(req.body.format) albums.format = req.body.format;

    albums.save(function(err){
      if(err) res.json({message: 'could not update candy because ' + err});
      res.json(albums);
    });
  });
});


// delete album
app.delete('/api/albums/:id', function (req, res){
  console.log("album deleted: ", req.params);
  var albumId = req.params.id;
  db.Album.findOneAndRemove({ _id: albumId }, function (err, deletedAlbum){
    res.json(deletedAlbum);
  });
});



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
