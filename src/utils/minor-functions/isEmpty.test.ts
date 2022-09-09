
import { isEmpty } from "./isEmpty";

import { assert } from "chai";

describe("isEmpty", function() {
    it("даем null и проверяем - пустой ли", function() {
        assert.equal(isEmpty(null), true);
    });

    it("даем число и проверяем - пустой ли", function() {
        assert.equal(isEmpty(5), false);
    })

    it("даем массив и проверяем - пустой ли", function() {
        assert.equal(isEmpty([]), true);
    });

    it("даем массив со значениями и проверяем - пустой ли", function() {
        assert.equal(isEmpty([1, 2]), false);
    });

    it("даем объект и проверяем - пустой ли", function() {
        assert.equal(isEmpty({}), true);
    });

    it("даем объект со значениями и проверяем - пустой ли", function() {
        assert.equal(isEmpty({key: "something"}), false);
    });    
});
