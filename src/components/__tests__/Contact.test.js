// render imported from react testing library to render the component and test it
import { render, screen } from "@testing-library/react";
import Contactus from "../Contactus";
import "@testing-library/jest-dom";

/**
 * grouping the test cases for the Contact Component
 * describe() function is used to group the test cases
 * it takes two arguments
 * 1. name of the test suite (string)
 * 2. callback function (function)
 */
describe("ContactUs Page Test Cases", () => {
  // Test case for the Contact Component
  test("should load the Contact Component and display the Content properly", () => {
    /**
     * render() function is used to render the component and test it
     * it takes one argument
     * 1. component (React Component)
     */
    render(<Contactus />);
    /**
     * getByRole() function is used to get the element by its role
     * getByRole() function takes one argument
     * 1. role of the element (string)
     * 2. options (object) - optional
     */
    const heading = screen.getByRole("heading");
    /**
     * toBeInTheDocument() function is used to check if the element is present in the document or not
     * it takes one argument
     * 1. element (HTMLElement)
     */
    expect(heading).toBeInTheDocument(heading);
  });

  // Button test case for the Contact Component
  test("should load the Contact Component and display the Button properly", () => {
    render(<Contactus />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument(button);
  });

  // Textarea test case for the Contact Component
  test("should load the Contact Component and display the Textarea properly", () => {
    render(<Contactus />);
    const textarea = screen.getAllByRole("textbox");
    /**
     * toBe() function is used to check if the element is present in the document or not
     * it takes one argument
     * 1. element (HTMLElement)
     */
    expect(textarea.length).toBe(3); // There are 3 textboxes: one for name and one for email and one for message
  });
});
