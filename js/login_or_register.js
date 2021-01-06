function purchase() {
    var total = getUserCartTotalPrice();
    var userName = $('#user-name').val();

    clearStorage();
    showConfirmation(userName, total);
}

function showConfirmation(userName, total) {
    var url = 'purchase_confirmation.html?' + USER_NAME_KEY + '=' + userName;

    if (total > 0) {
        url += '&' + TOTAL_KEY + '=' + total;
    }

    window.location.href = url;
}
