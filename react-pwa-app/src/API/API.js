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

const set_emergency_note = async (id, note) => {
  return await request("post", `emergencies/${id}/notes`, { note: note });
};

const get_emergency_note = async (id) => {
  return await request("get", `emergencies/${id}/notes`);
};

const get_emergency_details = async (emergency_id) => {
  return await request("get", `emergencies/${emergency_id}/all`);
};

const get_agent_emergency_details = async () => {
  return await request("get", `agent_emergency`);
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

const get_authority_messages = async (chatroom_id, additionalParams = {}) => {
  const params = new URLSearchParams(additionalParams).toString();
  return await request(
    "get",
    `authorities/chat_rooms/${chatroom_id}/?${params}`
  );
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

const create_backup = async () => {
  return await request("post", "admin/backup");
};

const register_customer = async (data) => {
  return await request("post", "auth/customer/register", data);
};

// pass an array of ids to bulk delete
const bulk_delete = async (path, ids) => {
  return await request("post", `${path}/bulk_delete`, { ids });
};

const get_user_info = async () => {
  return await request("get", "user");
};

// implementation details here: https://stackoverflow.com/questions/41938718/how-to-download-files-using-axios
const get_backup_file = async (fileName) => {
  axios({
    url: `${process.env.REACT_APP_API_URL}/admin/get_backup/${fileName}`, //your url
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("authToken")
        ? "Bearer " + localStorage.getItem("authToken")
        : "",
    },
    responseType: "blob", // important
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "backup.zip"); //or any other extension
    document.body.appendChild(link);
    link.click();
  });
};

// put request to update the info of any user or any emergency. body should be in the form {name: value, etc.}
const update_item = async (path, body) => {
  return await request("put", path, body);
};

const get_mergable_emergencies = async (id) => {
  return await request("get", `emergencies/${id}/merge-able`);
};

// get all emergency types (fires, police, medical, others)
const get_emergency_types = async () => {
  return await request("get", "emergency_types");
};

const resend_code = async (body) => {
  return await request("post", "auth/customer/resend_code", body);
};

// get the format for agents, emergencies, authorities, or customers (for the updateView.js)
// to create ex. path = "agents/create_form"
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

const create_from_form = async (path, body) => {
  return await request("post", `${path}`, body);
};

const send_init_message = async (body) => {
  return await request("post", "authorities/chat_rooms", body);
};

const send_authority_message = async (id, body) => {
  return await request("post", `authorities/chat_rooms/${id}/message`, body);
};
// example (/emergencies/1/assign_agents) body {agent_ids: [1, 2, 3]}
const assign_agents = async (id, agent_ids) => {
  return await request("post", `emergencies/${id}/assign_agents`, {
    agent_ids,
  });
};

const merge_emergencies = async (mainEmergencyId, emergencyIds) => {
  return await request("post", `emergencies/merge`, {
    mainEmergencyId,
    emergencyIds,
  });
};

const update_emergency_form = async (id, body) => {
  return await request("put", `emergencies/${id}/`, body);
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
  create_from_form,
  assign_agents,
  create_backup,
  get_backup_file,
  get_agent_emergency_details,
  resend_code,
  update_emergency_form,
  get_mergable_emergencies,
  merge_emergencies,
  send_authority_message,
  get_authority_messages,
  send_init_message,
  set_emergency_note,
  get_emergency_note,
};
