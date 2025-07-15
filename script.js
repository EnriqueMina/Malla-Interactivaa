document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      this.parentElement.classList.add('tachado');
    } else {
      this.parentElement.classList.remove('tachado');
    }
  });
});
