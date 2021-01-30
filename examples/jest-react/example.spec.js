import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
const { morph } = require("../../index.js");

describe("Example Test Suite", () => {
  test("Example Unit Test 1", async () => {
    const { modules, clean } = await morph("examples/jest-react/ReactCoffeescript.js.coffee");
    const Component = modules.default;

    const { queryByTestId, queryByText } = render(<Component />);

    const text = queryByText("Rows");
    const div = queryByTestId("example-div");

    expect(text).toBeTruthy();
    expect(div).toHaveClass("col-md-12");

    clean();
  });
});
