// The Web Animations API is a relatively new addition to the browser
// and is still very much in development.
// It promises to combine the benefits of CSS Transitions/Animations and JavaScript based animations.
let element = document.getElementById("circle");
let animation = element.animate(
  [
    { marginTop: 0 },
    { marginTop: '50px' }
  ],
  {
    duration: 3000,
    easing: "linear",
  }
);
