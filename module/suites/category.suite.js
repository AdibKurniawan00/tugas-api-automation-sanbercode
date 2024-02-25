import { expect } from "chai"
import { loginToken } from "../function/loginToken.spec.js"
import { createCategory } from "../function/createCategory.spec.js"

describe("e2e test category", ()=>{
    let token;
    it("successfull create category", async ()=>{
        token =await loginToken()
        const response = await createCategory(token)

        expect((await response).status).to.equal(200)
    })

})