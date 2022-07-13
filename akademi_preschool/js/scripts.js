// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// eslint-disable-next-line no-unused-vars
function sendEmail() {

  // eslint-disable-next-line no-undef
  Email.send({
    Host: "smtp.gmail.com",
    Username: "akademiunicef@gmail.com",
    Password: "akademi2020",
    To: "akademiunicef@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Support Request",
    Body:
      "Email" +
      document.getElementById("email").value +
      "<br> Arsyeja e supportit: " +
      document.getElementById("support").value +
      "<br> Mesazhi: " +
      document.getElementById("textArea").value,
  }).then(() => alert("Mesazhi u dërguar me sukses!"));
}