const greetController = (req, res) => { 
    const url = new URL(req.url, 'http://localhost:3000');
    const name = url.searchParams.get('name');

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello, ${name}!`);
  };

module.exports = greetController;