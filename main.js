var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
 { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
 { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

let result=library.map(function(book){
	
 if(book.readingStatus===true){
	 console.log(`Already read ${book.author} by the ${book.title}`);
 }
 else{
	 console.log(`you still need to readm ${book.title}by the ${book.author}`);
    }
})