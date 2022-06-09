import config from "./config.json";

const request = async (method, path, body) => {
  const rawResponse = await fetch(`${config.api}/${path}`, {
    method: method.toUpperCase(),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("authToken") || "",
    },
    body: JSON.stringify(body),
  });
  return await rawResponse.json();
};

const get_emergencies = async () => {
  return await request("get", "emergencies");
};

const create_emergency = async (body) => {
  return await request("post", "emergencies", body);
};

const login = async (email, password) => {
  return await request("post", "auth/login", { email, password });
};

const register_customer = async (data) => {
  return await request("post", "auth/customer/register", data);
};

export { create_emergency, login, register_customer };
