import { render } from "./utilities";
import { axe, toHaveNoViolations } from "jest-axe";
import { expect, it } from "vitest";
import Dashboard from "../Components/Dashboard";

expect.extend(toHaveNoViolations);

it("should demonstrate this matcher`s usage", async () => {
  const { container } = render(<Dashboard />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
