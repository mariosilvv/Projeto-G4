export function initAtalhos() {
  function ocultarMenu() {
    header.classList.toggle('none')
  }

  const header = document.querySelector('header');
  document.body.addEventListener('keydown', (event) => {
    if (event.key == 'o') {
      ocultarMenu()
    }
  })
}
