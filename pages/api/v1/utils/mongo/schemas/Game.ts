import mongo from "mongoose";

const { Schema } = mongo;

const schema = new Schema({
  title: String,
  subcategories: Object,
});

export default schema;
