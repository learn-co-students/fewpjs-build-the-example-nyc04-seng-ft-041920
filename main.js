// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const allHeartContainers = document.querySelectorAll(".like-glyph")

allHeartContainers.forEach(list => list.addEventListener('click', function(x){
  // mimicServerCall()
  // .then(function(serverMessage){
  //   alert("You Liked the Post!")
  // })
  // .catch(function(error){
  //   const modal = document.getElementById("modal")
  //   modal.classList.remove("hidden")
  //   modal.innerText = error.message
  // })

  if(x.target.innerText == EMPTY_HEART){
    mimicServerCall()
    .then(function(serverMessage){
      x.target.innerText = FULL_HEART;
      x.target.classList.add("activated-heart")
      console.log("Heart was Empty, now is Full!")
      alert("You Liked the Post!")
    })
  }else if (x.target.innerText == FULL_HEART){
    mimicServerCall()
    .then(function(serverMessage){
      x.target.innerText = EMPTY_HEART;
      x.target.classList.remove("activated-heart")
      console.log("Heart was Full, now is Empty!")
      alert("You Unliked the Post!")
    })

  }else{
    mimicServerCall()
    .catch(function(error){
      const modal = document.getElementById("modal")
      modal.classList.remove("hidden")
      modal.innerText = error.message
      setTimeout((x) => {
        modal.classList.add("hidden")
      }, 5000);
    })
  }

})
);



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
