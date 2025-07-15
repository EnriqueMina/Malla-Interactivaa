const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox, index) => {
  const id = `checkbox-${index}`;

  // Restaurar estado guardado
  const saved = localStorage.getItem(id);
  if (saved === 'true') {
    checkbox.checked = true;
    checkbox.parentElement.classList.add('tachado');
  }

  // Escuchar cambios
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

// Muestra el mensaje final sin borrar el script
function mostrarMensajeFinal() {
  const contenedor = document.querySelector('.contenedor');
  contenedor.innerHTML = `
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
}

// Verifica también al cargar
verificarFinal();
