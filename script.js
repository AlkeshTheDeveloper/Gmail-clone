
const result = function () {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  // Check whether AM or PM
  var newformat = hours >= 12 ? "PM" : "AM";

  // Find current hour in AM-PM Format
  hours = hours % 12;

  // To display "0" as "12"
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + newformat;
};

var rowHTML = document.getElementById("emails");

/* chechbox select all checkbox function*/

function toggle(source) {
  checkboxes = document.getElementsByName("foo");
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = source.checked;
  }
}

/*   function for toggleling icon and  filling color */

function chngimg(para) {
  var img = document.getElementById(para);

  if (img.innerText == "star_border") {
    document.getElementById(para).innerHTML = "star";
    document.getElementById(para).style.color = "yellow";
  } else if (img.innerText != "star_border") {
    document.getElementById(para).innerHTML = "star_border";
    document.getElementById(para).style.color = "grey";
  }
}

/*   function for toggleling label images */

function chnglab(para) {
  var lab = document.getElementById(para).src;
  if (lab.indexOf("labelu.png") != -1) {
    document.getElementById(para).src = "images/labelf.png";
  } else {
    document.getElementById(para).src = "images/labelu.png";
  }
}


/* function for hide and display sidebar */
function visibleDropdown(id) {
  var user = (document.getElementById(id).style.display = "block");
  event.preventDefault();
}

document
  .getElementById("dropdown1")
  .addEventListener("pointerleave", (event) => {
    event.preventDefault();
    document.getElementById("dropdown1").style.display = "none";
  });

document
  .getElementById("dropdown2")
  .addEventListener("pointerleave", (event) => {
    event.preventDefault();
    document.getElementById("dropdown2").style.display = "none";
  });

let mailclient = document.getElementById("create-mail");

document.getElementById("mailit").addEventListener("click", () => {
  const senderMail = `<div class="container  bg-light mx-2" style="width:38vw;border-radius:30px;z-index:3">
  <div class="mb-3 row bg-black">
   <div class="col-9"><p class="text-white">New Message</p></div>
   <div class="col-3 d-flex justify-content-end px-1">
    <span class="material-icons closebutton">remove
</span><span class="material-icons closebutton">
open_in_full

</span><span class="material-icons closebutton" onclick="this.parentElement.parentElement.parentElement.style.display = 'none'">
    close
</span>
   </div>
  </div>
<div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">To</label>
    
    <div class="col-sm-10">
      <input type="text"  class="form-control" id="staticEmail">
    </div>
    
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Subject</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword">
    </div>
  </div>
  <textarea class="w-100 h-50 border-0"></textarea>
  <div class="mb-3 row">
   <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn-info  btn-md text-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Send
    </button>
  

   
  </div>
  </div>
  
  `;

  mailclient.insertAdjacentHTML("beforeend", senderMail);
});

document.getElementById("right-hider").addEventListener('click', () => {
 document.getElementById("right-arrow").innerHTML= "chevron_left";

  document.getElementById("sidebar2").classList.toggle('hidemenu');
  document.getElementById("scroller").classList.toggle('email-mess-inc');
})
  

