import "./register.css";
import { Card, TextField, Button, Typography, Link } from "@mui/material";
import {
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material/";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenConfirmPW, setIsHiddenConfirmPW] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const res = await axios.post(`${BACKEND_URL}api/admin/register`, {
          name,
          email,
          password,
        });
        alert(res.data.msg);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
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
        <Typography variant="h2">Sign Up</Typography>
        <Typography variant="subtitle1">
          Learn on your own time from top universities and businesses.
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2rem",
            position: "relative",
          }}
          onSubmit={handleSubmit}
        >
          <div style={{ marginBottom: "2rem" }}>
            <Typography style={{ textAlign: "left" }}>FULL NAME</Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your full name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              fullWidth={true}
            />
          </div>
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
              placeholder="Create password"
              type={isHidden ? "password" : "text"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth={true}
            />
            {isHidden ? (
              <VisibilityOutlined
                className="visibilityIconPW"
                onClick={() => setIsHidden((h) => !h)}
              />
            ) : (
              <VisibilityOffOutlined
                className="visibilityIconPW"
                onClick={() => setIsHidden((h) => !h)}
              />
            )}
          </div>
          <Typography
            variant="caption"
            style={{ marginBottom: "1.5rem", textAlign: "left" }}
          >
            Between 8 and 72 characters
          </Typography>

          <div style={{ marginBottom: "2rem" }}>
            <Typography style={{ textAlign: "left" }}>
              CONFIRM PASSWORD
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Re-enter password"
              type={isHiddenConfirmPW ? "password" : "text"}
              id="re-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth={true}
              style={{ marginBottom: "2rem" }}
            />
          </div>
          {isHiddenConfirmPW ? (
            <VisibilityOutlined
              className="visibilityIconConfirmPW"
              onClick={() => setIsHiddenConfirmPW((h) => !h)}
            />
          ) : (
            <VisibilityOffOutlined
              className="visibilityIconConfirmPW"
              onClick={() => setIsHiddenConfirmPW((h) => !h)}
            />
          )}
          <Button type="submit" variant="contained" size="large">
            Sign up for free
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
          Already on Coursera?{" "}
          <Link
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer" }}
          >
            Log in
          </Link>
        </Typography>
      </Card>
    </div>
  );
}
