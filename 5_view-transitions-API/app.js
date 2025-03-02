const word = 'Iu đừng sợ đau'.split(' ')
const h1 = document.querySelector('h1')
const rate = 600

let index = 0

if (document?.startViewTransition) {
  setInterval(() => {
    document.startViewTransition(() => {
      h1.textContent = word[index++]

      if (index >= word.length)
        index = 0
    })
  }, rate)
}
else {
  document.querySelector('.no-support').style.display = 'block'
}