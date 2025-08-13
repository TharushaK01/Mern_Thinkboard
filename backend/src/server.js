import experss from 'express';
import noteRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = experss();
const PORT = process.env.PORT || 5001;

connectDB();
//middleware
app.use(experss.json()); // Parse JSON bodies
app.use(rateLimiter);
//simple custom middleware 
// app.use((req, res, next) => {

//     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//     next();

// });

//endpoints
app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
});

// for production level applicaiton first connect to the database then start the server

// connectDB().then(() => {   
//     console.log('Server is running on port:', PORT);
// });
