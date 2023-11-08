import mongoose from "mongoose"



export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await parseAndLoadPlanetsData();

        console.log('connect with db success')


    } catch (error) {
        console.log('db connection failed', error)

    }

}