import { it, describe, expect } from "vitest";

import { checkIfRecommendationIsBad } from "./getInsightsByProduct";

describe("checkIfRecommendationIsBad", () => {
  it("should return false if recommendation is closer to demand_qty", () => {
    const recommendation = 15;
    const delivery_qty = 3;
    const demand_qty = 12;

    const result = checkIfRecommendationIsBad(
      recommendation,
      demand_qty,
      delivery_qty
    );

    expect(result).toBe(false);
  });

  it("should return true if delivery_qty is closer to demand_qty", () => {
    const recommendation = 2;
    const delivery_qty = 7;
    const demand_qty = 10;

    const result = checkIfRecommendationIsBad(
      recommendation,
      demand_qty,
      delivery_qty
    );

    expect(result).toBe(true);
  });

  it("should return false if recommendation and delivery_qty are equally close", () => {
    const recommendation = 5;
    const delivery_qty = 5;
    const demand_qty = 10;

    const result = checkIfRecommendationIsBad(
      recommendation,
      demand_qty,
      delivery_qty
    );

    expect(result).toBe(false);
  });
});
