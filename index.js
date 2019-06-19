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
  let descendants = document.querySelector('div#grand-node').children;
  let next = []
  if (descendants.length === 0) {
    return 
  }
  
}