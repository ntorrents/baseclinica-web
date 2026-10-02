"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type CalculatorContextType = {
  patients: number;
  setPatients: (value: number) => void;
  hoursPerWeek: number;
  hoursPerMonth: number;
  hoursPerYear: number;
  moneyPerMonth: number;
  moneyPerYear: number;
  missedPatients: number;
};

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [patients, setPatients] = useState(35);

  // Cálculos automáticos basados en pacientes
  const hoursPerDay = Math.round((patients / 25) * 2.67 * 10) / 10;
  const hoursPerWeek = Math.round(hoursPerDay * 5 * 10) / 10;
  const hoursPerMonth = Math.round(hoursPerWeek * 4.33 * 10) / 10;
  const hoursPerYear = Math.round(hoursPerMonth * 12);
  const moneyPerMonth = Math.round(hoursPerMonth * 45);
  const moneyPerYear = Math.round(hoursPerYear * 45);
  const missedPatients = Math.round((hoursPerWeek / 1.5) * 10) / 10;

  return (
    <CalculatorContext.Provider
      value={{
        patients,
        setPatients,
        hoursPerWeek,
        hoursPerMonth,
        hoursPerYear,
        moneyPerMonth,
        moneyPerYear,
        missedPatients,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error("useCalculator must be used within CalculatorProvider");
  }
  return context;
}
