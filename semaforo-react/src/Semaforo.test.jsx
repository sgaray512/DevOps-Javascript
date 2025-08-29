import { render, screen, fireEvent } from "@testing-library/react";
import Semaforo from "./Semaforo";

describe("Semaforo Component", () => {
  test("renderiza el título y el círculo inicial en rojo", () => {
    render(<Semaforo />);
    const title = screen.getByText(/Semáforo 🚦/i);
    expect(title).toBeInTheDocument();

    const circle = screen.getByRole("presentation");
    expect(circle).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });
  });

  test("cambia a verde cuando se presiona el botón Green", () => {
    render(<Semaforo />);
    const greenButton = screen.getByRole("button", { name: /green/i });
    fireEvent.click(greenButton);

    const circle = screen.getByRole("presentation");
    expect(circle).toHaveStyle({ backgroundColor: "rgb(0, 128, 0)" });
  });

  test("cambia a amarillo cuando se presiona el botón Yellow", () => {
    render(<Semaforo />);
    const yellowButton = screen.getByRole("button", { name: /yellow/i });
    fireEvent.click(yellowButton);

    const circle = screen.getByRole("presentation");
    expect(circle).toHaveStyle({ backgroundColor: "rgb(255, 255, 0)" });
  });

  test("botón automático alterna el estado", () => {
    render(<Semaforo />);
    const autoButton = screen.getByRole("button", { name: /Iniciar automático/i });

    // primera vez → activa automático
    fireEvent.click(autoButton);
    expect(screen.getByRole("button", { name: /Detener automático/i })).toBeInTheDocument();

    // segunda vez → desactiva automático
    fireEvent.click(screen.getByRole("button", { name: /Detener automático/i }));
    expect(screen.getByRole("button", { name: /Iniciar automático/i })).toBeInTheDocument();
  });
});