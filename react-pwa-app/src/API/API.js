import config from "./config.json";
import axios from "axios";

const request = async (method, path, body, contentType) => {
  const rawResponse = await axios({
    method: method.toLowerCase(),
    url: `${config.api}/${path}`,
    headers: {
      Accept: "*/*",
      "Content-Type": contentType || "application/json",
      Authorization: localStorage.getItem("authToken")
        ? "Bearer " + localStorage.getItem("authToken")
        : "",
    },
    data: body,
  });
  return rawResponse;
};

const get_emergencies = async () => {
  return await request("get", "emergencies");
};

const login = async (body) => {
  return await request("post", "auth/login", body);
};
const create_emergency = async (body) => {
  return await request("post", "emergencies", body, "multipart/form-data");
};

const register_customer = async (data) => {
  return await request("post", "auth/customer/register", data);
};

const get_user_info = async () => {
  return await request("get", "user");
};

export { create_emergency, login, register_customer, get_user_info };
