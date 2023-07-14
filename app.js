const main = document.querySelector('main')
const firstCard = document.querySelector('#firstCard')
const createTarget = document.getElementById('btn-click')

const img = 'https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600'

const createCard = () => {

    const card = document.createElement('div')
    card.classList.add('card')

    const imgCard = document.createElement('img')
    imgCard.src = img
    imgCard.alt = 'Producto'
    imgCard.id = 'img-card'

    const titleProduct = document.createElement('h2')
    titleProduct.textContent = 'coffe'

    const category = document.createElement('p')
    category.textContent = 'Bebida'

    const description = document.createElement('p')
    description.textContent =
        `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat   illum voluptatum quo repellendus veritatis impedit.
    `


    const price = document.createElement('p')
    price.classList.add('price')
    price.textContent = '$7000'

    // Asignar nodos hijos
    card.appendChild(imgCard)
    card.appendChild(titleProduct)
    card.appendChild(category)
    card.appendChild(description)
    card.appendChild(price)

    firstCard.appendChild(card)
}
createTarget.addEventListener('click',createCard)
// window.addEventListener('DOMContentLoaded', createCard)