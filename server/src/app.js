import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes'
import './config/env'

const app = express();

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/v1', routes.router)

app.get('/', function (req, res) {
    res.json(
        [{
            title: "Server app",
            description: "This is the server app.",
            message: "The API endpoint is /api/v1"
        }]
    )
});

app.listen(process.env.SERVER_PORT, () =>
    console.log(`Server started on port ${process.env.SERVER_PORT}`)
);