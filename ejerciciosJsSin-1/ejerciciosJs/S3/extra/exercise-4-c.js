const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  let body = document.querySelector('body');
  
  for (let i=0; i<countries.length; i++){
      createDivs(i+1, countries[i]);
      createButtons(i+1);
  }

  function createDivs(index, country){
        let div = document.createElement('div');
        let h4 = document.createElement('h4');
        let text = document.createTextNode(country.title);
        let img = document.createElement('img');
    
        h4.appendChild(text);
        div.appendChild(h4);
        div.setAttribute('data-remove', index);
        img.setAttribute('src', country.imgUrl);
        div.appendChild(img);
        body.appendChild(div);
  }

  function createButtons(index){
    let boton = document.createElement('button');
    let text = document.createTextNode('Remove element ' + index);

    boton.appendChild(text);
    body.appendChild(boton);

    boton.addEventListener('click', () => {
        let removeDiv = document.querySelector('div[data-remove="' + index + '"]');
        if(removeDiv != null){
            removeDiv.remove();
        }
        
    });
  }
