
/**
     * ✅ STEP 1 — Identify what the component does
Before writing any test, ask:
What does HelloWorld do?
Renders a form with:
input: name
input: age
button: add to list
On submit:
collects form values
adds them to tempData
Renders table rows for each submitted user.
This means we need to test:
✔ form rendering
✔ typing inputs
✔ submitting form
✔ updated table list
     */

  render(<HelloWorld />);

  const inputBoxName = screen.getByRole("textbox", { name: "name" });
  const inputBoxAge = screen.getByRole("spinbutton", { name: "age" });
  const submitButton = screen.getByRole("button", { name: /add to list/i });

  expect(inputBoxName).toBeInTheDocument();
  expect(inputBoxAge).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("test when click on submit call submitForm", () => {
  // what to test is best way to do test
  // try to render component

  const mochFn = jest.fn();
  declare interface tempDataType {}
