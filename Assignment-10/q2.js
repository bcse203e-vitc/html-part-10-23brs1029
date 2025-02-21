const redButton = document.getElementById('Red');
const blueButton = document.getElementById('Blue');

redButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});

blueButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});
