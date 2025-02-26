import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [sites, setSites] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();

  useEffect(() => {
    loadSites();
  }, []);

  const loadSites = async () => {
    const result = await axios.get("http://localhost:8080/GetClient");
    setSites(result.data);
  };

  const deleteClient = async (id) => {
    await axios.delete(`http://localhost:8080/Client/${id}`);
    loadSites();
  };
  return (
    <div
    className="d-flex justify-content-center align-items-center"
    style={{
      backgroundImage: "url('/winch_1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      className="py-4"
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        padding: "20px",
        borderRadius: "10px",
        width: "90%", // Adjust width as needed
        maxWidth: "900px", // Ensures it doesn’t stretch too much
        textAlign: "Fill", // Centers the table inside
      }}
    >
      <h2 className="text-center mb-4"> Mining  Clients</h2>
      <table className="table border shadow table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Number of Simulator/s</th>
            <th scope="col">Location</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {sites.map((site, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{site.name}</td>
              <td>{site.num}</td>
              <td>{site.location}</td>
              <td>
                <Link className="btn btn-primary mx-2" to={`/viewclient/${site.id}`}>
                  View
                </Link>
                <Link className="btn btn-outline-primary mx-2" to={`/editclient/${site.id}`}>
                  Edit
                </Link>
                <button className="btn btn-danger mx-2" onClick={() => deleteClient(site.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>  
  );
}
