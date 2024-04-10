import "./login.css";
import { Card, TextField, Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  VisibilityOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material/";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.clear();
    try {
      const res = await axios.post(`${BACKEND_URL}api/user/login`, null, {
        headers: {
          email: email,
          password: password,
        },
      });
      localStorage.setItem("user-token", res.data.token);
      alert(res.data.msg);
      navigate("/courses");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          padding: "5%",
          width: "30%",
          justifyContent: "center",
          margin: "2rem auto 0 auto",
          border: "1px solid black",
          position: "relative",
        }}
      >
        <Typography variant="h2">Welcome back</Typography>
        <form
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2rem",
          }}
          onSubmit={handleSubmit}
        >
          <div style={{ marginBottom: "2rem" }}>
            <Typography style={{ textAlign: "left" }}>EMAIL</Typography>
            <TextField
              variant="outlined"
              placeholder="name@email.com"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth={true}
            />
          </div>
          <div style={{ marginBottom: "0" }}>
            <Typography style={{ textAlign: "left" }}>PASSWORD</Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your password"
              type={isHidden ? "password" : "text"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth={true}
            />
            {isHidden ? (
              <VisibilityOutlined
                className="visibilityIcon"
                onClick={() => setIsHidden((h) => !h)}
              />
            ) : (
              <VisibilityOffOutlined
                className="visibilityIcon"
                onClick={() => setIsHidden((h) => !h)}
              />
            )}
          </div>
          <Typography
            variant="caption"
            style={{ marginBottom: "1.5rem", textAlign: "left" }}
          >
            <Link underline="none" style={{ cursor: "pointer" }}>
              Forgot password?
            </Link>
          </Typography>
          <Button type="submit" variant="contained" size="large">
            Login
          </Button>
        </form>
        <hr style={{ marginTop: "2rem", width: "100%" }} />
        <span
          style={{
            padding: "10px",
            backgroundColor: "inherit",
            zIndex: "2",
            position: "absolute",
            bottom: "6.5rem",
            left: "47%",
          }}
        >
          or
        </span>
        <Typography style={{ marginTop: "1.4rem" }}>
          New to Coursera?{" "}
          <Link
            onClick={() => navigate("/signup")}
            style={{ cursor: "pointer" }}
          >
            Sign up
          </Link>
        </Typography>
      </Card>
    </div>
  );
}
