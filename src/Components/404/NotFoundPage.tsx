import { Link } from "react-router-dom";

import { ExternalLink } from "react-external-link";
import Layout from "../CoreLayout/Layout";
const NotFoundPage = () => {
  return (
    <Layout>
      <div className="row">
        <div
          className="col-12 px-4"
          style={{ paddingTop: "5%", paddingBottom: "15%" }}
        >
          <div className="row justify-content-center p-4 ">
            <div className="col-md-8 col-sm-10 p-4">
              <div
                className="row "
                style={{ backgroundColor: "white", border: "4px solid black" }}
              >
                <div className="col-12 text-center pt-4">
                  <span
                    style={{
                      lineHeight: "8vh",
                      color: "black",
                      fontSize: "7vh",
                      fontWeight: "bold",
                      fontFamily: "'Friz Quadrata Std', sans-serif",
                    }}
                  >
                    Page Does Not Exist
                  </span>
                  <br />
                  <br />
                  <br />
                  <ExternalLink href="/" target="_self">
                    <span
                      className="btn btn-primary
                    "
                    >
                      <b>Return Home</b>
                    </span>
                    <br />
                    <br />
                  </ExternalLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
