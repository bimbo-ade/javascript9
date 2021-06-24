const btns = document.querySelectorAll('.btn-btn');
const content = document.querySelectorAll('.content');
const wrapper = document.querySelector('.wrap');

window.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove('active')
      e.target.classList.add('active')
    });
    content.forEach(function (content) {
      content.classList.remove('active');
    });
    const texts = document.getElementById(id);
    texts.classList.add('active');

  }
})