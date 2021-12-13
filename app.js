/*set all the properties to desired beginning values*/
$(document).ready(function(){
  $(".projectContainer").hide();
  $(".projectDescription").css({opacity: 0});
  $(".buttonWrap").css({opacity: 0, visibility: "hidden"});
  $("#portfolioNavButton").css("opacity", "0.3");
  $("#portfolioNavButton").css("pointer-events", "none");
});

/*makes portfolio button in nav bar usable if user goes beyond portfolio div*/
/*second button is mainly designed to come back to portfolio menu from any project without scrolling*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700 ) {
    $("#portfolioNavButton").css("opacity", "1");
    $("#portfolioNavButton").css("pointer-events", "all");
  } else {
    $("#portfolioNavButton").css("opacity", "0.3");
    $("#portfolioNavButton").css("pointer-events", "none");
  }
}
//fades in the button after typewriter animation has finished writing *code*
function fadePortfolioButton() {
  $(".buttonWrap").css({visibility: "visible"});
  $(".buttonWrap").animate({opacity: 1}, 400);
}

setTimeout(fadePortfolioButton, 2000);

//Navigation buttons. Didn't using scrollTop instead of anchor as some browsers do not support 'smooth behaviour' css property
$('#homeButton').click(function() {
    $('html,body').animate({scrollTop: $("#wrapper").offset().top},'slow');
});

$('#portfolioButton').click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolioWrapper").offset().top},'slow');
});
$('#portfolioNavButton').click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolioWrapper").offset().top},'slow');
});

var portfolioClicked = false;

var mffClicked = false;
var comicClicked = false;
var audioClicked = false;
var videoClicked = false;

var handClicked = false;
var fishClicked = false;
var ghostClicked = false;
var pizzaClicked = false;

//animations and effects of main portfolio menu icon from 3d menu
$('#portfolio').click(function() {
	if (!portfolioClicked){
  	$("#portfolioContainer").css({"perspective": "1000px", "transition": "all 1.3s ease-in", "transform": "perspective(10000px) rotateX(0deg)"});
    $(".portfolioText").css("opacity","1");
    $("#explainer").css("opacity","0");
    $("#webComic").css({"opacity": "1", "transition-delay": "0s"});
    $("#webAudio").css({"opacity": "1", "transition-delay": "0s"});
    $("#mff").css({"opacity": "1", "transition-delay": "0s"});
    $("#webVideo").css({"opacity": "1", "transition-delay": "0s"});
  	portfolioClicked = true;
  }
  else {
  	$("#portfolioContainer").css({"perspective": "10px", "transition": "all 1.3s ease-out", "transform": "perspective(300px) rotateX(20deg)"});
    $(".portfolioText").css("opacity","0");
    $("#explainer").css("opacity","1");
    $("#webComic").css({"opacity": "0", "transition-delay": "1s"});
    $("#webAudio").css({"opacity": "0", "transition-delay": "1s"});
    $("#mff").css({"opacity": "0", "transition-delay": "1s"});
    $("#webVideo").css({"opacity": "0", "transition-delay": "1s"});

    //on clicking again, it resets all the things changed during interactivity back to their default position
    $(".projectContainer").fadeOut(1000);
    $(".projectDescription").css({opacity: 0});
    $(".instructions").css({opacity: 1});
    $(".movableObject").css({top: '0', left: '0'});
    $("#axolotl").attr("src", "images/axolotl.png");
    $("#pizza").attr("src", "images/pizza.png");
    $("#ghost").attr("src", "images/ghost2.png");
    handClicked = false;
    fishClicked = false;
    ghostClicked = false;
    pizzaClicked = false;
    comicClicked = false;
    audioClicked = false;
    videoClicked = false;
    mffClicked = false;

  	portfolioClicked = false;
  }
});

//When film premiere site button is clicked
$('#mff').click(function() {
  //All other project containers will be hidden
  $("#project2Container").css("display","none");
  $("#project3Container").css("display","none");
  $("#project4Container").css("display","none");
  //eveything changes back to original position
  $(".projectDescription").css({opacity: 0});
  $(".instructions").css({opacity: 1});
  //All movable things will go back to origial position during fade out
  $(".movableObject").css({top: '0', left: '0'});
  $(".movableObject").css("margin-top","0");
  //All gifs will be changed back to pngs
  $("#axolotl").attr("src", "images/axolotl.png");
  $("#pizza").attr("src", "images/pizza.png");
  $("#ghost").attr("src", "images/ghost2.png");
  //every clicked flag will become false
  handClicked = false;
  fishClicked = false;
  ghostClicked = false;
  pizzaClicked = false;
  comicClicked = false;
  audioClicked = false;
  videoClicked = false;

  if (mffClicked) {
    $("#project1Container").fadeOut(1000);
    mffClicked = false;

  } else {
    $("#project1Container").fadeIn(1000); //corresponding project shows up if button wasn't clicked previously
    mffClicked = true;
    $('html,body').animate({              //Scroll to the project
        scrollTop: $("#project1Container").offset().top},
        'slow');
  }
});

//The procedures are essesntially the same for other projects icons
$('#webComic').click(function() {
  $("#project1Container").css("display","none");
  $("#project3Container").css("display","none");
  $("#project4Container").css("display","none");
  $(".projectDescription").css({opacity: 0});
  $(".instructions").css({opacity: 1});
  $(".movableObject").css({top: '0', left: '0'});
  $(".movableObject").css("margin-top","0");
  $("#axolotl").attr("src", "images/axolotl.png");
  $("#pizza").attr("src", "images/pizza.png");
  $("#ghost").attr("src", "images/ghost2.png");
  handClicked = false;
  fishClicked = false;
  ghostClicked = false;
  pizzaClicked = false;
  mffClicked = false;
  audioClicked = false;
  videoClicked = false;

  if (comicClicked) {
    $("#project2Container").fadeOut(1000);
    comicClicked = false;
  } else {
    $("#project2Container").fadeIn(1000);
    comicClicked = true;
    $('html,body').animate({
        scrollTop: $("#project2Container").offset().top},
        'slow');
  }
});

$('#webAudio').click(function() {
  $("#project2Container").css("display","none");
  $("#project1Container").css("display","none");
  $("#project4Container").css("display","none");
  $(".projectDescription").css({opacity: 0});
  $(".instructions").css({opacity: 1});
  $(".movableObject").css({top: '0', left: '0'});
  $(".movableObject").css("margin-top","0");
  $("#axolotl").attr("src", "images/axolotl.png");
  $("#pizza").attr("src", "images/pizza.png");
  $("#ghost").attr("src", "images/ghost2.png");
  handClicked = false;
  fishClicked = false;
  ghostClicked = false;
  pizzaClicked = false;
  mffClicked = false;
  comicClicked = false;
  videoClicked = false;

  if (audioClicked) {
    $("#project3Container").fadeOut(1000);
    audioClicked = false;
  } else {
    $("#project3Container").fadeIn(1000);
    audioClicked = true;
    $('html,body').animate({
        scrollTop: $("#project3Container").offset().top},
        'slow');
  }
});

$('#webVideo').click(function() {
  $("#project2Container").css("display","none");
  $("#project3Container").css("display","none");
  $("#project1Container").css("display","none");
  $(".projectDescription").css({opacity: 0});
  $(".instructions").css({opacity: 1});
  $(".movableObject").css({top: '0', left: '0'});
  $(".movableObject").css("margin-top","0");
  $("#axolotl").attr("src", "images/axolotl.png");
  $("#pizza").attr("src", "images/pizza.png");
  $("#ghost").attr("src", "images/ghost2.png");
  handClicked = false;
  fishClicked = false;
  ghostClicked = false;
  pizzaClicked = false;
  mffClicked = false;
  comicClicked = false;
  audioClicked = false;

  if (videoClicked) {
    $("#project4Container").fadeOut(1000);
    videoClicked = false;
  } else {
    $("#project4Container").fadeIn(1000);
    videoClicked = true;
    $('html,body').animate({
        scrollTop: $("#project4Container").offset().top},
        'slow');
  }
});


//Now comes the interactivity part!!
//These functions animate the interactive object like hand, axolotl etc to and fro on clicks by adding offsets to top and/or left
//They also shows prject description and github kink on interactivity. Instructions about that are given to the users before the canvas starts.
function handClickFun() {
  if (!handClicked) {

    if (window.matchMedia("(max-width: 950px)").matches) { // If media query matches
      $("#hand1").animate({top: '750px', left: '-100px'});
      $("#hand1").css("margin-top","-200px");
    } else {
      $("#hand1").css("margin-top","-100px");
     $("#hand1").animate({top: '550px', left: '-100px'});
    }
    $("#hand2").animate({left: '100px'});
    $('html,body').animate({scrollTop: $("#project1Canvas").offset().top});
    $("#project1Description").animate({opacity: 1});
    $("#insP1").animate({opacity: 0}, 200);
    handClicked = true;
  } else {
    $("#hand1").css("margin-top","0");
    $("#hand1").animate({top: '0', left: '0'});
    $("#hand2").animate({left: '0'});
    $('html,body').animate({scrollTop: $("#project1Container").offset().top});
    $("#project1Description").animate({opacity: 0});
    $("#insP1").animate({opacity: 1});
    handClicked = false;
  }
}

function axolotlClickFun() {
  if (!fishClicked) {
    $("#hand1").css("margin-top","-100px");
    if (window.matchMedia("(max-width: 750px)").matches) {
      $("#axolotl").animate({top: '700px'});
      $("#axolotl").css("margin-top","-50px");
    } else if (window.matchMedia("(max-width: 950px)").matches) {
    $("#axolotl").animate({top: '850px'});
    $("#axolotl").css("margin-top","-200px");
    } else {
      $("#axolotl").css("margin-top","-100px");
     $("#axolotl").animate({top: '650px'});
    }
    $('html,body').animate({scrollTop: $("#project2Canvas").offset().top});
    $("#project2Description").animate({opacity: 1});
    $("#insP2").animate({opacity: 0}, 200);
    $("#axolotl").attr("src", "images/axolotl.gif");
    $("#tank").css("cursor","pointer")
    fishClicked = true;
  }
}

function tankClickFun() {
  if (fishClicked) {
    $("#axolotl").css("margin-top","0");
    $("#axolotl").attr("src", "images/axolotl.png");
    $("#axolotl").animate({top: '0'});
    $('html,body').animate({scrollTop: $("#project2Container").offset().top});
    $("#project2Description").animate({opacity: 0});
    $("#insP2").animate({opacity: 1});
    $("#tank").css("cursor","default")
    fishClicked = false;
  }
}

function ghostClickFun() {
  if (!ghostClicked) {
    $("#ghost").attr("src", "images/ghost.gif");
    if (window.matchMedia("(max-width: 950px)").matches) {
      $("#ghost").animate({top: '750px', left: '-100px'});
      $("#ghost").css("margin-top","-200px");
    } else {
      $("#ghost").css("margin-top","-100px");
     $("#ghost").animate({top: '550px', left: '-100px'});
    }
    $("#radioGif").animate({left: '100px'});
    $('html,body').animate({scrollTop: $("#project3Canvas").offset().top});
    $("#project3Description").animate({opacity: 1});
    $("#insP3").animate({opacity: 0}, 200);
    ghostClicked = true;
  } else {
    $("#ghost").css("margin-top","0");
    $("#ghost").attr("src", "images/ghost2.png");
    $("#ghost").animate({top: '0', left: '0'});
    $("#radioGif").animate({left: '0'});
    $('html,body').animate({scrollTop: $("#project3Container").offset().top});
    $("#project3Description").animate({opacity: 0});
    $("#insP3").animate({opacity: 1});
    ghostClicked = false;
  }
}

function pizzaClickFun() {
  if (!pizzaClicked) {
    $("#pizza").attr("src", "images/pizza.gif");
    if (window.matchMedia("(max-width: 950px)").matches) {
      $("#pizza").css("margin-top","-200px");
      $("#pizza").animate({top: '750px'});
    } else {
     $("#pizza").animate({top: '550px'});
     $("#pizza").css("margin-top","-100px");
    }
    $('html,body').animate({scrollTop: $("#project4Canvas").offset().top});
    $("#project4Description").animate({opacity: 1});
    $("#insP4").animate({opacity: 0});
    pizzaClicked = true;
  } else {
    $("#pizza").css("margin-top","0");
    $("#pizza").attr("src", "images/pizza.png");
    $("#pizza").animate({top: '0'});
    $('html,body').animate({scrollTop: $("#project4Container").offset().top});
    $("#project4Description").animate({opacity: 0});
    $("#insP4").animate({opacity: 1});
    pizzaClicked = false;
  }
}

$('#hand1').click(handClickFun);
$('#axolotl').click(axolotlClickFun);
$('#tank').click(tankClickFun);
$('#ghost').click(ghostClickFun);
$('#pizza').click(pizzaClickFun);

/*-----------------------------------------------------------------------------------------------------------------------------------------
//Thank you for reading the code! Would love suggestions on how to make it more optimized so that low-end devices could handle it well
-----------------------------------------------------------------------------------------------------------------------------------------*/
