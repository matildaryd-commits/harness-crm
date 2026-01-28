import { useState } from 'react';
import {
  Plus, ChevronLeft, ChevronRight, Clock, CheckCircle2,
  Circle, PlayCircle, Filter, Calendar, Activity, MoreVertical,
  Send
} from 'lucide-react';

export default function Training() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('day'); // 'day' or 'week'
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  // Get week dates
  const getWeekDates = (date) => {
    const week = [];
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay() + 1); // Start from Monday
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      week.push(day);
    }
    return week;
  };

  const weekDates = getWeekDates(selectedDate);

  const formatDate = (date) => {
    return date.toLocaleDateString('sv-SE', { weekday: 'short', day: 'numeric', month: 'short' });
  };

  const formatDateShort = (date) => {
    return date.toLocaleDateString('sv-SE', { weekday: 'short', day: 'numeric' });
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSameDay = (date1, date2) => {
    return date1.toDateString() === date2.toDateString();
  };

  const trainingSessions = [
    {
      id: 1,
      horse: 'Deeply Express',
      horseId: 1,
      type: 'Jobb',
      description: 'Jobb 2000m, sista 600m i 1.14-tempo',
      time: '06:00',
      duration: '45 min',
      trainer: 'Markus Svedberg',
      status: 'completed',
      date: new Date(),
      notes: 'Gick fint, kändes pigg och alert. Redo för V75.',
      metrics: { distance: '5 km', avgSpeed: '1.16', pulse: '142 bpm' },
      pushToApp: true
    },
    {
      id: 2,
      horse: 'Global Harmony',
      horseId: 2,
      type: 'Intervall',
      description: '4x500m i 1.14-tempo, vila 3 min mellan',
      time: '07:30',
      duration: '60 min',
      trainer: 'Markus Svedberg',
      status: 'in-progress',
      date: new Date(),
      notes: '',
      metrics: null,
      pushToApp: true
    },
    {
      id: 3,
      horse: 'Pargas Sox',
      horseId: 3,
      type: 'Lättjobb',
      description: 'Lugn jogg 4000m, återhämtning',
      time: '08:00',
      duration: '30 min',
      trainer: 'Markus Svedberg',
      status: 'scheduled',
      date: new Date(),
      notes: '',
      metrics: null,
      pushToApp: false
    },
    {
      id: 4,
      horse: 'Caspian Bro',
      horseId: 4,
      type: 'Jobb',
      description: 'Jobb 2000m, fokus på balans och teknik',
      time: '09:00',
      duration: '45 min',
      trainer: 'Markus Svedberg',
      status: 'scheduled',
      date: new Date(),
      notes: '',
      metrics: null,
      pushToApp: true
    },
    {
      id: 5,
      horse: 'Miami Mearas',
      horseId: 8,
      type: 'Lättjobb',
      description: 'Uppvärmning och lätt jogg',
      time: '10:00',
      duration: '30 min',
      trainer: 'Markus Svedberg',
      status: 'scheduled',
      date: new Date(),
      notes: '',
      metrics: null,
      pushToApp: false
    },
    {
      id: 6,
      horse: 'Charente Bro',
      horseId: 10,
      type: 'Jobb',
      description: 'Tempo 2400m inför Mantorp',
      time: '09:30',
      duration: '50 min',
      trainer: 'Markus Svedberg',
      status: 'scheduled',
      date: new Date(),
      notes: '',
      metrics: null,
      pushToApp: true
    },
    {
      id: 7,
      horse: 'Deeply Express',
      horseId: 1,
      type: 'Vila',
      description: 'Vilodag inför V75',
      time: '-',
      duration: '-',
      trainer: '-',
      status: 'scheduled',
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
      notes: '',
      metrics: null,
      pushToApp: false
    },
    {
      id: 8,
      horse: 'Global Harmony',
      horseId: 2,
      type: 'Lättjobb',
      description: 'Återhämtning efter intervaller',
      time: '07:00',
      duration: '30 min',
      trainer: 'Markus Svedberg',
      status: 'scheduled',
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
      notes: '',
      metrics: null,
      pushToApp: true
    },
    {
      id: 9,
      horse: 'Mansa Musa Mearas',
      horseId: 5,
      type: 'Jobb',
      description: 'Tempo 2000m, sista 800m i 1.13',
      time: '06:30',
      duration: '45 min',
      trainer: 'Markus Svedberg',
      status: 'scheduled',
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
      notes: '',
      metrics: null,
      pushToApp: true
    },
    {
      id: 10,
      horse: 'Optimum Volante',
      horseId: 7,
      type: 'Intervall',
      description: '3x600m i racetempo',
      time: '08:00',
      duration: '50 min',
      trainer: 'Markus Svedberg',
      status: 'scheduled',
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
      notes: '',
      metrics: null,
      pushToApp: true
    },
  ];

  const trainingTypes = [
    { id: 'jobb', label: 'Jobb', color: '#4F7CFF' },
    { id: 'intervall', label: 'Intervall', color: '#8B5CF6' },
    { id: 'lattjobb', label: 'Lättjobb', color: '#22C55E' },
    { id: 'vila', label: 'Vila', color: '#9CA3AF' },
    { id: 'tävling', label: 'Tävling', color: '#F59E0B' },
  ];

  const getTypeColor = (type) => {
    const found = trainingTypes.find(t => t.label.toLowerCase() === type.toLowerCase());
    return found ? found.color : '#6B7280';
  };

  const filteredSessions = trainingSessions.filter(session =>
    viewMode === 'day'
      ? isSameDay(session.date, selectedDate)
      : weekDates.some(d => isSameDay(d, session.date))
  );

  const getSessionsForDate = (date) => {
    return trainingSessions.filter(session => isSameDay(session.date, date));
  };

  const formatStatus = (status) => {
    const labels = {
      'completed': 'Klar',
      'in-progress': 'Pågår',
      'scheduled': 'Planerad'
    };
    return labels[status] || status;
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle2 size={16} style={{ color: 'var(--success)' }} />;
      case 'in-progress': return <PlayCircle size={16} style={{ color: 'var(--warning)' }} />;
      default: return <Circle size={16} style={{ color: 'var(--text-muted)' }} />;
    }
  };

  const stats = [
    { label: 'Idag', value: trainingSessions.filter(s => isToday(s.date)).length },
    { label: 'Denna vecka', value: trainingSessions.length },
    { label: 'Klara idag', value: trainingSessions.filter(s => isToday(s.date) && s.status === 'completed').length },
    { label: 'Pågår', value: trainingSessions.filter(s => s.status === 'in-progress').length },
  ];

  const navigateDate = (direction) => {
    const newDate = new Date(selectedDate);
    if (viewMode === 'day') {
      newDate.setDate(newDate.getDate() + direction);
    } else {
      newDate.setDate(newDate.getDate() + (direction * 7));
    }
    setSelectedDate(newDate);
  };

  return (
    <div className="page-content">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Träning</h1>
          <p>Planera och följ upp träningspass</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
          <Plus size={18} />
          Schemalägg träning
        </button>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '24px' }}>
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-card-label">{stat.label}</div>
            <div className="stat-card-value" style={{ fontSize: '28px' }}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Calendar Navigation */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button className="btn btn-secondary" style={{ padding: '8px' }} onClick={() => navigateDate(-1)}>
              <ChevronLeft size={20} />
            </button>
            <h3 style={{ minWidth: '200px', textAlign: 'center' }}>
              {viewMode === 'day'
                ? formatDate(selectedDate)
                : `${formatDateShort(weekDates[0])} - ${formatDateShort(weekDates[6])}`
              }
            </h3>
            <button className="btn btn-secondary" style={{ padding: '8px' }} onClick={() => navigateDate(1)}>
              <ChevronRight size={20} />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setSelectedDate(new Date())}
              style={{ marginLeft: '8px' }}
            >
              Idag
            </button>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              className={`btn ${viewMode === 'day' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setViewMode('day')}
            >
              Dag
            </button>
            <button
              className={`btn ${viewMode === 'week' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setViewMode('week')}
            >
              Vecka
            </button>
          </div>
        </div>

        {/* Week View Header */}
        {viewMode === 'week' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)'
          }}>
            {weekDates.map((date, index) => (
              <div
                key={index}
                onClick={() => { setSelectedDate(date); setViewMode('day'); }}
                style={{
                  padding: '12px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: isToday(date) ? 'var(--primary)' : isSameDay(date, selectedDate) ? 'var(--background)' : 'transparent',
                  color: isToday(date) ? 'white' : 'inherit',
                  borderRight: index < 6 ? '1px solid var(--border)' : 'none'
                }}
              >
                <div style={{ fontSize: '12px', opacity: 0.7 }}>
                  {date.toLocaleDateString('sv-SE', { weekday: 'short' })}
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600' }}>
                  {date.getDate()}
                </div>
                <div style={{ fontSize: '11px', marginTop: '4px' }}>
                  {getSessionsForDate(date).length} pass
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Training Sessions List */}
      <div className="card">
        <div className="card-header">
          <h3>
            {viewMode === 'day' ? 'Dagens träningspass' : 'Veckans träningspass'}
            <span style={{ fontWeight: '400', color: 'var(--text-muted)', marginLeft: '8px' }}>
              ({filteredSessions.length} pass)
            </span>
          </h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            {trainingSessions.some(s => s.status === 'completed' && s.pushToApp) && (
              <button className="btn btn-secondary" style={{ fontSize: '13px' }}>
                <Send size={14} />
                Pusha till appen
              </button>
            )}
          </div>
        </div>
        <div className="card-body">
          {filteredSessions.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Calendar size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
              <p>Inga träningspass schemalagda</p>
            </div>
          ) : (
            filteredSessions.map((session) => (
              <div
                key={session.id}
                className="list-item"
                style={{
                  cursor: 'pointer',
                  borderLeft: `3px solid ${getTypeColor(session.type)}`,
                  marginLeft: '20px',
                  paddingLeft: '17px'
                }}
                onClick={() => setSelectedSession(session)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '80px' }}>
                  {getStatusIcon(session.status)}
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{session.time}</span>
                </div>

                <div className="list-item-content">
                  <div className="list-item-title">{session.horse}</div>
                  <div className="list-item-subtitle">{session.description}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: '500',
                    background: `${getTypeColor(session.type)}20`,
                    color: getTypeColor(session.type)
                  }}>
                    {session.type}
                  </span>

                  {session.pushToApp && (
                    <span style={{
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Send size={12} />
                      Push
                    </span>
                  )}

                  <span className={`status-badge ${session.status}`}>
                    {formatStatus(session.status)}
                  </span>

                  <button
                    className="btn btn-secondary"
                    style={{ padding: '6px', minWidth: 'auto' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Session Detail Modal */}
      {selectedSession && (
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
        }} onClick={() => setSelectedSession(null)}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            width: '100%',
            maxWidth: '500px',
            margin: '20px',
            maxHeight: '80vh',
            overflow: 'auto'
          }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <h2>{selectedSession.horse}</h2>
                <p style={{ color: 'var(--text-muted)' }}>{selectedSession.type} • {selectedSession.time}</p>
              </div>
              <span className={`status-badge ${selectedSession.status}`}>
                {formatStatus(selectedSession.status)}
              </span>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>Beskrivning</h4>
              <p>{selectedSession.description}</p>
            </div>

            {selectedSession.metrics && (
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>Resultat</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Distans</div>
                    <div style={{ fontWeight: '600' }}>{selectedSession.metrics.distance}</div>
                  </div>
                  <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Snitt</div>
                    <div style={{ fontWeight: '600' }}>{selectedSession.metrics.avgSpeed}</div>
                  </div>
                  <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Puls</div>
                    <div style={{ fontWeight: '600' }}>{selectedSession.metrics.pulse}</div>
                  </div>
                </div>
              </div>
            )}

            {selectedSession.notes && (
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>Anteckningar</h4>
                <p>{selectedSession.notes}</p>
              </div>
            )}

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>Tränare</h4>
              <p>{selectedSession.trainer}</p>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              {selectedSession.status === 'completed' && selectedSession.pushToApp && (
                <button className="btn btn-primary" style={{ flex: 1 }}>
                  <Send size={16} />
                  Pusha till ägare
                </button>
              )}
              <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setSelectedSession(null)}>
                Stäng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Training Modal */}
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
            <h2 style={{ marginBottom: '16px' }}>Schemalägg träning</h2>
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
