const changeButton = document.getElementById('change-button');
const container = document.getElementById('flex-container');
const initialBlocks = Array.from(container.querySelectorAll('.block'));

let isReversed = false;

changeButton.addEventListener('click', () => {
    isReversed = !isReversed;
    const blocksToAppend = isReversed ? [...initialBlocks].reverse() : initialBlocks;
    container.innerHTML = '';
    blocksToAppend.forEach(block => {
        container.appendChild(block);
    });
});