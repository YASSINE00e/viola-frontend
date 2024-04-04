import apiRoutes from "./apiRoutes";

const get = async (apiRoutes) => {
  var res = await fetch(apiRoutes);
  var data = res.json();
  return data;
};

const post = async (apiRoutes, body) => {
  var token = "";
  var res = await fetch(apiRoutes, {
    method: "post",
    headers: new Headers({
      Authorization: token,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(body),
  });
  var data = res.json();
  return data;
};

module.exports = {
  get,
  post,
};
