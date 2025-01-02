import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


// console.log(process.env.MONGO_URL);

async function connectionDB() {
    console.log(process.env.MONGO_URL_ONLINE);

    await mongoose.connect(process.env.MONGO_URL_ONLINE).then(() => {
        console.log(`Database connected on ${process.env.MONGO_URL_ONLINE}`);
    }).catch((err) => {
        console.log(err);
    });
}


export default connectionDB;