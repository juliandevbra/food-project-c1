import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { expect, test } from "vitest"
import TipoPerfil from "../Components/TipoPerfil"

test("oculta el botón cuando se han guardado los cambios", async () => {
    render(<TipoPerfil />)
    
    const boton = screen.getByText("Guardar")
    
    fireEvent.click(boton)
    
    await waitForElementToBeRemoved (() =>  screen.queryByText("Guardar"))
    
    expect(boton).not.toBe()
});
