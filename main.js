// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!

const postContainers = document.querySelectorAll(".media-post");

postContainers.forEach(function(post) {
  let likeGlyph = post.querySelector(".like-glyph");
  likeGlyph.addEventListener("click", function(e) {
    mimicServerCall()
    .then(function(){
      processLike(e.target)
    })
    .catch(function(error) {
      displayModalError(error);
    })
  })
})

//Helpers
function displayModalError(error) {
  const modalMessage = document.querySelector("#modal-message");
  const modal = document.querySelector("#modal")
  modal.classList.remove("hidden");
  modalMessage.textContent = error;
}

function processLike(heart) {
  if (heart.innerHTML === FULL_HEART) {
    heart.innerHTML = EMPTY_HEART;
    heart.classList.toggle("activated-heart")
  }
  else {
    heart.innerHTML = FULL_HEART;
    heart.classList.toggle("activated-heart")
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
