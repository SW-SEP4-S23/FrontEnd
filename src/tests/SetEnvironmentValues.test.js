/**
 * @jest-environment jsdom
 */

import SetEnvironmentValue from "../components/SetEnvironmentValue.js";
import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";


it("renders without crashing", () => {
    render(<SetEnvironmentValue />);
  });

