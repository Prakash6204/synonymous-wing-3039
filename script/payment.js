var array=JSON.parse(localStorage.getItem("allData"))
console.log(array)

//     let empty_arr = [];
// localStorage.setItem("cart_data", JSON.stringify(empty_arr));
// let b = JSON.parse(localStorage.getItem("price_data"));
// console.log(b);

let append=(array)=>{
   let sum=0;
let sum1=0;
let sum2=0;
let sum3=0;
   array.forEach((el)=>{
      //let tbp = b[1] + 00;
      sum+=el.price;
      sum2+=el.price2;
      sum3+=(el.price2-el.price)
      console.log(sum,sum1,sum2)
document.getElementById("total_mrp_item").innerText = `₹ ${sum2}`;
document.getElementById("discount_price").innerText = `-₹ ${sum3}`;
document.getElementById("to_be_paid").innerText = `₹ ${sum}`;
document.getElementById("total_savings_amount").innerText = `₹ ${
 sum3}`;
   })
}

append(array)



document.querySelector("#card_payment_btn").addEventListener("click", () => {
  let flag = true;
  let card_number = document.querySelector("#card_num").value;
  let exp_date = document.querySelector("#exp_date").value;
  let cvv_number = document.querySelector("#cvv").value;
  let card_name = document.querySelector("#card_name").value;
  if (card_number.length < 16) {
    alert("enter valid card number");
    flag = false;
  }
  if (exp_date == "") {
    alert("enter valid expiry date");
    flag = false;
  }
  if (cvv_number.length < 3) {
    alert("enter valid CVV number");
    flag = false;
  }
  if (card_name == "") {
    alert("enter valid name");
    flag = false;
  }
  if (flag == true) {
    alert("payment Successfull");
    window.location.href = "index.html";
  }
});

document
  .querySelector("#main_card_payment_btn")
  .addEventListener("click", () => {
    let flag = true;
    let card_number = document.querySelector("#card_num").value;
    let exp_date = document.querySelector("#exp_date").value;
    let cvv_number = document.querySelector("#cvv").value;
    let card_name = document.querySelector("#card_name").value;
    if (card_number.length < 16) {
      alert("enter valid card number");
      flag = false;
    }
    if (exp_date == "") {
      alert("enter valid expiry date");
      flag = false;
    }
    if (cvv_number.length < 3) {
      alert("enter valid CVV number");
      flag = false;
    }
    if (card_name == "") {
      alert("enter valid name");
      flag = false;
    }
    if (flag == true) {
      alert("payment Successfull");
      window.location.href = "thank_you.html";
    }
  });

document.querySelector("#mg_home").addEventListener("click", () => {
  window.location.href = "../home_page/index.html";
});
document.querySelector("#need_help").addEventListener("click", () => {
  window.location.href = "NeedHelp.html";
});