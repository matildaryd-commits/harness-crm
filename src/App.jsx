import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import Horses from './pages/Horses';
import Training from './pages/Training';
import Events from './pages/Events';
import Leads from './pages/Leads';
import Owners from './pages/Owners';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <TopBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/horses" element={<Horses />} />
            <Route path="/training" element={<Training />} />
            <Route path="/events" element={<Events />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/settings" element={<PlaceholderPage title="Inställningar" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

// Placeholder component for pages not yet built
function PlaceholderPage({ title }) {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>{title}</h1>
        <p>Denna sida är under uppbyggnad</p>
      </div>
    </div>
  );
}

export default App;
