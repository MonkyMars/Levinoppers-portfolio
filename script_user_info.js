function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

document.addEventListener("DOMContentLoaded", function() {
  function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  }

  const emailValue = getCookie('cookieBy');
  const passwordValue = getCookie('cookieBy1');

  const emailParagraph = document.getElementById('emailParagraph');
  const passwordParagraph = document.getElementById('passwordParagraph');
  if (emailValue && passwordValue) {
    emailParagraph.textContent = emailValue;
    passwordParagraph.textContent = "•".repeat(passwordValue.length);
  } else {
    emailParagraph.textContent = "Email not found in cookie.";
    passwordParagraph.textContent = "Password not found in cookie.";
    document.querySelector(".wrapper").classList.add("show");
  }

  document.getElementById("acceptBtn").addEventListener("click", function() {
    const loggedInUserEmail = ""; 
    setCookie('cookieBy', loggedInUserEmail || 'user', 15); 
    setCookie('cookieBy1', 'password', 15); 
    document.querySelector(".wrapper").classList.remove("show");
    emailParagraph.textContent = "Email: " + (loggedInUserEmail || 'user');
    passwordParagraph.textContent = "Password: password";
  });
});
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

const password_p = document.getElementById("passwordParagraph")
const togglePassword = document.getElementById("button12")

            
  togglePassword.onclick = function(event) {   
    event.preventDefault();  
    if (togglePassword.classList.contains('pressed')) {
                togglePassword.classList.remove('pressed');
                togglePassword.classList.add('unpressed');
                password_p.textContent = getCookie('cookieBy1');
            } else {
                togglePassword.classList.add('pressed');
                togglePassword.classList.remove('unpressed');
                password_p.textContent = "•".repeat(getCookie('cookieBy1').length);
            }
    }
