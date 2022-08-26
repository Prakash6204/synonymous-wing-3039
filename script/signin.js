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
//     window.location.href = "signup.html"
// })
let form = document.querySelector(".form");
let login = document.querySelector("#login");
    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    login.addEventListener("click",function(event){
        event.preventDefault();
        let data = {
            email:form.mobile.value,
            password:form.password.value,
        }

        if(checkSignin(data.email,data.password)===true){
            alert("Sign in Successful");
            window.location.href="dashboard.html"
            name(data.email)
        }else{
            alert("Wrong Username or Password");
            window.location.href="signup.html"
        }
    })

    function checkSignin(mobile,password){
        let filter = userData.filter(function(element){
            return element.mobile === mobile && element.password === password;
        })
        if(filter.length>0){
            return true;
        }else{
            return false;
        }
    }
    let name = (mobile)=>{
        userData.forEach((element) => {
            if(element.mobile == mobile)
            localStorage.setItem("Name_on_Dashboard", element.name)    
        });
    }