document.querySelector("#tick").addEventListener("click",fun)

function sun()
{
 return `<p class="c1" style="font-size: 18px;margin-left: 10px;">Check the health of your vital organs</p>
        <input id="tick" type="checkbox"/><p class="c2" style="font-size: 15px; display: inline;">Thank you for your interest</p>
          
           <p class="c3" style="font-size: 13px;margin-left: 30px;margin-right: 70px;">Our team will call you to book a slot as per your convenience.</p>
           <p class="c4" style="color:green;font-size: 14px;margin-left: 30px">Pay later on home sample collection</p>`;
}
function fun()
{
    document.getElementById("check").innerHTML=sun()
}


document.querySelector("#checkout").addEventListener("click",check)

function check()
{
    window.location.href="./checkout.html"
}



var array=JSON.parse(localStorage.getItem("allData"))
console.log(array)
let cont=document.getElementById("cont")
let sum=0;
let sum1=0;
let sum2=0;
let sum3=0;
let append=(array,cont)=>{
     
    array.forEach((el,i)=>{
        let div=document.createElement("div")
        let div1=document.createElement("div")
        div1.style.display="flex";
        div1.style.justifyContent="space-between";
        let div2=document.createElement("div")
        div2.style.display="flex";
        div2.style.justifyContent="space-between";
        let div3=document.createElement("div")
        div3.style.display="flex";
        
        let div6=document.createElement("div")
        div6.innerText="-";
        div6.style.height="10px";
        div6.style.width="10px";
       //div6.style.border="1px solid gray"
       div6.style.alignItems="center"
        div6.style.textAlign="center";
        div6.addEventListener("click",fun)
        function fun()
        {
            dec(el,i)
        }
        let div7=document.createElement("div")
        div7.innerText="+";
        div7.style.height="10px";
        div7.style.width="10px";
       // div7.style.border="1px solid gray"
       div7.style.alignItems="center"
        div7.style.textAlign="center";
        div7.addEventListener("click",sun)
        function sun()
        {
            inc(el,i)
        }
        let h3=document.createElement("h3")
        h3.innerText=el.brand;
        h3.style.fontSize="15px";
        let p1=document.createElement("p")
        p1.innerText=el.name;
        p1.style.fontSize="14px";
       sum+=el.price;
       console.log(sum)
        let p2=document.createElement("p")
        p2.innerText=`${el.rupees} ${sum}`;
        let p3=document.createElement("p")
        sum2+=el.price2;
        p3.innerText=array.length;
        let p4=document.createElement("p")
        p4.innerText=sum2;
       
        sum3+=(el.price-el.price2);
        console.log(p4)
      let c1=document.getElementById("p1")
        c1.innerHTML=sum2;
        let c2=document.getElementById("p2")
        c2.innerText=sum3;
        let c3=document.getElementById("p3")
        c3.innerHTML=`${el.rupees} 0`;
        let c4=document.getElementById("p4")
        c4.innerHTML=sum;
        let c5=document.getElementById("p5")
        c5.innerText=-(sum3);
        let but=document.createElement("button")
        but.innerText="Remove";
        but.style.cursor="pointer";
        but.addEventListener("click",mun)
        let div5=document.createElement("div")
        div5.style.display="flex";
        div5.style.justifyContent="space-around";
        div5.style.width="100px";
        div5.style.height="20px";
        div5.style.alignItems="center";
        div5.style.cursor="pointer";
        // div5.style.justifyContent="center";
        div5.append(div6,p3,div7)
        let div4=document.createElement("div")
        div1.append(but,div5)
        // div1.style.border="1px solid red"
        // div5.style.border="1px solid red"
        div3.append(div4)
        div2.append(p1,p2)
        //div2.style.border="1px solid red"
        div.append(h3,div2,div3,div1)
        cont.innerHTML=null;
        cont.append(div)

    })

   
    
}
append(array,cont)

function dec(el,i)
{
array.splice(i,1)
localStorage.setItem("dataone",JSON.stringify(array))
window.location.reload();
}
function inc(el,i)
{
    array.push(el)
    localStorage.setItem("dataone",JSON.stringify(array))
    window.location.reload();
}
function mun(el,i)
{
array.splice(i,1)
localStorage.setItem("dataone",JSON.stringify(array))
window.location.reload();
}


