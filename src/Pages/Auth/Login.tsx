import { useState } from "react";
import Layout from "../../Components/CoreLayout/Layout";
import { login, authenticate } from "./AuthAPIs";
import { Loader } from "@mantine/core";
import { Alert } from "antd";
const Login = () => {
  const [values, setValues] = useState<any>({
    email: "",
    password: "",
    loading: false,
    error: false,
  });

  const { email, password, loading, error } = values;
  const submitForm = () => {
    // setValues({ ...values, error: false, loading: true });
    login(email, password).then((data) => {
      setValues({ ...values, error: false });
      setValues({ ...values, loading: true });

      if (data.detail === "Invalid Credentials") {
        setValues({ ...values, error: true, loading: false });
      } else {
        authenticate(data, () => {
          window.location.href = "/";
        });
      }
    });
  };

  const authForm = () => {
    return (
      <div className="col-12 p-4">
        <form>
          <div className="row p-4">
            <div className="col-12 py-2">
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                value={email}
                onChange={(e) => {
                  setValues({ ...values, email: e.target.value });
                }}
              />
            </div>

            <div className="col-12 pt-2 pb-4">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => {
                  setValues({ ...values, password: e.target.value });
                }}
              />
            </div>

            <div className="col-12 pb-2 pt-4">
              <span className="btn btn-success py-1 w-100" onClick={submitForm}>
                {!loading ? "Login" : <Loader color="white" />}
              </span>
            </div>
            {error && (
              <div className="col-12 py-2">
                <Alert
                  message="Invalid Credentials"
                  type="error"
                  showIcon
                  closable
                />
              </div>
            )}
          </div>
        </form>
      </div>
    );
  };

  return (
    <Layout>
      <div className="row p-4">
        <div className="col-12 p-4">
          <div className="row p-4">
            <div className="col-12" style={{ paddingTop: "5%" }}>
              <div className="row justify-content-center">
                <div
                  className="col-md-6 col-sm-10 shadow p-4"
                  style={{ backgroundColor: "white", height: "auto" }}
                >
                  <div className="row">
                    <div className="col-12 text-center">
                      <h3>
                        <b>Login</b>
                      </h3>
                    </div>
                    {authForm()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
