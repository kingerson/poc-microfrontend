import { render, screen, fireEvent, userEvent } from "@/test/test-utils";
import { Accordion } from "..";

describe("<Accordion />", () => {
  const title = "Accordion Title";
  const content = "Accordion Content";
  const onOpen = jest.fn();
  const onClose = jest.fn();
  const onToggle = jest.fn();
  const IconIsOpen = <svg />;
  const IconIsClose = <svg />;
  const keyFocusAccordion = "accordion1";
  const showTextSeeMore = true;
  const isOpen = true;
  const automaticRecalculateHeight = true;
  const classNames = {
    accordionBoxClass: "accordion-box",
    titleBoxClass: "title-box",
    contentBoxClass: "content-box",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    // Execute
    render(
      <Accordion
        title={title}
        content={content}
        onOpen={onOpen}
        onClose={onClose}
        onToggle={onToggle}
        IconIsOpen={IconIsOpen}
        IconIsClose={IconIsClose}
        keyFocusAccordion={keyFocusAccordion}
        showTextSeeMore={showTextSeeMore}
        isOpen={isOpen}
        automaticRecalculateHeight={automaticRecalculateHeight}
        classNames={classNames}
      />
    );

    // Validate
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it("should toggle accordion when button is clicked", async () => {
    // Execute
    render(
      <Accordion
        title={title}
        content={content}
        onOpen={onOpen}
        onClose={onClose}
        onToggle={onToggle}
        IconIsOpen={IconIsOpen}
        IconIsClose={IconIsClose}
        keyFocusAccordion={keyFocusAccordion}
        showTextSeeMore={showTextSeeMore}
        isOpen={isOpen}
        automaticRecalculateHeight={automaticRecalculateHeight}
        classNames={classNames}
      />
    );

    const button = screen.getByRole("button");
    await userEvent.click(button);

    // Validate
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("should call onOpen when accordion is opened", async () => {
    // Execute
    render(
      <Accordion
        title={title}
        content={content}
        onOpen={onOpen}
        onClose={onClose}
        onToggle={onToggle}
        IconIsOpen={IconIsOpen}
        IconIsClose={IconIsClose}
        keyFocusAccordion={keyFocusAccordion}
        showTextSeeMore={showTextSeeMore}
        isOpen={isOpen}
        automaticRecalculateHeight={automaticRecalculateHeight}
        classNames={classNames}
      />
    );

    const button = screen.getByRole("button");
    await userEvent.click(button);

    // Validate
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it("should call onClose when accordion is closed", async () => {
    // Execute
    render(
      <Accordion
        title={title}
        content={content}
        onOpen={onOpen}
        onClose={onClose}
        onToggle={onToggle}
        IconIsOpen={IconIsOpen}
        IconIsClose={IconIsClose}
        keyFocusAccordion={keyFocusAccordion}
        showTextSeeMore={showTextSeeMore}
        isOpen={isOpen}
        automaticRecalculateHeight={automaticRecalculateHeight}
        classNames={classNames}
      />
    );

    const button = screen.getByRole("button");
    await userEvent.click(button);

    // Validate
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
