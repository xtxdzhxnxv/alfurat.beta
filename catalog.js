
// Фильтрация товаров
const categoryBtns = document.querySelectorAll('.category-btn');
const productItems = document.querySelectorAll('.product-item');

// ...existing code...
categoryBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Удаляем активный класс у всех кнопок
    categoryBtns.forEach(b => b.classList.remove('active'));
    // Добавляем активный класс текущей кнопке
    this.classList.add('active');

    const category = this.textContent.trim();

    productItems.forEach(item => {
      const itemCategory = item.querySelector('h3').textContent.trim();
      if (category === 'Вся мебель' || itemCategory.includes(category)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});