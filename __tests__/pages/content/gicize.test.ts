import { gicize, unGicize } from "@pages/content/gicize";

describe("gicize", () => {
  const logSpy = jest.spyOn(console, "log");

  const setup = () => {
    document.body.innerHTML = "";
    const title: HTMLHeadingElement = document.createElement("h1");
    title.innerHTML = "An existing title";
    document.body.appendChild(title);

    const input = document.createElement("textarea");
    document.body.appendChild(input);

    const button = document.createElement("button");
    document.body.appendChild(button);
  };

  const enterText = (text: string) => {
    const textarea = document.querySelector("textarea") as HTMLTextAreaElement;
    textarea.value = text;
  };

  beforeEach(() => {
    logSpy.mockClear();
  });

  describe("when applying gic style", () => {
    beforeEach(() => {
      setup();
    });

    it("should add a new classname to document body", () => {
      gicize();
      expect(document.body.classList.values()).toContain("chatgic");
    });

    it("should change the h1 text to ChatGIC", () => {
      gicize();
      expect(document.querySelector("h1")?.innerHTML).toEqual("ChatGIC");
    });

    it("should log input submitted by enter key", () => {
      gicize();
      enterText("ABC");
      const event = new KeyboardEvent("keydown", { key: "Enter" });
      document.querySelector("textarea")?.dispatchEvent(event);
      expect(logSpy).toHaveBeenCalledWith("Logging input...", "ABC");
    });

    it("should log input submitted by clicking the button", () => {
      gicize();
      enterText("DEF");
      document.querySelector("button")?.click();
      expect(logSpy).toHaveBeenCalledWith("Logging input...", "DEF");
    });
  });

  describe("when removing gic style", () => {
    beforeEach(() => {
      setup();
      document.body.classList.add("chatgic");
    });

    it("should remove chatgic from classList of document body", () => {
      unGicize();
      expect(document.body.classList.values()).not.toContain("chatgic");
    });

    it("should change back the h1 text", () => {
      unGicize();
      expect(document.querySelector("h1")?.innerHTML).toEqual("ChatGPT");
    });

    it("should not log input submitted by enter key", () => {
      unGicize();
      enterText("ABC");
      const event = new KeyboardEvent("keydown", { key: "Enter" });
      document.querySelector("textarea")?.dispatchEvent(event);
      expect(logSpy).not.toHaveBeenCalledWith("Logging input...", "ABC");
    });

    it("should log input submitted by clicking the button", () => {
      unGicize();
      enterText("DEF");
      document.querySelector("button")?.click();
      expect(logSpy).not.toHaveBeenCalledWith("Logging input...", "DEF");
    });
  });
});
