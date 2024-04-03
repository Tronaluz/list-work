$(document).ready(function() {
    $('#tarefaForm').on('submit', function(e) {
        e.preventDefault();
        var tarefa = $('#tarefaInput').val();
        if(tarefa) {
            $('#listaTarefas').append('<li>' + tarefa + '<li>');
            $('#tarefaInput').val('');
        }
    });

$('#listaTarefas').on('click', 'li', function() {
    $(this).toggleClass('completa');
});
});
