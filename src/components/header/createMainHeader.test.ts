import createMainHeader from "./createMainHeader";

describe("Given component header", () => {
  describe("When rendered", () => {
    test("Then it should show 'Games of Thrones' inside a heading", () => {
      const screen = document.createElement("div");
      const expectedTitle = /Game of Thrones/i;

      const mainHeader = createMainHeader();
      screen.appendChild(mainHeader);
      const title = screen.querySelector("h1");

      const content = title?.textContent;

      expect(title).not.toBeNull();
      expect(content).toMatch(expectedTitle);
    });
  });
});
