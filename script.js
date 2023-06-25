function generateChart() {
    var month = document.getElementById("month").value;
    var category = document.getElementById("category").value;
    var product = document.getElementById("product").value;
    var salesData = getSalesData(month, category, product);

    var chart = new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
            labels: Object.keys(salesData),
            datasets: [
                {
                    label: product,
                    data: Object.values(salesData),
                    backgroundColor: getProductColor(product),
                    borderColor: getProductColor(product),
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false,
                        color: "#CCCCCC"
                    },
                    ticks: {
                        fontColor: "#777777"
                    }
                },
                x: {
                    grid: {
                        drawBorder: false,
                        color: "#CCCCCC"
                    },
                    ticks: {
                        fontColor: "#777777"
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: "Product Sales for " + product + " (" + category + ")",
                    font: {
                        size: 20,
                        weight: "bold"
                    },
                    color: "#444444"
                },
                legend: {
                    display: false
                }
            }
        }
    });

    renderLegend();
}

function getSalesData(month, category, product) {
    // Replace this with your actual sales data retrieval logic
    // Here's a sample implementation that generates random sales data
    var salesData = {};
    for (var i = 1; i <= 31; i++) {
        var date = month + " " + i;
        var sales = Math.floor(Math.random() * 100) + 1; // Generate random sales value
        salesData[date] = sales;
    }
    return salesData;
}

function getProductColor(product) {
    // Set the color for each product
    if (product === "Product A") {
        return "#2196F3"; // Blue color for Product A
    } else if (product === "Product B") {
        return "#4CAF50"; // Green color for Product B
    } else if (product === "Product C") {
        return "#FF5722"; // Orange color for Product C
    }
}

function renderLegend() {
    var productSelect = document.getElementById("product");
    var legendContainer = document.getElementById("legendContainer");
    legendContainer.innerHTML = "";

    var legendList = document.createElement("ul");
    legendList.classList.add("chart-legend");

    productSelect.childNodes.forEach(function (option) {
        if (option.selected) {
            var product = option.value;
            var listItem = document.createElement("li");
            var span = document.createElement("span");
            span.classList.add(product.toLowerCase().replace(" ", "-"));
            listItem.appendChild(span);
            listItem.appendChild(document.createTextNode(product));
            legendList.appendChild(listItem);
        }
    });

    legendContainer.appendChild(legendList);
}
