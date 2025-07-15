document.querySelectorAll('input[type="checkbox"]').forEach((checkbox, index) => {
  const id = `checkbox-${index}`;

  // Cargar estado anterior
  const saved = localStorage.getItem(id);
  if (saved === 'true') {
    checkbox.checked = true;
    checkbox.parentElement.classList.add('tachado');
  }

  // Escuchar cambios
  checkbox.addEventListener('change', () => {
    localStorage.setItem(id, checkbox.checked);
    if (checkbox.checked) {
      checkbox.parentElement.classList.add('tachado');
    } else {
      checkbox.parentElement.classList.remove('tachado');
    }
    verificarFinal();
  });
});

// Verificar si todas están marcadas
function verificarFinal() {
  const todos = Array.from(document.querySelectorAll('input[type="checkbox"]'));
  const completados = todos.every(cb => cb.checked);

  const mensaje = document.getElementById('mensaje-final');
  if (completados) {
    mensaje.classList.add('visible');
  } else {
    mensaje.classList.remove('visible');
  }
}

// Llamar al inicio también
verificarFinal();
