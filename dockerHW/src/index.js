const app = require('express')();

app.get('/', (req, res ) => 
    res.json({ message: 'Please Please Please work' }) 
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );