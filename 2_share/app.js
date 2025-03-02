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
  try {
    await navigator.share(shareData)
    resultPara.textContent = 'MDN shared successfully'
  } catch (err) {
    resultPara.textContent = 'Error: ' + err
  }
});