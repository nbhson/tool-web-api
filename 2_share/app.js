// The Web Share API provides a mechanism for sharing text, links, files, and other content 
// to an arbitrary share target selected by the user.

const shareData = {
  title: 'MDN',
  text: 'Learn web development on MDN!',
  url: 'https://developer.mozilla.org',
}

const btn = document.querySelector('button');
const resultPara = document.querySelector('.result');

btn.addEventListener('click', async () => {
  if (!navigator.share) {
    resultPara.textContent = 'Web Share API not available in this browser.';
    return;
  }
  try {
    await navigator.share(shareData)
    resultPara.textContent = 'MDN shared successfully'
  } catch (err) {
    if (err.name === 'AbortError') {
      resultPara.textContent = 'Share cancelled';
    } else {
      resultPara.textContent = 'Error: ' + err.message
    }
  }
});