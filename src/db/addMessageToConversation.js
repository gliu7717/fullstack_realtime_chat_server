//import { ObjectID } from 'mongodb';
import { db } from './db';
var ObjectID = require('mongodb').ObjectId

export const addMessageToConversation = async (messageText, userId, conversationId) => {
    const newId = new ObjectID();
    const newMessage = {
        _id: newId,
        text: messageText,
        postedById: userId,
    };
    console.log(newMessage, conversationId);
    await db.getConnection().collection('conversations')
        .updateOne({ _id: new ObjectID(conversationId) }, {
            $push: { messages: newMessage },
        });
}