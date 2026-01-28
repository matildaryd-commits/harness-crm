import { Search, Bell } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="search-box">
        <Search size={18} />
        <input type="text" placeholder="Sök efter hästar, ägare, event..." />
      </div>

      <div className="topbar-actions">
        <button className="topbar-btn">
          <Bell size={20} />
        </button>
        <div className="topbar-avatar">MS</div>
      </div>
    </header>
  );
}
