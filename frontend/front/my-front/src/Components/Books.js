import { Fragment, useState, useEffect } from 'react';
//import { Books } from '../../../../../backend/sequelize/sync';


function Carti(){
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            try{

                const result = await fetch("http://localhost:8000/api/sequelize/books");
               const books = await  result.json();
               console.log(books)
                setBooks(books);
                
              }
              catch(err){
                console.log(`No data found: ${err}`);
              }   
            }
        fetchData();

  
}, [])

return <Fragment> 
    {
          books.map(x => <div>
             <p> {x.BooksId}</p>
             <p>----------------------</p>
             <p>Title: {x.Title}</p>
             <p>Genre: {x.Genre}</p>
           
          </div>)

          
}
      
</Fragment>
}


export default Carti;
