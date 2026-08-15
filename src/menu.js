const menuItems = [
    { name: "Burger", price: "£12", description: "A tasty beef burger" },
    { name: "Pizza", price: "£14", description: "A cheesy stone-baked pizza" },
    { name: "Pasta", price: "£11", description: "Pasta with a rich tomato sauce" },
]

const loadMenu = () => {
    const contentDiv = document.querySelector("#content");
    for (const item of menuItems) {
        
        const div = document.createElement("div");

        const divHeader = document.createElement("h1");
        const divDescription = document.createElement("div");
        const divPrice = document.createElement("div");

        divHeader.textContent = item.name;
        divPrice.textContent = item.price;
        divDescription.textContent = item.description;

        div.appendChild(divHeader);
        div.appendChild(divDescription);
        div.appendChild(divPrice);

        contentDiv.appendChild(div);
    }
}

export default loadMenu;