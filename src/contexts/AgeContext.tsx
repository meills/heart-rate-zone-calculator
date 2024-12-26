import { createContext, ReactNode, useState } from "react";


interface AgeContextType {
    age: number;
    setAge: (age: number) => void; // Setter function
}

const AgeContext = createContext<AgeContextType>({
    age : NaN,
    setAge : () => {}
})

// Provider to manage the state
interface AgeProviderProps {
    children: ReactNode;
  }
  
export const AgeProvider: React.FC<AgeProviderProps> = ({ children }) => {
    const [age, setAge] = useState<number>(NaN);

    return (
        <AgeContext.Provider value={{ age, setAge }}>
            {children}
        </AgeContext.Provider>
    );
};

export default AgeContext