const { Router } = require('express');

const routes = Router();

routes.post('/devs', (request, response) => {
    const { github_username } = request.body;

    const response = fetch();

    return response.send({ message: 'Hello its me' });
});

module.exports = routes;