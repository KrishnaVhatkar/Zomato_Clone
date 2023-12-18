import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect( "mongodb+srv://Krishna:Krish_1323@cluster0.q06cohl.mongodb.net/Zomato-Clone?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Other options if needed
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Optionally, you can throw the error or handle it in another way
    throw error;
  }
};
