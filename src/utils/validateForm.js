export function validateForm(fields, errors) {
  errors = [];
  console.log("errors", errors)
  if (!fields.name) {
    // alert("Name is required, please, fill the gap")
    errors.push("Name is required, please, fill the gap");
    return false;
  }
  // errors = [];
  if (!fields.tel) {
    errors.push(
      "Telephone number is required, please, write your telephone number"
    );
    return false;
  }
  // errors = [];
  if (!fields.email) {
    errors.push(
      "Email number is required, please, write your telephone number"
    );
    return false;
  }
  // errors = [];
  if (!fields.address) {
    errors.push("Address is required, please, write your address");
    return false;
  }

  else return true;

}
