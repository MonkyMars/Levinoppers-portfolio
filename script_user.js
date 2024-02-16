const button_text = document.getElementById("button1");

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function login(event) {
  event.preventDefault(); 
  var email = document.getElementById('email').value.toLowerCase();
  var password = document.getElementById('password').value;
  var users = [
    { email: 'levinoppers69@gmail.com', password: 'password' },
    { email: 'l113232@gsr.nl', password: 'HTMLisCool123' },
    { email: 'l113175@gsr.nl', password: 'WeetIkVeel123' },
  ];
  var user = users.find(function(user) {
    return user.email === email && user.password === password;
  });

  if (user) {
    button_text.value = "Logging in...";
    window.location.href = 'user_info.html';
    setCookie('cookieBy', email, 30);
    setCookie('cookieBy1', password, 30); // Set the password cookie
  } else {
    alert('Invalid email or password. Please try again.');
  }
}
