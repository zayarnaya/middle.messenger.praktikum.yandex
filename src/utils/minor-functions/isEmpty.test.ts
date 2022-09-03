
import { isEmpty } from "./isEmpty";

import { assert } from "chai";

describe("isEmpty", function() {
    it("даем null и проверяем - пустой ли", function() {
        assert.equal(isEmpty(null), true);
    });

    it("даем массив и проверяем - пустой ли", function() {
        assert.equal(isEmpty([]), true);
    });

    it("даем объект и проверяем - пустой ли", function() {
        assert.equal(isEmpty({}), true);
    });
});
