import SeasonService from "../../services/season.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  getAll: async (req, res) => {
    const data = await SeasonService.getAll();
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },

  getById: async (req, res) => {
    const data = await SeasonService.getById(req.params.id);
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  getBySeriesId: async (req, res) => {
    const data = await SeasonService.getBySeriesId(req.params.id);
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  getAllRecord: async (req, res) => {
    const data = await SeasonService.getAllRecord();
    console.log(data)
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  post: async (req, res) => {
    const data = await SeasonService.add(req.body);

    if (data.message === "success") {
      return httpResponse.CREATED(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  update: async (req, res) => {
    const data = await SeasonService.update(req.params.id, req.body);

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  delete: async (req, res) => {
    req.body.id = req.params.id;

    const data = await SeasonService.removeById(req.body);

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
};

export default controller;
