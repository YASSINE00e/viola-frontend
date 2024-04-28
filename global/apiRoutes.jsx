const API_URL = "http://10.0.2.2:5047";

module.exports = {
  register: API_URL + "/api/Auth/Registration",
  login: API_URL + "/api/Auth/Login",
  addPatient: API_URL + "/api/Patient/AddPatient",
  getPatients: API_URL + "/api/Patient/GetPatients",
};
