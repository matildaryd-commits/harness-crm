import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Grip,
  Activity,
  Calendar,
  Users,
  TrendingUp,
  Settings,
  LogOut
} from 'lucide-react';

export default function Sidebar() {
  const mainNavItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Grip, label: 'Hästar', path: '/horses' },
    { icon: Activity, label: 'Träning', path: '/training' },
    { icon: Calendar, label: 'Lopp & Event', path: '/events' },
    { icon: Users, label: 'Ägare', path: '/owners' },
    { icon: TrendingUp, label: 'Leads', path: '/leads' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo">Trainer's CRM</span>
      </div>

      <div className="sidebar-user">
        <div className="sidebar-user-avatar">MS</div>
        <div className="sidebar-user-info">
          <h4>Markus Svedberg</h4>
          <p>Stall Markus Svedberg</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {mainNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            end={item.path === '/'}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/settings" className="nav-item">
          <Settings size={20} />
          <span>Inställningar</span>
        </NavLink>
        <button className="nav-item" style={{ width: '100%', border: 'none', background: 'none', cursor: 'pointer' }}>
          <LogOut size={20} />
          <span>Logga ut</span>
        </button>
      </div>
    </aside>
  );
}
