import React, { useRef, useState } from "react";
import { Row, Col, Button } from "antd";
import StyledInput from "../components/StyledInput";

const SigninForm = () => {
  const [state, setState] = useState(false);
  const emailInput = useRef();
  const passwordInput = useRef();

  const clickSign = () => {
    const emailVai = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (emailInput.current.value.match(emailVai) === null) {
      alert("이메일 형식이 올바르지 않습니다.");
      setState(false);
      return;
    }

    setTimeout(setState(true), 1000);
  };

  return (
    <Col span={10} style={{ marginLeft: 35 }}>
      {state ? <h2>LOG IN. START SEARCHING</h2> : <h2>WelCome!!</h2>}
      <Row type="flex" style={{ paddingLeft: 7 }}>
        Email<span style={{ color: "red" }}>*</span>
      </Row>
      <Row type="flex">
          <StyledInput
            type="email"
            ref={emailInput}
            placeholder="Enter the email"
          />
      </Row>
      <Row type="flex" style={{ paddingLeft: 7 }}>
        PassWord<span style={{ color: "red" }}>*</span>
      </Row>
      <Row type="flex"  style={{ paddingLeft: 7 }}> 
        <StyledInput
          type="password"
          ref={passwordInput}
          placeholder="enter Passard"
        />
      </Row>
      <Row type="flex" style={{ paddingLeft: 7 }}>
        <Button
          onClick={clickSign}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          SIGN IN
        </Button>
      </Row>
      <hr></hr>
      <Row type="flex" style={{ paddingLeft: 7 }}>
        <Col span={18}>Need to create an account</Col>
        <Col span={6}>
          <Button style={{ float: "right" }}>SIGN UP</Button>
        </Col>
      </Row>
      <br></br>
      <Row type="flex" style={{ paddingLeft: 7 }}>
        <Col span={18}>Forget your password?</Col>
        <Col span={6}>
          <Button style={{ float: "right" }}>RECOVERY</Button>
        </Col>
      </Row>
    </Col>
  );
};

export default SigninForm;
