import { fireEvent, render, screen } from '@testing-library/react'
import {describe, expect, test, vi} from 'vitest'
import LoginForm from '../Components/LoginForm'


describe("LoginForm component testing", () => {
    test("Should appear title", () => {
        render(<LoginForm/>)
        const title = screen.getByText(/tiene que ingresar/i)
        expect(title).toBeDefined()
    })
    test("Should render first input", () => {
        render(<LoginForm/>)
        const email = screen.getByRole('input')
        expect(email).toBeDefined()
    })
    test("Should render second input and should change", () => {
        render(<LoginForm/>)
        const pass = screen.getByTestId('password')
        fireEvent.change(pass, {target: {value: "contraseña123"}})
        expect(pass.value).toBe("contraseña123")
    })
    test("Should render button and should be clickable", () => {
        const handleClick = vi.fn()
        render(<LoginForm handleClick={handleClick}/>)
        const button = screen.getByText('Enviar')
        fireEvent.click(button)
        expect(handleClick).toBeCalledTimes(1)
    })
})