const characters = document.querySelectorAll('.character');

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removeCharacterSelection();

        character.classList.add('selected');

        // Pega o elemento do personagem grande para adicionar infos nele
        changeImageOfSelectedCharacter(character);

        // Altera o nome do personagem grande
        changeNameOfSelectedCharacter(character);

        //Altera a descrição do personagem grande
        changeDescriptionCharacter(character);
    })
})

function changeDescriptionCharacter(character) {
    const characterDescription = document.getElementById('character-description');
    characterDescription.innerText = character.getAttribute('data-description');
}

function changeNameOfSelectedCharacter(character) {
    const characterName = document.getElementById('character-name');
    characterName.innerText = character.getAttribute('data-name');
}

function changeImageOfSelectedCharacter(character) {
    const bigCharacter = document.querySelector('.big-character');

    // Altera a imagem do personagem grande
    const idCharacter = character.attributes.id.value;

    bigCharacter.src = `./assets/img/card-${idCharacter}.png`;
}

function removeCharacterSelection() {
    const characterSelected = document.querySelector('.selected');
    characterSelected.classList.remove('selected');
}
