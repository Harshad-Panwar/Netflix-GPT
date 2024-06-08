export const checkValidName = (name) => {
    const isNameValid = /^[a-zA-Z]+(?:[\s-'][a-zA-Z]+)*$/.test(name);
    
      if (!isNameValid)
        return "Enter a Valid Name.";
    
      return null;
  };

export const checkValidEmail = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isEmailValid = emailRegex.test(email);
    // console.log("Email validation result for", email, ":", isEmailValid);
  
    if (!isEmailValid) return "Entered Email Address is Not Valid!";
  
    return null;
  };

export const checkValidPassword = (password) => {
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    password
  );

  if (!isPasswordValid)
    return "Password must contain at least 8 characters, including uppercase, lowercase, and digits.";

  return null;
};

export const checkValidConfirmPassword = (password, confirmPassword) => {
  if (password === confirmPassword) return null;

  return "Passwords do not match. Please use the same password in both fields.";
};
