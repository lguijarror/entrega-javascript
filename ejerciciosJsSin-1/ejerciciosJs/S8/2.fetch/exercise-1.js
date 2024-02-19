fetch('https://api.agify.io?name=michael')
    .then((response) => response.json())
    .then((result) => { console.log(result); })
    .catch((error) => { 
        console.log(error); 
    });
