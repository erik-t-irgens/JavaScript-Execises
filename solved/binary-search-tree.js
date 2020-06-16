class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //* Functions to implement

    // insert(data) - helper method which creates a newnode to be inserted and callsinsertNode
    insert(data) { // creates a new node with a value of fata. If the tree is empty, ti adds this node to the tree and makes it the root. Otherwise, it calls insertNode() (below)
        // Create a node and initialising
        var newNode = new Node(data)

        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }

    }

    insertNode(node, newNode) { // this compares the given data with the data of the current node and moves left or right accordingly and recurs until it finds a correct node with a null value, where the new node can be added.
        // if the data is less than the origin node
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            } else { // if the left node of the origin node isn't null, check that node for insertion. 
                this.insertNode(node.left, newNode)
            }

        } else { // if the new node is larger than the root node
            if (node.right === null) {
                node.right = newNode
            } else { // if the right node of the origin node isn't null, check that node for insertion. 
                this.insertNode(node.right, newNode)
            }
        }
    }


    // remove(data)

    remove(data) {
        this.root = this.removeNode(this.root, //head
            data // key
        )
    }

    removeNode(node, key) {

        if (node === null) { // if root is null then tree is empty
            return null
        } else if (key < node.data) { // if data is less than root, move to left
            node.left = this.removeNode(node.left, key)
            return node;
        } else if (key > node.data) { // if data is greater than root, move to right
            node.right = this.removeNode(node.right, key)
            return node
        } else {
            if (node.left === null && node.right === null) { // if node has no children / is a leaf node
                node = null
                return node

            }
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }

            // deleting node with two children
            // minimum code of the right subtree is stored in 'aux'

            let aux = this.findMinNode(node.right)
            node.data = aux.data

            node.right = this.removeNode(node.right, aux.data)

            return node
        }
    }

    //Helper Function
    // findMinNode()
    findMinNode(node) {
        // if left of a node is null then it must be the minimum node of that node
        if (node.left === null) {
            return node
        } else {
            return this.findMinNode(node.left)
        }
    }

    // Alternatively, without being a dependency

    // findMinNode() {
    //     let current = this.root 
    //     while (current.left !== null) {
    //         current = current.left
    //     }
    //     return current.data
    // }

    // findMaxNode()

    findMaxNode(node) {
        // if left of a node is null then it must be the minimum node of that node
        if (node.right === null) {
            return node
        } else {
            return this.findMaxNode(node.right)
        }
    }

    // Alternatively, without being a dependency

    // findMaxNode() {
    //     let current = this.root 
    //     while (current.right !== null) {
    //         current = current.right
    //     }
    //     return current.data
    // }


    // getRootNode()

    getRootNode() {
        return this.root
    }

    // inorder(node)

    // 1 traverse the left subtree, i.e perform inorder on left subtree
    // 2 visit root
    // 3 traverse the right subtree i.e perform inorder on right subtree

    // returnNode(node) - agnostic node return for usage in order helpers

    returnNode(node) {
        return node
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left)
            console.log(node.data)
            // this.returnNode(node.data)

            this.inorder(node.right)
        }
    }

    // preorder(node)

    // 1 visit root
    // 2 traverse left subtree, i.e perform preorder on left
    // 3 traverse right, i.e perform preorder on right

    preorder(node) {
        if (node !== null) {
            // this.returnNode(node.data)
            console.log(node.data)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }


    // postorder(node)

    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
            // this.returnNode(node.data)
        }
    }

    // search(node, data)

    search(node, data) {
        // if tree is empty return null
        if (node === null) {
            return null
        } else if (data < node.data) {
            return this.search(node.left, data)
        } else if (data > node.data) {
            return this.search(node.right, data)
        } else {
            return node
        }
    }

}

var BST = new BinarySearchTree()

BST.insert(15)
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27)

let root = BST.getRootNode()
// BST.inorder(root)

BST.insert(1)

BST.inorder(root)

BST.remove(1)

BST.inorder(root)