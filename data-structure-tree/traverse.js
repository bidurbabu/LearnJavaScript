/*
--------10---------
-----5--   --15-----
---1---8  12---20
------------13------
*/

const createNode = ({ left = null, value, right = null }) => {
  return {
    left: left,
    right: right,
    value: value
  };
};

const n1 = createNode({
  left: createNode({ value: 1 }),
  value: 5,
  right: createNode({ value: 8 })
});
const n2 = createNode({
  left: createNode({ value: 12, right: createNode({ value: 13 }) }),
  value: 15,
  right: createNode({ value: 20 })
});
const root = createNode({ left: n1, value: 10, right: n2 });

const preOrderList = [];
const preOrderTraverse = r => {
  if (!r) return;
  preOrderList.push(r.value);
  preOrderTraverse(r.left);
  preOrderTraverse(r.right);
};

const inOrderList = [];
const inOrderTraverse = r => {
  if (!r) return;
  inOrderTraverse(r.left);
  inOrderList.push(r.value);
  inOrderTraverse(r.right);
};

const postOrderList = [];
const postOrderTraverse = r => {
  if (!r) return;
  postOrderTraverse(r.left);
  postOrderTraverse(r.right);
  postOrderList.push(r.value);
};

preOrderTraverse(root);
inOrderTraverse(root);
postOrderTraverse(root);

console.log(...preOrderList);
console.log(...inOrderList);
console.log(...postOrderList);


