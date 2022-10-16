const Books = require('../models/books');

module.exports = {
    async store(req, res) {
        const { bookName, author, numberOfpages, copiesAvailable } = req.body;

        const books = await Books.create({ 
            bookName, author, numberOfpages, copiesAvailable 
        });

        return res.json(books);
    }
}