var que=[ {
      avatar:
        "https://onemg.gumlet.io/images/c_fit,q_auto,w_150,f_auto,h_150/jmuuryvgit6mwwolt0ea/revital-h-capsule.jpg",
      brand: "Revital H Capsule",
      name: "bottle of 60 soft gelatin capsules",
      rupees: "₹",
      price: 495,
      rupees2: "₹",
      price2: 999,
      offer: "10% OFF"
  
    },
    {
      avatar:
        "https://onemg.gumlet.io/images/c_fit,q_auto,w_150,f_auto,h_150/gmkrpf1imjj9djwvq4gq/tata-1mg-multivitamin-supreme-zinc-calcium-and-vitamin-d-immunity-booster-capsule.jpg",
  
      brand: "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D",
      name: "bottle of 60 capsules",
      rupees: "₹",
      price: 498,
      rupees2: "₹",
      price2: 995,
      offer: "50% OFF",
  
    },
    {
      avatar:
        "https://onemg.gumlet.io/images/c_fit,q_auto,w_150,f_auto,h_150/xbhkkhnpj6gsv3xldvwq/carbamide-forte-multivitamin-sports-vegetarian-tablet.jpg",
      brand: "Carbamide Forte Multivitamin Sports Vegetarian Tablet",
      name: "bottle of 60 tablets",
      rupees: "₹",
      price: 499,
      rupees2: "₹",
      price2: 875,
      offer: "43% OFF"
    },
    {
      avatar:
        "https://onemg.gumlet.io/images/c_fit,q_auto,w_150,f_auto,h_150/cropped/omz1zuuelyaqnupl0wwe/maxirich-multivitamin-minerals-softgel.png",
      brand: "Maxirich Multivitamin & Minerals Softgel",
      name: "box of 30 soft gelatin capsules",
      rupees: "₹",
      price: 198,
      rupees2: "₹",
      price2: 330,
      offer: "10% OFF"
  
    },
    {
      avatar:
        "https://onemg.gumlet.io/images/c_fit,q_auto,w_150,f_auto,h_150/geiwxvovi2c600riqel3/wellman-health-supplement-for-men-tablet.jpg",
      brand: "Wellman Health Supplement for Men Tablet",
      name: "strip of 30 tablets",
      rupees: "₹",
      price: 350,
      rupees2: "₹",
      price2: 438,
      offer: "20% OFF"
    },
    {
      avatar:
        "https://onemg.gumlet.io/images/c_fit,q_auto,w_150,f_auto,h_150/aywb3kusfcv1tnyyt8qy/dr.-morepen-multi-vitamin-men-with-omega-3-herbs-natural-energy-immunity-booster-tablet.jpg",
      brand: "Dr. Morepen Multi Vitamin Men with Omega 3 & Herbs, Natural Energy &",
      name: "bottle of 60 tablets",
      rupees: "₹",
      price: 749,
      rupees2: "₹",
      price2: 999,
      offer: "25% OFF"
    },
    
]
let cont1=document.getElementById("adv")
let app=(que,cont1)=>{
cont1.innerHTML=null
que.forEach((el)=>{
    let div=document.createElement("div")
    let div1=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.avatar;
    let h4=document.createElement("h4")
    h4.innerText=el.brand;
    let p1=document.createElement("p")
    p1.innerText=el.name;
    let p2=document.createElement("p")
    p2.innerText=`${el.rupees}${el.price}`;
    let button=document.createElement("button")
    button.innerText="ADD";
    button.style.color="red";
    button.style.backgroundColor="white";
    button.style.border="none";
    button.style.color="red";
    button.style.counterIncrement="pointer";
    button.addEventListener("click",fun)
    function fun()
    {
        Add(el)
    }
    div1.append(img)
    div.append(div1,h4,p1,p2,button)
    cont1.append(div)


})
}

function Add(el)
{
    array.push(el)
    localStorage.setItem("dataone",JSON.stringify(array))
    window.location.reload()
}
app(que,cont1)