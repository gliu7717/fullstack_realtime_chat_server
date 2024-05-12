import { MongoClient, ServerApiVersion} from 'mongodb';
//const { MongoClient, ServerApiVersion } = require('mongodb');

const DB_NAME = 'real-time-chat';

export const db = {
    _dbClient: null,
    connect: async function(uri) {
        /*
        const client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
          */
          
        const client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this._dbClient = client;
    }, 
    getConnection: function() {
        if (!this._dbClient) {
            db.connect('mongodb+srv://gerry:benray1110@cluster0.pctoxth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
            console.log('You need to call the connect() function first!');
            //process.exit(1);
        }

        return this._dbClient.db(DB_NAME);
    }
}