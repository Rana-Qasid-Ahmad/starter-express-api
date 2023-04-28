const mongoose = require('mongoose');

const DB_URI = 'mongodb://zrana1791:QasidRana@ac-dhilolo-shard-00-00.xopx0j9.mongodb.net:27017,ac-dhilolo-shard-00-01.xopx0j9.mongodb.net:27017,ac-dhilolo-shard-00-02.xopx0j9.mongodb.net:27017/nodejs1?ssl=true&replicaSet=atlas-cc9kzg-shard-0&authSource=admin&retryWrites=true&w=majority';
const ConnectionParams = {
    useNewUrlParser: true,
    // userCreateIndex: true,
    useUnifiedTopology: true
}
const dbConnect = async() => {
    try {
        await mongoose.connect(DB_URI, ConnectionParams)
        console.log("Database Connected");
    } catch (error) {
        console.log(error.message)

    }
};
module.exports = dbConnect;