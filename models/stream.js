import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  episode_id: { type: Schema.Types.ObjectId, ref: "Episode" },
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  time: { type: String, required: true },
});
export default mongoose.model("Stream", schema);
