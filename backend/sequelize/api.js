
import "./sync.js";
import {router} from "../server-init.js";
import { sequelizeOperationsAPI } from "./operations-api.js";


router.route("/").get((request, response)=> {
    response.status(200).json("merge");
});

router.route("/sequelize/virtualshelf").get(async function getSequelizeVirtualShelf(_ , response){

    const result = await sequelizeOperationsAPI.getVirtualShelf();
    response.status(200).json(result);
});


router.route("/sequelize/books").get(async function getSequelizeBooks(_ , response){

    const result = await sequelizeOperationsAPI.getBooks();
    response.status(200).json(result);
});

router.route("/sequelize/virtualshelf")
.post(async function createVirtualShelf({body} , response){
    try{ 
    await sequelizeOperationsAPI.createVirtualShelf(body);
    response.status(200).json("Succes");
    }catch (err){
console.err(`Error while calling API: ${err}`);
    }
});

router.route("/sequelize/books")
.post(async function createBooks({body} , response){
    try{ 
    await sequelizeOperationsAPI.createBooks(body);
    response.status(200).json("Succes");
    }catch (err){
console.err(`Error while calling API: ${err}`);
    }
});
router.route("/sequelize/virtualshelf/:virtualShelfId").delete(async function deleteVirtualShelf({params: {VirtualShelfId}}, response) {
   
    try{ 
        await sequelizeOperationsAPI.deleteVirtualShelf(+VirtualShelfId);
        response.status(200).json("Succes");
        }catch (err){
    console.err(`Error while calling API: ${err}`);
        }
         
});

router.route("/sequelize/books/:booksId").delete(async function deleteBook({params: {BookId}}, response) {
   
    try{ 
        await sequelizeOperationsAPI.deleteVirtualShelf(+BookId);
        response.status(200).json("Succes");
        }catch (err){
    console.err(`Error while calling API: ${err}`);
        }
         
});

router.route("/sequelize/virtualshelf/:VirtualShelfId").put(async function updateVirtualShelf({params: {VirtualShelfId}, body}, response) {
   
    try{ 
        await sequelizeOperationsAPI.updateVirtualShelf(+VirtualShelfId, body);
        response.status(200).json("Succes");
        }catch (err){
    console.err(`Error while calling API: ${err}`);
        }
         
});  

router.route("/sequelize/books/:BooksId").put(async function updateBooks({params: {BookId}, body}, response) {
   
    try{ 
        await sequelizeOperationsAPI.updateBooks(+BookId, body);
        response.status(200).json("Succes");
        }catch (err){
    console.err(`Error while calling API: ${err}`);
        }
         
});  

// //daca vreau sa mi gaseasca tweet cu id 1, sa imi returneze si tweet si toate paginile care refera acel tweet
// router.route("/sequelize/PaginaWithTweets/:tweetId").get(async function getPaginaWithTweetsBy({ params: {tweetId}}, response){ 
//     const result = await sequelizeOperationsAPI.getPaginaWithTweetsBy( +tweetId);
//     response.status(200).json(result);


// });



