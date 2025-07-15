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
    controlarDesbloqueo();
  });
});

function controlarDesbloqueo() {
  const semestres = document.querySelectorAll('.semestre');

  semestres.forEach((semestre, index) => {
    const checkboxes = semestre.querySelectorAll('input[type="checkbox"]');
    const marcadas = Array.from(checkboxes).filter(cb => cb.checked).length;
    const total = checkboxes.length;

    // Desbloquear siguiente si hay al menos 80% completado
    const porcentaje = marcadas / total;
    const siguiente = semestres[index + 1];

    if (siguiente) {
      const sigCheckboxes = siguiente.querySelectorAll('input[type="checkbox"]');
      sigCheckboxes.forEach(cb => {
        cb.disabled = porcentaje < 0.8;
      });
    }
  });
}

// Ejecutar al iniciar
controlarDesbloqueo();
