const submit = document.getElementById("Submit_name");
const changename = document.getElementById("changename");
const name1 = document.getElementById("name");
const email = document.getElementById("email");
const feedback = document.getElementById("feedback");


submit.onclick = function(event) {
  event.preventDefault();
  var name1_value = name1.value;
  var email_value = email.value;
  var feedback_value = feedback.value;

  if (name1.value.length >= 1) {
    changename.textContent = "Welcome " + name1_value + ", This is where I store all my projects.";
  } else {
    window.alert("Please enter a name.");
    return; 
  }

  console.log(name1_value);
  console.log(email_value);
  console.log(feedback_value);

  if (feedback.value.length <= 15) {
    window.alert("Feedback must be 15 characters or more.");
    return; 
  }
};
