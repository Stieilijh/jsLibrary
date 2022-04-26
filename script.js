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
        bookName.textContent=myLibrary[i].name;
        //author
        const bookAuthor = document.createElement("p");
        book.appendChild(bookAuthor);
        bookAuthor.textContent=myLibrary[i].author;
        //pages
        const bookPages = document.createElement("p");
        book.appendChild(bookPages);
        bookPages.textContent=myLibrary[i].pages;
        //text for the checkbox
        const readText = document.createElement("div");
        book.appendChild(readText);
        readText.textContent="Read";
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
            console.log(myLibrary);
        });
        //remove button
        const removeBookbtn = document.createElement("button");
        book.appendChild(removeBookbtn);
        removeBookbtn.textContent="Remove";
        removeBookbtn.addEventListener("click",()=>{
            myLibrary=myLibrary.filter((bk)=>bk.name!==myLibrary[i].name);
            displayBooks();
        });
    }
}

window.onload=function(){
const addbtn = document.querySelector("#addbtn");
addbtn.addEventListener("click",()=>{
    
});
displayBooks();

}