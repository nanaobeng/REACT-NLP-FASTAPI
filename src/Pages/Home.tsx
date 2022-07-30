import { useState, useEffect } from "react";
import Layout from "../Components/CoreLayout/Layout";
import { Autocomplete } from "@mantine/core";
import { getWords, getSimilarWords, getVector } from "../APIs/Words";
import SimilarWords from "./SimilarWords";
import VectorModal from "./VectorModal";
import { isAuthenticated } from "./Auth/AuthAPIs";

const Home = () => {
  const { token } = isAuthenticated();
  const [error, setError] = useState(false);
  const [words, setWords] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [word, setWord] = useState("");
  const [vector, setVector] = useState("");
  const [limit, setLimit] = useState(10);
  const retrieveWords = () => {
    getWords(token).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setWords(data.words);
      }
    });
  };

  const retrieveVector = () => {
    getVector(word, token).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setVector(data);
        // setVectpo(data.words);
      }
    });
  };

  const retrieveSimilarWords = () => {
    getSimilarWords(word, limit, token).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setSynonyms(data.data);
        retrieveVector();
      }
    });
  };

  useEffect(() => {
    retrieveWords();
  }, []);

  useEffect(() => {
    word !== "" && setLimit(10);
    retrieveSimilarWords();
  }, [word]);

  useEffect(() => {
    word !== "" && retrieveSimilarWords();
  }, [limit]);

  return (
    <Layout>
      <div
        className="row justify-content-center p-4"
        style={{ backgroundColor: "#eeee", minHeight: "100vh" }}
      >
        <div className="col-12">
          <div className="row justify-content-center">
            <div className="col-md-9 col-sm-11 p-4">
              <div
                className="row p-4 shadow"
                style={{ backgroundColor: "white", border: "3px solid black" }}
              >
                <div className="col-12 p-4">
                  <Autocomplete
                    label="Select a word"
                    placeholder="Type Here"
                    data={words}
                    value={word}
                    onChange={setWord}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-11">
              <div className="row p-4">
                <div className="col-12 p-4">
                  <div className="row">
                    {word !== "" && (
                      <div
                        className="col-12 shadow p-4"
                        style={{ height: "auto", backgroundColor: "white" }}
                      >
                        <div className="row p-4">
                          <div className="col-md-6 col-sm-12">
                            <b> {synonyms.length} Similar Words</b>
                            <hr />
                          </div>
                          <div className="col-md-6 col-sm-12 text-right">
                            <div className="row text-right">
                              <div className="col-6 text-right px-2">
                                <VectorModal vector={vector} />
                              </div>
                              <div className="col-6 text-left px-2">
                                <span
                                  className="btn btn-sm btn-primary"
                                  onClick={() => {
                                    setLimit(limit + 10);
                                  }}
                                >
                                  More Words
                                </span>
                              </div>
                            </div>

                            <hr />
                          </div>
                        </div>
                        {synonyms && <SimilarWords words={synonyms} />}
                      </div>
                    )}
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

export default Home;
