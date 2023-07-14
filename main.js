$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#bottao-cancelar').click(function(){

        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endecoDaNovaImagem = $('endereco-imagem-nova').val();
        const novoItem = $('<li styal="display: none"></li>');
        $(`<img src"${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_black" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('endereco-imagem-nova').val('')
    })
})