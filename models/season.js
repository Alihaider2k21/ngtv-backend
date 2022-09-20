import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = Schema({
  series_id: { type: Schema.Types.ObjectId, ref: "Series" },
  name: { type: String, required: true },
  description: { type: String, required: true },
});
export default mongoose.model("Season", schema);
