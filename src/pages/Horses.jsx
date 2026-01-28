import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Plus, Search, Filter, ChevronRight, MoreVertical,
  Activity, Calendar, Users, TrendingUp
} from 'lucide-react';

export default function Horses() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const horses = [
    {
      id: 1,
      name: 'Deeply Express',
      age: 5,
      gender: 'Valack',
      sire: 'Readly Express',
      dam: 'Deep Throat',
      record: '1.10,8',
      earnings: '1 845 000 kr',
      status: 'active',
      owners: ['Stall Zet (50%)', 'SRF Stable (50%)'],
      trainer: 'Markus Svedberg',
      nextRace: 'V75 Solvalla - 15 feb',
      lastTraining: 'Idag 06:00',
      image: null
    },
    {
      id: 2,
      name: 'Global Harmony',
      age: 4,
      gender: 'Sto',
      sire: 'Googoo Gaagaa',
      dam: 'Global Heroine',
      record: '1.12,5',
      earnings: '685 000 kr',
      status: 'active',
      owners: ['Stall Global (100%)'],
      trainer: 'Markus Svedberg',
      nextRace: 'V75 Solvalla - 15 feb',
      lastTraining: 'Idag 07:30',
      image: null
    },
    {
      id: 3,
      name: 'Pargas Sox',
      age: 6,
      gender: 'Valack',
      sire: 'Trixton',
      dam: 'Pargas Princess',
      record: '1.11,2',
      earnings: '1 250 000 kr',
      status: 'active',
      owners: ['Pargas Racing (75%)', 'K. Lindgren (25%)'],
      trainer: 'Markus Svedberg',
      nextRace: 'Åby - 16 feb',
      lastTraining: 'Idag 08:00',
      image: null
    },
    {
      id: 4,
      name: 'Caspian Bro',
      age: 4,
      gender: 'Valack',
      sire: 'Bold Eagle',
      dam: 'Caspian Sea',
      record: '1.12,0',
      earnings: '425 000 kr',
      status: 'active',
      owners: ['Bro Stables (100%)'],
      trainer: 'Markus Svedberg',
      nextRace: 'Inget planerat',
      lastTraining: 'Idag 09:00',
      image: null
    },
    {
      id: 5,
      name: 'Mansa Musa Mearas',
      age: 5,
      gender: 'Valack',
      sire: 'Muscle Hill',
      dam: 'Mearas Jewel',
      record: '1.11,5',
      earnings: '1 120 000 kr',
      status: 'active',
      owners: ['Stall Mearas (60%)', 'J. Svensson (40%)'],
      trainer: 'Markus Svedberg',
      nextRace: 'V75 Solvalla - 15 feb',
      lastTraining: 'Igår 07:00',
      image: null
    },
    {
      id: 6,
      name: 'Grazzhopper',
      age: 7,
      gender: 'Valack',
      sire: 'Joke Face',
      dam: 'Grass Widow',
      record: '1.10,2',
      earnings: '2 850 000 kr',
      status: 'resting',
      owners: ['Team Grazzhopper (100%)'],
      trainer: 'Markus Svedberg',
      nextRace: '-',
      lastTraining: '3 dagar sedan',
      image: null
    },
    {
      id: 7,
      name: 'Optimum Volante',
      age: 4,
      gender: 'Valack',
      sire: 'Trixton',
      dam: 'Optimum Grace',
      record: '1.12,8',
      earnings: '380 000 kr',
      status: 'active',
      owners: ['Stall Volante (100%)'],
      trainer: 'Markus Svedberg',
      nextRace: 'Åby - 16 feb',
      lastTraining: 'Igår 08:30',
      image: null
    },
    {
      id: 8,
      name: 'Miami Mearas',
      age: 3,
      gender: 'Sto',
      sire: 'Muscle Hill',
      dam: 'Miami Vice',
      record: '1.14,5',
      earnings: '125 000 kr',
      status: 'active',
      owners: ['Stall Mearas (100%)'],
      trainer: 'Markus Svedberg',
      nextRace: 'Inget planerat',
      lastTraining: 'Idag 10:00',
      image: null
    },
    {
      id: 9,
      name: 'Bright Spirit',
      age: 5,
      gender: 'Sto',
      sire: 'Father Patrick',
      dam: 'Bright Eyes',
      record: '1.11,8',
      earnings: '720 000 kr',
      status: 'injured',
      owners: ['Spirit Racing (50%)', 'A. Holm (50%)'],
      trainer: 'Markus Svedberg',
      nextRace: '-',
      lastTraining: '2 veckor sedan',
      image: null
    },
    {
      id: 10,
      name: 'Charente Bro',
      age: 4,
      gender: 'Valack',
      sire: 'Bold Eagle',
      dam: 'Charente',
      record: '1.13,2',
      earnings: '285 000 kr',
      status: 'active',
      owners: ['Bro Stables (100%)'],
      trainer: 'Markus Svedberg',
      nextRace: 'Mantorp - 18 feb',
      lastTraining: 'Idag 09:30',
      image: null
    },
  ];

  const stats = [
    { icon: Activity, label: 'Aktiva', value: horses.filter(h => h.status === 'active').length, color: 'var(--success)' },
    { icon: Calendar, label: 'Vilar', value: horses.filter(h => h.status === 'resting').length, color: 'var(--warning)' },
    { icon: TrendingUp, label: 'Skadade', value: horses.filter(h => h.status === 'injured').length, color: 'var(--danger)' },
    { icon: Users, label: 'Totalt', value: horses.length, color: 'var(--primary)' },
  ];

  const filteredHorses = horses.filter(horse => {
    const matchesSearch = horse.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         horse.owners.some(o => o.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || horse.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatStatus = (status) => {
    const labels = {
      'active': 'Aktiv',
      'resting': 'Vilar',
      'injured': 'Skadad'
    };
    return labels[status] || status;
  };

  const getStatusClass = (status) => {
    const classes = {
      'active': 'active',
      'resting': 'resting',
      'injured': 'eliminated'
    };
    return classes[status] || '';
  };

  return (
    <div className="page-content">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Hästar</h1>
          <p>Hantera stallets hästar</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
          <Plus size={18} />
          Lägg till häst
        </button>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid" style={{ marginBottom: '24px' }}>
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: `${stat.color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <stat.icon size={24} style={{ color: stat.color }} />
            </div>
            <div>
              <div className="stat-card-value" style={{ fontSize: '24px' }}>{stat.value}</div>
              <div className="stat-card-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ padding: '16px 20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div className="search-box" style={{ flex: 1, maxWidth: '400px' }}>
            <Search size={18} />
            <input
              type="text"
              placeholder="Sök häst eller ägare..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['all', 'active', 'resting', 'injured'].map((status) => (
              <button
                key={status}
                className={`btn ${statusFilter === status ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setStatusFilter(status)}
                style={{ padding: '8px 16px' }}
              >
                {status === 'all' ? 'Alla' : formatStatus(status)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Horses List */}
      <div className="card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Häst</th>
                <th>Ägare</th>
                <th>Rekord</th>
                <th>Intjänat</th>
                <th>Status</th>
                <th>Nästa lopp</th>
                <th>Senaste träning</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredHorses.map((horse) => (
                <tr key={horse.id} onClick={() => navigate(`/horses/${horse.id}`)} style={{ cursor: 'pointer' }}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        background: 'var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'var(--text-secondary)'
                      }}>
                        {horse.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div style={{ fontWeight: '600' }}>{horse.name}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                          {horse.age} år • {horse.gender} • e. {horse.sire}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: '13px' }}>
                      {horse.owners.slice(0, 2).map((owner, idx) => (
                        <div key={idx}>{owner}</div>
                      ))}
                      {horse.owners.length > 2 && (
                        <div style={{ color: 'var(--text-muted)' }}>+{horse.owners.length - 2} till</div>
                      )}
                    </div>
                  </td>
                  <td style={{ fontWeight: '600' }}>{horse.record}</td>
                  <td>{horse.earnings}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(horse.status)}`}>
                      {formatStatus(horse.status)}
                    </span>
                  </td>
                  <td style={{ fontSize: '13px' }}>{horse.nextRace}</td>
                  <td style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{horse.lastTraining}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      style={{ padding: '6px', minWidth: 'auto' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Show menu
                      }}
                    >
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Horse Modal - placeholder */}
      {showAddModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={() => setShowAddModal(false)}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            width: '100%',
            maxWidth: '500px',
            margin: '20px'
          }} onClick={e => e.stopPropagation()}>
            <h2 style={{ marginBottom: '16px' }}>Lägg till ny häst</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Denna funktion kommer snart...
            </p>
            <button className="btn btn-primary" onClick={() => setShowAddModal(false)}>
              Stäng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
