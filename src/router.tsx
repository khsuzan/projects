import { Route, Routes } from "react-router";
import BreakingGoliathsPage from "./screens/breaking-goliaths/BreakingGoliathsPage";
import CoachCalPage from "./screens/coach-cal/CoachCalPage";
import EsortPage from "./screens/esort/EsortPage";
import FardaPage from "./screens/farda/FardaPage";
import HomePage from "./screens/HomePage";
import HisabotPage from "./screens/hisabot/HisabotPage";
import IMissUPage from "./screens/i-miss-u/IMissUPage";
import MathaidetectivesPage from "./screens/mathaidetectives/MathaidetectivesPage";
import MinglyPage from "./screens/mingly/MinglyPage";
import MisterTwisterPage from "./screens/mister-twister/MisterTwisterPage";
import PlatePrepPage from "./screens/plate-prep/PlatePrepPage";
import RydrPage from "./screens/rydr/RydrPage";
import SportXPage from "./screens/sport-x/SportXPage";
import TetherPage from "./screens/tether/TetherPage";

function App() {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="/esort" element={<EsortPage />} />
			<Route path="/sport-x" element={<SportXPage />} />
			<Route path="/hisabot" element={<HisabotPage />} />
			<Route path="/i-miss-u" element={<IMissUPage />} />
			<Route path="/mingly" element={<MinglyPage />} />
			<Route path="/mathaidetectives" element={<MathaidetectivesPage />} />
			<Route path="/tether" element={<TetherPage />} />
			<Route path="/farda" element={<FardaPage />} />
			<Route path="/breaking-goliaths" element={<BreakingGoliathsPage />} />
			<Route path="/plate-prep" element={<PlatePrepPage />} />
			<Route path="/coach-cal" element={<CoachCalPage />} />
			<Route path="/rydr" element={<RydrPage />} />
			<Route path="/mister-twister" element={<MisterTwisterPage />} />
		</Routes>
	);
}

export default App;
