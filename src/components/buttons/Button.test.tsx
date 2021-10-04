import * as React from "react";
import { render } from "@testing-library/react";
import { CakeIcon } from "@heroicons/react/solid";
import Button, {
  ButtonShape,
  ButtonShapeDefs,
  ButtonVariant,
  ButtonVariantDefs,
} from "./Button";
import ButtonIcon, { IconPositionDefs } from "./ButtonIcon";
import ButtonSize, { ButtonSizeDefs } from "./ButtonSize";

const testId = "madie-button";
const buttonText = "Hello World";

function assertIcon(icon) {
  expect(icon.nodeName).toBe("svg");
  expect(icon).toHaveAttribute("aria-hidden");
  expect(icon.getAttribute("aria-hidden")).toBe("true");
}

describe("Button component", () => {
  it("should render a button with no icons and no text", () => {
    const { getByTestId } = render(<Button data-testid={testId} />);
    const result = getByTestId(testId);
    expect(result).toBeInTheDocument();
    expect(result).toBeEmptyDOMElement();
    expect(result).toMatchSnapshot();
    expect(result.nodeName).toBe("BUTTON");
  });

  it("should render a button with text but no icon", () => {
    const { getByTestId } = render(
      <Button data-testid={testId} buttonTitle={buttonText} />
    );
    const result = getByTestId(testId);
    expect(result).toMatchSnapshot();
    expect(result).toHaveTextContent(buttonText);
  });

  function testButtonWithNoTextSizes(size: ButtonSize) {
    it(`should render a ${size} button with an icon and no text`, () => {
      const { getByTestId } = render(
        <Button data-testid={testId} icon={CakeIcon} buttonSize={size} />
      );
      const result = getByTestId(testId);
      expect(result).toMatchSnapshot();
      expect(result.childNodes.length).toEqual(1);
      assertIcon(result.childNodes[0]);
    });
  }

  testButtonWithNoTextSizes(ButtonSizeDefs.xs);
  testButtonWithNoTextSizes(ButtonSizeDefs.sm);
  testButtonWithNoTextSizes(ButtonSizeDefs.md);
  testButtonWithNoTextSizes(ButtonSizeDefs.lg);
  testButtonWithNoTextSizes(ButtonSizeDefs.xl);

  it("should render a button with text and a leading icon", () => {
    const { getByTestId } = render(
      <Button data-testid={testId} buttonTitle={buttonText} icon={CakeIcon} />
    );
    const result = getByTestId(testId);
    expect(result).toMatchSnapshot();
    expect(result.childNodes.length).toEqual(2);
    assertIcon(result.childNodes[0]);
    expect(result.childNodes[1].textContent).toBe(buttonText);
  });

  it("should render a button with text and a trailing icon", () => {
    const { getByTestId } = render(
      <Button
        data-testid={testId}
        buttonTitle={buttonText}
        icon={CakeIcon}
        trailingIcon={true}
      />
    );
    const result = getByTestId(testId);
    expect(result).toMatchSnapshot();
    expect(result.childNodes.length).toEqual(2);
    // Note: the position of the nodes is the same in the markup. It's the CSS that makes it trailing
    assertIcon(result.childNodes[0]);
    expect(result.childNodes[1].textContent).toBe(buttonText);
  });

  it("should render a disabled button", () => {
    const { getByTestId } = render(
      <Button data-testid={testId} buttonTitle={buttonText} disabled={true} />
    );
    const result = getByTestId(testId);
    expect(result).toMatchSnapshot();
    expect(result).toHaveTextContent(buttonText);
    expect(result).toBeDisabled();
  });

  function testLeadingSize(size: ButtonSize) {
    it(`should allow leading button size ${size}`, () => {
      const { getByTestId } = render(
        <Button
          data-testid={testId}
          buttonTitle={buttonText}
          buttonSize={size}
          icon={CakeIcon}
        />
      );
      const result = getByTestId(testId);
      expect(result).toMatchSnapshot();
      expect(result).toHaveTextContent(buttonText);
    });
  }
  testLeadingSize(ButtonSizeDefs.xs);
  testLeadingSize(ButtonSizeDefs.sm);
  testLeadingSize(ButtonSizeDefs.md);
  testLeadingSize(ButtonSizeDefs.lg);
  testLeadingSize(ButtonSizeDefs.xl);

  function testTrailingSize(size: ButtonSize) {
    it(`should allow trailing button size ${size}`, () => {
      const { getByTestId } = render(
        <Button
          data-testid={testId}
          buttonTitle={buttonText}
          buttonSize={size}
          icon={CakeIcon}
          trailingIcon={true}
        />
      );
      const result = getByTestId(testId);
      expect(result).toMatchSnapshot();
      expect(result).toHaveTextContent(buttonText);
    });
  }
  testTrailingSize(ButtonSizeDefs.xs);
  testTrailingSize(ButtonSizeDefs.sm);
  testTrailingSize(ButtonSizeDefs.md);
  testTrailingSize(ButtonSizeDefs.lg);
  testTrailingSize(ButtonSizeDefs.xl);

  function testCircularSize(size: ButtonSize) {
    it(`should allow trailing button size ${size}`, () => {
      const { getByTestId } = render(
        <Button
          data-testid={testId}
          shape={ButtonShapeDefs.circular}
          buttonSize={size}
          icon={CakeIcon}
        />
      );
      const result = getByTestId(testId);
      expect(result).toMatchSnapshot();
    });
  }
  testCircularSize(ButtonSizeDefs.xs);
  testCircularSize(ButtonSizeDefs.sm);
  testCircularSize(ButtonSizeDefs.md);
  testCircularSize(ButtonSizeDefs.lg);
  testCircularSize(ButtonSizeDefs.xl);

  function testVariant(variant: ButtonVariant) {
    it(`should allow button variant ${variant}`, () => {
      const { getByTestId } = render(
        <Button
          data-testid={testId}
          buttonTitle={buttonText}
          variant={variant}
        />
      );
      const result = getByTestId(testId);
      expect(result).toMatchSnapshot();
      expect(result).toHaveTextContent(buttonText);
    });
  }
  testVariant(ButtonVariantDefs.primary);
  testVariant(ButtonVariantDefs.secondary);
  testVariant(ButtonVariantDefs.white);

  it("should detect and fail on invalid button variants", () => {
    // @ts-ignore
    const invalidVariant: ButtonVariant = "__INVALID__";

    expect(() => {
      render(<Button data-testid={testId} variant={invalidVariant} />);
    }).toThrowError("Unexpected button variant: __INVALID__");
  });

  function testShape(shape: ButtonShape) {
    it(`should allow button shape ${shape}`, () => {
      const { getByTestId } = render(
        <Button data-testid={testId} buttonTitle={buttonText} shape={shape} />
      );
      const result = getByTestId(testId);
      expect(result).toMatchSnapshot();
      expect(result).toHaveTextContent(buttonText);
    });
  }
  testShape(ButtonShapeDefs.normal);
  testShape(ButtonShapeDefs.round);

  it("should ignore text on a circular button", () => {
    const { getByTestId } = render(
      <Button
        data-testid={testId}
        buttonTitle={buttonText}
        shape={ButtonShapeDefs.circular}
      />
    );
    const result = getByTestId(testId);
    expect(result).toMatchSnapshot();
    expect(result).toBeEmptyDOMElement();
  });

  it("should render loading text and loading icon when loading", () => {
    const { getByTestId } = render(
      <Button
        data-testid={testId}
        buttonTitle={buttonText}
        icon={CakeIcon}
        loading={true}
        loadingText="Please be patient"
      />
    );
    const result = getByTestId(testId);
    expect(result).toMatchSnapshot();
    expect(result.childNodes.length).toEqual(2);
    assertIcon(result.childNodes[0]);
    expect(result.children[0].classList[0]).toMatch(/SpinnerIcon/g);
    expect(result.childNodes[1].textContent).toBe("Please be patient");
  });

  it("should detect and fail on invalid icon sizes", () => {
    // @ts-ignore
    const invalidSize: ButtonSize = "__INVALID__";

    expect(() => {
      render(
        <ButtonIcon
          icon={CakeIcon}
          iconPosition={IconPositionDefs.left}
          buttonSize={invalidSize}
        />
      );
    }).toThrowError("Invalid icon size specified __INVALID__");

    expect(() => {
      render(
        <ButtonIcon
          icon={CakeIcon}
          iconPosition={IconPositionDefs.right}
          buttonSize={invalidSize}
        />
      );
    }).toThrowError("Invalid icon size specified __INVALID__");

    expect(() => {
      render(
        <ButtonIcon
          icon={CakeIcon}
          iconPosition={IconPositionDefs.centered}
          buttonSize={invalidSize}
        />
      );
    }).toThrowError("Invalid icon size specified __INVALID__");

    expect(() => {
      render(
        <ButtonIcon
          icon={CakeIcon}
          iconPosition={IconPositionDefs.centered}
          buttonSize={invalidSize}
          isCircular={true}
        />
      );
    }).toThrowError("Invalid icon size specified __INVALID__");
  });
});
