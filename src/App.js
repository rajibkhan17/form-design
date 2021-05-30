import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";


export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChangeData = (data) => {
    setName(data);
  };
  const onChangeData2 = (data) => {
    setEmail(data);
  };

  const submitData = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 bgs text-center p-3">
          <h2>Section one</h2>
          <p>
            some important information add your profile then join our community
          </p>
        </div>
        <div className="col-md-6 bg text-center p-3">
          <h2>Register form</h2>
          <form className="dd" onSubmit={submitData}>
            <div className="form-group">
              <label className="left">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                onChange={(e) => onChangeData(e.target.value)}
                value={name}
                placeholder="name"
              />
            </div>
            <div className="form-group">
              <label className="left">Email</label>
              <input
                className="form-control"
                type="email"
                name="name"
                onChange={(e) => onChangeData2(e.target.value)}
                placeholder="Email"
                value={email}
              />
            </div>
            <button className="btn btn-primary mt-2">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
