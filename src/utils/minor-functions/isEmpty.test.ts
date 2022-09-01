import { isEmpty } from "./isEmpty";

import { expect } from "chai";

describe("isEmpty", function() {
    it("даем объект и проверяем - пустой ли", function() {
        chai.assert.equal(isEmpty(null), true);
    })
})
