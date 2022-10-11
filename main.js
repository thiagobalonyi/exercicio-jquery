$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li style="list-style: disc"></li>');

        $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo(`ul`);
        $('#nova-tarefa').val('');

        $(novoItem).click(function() {
            $(novoItem).css("text-decoration", "line-through");
        })
    })
})