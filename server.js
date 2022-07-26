const express = require('express');
const app = express();
const PORT = 8000;

const teas = {
    'earl gray': {
        'type': 'black',
        'origin': 'india',
        'waterTemp': 200,
        'steepTime': 180,
        'caffeine': true,
        'flavor': "citrusy"
    },
    'matcha': {
        'type': 'green',
        'origin': 'china',
        'waterTemp': 190,
        'steepTime': 210,
        'caffeine': true,
        'flavor': "earthy"
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTime': 0,
        'caffeine': false,
        'flavor': "bland"
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response) => {
    const teaQuery = request.params.name.toLowerCase();
    if (teas[teaQuery]) {
        response.json(teas[teaQuery]);
    }
    else {
        response.json(teas['unknown']);
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`);
});