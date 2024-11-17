import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App.jsx";
import {kebabToTitleCase} from "./helpers.js";

// test("button click flow", () => {
//   render(<App />)
//   const buttonElement = screen.getByRole('button', {name: /blue/i})
//   expect(buttonElement).toHaveClass('red')
//   fireEvent.click(buttonElement)
//   expect(buttonElement).toHaveStyle({ backgroundColor: '#0000FF' })
//   expect(buttonElement).toHaveTextContent(/red/i)
// })

// test("check box flow", () => {
//   render(<App />)
//   const buttonElement = screen.getByRole('button', {name: /blue/i})
//   const checkboxElement = screen.getByRole('checkbox', {name: /disable button/i})
//   expect(buttonElement).toBeDisabled()
//   expect(buttonElement).toHaveClass('gray')
//   expect(checkboxElement).not.toBeChecked()
//
//
//   fireEvent.click(checkboxElement)
//   expect(buttonElement).toBeEnabled()
//   expect(checkboxElement).toBeChecked()
//   expect(checkboxElement).toHaveAccessibleName(/able button/i)
//
//   fireEvent.click(buttonElement)
//   expect(buttonElement).toHaveStyle({ backgroundColor: '#0000FF' })
//   expect(buttonElement).toHaveTextContent(/red/i)
//
//   fireEvent.click(buttonElement)
//   expect(buttonElement).toHaveStyle({ backgroundColor: '#FF0000' })
//   expect(buttonElement).toHaveTextContent(/blue/i)
//
//   fireEvent.click(checkboxElement)
//   expect(buttonElement).toBeDisabled()
//   expect(checkboxElement).not.toBeChecked()
//
// })


describe('kebabToTitleCase', () => {
  test('workers for no hyphens', () => {
    expect(kebabToTitleCase('hello')).toBe('Hello')
  })
  test('workers for one hyphens', () => {
    expect(kebabToTitleCase('hello-world')).toBe('Hello World')
  })
  test('workers for multiple hyphens', () => {
    expect(kebabToTitleCase('hello-world-again')).toBe('Hello World Again')
  })
})



