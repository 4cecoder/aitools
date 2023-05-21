import {ID, Users, Account, Client} from "node-appwrite";

const client = new Client()
    .setEndpoint('https://appwrite.mangadiscord.xyz/v1')
    .setProject('6466c9047ef0715c7220')
    .setKey("8eed64a14ca1d041dd45c73de87237bd656766b739817c50d0a738efe5360df90d8b0239a2b5762ead971d3b3ff0981bc99d7f0b94d55f3644f114b8c2eb07ab36ac3e3ff9ab60edf0beb5d6c3863a2b5e30d6ab04f30fb4e79365a5b3f40c3744b1624c4180d29779daec9bc99de98dcbdfdeababe26bb46ad5ba5f9d78d3cb");

// @ts-ignore
const account = new Users(client)

export function createTestUser() {
    account.create(
        ID.unique(),
        "shawnhamby38@icloud.com",
        "",
        "Mission2004@",
        "FireTonnor"
    ).then((response) => {
        console.log(response)
    })
}
