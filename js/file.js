/*==================================================================
======================== Absolute Icons ============================
==================================================================*/
var arrowIcon = document.querySelector(".fa-arrow-alt-circle-up");
/*=== function iconOpacity ===*/
window.onscroll = function (e)
{
    if( window.scrollY >  400 )
        arrowIcon.style.opacity = "1"
    else
        arrowIcon.style.opacity = "0"
}
/*====== At Click Icon ======*/
arrowIcon.onclick = function (e){
    window.scrollTo({top: 0, behavior: 'smooth'});
}