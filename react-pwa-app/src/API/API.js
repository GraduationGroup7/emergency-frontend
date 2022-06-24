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

const get_table_list = async () => {
  return await request("get", "admin/tables");
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

// get the format for agents, emergencies, authorities, or customers (for the updateView.js)
const get_form_format = async (path) => {
  return await request("get", path);
};

// this gets the info for agents, emergencies, authorities, or customers (to be used by the custom components)
const get_detailed_info = async (path) => {
  return await request("get", path);
};
const get_table_data = async (path, searchParams) => {
  return await request("get", `${path}?${searchParams}`);
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
  get_table_data,
  get_table_list,
  get_detailed_info,
};
