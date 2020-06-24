// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.querySelectorAll('.like-glyph')

// let modal = document.getElementById("modal")
function callServer(event) {

  let hrt = event.target
  mimicServerCall().then((success) => {
    if (hrt.innerHTML === EMPTY_HEART) {
      hrt.innerHTML = FULL_HEART
      hrt.classList.toggle("activated-heart")
    } else {
      hrt.innerHTML = EMPTY_HEART
      hrt.classList.toggle("activated-heart")
    }
  }
  ).catch((error) => {
    let modal = document.getElementById("modal")
    modal.innerText = error
    modal.classList.add("visible")
    setTimeout(function () {
      modal.classList.remove("visible")
    }, 5000);
  })
}

// hearts.forEach((heart) => {

//   })
// })

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', callServer)
}
//     }
//   })
// }



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}