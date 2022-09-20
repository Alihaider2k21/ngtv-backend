import StreamModel from "../models/stream.js";

const StreamService = {
  getAll: async () => {
    try {
      const data = await StreamModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  add: async (body) => {
    try {
      const savedData = await StreamModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getHistory: async () => {
    try {
      const data = await StreamModel.find().populate("user_id").populate("episode_id");
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getById: async (id) => {
    try {
      const data = await StreamModel.findById(id)
        .populate("user_id")
        .populate("episode_id");
      if (data) {
        return { message: "success", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  update: async (id, body) => {
    try {
      const data = await StreamModel.findByIdAndUpdate(id, body);

      if (data) {
        return { message: "success", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  removeById: async (body) => {
    try {
      const id = body.id;
      const data = await StreamModel.findOneAndDelete(
        { _id: id },
        { runValdator: true }
      );
      if (data) {
        return { message: "success", data: data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default StreamService;
