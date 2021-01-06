$(document).ready(function () {
    var params = new URLSearchParams(window.location.search);
    var name = params.get(USER_NAME_KEY);

    $('#user-name').html(name);

    if (params.has(TOTAL_KEY)) {
        var total = parseFloat(params.get(TOTAL_KEY)).toFixed(2);
        $('#inner-container').append("<div class=\"p-2\">TOTAL: €" + total + "</div>");
    }
});
