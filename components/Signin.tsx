import React, { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?:[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.edu)$/;
    setIsValidEmail(emailRegex.test(email));
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
        />
        {!isValidEmail && (
          <p className="text-red-600 font-semibold">Please enter valid school email.</p>
        )}
      </div>
    </div>
  );
};

export default Signin;
