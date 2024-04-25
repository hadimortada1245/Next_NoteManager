import mongoose from'mongoose';
const DatabaseUrl = process.env.DatabaseUrl;

 export default async function connectDB() {
   try {
     await mongoose.connect(DatabaseUrl);
     console.log('connected to database successfully');
   } catch (error) {
     console.log("failed to connect",error);
   }
  }
