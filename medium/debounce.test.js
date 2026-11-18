import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { debounce } from "./debounce.js";

describe("debounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("calls the function once with the latest arguments after quiet time", () => {
    const spy = vi.fn();
    const debounced = debounce(spy, 100);
    debounced("a");
    vi.advanceTimersByTime(50);
    debounced("b");
    vi.advanceTimersByTime(99);
    expect(spy).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("b");
  });

  it("fires again for a call made after the wait has fully elapsed", () => {
    const spy = vi.fn();
    const debounced = debounce(spy, 100);
    debounced(1);
    vi.advanceTimersByTime(100);
    debounced(2);
    vi.advanceTimersByTime(100);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith(2);
  });

  it("does not fire before the wait time", () => {
    const spy = vi.fn();
    const debounced = debounce(spy, 200);
    debounced();
    vi.advanceTimersByTime(199);
    expect(spy).not.toHaveBeenCalled();
  });

  it("cancel drops a pending call", () => {
    const spy = vi.fn();
    const debounced = debounce(spy, 100);
    debounced();
    debounced.cancel();
    vi.advanceTimersByTime(500);
    expect(spy).not.toHaveBeenCalled();
  });

  it("a call after cancel schedules a fresh call", () => {
    const spy = vi.fn();
    const debounced = debounce(spy, 100);
    debounced("old");
    debounced.cancel();
    debounced("new");
    vi.advanceTimersByTime(100);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("new");
  });

  it("passes the this value of the last call to fn", () => {
    const seen = [];
    const obj = {
      name: "obj",
      run: debounce(function () {
        seen.push(this.name);
      }, 100),
    };
    obj.run();
    vi.advanceTimersByTime(100);
    expect(seen).toEqual(["obj"]);
  });

  it("calling cancel with nothing pending is harmless", () => {
    const debounced = debounce(() => {}, 100);
    expect(() => debounced.cancel()).not.toThrow();
  });
});
