import React from "react";
import styleFooter from "./css/styleFooter.css"

const Footer = () => {
  return (
    <div className="footer-basic">
       <footer>
            <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/">Home</a></li>
                <li class="list-inline-item"><a href="about">About Us</a></li>
                <li class="list-inline-item"><a href="readmore">Read More</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Drugreporter © 2022</p>
        </footer>
    </div>
  );
};

export default Footer;
