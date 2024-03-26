import { render, screen } from "@/test/test-utils";
import LabelForm from "../LabelForm";

describe("<LabelForm />", () => {
  it("should render correctly", () => {
    // Prepare
    const props = {
      label: "Label",
      htmlFor: "test",
      children: <div>Children</div>,
    };

    // Execute
    render(<LabelForm {...props} />);

    // Validate
    expect(screen.getByTestId("label-form-test")).toBeInTheDocument();
    expect(screen.getByTestId("label-form-test-label")).toHaveTextContent(
      "Label"
    );
    expect(screen.getByTestId("label-form-test-input")).toHaveTextContent(
      "Children"
    );
  });
});
