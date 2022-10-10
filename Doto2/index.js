$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);

function validate(){
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  var dob  = document.getElementById('dob');
  var email = document.getElementById('email');
  var confirm_password = document.getElementById('confirm_password');

  var errorMessage = document.getElementById('error-message');
  var errorUsername = document.getElementById('error-username');

  
  //Username Validate
  //Username minimal 3 huruf, maksimal 30 huruf

  if(username.value.length < 3 || username.value.length > 30){
    errorMessage.innerHTML = "<p style='color:red'>Username must be between 3 - 30 characters</p>";
    return;
  }

  //password validate
  //huruf pertama HARUS kapital
  //password 6 - 20 character
  var isUpper = false;
  var passwordLen = password.value.length;

  if(password.value == ""){
    errorMessage.innerHTML = "<p style='color:red'>Password cannot be blank !</p>";
  }


  for(let i=0;i<password.value.length;i++){
    if(password.value[0] >= 'A' && password.value[0] <= 'Z'){
      isUpper = true;
    }
  }


  if(!isUpper){
    errorMessage.innerHTML = "<p style='color:red'>First letter of password must be Capital !</p>"
    return;
  }

  if(passwordLen < 6 || passwordLen > 20){
    errorMessage.innerHTML = "<p style='color:red'>Password must be between 6 - 20 character !</p>"
    return;

  }


  //confirm password validation

  if(confirm_password.value != password.value){
    errorMessage.innerHTML = "<p style='color:red'>Password did not match !</p>"
    return;
  }


  //email validation
  //harus ada @
  //harus berakhiran ".com"
  
  
  
  var posAt = email.value.indexOf('@');

  if(posAt < 1){
    errorMessage.innerHTML = "<p style='color:red'>Email must be contain '@'</p>"
    return;
  }

  if(!email.value.endsWith(".com")){
    errorMessage.innerHTML = "<p style='color:red'>Email must be ends with '.com'</p>"
    return;
  }


  //dob validation
  var inputDate = new Date(dob.value).getDate();
  var currentDate = new Date().getDate();

  if(dob.value == "" || inputDate >= currentDate){
    errorMessage.innerHTML = "<p style='color:red'>Invalid date of Birth !</p>"
        return;
  }

  errorMessage.innerHTML = "<p style='color:green'>Register Success!</p>"
  



}