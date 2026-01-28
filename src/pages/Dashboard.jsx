import { Clock, MapPin, ChevronRight } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Antal hästar', value: '85', sub: '72 aktiva, 13 vilar' },
    { label: 'Skötare', value: '12', sub: 'Alla i tjänst idag' },
    { label: 'Event denna vecka', value: '14', sub: '4 idag, 10 kommande' },
    { label: 'Aktiva ägare', value: '48', sub: '5 nya denna månad' },
  ];

  const trainingSessions = [
    { time: '06:00', horse: 'Deeply Express', type: 'Jobb 5km', trainer: 'Markus Svedberg', status: 'completed' },
    { time: '07:30', horse: 'Global Harmony', type: 'Intervall', trainer: 'Markus Svedberg', status: 'in-progress' },
    { time: '08:00', horse: 'Pargas Sox', type: 'Lättjobb', trainer: 'Markus Svedberg', status: 'scheduled' },
    { time: '09:00', horse: 'Caspian Bro', type: 'Jobb 5km', trainer: 'Markus Svedberg', status: 'scheduled' },
  ];

  const todaysRaces = [
    { horse: 'Deeply Express', race: 'Lopp 4 - V75', time: '15:20', place: 'Solvalla', status: 'entered' },
    { horse: 'Mansa Musa Mearas', race: 'Lopp 7 - V75', time: '16:45', place: 'Solvalla', status: 'entered' },
    { horse: 'Grazzhopper', race: 'Lopp 2', time: '19:00', place: 'Åby', status: 'eliminated' },
    { horse: 'Optimum Volante', race: 'Lopp 5', time: '19:45', place: 'Åby', status: 'entered' },
  ];

  const recentHorses = [
    { name: 'Deeply Express', owner: 'Stall Zet', trainer: 'Markus Svedberg', status: 'active', lastUpdate: '2 tim sedan' },
    { name: 'Global Harmony', owner: 'Stall Global', trainer: 'Markus Svedberg', status: 'resting', lastUpdate: '2 tim sedan' },
    { name: 'Pargas Sox', owner: 'Pargas Racing', trainer: 'Markus Svedberg', status: 'active', lastUpdate: '3 tim sedan' },
  ];

  const formatStatus = (status) => {
    const labels = {
      'completed': 'Klar',
      'in-progress': 'Pågår',
      'scheduled': 'Planerad',
      'entered': 'Anmäld',
      'eliminated': 'Struken',
      'active': 'Aktiv',
      'resting': 'Vilar'
    };
    return labels[status] || status;
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Översikt över dagens aktiviteter</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-card-label">{stat.label}</div>
            <div className="stat-card-value">{stat.value}</div>
            <div className="stat-card-sub">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Training Sessions & Races */}
      <div className="cards-grid">
        {/* Today's Training Sessions */}
        <div className="card">
          <div className="card-header">
            <h3>Dagens träningspass</h3>
            <span className="card-header-link">Visa alla</span>
          </div>
          <div className="card-body">
            {trainingSessions.map((session, index) => (
              <div key={index} className="list-item">
                <div className="list-item-time">
                  <Clock size={14} />
                  {session.time}
                </div>
                <div className="list-item-content">
                  <div className="list-item-title">{session.horse}</div>
                  <div className="list-item-subtitle">{session.type} - {session.trainer}</div>
                </div>
                <span className={`status-badge ${session.status}`}>
                  {formatStatus(session.status)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Races */}
        <div className="card">
          <div className="card-header">
            <h3>Dagens lopp</h3>
            <span className="card-header-link">Visa alla</span>
          </div>
          <div className="card-body">
            {todaysRaces.map((race, index) => (
              <div key={index} className="list-item">
                <div className="list-item-content">
                  <div className="list-item-title">{race.horse}</div>
                  <div className="list-item-subtitle">{race.race}</div>
                </div>
                <div className="list-item-meta">
                  <div className="list-item-time">
                    <Clock size={14} />
                    {race.time}
                  </div>
                  <div className="list-item-location">
                    <MapPin size={14} />
                    {race.place}
                  </div>
                </div>
                <span className={`status-badge ${race.status}`}>
                  {formatStatus(race.status)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Horses Table */}
      <div className="card">
        <div className="card-header">
          <h3>Senaste hästar</h3>
          <span className="card-header-link">Visa alla</span>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Häst</th>
                <th>Ägare</th>
                <th>Tränare</th>
                <th>Status</th>
                <th>Senast uppdaterad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recentHorses.map((horse, index) => (
                <tr key={index}>
                  <td>{horse.name}</td>
                  <td>{horse.owner}</td>
                  <td>{horse.trainer}</td>
                  <td>
                    <span className={`status-badge ${horse.status}`}>
                      {formatStatus(horse.status)}
                    </span>
                  </td>
                  <td>{horse.lastUpdate}</td>
                  <td>
                    <ChevronRight size={18} className="table-link" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
