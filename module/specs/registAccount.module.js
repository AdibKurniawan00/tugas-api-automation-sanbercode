import request from "supertest"
import {expect} from "chai"


const baseUrl = "https://kasir-api.belajarqa.com"
describe("regist account scenario", ()=> {
    let token 
    it("regist account", async ()=>{
        const payload = {
            "name": "toko saya",
            "email": "tokosaya@gmail.com",
            "password": "p@ssword12"
        }
    
        const response = await request (baseUrl)
            .post("/registration")
            .send(payload)
    
        expect ((await response).status).to.equal(201)
        console.log((await response).body)
    })
})