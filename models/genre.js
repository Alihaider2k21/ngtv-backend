import mongoose from "mongoose";

const Schema = mongoose.Schema;
const schema = Schema({
  name: { type: String, required: true },
});
export default mongoose.model("Genre", schema);
