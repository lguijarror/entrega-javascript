const getData =  async () => {
    const response = await fetch('http://localhost:3000/diary');

    const results = await response.json();

    return results.sort((a,b) => {
        return new Date(a.date) - new Date(b.date);
      });
};

const drawData = (results) => {

    let div = document.createElement('div');

    for (let i = 0; i < results.length; i++) {
        let divEntrada = document.createElement('div');
        divEntrada.setAttribute('data-remove', i);
        let h3 = document.createElement('h3');
        let h5 = document.createElement('h5');
        let p = document.createElement('p');

        let titulo = document.createTextNode(results[i].title);
        let fecha = document.createTextNode(results[i].date);
        let entrada = document.createTextNode(results[i].description);

        divEntrada.appendChild(h3);
        divEntrada.appendChild(h5);
        divEntrada.appendChild(p);
        h3.appendChild(titulo);
        h5.appendChild(fecha);
        p.appendChild(entrada);

        div.appendChild(divEntrada);
        createButtons(divEntrada, i);
    }

    document.body.appendChild(div);
}

const createButtons = (div, index) => {
    let boton = document.createElement('button');
    let text = document.createTextNode('Eliminar entrada');

    boton.appendChild(text);
    div.appendChild(boton);

    boton.addEventListener('click', () => {
        let removeDiv = document.querySelector('div[data-remove="' + index + '"]');
        if(removeDiv != null){
            removeDiv.remove();
        }
        
    });
  };

const init = async () => {
    const results = await getData();
    drawData(results);
};


init();