// Menú toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
  });
  
  // Scrollbar personalizado
  const thumb = document.getElementById('scrollbar-thumb');
  let isDragging = false;
  let startY, startScrollTop;
  
  thumb.addEventListener('mousedown', function (e) {
    isDragging = true;
    startY = e.clientY;
    startScrollTop = window.scrollY;
    e.preventDefault();
  });
  
  document.addEventListener('mousemove', function (e) {
    if (isDragging) {
      const deltaY = e.clientY - startY;
      const scrollFactor = document.documentElement.scrollHeight / window.innerHeight;
      window.scrollTo(0, startScrollTop + deltaY * scrollFactor);
    }
  });
  
  document.addEventListener('mouseup', function () {
    isDragging = false;
  });
  
  document.addEventListener('scroll', function () {
    const scrollRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const thumbMax = window.innerHeight - thumb.offsetHeight;
    thumb.style.top = `${scrollRatio * thumbMax}px`;
  });
  
  // Filtro de productos en tiempo real
  const input = document.getElementById('buscador');
  input.addEventListener('input', function () {
    const search = input.value.toLowerCase();
    document.querySelectorAll('.producto').forEach(function (producto) {
      const text = producto.textContent.toLowerCase();
      producto.style.display = text.includes(search) ? '' : 'none';
    });
  });
  // AUTO SLIDER
let counter = 1;
setInterval(function() {
  document.getElementById('s' + counter).checked = true;
  counter = counter % 4 + 1;
}, 5000);
