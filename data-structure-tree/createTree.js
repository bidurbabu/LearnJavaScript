/*  

- on every iteration we find a root node. single node and left tree list and right tree list for that node.
- eg 3 is the root node of the tree here looking at preorder list.
Now we find the left tree has [9] and right tree has [15,20,7] in it.


preorder = [3,9,20,15,7] 
inorder = [9,3,15,20,7] 
 */
//constructor function

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var findRoot = (list, preOrderList) => {
  for (var i = 0; i < preOrderList.length; i++) {
    if (list.includes(preOrderList[i])) {
      return i;
    }
  }
};

var buildTree = function(inorder, preorder) {
  if (inorder.length === 0) {
    return;
  }
  var rootIndex = findRoot(inorder, preorder);
  var root = new TreeNode(preorder[rootIndex]);
  var i = 0;
  while (preorder[rootIndex] !== inorder[i]) {
    i++;
  }
  var leftTree = inorder.slice(0, i);
  var rightTree = inorder.slice(i + 1);
  root.left = buildTree(leftTree, preorder);
  root.right = buildTree(rightTree, preorder);
  return root;
};

var preorder = [3, 9, 20, 15, 7];
var inorder = [9, 3, 15, 20, 7];
var rootNode = buildTree(inorder, preorder);
console.log(rootNode);
