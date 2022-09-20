import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  genre_id: { type: Schema.Types.ObjectId, ref: "Genre" },
  name: { type: String, required: true },
  description: { type: String, required: true },
  trailer: { type: String, required: true },
});
export default mongoose.model("Series", schema);
