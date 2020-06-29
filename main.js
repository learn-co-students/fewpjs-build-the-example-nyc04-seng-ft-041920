// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorHandler = document.querySelector("#modal")
const likeHeart = document.querySelectorAll(".like-glyph")

errorHandler.classList = "hidden"

likeHeart.forEach(element => {
  element.addEventListener("click", (e) => {
    let heart = e.target
  mimicServerCall()
  .then(function(response){
    if (heart.innerText == EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.className += "activated-heart"

    }
    else{
      heart.innerText = EMPTY_HEART
      heart.className = "like-glyph"
    }
  })
  .catch((error) => {
    console.log(error)
    document.querySelector("#modal").className = "";
    errorHandler.innerText = error
    setTimeout(function(){
      document.querySelector("#modal").className = "hidden";
    }, 5000)
  })
  })
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
