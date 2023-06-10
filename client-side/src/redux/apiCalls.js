import { publicRequest } from "../reqMethods";
import { loginFail, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFail);
  }
};
