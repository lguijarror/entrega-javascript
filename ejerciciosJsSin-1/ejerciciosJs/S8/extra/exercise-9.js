//La url de la API no existia, ha cambiado
const getFilms = async () => {
    const response = await fetch('https://ghibliapi.vercel.app/films');

    const results = await response.json();
    console.log(results);
    return results;
};

const drawFilms = (films) => {

    let gallery = document.createElement('div');
    gallery.className='b-gallery';

    for(let film of films){
        let item = document.createElement('div');
        item.className = 'b-gallery__item';

        let image = document.createElement('img');
        image.className = 'b-gallery__img';
        image.setAttribute('src', film.image);

        let title = document.createElement('p');
        title.className = 'b-gallery__text';
        let titleText = document.createTextNode(film.title);
    
        title.appendChild(titleText);

        item.appendChild(image);
        item.appendChild(title);

        gallery.appendChild(item);
    }
    document.body.appendChild(gallery);
};


const init = async () => {
    const films = await getFilms();
    
    drawFilms(films);
};

init();