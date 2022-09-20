import EpisodeService from "../../services/episode.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  getAll: async (req, res) => {
        const data = await EpisodeService.getAll();
        if(data.message==="success"){
            return httpResponse.SUCCESS(res, data.data)
        }else{
            return httpResponse.INTERNAL_SERVER(res, data.data)
        }
  },

  getById: async (req, res) => {
    const data = await EpisodeService.getById(req.params.id);
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  getBySeasonId: async (req, res) => {
    const data = await EpisodeService.getBySeasonId(req.params.id);
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  post: async (req, res) => {
    const data = await EpisodeService.add(req.params.id, req.body);

    if (data.message === "success") {
      return httpResponse.CREATED(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  update: async (req, res) => {

    const data = await EpisodeService.update(req.params.id, req.body);

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  delete: async (req, res) => {
    req.body.id = req.params.id;

    const data = await EpisodeService.removeById(req.body);

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
};

export default controller;
