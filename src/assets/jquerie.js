
//  header tools configs
document.addEventListener('DOMContentLoaded', function () {
document.querySelector('.files-btn').addEventListener('click', function () {
    document.querySelector('.btn-section').classList.add('show');
  });

  document.querySelector('.btn-close').addEventListener('click', function() {
    document.querySelector('.btn-section').classList.remove('show');
  });

});