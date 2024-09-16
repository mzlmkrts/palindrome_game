document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inputWord').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkPalindrome();
        }
    });
});

function checkPalindrome() {
    var inputWord = document.getElementById('inputWord').value;
    if (inputWord) {
        var reversed = inputWord.split('').reverse().join('');
        var resultText = inputWord === reversed ? "is a palindrome." : "is not a palindrome.";
        document.getElementById('result').innerText = inputWord + " " + resultText;
    } else {
        document.getElementById('result').innerText = "Please enter a word.";
    }
}