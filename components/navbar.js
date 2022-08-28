function navbar(){
return `   <header id="header">
<div id="top_row">
  <div class="colom1">
    <div class="comp_logo">
      <a href="./index.html"
        ><img src="	https://www.1mg.com/images/tata_1mg_logo.svg" alt=""
      /></a>
    </div>
    <ul class="colom1_list">
      <li class="list1">
        <a href=""><div>Medicines</div></a>
      </li>
      <li class="list2">
        <a href=""><div>LAB TESTE</div> </a>
      </li>
      <li class="list2">
        <a href=""><div>CONSULT DOCTORS</div> </a>
      </li>
      <li class="list2">
        <a href=""><div>COVID-19</div> </a>
      </li>
      <li class="list2">
        <a href=""><div>AYURVEDA</div> </a>
      </li>
      <li class="list2">
        <a href=""><div>CARE PLAN</div> </a>
      </li>
    </ul>
  </div>
  <div class="colom2">
    <div class="left_colom">
      <div class="login_singup_div">
        <div>
          <a href=""><span>login</span></a>
          <span>|</span>
          <a href=""><span>sign up</span></a>
        </div>
      </div>
      
    </div>
 <a href="../cart/cart.html" > <div class="nav_cart"></div></a>
 need help?
  </div>
 
</header>
<div class="row2">
<div class="location">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAYFBMVEX///8BAQEAAAD09PTo6Ohra2uvr688PDzHx8d0dHSNjY26uromJiZFRUX8/PwQEBDW1taEhISUlJTe3t4yMjLAwMBmZmZRUVHOzs4rKyukpKRgYGBMTEwVFRVXV1d+fn7oOpTsAAACyElEQVRoge2Zi27qMAyGwb039AKlQGHsvP9bHkoptdukRSMO2uRPmrStEX9iB9+6WgmCIAiCIAiCIAjCLJ5fxkrVcel7HxBXSQY9WaLcbiEOOuF1S/drELtTj3rpgdt/opMTdT/oTw7o526FwOeXj5vJ2QcTNPEq55UPTep3OwCEvPIprM36dx+knBZIZ07fb2HHJ98Zf7hy2j/4XFAtnr6zQMUjn+9fkb9tYM+jvxvJw4CLK+AXgD3dBrxElVWpkns4RBcBCo44tAV6yKjuc45XR9QEsLUv72+AyKfkKf1iwsa+Ac5YAUCNHiu6gbN1/Qg7WPMdD0lWimzL++T4/zQrEmIf2w7A9gXQVTseWTH2z7uk+HTp8hLbIeCCD1dql5TYAAfL+g0M968wrCmG+2c9BuOzfRnWZNhGjPqJYU3yh/XXyP9Hw5oj8v/Vsv4Rnc302Ve05tuyfoptqw9uuDwyhIifg+Kfqb7YccY/El0LXYmdF0sR+i0ynP90Btjh8sgUIn5OSNLLtNmNSYK0X4OT+geKca97KvBjhvpnlN9HJwxJEWyMUO9QAnLwbQfB0GZUAaAnxgT5Hvn3qACGw7nycq86X0YdAFxYWlD1Yv+xhppD/lGCLmO/+Hyg6NhF3/8yxL4nm1cMABsu+dnhy3ArGEcw2fIGGELvQPzC/IV1DnmAhftnvfCmLI1g2IYvPdsFfYbOn5DPGgCAefyJZ3Aa/3OPP1syswEg45dfnYwe4Mm7E4xX0HrRrcczzCFh7+glTG14/8CU9qcEuisAgSt50owMl8/hKzA12QBj1aEjwL4Ht9Zv8UelEEvHMUdN563u7n4PbYd0A1Fecpx2ruxpb0r97DuYay4TzzzAXnToyb8egff4Aeu3VPehHKyZSz4zIUwnAU65AHfBPU/eQPMh53eUbkouMx+7e4IgCIIgCIIgCMKv4j+LHhUhgzZ3tQAAAABJRU5ErkJggg==" alt="">
<p>New Delhi</p>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHitVEfCWdvTWlKOe1V1kj2x9qI70hjmu8ww&usqp=CAU" alt="">
</div>
<div class="input_box"><input type="text" placeholder="Search Medicine and Health Product">
<img src="data:image/png;base64,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" alt="">
</div>
<div class="row2_left_box"><p>
QUICK BUY! Get 25% off on medicines*</p>
<button>Quick Order</button></div>
</div>
<div id="select_tag">
<div><select name="" id="">
  <option value="">Health Resource Center</option>
  <option value="">All Diseases</option>
  <option value="">All Medicines</option>
  <option value="">Medicines by Therapeutic Class</option>
</select></div>
<div><select name="" id="">
  <option value="">Vitamins & Nutrition</option>
  <option value="">Vitamins & Supplements</option>
  <option value="">Multivitamins</option>
  <option value="">Vitamins A-Z</option>
  <option value="">Mineral Supplements</option>
  <option value="">Vitamin B12 & B Complex</option>
  <option value="">Nutritional Drinks</option>
  <option value="">Adult Daily Nutrition</option>
  <option value="">Kids Nutrition (2-15 Yrs)</option>
  <option value="">For Women</option>
</select></div>
<div><select name="" id="">
  <option value="">Diabetes</option>
  <option value="">Devices</option>
  <option value="">Blood Glucose Monitors</option>
  <option value="">Test Strips & Lancets</option>
  <option value="">Syringes & Pens</option>
  <option value="">Diabetic Medicines</option>
  <option value="">Vitamins, Minerals & Antioxidants</option>
  <option value="">Homeopathy Medicines</option>
  <option value="">Ayurvedic Medicines</option>
</select></div>
<div><select name="" id="">
  <option value="">Healthcare Devices</option>
  <option value="">Top brands in Healthcare Devices</option>
  <option value="">Omron</option>
  <option value="">Accu-chek</option>
  <option value="">Dr. Morepen Device</option>
  <option value="">Dr Trust</option>
  <option value="">OneTouch</option>
  <option value="">Contour</option>
  <option value="">Masks N95, Surgical and more</option>
  <option value="">Face Shield</option>
  <option value="">Oxygen Concentrators & Cans</option>
</select></div>
<div><select name="" id="">
  <option value="">Personal Care</option>
  <option value="">Sexual Wellness</option>
  <option value="">Condoms</option>
  <option value="">Lubricants & Massage Gels</option>
  <option value="">Personal body massagers</option>
  <option value="">Men Performance Enhancers</option>
  <option value="">Sexual Health Supplements</option>
  <option value="">Skin Care</option>
  <option value="">Body Lotions</option>
  <option value="">Mosquito Repellents</option>
  <option value="">Lip Balm</option>
  <option value="">Acne Care</option>
  <option value="">Bath Essentials</option>
</select></div>
<div><select name="" id="">
  <option value="">Health Condition</option>
  <option value="">First Aid</option>
  <option value="">Liver Care</option>
  <option value="">Cold & Cough</option>
  <option value="">Fever</option>
  <option value="">Mental Wellness</option>
  <option value="">Kidney Care</option>
  <option value="">Respiratory Care</option>
  <option value="">Piles, Fissures & Fistula</option>
  <option value="">Smoking Cessation</option>
</select></div>
<div><select name="" id="">
 
  <option value="">Ayurveda Products</option>
  <option value="">Ayurveda Top Brands</option>
  <option value="">Dabur</option>
  <option value="">Sri Sri Tattva</option>
  <option value="">Kerala Ayurveda</option>
  <option value="">Jiva Ayurveda</option>
  <option value="">Patanjali</option>
  <option value="">Popular categories</option>
  <option value="">Herbal Juice</option>
  <option value="">Chyawanparash</option>
  <option value="">Ayurvedic Immunity Boosters</option>
  <option value="">Explore Popular Herb</option>
  <option value="">Herbal Supplements</option>
  <option value="">Top Health Concerns</option>
  <option value="">Ayurvedic Respiratory care</option>
</select></div>
</div>
</div>`
}
export default navbar
document.getElementById("navbar").innerHTML=navbar()