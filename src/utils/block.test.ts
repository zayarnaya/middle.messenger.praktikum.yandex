import { assert } from "chai";
import { Block } from "./block";

// const { JSDOM } = require("jsdom");

// const dom = new JSDOM('<div class="messenger-wrapper"><div>', { url: 'http://localhost' });
// global.window = dom.window;
// global.document = dom.window.document;

require("jsdom-global")('<div class="messenger-wrapper"><div>', { url: 'http://localhost' });

describe("Block", () => {
  type Props = {
    id: string;
  };

  class Mock extends Block<Mock> {
    constructor(props: Props) {
      super("div", props);
    }

    render() {
      return `<div id=${this.props.id}>Here I am</div>`;
    }
  }

  const mock = new Mock({
    id: "old",
  });

  it("Создаем экземпляр класса", () => {
    assert.equal(mock.props.id, "old");
  });

  it("Задаем новые пропсы", () => {
    mock.setProps({
      id: "new",
    });
    assert.equal(mock.props.id, "new");
  });

  it('Сам компонент с новыми пропсами <div id="new">Here I am</div>', () => {
    let res = mock.getContent().innerHTML;
    assert.equal(res, '<div id="new">Here I am</div>');
  });
});
