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

const send_chat_message = async (chatroom_id, body) => {
  return await request("post", `chat_rooms/${chatroom_id}/`, body);
};

const get_messages = async (chatroom_id, additionalParams = {}) => {
  const params = new URLSearchParams(additionalParams).toString();
  return await request("get", `chat_rooms/${chatroom_id}/messages?${params}`);
};

const sms_verify = async (body) => {
  return await request("post", "auth/customer/verify", body);
};

const get_user_emergencies = async () => {
  return await request("get", "user/emergencies");
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

export {
  create_emergency,
  login,
  register_customer,
  get_user_info,
  sms_verify,
  get_user_emergencies,
  get_messages,
  send_chat_message,
};
