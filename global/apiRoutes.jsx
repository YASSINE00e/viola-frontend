const API_URL = "http://192.168.145.44:5047";

module.exports = {
  register: API_URL + "/api/Auth/Registration",
  login: API_URL + "/api/Auth/Login",
  addPatient: API_URL + "/api/Patient/AddPatient",
  getPatients: API_URL + "/api/Patient/GetPatients",
  checkViolaId: API_URL + "/api/Patient/CheckViolaId",
};
