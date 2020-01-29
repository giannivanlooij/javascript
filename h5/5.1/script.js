mainDiv = document.getElementById("main-div");
 createPictureFrames();
 createAapImages();



//pictureFrame maakt een nieuwe element div
//pictureFrame krijgt de classnaam picture-frame
//pictureFrame krijgt ook een id "picture-frame-X" (X is een getal die begint bij 1 tot 9).
//pictureFrame gaat in mainDiv

function createPictureFrames() {
    for(var i = 0; i < 9; i++) {
        pictureFrame = document.createElement("div");
        pictureFrame.className = "picture-frame";
        pictureFrame.id = "picture-frame-" + (i + 1);
        mainDiv.appendChild(pictureFrame);
    }
}

// id is i+1 zodat de id net als de plaatjes beginnen met 1
// favorite heb een id. het id is een getal voor de event listiner
function createAapImages() {
    pictureFrames = document.getElementsByClassName("picture-frame");
    for(var i = 0; i < pictureFrames.length; i++) {
        favorite = document.createElement("div");
        favorite.className = "favorite";
        favorite.id = "favorite" + (i + 1);

        //geeft de plaatjes een id. en geeft de source op van de plaatjes
        
        monkeyImage = document.createElement("img");
        monkeyImage.id = (i + 1)
        monkeyImage.src = "img/aap" + (i + 1) + ".png";
        monkeyImage.addEventListener("click", function() {
            makeFavorite(this.id);
        });

        
        // de div favorite en monkeyImage gaan in pictureFrames
        pictureFrames[i].appendChild(favorite);
        pictureFrames[i].appendChild(monkeyImage);
    }

        // deze functie zorgt ervoor dat het er een hart komt in favorite

    function makeFavorite(id) {
        //zorgt ervoor dat het eerste hartje verwijderd word
        disfavored = document.getElementsByClassName("favorite");
        for(var i = 1; i < 10; i++) {
            disfavored[i - 1].style.backgroundImage = "none";
        }
        //zorgt ervoor een hart word toegevoegd aan faovrite.
        favorite = document.getElementById("favorite" + (id));
        favorite.style.backgroundImage = "url('img/heart.png')";
        favorite.style.backgroundRepeat = "no-repeat";
        favorite.style.backgroundPosition = "center";
    }
}