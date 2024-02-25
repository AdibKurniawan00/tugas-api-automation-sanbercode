import request from "supertest"
import { expect } from "chai"
import { loginToken } from "../function/loginToken.spec.js"

const baseUrl = "https://kasir-api.belajarqa.com"
const paramq = "makanan"
const paramPage = 1
describe("get Category lists", ()=> {
    let token
    it("add category", async ()=>{
        token =await loginToken()
        const response = await request (baseUrl)
            .get(`/categories`+ `?page=${paramPage}&q=$=${paramq}`)
            .set('Authorization', `Bearer ${token}`)
            
            
        expect((await response).status).to.equal(200)
        console.log((await response).body)
        
    })
})