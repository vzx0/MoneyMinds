const video1 = document.getElementById('investimentoVideo1')
const botaoVideo1 = document.getElementById('investimentoVideoBotao1')

video1.addEventListener('ended', function() {
    botaoVideo1.disabled = false;
    botaoVideo1.style.backgroundColor = "#00FF66";
});

botaoVideo1.addEventListener('click', function() {
    // Ação a ser executada após o clique no botão, após o término do vídeo
    console.log('Botão clicado após o vídeo!');
});