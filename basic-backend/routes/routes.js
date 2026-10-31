const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const dataController = require('../controllers/dataController');
const greetController = require('../controllers/greetController');

const routes = (req, res) => {
    const url = new URL(req.url, 'http://localhost:3000');

    if (req.url === '/') homeController(req, res);
    else if (req.url === '/about') aboutController(req, res);
    else if (req.url === '/data') dataController(req, res);
    else if (url.pathname === '/greet') greetController(req, res);
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
};

module.exports = routes;