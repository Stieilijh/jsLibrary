let myLibrary = [{name:"hehe",author:"haha",pages:"90 pages",haveRead:true},
{name:"hkfdhsd",author:"uaju",pages:"45 pages",haveRead:false}];
class Book {
    constructor( 
    name= 'Unknown',
    author = 'Unknown',
    pages = '0',
    haveRead = false) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead;
    }
}
function addBook(newBook){
    let add= true;
    for(let book in myLibrary){
        if(book.name===newBook.name){
            add=false;
        }
    }
    if(add){
        myLibrary.push(newBook);
    }
}

function removeBook(book){
    myLibrary=myLibrary.filter((bk)=>bk.name!==book.name);
}
function getBook(name){
    return myLibrary.find((book)=>book.name===name);
}

window.onload=function(){
//user interface
const addbtn=document.querySelector("#addbtn");
for(let i=0;i<myLibrary.length;i++){
const books = document.querySelector(".books");
const book = document.createElement("div");
books.appendChild(book);
const bookName = document.createElement("p");
book.appendChild(bookName);
bookName.textContent=myLibrary[i].name;
const bookAuthor = document.createElement("p");
book.appendChild(bookAuthor);
bookAuthor.textContent=myLibrary[i].author;
const bookPages = document.createElement("p");
book.appendChild(bookPages);
bookPages.textContent=myLibrary[i].pages;
const readText = document.createElement("div");
book.appendChild(readText);
readText.textContent="Read";
const bookRead = document.createElement("input");
book.appendChild(bookRead);
bookRead.type="checkbox";
bookRead.checked=myLibrary[i].haveRead;
const removeBook = document.createElement("button");
book.appendChild(removeBook);
removeBook.textContent="Remove";
}
}