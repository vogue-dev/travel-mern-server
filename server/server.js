// require('dotenv').config({ path: 'dotenv' });
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import postRoutes from './routes/posts.js';
import ukraineRoutes from './routes/postsUA.js';

// ---- ---- ---- ---- ---- ---- ----

const app = express();
const PORT = process.env.PORT || 5000;
const DB_CONNECTION =
    'mongodb+srv://Vogue:13524qetwrVogue@cluster0.kxggw.mongodb.net/mydata?retryWrites=true';

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/ukraine', ukraineRoutes);

// serves the built version of your react app
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

mongoose
    .connect(DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })

    .then(() =>
        app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
    )
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
