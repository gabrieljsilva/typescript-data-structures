import { Node } from '../../../data-structures/BinarySearchTree/Classes/Node';
import { BinarySearchTreeCallbackFN } from '../../../data-structures/BinarySearchTree/types/index';

export function preOrderTraverse<T = any>(
  node?: Node<T>,
  callback?: BinarySearchTreeCallbackFN<T>,
) {
  if (node) {
    preOrderTraverse(node.left, callback);
    preOrderTraverse(node.right, callback);
    callback?.(node.key);
  }
}
