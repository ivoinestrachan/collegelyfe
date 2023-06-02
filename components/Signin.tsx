import React, { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const validateEmail = () => {
    // const emailRegex =
    //   /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?:[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.edu)$/;
    // setIsValidEmail(emailRegex.test(email));
    // setIsButtonDisabled(!emailRegex.test(email));
    setIsButtonDisabled(true);
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      validateEmail();
    }
  };

  return (
    <div id="signin">
      <div>
        <input
          placeholder="school email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          onKeyDown={handleKeyDown}
          className="border-black border rounded-sm pl-2 pr-2"
        />
        {!isValidEmail && (
          <p className="text-red-500 font-semibold">Invalid school email.</p>
        )}
      </div>
      <div className="text-center justify-center mt-2">
        <button
          className={`text-center ${
            isButtonDisabled ? "bg-gray-400" : "bg-blue-500 text-white rounded-sm"
          } rounded-sm py-1 pl-2 pr-2`}
          disabled={isButtonDisabled}
        >
          Send Magic Link
        </button>
      </div>
    </div>
  );
};

export default Signin;
