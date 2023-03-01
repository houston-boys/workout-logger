const mongoose = require('mongoose');
mongoose.set('strictQuery', true); //written due to deprecation warning

mongoose.connect('mongodb+srv://luism:databasep@cluster0.ua9gyiz.mongodb.net/?retryWrites=true&w=majority')
    .then((client) => {
        console.info('db connection successful');
    })
    .catch((error) => {
        console.error('db connection error', error)
    });

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const testtSchema = new Schema({
  listName: ObjectId,
  test: { type: String }
});

const Test = mongoose.model('Test', testtSchema);

module.exports = Test;
module.exports = {};
