let validateUsername = (name) => {
  if(name.length > 15){
    return "Username cannot be longer than 15 characters";
  } else if (name.length == 0) {
    return "Username is required";
  }
  return "";
}

let validateEmail = (email) => {
  if(email.length == 0){
    return "Email Address is required";
  }
  return "";
}



module.exports = { validateUsername, validateEmail }
