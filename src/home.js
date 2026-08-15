const loadHome = () => {
    const heading = document.createElement("h1");
    heading.textContent = "Restaurant";

    const paragraph = document.createElement("p");
    paragraph.textContent = "This restaurant is amazing!";

    const image = document.createElement("img");
    image.src = "./images/restaurant.jpg";
    image.alt = "A fancy restaurant";

    const divContent = document.querySelector("#content");

    divContent.appendChild(heading);
    divContent.appendChild(paragraph);
    divContent.appendChild(image);
}

export default loadHomepage;