<script>
var model = [
    {
        id: '0',
        name: 'root',
        parent: null,
    },
    {
        id: '1',
        name: 'child 1',
        parent: '0',
    },
    {
        id: '2',
        name: 'child 2',
        parent: '1'
    },
    {
        id: '3',
        name: 'root 1',
        parent: null,
    },
    {
        id: '4',
        name: 'child 1',
        parent: '3'
    },
];

/*


[
    {
        id: 0,
        name: '0',
        expanded: true,
        children: [
            {
                id: 1,
                name: '1',
                parent: 0,
                expanded: true,
                children: [
                    {
                        id: 2,
                        name: '2',
                        expanded: true,
                        parent: 1
                    }
                ]
            },
        ]
    },
]
*/

const setExpandedToParentNode = (parentNode) => {
  parentNode.expanded = true;
  if (parentNode.parentNode) {
    setExpandedToParentNode(parentNode.parentNode);
  }
}

const getChildrenItems = (list, { selectedNodeId, parentNode }) =>
  list
    .filter((item) => item.parent === parentNode.item.id)
    .map((item) => {
      const node = { item, parentNode };

      if (selectedNodeId === item.id) {
        node.expanded = true;
        setExpandedToParentNode(parentNode);
      }

      node.children = getChildrenItems(list, { selectedNodeId, parentNode: node }) || [];

      return node;
    });

const toTree = (list, selectedNodeId) => list.reduce((tree, item) => {
  if (!item.parent) {
    const node = { item };
    node.children = getChildrenItems(list, { selectedNodeId, parentNode: node }) || [];
    tree.push(node);
  }

  return tree;
}, []);


console.log(toTree(data, '2'));

</script>
