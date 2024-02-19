const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

function mayoresEdad(age) {
    return age > 18;
}

let filteredAges = [22, 14, 24, 55, 65, 21, 12, 13, 90].filter(mayoresEdad);


console.log(filteredAges);
  