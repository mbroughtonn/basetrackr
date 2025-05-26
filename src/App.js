import Header from './components/Header';
import GameInfoForm from './components/GameInfoForm';
import ScoreTable from './components/ScoreTable';
import StatsControls from './components/StatsControls';
import Summary from './components/Summary';
import Bench from './components/Bench';

function App() {
  return (
    <div style={{ backgroundColor: "#f9f7f4", minHeight: "100vh", padding: "20px", fontFamily: "Arial" }}>
      <Header />
      <GameInfoForm />
      <ScoreTable />
      <StatsControls />
      <Summary />
      <Bench />
    </div>
  );
}

export default App;
