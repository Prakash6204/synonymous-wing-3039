function sendLink(){
    alert("App link send on your phone")
}
function flutter(){
    return ` <hr style="color: lightgreay" />
    <div id="flutter_man_div">
      <div id="flutter_head">
        <div id="top_heading">
          <h2>INDIA’S LARGEST HEALTHCARE PLATFORM</h2>
        </div>
        <div id="flutter_flex_box">
          <div>
            <div class="flutter_num">260m+</div>
            <div class="flutter_text">Visitor</div>
          </div>
          <div>
            <div class="flutter_num">31m++</div>
            <div class="flutter_text">Orders Delivered</div>
          </div>
          <div>
            <div class="flutter_num">1800++</div>
            <div class="flutter_text">Cities</div>
          </div>
        </div>
        <div class="flutter_border"></div>
        <div id="flutter_flex_bottom">
          <div id="flutter_botton_text">Get the link to download App</div>
          <div id="futter_div_inputbox">
            <form action="">
              <input
                type="number"
                id="futter_inputbox"
                placeholder="Enter Phone Number"
              />
              <button onclick="sendLink()" class="futter_input_button">Send Link</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div id="futter_main_bottom_flexbox">
      <div id="futter_bottom_flexbox_containt">
        <div>
          <h3>Know us</h3>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Press Coverage</a></li>
            <li><a href="">Careears</a></li>
            <li><a href="">Business Partnership</a></li>
            <li><a href="">Beacome a healtrh parter</a></li>
            <li><a href="">Corporate Governance</a></li>
          </ul>
        </div>
      </div>
      <div id="futter_bottom_flexbox_containt">
        <div>
          <h3>Our Policies</h3>
          <ul>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms and Conditions</a></li>
            <li><a href="">Editorial Policy</a></li>
            <li><a href="">Return Policy</a></li>
            <li><a href="">IP Policy</a></li>
            <li><a href="">Grievance Redressal Policy</a></li>
          </ul>
        </div>
      </div>
      <div id="futter_bottom_flexbox_containt">
        <div>
          <h3>Our Services</h3>
          <ul>
            <li><a href="">Order Medicines</a></li>
            <li><a href="">Terms and Conditions</a></li>
            <li><a href="">Editorial Policy</a></li>
            <li><a href="">Ayurveda Articles</a></li>
            <li><a href="">Hindi Articles</a></li>
            <li><a href="">Grievance Redressal Policy</a></li>
          </ul>
        </div>
      </div>
      <div id="futter_bottom_flexbox_containt">
        <div>
          <h3>connect</h3>
          <ul>
            <li><a href="">Social Links</a></li>
            <li class="futter_social_links">
              <a href="">
                <div class="facebook"></div>
              </a>
              <a href="">
                <div class="twitter"></div>
              </a>
              <a href="">
                <div class="youtube"></div>
              </a>
              <a href="">
                <div class="linkedin"></div>
              </a>
              <a href="">
                <div class="medium"></div>
              </a>
            </li>
            <li><a href="">Want daily dose of health?</a></li>
            <li><button class="futter_signup_button">Sign Up</button></li>
          </ul>
        </div>
      </div>
      <div id="futter_bottom_flexbox_containt">
        <div>
          <h3>Download App</h3>
          <ul>
            <li>
              <a href=""><div class="googleplay"></div></a>
            </li>
            <li>
              <a href=""><div class="applestore"></div></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flutter_border2"></div>
    <div id="futter_buttom_box">
      <div class="futter_inside_1box1"></div>
      <div class="futter_inside_box2">
        <h2>Reliable</h2>
        <p>
          All products displayed on Tata 1mg are procured from verified and
          licensed pharmacies. All labs listed on the platform are accredited
        </p>
      </div>
      <div class="futter_inside_2box1"></div>
      <div class="futter_inside_box2">
        <h2>Secure</h2>
        <p>
          All products displayed on Tata 1mg are procured from verified and
          licensed pharmacies. All labs listed on the platform are accredited
        </p>
      </div>
      <div class="futter_inside_3box1"></div>
      <div class="futter_inside_box2">
        <h2>Affordable</h2>
        <p>
          All products displayed on Tata 1mg are procured from verified and
          licensed pharmacies. All labs listed on the platform are accredited
        </p>
      </div>
    </div>
    <div class="futter_bottom_images_box">
      <div class="futter_buttom_image">
        <a href=""
          ><img src="https://static.legitscript.com/seals/729605.png" alt=""
        /></a>
      </div>
      <div class="futter_buttom_image">
        <a href=""
          ><img src="	https://onemg.gumlet.io/URS_ebgmxc.png" alt=""
        /></a>
      </div>
    </div>
    <div class="bottom_line">
      India's only LegitScript and ISO/ IEC 27001 certified online healthcare
      platform
    </div>
    <div class="bottom_text_information"></div>`
}
export default flutter
document.getElementById("flutter").innerHTML=flutter()