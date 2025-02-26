/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditClient() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [site, setSite] = useState({
    name: "",
    num: "",
    location: "",
  });
  const { name, num, location } = site;

  const onInputChange = (e) => {
    setSite({ ...site, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadSite();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/Client/${id}`, site);
    navigate("/");
  };

  const loadSite = async () => {
    const result = await axios.get(`http://localhost:8080/Client/${id}`);
    setSite(result.data);
  };

  return (
    <div className="container">
      <div className="Row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Edit Site</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name of site" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder=" Enter Site Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Number of simulators" className="form-label">
                Number of Simulators
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Number of Simulators"
                name="num"
                value={num}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Site location" className="form-label">
                Location
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter site location"
                name="location"
                value={location}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button typeof="Submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
