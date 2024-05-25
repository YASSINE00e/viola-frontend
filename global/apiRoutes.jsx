const API_URL = "http://192.168.145.44:5047";

module.exports = {
  register: API_URL + "/api/Auth/Registration",
  login: API_URL + "/api/Auth/Login",
  addPatient: API_URL + "/api/Patient/AddPatient",
  getPatients: API_URL + "/api/Patient/GetPatients",
  getPatientsData: API_URL + "/api/Patient/GetPatientsData",
  checkViolaId: API_URL + "/api/Patient/CheckViolaId",
  removePatient: API_URL + "/api/Patient/RemovePatient",
  getUserData: API_URL + "/api/Settings/GetUserData",
  changeData: API_URL + "/api/Settings/ChangeData",
  deleteUser: API_URL + "/api/Settings/DeleteUser",
  analysis: API_URL + "/api/Ai/Analysis",
};
