const getData = async (term) => {

    fetch("https://api.nationalize.io?name=" + term)
        .then((response) => response.json())
        .then((results) => console.log(results))
};

const searchData = () => {
    const button = document.querySelector("button");

    button.addEventListener("click", () => {
        const input = document.querySelector("input");
        getData(input.value);
    });
};

searchData();