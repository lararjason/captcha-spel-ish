const selectedEmojis = [];
const emojiButtons = document.querySelectorAll('.emoji');
const checkButton = document.getElementById('check-button');

emojiButtons.forEach((emojiButton) => {
    emojiButton.addEventListener('click', () => {
        if (selectedEmojis.length < 2) {
            emojiButton.classList.toggle('selected');
            if (selectedEmojis.includes(emojiButton.textContent)) {
                selectedEmojis.splice(selectedEmojis.indexOf(emojiButton.textContent), 1);
            } else {
                selectedEmojis.push(emojiButton.textContent);
            }
        }
    });
});

checkButton.addEventListener('click', () => {
    if (selectedEmojis.length === 2) {
        if (hasValidEmojis(selectedEmojis)) {
            alert('CAPTCHA Accepted!');
        
        } else {
            alert('Incorrect CAPTCHA. Please try again.');
            
        }
    } else {
        alert('Please select 2 emojis.');
    }
});

function hasValidEmojis(selectedEmojis) {
    const validEmojiPairs = [['🧹', '🐕'], ['😎', '❤️'], ['🍕', '🚗']];

    for (const pair of validEmojiPairs) {
        if (selectedEmojis.includes(pair[0]) && selectedEmojis.includes(pair[1])) {
            return true;
        }
    }

    return false;
}
