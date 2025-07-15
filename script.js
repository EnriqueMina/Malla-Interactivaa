const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox, index) => {
  const id = `checkbox-${index}`;

  // Restaurar estado
  const saved = localStorage.getItem(id);
  if (saved === 'true') {
    checkbox.checked = true;
    checkbox.parentElement.classList.add('tachado');
  }

  // Guardar estado y verificar
  checkbox.addEventListener('change', () => {
    localStorage.setItem(id, checkbox.checked);
    checkbox.parentElement.classList.toggle('tachado', checkbox.checked);
    verificarFinal();
  });
});

// Verifica si todas están marcadas
function verificarFinal() {
  const todosMarcados = Array.from(checkboxes).every(cb => cb.checked);
  if (todosMarcados) {
    mostrarMensajeFinal();
  }
}

// Mostrar mensaje y limpiar pantalla
function mostrarMensajeFinal() {
  document.body.innerHTML = `
    <div id="mensaje-final" style="
      text-align: center;
      background-color: #22c55e;
      color: #0f172a;
      padding: 2rem;
      font-size: 2rem;
      font-weight: bold;
      border-radius: 12px;
      max-width: 600px;
      margin: 5rem auto;
      box-shadow: 0 0 20px rgba(0,0,0,0.4);
    ">
      🎉 ¡LO LOGRASTE! 🎓<br>Terminaste toda la malla curricular.
    </div>
  `;

  // Opción: limpiar localStorage después de mostrar mensaje
  setTimeout(() => {
    localStorage.clear();
  }, 5000); // espera 5 segundos antes de borrar
}

// Verificar también al cargar
verificarFinal();


