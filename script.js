var arr = [
    {
        "Name": "Momos",
        "Price": "150",
        "Category": "Fast Food",
        "Path": "/momos.jpeg"
    },
    {
        "Name": "Chowmine",
        "Price": "220",
        "Category": "Fast Food",
        "Path": "/chowmine.jpeg"
    },
    {
        "Name": "Burger",
        "Price": "290",
        "Category": "Fast Food",
        "Path": "images/burger.jpeg"
    },
    {
        "Name": "Rice",
        "Price": "320",
        "Category": "Lunch",
        "Path": "images/rice.jpeg"
    },
    {
        "Name": "Roti",
        "Price": "10",
        "Category": "Dinner",
        "Path": "images/roti.jpeg"
    },
    {
        "Name": "Juice",
        "Price": "80",
        "Category": "Beverages",
        "Path": "/juicesg.jpeg"
    },
    {
        "Name": "Cold Drink",
        "Price": "150",
        "Category": "Beverages",
        "Path": "/cold drink.jpeg"
    }
];
var categories = [...new Set(arr.map(item => item.Category))];
categories.forEach(function (item) {
    var button = document.createElement("button");
    button.innerHTML = item;
    button.onclick = function () {
        filterItems(item);
    };
    document.getElementById("row").append(button);
});

displayItems(arr);

function filterItems(category) {
    var filtered = arr.filter(item => item.Category === category);
    displayItems(filtered);
}

function displayItems(items) {
    var holder = document.getElementById("holder");
    holder.innerHTML = "";

    items.forEach(function (item) {

        var card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${item.Path}" alt="${item.Name}">
            <div class="card-content">
                <h3>${item.Name}</h3>
                <div class="price">₹ ${item.Price}</div>
                <div class="category">${item.Category}</div>
            </div>
        `;

        holder.append(card);
    });

}

