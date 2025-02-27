/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewClient() {
  const [site, setSite] = useState({
    name: "",
    num: "",
    location: "",
  });

  const { id } = useParams();

  useEffect(()=>{
    loadsite();
  }, []);

  const loadsite= async() =>{
    const result=await axios.get(`http://localhost:8080/Client/${id}`);
    setSite(result.data);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Site Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Site id : {site.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name : </b>
                  {site.name}
                </li>
                <li className="list-group-item">
                  <b>Number Of Simulators : </b>
                  {site.num}
                </li>
                <li className="list-group-item">
                  <b>Location : </b>
                  {site.location}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
          <Link className="btn btn-primary mx-2" to={"/"}>
            View Simulators
          </Link>
        </div>
      </div>
    </div>
  );
}
