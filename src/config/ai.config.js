export const AI = {
  level: ["normal", "medium", "high"],
  getLevel(index) {
    switch (index) {
      case "normal":
        return this.setNormalLevel();
    }
  },
  setNormalLevel() {
    return {
      formations: [
        { a: [1, 0, 1, 1, 1, 1, 0, 1] },
        { b: [0, 1, 1, 0, 0, 0, 0, 0] },
        { c: [1, 0, 1, 0, 1, 1, 0, 1] },
        { d: [0, 0, 0, 1, 0, 0, 0, 0] },
        { e: [0, 0, 0, 0, 0, 0, 0, 0] },
        { f: [0, 0, 0, 0, 0, 0, 0, 0] },
        { g: [0, 0, 0, 0, 0, 0, 0, 0] },
        { h: [0, 0, 0, 0, 0, 0, 0, 0] },
      ],
    };
  },
};
