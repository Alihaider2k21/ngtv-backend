import SeriesService from "../../services/series.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  getAll: async (req, res) => {
    const data = await SeriesService.getAll();
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },

  getById: async (req, res) => {
    const data = await SeriesService.getById(req.params.id);
    console.log(req.params.id)
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  getAllRecord: async (req, res) => {
    const data = await SeriesService.getAllRecord();
    // console.log(data)
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  getByGenreId: async (req, res) => {
    const data = await SeriesService.getByGenreId(req.params.id);
    console.log(req.params.id)
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  post: async (req, res) => {
    const data = await SeriesService.add(req.body);

    if (data.message === "success") {
      return httpResponse.CREATED(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  update: async (req, res) => {
    const data = await SeriesService.update(req.params.id, req.body);

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  delete: async (req, res) => {
    req.body.id = req.params.id;

    const data = await SeriesService.removeById(req.body);

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
};

export default controller;
