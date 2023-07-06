

let token = localStorage.getItem("token");
export class APIclass {
  baseUrl = "http://localhost:3000/api/";
  imageUrl = "http://localhost:3000/";

  formHeader = {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-access-token": token,
    },
  };
  normalHeader = {
    headers: {
      
      "x-access-token": token,
    },
  };
  getHeader = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };
}
