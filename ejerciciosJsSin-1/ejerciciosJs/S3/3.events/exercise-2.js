let input = document.querySelector('input[type="text"]');

input.addEventListener('focus', () => { 
    console.log(input.value);
});