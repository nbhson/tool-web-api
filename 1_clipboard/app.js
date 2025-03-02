// The Clipboard API provides the ability to respond to clipboard commands(cut, copy, and paste) 
// as well as to asynchronously read from and write to the system clipboard.

const copyToClipboard = (text) => {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text);
  }
};

const pasteValue = () => {
  if (navigator.clipboard?.readText) {
    navigator.clipboard.readText().then((clipText) => {
      document.querySelector('.cliptext').innerText = clipText;
    });
  }
};

copyToClipboard('Copy text');
pasteValue();


