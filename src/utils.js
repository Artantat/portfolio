

const validateEmail = (email) => {
  const regEx = /^[0-9a-zA-Z]+$/;
  const at = email.indexOf('@');
  const com = email.lastIndexOf('.com');
  if(at === -1 || com === -1){
    return false;
  } else if (at > com){
    return false;
  }
  return true;
}

const validateFields = (fields) => {
  for (field of fields){
    if (field.length === 0){
      return false;
    }
  }
  return true;
}

module.exports = { validateEmail, validateFields };
