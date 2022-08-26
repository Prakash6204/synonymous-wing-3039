var slideIndex = 1;

var myTimer;

window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () {
    plusSlides(1);
  }, 3000);
});

function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }

  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlides(n + 2);
    }, 3000);
  } else {
    myTimer = setInterval(function () {
      plusSlides(n + 1);
    }, 3000);
  }
}

function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1);
  }, 3000);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
};

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(slideIndex);
  }, 3000);
};



// let gogl = document.querySelector("#gogl");
// gogl.addEventListener("click",function(){
//     window.location.href = "login.html"
// })

// let login = document.querySelector("#signup").addEventListener("click",function(event){
//     event.preventDefault()
//     window.location.href="login.html"
// })
let form = document.querySelector(".form");
    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    
    form.addEventListener("submit",function(event){
        event.preventDefault();
        let data={
            
            email:form.mobile.value,
            password:form.password.value,
           
        }
        if(checkEmails(data.email)===true){
            alert("Sign UP Sucessfull")
            window.location.href="login.html"
            userData.push(data);
            localStorage.setItem("userData",JSON.stringify(userData));
        }else{
            window.location.href="login.html"
            alert("Account Already Exists");
        }
    })

    function checkEmails(email){
        let filtered = userData.filter(function(element){
            return email === element.email;
        })
        if(filtered.length >0){
            return false;
        }else{
            return true;
        }
    }