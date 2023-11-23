import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    throw new Error("No MongoDB URL provided");
  }

  if (isConnected) {
    return;
  }

  try {
    const options: ConnectOptions = {
      dbName: "netflix",
      autoCreate: true,
    };

    await mongoose.connect(process.env.MONGODB_URL, options);
    isConnected = true;
    console.log("MongoDb is connected");
    
  } catch (error) {
    console.log("Error creating");
  }
};
