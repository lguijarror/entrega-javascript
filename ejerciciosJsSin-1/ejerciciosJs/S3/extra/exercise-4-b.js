const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  let body = document.querySelector('body');
  
  for (let i=0; i<countries.length; i++){
      let div = document.createElement('div');
      let h4 = document.createElement('h4');
      let text = document.createTextNode(countries[i].title);
      let img = document.createElement('img');
  
      h4.appendChild(text);
      div.appendChild(h4);
      img.setAttribute('src', countries[i].imgUrl);
      div.appendChild(img);
      body.appendChild(div);
  }

let boton = document.querySelector('button');

boton.addEventListener('click', () => {
    let removeDiv = document.querySelector('div:last-of-type');
    removeDiv.remove();
})