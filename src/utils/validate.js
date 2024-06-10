export const checkValidData = (isSignUpForm, name, email, password, confirmPassword) => {
  // console.log({ isSignUpForm, name, email, password, confirmPassword }); // Debugging log

  if (isSignUpForm) {
    // Check if all fields are provided
    if (!name || !email || !password || !confirmPassword) {
      return "All fields are mandatory!";
    }

    // Name validation
    const isNameValid = /^[a-zA-Z]+(?:[\s-'][a-zA-Z]+)*$/.test(name);
    if (!isNameValid) {
      return "Enter a valid name.";
    }

    // Email validation
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    if (!isEmailValid) {
      return "Entered email address is not valid!";
    }

    // Password validation
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    if (!isPasswordValid) {
      return "Password must contain at least 8 characters, including uppercase, lowercase, and digits.";
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      return "Passwords do not match. Please use the same password in both fields.";
    }

    // All validations passed
    return null;
  } else {
    // If it's not a signup form, no validation needed
    if (!email || !password) {
      // console.log({email, password});
      return "All fields are mandatory!";
    }
    
    return null;
  }
};