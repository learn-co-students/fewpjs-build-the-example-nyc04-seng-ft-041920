// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph")
const modalMessage = document.querySelector("#modal-message")
console.log(modalMessage)

function likeCallback(e){
  let heartGlyph = event.target
  mimicServerCall()
  .then(function(response){
    if (heartGlyph.textContent == EMPTY_HEART){
      heartGlyph.textContent = FULL_HEART
      heartGlyph.className += " activated-heart"

    }
    else{
      heartGlyph.textContent = EMPTY_HEART
      heartGlyph.className = "like-glyph"
    }
  })
  .catch((error) => {
    console.log(error)
    document.querySelector("#modal").className = "";
    modalMessage.textContent = error
    setTimeout(function(){
      document.querySelector("#modal").className = "hidden";
    }, 5000)
  })
}


for (const heart of hearts){
  heart.addEventListener("click", likeCallback)
}

// mimicServerCall().then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.log(error)
//     document.querySelector("#modal").className = "";
//   })


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
