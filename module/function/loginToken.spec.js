import request from "supertest";
import { baseUrl } from "../data/config.js";

export async function loginToken(){
    const payload = {
        "email": "tokosaya@gmail.com",
        "password": "p@ssword12"
    }

    const response = await request (baseUrl)
        .post("/authentications")
        .send(payload)

    token = (await response).body.data.accessToken
    return token
}