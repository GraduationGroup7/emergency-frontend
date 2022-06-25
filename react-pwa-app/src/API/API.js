import config from "./config";
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

const get_emergency_details = async (emergency_id) => {
  return await request("get", `emergencies/${emergency_id}/all`);
};

const get_available_agents = async () => {
  return await request("get", `agents/available`);
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

const get_chatrooms = async (path) => {
  return await request("get", path);
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

// pass an array of ids to bulk delete
const bulk_delete = async (path, data) => {
  return await request("post", path, data);
};

const get_user_info = async () => {
  return await request("get", "user");
};

// put request to update the info of any user or any emergency. body should be in the form {name: value, etc.}
const update_item = async (path, body) => {
  return await request("put", path, body);
};

// get all emergency types (fires, police, medical, others)
const get_emergency_types = async () => {
  return await request("get", "emergency_types");
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
  get_chatrooms,
  get_messages,
  send_chat_message,
  get_table_data,
  get_table_list,
  get_detailed_info,
  get_form_format,
  get_emergency_details,
  update_item,
  get_emergency_types,
  get_available_agents,
  bulk_delete,
};
