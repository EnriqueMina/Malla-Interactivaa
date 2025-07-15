document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  const id = checkbox.id;
  const label = checkbox.parentElement;

  // Cargar estado anterior
  const isChecked = localStorage.getItem(id) === 'true';
  checkbox.checked = isChecked;
  if (isChecked) label.classList.add('tachado');

  // Escuchar cambios
  checkbox.addEventListener('change', () => {
    localStorage.setItem(id, checkbox.checked);
    if (checkbox.checked) {
      label.classList.add('tachado');
    } else {
      label.classList.remove('tachado');
    }
  });
});