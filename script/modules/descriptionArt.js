import { WorksAat } from "../Classes/WorksArt.js";


let arts = []
let art1 = new WorksAat("A Escola de Atenas", "Rafael", '1510-1511', 'none');
let art2 = new WorksAat("O Nascimento de Vênus", "Sandro Botticelli", "1484-1486", "none");
let art3 = new WorksAat("O Julgamento Final", "Michelangelo", "1536-1541", "url_da_imagem_do_julgamento_final");



arts.push(art1, art2, art3)

let descriptionArt = document.querySelectorAll('.descriptionArt')

function createDescription() {
  descriptionArt.forEach((item, index) => {
    const {title, author, yearOfCreation} = arts[index];
    let h1 = document.createElement('h1');
    h1.innerText = title
    let h2 = document.createElement('h2');
    h2.innerText = author
    let h3 = document.createElement('h3');
    h3.innerText = yearOfCreation;
    item.appendChild(h1)
    item.appendChild(h2)
    item.appendChild(h3)
  })
}

createDescription()

