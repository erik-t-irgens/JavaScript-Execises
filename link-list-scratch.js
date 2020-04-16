// A linked list is a list of nodes which are linked to each other through reference. These nodes reference each other sequentially. 


// * NODES

// Each node will contain two things: their data, and a reference to the next node (known as a pointer). 
class Node {
    // The Pointer has a default value of Null, and that is so we can understand where the end, or the tail, of the Linked list is. If the pointer 'points' to nothing, it is the last node in the linked list. 
    constructor(data, pointer = null) {
        this.data = data;
        this.pointer = pointer;
    }
}

// * LISTS

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Methods

    //* INSERT FIRST NODE

    // This will insert a new node at the BEGINNING of the list, no matter if the list is empty, or contains nodes. The second parameter in our new Node creation will be null if the list is empty, otherwise it will create a reference to whatever node is currently the 'head'. This simultaneously sets this.head to the node that has been inserted.
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
    }

    //* INSERT LAST NODE

    insertLast(data) {
        let node = new Node(data);
        let current;

        // If the list is empty, we make this new node the head. 
        if (!this.head) {
            this.head = node
        } else {
            // IF the list isn't empty, we need to keep track of which node is the head, and find the tail. So, we take our instantiated current, and make it the head.
            current = this.head
            // Then WHILE the "current", which is the head as above, has a pointer (Not Null), we make "current" equal to that pointer reference, then try again. Once that "pointer" is null, we can add the new node after it. 
            while (current.pointer) {
                current = current.pointer
            }
            // this will be the tail, and we will change its pointer to our new node.
            current.pointer = node;
        }
        this.size++
    }

    //* INSERT AT GIVEN INDEX

    insertAtIndex(data, index) {
        // If given index doesn't exist, we need to do nothing
        if (index > 0 && index > this.size || index < 0) {
            return;
        }

        // If first index (0)
        if (index === 0) {
            // This is reused in this case. If we, however, wanted each of these functions to be completely isolated from each other, we would rewrite that function here.
            this.insertFirst(data)
            return;
        }

        const node = new Node(data)
        // Instantiating current node, and previous node
        let current, previous

        // Set current to the first node
        current = this.head
        let counter = 0;

        while (counter < index) {
            previous = current // Node before index, which will be set to current. Which is head.
            counter++
            current = current.pointer // Node after index
        }

        // Setting the node that we are inserting's pointer to the current node, which is the node after our index
        node.pointer = current
        // Updating the previous node's pointer to our new node.
        previous.pointer = node

        this.size++
    }




    //* REMOVE FIRST

    removeFirst() {
        // edge case
        if (this.size === 0) {
            return;
        } else {
            let current = this.head
            this.head = current.pointer

        }
        this.size--
    }

    // * REMOVE LAST 

    removeLast() {

        // If the list is empty
        if (!this.head) {
            return
        }
        // If there is only one node
        else if (this.head.pointer === null) {
            this.head = null;
            this.size--
        } else {
            let current = this.head;
            let previous;
            let counter = 0;
            while (counter < this.size - 1) {
                counter++
                previous = current;
                current = current.pointer
            }

            previous.pointer = null
            current = null
        }
        this.size--
    }

    //* REMOVE AT INDEX

    removeAt(index) {
        // Edge cases
        if (index > 0 && index > this.size || index < 0) {
            return
        }

        let current = this.head
        let previous
        let counter = 0

        // Remove first
        if (index === 0) {
            this.removeFirst()
        } else if (index < this.size) {
            while (counter < index) {
                counter++
                previous = current;
                current = current.pointer
            }
            previous.pointer = current.pointer
            this.size--
        } else {
            return null;
        }
    }

    //* CLEAR LIST

    // This is pretty simple. All we must do is clear the head, and the size. 
    clearList() {
        this.head = null
        this.size = 0
    }

    // * PRINT LIST SIZE    
    printListSize() {
        console.log(this.size)
    }

    //* PRINT LIST DATA

    printListData() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data)
            currentNode = currentNode.pointer
        }
    }

    //* PRINT DATA AT GIVEN INDEX

    getAt(index) {
        let current = this.head
        let counter = 0

        while (current) {
            if (counter == index) {
                console.log('data at index ' + index + ': ' + current.data)
            }
            counter++
            // iterate over the nodes. While current is NOT null, it will check to see if the counter (which we instantiated above) is equal to the index provided. Once it is, it will print the data, then move through the rest of the list
            current = current.pointer
        }

        return null;
    }

    // * FIND NODE(S) WITH SUPPLIED DATA, AND PRINT INDEX AND NODE

    findNode(data) {
        let current = this.head;
        let counter = 0
        while (current) {
            if (current.data == data) {
                console.log(current, "index of: ", counter)
            }
            current = current.pointer
            counter++
        }
    }



}


//* USING THE METHODS/TESTS
const linkedList = new LinkedList();

// *Example method tests
// linkedList.insertFirst(100)
// linkedList.insertFirst(200)
// linkedList.insertFirst(2123120)
// linkedList.insertLast('hello there')
// linkedList.insertAtIndex('newData', 2)
// linkedList.getAt(1)
// linkedList.removeAt(0)
// linkedList.removeLast()
// linkedList.clearList()

// linkedList.insertLast(1)
// linkedList.insertLast(2)
// linkedList.insertLast(3)
// linkedList.insertLast(4)
// linkedList.insertLast(5)
// linkedList.insertLast(6)
// linkedList.insertLast(7)
// linkedList.insertLast(8)
// linkedList.insertLast(9)
// linkedList.insertLast(4)
// linkedList.findNode(4) // Returns 2 different nodes, and their indicies

// ? Place Methods below using the above syntax




// ? Leave these to see results in the console.

linkedList.printListData()
console.log("Final size: " + linkedList.size)

