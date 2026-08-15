const loadHome = () => {
    const heading = document.createElement("h1");
    heading.textContent = "Restaurant";

    const paragraph = document.createElement("p");
    paragraph.textContent = "This restaurant is amazing!";

    const image = document.createElement("img");
    image.src = "./images/restaurant.jpg";
    image.alt = "A fancy restaurant";

    const contentDiv = document.querySelector("#content");

    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(image);
}

export default loadHome;