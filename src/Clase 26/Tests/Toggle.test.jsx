import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Toggle from "../Components/Toggle";


test("ejecuta el callback al hacer clic en el botón", async () => {
    const falsoOnClick = vi.fn();
 
    render(<Toggle onBtnClick={falsoOnClick} />);
    
    fireEvent.click(screen.getByText("Click aquí"))
    
    await waitFor(() => expect(falsoOnClick).toHaveBeenCalledTimes(1))
});