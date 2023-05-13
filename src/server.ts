import mongoose from 'mongoose';
import app from './app';

const port: number = 5000;

// database connection
async function bootstrap() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
    console.log('🛢Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
    }catch(err){
        console.log("=Failed to connect to MongoDB", err);
    }
  }

bootstrap();



