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
// let login = document.querySelector("#login");
    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    console.log( userData)

    login.addEventListener("click",fun)
    function fun(event){

    
        event.preventDefault();
        console.log("hello")
        
            email=form.mobile.value,
            password=form.password.value,
      
            userData.forEach((element)=>{
              if(element.email==email&&element.password==password)
              {
                
                alert("Your sign in successfull!");
                
                  window.location.href="./index.html"
                
          
                
              }
              
          
              
             
            
            });
          }
            
