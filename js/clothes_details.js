$(document).ready(function () {
    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get(ID_KEY));

    getProductById(id, function (product) {
        showProduct(product);
    });
});

function showProduct(product) {
    $('.page-content').append(
        "<div class=\"col-sm-6 p-2 flex-column\">" +
            "<img src=\"" + product.image + "\" class=\"d-block w-100\">" +
        "</div>" +
        "<div class=\"d-flex flex-column justify-content-start pt-1\">" +
            "<div>" + product.name + "</div>" +
            "<div>€ " + product.price + "</div>" +
            "<div>SIZES: XS | S | M | L | XL | XXL</div>" +
            addCartButton(product) +
        "</div>"
    );
}

function addCartButton(product) {
    return "<button " +
        "type=\"button\" " +
        "data-toggle=\"modal\" " +
        "data-target=\"#confirm-modal\" " +
        "class=\"btn btn-secondary mt-2\"" +
        "onClick=\"javascript:addToCart(" + product.id + ");\">" +
            "ADD TO CART" +
    "</button>";
}
