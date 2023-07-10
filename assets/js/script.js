const characters = document.querySelectorAll('.character');

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        const characterSelected = document.querySelector('.selected');
        characterSelected.classList.remove('selected');

        character.classList.add('selected');

        // Pega o elemento do personagem grande para adicionar infos nele
        const bigCharacter = document.querySelector('.big-character');
        // Altera a imagem do personagem grande
        const idCharacter = character.attributes.id.value;

        bigCharacter.src = `./assets/img/card-${idCharacter}.png`;

        // Altera o nome do personagem grande
        const characterName = document.getElementById('character-name');
        characterName.innerText = character.getAttribute('data-name');

        //Altera a descrição do personagem grande
        const characterDescription = document.getElementById('character-description');
        characterDescription.innerText = character.getAttribute('data-description');
    })
})