import { useState } from "react";
import styled from "styled-components";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    password: "",
    confirmPassword: "",
  });

  const [formTouched, setFormTouched] = useState({
    name: false,
    id: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setFormTouched({ ...formTouched, [name]: true });
  };

  const validateSignUpForm = () => {
    return (
      validEmail() &&
      validPassword() &&
      passwordsMatch() &&
      formData.name.length > 0
    );
  };

  const validEmail = () => {
    return formData.id.length > 0 && formData.id.includes("@");
  };

  const validPassword = () => {
    return formData.password.length >= 8 && /\d/.test(formData.password);
  };

  const passwordsMatch = () => {
    return formData.password === formData.confirmPassword;
  };

  const handleSignUpSubmit = () => {
    alert("회원가입 하기"); // TODO: add api call for sign up
  };

  return (
    <SignUpContainer>
      <Title>SNULION SIGNUP</Title>
      <Divider disabled={!validateSignUpForm()} />
      <Form onSubmit={handleSignUpSubmit}>
        <FormGroup>
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="id">이메일(아이디)</Label>
          <ButtonGroup>
            <Input
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="이메일을 입력하세요"
            />
            {!validEmail() && formData.id.length > 0 && formTouched.id && (
              <WarningText>이메일 형식이 올바르지 않습니다</WarningText>
            )}
          </ButtonGroup>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="비밀번호를 입력하세요"
          />
          {!validPassword() && formData.password && formTouched.password && (
            <WarningText>최소 8자리, 영문, 숫자를 포함해야 합니다.</WarningText>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="비밀번호 확인"
          />
          {!passwordsMatch() && formData.confirmPassword && (
            <WarningText>비밀번호가 일치하지 않습니다.</WarningText>
          )}
          {passwordsMatch() && formData.confirmPassword && (
            <CorrectText>비밀번호가 일치합니다.</CorrectText>
          )}
        </FormGroup>
        <Button type="submit" disabled={!validateSignUpForm()}>
          가입
        </Button>
      </Form>
    </SignUpContainer>
  );
};

export default SignUpPage;

const buttonColorValidated = "orange";
const buttonColorNotValidated = "#ddd";

const SignUpContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #000;
  color: #fff;
  width: 60rem;
`;

const Divider = styled.hr`
  border: none;
  height: 2px;
  background-color: ${(props) =>
    props.disabled ? buttonColorNotValidated : buttonColorValidated};
  margin-top: 20px;
  margin-bottom: 20px;
`;

const WarningText = styled.span`
  color: red;
  font-size: 0.6rem;
`;

const CorrectText = styled.span`
  color: green;
  font-size: 0.6rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-right: 1rem;
  flex-basis: 100px;
  text-align: left;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
  margin-right: 0.5rem;
  color: #fff;
  &:focus {
    outline: none;
    border-color: ${buttonColorValidated};
  }
  background: #000;
`;

const Button = styled.button`
  padding: 0.5rem;
  margin-top: 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props) =>
    props.disabled ? buttonColorNotValidated : buttonColorValidated};
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: transform 0.1s ease;
  &:active {
    transform: translateY(2px);
  }
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 2rem; // More space below the title
`;
