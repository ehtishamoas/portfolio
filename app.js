

$(document).ready(function(){
  $(".projectContainer").hide();
  $(".projectDescription").hide();
  $(".buttonWrap").hide();
  $('#portfolioNavButton').hide();
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700 ) {
    $('#portfolioNavButton').fadeIn(400);
  } else {
    $('#portfolioNavButton').fadeOut(400);
  }
}

function fadePortfolioButton() {
  $(".buttonWrap").fadeIn(800);
}

setTimeout(fadePortfolioButton, 2700);

$('#homeButton').click(function() {
    $('html,body').animate({
        scrollTop: $("#wrapper").offset().top},'slow');
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

    $(".projectContainer").fadeOut(1000);
    $(".projectDescription").hide();
    $(".instructions").show();
    $(".movableObject").animate({left: '0'}, 1000);
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


$('#mff').click(function() {
  //All other project containers will be hidden
  $("#project2Container").hide();
  $("#project3Container").hide();
  $("#project4Container").hide();
  //eveything changes back to original position
  $(".projectDescription").hide();
  $(".instructions").show();
  //All movable things will animate back to origial position (during fade out)
  $(".movableObject").animate({left: '0'}, 1000);
  //All gifs will be changed back to pngs
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

  if (mffClicked) {
    $("#project1Container").fadeOut(1000);
    mffClicked = false;

  } else {
    $("#project1Container").fadeIn(1000);
    mffClicked = true;
    $('html,body').animate({
        scrollTop: $("#project1Container").offset().top},
        'slow');
  }
});

$('#webComic').click(function() {
  $("#project1Container").hide();
  $("#project3Container").hide();
  $("#project4Container").hide();
  $(".projectDescription").hide();
  $(".instructions").show();
  $(".movableObject").animate({left: '0'}, 1000);
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
  $("#project2Container").hide();
  $("#project1Container").hide();
  $("#project4Container").hide();
  $(".projectDescription").hide();
  $(".instructions").show();
  $(".movableObject").animate({left: '0'}, 1000);
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
  $("#project2Container").hide();
  $("#project3Container").hide();
  $("#project1Container").hide();
  $(".projectDescription").hide();
  $(".instructions").show();
  $("#axolotl").animate({bottom: '400px'}, 300);
  $("#axolotl").delay(200).animate({left: '0', bottom: '0'}, 800);
  $(".movableObject").animate({left: '0'}, 1000);
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


$('#hand1').click(function() {
  if (!handClicked) {
    $("#hand1").animate({left: '1100px'}, 1000);
    $("#project1Description").delay(500).fadeIn(1000);
    $("#insP1").fadeOut(1000);
    handClicked = true;
  } else {
    $("#hand1").animate({left: '0'}, 1000);
    $("#project1Description").fadeOut(500);
    $("#insP1").fadeIn(1000);
    handClicked = false;
  }
});

$('#axolotl').click(function() {
  if (!fishClicked) {
    $("#axolotl").animate({left: '1200px', bottom: '400px'}, 800);
    $("#axolotl").delay(700).animate({bottom: '0'}, 200);
    $("#project2Description").delay(400).fadeIn(1000);
    $("#insP2").delay(500).fadeOut(1000);
    $("#axolotl").attr("src", "images/axolotl.gif");
    $("#tank").css("cursor","pointer")
    fishClicked = true;
  }
});

$('#tank').click(function() {
  if (fishClicked) {
    $("#axolotl").attr("src", "images/axolotl.png");
    $("#axolotl").animate({bottom: '400px'}, 300);
    $("#axolotl").delay(200).animate({left: '0', bottom: '0'}, 800);
    $("#project2Description").delay(400).fadeOut(800);
    $("#insP2").delay(300).fadeIn(800);
    $("#tank").css("cursor","default")
    fishClicked = false;
  }
});

$('#ghost').click(function() {
  if (!ghostClicked) {
    $("#ghost").attr("src", "images/ghost.gif");
    $("#ghost").animate({left: '1100px'}, 1000);
    $("#project3Description").delay(500).fadeIn(1000);
    $("#insP3").fadeOut(1000);
    ghostClicked = true;
  } else {
    $("#ghost").attr("src", "images/ghost2.png");
    $("#ghost").animate({left: '0'}, 1000);
    $("#project3Description").fadeOut(500);
    $("#insP3").fadeIn(1000);
    ghostClicked = false;
  }
});

$('#pizza').click(function() {
  if (!pizzaClicked) {
    $("#pizza").attr("src", "images/pizza.gif");
    $("#pizza").animate({left: '1300px'}, 1000);
    $("#project4Description").delay(500).fadeIn(1000);
    $("#insP4").fadeOut(1000);
    pizzaClicked = true;
  } else {
    $("#pizza").attr("src", "images/pizza.png");
    $("#pizza").animate({left: '0'}, 1000);
    $("#project4Description").fadeOut(500);
    $("#insP4").fadeIn(1000);
    pizzaClicked = false;
  }
});
