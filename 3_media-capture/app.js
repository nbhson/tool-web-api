// This API allows to use the device camera and record the screen.
navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true
}).then(stream => { // use the video element
  console.log(stream);
})