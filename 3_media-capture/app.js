// This API allows to use the device camera and record the screen.
navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true
}).then(stream => {
  console.log(stream);
}).catch(err => {
  alert('Camera/microphone error: ' + err.message);
});
