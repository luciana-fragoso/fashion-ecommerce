var PRODUCTS_FILE = 'data/products.json';
var SEARCH_KEY = 'search';
var ID_KEY = 'id';
var USER_NAME_KEY = 'name';
var TOTAL_KEY = 'total';
var ENTER_KEY = 13;
var CART_KEY = 'user_cart';

function retrieveProducts(callback) {
    $.getJSON(PRODUCTS_FILE, function (json) {
        callback(json);
    });
}

function getProductById(id, callback) {
    retrieveProducts(function (products) {
        var product = $.grep(products, function (p) {
            return p.id === id;
        });
        callback(product[0]);
    });
}

function goBack() {
    window.history.back();
}

function goHome() {
    window.location.href = 'index.html';
}

function showProducts(search) {
    search = search !== undefined ? ('?' + SEARCH_KEY + '=' + search) : '';
    window.location.href = 'choice_of_clothes.html' + search;
}

function showUserCart() {
    window.location.href = 'shopping_cart.html';
}

function checkout() {
    window.location.href = 'login_or_register.html';
}

function getUserCart() {
    return getObjectFromStorage(CART_KEY) || new Array();
}

function getUserCartTotalPrice() {
    var cart = getUserCart();
    var total = 0;

    cart.forEach(function (product) {
        total += parseFloat(product.price);
    });

    return total;
}

function addToCart(id) {
    getProductById(id, function (product) {
        var cart = getUserCart();
        cart.push(product);
        saveObjectToStorage(CART_KEY, cart);
    });
}

function saveObjectToStorage(key, object) {
    sessionStorage.setItem(key, JSON.stringify(object));
}

function getObjectFromStorage(key) {
    var value = sessionStorage.getItem(key);
    if (typeof value === 'string') {
        return JSON.parse(value);
    }
    return null;
}

function clearStorage() {
    sessionStorage.clear();
}
