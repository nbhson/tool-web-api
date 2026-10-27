// The Clipboard API provides the ability to respond to clipboard commands(cut, copy, and paste)
// as well as to asynchronously read from and write to the system clipboard.

const copyToClipboard = (text) => {
  if (!navigator.clipboard) {
    document.querySelector('.cliptext').innerText = 'Clipboard API not available in this browser.';
    return;
  }
  navigator.clipboard.writeText(text).catch((e) => {
    alert('Failed to copy: ' + e.message);
  });
};

const pasteValue = () => {
  if (!navigator.clipboard) {
    document.querySelector('.cliptext').innerText = 'Clipboard API not available in this browser.';
    return;
  }
  navigator.clipboard.readText()
    .then((clipText) => {
      document.querySelector('.cliptext').innerText = clipText;
    })
    .catch((e) => {
      alert('Failed to read clipboard: ' + e.message);
    });
};

copyToClipboard('Copy text');
pasteValue();

