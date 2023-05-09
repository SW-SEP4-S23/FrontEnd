/**
 * @jest-environment jsdom
 */

import Hjem from "../routes/Hjem.js";
import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";


it("renders without crashing", () => {
    render(<Hjem />);
  });



