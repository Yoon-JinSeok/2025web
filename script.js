// script.js
window.addEventListener('DOMContentLoaded', () => {
  // 각 section 제목을 클릭하면 내용 토글
  document.querySelectorAll('section h2').forEach(header => {
    header.addEventListener('click', () => {
      // 제목 이후 모든 형제 요소 토글
      let el = header.nextElementSibling;
      while (el && el.tagName !== 'H2') {
        el.style.display = (el.style.display === 'none') ? '' : 'none';
        el = el.nextElementSibling;
      }
    });
  });
});