import React,{ createContext, useState } from "react";

// Step 1: Create Context
const PremiumContext = createContext();

// Step 2: Create Provider Component
export const PremiumProvider = ({ children }) => {
    const [visible, setVisible] = useState(true); // State for premium container visibility

    const togglePremium = () => {
        setVisible((prev) => !prev); // Toggle visibility
    };

    return (
        <PremiumContext.Provider value={{ visible, togglePremium }}>
            {children} {/* Provide context to all children components */}
        </PremiumContext.Provider>
    );
};

export default PremiumContext;
