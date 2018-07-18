document.addEventListener('DOMContentLoaded', function(e) {
  const counter = document.querySelector('#counter');
  let timer = parseInt(counter.innerText);

  function incrementSeconds() {
    timer++;
    counter.innerText = timer;
  }
  let intervalGuy = setInterval(incrementSeconds, 1000);

  const minus = document.getElementById('-');
  minus.addEventListener('click', function(e) {
    timer--;
    counter.innerText = timer;
  });

  const plus = document.getElementById('+');
  plus.addEventListener('click', function(e) {
    timer++;
    counter.innerText = timer;
  });

  const hearts = document.getElementById('<3');
  const likes = document.querySelector('.likes');
  let likeCounter = {};

  hearts.addEventListener('click', function(e) {

    let selectedList = null;

    if (document.getElementById(`${timer}`)) {
      selectedList = document.getElementById(`${timer}`);

    } else {
      let newList = document.createElement('li');
      newList.setAttribute('id', `${timer}`);
      likes.append(newList)
      selectedList = document.getElementById(`${timer}`);
    }

    likeCounter[timer] = likeCounter[timer] ? likeCounter[timer] + 1 : 1;
    selectedList.innerText = `${timer} has been liked ${likeCounter[timer]} time(s)`;
    // debugger
    // likeCounter++;
  });
  const pauseButton = document.getElementById('pause')
  let buttonStatus = true;
  pauseButton.addEventListener('click', function(e) {
    if (buttonStatus === true) {
      buttonStatus = false
      minus.disabled = true;
      plus.disabled = true;
      hearts.disabled = true;
      clearInterval(intervalGuy);
      pauseButton.innerText = "resume"
    } else {
      buttonStatus = true
      minus.disabled = false;
      plus.disabled = false;
      hearts.disabled = false;
      setInterval(incrementSeconds, 1000)
      pauseButton.innerText = "pause"
    }
  })
  const commentForm = document.querySelector('form')
  const valueGetter = document.querySelector('[type=text]')
  const submitComment = document.querySelector('submit')
  commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('list').append(`${valueGetter.value}`);

  })
});
