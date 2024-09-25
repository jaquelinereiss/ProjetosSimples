export function filtroDestinos() {
    const categoria = document.getElementById('categoria').value;
    const preco = document.getElementById('preco').value;
    const popularidade = document.getElementById('popularidade').value;
    const localidade = document.getElementById('localidade').value;

    const destinos = document.querySelectorAll('.destino');

    destinos.forEach(destino => {
        const destinoCategoria = destino.getAttribute('data-categoria');
        const destinoPreco = destino.getAttribute('data-preco');
        const destinoPopularidade = destino.getAttribute('data-popularidade');
        const destinoLocalidade = destino.getAttribute('data-localidade');

        const isCategoriaMatch = categoria === '' || destinoCategoria === categoria;
        const isPrecoMatch = preco === '' || destinoPreco === preco;
        const isPopularidadeMatch = popularidade === '' || destinoPopularidade === popularidade;
        const isLocalidadeMatch = localidade === '' || destinoLocalidade === localidade;

        if (isCategoriaMatch && isPrecoMatch && isPopularidadeMatch && isLocalidadeMatch) {
            destino.style.display = 'block';
        } else {
            destino.style.display = 'none';
        }
    });
}

document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    filtroDestinos();
});