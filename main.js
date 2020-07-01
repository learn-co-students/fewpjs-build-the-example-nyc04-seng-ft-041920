// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
const hearts = document.querySelectorAll(".like-glyph")

hearts.forEach(heart => {
  heart.addEventListener("click", e => {
    const glyph = e.target
    mimicServerCall()
    .then(success => activateHeart(glyph))
    .catch(error => errorModal(error))
  })
})

function errorModal(errorMsg) {
  modal.className = ""
  modal.firstChild.textContent = errorMsg
  setTimeout(hideModal, 5000);
}

function hideModal() {
  modal.className = "hidden"
}

function activateHeart(glyph) {
  if (glyph.classList.contains("activated-heart")) {
    console.log(glyph.className)
    glyph.innerHTML = EMPTY_HEART
    glyph.classList.remove("activated-heart")
  } else {
    glyph.innerHTML = FULL_HEART
    glyph.classList.add("activated-heart")
  }  
}

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
