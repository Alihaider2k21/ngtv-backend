import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  season_id: { type: Schema.Types.ObjectId, ref: "Season" },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});
export default mongoose.model("Episode", schema);
