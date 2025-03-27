import mongoose from "mongoose";
const MongoDBConnect = async () =>{

   try {
      const connection = await mongoose.connect(process.env.MONGO_URL);
   console.log(`MongoDB Connected : ${connection.connection.host}`.bgGreen.white);

   } catch (error) {
       console.log(`Error : MongoDB Connection Failed ${error.message} `.bgRed.white);
       
   }
  
   
}


export default MongoDBConnect;
