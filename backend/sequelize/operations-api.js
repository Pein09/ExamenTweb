
import { VirtualShelf, Books } from "./sync.js";

//1. metoda de autentificare



/* INIT SEQ */
async function sequelizeAuth(sequelizeConnection) {
    try {
        await sequelizeConnection.authenticate();
        console.log("Sequelize has succesfully connected to the database!");
    }
    catch (err) {
        console.error(
            `There was an error connecting to the db using seq: ${err}`
        );
    }

}
//11. a treia metoda
async function sequelizeSync(sequelizeConnection) {
    try {
        await sequelizeConnection.sync({ force: true, alter: true });
        console.log("Sync completed!");
    }
    catch (err) {
        console.error(
            `There was an error while syncing to the db using seq: ${err}`
        );
    }
}


async function executeInitialDatabasePopulation() {
    try {
        await VirtualShelf.create({
            Description: "Cooking",
            Date: "2022-01-29 07:43:25",
        });
        await VirtualShelf.create({
            Description: "SF",
            Date: "2019-09-19 05:23:45",
        });

        await VirtualShelf.create({
            Description: "Action",
            Date: "2015-04-07 14:43:25",
        });

        await VirtualShelf.create({
            Description: "Drama",
            Date: "2020-01-29 15:15:15",
        });

        await VirtualShelf.create({
            Description: "Love",
            Date: "2018-04-02 07:43:25",
        });
        
        await Books.create({
            Title: "Mediteranean food",
            Genre: "Cooking",
            Url: "www.medcuisine.com",
            VirtualShelfId: 1,
        });
        await Books.create({
            Title: "Star Wars Revolution",
            Genre: "SF",
            Url: "www.starwars.com",
            VirtualShelfId: 2,
        });


    } catch (err) {
        console.error(`There was a problem populating the database: ${err}`);
    }
}
//2. a doua metoda

async function sequelizeInit(sequelizeConnection) {
    await sequelizeAuth(sequelizeConnection);
    await sequelizeSync(sequelizeConnection);
    await executeInitialDatabasePopulation();
}



//15. metoda de getPagina

async function getVirtualShelf() {
    try {

        return await VirtualShelf.findAll();

    }
    catch (err) {
        console.log(err);
    }
}

async function getBooks() {
    try {

        return await Books.findAll();

    }
    catch (err) {
        console.log(err);
    }
}

async function createVirtualShelf(virtualShelf) {
    try {

        await VirtualShelf.create({
            Description: virtualShelf.Description,
            Date: virtualShelf.Date,
        });

    }
    catch (err) {
        throw err;
    }

}

async function createBooks(book) {
    try {

        await Books.create({
            Title: book.Title,
            Genre: book.Genre,
            Url: book.Url,
            VirtualShelfId: book.VirtualShelfId,

        });

    }
    catch (err) {
        throw err;
    }
}

async function deleteVirtualShelf(VirtualShelfId) {
    try {

        const record = await VirtualShelf.findByPk(VirtualShelfId);
        if (record) await record.destroy();
    }
    catch (err) {
        throw err;
    }
}

async function deleteBook(BookId) {
    try {

        const record = await Books.findByPk(BookId);
        if (record) await record.destroy();
    }
    catch (err) {
        throw err;
    }
}

async function updateVirtualShelf(VirtualShelfId, virtualShelf) {
    try {

        const record = await VirtualShelf.findByPk(VirtualShelfId);
        if (record)
            await record.update({
                Description: virtualShelf.Description,
                Date: virtualShelf.Date,
            });
    }
    catch (err) {
        throw err;
    }
}

async function updateBooks(BookId, book) {
    try {

        const record = await Books.findByPk(BookId);
        if (record)
            await record.update({
                Title: book.Title,
                Genre: book.Genre,
                Url: book.Url,
                VirtualShelfId: book.VirtualShelfId,
            });
    }
    catch (err) {
        throw err;
    }
}

// async function getPaginaWithTweetsBy(tweetId){
//     try{
//         return await Page.findAll({
//             include: [{
//                  model: Tweets,
//                  where: {TweetId: tweetId},
//             }]
//         })
//     }
//     catch(err){
//         console.error(`Error while retrieving data: ${err}`)
//     }
// }


export const sequelizeOperationsAPI = {
    init: sequelizeInit,
    getVirtualShelf: getVirtualShelf,
    getBooks: getBooks,
    createBooks: createBooks,
    createVirtualShelf: createVirtualShelf,
    deleteVirtualShelf: deleteVirtualShelf,
    deleteBook: deleteBook,
    updateVirtualShelf: updateVirtualShelf,
    updateBooks: updateBooks,
    //getPaginaWithTweetsBy: getPaginaWithTweetsBy,
};