import { Node } from '.';

describe('Linked List tests', () => {
  it('should be defined', () => {
    const node = new Node(undefined);
    expect(node).toBeInstanceOf(Node);
  });
});
