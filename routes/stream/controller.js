import StreamService from "../../services/stream.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  getAll: async (req, res) => {
    const data = await StreamService.getAll();
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  getHistory: async (req, res) => {
    const data = await StreamService.getHistory();
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },

  getById: async (req, res) => {
    const data = await StreamService.getById(req.params.id);
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  post: async (req, res) => {
    const data = await StreamService.add(req.body);

    if (data.message === "success") {
      return httpResponse.CREATED(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  update: async (req, res) => {
    const data = await StreamService.update(req.params.id, req.body);

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
  delete: async (req, res) => {
    req.body.id = req.params.id;

    const data = await StreamService.removeById(req.body);

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
};

export default controller;
