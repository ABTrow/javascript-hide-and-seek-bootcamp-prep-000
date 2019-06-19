function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let listItems = document.querySelectorAll('.ranked-list li');
  for (let item of listItems) {
    item.innerHTML = parseInt(item.innerHTML) + n;
  }
}

function deepestChild() {
  let current = document.querySelector('div#grand-node');
  let next = []
  while (current.children.length !== 0) {
    current = current.children[0];
  }
  return current;
}