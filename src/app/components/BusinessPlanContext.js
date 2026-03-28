"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "genesislab-business-plan";

const defaultData = {
  executiveSummary: {
    projectName: "",
    tagline: "",
    mission: "",
    vision: "",
    objectives: "",
    fundingNeeded: "",
  },
  company: {
    legalName: "",
    legalForm: "",
    creationDate: "",
    address: "",
    sector: "",
    stage: "",
    description: "",
  },
  market: {
    targetMarket: "",
    marketSize: "",
    trends: "",
    targetCustomers: "",
    customerNeeds: "",
    competitors: "",
    competitiveAdvantage: "",
  },
  products: {
    description: "",
    valueProposition: "",
    pricing: "",
    lifecycle: "",
    intellectualProperty: "",
  },
  marketing: {
    positioning: "",
    channels: "",
    acquisitionStrategy: "",
    communicationBudget: "",
    partnerships: "",
    salesGoals: "",
  },
  financial: {
    startupCosts: "",
    monthlyExpenses: "",
    revenueModel: "",
    revenueProjectionY1: "",
    revenueProjectionY2: "",
    revenueProjectionY3: "",
    breakEvenPoint: "",
    fundingSources: "",
  },
  team: {
    founders: "",
    keyMembers: "",
    organigram: "",
    hiringPlan: "",
    advisors: "",
  },
};

const BusinessPlanContext = createContext();

export function BusinessPlanProvider({ children }) {
  const [data, setData] = useState(defaultData);
  const [currentStep, setCurrentStep] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData((prev) => ({ ...prev, ...parsed }));
      }
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data, loaded]);

  const updateSection = useCallback((section, fields) => {
    setData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...fields },
    }));
  }, []);

  const resetPlan = useCallback(() => {
    setData(defaultData);
    setCurrentStep(0);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const getCompletionPercentage = useCallback(() => {
    let filled = 0;
    let total = 0;
    Object.values(data).forEach((section) => {
      Object.values(section).forEach((val) => {
        total++;
        if (val && val.trim() !== "") filled++;
      });
    });
    return total > 0 ? Math.round((filled / total) * 100) : 0;
  }, [data]);

  return (
    <BusinessPlanContext.Provider
      value={{
        data,
        currentStep,
        setCurrentStep,
        updateSection,
        resetPlan,
        getCompletionPercentage,
        loaded,
      }}
    >
      {children}
    </BusinessPlanContext.Provider>
  );
}

export function useBusinessPlan() {
  const context = useContext(BusinessPlanContext);
  if (!context) {
    throw new Error("useBusinessPlan must be used within BusinessPlanProvider");
  }
  return context;
}
