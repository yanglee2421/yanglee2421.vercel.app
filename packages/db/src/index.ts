import mongoose, { Schema } from "mongoose";

export const connectToDatabase = () => {
  const MONGODB_URL = process.env.MONGODB_URL!;
  return mongoose.connect(MONGODB_URL, { dbName: "Cluster0" });
};

connectToDatabase();

export const overtimeRecordSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    hours: {
      type: Number,
      required: true,
    },
    reason: {
      type: String,
      required: false,
    },
    redeemed: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "OvertimeRecord",
  },
);

export const OvertimeRecordModel = mongoose.model(
  "OvertimeRecord",
  overtimeRecordSchema,
);
