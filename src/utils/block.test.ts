import { assert } from "chai";
import { Block } from "./block";

describe("Block", () => {
  let CDR = false;
  let CDRagain = false;

  type Props = {
    id: string;
  };

  class Mock extends Block<Mock> {
    constructor(props: Props) {
      super("div", props);
    }

    render() {
      CDR = true;
      if (this.props.id === "new") {
        CDRagain = true;
      }
      return `<div id=${this.props.id}>Here I am</div>`;
    }
  }

  const mock = new Mock({
    id: "old",
  });

  it("Создаем экземпляр класса", () => {
    assert.equal(mock.props.id, "old");
  });

  it("Компонент отрендерился", () => {
    assert.equal(CDR, true);
  });

  it("Задаем новые пропсы", () => {
    mock.setProps({
      id: "new",
    });
    assert.equal(mock.props.id, "new");
  });

  it("Компонент отрендерился с новыми пропсами", () => {
    assert.equal(CDRagain, true);
  });

  it('Сам компонент с новыми пропсами <div id="new">Here I am</div>', () => {
    let res = mock.getContent().innerHTML;
    assert.equal(res, '<div id="new">Here I am</div>');
  });
});
