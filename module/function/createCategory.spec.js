import request from "supertest"
import { baseUrl } from "../data/config.js"

export async function createCategory(){
    const payload = {
        "name": "makanan ringan",
        "description": "makanan ringan dari indofood"
    }
    token =await loginToken()
    const response = await request (baseUrl)
        .post("/categories")
        .send(payload)
        .set('Authorization', `Bearer ${token}`)

    return (await response)
}
