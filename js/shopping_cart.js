$(document).ready(function () {
    var finalCart = new Array();
    var userCart = getUserCart();

    userCart.forEach(function (p) {
        var shouldAddProduct = countProductById(p.id, finalCart) === 0;
        if (shouldAddProduct) {
            p.quantity = countProductById(p.id, userCart);
            finalCart.push(p);
        }
    });

    finalCart.forEach(function (p) {
        addProductName(p);
        addQuantityAndPrice(p);
    });

    $('#order-total').html('€' + getUserCartTotalPrice().toFixed(2));
});

function countProductById(id, list) {
    return $.grep(list, function (p) {
        return p.id === id;
    }).length || 0;
}

function addProductName(product) {
    $('#products-list').append("<div class=\"pl-5 col-sm-6\">" + product.name + "</div>");
}

function addQuantityAndPrice(product) {
    $('#products-list').append("<div class=\"pr-5 col-sm-6 text-right\">" + "€" + product.price + " X " + product.quantity + "</div>");
}
