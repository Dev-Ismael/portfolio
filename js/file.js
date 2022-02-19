/*==================================================================
======================== NavBar -===================================
=================================================================*/

/*===================== Add sticky Class =================*/
var nav           = document.querySelector("#navbar");
var iconContainer = nav.querySelector("span.icon");
var greenIcon     = '<img src="images/icons/green-icon.png"  alt="icon">';
var whiteIcon     = '<img src="images/icons/white-icon.png"  alt="icon">';
function addStickyClass (e){
    if( window.scrollY >  35 ){
        nav.classList.add("navbar-sticky");
        iconContainer.innerHTML = greenIcon;
    }else{
        nav.classList.remove("navbar-sticky");
        iconContainer.innerHTML = whiteIcon;
    }
}
/*=== Check If in Mideum Page ===*/
addStickyClass();
/*====== at click mob btn  ======*/
var bar      = nav.querySelector(".bar");
var navLinks = nav.querySelector(".nav-links");
var links    = nav.querySelectorAll(".nav-links li");
bar.addEventListener('click', ()=>{
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    //bar Animation
    bar.classList.toggle("toggle");
    // Bar Lines Color
    nav.classList.toggle("mob-nav");
});
/*========== at click links go sections ===========*/
var navAnchors = document.querySelectorAll(".nav-links a");
navAnchors.forEach( navAnchor  => {
    navAnchor.onclick = function (e){
        e.preventDefault();
        var element = document.getElementById(navAnchor.innerHTML);
        element.scrollIntoView({behavior: "smooth"});
    }
});






/*==================================================================
======================== Header ====================================
==================================================================*/
var goDownBtn = document.querySelector(".go-down");
goDownBtn.onclick = function (e){
    e.preventDefault();
    about.scrollIntoView({behavior: "smooth"});
}





/*==================================================================
======================== Works =====================================
==================================================================*/
var myWorksBtn = document.querySelector(".works-btn");
myWorksBtn.onclick = function (e){
    e.preventDefault();
    works.scrollIntoView({behavior: "smooth"});
}





/*==================================================================
======================== Absolute Icons ============================
==================================================================*/
var arrowIcon = document.querySelector(".fa-arrow-alt-circle-up");
/*======== function iconOpacity ==========*/
function iconOpacity (e) {  
    if( window.scrollY >  400 )
        arrowIcon.style.opacity = "1"
    else
        arrowIcon.style.opacity = "0"
}
/*======= Check If in Mideum Page =======*/
iconOpacity();
/*====== At Click Icon ======*/
arrowIcon.onclick = function (e){
    window.scrollTo({top: 0, behavior: 'smooth'});
}