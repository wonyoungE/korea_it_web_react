import { useEffect, useState } from "react";
import "./SignupForm.css";

const inputValueEmpty = {
  email: "",
  password: "",
};

function SignUpForm() {
  const [formValues, setFormValues] = useState(inputValueEmpty);
  const [error, setError] = useState({});
  const [isDisabled, setIsDisable] = useState(true);

  // 아이디는 @ 잇는지
  // 비밀번호는 8자 이상인지로만 유효성검사 ㄱㄱ
  useEffect(() => {
    // formValues의 값이 바뀔 때마다 무조건 실행
    console.log(formValues.email, formValues.password);
    const emailInput = formValues.email;
    const passwordInput = formValues.password;

    let emailError = "";
    let passwordError = "";
    let formIsValid = true;

    // 이메일 유효성 검사
    if (emailInput.length > 0 && !emailInput.includes("@")) {
      formIsValid = false;
      emailError = "올바르지 않은 이메일 형식입니다.";
    } else if (emailInput.length == 0) {
      // 아무것도 입력되지 않은 상태
      formIsValid = false;
    }

    // 비밀번호 유효성 검사
    if (passwordInput.length > 0 && passwordInput.length < 8) {
      formIsValid = false;
      passwordError = "비밀번호는 8자 이상이어야 합니다.";
    } else if (passwordInput.length == 0) {
      // 아무것도 입력되지 않은 상태
      formIsValid = false;
    }

    const newError = {
      email: emailError,
      password: passwordError,
    };
    setError(newError);

    // 유효성 검사 끝났으면 버튼 활성화 상태 변경
    if (formIsValid) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [formValues]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <h1>간단 회원가입</h1>
      <div id="signupForm">
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={onChangeHandler}
          placeholder="이메일"
        />
        <p>{error.email}</p>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={onChangeHandler}
          placeholder="비밀번호"
        />
        <p>{error.password}</p>
        <button
          disabled={isDisabled}
          onClick={() => console.log("가입 버튼 누름")}
        >
          가입하기
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
