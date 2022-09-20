import UserService from "../../services/user.js";
import passwordHash from "password-hash";
import jwt from "jsonwebtoken";
import UserModel from "../../models/user.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  getAll: async (req, res) => {
    const data = await UserService.getAll();

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },

  getById: async (req, res) => {
    const data = await UserService.getById(req.params.id);

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },

  signup: async (req, res) => {
    const addResponse = await UserService.add(req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, addResponse.data);
    }
  },

  signin: async (req, res) => {
    try {
      const user = await UserModel.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      console.log("BE", user);
      if (!user) return res.status(401).send("Invalid email or password.");
      const token = jwt.sign({ id: user._id }, "my_temporary_secret", {
        expiresIn: "1h",
      });
      res.send({ message: "BE", token });
    } catch (error) {
      res.status(500).send(error);
      return { message: "error", data: error.message };
    }
  },

  update: async (req, res) => {
    const data = await UserService.update(req.params.id, req.body);
    console.log(data)
    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },

  delete: async (req, res) => {
    const data = await UserService.removeById(req.params._id);

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data);
    }
  },
};

export default controller;
