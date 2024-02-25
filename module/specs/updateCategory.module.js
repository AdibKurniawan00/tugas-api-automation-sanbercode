import request from "supertest"
import { expect } from "chai"
import { loginToken } from "../function/loginToken.spec.js"

const baseUrl = "https://kasir-api.belajarqa.com"
const categoryId = "c4b58f5a-b1c4-4ae7-bc0f-8f216de8206d"

describe("get Category lists", ()=> {
    let token
    it("add category", async ()=>{
        token =await loginToken()
        const payload = {
            "name": "update-minuman",
            "description": "no-minuman"
                      
        }
        const response = await request (baseUrl)
            .put(`/categories/${categoryId}`)
            .send(payload)
            .set('Authorization', `Bearer ${token}`)
            
            
        expect((await response).status).to.equal(200)
        console.log((await response).body)
        
    })
})