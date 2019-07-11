import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import bodyparser from 'body-parser';
import getUsers from './controllers/endpoints/getUsers';

type EventPort = number;
type Application = express.Application;
type ApplicationRequest = express.Request;
type ApplicationResponse = express.Response;

const PORT : EventPort = 5000 || process.env.PORT;
const app : Application = express();

// Middleware functions
app.use(helmet());
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '../../dashboard/build')));

// //Endpoints
app.post('/api/users', (req : ApplicationRequest, res : ApplicationResponse) => getUsers(req, res));
app.get('/*', (req : ApplicationRequest, res : ApplicationResponse) => res.sendFile(path.join(__dirname, '../../dashboard/build', 'index.html')));


app.listen(PORT, () => console.log(`Ready to accept connections`));




