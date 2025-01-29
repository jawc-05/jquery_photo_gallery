$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown(
        )})

    $('#cancelButton').click(function () {
        $('form').slideUp();
        })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const addressNewImg = $('#imageUrl').val();
        const newItem = $('<li style = "display: none"></li>');
        $(`<img src="${addressNewImg}"/>`).appendTo(newItem);
        $(`
            <div class="overlay-image-link">
                <a href="${addressNewImg}" title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real</a>
            </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);

        $('#imageUrl').val('');
    })
})

