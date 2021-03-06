import * as uuid from "uuid";
import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main = handler(async (event, context) => {
    //request body is passed in as a JSON encoded string in 'event.body'
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableName,
        Item: {
            userId: '123',
            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now()
        },
    };

    await dynamoDb.put(params);
    return params.Item;
});
