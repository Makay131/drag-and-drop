const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

const dragStart = function () {
  //console.log(this);
  this.className += ' hold';
  setTimeout(() => {
    this.className = 'invisible';
  }, 0);
};
const dragEnd = function () {
  this.className = 'fill';
};
const dragOver = function (e) {
  e.preventDefault();
};
const dragEnter = function (e) {
  e.preventDefault();
  this.className += ' hovered';
};
const dragLeave = function () {
  this.className = 'empty';
};
const dragDrop = function () {
  this.className = 'empty';
  this.append(fill);
};

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragover', dragOver);
fill.addEventListener('dragenter', dragEnter);
fill.addEventListener('dragleave', dragLeave);

empties.forEach((empty) => {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
});
