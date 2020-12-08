# Web Scraping with Puppeteer

## Setup

# Clone project:
0. `git clone https://github.com/brianebill/puppeteer.git`
0. `cd puppeteer`
0. `git init`
0. `git remote add origin https://github.com/[your_handle]/puppeteer.git`

# Start project and enter domains to be scraped
0. `yarn start`
0. Enter a webpage address on the command line when prompted and press enter
0. Check out the result in `src/data`

## DOM API

# Document or window object
The DOM (Document Object Model) is an API that represents and interacts with any HTML or XML document. The DOM is a document model loaded in the browser and representing the document as a node tree, where each node represents part of the document (e.g. an element, text string, or comment).

The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree. The DOM tree includes elements such as <body> and <table>, among many others. It provides functionality globally to the document, like how to obtain the page's URL and create new elements in the document.

The Document interface describes the common properties and methods for any kind of document. Depending on the document's type (e.g. HTML, XML, SVG, …), a larger API is available: HTML documents, served with the "text/html" content type, also implement the HTMLDocument interface, whereas XML and SVG documents implement the XMLDocument interface.

# Document Object Model
(https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)
The Document Object Model (DOM) is an architecture that describes the structure of a document; each document is represented by an instance of the interface Document. A document, in turn, consists of a hierarchical tree of nodes, in which a node is a fundamental record representing a single object within the document (such as an element or text node).

Nodes may be strictly organizational, providing a means for grouping other nodes together or for providing a point at which a hierarchy can be constructed; other nodes may represent visible components of a document. Each node is based on the Node interface, which provides properties for getting information about the node as well as methods for creating, deleting, and organizing nodes within the DOM.

Nodes don't have any concept of including the content that is actually displayed in the document. They're empty vessels. The fundamental notion of a node that can represent visual content is introduced by the Element interface. An Element object instance represents a single element in a document created using either HTML or an XML vocabulary such as SVG.

While the Document interface is defined as part of the DOM specification, the HTML specification significantly enhances it to add information specific to using the DOM in the context of a web browser, as well as to using it to represent HTML documents specifically.

# Support added to Document by the HTML standard are:

- Access to various information provided by the HTTP headers when loading the page, such as the location from which the document was loaded, cookies, modification date, referring site, and so forth.
- Access to lists of elements in the document's <head> block and body, as well as lists of the images, links, scripts, etc. contained in the document.
- Support for interacting with the user by examining focus and by executing commands on editable content.
- Event handlers for document events defined by the HTML standard to allow access to mouse and keyboard events, drag and drop, media control, and more.
- Event handlers for events that can be delivered to both elements and documents; these presently include only copy, cut, and paste actions.


# DOM Interfaces
DOM interfaces include both properties and methods
(https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
Element
Event
EventTarget
HTMLCollection
MutationObserver
MutationRecord
NamedNodeMap
Node
NodeFilter
NodeIterator
NodeList
NonDocumentTypeChildNode
ParentNode
ProcessingInstruction
Selection 
Range
Text
TextDecoder 
TextEncoder 
TimeRanges
TreeWalker
URL
Window
Worker
XMLDocument 

# Document Methods
`querySelector()`
Returns the first matching Element node within the node's subtree. If no matching node is found, null is returned.
`querySelectorAll()`
Returns a NodeList containing all matching Element nodes within the node's subtree, or an empty NodeList if no matches are found.
`getElementById()`
returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly
`getElementsByClassName() `
A method of Document interface, returns an array-like object of all child elements which have all of the given class name(s). When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class name(s).

# HTML DOM API
Made up of the interfaces that define the functionality of each of the elements in HTML, as well as any supporting types and interfaces they rely upon.

# The functional areas included in the HTML DOM API include:

- Access to and control of HTML elements via the DOM.
- Access to and manipulation of form data.
- Interacting with the contents of 2D images and the context of an HTML <canvas>, for example to draw on top of them.
- Management of media connected to the HTML media elements (<audio> and <video>).
- Dragging and dropping of content on webpages.
- Access to the browser navigation history
- Supporting and connective interfaces for other APIs such as Web Components, Web Storage, Web Workers, WebSocket, and Server-sent events.

# Puppeteer

Immediately-invoked Function Expression
An IIFE is a way to execute functions immediately, as soon as they are created. They are very useful because they don't pollute the global object, and they are a simple way to isolate variable declarations.

The reason to use them with puppeteer is that the await keyword is only available inside a function with the async keyword.
