import React from "react";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpenses from "./components/incomeExpenses";
import TransctionList from "./components/transctionList";
import AddTransction from "./components/addTransction";
import { GlobalProvider } from "./context/globalState";

export default function ExpenseTracker() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransctionList></TransctionList>
        <AddTransction></AddTransction>
      </div>
    </GlobalProvider>
  );
}
