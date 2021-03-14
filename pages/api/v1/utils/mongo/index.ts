import mongo from "mongoose";

const { MONGO } = process.env;

const PROTOCOL: string = process.env.MONGO_PROROCOL || "mongodb";
const URL: string = process.env.MONGO_URL || "0.0.0.0";
const PORT: number = Number.parseInt(process.env.MONGO_PORT, 10) || 27017;
const DATABASE: string = process.env.MONGO_DB || "hextechdocs";

const MONGO_CONNECTION_URL =
  MONGO || `${PROTOCOL}://${URL}:${PORT}/${DATABASE}`;

await mongo.connect(MONGO_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
