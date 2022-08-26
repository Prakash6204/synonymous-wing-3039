document.querySelector("#Cancel").addEventListener("click",Cancel)
function Cancel()
{
   window.location.href="./index.html"
}
document.querySelector("#Save").addEventListener("click",Save)
function Save()
{
   let flat=document.getElementById("flat").value;
   let land=document.getElementById("land").value;
   let pin=document.getElementById("pin").value;
   let local=document.getElementById("local").value;
   let city=document.getElementById("city").value;
   let state=document.getElementById("state").value;
   let name=document.getElementById("name").value;
   let mob=document.getElementById("mob").value;
   // let =document.getElementById("").value;
   // let =document.getElementById("").value;
   let array=JSON.parse(localStorage.getItem("Detail"))||[];
   class Detail
   {
      constructor(f,l,p,lo,c,s,n,m)
      {
         this.flat=f;
         this.land=l;
         this.pin=p;
         this.local=lo;
         this.city=c;
         this.state=s;
         this.name=n;
         this.mob=m;


      }
   }

   let obj=new Detail(flat,land,pin,local,city,state,name,mob)
   console.log(obj)
   array.push(obj)
   localStorage.setItem("Detail",JSON.stringify(array))
   window.location.href="./address.html"

}
console.log("hi")
