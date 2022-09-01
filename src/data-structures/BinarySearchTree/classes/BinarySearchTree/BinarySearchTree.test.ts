import { Compare, preOrderTraverse } from '../../../../utils';
import { BinarySearchTree } from './index';

describe('BinarySearchTree tests', () => {
  it('should be able to insert a value in BinarySearchTree sorted in ascending order', () => {
    const tree = new BinarySearchTree<number>();
    const randomSequence = [1, 4, 6, 3, 5, 2];
    randomSequence.forEach((value) => tree.insert(value));
    randomSequence.sort();
    let sequenceIndex = 0;
    tree.forEachKey((value) => {
      expect(value).toBe(randomSequence[sequenceIndex++]);
    });
  });

  // todo fix this test
  it('should be able to create a tree with initial values', () => {
    const initialValues = [1, 2, 3, 4, 5, 6];
    const tree = new BinarySearchTree(initialValues);

    let sequenceIndex = 0;
    tree.forEachKey((value) => {
      expect(value).toBe(initialValues[sequenceIndex++]);
    });
  });

  // todo fix this test
  it('should be able to iterate a tree with in order traverse sequence by default', () => {
    const inOrderSequence = [1, 2, 3, 4, 5, 6];
    const tree = new BinarySearchTree<number>(inOrderSequence);
    let sequenceIndex = 0;
    tree.forEachKey((value) => {
      expect(value).toBe(inOrderSequence[sequenceIndex++]);
    });
  });

  // todo fix this test
  it('should be able to exchange default iterate method', () => {
    const preOrderSequence = [2, 1, 4, 3, 6, 5];
    const tree = new BinarySearchTree<number>(preOrderSequence, {
      iterateFN: preOrderTraverse,
    });
    let sequenceIndex = 0;
    tree.forEachKey((value) => {
      expect(value).toBe(preOrderSequence[sequenceIndex++]);
    });
  });

  it('should be able to find min value of a BinarySearchTree', () => {
    const initialValues = [2, 1, 4, 3, 0, 5];
    const tree = new BinarySearchTree<number>(initialValues);

    expect(tree.min).toBe(Math.min(...initialValues));
  });

  it('should be able to find max value of a BinarySearchTree', () => {
    const initialValues = [2, 1, 4, 3, 0, 5];
    const tree = new BinarySearchTree<number>(initialValues);

    expect(tree.max).toBe(Math.max(...initialValues));
  });

  it('should be able to exchange default compare method', () => {
    const initialValues: BSTItemType[] = [
      { key: 2 },
      { key: 1 },
      { key: 4 },
      { key: 3 },
      { key: 0 },
      { key: 5 },
    ];
    type BSTItemType = { key: number };
    const compareFN = (a: BSTItemType, b: BSTItemType) =>
      a.key < b.key ? Compare.LESS_THAN : Compare.BIGGER_THEN;
    const tree = new BinarySearchTree<BSTItemType>(initialValues, { compareFN });
    expect(tree.compareFN).toBe(compareFN);
  });
});
