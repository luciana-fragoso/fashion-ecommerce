$(document).ready(function () {
    retrieveProducts(function (json) {
        listProducts(json);
    })
});

function listProducts(allProducts) {
    var params = new URLSearchParams(window.location.search);
    var products = allProducts;

    if (params.has(SEARCH_KEY)) {
        var search = params.get(SEARCH_KEY);
        products = $.grep(allProducts, function (p) {
            return RegExp(search, 'i') .test(p.name);
        });
    }

    addProductGrid(products);
}

function addProductGrid(products) {
    products.forEach(function (product) {
        $('.page-content').append(
            "<div class=\"col-sm-6 p-2 flex-column\">" +
                "<button class=\"border-0 p-0\" onClick=\"javascript:showProduct(" + product.id + ");\">" +
                    "<img src=\"" + product.image + "\" class=\"d-block w-100\">" +
                "</button>" +
                "<div><a href=\"javascript:showProduct(" + product.id + ");\">" + product.name + "</a></div>" +
                "<div><span>€ " + product.price + "</span></div>" +
            "</div>"
        );
    });
}

function showProduct(id) {
    window.location.href = "clothes_details.html?id=" + id;
}
