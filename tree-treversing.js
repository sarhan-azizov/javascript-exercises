<script>
var data = [
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
let hasExpanded = false;
const getChildrenItems = (data, { selectedNodeId, parentNode }) =>
    data.filter((item) => item.parent === parentNode.id).map((item) => {
        hasExpanded = selectedNodeId === item.id;
        const children = getChildrenItems(data, { selectedNodeId, parentNode: item }) || [];
        return ({
            item,
            expanded: hasExpanded,
            children
        });
    });

const toTree = (data, selectedNodeId) =>
    data.reduce((tree, item) => {
        if (!item.parent) {
            const children = getChildrenItems(data, { selectedNodeId, parentNode: item }) || [];
            console.log(hasExpanded)
            tree.push({
                item,
                expanded: hasExpanded,
                children
            });
        }

        return accum;
    }, []);
*/

const setExpandedToParentNode = (parentNode) => {
    parentNode.expanded = true;
    if (parentNode.parentNode) {
        setExpandedToParentNode(parentNode.parentNode);
    }
}

const getChildrenItems = (data, { selectedNodeId, parentNode }) =>
    data.filter((item) => item.parent === parentNode.item.id).map((item) => {
        const node = { item, parentNode };
        
        if (selectedNodeId === item.id) {
            node.expanded = true;
            setExpandedToParentNode(parentNode);
        }

        node.children = getChildrenItems(data, { selectedNodeId, parentNode: node }) || [];

        return node;
    });

const toTree = (data, selectedNodeId) =>
    data.reduce((tree, item) => {
        if (!item.parent) {
            const node = { item };
            node.children = getChildrenItems(data, { selectedNodeId, parentNode: node }) || [];
            tree.push(node)
        }

        return tree;
    }, []);

console.log(toTree(data, '2'));

</script>
