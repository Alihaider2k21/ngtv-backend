import GenreModel from "../models/genre.js";


const GenreService = {
  getAll: async () => {
    try {
      const data = await GenreModel.find();
      return { message: "Success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  add: async (body) => {
    try {
      const savedData = await GenreModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getById: async (id) => {
    try {
      const query = { _id: id, is_active: true };
      const data = await GenreModel.find(query);

      if (data) {
        return { message: "success", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getAllRecord: async () => {
    try {
      // console.log(id);
      const data = await GenreModel.aggregate([
        {
          $lookup: {
            from: "series",
            let: { genreID: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$genre_id", "$$genreID"],
                  },
                },
              },
              {
                $lookup: {
                  from: "seasons",
                  let: { seriesID: "$_id" },
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $eq: ["$series_id", "$$seriesID"],
                        },
                      },
                    },
                    {
                      $lookup: {
                        from: "episodes",
                        let: { seasonID: "$_id" },
                        pipeline: [
                          {
                            $match: {
                              $expr: {
                                $eq: ["$season_id", "$$seasonID"],
                              },
                            },
                          },
                        ],
                        as: "Episodes",
                      },
                    },
                  ],
                  as: "Season",
                },
              },
            ],
            as: "Series",
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
  update: async (body) => {
    try {
      const id = body.id;
      delete body.id;
      const data = await GenreModel.updateOne(
        { _id: id },
        { $set: body },
        { runValidators: true }
      );
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
      const data = await GenreModel.findOneAndDelete(
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

export default GenreService;
