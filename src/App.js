import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Layout/NavBar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewClient from "./Client/ViewClient";
import EditClient from "./Client/EditClient";
import AddClient from "./Client/AddClient";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/addclient" element={<AddClient />}/>
          <Route exact path="/editclient/:id" element={<EditClient/>}/>
          <Route exact path="/viewclient/:id" element={<ViewClient/>} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
