import Input from "./components/InputGroup/InputGroup";
import Button from "./components/ButtonGroup/ButtonGroup";
import "./App.css";

const BasicForm = () => {
  return (
    <div
      style={{
        width: "50%",
        margin: "100px auto",
        backgroundColor: "#efefef",
        boxShadow: "0 2px 5px rgb(0,0,0,0.5)",
        padding: "0.5rem 1rem",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <h3
          style={{
            marginTop: "0.6rem",
            fontSize: "26px",
            fontFamily: "Arial",
            marginBottom: "0.2rem",
          }}
        >
          Sign Up
        </h3>
        <p
          style={{
            fontFamily: "Arial",
            fontSize: "17px",
            color: "#292121ff",
            marginBottom: "1rem",
          }}
        >
          Sign up to continue
        </p>
      </div>
      <form>
        <div>
          <Input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            label="Your Name :"
          />
          <Input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            label="Your Email :"
          />
          <Input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            label="Your Password :"
          />
        </div>
        <div style={{ margin: "10px 0" }}>
          <Button type="res" text="Reset" variant="primary" />
          <Button type="submit" text="Submit" variant="success" />
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
