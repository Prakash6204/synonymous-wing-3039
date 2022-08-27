let array=JSON.parse(localStorage.getItem("Detail"))
console.log(array)

let cont=document.getElementById("cont")

function append(array)
{
    // cont.innerHTML=null
    array.forEach((el,i)=>{
         
        let div=document.createElement("div")
       
        let p1=document.createElement("p")
        p1.innerText=el.name;
        let p2=document.createElement("p")
        p2.innerText=el.mob;
        let p3=document.createElement("p")
        p3.innerText=`${el.flat} , ${el.local}`;
        let p4=document.createElement("p")
        p4.innerText=el.land;
        let p5=document.createElement("p")
        p5.innerText=el.city;
        let p6=document.createElement("p")
        p6.innerText=`${el.state} - ${el.pin}`;
         let button=document.createElement("button")
         button.innerText="Delete";
         button.addEventListener("click",but)
         button.setAttribute("id","but")
         function but()
         {
            Del(el,i)
         }
        // let p8=document.createElement("p")
        // p8.innerText=;
        
       div.append(p1,p2,p3,p5,p6,p4,button)
       cont.append(div)
    })
}

append(array,cont)


document.getElementById("add").addEventListener("click",add)
function add()
{
    window.location.href="./checkout.html"
}
document.getElementById("next").addEventListener("click",next)
function next()
{
    window.location.href="./payment.html"
}


function Del(el,i)
{
    array.splice(i,1)
    localStorage.setItem("Detail",JSON.stringify(array))
    window.location.reload()
}