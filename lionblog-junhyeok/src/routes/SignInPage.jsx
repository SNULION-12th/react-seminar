import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignInPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ id: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("로그인 하기"); // TODO: add api call for sign in
  };

  const validateLoginForm = () => {
    return credentials.id.length > 0 && credentials.password.length > 0;
  };

  const resetForm = () => {
    setCredentials({ id: "", password: "" });
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginTitle>SNULION LOGIN</LoginTitle>
        <Divider disabled={!validateLoginForm()} />
        <InputGroup>
          <Input
            type="text"
            name="id"
            placeholder="아이디"
            value={credentials.id}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <ButtonContainer>
          <Button type="submit" disabled={!validateLoginForm()}>
            로그인
          </Button>
        </ButtonContainer>
        <Divider disabled={!validateLoginForm()} />
        <OptionsGroup>
          <div>
            <OptionLink onClick={() => navigate("/signup")}>
              {" "}
              회원가입
            </OptionLink>
            <OptionLink onClick={() => resetForm()}> 초기화</OptionLink>
          </div>
        </OptionsGroup>
      </LoginForm>
    </LoginContainer>
  );
};

export default SignInPage;

const buttonColor = "orange";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 50px;
  width: 30rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  background: #000;
`;

const LoginTitle = styled.h2`
  text-align: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
`;

const Divider = styled.hr`
  margin: 1.5rem 0;
  border: 1px solid ${(props) => (props.disabled ? "#ddd" : buttonColor)};
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.6rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background: #000;
  color: #fff;
  &:focus {
    outline: none;
    border-color: ${buttonColor};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.7rem 1rem;
  color: white;
  background-color: ${(props) => (props.disabled ? "#ddd" : buttonColor)};
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: transform 0.1s ease;
  width: 100%;
  font-size: 1.3rem;
  &:active {
    transform: translateY(2px);
  }
  color: #fff;
`;

const OptionsGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: #fff;
`;

const OptionLink = styled.span`
  color: #010;
  margin: 0 0.5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  color: #fff;
`;
