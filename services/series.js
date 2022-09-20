import SeriesModel from "../models/series.js";

const SeriesService = {
  getAll: async () => {
    try {
      const data = await SeriesModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  add: async (body) => {
    try {
      const savedData = await SeriesModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getById: async (id) => {
    try {
      const data = await SeriesModel.findById(id);

      if (data) {
        return { message: "success", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getByGenreId: async (id) => {
    try {
      const data = await SeriesModel.find({ genre_id: id }).populate(
        "genre_id"
      );
      console.log(data);

      if (data) {
        return { message: "success", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getAllRecord: async () => {
    try {
      const data = await SeriesModel.aggregate([
        {
          $lookup: {
            from: "seasons",
            let: { seriesID: "$_id" },
            pipeline: [
              {
                $match: { $expr: { $eq: ["$series_id", "$$seriesID"] } },
              },
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
            ],
            as: "Seasons",
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
  update: async (id, body) => {
    try {
      const data = await SeriesModel.findByIdAndUpdate(id, body);

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
      const data = await SeriesModel.findOneAndDelete(
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

export default SeriesService;
