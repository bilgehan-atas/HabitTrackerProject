import axios from "axios";

const baseURL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_N6qTpBueVt_Ryh0uU493RqbPKen-_SY";

const signUp = (body) => {
  axios
    .post(baseURL, {
      email: body.email,
      password: body.password,
      returnSecureToken: true,
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export default signUp;
