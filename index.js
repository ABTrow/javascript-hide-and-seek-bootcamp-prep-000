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
  let escendantscurrent = document.querySelector('div#grand-node');
  let next = []
  if (current.children.length === 0
  }
  
}