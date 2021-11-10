import useUniqueId, { resetUniqueId } from "./useUniqueId";

describe("useUniqueId", () => {
  beforeEach(resetUniqueId);

  it("should start the counter at 1, then 2, etc", () => {
    let result = useUniqueId();
    expect(result).toBe("1");
    result = useUniqueId();
    expect(result).toBe("2");
    result = useUniqueId();
    expect(result).toBe("3");
  });

  it("should store the counter on the window object", () => {
    let result = useUniqueId();
    expect(result).toBe("1");
    expect(window.idCounter).toBe(1);

    window.idCounter = 4;
    result = useUniqueId();
    expect(result).toBe("5");
    expect(window.idCounter).toBe(5);
  });

  it("should allow a prefix to be specified", () => {
    let result = useUniqueId("some-prefix-");
    expect(result).toBe("some-prefix-1");
    result = useUniqueId("some-prefix-");
    expect(result).toBe("some-prefix-2");
    result = useUniqueId("some-prefix-");
    expect(result).toBe("some-prefix-3");
  });

  it("should be reset to 0 when calling resetUniqueId", () => {
    useUniqueId();
    useUniqueId();
    let result = useUniqueId();
    expect(result).toBe("3");

    resetUniqueId();
    expect(window.idCounter).toBe(0);
    result = useUniqueId();
    expect(result).toBe("1");
  });

  it("should initialize the counter if not already present", () => {
    delete window.idCounter;
    expect(window.idCounter).toBeUndefined();
    const result = useUniqueId();
    expect(result).toBe("1");
    expect(window.idCounter).toBe(1);
  });
});
