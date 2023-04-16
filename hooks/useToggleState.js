import { useState } from "react";

// useToggleState.js
export const useToggleState = (initialState) => {
    const [state, setState] = useState(initialState);
    const toggleState = (value) => {
        if (value === undefined) {
            setState(!state);
        } else {
            setState(value);
        }
    };
    return [state, toggleState];
};
