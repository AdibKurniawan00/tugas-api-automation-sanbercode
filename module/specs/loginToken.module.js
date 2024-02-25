import request from "supertest"
import {expect} from "chai"
import { loginToken } from "../function/loginToken.spec.js"

const baseUrl = "https://kasir-api.belajarqa.com"
describe("get login token scenario", ()=> {
    let token 
    it("get login token", async ()=>{
        const payload = {
            "email": "tokosaya@gmail.com",
            "password": "p@ssword12"
        }
    
        const response = await request (baseUrl)
            .post("/authentications")
            .send(payload)
    
        expect ((await response).status).to.equal(201)
        token = (await response).body.data.accessToken
    })
    it("import token", async ()=>{
        const token = await loginToken()
        console.log(await token)
        
    })
})