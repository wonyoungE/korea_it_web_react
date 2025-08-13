import { useEffect, useState } from "react";
import "./SignupForm.css";

function SignUpForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  // 아이디는 @ 잇는지
  // 비밀번호는 8자 이상인지로만 유효성검사 ㄱㄱ
  useEffect(() => {
    setIsDisabled(true);
    const newErrors = {};

    if (!formValues.email.includes("@") && formValues.email.length > 0) {
      newErrors.email = "이메일 형식에 맞게 입력해주세요.";
    }
    if (formValues.password.length < 8 && formValues.password.length > 0) {
      newErrors.password = "비밀번호는 8자리 이상이어야 합니다.";
    }

    setError(newErrors);

    // 유효성 검사 끝났으면 버튼 활성화 상태 변경
    // true가 비활성화
    if (
      Object.keys(newErrors).length === 0 &&
      formValues.email &&
      formValues.password
    ) {
      setIsDisabled(false);
    }
  }, [formValues]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        {error.email && <p>{error.email}</p>}
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={onChangeHandler}
          placeholder="비밀번호"
        />
        {error.password && <p>{error.password}</p>}
        <button
          disabled={isDisabled} // true가 비활성화
          onClick={() => {
            console.log("회원가입 완.");
            setFormValues({
              email: "",
              password: "",
            });
          }}
        >
          가입하기
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
