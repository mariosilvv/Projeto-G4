function initMenuMobile() {
  const btnMobile = document.getElementById('btn-mobile')

  function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
    document.body.classList.toggle('active')
  }

  btnMobile.addEventListener('click', toggleMenu)
}

initMenuMobile()


export { initMenuMobile }