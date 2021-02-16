import http from "../http-common";

const getAll = () => {
  return http.get("/");
};

const get = (id) => {
  return http.get(`/${id}`);
};

const findByProduct = (Product) => {
  return http.get(`?q=${Product}`);
};

const create = (data) => {
  return http.post("/", data);
};

const update = (id, data) => {
  return http.put(`/?id=${id}`, data);
};

const remove = (id) => {
  return http.delete(`/?id=${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByProduct,
};
