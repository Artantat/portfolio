const validateEmail = (email) => {
  const at = email.indexOf('@');
  const com = email.lastIndexOf('.com');
  if(at === -1 || com === -1){
    return false;
  } else if (at > com){
    return false;
  }
  return true;
}

module.exports = { validateEmail };
