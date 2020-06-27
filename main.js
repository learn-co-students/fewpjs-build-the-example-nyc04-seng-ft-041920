// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

/******* Hide Error Modal ********/
const errModal = document.querySelector("#modal")
//errModal.setAttribute('hidden', true)
//errModal.hidden = true
errModal.classList.add("hidden")


/******* Wait for DOM to load ********/
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("dom loaded")
  
  /******* add Event listener to hearts ********/
  const hearts = document.querySelectorAll(".like-glyph")
  hearts.forEach(heart => {
    heart.addEventListener('click', e => {
      console.log(e.target)
      const heart = e.target
      /******* Invoke mimicServerCall ********/
      mimicServerCall("bogusUrl")
        .then(response => {
          /*When reponse is correct change heart to FULL_HEART */
          if(heart.textContent !== FULL_HEART){
            heart.textContent = FULL_HEART
            heart.className = "activated-heart"
          }else{
            heart.textContent = EMPTY_HEART
            heart.className = ""
          }
            console.log(response)
        }).catch(err => {
          /*When reponse fails show ERROR message in errModal */
          errModal.textContent = err
          errModal.classList.remove("hidden")
          setTimeout(function(err){
            errModal.classList.add("hidden")
          },5000)
          console.log("err")
          console.log(err)
        })

    })
  })
  /*
  let glyphStates = {
    "♡": "♥",
    "♥": "♡"
  };
  
  let colorStates = {
    "red" : "",
    "": "red"
  };
  
  let articleHearts = document.querySelectorAll(".like-glyph");
  
  function likeCallback(e) {
    let  heart  =  e . target ;
    mimicServerCall("bogusUrl")
     //OR: mimicServerCall("bogusUrl", {forceFailure: true})
      .then(function(serverMessage){
         heart.innerText = glyphStates[heart.innerText];
         heart.style.color = colorStates[heart.style.color];
      })
      .catch(function(error) {
        // Basic
        // alert("Something went wrong!");
        // or....
        document.getElementById("modal").className = "";
      });
  }
  
  for (let glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
  }
  */
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
