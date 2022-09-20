import SeasonModel from "../models/season.js";
import SeriesModel from "../models/series.js";

const SeasonService = {
  getAll: async () => {
    try {
      const data = await SeasonModel.find();
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  add: async (body) => {
    try {
      const savedData = await SeasonModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getById: async (id) => {
    try {
      const data = await SeasonModel.findById(id);

      if (data) {
        return { message: "success", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getAllRecord: async () => {
    try {
      const data = await SeasonModel.aggregate([
        {
          $lookup: {
            from: "episodes",
            let: { seasonID: "$_id" },
            pipeline: [
              {
                $match: { $expr: { $eq: ["$season_id", "$$seasonID"] } },
              },
            ],
            as: "Episodes",
          },
        },
      ]);

      if (data) {
        return { message: "success", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getBySeriesId: async (id) => {
    try {
      console.log(id);
      const data = await SeasonModel.find({ series_id: id }).populate(
        "series_id"
      );

      if (data) {
        return { message: "success", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  update: async (id, body) => {
    try {
      const data = await SeasonModel.findByIdAndUpdate(id, body);

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
      const data = await SeasonModel.findOneAndDelete(
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

export default SeasonService;
