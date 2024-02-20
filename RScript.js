function showRikAndMorty(photoId) {
    // Substitua a URL abaixo pela URL da Cat Facts API.
    const RikAndMortyApiUrl = 'https://rickandmortyapi.com/';

    // Fazendo uma solicitação fetch para a Cat Facts API.
    fetch(RikAndMortyApiUrl)
        .then(response => response.json())
        .then(data => {
            // Extraindo o fato de gato da resposta.
            const RikAndMorty = data.fact;

            // Exibindo a mensagem na div de mensagem.
            document.getElementById('RikAndMortyMessage').innerText = RikAndMorty;
        })
        .catch(error => {
            console.error('Erro ao obter o fato de gato:', error);
            // Em caso de erro, você pode exibir uma mensagem alternativa ou lidar com a situação de outra forma.
            document.getElementById('RikAndMortybMessage').innerText = 'Erro ao obter o fato de gato. Tente novamente mais tarde.';
        });
}
