$(document).ready(function () {
    var products = [];

    retrieveProducts(function (json) {
        products = json;
    });

    $('#search-input').autoComplete({
        minLength: 1
    });

    $('#search-input').on('autocomplete.select', function(evt, item) {
        showProducts(item);
    });

    $('#search-input').keypress(function (e) {
        if (e.which != ENTER_KEY) return;

        var search = $('#search-input').val();
        for (i in products) {
            var product = products[i];
            var containsName = RegExp(search, 'i') .test(product.name);
            if (containsName) {
                showProducts(search);
                return;
            }
        }

        return false;
    });

    fixAutoCompleteWidth();
});

function fixAutoCompleteWidth() {
    var styleChangedCallback = function (mutations) {
        var newWidth = mutations[0].target.style.width;
        if (newWidth !== '100%'){
            $('.bootstrap-autocomplete.dropdown-menu').css('width', '100%');
        }
    }

    document.addEventListener("DOMNodeInserted", function(evt) {
        if (evt.target.className === "bootstrap-autocomplete dropdown-menu"){
            var observer = new MutationObserver(styleChangedCallback);
            observer.observe(evt.target, {
                attributes: true,
                attributeFilter: ['style'],
            });
        }
    }, false);
}
