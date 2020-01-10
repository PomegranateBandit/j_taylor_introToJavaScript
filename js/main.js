// this is a self-invoking anonymous function //
//also called an iife
// also called a module (it's a pattern)

(() => {
  //print('whatever');
  console.log('hello from JS!');

  // find the elements in the document
  let toggleButton = document.querySelector('.switch-text'),
      myHeading = document.querySelector('h1');
      svgImg = document.querySelector("#badge");

  function changeText() {
    myHeading.textContent = "What is up? I am script!";
  }

  function logSVG (){
    console.log(this.id);
  }

  toggleButton.addEventListener("click", changeText);
  svgImg.addEventListener("mouseover", logSVG);

//  document.querySelector('h1').textContent = "What is up? I am script!";
})();
