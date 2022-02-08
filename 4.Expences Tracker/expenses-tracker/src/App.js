import './App.css';
import './style/expenses.css'
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExpence from './Components/IncomeExpence';
import TransactionList from './Components/TransactionList';
import GlobalProvider from './GlobalState/Globalcontext';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
       <Header/>
       <Balance/>
       <IncomeExpence/>
       <TransactionList/>
       <AddTransaction/>
       </GlobalProvider>
    </div>
  );
}

export default App;
