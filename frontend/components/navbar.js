const isAuth = JSON.parse(localStorage.getItem("isAuth"));
let navbar = () => {
  return `
   <div class="orbitz"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Orbitz_logo.svg/1024px-Orbitz_logo.svg.png" alt="">
   
   </div>
    <div class="dropdown">
        <button id="bt" class="dropbtn">More travels</button>
        <div id="myDropdown" class="dropdown-content">
        <a href="#"> 
            <div class="dis_flex">
            
            <h3>🏦  Stays</h3>
            </div>
        </a>
        <br>
        <a href="#">
            <div class="dis_flex">
            <h3>✈  Flights</h3>
            </div>
        </a>
        <br>
        <a href="#">
        <div class="dis_flex">
            
            <h3>🛍  Packages</h3>
            </div>
        </a>
        <br>
        <a href="#">
        <div class="dis_flex">
            
            <h3>🚘  Cars</h3>
            </div>
            </a>
            <br>
        <a href="#">
        <div class="dis_flex">
            
            <h3>🔩  Curises</h3>
            </div>
            </a>
            <br>
            <div class="dis_flex">
            <a href="#">Deals</a>
            </a>
            </div>
            <br>
            <div class="dis_flex">
            <a href="flip.html">Group & meeting</a>
            </div>
            <br>
            <div class="dis_flex">
            <a href="#">Travel Blog</a>
            </div>
        </div>
    </div>
    
    <h4>
        <a href="https://www.orbitz.com/es/?langid=2058">Español</a>
    </h4>
    <h4>
        <a href="#">List your property</a>
    </h4>
    <h4>
        <a href="support.html">Support</a>
    </h4>
    <h4>
        <a href="">Trips</a>
    </h4>
    <h4>
        <a href="signup.html" >${
          isAuth?.logged ? isAuth?.userName : "Sign In"
        }</a>
    </h4>
    
    `;
};
let footer_main = () => {
  return `
   
   
    <div class="footer-logo">
        <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="">
    </div>
    <div class="footer">
        <h3>Company</h3>
        <p> <a href="https://www.orbitz.com/lp/b/about">About</a></p>
        <p> <a href="career.html">Jobs</a> </p>
        <p> <a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">List your property</a></p>
        <p> <a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">Partnerships</a></p>
        <p> <a href="./press.html">Newsroom</a></p>
        <p>  <a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">Investors</a></p>
        <p> <a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">Site Map</a></p>
        <p> <a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">Orbitz Reward</a></p>
        <p> <a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">Advertising</a></p>
    </div>
    <div class="footer">
        <h3>Explore</h3>
        <p><a href="https://www.orbitz.com/Destinations-In-United-States-Of-America.d201.Hotel-Destinations">Hotel in United States</a></p>
        <p><a href="https://www.orbitz.com/lp/lgbtq-gay-travel-hotels">Vacation Rentals in United States</a></p>
        <p><a href="https://www.orbitz.com/lp/lgbtq-gay-travel-hotels">Car Rantals in United States</a></p>
        <p><a href="https://www.orbitz.com/lp/lgbtq-gay-travel-hotels">Domestic Flights</a></p>
        <p><a href="https://www.orbitz.com/United-States-Of-America.d201.Destination-Travel-Guides">Vacation Packeges in United States</a></p>
        <p><a href="https://www.orbitz.com/United-States-Of-America.d201.Destination-Travel-Guides">Orbitz Reviews</a></p>
        <p><a href="https://www.orbitz.com/United-States-Of-America.d201.Destination-Travel-Guides">Orbitz Coupens</a></p>
        <p><a href="https://www.orbitz.com/United-States-Of-America.d201.Destination-Travel-Guides">LGBTQ Travel</a></p>
        <p><a href="https://www.orbitz.com/United-States-Of-America.d201.Destination-Travel-Guides">Unique Accommondation</a></p>
        <p><a href="https://www.orbitz.com/United-States-Of-America.d201.Destination-Travel-Guides">Travel Blog</a></p>
    </div>
    <div class="footer">
        <h3>Policies</h3>
        <p><a href="https://www.orbitz.com/lp/lg-privacy">Privacy Policy</a></p>
        <p><a href="https://www.orbitz.com/lp/lg-terms">Terms of Use</a></p>
        <p><a href="https://www.orbitz.com/lp/lg-terms">List your property</a></p>
        <p><a href="https://www.orbitz.com/lp/lg-terms">Partnerships</a></p>
        <p><a href="https://www.orbitz.com/dnsmpi">Newsroom</a></p>
        <p><a href="https://www.orbitz.com/dnsmpi">Investors</a></p>
        <p><a href="https://www.orbitz.com/dnsmpi">Site Map</a></p>
        <p><a href="https://www.orbitz.com/dnsmpi">Orbitz Reward</a></p>
        <p><a href="https://www.orbitz.com/dnsmpi">Advertising</a></p>
    </div>
    <div class="footer">
        <h3>Help</h3>
        <p><a href="https://www.orbitz.com/service/">Support</a></p>
        <p><a href="https://www.orbitz.com/service/#/articles/560/34/16267">Cancle your hotel or vacation rental bookin</a></p>
        <p><a href="https://www.orbitz.com/service/#/articles/569/34/16477">Cancle your flight</a></p>
        <p><a href="https://www.orbitz.com/service/#/myTrips/16138">Refund timeline,policies&processes</a></p>
        <p><a href="https://www.orbitz.com/service/#/article/19518">Use an Orbitz Coupon</a></p>

    </div>
    `;
};
let end = () => {
  return `
    
    <p>© 2022 Orbitz, LLC, An Expedia Group Company.</p>
    <p>Todos los derechos reservados. Orbitz, Orbitz.com , Orbitz y el logotipo de Salida son marcas registradas o marcas comerciales de Orbitz, LLC , ya sea en los U.S. y / o otros países. Otros logos o productos y nombres de compañías aquí mencionados pueden ser propiedad de sus respectivos dueños .</p>
    <button id="btn" onclick="submit()">💬Help</button>
    `;
};
export { navbar, footer_main, end }; //Default export;
