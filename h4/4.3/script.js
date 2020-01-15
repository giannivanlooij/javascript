//Arrays
var plaatjesHead = [1,2,3,4];
var plaatjesTorso = [1,2,3,4];
var plaatjesFeet = [1,2,3,4];
//Counters
var headCount = 1;
var torsoCount = 1;
var feetCount = 1;

var slideHead = document.getElementById("slideHead");
var slideTorso = document.getElementById("slideTorso");
var slideFeet = document.getElementById("slideFeet");
// eerste images
slideHead.style.backgroundImage = "url('img/head1.png')";
slideTorso.style.backgroundImage = "url('img/torso1.png')";
slideFeet.style.backgroundImage = "url('img/feet1.png')";
// image+ nummer van get(lichaamdeel)
slideHead.addEventListener("click" , function()  {
    slideHead.style.backgroundImage = "url('img/head" + getHead() + ".png')";
});
slideTorso.addEventListener("click" , function()  {
    slideTorso.style.backgroundImage = "url('img/torso" + getTorso() + ".png')";
});
slideFeet.addEventListener("click" , function()  {
    slideFeet.style.backgroundImage = "url('img/feet" + getFeet() + ".png')";
});
//functies
function getHead() {
    if (headCount >= plaatjesHead.length) {
        headCount = 1;
    } else {
        headCount++
    }
    console.log(headCount);
    return headCount;
}
function getTorso() {
    if (torsoCount >= plaatjesTorso.length) {
        torsoCount = 1;
    } else {
        torsoCount++
    }
    console.log(torsoCount);
    return torsoCount;
}
function getFeet() {
    if (feetCount >= plaatjesFeet.length) {
        feetCount = 1;
    } else {
        feetCount++
    }
    console.log(feetCount);
    return feetCount;
}