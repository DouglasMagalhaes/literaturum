document.addEventListener('DOMContentLoaded', () => {
  const campoPesquisa = document.getElementById('campo-pesquisa');
  const livros = document.querySelectorAll('.livro');

  campoPesquisa.addEventListener('input', function () {
    const termo = this.value.toLowerCase();

    livros.forEach(livro => {
      const titulo = livro.querySelector('h4').textContent.toLowerCase();
      const container = livro.parentElement.parentElement; // div.subcategoria
      if (titulo.includes(termo)) {
        livro.style.display = 'block';
        container.style.display = 'block';
      } else {
        livro.style.display = 'none';
      }
    });
  });
});
