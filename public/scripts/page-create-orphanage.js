// Create map
const map = L.map('mapid').setView([-26.2500217,-49.5185779], 15)

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// Create and add marker
map.on('click', function(event) {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

// Add photos field
function addPhotoField() {
    // Pegar o container de fotos
    const container = document.querySelector('#images')
    
    // Pegar o container para duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    // Realizar a duplicação da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // Verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    // Limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        // Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo
    span.parentNode.remove()
}

// Selecionar Sim ou Não
function toggleSelect(event) {
    // Retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button').forEach(function(button) {
        button.classList.remove('active')
    })

    // Colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')


    // Atualizar o input hidden cm o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')

    input.value = button.dataset.value
}

