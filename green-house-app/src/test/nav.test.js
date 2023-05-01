import { render, screen, fireEvent } from "@testing-library/react";
import Hjem from "../routes/Hjem.js";
import App from "../routes/Root.js";
import "@testing-library/jest-dom";
import Information from "../routes/Information.js";

it("Hjem render forsidetekst", () => {
    render(<Hjem />)
    const element = screen.getByText("Forside!")
    console.log(element)
    expect(element).toBeInTheDocument()
})

it("Temperaturbutton skifter til temperatur", () => {
    const container = render(<Information />).container
    const button = container.querySelector("#temperatureButton");
    expect(screen.getByText("TemperatureData")).not.toBeVisible()
    fireEvent.click(button)
    expect(screen.getByText("TemperatureData")).toBeVisible()
})

it("Humiditybutton skifter til humidity", () => {
    const container = render(<Information />).container
    const button = container.querySelector("#humidityButton");
    expect(screen.getByText("HumidityData")).not.toBeVisible()
    fireEvent.click(button)
    expect(screen.getByText("HumidityData")).toBeVisible()
})

it("co2button skifter til co2", () => {
    const container = render(<Information />).container
    const button = container.querySelector("#co2Button");
    expect(screen.getByText("CO2Data")).not.toBeVisible()
    fireEvent.click(button)
    expect(screen.getByText("CO2Data")).toBeVisible()
})

