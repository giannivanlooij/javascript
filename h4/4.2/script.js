var plaatjes = [1,2,3,4,5,6,7,8,9];
var teller = 0;
// pak het element slide holder
var slideholder = document.getElementById("slideholder");
//geef het de achtergrond aap1
slideholder.style.backgroundImage = "url('img/aap1.png')";

slideholder.addEventListener("click" , function()  {
    // als er op slideholder word geklikt gebruik plaatje aap (en dan het getal uit getAap)
    slideholder.style.backgroundImage = "url('img/aap" + getAap() + ".png')";
});

function getAap() {
    // als teller groter is of gelijk is aan.length (dit geval 9) keert de waarde terug naar 1
    if (teller >= plaatjes.length) {
        teller = 1;
        // en anders telt het door
    } else {
        teller++
    }
    console.log(teller);
    //de return teller geeft het door aan de url img/aap
    return teller;
}