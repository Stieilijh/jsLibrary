let myLibrary = [];
class Book {
    constructor( 
    name= 'Unknown',
    author = 'Unknown',
    pages = '0',
    haveRead = false) {
        this.name = name;
        this.author = author;
        this.pages = pages+" pages";
        this.haveRead = haveRead;
    }
    equals(book = Book){
        return this.name===book.name&&this.author===book.author;
    }
}
function addBook(newBook){
    let add= true;
    for(let i=0;i<myLibrary.length;i++){
        if(newBook.equals(myLibrary[i])){
            add=false;
            document.querySelector(".existsError").
            textContent="That book already exists";
            document.querySelector(".existsError").style.color="red";
        }
    }
    if(add){
        document.querySelector(".existsError").
            textContent="";
        myLibrary.push(newBook);
    }
}
function getBook(name){
    return myLibrary.find((book)=>book.name===name);
}

function displayBooks(){
    const books = document.querySelector(".books");
    books.innerHTML="";
    for(let i=0;i<myLibrary.length;i++){
        //book box
        const book = document.createElement("div");
        book.className="book";
        books.appendChild(book);
        //name
        const bookName = document.createElement("p");
        book.appendChild(bookName);
        bookName.textContent="Title-Name : "+myLibrary[i].name;
        //author
        const bookAuthor = document.createElement("p");
        book.appendChild(bookAuthor);
        bookAuthor.textContent="Author : "+myLibrary[i].author;
        //pages
        const bookPages = document.createElement("p");
        book.appendChild(bookPages);
        bookPages.textContent="Number of Pages : "+myLibrary[i].pages;
        //text for the checkbox
        const readText = document.createElement("div");
        book.appendChild(readText);
        //checkbox
        const bookRead = document.createElement("input");
        book.appendChild(bookRead);
        bookRead.type="checkbox";
        bookRead.checked=myLibrary[i].haveRead;
        bookRead.addEventListener("change",()=>{
            if(bookRead.checked){
                myLibrary[i].haveRead=true;
            }else{
                myLibrary[i].haveRead=false;
            }
            writeReadStatus();
        });
        writeReadStatus();
        function writeReadStatus(){
        if(bookRead.checked){
            readText.textContent="Status : Read";
            readText.style.color="green";
        }else{
            readText.textContent="Status : Not Read";
            readText.style.color="red";
        }}
        //remove button
        const removeBookbtn = document.createElement("button");
        book.appendChild(removeBookbtn);
        removeBookbtn.textContent="Remove";
        removeBookbtn.addEventListener("click",()=>{
            myLibrary=myLibrary.filter((bk)=>bk.equals(myLibrary[i]));
            displayBooks();
        });
    }
}

window.onload=function(){
const addbtn = document.querySelector("#addbtn");
const addBookForm = document.querySelector("#addBookForm");
addBookForm.style.display="none";
addBookForm.addEventListener("submit",()=>{
    const name=document.querySelector("#name").value;
    const author=document.querySelector("#author").value;
    const pages=document.querySelector("#pages").value;
    const haveRead=document.querySelector("#haveRead").checked;
    addBook(new Book(name,author,pages,haveRead));
    displayBooks();
    addBookForm.style.display="none";
    addBookForm.reset();
});
addbtn.addEventListener("click",()=>{
addBookForm.style.display="flex";
});
displayBooks();
}