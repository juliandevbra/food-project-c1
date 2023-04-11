import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import MenuBienvenida from "../Components/MenuBienvenida";

test("obtiene la información del usuario", async () => {
    render(<MenuBienvenida />);
    
    const mensaje = await screen.findByText("Bienvenido: Juan");
    const boton = await screen.findByText("Cerrar sesión");
    expect(mensaje).toBeDefined();
    expect(boton).toBeDefined();
});