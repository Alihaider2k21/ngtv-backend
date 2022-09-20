import EpisodeModel from "../models/episode.js";

const EpisodeService = {
  getAll: async () => {
    try {
      const data = await EpisodeModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  add: async (body) => {
    try {
      const savedData = await EpisodeModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getById: async (id) => {
    try {
      const data = await EpisodeModel.findById(id);

      if (data) {
        return { message: "success", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getBySeasonId: async (id) => {
    try {
      const data = await EpisodeModel.find({season_id:id}).populate("season_id");
      if (data) {
        return { message: "success", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  update: async (id, body) => {
    try {
      const data = await EpisodeModel.findByIdAndUpdate(id, body);

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
      const data = await EpisodeModel.findOneAndDelete(
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

export default EpisodeService;
