const getData = async (term) => {

    fetch("https://api.nationalize.io?name=" + term)
        .then((response) => response.json())
        .then((results) => printData(term, results))
};

const searchData = () => {
    const button = document.querySelector("button");

    button.addEventListener("click", () => {
        const input = document.querySelector("input");
        getData(input.value);
    });
};

const printData = (term, result) => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const title = document.createTextNode('El nombre ' + term + ' tiene las siguientes probabilidades:');
    
    for (let i = 0; i < result.country.length; i++) {
        const p = document.createElement('p');
        const text = document.createTextNode('Un ' + result.country[i].probability + '% de pertenecer a ' + result.country[i].country_id);
        
        p.appendChild(text);
        div.appendChild(p);
    }

    h1.appendChild(title);
    div.prepend(h1);  //.prepend : añade al principio
    document.body.appendChild(div);

};

searchData();