document.querySelectorAll('input[type="checkbox"]').forEach((checkbox, index) => {
  const id = `checkbox-${index}`;

  // Cargar estado guardado
  const saved = localStorage.getItem(id);
  if (saved === 'true') {
    checkbox.checked = true;
    checkbox.parentElement.classList.add('tachado');
  }

  // Escuchar cambios y guardar
  checkbox.addEventListener('change', function () {
    localStorage.setItem(id, checkbox.checked);
    if (checkbox.checked) {
      this.parentElement.classList.add('tachado');
    } else {
      this.parentElement.classList.remove('tachado');
    }
  });
});
