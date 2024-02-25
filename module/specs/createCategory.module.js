import request from "supertest"
import { expect } from "chai"
import { loginToken } from "../function/loginToken.spec.js"

const baseUrl = "https://kasir-api.belajarqa.com"

describe("create Category", ()=> {
    // let accessToken = loginToken
    let token
    it("add category", async ()=>{
        const payload = {
            "name": "makanan ringan",
            "description": "makanan ringan dari indofood"
        }
        token =await loginToken()
        const response = await request (baseUrl)
            .post('/categories')
            .send(payload)
            .set('Authorization', `Bearer ${token}`)
            
            
    
        expect((await response).status).to.equal(201)
        console.log((await response).body)
        
    })
})