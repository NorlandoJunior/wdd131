// Selecionar os elementos do DOM
const input = document.getElementById('inputChapter');
const button = document.getElementById('addButton');
const list = document.getElementById('chapterList');

// Adicionar evento de clique ao botão
button.addEventListener('click', function () {
    // Verificar se o campo de entrada não está vazio
    if (input.value.trim() !== '') {
        // Criar o elemento li
        const li = document.createElement('li');
        li.textContent = input.value; // Adicionar o valor do input ao li

        // Criar o botão de exclusão
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Adicionar evento de clique ao botão de exclusão
        deleteButton.addEventListener('click', function () {
            list.removeChild(li); // Remover o li correspondente
        });

        // Anexar o botão de exclusão ao li
        li.appendChild(deleteButton);

        // Adicionar o li ao ul
        list.appendChild(li);

        // Limpar e focar o campo de entrada
        input.value = '';
        input.focus();
    } else {
        alert('Please enter a valid book and chapter!');
    }
});
