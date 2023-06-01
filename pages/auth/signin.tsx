import React, { useState } from "react";

const signin = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = () => {
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\..+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleKeyDown = (e: { key: string; }) => {
    if (e.key === "Enter") {
      validateEmail();
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder="school email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          onKeyDown={handleKeyDown}
        />
        {!isValidEmail && <p className="text-red-600">Please enter a valid school email.</p>}
      </div>
    </div>
  );
};

export default signin;
