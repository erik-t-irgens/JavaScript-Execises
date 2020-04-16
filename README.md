# JavaScript Exercises

#### _Various JS files intended to explore smaller puzzles and exercises for practice and study._

#### _By **Erik Irgens**_

## Description

These applications are designed to accomplish the following, in short: 
1. Study various concepts relating to JavaScript, from strings and arrays, to objects and classes, and data structures. 
2. Provide extensive comments for implementations of various lines, as a reference.
3. Serve as a repository of information for simple ideas and improvements.



## Setup/Installation Requirements

1. Clone this repository:
    ```
    $ git clone https://github.com/erik-t-irgens/JavaScript-Execises
    ```
2. Run the desired .js file (refer to Available Scripts below for context)
    ```
    $ node <filename> <parameters>
    ```

3. Optionally, peruse each file for insight.


## Technologies Used
* JavaScript

## Available Scripts

In the project directory, you can run:

### `node string-reversal.js <paramters>`

Runs the string reversal JavaScript logic, using the parameters supplied as the string within the example.<br />
This method was designed to attempt to reverse a string with no built in reversal methods, while minifying memory overhead.

---

### `node link-list-scratch.js`

Runs the link list JavaScript logic, using the provided methods that are called at the bottom of said file. <br />
This .js file was intended to implement a linked list data structure from scratch.<br />

In order to test the methods within the linked list, place any methods beneathe:
```
// ? Place Methods below using the above syntax
...
```

#### Available methods:

#### **Insert First**
This method will add a node to the beginning of the list (prepend), by adding a node with a pointer to the previous head in the list, if there is one.

`insertFirst()`
###### Parameter(s)
* data - Data that the new node will contain

#### **Insert Last**
This method will add a node to the end of the list (append), by adding a node with a pointer of null, and modifying the previous tail to have a pointer to the new node.

`insertLast()`
###### Parameter(s)
* data - Data that the new node will contain

#### **Insert At Given Index**
This method will add a node at the given index, modyfing the previous node (if one exists) to point to this new node, and create a pointer on the new node to the node that now follows it.

`insertAtIndex()`
###### Parameter(s)
* data - Data that the new node will contain
* index - The desired index for the new node to reside

#### **Remove First**
This method will remove the first node within the list by making the list's head the first node's pointer.

`removeFirst()`

#### **Remove First**
This method will remove the last node within the list by nullifying the last node, and nullifying the pointer within the penultimate node.

`removeLast()`

#### **Remove At Index**
This method will remove the node at the given index by nullifying the current node, and switching the previous node's pointer to the next node.

`removeAt()`
###### Parameter(s)
* index - The desired node to remove's index

#### **Clear List**
This method will remove all nodes within the list by nullifying the head of the list, and setting size = 0.

`clearList()`


#### **Print List Size**
This method will print the current size of the list.

`printListSize()`

#### **Print List Data**
This method will print all data within the list (each node's data property).

`printListData()`

#### **Print Data At Index**
This method will print the data of the node of the given index.

`getAt()`
###### Parameter(s)
* index - The desired node to print.


#### **Find Node**
This method will print the node(s) containing provided data, and the location of the node(s), if any exist.

`findNode()`
###### Parameter(s)
* data - The data to find within the list.


---


## Support and contact details

_Please feel free to contact Erik Irgens with questions, comments, and/or suggestions._

### License

*GNU GPLv3*

Copyright (c) 2020 **_Erik Irgens_**
