let express = require('express');
let app = express();
let path = require('path');
let port = 3003
let controllers = require('./controllers')

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist'))); // use static files (takes in directory, relative path)

app.get('/restaurants', controllers.getAll); // creating endpoint
app.get('/restaurants/:id', controllers.getOne);
app.post('/restaurants', controllers.postOne);
app.delete('/restaurants/:id', controllers.deleteOne);


app.listen(port, () => {
    console.log(`Your express server is live on ${port}`);
});

// instantiate middleware 