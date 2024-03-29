import { assert } from "chai";
import { Router } from "./router";

require("jsdom-global")('<div class="messenger-wrapper"><div>', { url: 'http://localhost' });

const router = new Router();

function firstPage() {
  console.log("Первая страница");
}

function secondPage() {
  console.log("Вторая страница");
}

describe("Router", () => {
  router.use("/first", firstPage).use("/second", secondPage).start();

  it("Проверка перехода", function () {
    router.go("/first");
    router.go("/second");
    assert.equal(router.history.length, 3);
  });
});
