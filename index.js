
//1. A page has a series of product cards, each containing a header, small description, and a "Delete" button. Clicking the button should remove the card from the DOM.
$('.dlt-btn').click(function () {
    $(this).parent().remove()
})
//2. On the same set of cards, users can hover over a product card to see additional details. The details should hide again when the user moves the mouse away.
$('.card').mouseenter(function () {
    $(this).find('.hover-content').show(1000);
});
$('.card').mouseleave(function () {
    $(this).find('.hover-content').hide(1000);
});

