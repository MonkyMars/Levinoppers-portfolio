const cookiebox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executesCodes = () => {
  // Check if there are any cookies active
  if (!document.cookie) {
    console.log("No cookies active");
    // Show the popup if there are no cookies active
    cookiebox.classList.add("show");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        cookiebox.classList.remove("show");
        if(button.id == "acceptBtn"){
          document.cookie = `cookieBy = user; max-age = ` + 60 * 60 * 24 * 15 + ";path=/";
        }
      });
    });
  }
};

window.addEventListener("load", executesCodes);
console.log(cookiebox);
