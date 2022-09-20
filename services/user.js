import UserModel from "../models/user.js";


const UserService = {
  getAll: async () => {
    try {
      const data = await UserModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const savedData = await UserModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getById: async (id) => {
    try {
      const data = await UserModel.findById(id);

      if (data) {
        return { message: "success", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  update: async (id, body) => {
    try {
      // const id = body.id;
      // delete body.id;
      const data = await UserModel.findByIdAndUpdate(id, body);
      if (data) {
        return { message: "success", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  removeById: async (id) => {
    const data = await UserModel.findOne({ _id: id });

    if (data) {
      data.is_active = false;
      const deactivateUser = await data.save();
      if (deactivateUser) {
        return { message: "data deleted", data };
      }
    } else {
      return { message: "error", data: "User not found" };
    }
  },
};

export default UserService;
