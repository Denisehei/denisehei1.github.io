


//tagen ifrån https://tobiasahlin.com/moving-letters/#2
//Gör så att titeln på första sidan får en snygg animation där bokstäverna fadar in och skrivs ut en efter en.
const textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

//Ändrade så att animationen bara kördes när man först kom in på sidan, och inte loopads.
anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 1,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 100,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  //Här är en array med olika meddelanden som kommer visas slumpmässigt
  const messages = [

    "Good luck today! You have bright future!",
    "You look really sparkling cool!",
    "You have brilliant eyes!",
    "Yeah, I can tell you are awesome!",
    "Oh I totally get why people like you!",
    "You are an awesome to have you as a friend!"

  ];

  //Här är en funktion som gör att ett av meddelandena väljs ut random. 
  function displayRandomMessage( ) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    const messageElement = document.querySelector("#message");
    messageElement.textContent = randomMessage;
  }

//Här kopplas funktionen ihop med en knapp ifrån HTML-filen 
  const button = document.querySelector("#randomButton");
  button.addEventListener("click", displayRandomMessage);
