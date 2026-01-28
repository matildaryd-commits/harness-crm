import { useState } from 'react';
import {
  Plus, ChevronLeft, ChevronRight, Clock, CheckCircle2,
  Circle, PlayCircle, Calendar, MoreVertical,
  Send, Users, ChevronDown, ChevronUp, User, Timer,
  Play, Check, X, MessageSquare, UserCheck, Heart
} from 'lucide-react';

export default function Training() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('day');
  const [showAddHeatModal, setShowAddHeatModal] = useState(false);
  const [selectedHeat, setSelectedHeat] = useState(null);
  const [expandedHeats, setExpandedHeats] = useState(['heat-1', 'heat-2']);
  const [activeHeatId, setActiveHeatId] = useState('heat-2');
  const [showCompleteHeatModal, setShowCompleteHeatModal] = useState(false);
  const [completeHeatData, setCompleteHeatData] = useState(null);

  // Grooms/caretakers list
  const grooms = [
    { id: 1, name: 'Emma Larsson' },
    { id: 2, name: 'Johan Karlsson' },
    { id: 3, name: 'Lisa Andersson' },
    { id: 4, name: 'Marcus Berg' },
  ];

  // Available horses for heat planning
  const availableHorses = [
    { id: 1, name: 'Deeply Express' },
    { id: 2, name: 'Caspian Bro' },
    { id: 3, name: 'Charente Bro' },
    { id: 4, name: 'Michigan Bro' },
    { id: 5, name: 'Panama Bro' },
    { id: 6, name: 'Global Harmony' },
    { id: 7, name: 'Global Himalaya' },
    { id: 8, name: 'Mansa Musa Mearas' },
    { id: 9, name: 'Miami Mearas' },
    { id: 10, name: 'Lupin Mearas' },
    { id: 11, name: 'Grazzhopper' },
    { id: 12, name: 'Pargas Sox' },
    { id: 13, name: 'Optimum Volante' },
    { id: 14, name: 'Global Holy Ground' },
    { id: 15, name: 'Bright Spirit' },
  ];

  // Heat data - each heat contains multiple horses
  const [heats, setHeats] = useState([
    {
      id: 'heat-1',
      name: 'Heat 1 - Jobb',
      type: 'jobb',
      scheduledTime: '06:00',
      actualStartTime: '06:02',
      actualEndTime: '06:48',
      status: 'completed',
      date: new Date(),
      driver: 'Markus Svedberg',
      track: 'Träningsbana 1',
      distance: '2000m',
      targetPace: '1.16',
      trainerComment: 'Bra heat, alla hästar gick fint. Deeply Express imponerade.',
      pushToApp: true,
      horses: [
        { id: 1, name: 'Deeply Express', position: 1, status: 'completed', time: '1.14.2', notes: 'Stark avslutning', pulse: 142, groom: 'Emma Larsson', feel: 'excellent' },
        { id: 2, name: 'Caspian Bro', position: 2, status: 'completed', time: '1.15.8', notes: 'Balanserad', pulse: 148, groom: 'Johan Karlsson', feel: 'good' },
        { id: 3, name: 'Charente Bro', position: 3, status: 'completed', time: '1.16.1', notes: '', pulse: 151, groom: 'Emma Larsson', feel: 'good' },
        { id: 4, name: 'Michigan Bro', position: 4, status: 'completed', time: '1.16.4', notes: 'Lite trög start', pulse: 155, groom: 'Lisa Andersson', feel: 'normal' },
        { id: 5, name: 'Panama Bro', position: 5, status: 'completed', time: '1.17.2', notes: '', pulse: 149, groom: 'Marcus Berg', feel: 'good' },
      ]
    },
    {
      id: 'heat-2',
      name: 'Heat 2 - Intervall',
      type: 'intervall',
      scheduledTime: '07:30',
      actualStartTime: '07:35',
      actualEndTime: null,
      status: 'in-progress',
      date: new Date(),
      driver: 'Markus Svedberg',
      track: 'Träningsbana 1',
      distance: '4x500m',
      targetPace: '1.14',
      trainerComment: '',
      pushToApp: true,
      horses: [
        { id: 6, name: 'Global Harmony', position: 1, status: 'in-progress', time: null, notes: '', pulse: null, groom: 'Emma Larsson', feel: null },
        { id: 7, name: 'Global Himalaya', position: 2, status: 'in-progress', time: null, notes: '', pulse: null, groom: 'Johan Karlsson', feel: null },
        { id: 8, name: 'Mansa Musa Mearas', position: 3, status: 'in-progress', time: null, notes: '', pulse: null, groom: 'Lisa Andersson', feel: null },
        { id: 9, name: 'Miami Mearas', position: 4, status: 'in-progress', time: null, notes: '', pulse: null, groom: 'Marcus Berg', feel: null },
        { id: 10, name: 'Lupin Mearas', position: 5, status: 'in-progress', time: null, notes: '', pulse: null, groom: 'Emma Larsson', feel: null },
        { id: 11, name: 'Grazzhopper', position: 6, status: 'in-progress', time: null, notes: '', pulse: null, groom: 'Johan Karlsson', feel: null },
      ]
    },
    {
      id: 'heat-3',
      name: 'Heat 3 - Lättjobb',
      type: 'lattjobb',
      scheduledTime: '09:00',
      actualStartTime: null,
      actualEndTime: null,
      status: 'scheduled',
      date: new Date(),
      driver: 'Markus Svedberg',
      track: 'Träningsbana 2',
      distance: '4000m',
      targetPace: '1.22',
      trainerComment: 'Återhämtning och lätt motion',
      pushToApp: false,
      horses: [
        { id: 12, name: 'Pargas Sox', position: 1, status: 'scheduled', time: null, notes: '', pulse: null, groom: null, feel: null },
        { id: 13, name: 'Optimum Volante', position: 2, status: 'scheduled', time: null, notes: '', pulse: null, groom: null, feel: null },
        { id: 14, name: 'Global Holy Ground', position: 3, status: 'scheduled', time: null, notes: '', pulse: null, groom: null, feel: null },
      ]
    },
    {
      id: 'heat-4',
      name: 'Heat 4 - Jobb',
      type: 'jobb',
      scheduledTime: '10:30',
      actualStartTime: null,
      actualEndTime: null,
      status: 'scheduled',
      date: new Date(),
      driver: 'Markus Svedberg',
      track: 'Träningsbana 1',
      distance: '2400m',
      targetPace: '1.15',
      trainerComment: 'Inför helgens starter',
      pushToApp: true,
      horses: [
        { id: 15, name: 'Mansa Musa Mearas', position: 1, status: 'scheduled', time: null, notes: 'V75-prep', pulse: null, groom: null, feel: null },
        { id: 16, name: 'Deeply Express', position: 2, status: 'scheduled', time: null, notes: 'V75-prep', pulse: null, groom: null, feel: null },
        { id: 17, name: 'Global Harmony', position: 3, status: 'scheduled', time: null, notes: '', pulse: null, groom: null, feel: null },
        { id: 18, name: 'Optimum Volante', position: 4, status: 'scheduled', time: null, notes: '', pulse: null, groom: null, feel: null },
      ]
    },
    // Tomorrow's heats
    {
      id: 'heat-5',
      name: 'Heat 1 - Vila/Promenad',
      type: 'vila',
      scheduledTime: '08:00',
      actualStartTime: null,
      actualEndTime: null,
      status: 'scheduled',
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
      driver: 'Emma Larsson',
      track: 'Hage',
      distance: '-',
      targetPace: '-',
      trainerComment: 'Vila inför V75',
      pushToApp: false,
      horses: [
        { id: 19, name: 'Deeply Express', position: 1, status: 'scheduled', time: null, notes: 'Vila', pulse: null, groom: null, feel: null },
        { id: 20, name: 'Mansa Musa Mearas', position: 2, status: 'scheduled', time: null, notes: 'Vila', pulse: null, groom: null, feel: null },
      ]
    },
  ]);

  // New heat form state
  const [newHeat, setNewHeat] = useState({
    type: 'jobb',
    scheduledTime: '08:00',
    track: 'Träningsbana 1',
    distance: '2000m',
    targetPace: '1.16',
    trainerComment: '',
    pushToApp: true,
    selectedHorses: [],
  });

  const heatTypes = [
    { id: 'jobb', label: 'Jobb', color: '#4F7CFF', description: 'Tempo/distansjobb' },
    { id: 'intervall', label: 'Intervall', color: '#8B5CF6', description: 'Intervallträning' },
    { id: 'lattjobb', label: 'Lättjobb', color: '#22C55E', description: 'Lätt motion/återhämtning' },
    { id: 'vila', label: 'Vila', color: '#9CA3AF', description: 'Vilodag/promenad' },
    { id: 'tavling', label: 'Tävling', color: '#F59E0B', description: 'Tävlingsdag' },
  ];

  const tracks = [
    'Träningsbana 1',
    'Träningsbana 2',
    'Skogsspår',
    'Hage',
    'Solvalla',
    'Åby',
  ];

  const feelOptions = [
    { id: 'excellent', label: 'Utmärkt', color: '#22C55E' },
    { id: 'good', label: 'Bra', color: '#4F7CFF' },
    { id: 'normal', label: 'Normal', color: '#9CA3AF' },
    { id: 'tired', label: 'Trött', color: '#F59E0B' },
    { id: 'poor', label: 'Dålig', color: '#EF4444' },
  ];

  const getTypeColor = (type) => {
    const found = heatTypes.find(t => t.id === type);
    return found ? found.color : '#6B7280';
  };

  const getTypeLabel = (type) => {
    const found = heatTypes.find(t => t.id === type);
    return found ? found.label : type;
  };

  const getFeelColor = (feel) => {
    const found = feelOptions.find(f => f.id === feel);
    return found ? found.color : '#9CA3AF';
  };

  const getFeelLabel = (feel) => {
    const found = feelOptions.find(f => f.id === feel);
    return found ? found.label : '-';
  };

  // Date helpers
  const getWeekDates = (date) => {
    const week = [];
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay() + 1);
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      week.push(day);
    }
    return week;
  };

  const weekDates = getWeekDates(selectedDate);

  const formatDate = (date) => {
    return date.toLocaleDateString('sv-SE', { weekday: 'long', day: 'numeric', month: 'long' });
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

  const navigateDate = (direction) => {
    const newDate = new Date(selectedDate);
    if (viewMode === 'day') {
      newDate.setDate(newDate.getDate() + direction);
    } else {
      newDate.setDate(newDate.getDate() + (direction * 7));
    }
    setSelectedDate(newDate);
  };

  // Filter heats for selected date
  const filteredHeats = heats.filter(heat =>
    viewMode === 'day'
      ? isSameDay(heat.date, selectedDate)
      : weekDates.some(d => isSameDay(d, heat.date))
  );

  const getHeatsForDate = (date) => {
    return heats.filter(heat => isSameDay(heat.date, date));
  };

  const toggleHeatExpanded = (heatId) => {
    setExpandedHeats(prev =>
      prev.includes(heatId)
        ? prev.filter(id => id !== heatId)
        : [...prev, heatId]
    );
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle2 size={18} style={{ color: 'var(--success)' }} />;
      case 'in-progress': return <PlayCircle size={18} style={{ color: 'var(--primary)' }} />;
      default: return <Circle size={18} style={{ color: 'var(--text-muted)' }} />;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed': return 'Klart';
      case 'in-progress': return 'Pågår';
      default: return 'Planerat';
    }
  };

  // Complete heat handler
  const handleOpenCompleteHeat = (heat) => {
    setCompleteHeatData({
      heatId: heat.id,
      trainerComment: '',
      delegations: heat.horses.map(h => ({
        horseId: h.id,
        horseName: h.name,
        groom: h.groom || '',
        pulse: h.pulse || '',
        feel: h.feel || '',
        notes: h.notes || '',
      }))
    });
    setShowCompleteHeatModal(true);
  };

  const handleCompleteHeat = () => {
    if (!completeHeatData) return;

    setHeats(prev => prev.map(heat => {
      if (heat.id === completeHeatData.heatId) {
        return {
          ...heat,
          status: 'completed',
          actualEndTime: new Date().toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' }),
          trainerComment: completeHeatData.trainerComment,
          horses: heat.horses.map(horse => {
            const delegation = completeHeatData.delegations.find(d => d.horseId === horse.id);
            return delegation ? {
              ...horse,
              status: 'completed',
              groom: delegation.groom,
              pulse: delegation.pulse ? parseInt(delegation.pulse) : null,
              feel: delegation.feel,
              notes: delegation.notes,
            } : horse;
          })
        };
      }
      return heat;
    }));

    setShowCompleteHeatModal(false);
    setCompleteHeatData(null);
    setActiveHeatId(null);
  };

  // Create new heat handler
  const handleCreateHeat = () => {
    const heatCount = heats.filter(h => isSameDay(h.date, selectedDate)).length;
    const newHeatObj = {
      id: `heat-${Date.now()}`,
      name: `Heat ${heatCount + 1} - ${getTypeLabel(newHeat.type)}`,
      type: newHeat.type,
      scheduledTime: newHeat.scheduledTime,
      actualStartTime: null,
      actualEndTime: null,
      status: 'scheduled',
      date: new Date(selectedDate),
      driver: 'Markus Svedberg',
      track: newHeat.track,
      distance: newHeat.distance,
      targetPace: newHeat.targetPace,
      trainerComment: newHeat.trainerComment,
      pushToApp: newHeat.pushToApp,
      horses: newHeat.selectedHorses.map((horseId, idx) => {
        const horse = availableHorses.find(h => h.id === horseId);
        return {
          id: horseId,
          name: horse?.name || '',
          position: idx + 1,
          status: 'scheduled',
          time: null,
          notes: '',
          pulse: null,
          groom: null,
          feel: null,
        };
      })
    };

    setHeats(prev => [...prev, newHeatObj]);
    setShowAddHeatModal(false);
    setNewHeat({
      type: 'jobb',
      scheduledTime: '08:00',
      track: 'Träningsbana 1',
      distance: '2000m',
      targetPace: '1.16',
      trainerComment: '',
      pushToApp: true,
      selectedHorses: [],
    });
  };

  // Stats calculations
  const todayHeats = heats.filter(h => isToday(h.date));
  const completedHeats = todayHeats.filter(h => h.status === 'completed');
  const inProgressHeats = todayHeats.filter(h => h.status === 'in-progress');
  const totalHorsesToday = todayHeats.reduce((sum, h) => sum + h.horses.length, 0);

  const stats = [
    { label: 'Heat idag', value: todayHeats.length, sub: `${completedHeats.length} klara` },
    { label: 'Hästar', value: totalHorsesToday, sub: 'totalt idag' },
    { label: 'Pågående', value: inProgressHeats.length, sub: inProgressHeats[0]?.name || '-', highlight: inProgressHeats.length > 0 },
    { label: 'Nästa heat', value: todayHeats.find(h => h.status === 'scheduled')?.scheduledTime || '-', sub: todayHeats.find(h => h.status === 'scheduled')?.name || 'Inga fler' },
  ];

  return (
    <div className="page-content">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Träning</h1>
          <p>Planera och följ upp dagens heat</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-secondary">
            <Send size={18} />
            Pusha till appen
          </button>
          <button className="btn btn-primary" onClick={() => setShowAddHeatModal(true)}>
            <Plus size={18} />
            Nytt heat
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '24px' }}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-card"
            style={{
              border: stat.highlight ? '2px solid var(--primary)' : 'none',
              background: stat.highlight ? 'rgba(79, 124, 255, 0.08)' : 'white'
            }}
          >
            <div className="stat-card-label">{stat.label}</div>
            <div className="stat-card-value" style={{ fontSize: '28px' }}>{stat.value}</div>
            <div className="stat-card-sub">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Active Heat Banner - Softer color */}
      {inProgressHeats.length > 0 && (
        <div style={{
          background: 'linear-gradient(135deg, #4F7CFF 0%, #6B8AFF 100%)',
          borderRadius: '12px',
          padding: '20px 24px',
          marginBottom: '24px',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Play size={24} fill="white" />
            </div>
            <div>
              <div style={{ fontSize: '12px', opacity: 0.9, marginBottom: '4px' }}>PÅGÅENDE HEAT</div>
              <div style={{ fontSize: '20px', fontWeight: '600' }}>{inProgressHeats[0].name}</div>
              <div style={{ fontSize: '14px', opacity: 0.9, marginTop: '4px' }}>
                {inProgressHeats[0].horses.length} hästar • Startade {inProgressHeats[0].actualStartTime} • {inProgressHeats[0].track}
              </div>
            </div>
          </div>
          <button style={{
            background: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            color: '#4F7CFF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: '600'
          }} onClick={() => handleOpenCompleteHeat(inProgressHeats[0])}>
            <Check size={18} />
            Avsluta heat
          </button>
        </div>
      )}

      {/* Calendar Navigation */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button className="btn btn-secondary" style={{ padding: '8px' }} onClick={() => navigateDate(-1)}>
              <ChevronLeft size={20} />
            </button>
            <h3 style={{ minWidth: '280px', textAlign: 'center' }}>
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

        {/* Week View Calendar */}
        {viewMode === 'week' && (
          <div style={{ borderTop: '1px solid var(--border)' }}>
            {/* Week header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '80px repeat(7, 1fr)',
              borderBottom: '1px solid var(--border)',
              background: 'var(--background)'
            }}>
              <div style={{ padding: '12px', borderRight: '1px solid var(--border)' }}></div>
              {weekDates.map((date, index) => (
                <div
                  key={index}
                  onClick={() => { setSelectedDate(date); setViewMode('day'); }}
                  style={{
                    padding: '12px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    background: isToday(date) ? 'var(--primary)' : 'transparent',
                    color: isToday(date) ? 'white' : 'inherit',
                    borderRight: index < 6 ? '1px solid var(--border)' : 'none'
                  }}
                >
                  <div style={{ fontSize: '12px', opacity: 0.7, textTransform: 'uppercase' }}>
                    {date.toLocaleDateString('sv-SE', { weekday: 'short' })}
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: '600' }}>
                    {date.getDate()}
                  </div>
                </div>
              ))}
            </div>

            {/* Time slots */}
            {['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'].map((time) => (
              <div
                key={time}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px repeat(7, 1fr)',
                  minHeight: '80px',
                  borderBottom: '1px solid var(--border-light)'
                }}
              >
                <div style={{
                  padding: '8px 12px',
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  borderRight: '1px solid var(--border)'
                }}>
                  {time}
                </div>
                {weekDates.map((date, dayIndex) => {
                  const dayHeats = getHeatsForDate(date).filter(h => {
                    const heatHour = parseInt(h.scheduledTime.split(':')[0]);
                    const slotHour = parseInt(time.split(':')[0]);
                    return heatHour === slotHour;
                  });

                  return (
                    <div
                      key={dayIndex}
                      style={{
                        padding: '4px',
                        borderRight: dayIndex < 6 ? '1px solid var(--border)' : 'none',
                        background: isToday(date) ? 'rgba(79, 124, 255, 0.03)' : 'transparent'
                      }}
                    >
                      {dayHeats.map((heat) => (
                        <div
                          key={heat.id}
                          onClick={() => { setSelectedDate(date); setViewMode('day'); setSelectedHeat(heat); }}
                          style={{
                            background: `${getTypeColor(heat.type)}15`,
                            borderLeft: `3px solid ${getTypeColor(heat.type)}`,
                            borderRadius: '4px',
                            padding: '6px 8px',
                            marginBottom: '4px',
                            cursor: 'pointer',
                            fontSize: '11px'
                          }}
                        >
                          <div style={{ fontWeight: '600', color: getTypeColor(heat.type), marginBottom: '2px' }}>
                            {heat.scheduledTime} {getTypeLabel(heat.type)}
                          </div>
                          <div style={{ color: 'var(--text-muted)' }}>
                            {heat.horses.length} hästar
                          </div>
                          {heat.status === 'in-progress' && (
                            <div style={{
                              display: 'inline-block',
                              background: 'var(--primary)',
                              color: 'white',
                              fontSize: '9px',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              marginTop: '4px'
                            }}>
                              Pågår
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Timeline Overview (Day view) */}
      {viewMode === 'day' && filteredHeats.length > 0 && (
        <div className="card" style={{ marginBottom: '24px' }}>
          <div className="card-header">
            <h3>Dagens schema</h3>
          </div>
          <div style={{ padding: '20px', overflowX: 'auto' }}>
            <div style={{
              display: 'flex',
              gap: '8px',
              minWidth: 'fit-content'
            }}>
              {filteredHeats.sort((a, b) => a.scheduledTime.localeCompare(b.scheduledTime)).map((heat) => (
                <div
                  key={heat.id}
                  onClick={() => setSelectedHeat(heat)}
                  style={{
                    flex: '1',
                    minWidth: '160px',
                    padding: '16px',
                    borderRadius: '12px',
                    background: heat.status === 'in-progress' ? 'rgba(79, 124, 255, 0.1)' : 'var(--background)',
                    border: heat.status === 'in-progress' ? '2px solid var(--primary)' : '1px solid var(--border)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    position: 'relative'
                  }}
                >
                  {heat.status === 'in-progress' && (
                    <div style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      animation: 'pulse 2s infinite'
                    }} />
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    {getStatusIcon(heat.status)}
                    <span style={{ fontWeight: '600', fontSize: '14px' }}>{heat.scheduledTime}</span>
                  </div>
                  <div style={{
                    fontWeight: '600',
                    fontSize: '13px',
                    marginBottom: '4px',
                    color: getTypeColor(heat.type)
                  }}>
                    {getTypeLabel(heat.type)}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {heat.horses.length} hästar • {heat.distance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Heat List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {viewMode === 'day' && filteredHeats.length === 0 ? (
          <div className="card" style={{ padding: '60px 40px', textAlign: 'center' }}>
            <Calendar size={48} style={{ marginBottom: '16px', opacity: 0.3, color: 'var(--text-muted)' }} />
            <h3 style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Inga heat planerade</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Skapa ett nytt heat för att komma igång</p>
          </div>
        ) : viewMode === 'day' && (
          filteredHeats.sort((a, b) => a.scheduledTime.localeCompare(b.scheduledTime)).map((heat) => (
            <div
              key={heat.id}
              className="card"
              style={{
                borderLeft: `4px solid ${getTypeColor(heat.type)}`,
                overflow: 'hidden'
              }}
            >
              {/* Heat Header */}
              <div
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  background: heat.status === 'in-progress' ? 'rgba(79, 124, 255, 0.05)' : 'transparent'
                }}
                onClick={() => toggleHeatExpanded(heat.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${getTypeColor(heat.type)}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: getTypeColor(heat.type)
                  }}>
                    <Timer size={24} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '600' }}>{heat.name}</h3>
                      <span className={`status-badge ${heat.status}`}>
                        {getStatusLabel(heat.status)}
                      </span>
                      {heat.pushToApp && (
                        <span style={{
                          fontSize: '11px',
                          color: 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <Send size={12} />
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                      <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      {heat.scheduledTime}
                      {heat.actualStartTime && ` → ${heat.actualStartTime}`}
                      {heat.actualEndTime && ` - ${heat.actualEndTime}`}
                      <span style={{ margin: '0 8px' }}>•</span>
                      <Users size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      {heat.horses.length} hästar
                      <span style={{ margin: '0 8px' }}>•</span>
                      {heat.track}
                      <span style={{ margin: '0 8px' }}>•</span>
                      {heat.distance} @ {heat.targetPace}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {heat.status === 'scheduled' && (
                    <button
                      className="btn btn-primary"
                      style={{ padding: '8px 16px' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setHeats(prev => prev.map(h =>
                          h.id === heat.id ? {
                            ...h,
                            status: 'in-progress',
                            actualStartTime: new Date().toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' }),
                            horses: h.horses.map(horse => ({ ...horse, status: 'in-progress' }))
                          } : h
                        ));
                        setActiveHeatId(heat.id);
                      }}
                    >
                      <Play size={16} />
                      Starta
                    </button>
                  )}
                  {heat.status === 'in-progress' && (
                    <button
                      className="btn btn-primary"
                      style={{ padding: '8px 16px' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenCompleteHeat(heat);
                      }}
                    >
                      <Check size={16} />
                      Avsluta
                    </button>
                  )}
                  <button
                    className="btn btn-secondary"
                    style={{ padding: '8px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedHeat(heat);
                    }}
                  >
                    <MoreVertical size={18} />
                  </button>
                  {expandedHeats.includes(heat.id) ? (
                    <ChevronUp size={20} style={{ color: 'var(--text-muted)' }} />
                  ) : (
                    <ChevronDown size={20} style={{ color: 'var(--text-muted)' }} />
                  )}
                </div>
              </div>

              {/* Expanded Horse List */}
              {expandedHeats.includes(heat.id) && (
                <div style={{ borderTop: '1px solid var(--border)' }}>
                  <table style={{ width: '100%' }}>
                    <thead>
                      <tr style={{ background: 'var(--background)' }}>
                        <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)' }}>Pos</th>
                        <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)' }}>Häst</th>
                        <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)' }}>Skötare</th>
                        <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)' }}>Tid</th>
                        <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)' }}>Puls</th>
                        <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)' }}>Känsla</th>
                        <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)' }}>Anteckning</th>
                        <th style={{ padding: '12px 20px', textAlign: 'center', fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {heat.horses.map((horse, idx) => (
                        <tr
                          key={horse.id}
                          style={{
                            borderTop: idx > 0 ? '1px solid var(--border-light)' : 'none',
                            background: horse.status === 'in-progress' ? 'rgba(79, 124, 255, 0.05)' : 'white'
                          }}
                        >
                          <td style={{ padding: '12px 20px' }}>
                            <div style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '50%',
                              background: 'var(--background)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: '600',
                              fontSize: '13px'
                            }}>
                              {horse.position}
                            </div>
                          </td>
                          <td style={{ padding: '12px 20px' }}>
                            <div style={{ fontWeight: '500' }}>{horse.name}</div>
                          </td>
                          <td style={{ padding: '12px 20px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                            {horse.groom || '-'}
                          </td>
                          <td style={{ padding: '12px 20px' }}>
                            <span style={{
                              fontWeight: '600',
                              color: horse.time ? 'var(--text-primary)' : 'var(--text-muted)'
                            }}>
                              {horse.time || '-'}
                            </span>
                          </td>
                          <td style={{ padding: '12px 20px' }}>
                            {horse.pulse ? (
                              <span style={{
                                background: horse.pulse > 150 ? 'var(--danger-light)' : 'var(--success-light)',
                                color: horse.pulse > 150 ? 'var(--danger)' : 'var(--success)',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '12px',
                                fontWeight: '500'
                              }}>
                                {horse.pulse} bpm
                              </span>
                            ) : (
                              <span style={{ color: 'var(--text-muted)' }}>-</span>
                            )}
                          </td>
                          <td style={{ padding: '12px 20px' }}>
                            {horse.feel ? (
                              <span style={{
                                background: `${getFeelColor(horse.feel)}15`,
                                color: getFeelColor(horse.feel),
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '12px',
                                fontWeight: '500'
                              }}>
                                {getFeelLabel(horse.feel)}
                              </span>
                            ) : (
                              <span style={{ color: 'var(--text-muted)' }}>-</span>
                            )}
                          </td>
                          <td style={{ padding: '12px 20px', color: 'var(--text-secondary)', fontSize: '13px' }}>
                            {horse.notes || '-'}
                          </td>
                          <td style={{ padding: '12px 20px', textAlign: 'center' }}>
                            {getStatusIcon(horse.status)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Trainer comment section for completed heats */}
                  {heat.status === 'completed' && heat.trainerComment && (
                    <div style={{
                      padding: '16px 20px',
                      borderTop: '1px solid var(--border)',
                      background: 'var(--background)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <MessageSquare size={18} style={{ color: 'var(--text-muted)', marginTop: '2px' }} />
                        <div>
                          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                            Tränarens kommentar
                          </div>
                          <div style={{ fontSize: '14px' }}>{heat.trainerComment}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Heat Detail Modal */}
      {selectedHeat && !showCompleteHeatModal && (
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
        }} onClick={() => setSelectedHeat(null)}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            width: '100%',
            maxWidth: '700px',
            margin: '20px',
            maxHeight: '85vh',
            overflow: 'auto'
          }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <div style={{
                  display: 'inline-block',
                  background: `${getTypeColor(selectedHeat.type)}20`,
                  color: getTypeColor(selectedHeat.type),
                  padding: '4px 12px',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  {getTypeLabel(selectedHeat.type)}
                </div>
                <h2>{selectedHeat.name}</h2>
                <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>
                  {selectedHeat.scheduledTime} • {selectedHeat.track} • {selectedHeat.distance}
                </p>
              </div>
              <button
                onClick={() => setSelectedHeat(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px'
                }}
              >
                <X size={20} style={{ color: 'var(--text-muted)' }} />
              </button>
            </div>

            {/* Heat Info Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
              <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Hästar</div>
                <div style={{ fontSize: '20px', fontWeight: '600' }}>{selectedHeat.horses.length}</div>
              </div>
              <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Distans</div>
                <div style={{ fontSize: '20px', fontWeight: '600' }}>{selectedHeat.distance}</div>
              </div>
              <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Måltempo</div>
                <div style={{ fontSize: '20px', fontWeight: '600' }}>{selectedHeat.targetPace}</div>
              </div>
              <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Kusk</div>
                <div style={{ fontSize: '14px', fontWeight: '600' }}>{selectedHeat.driver}</div>
              </div>
            </div>

            {/* Horses Table */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Hästar i heatet
              </h4>
              <div style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
                {selectedHeat.horses.map((horse, idx) => (
                  <div
                    key={horse.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderTop: idx > 0 ? '1px solid var(--border-light)' : 'none',
                      background: idx % 2 === 0 ? 'white' : 'var(--background)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'var(--primary)15',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '600',
                        fontSize: '12px'
                      }}>
                        {horse.position}
                      </span>
                      <span style={{ fontWeight: '500' }}>{horse.name}</span>
                      {horse.groom && (
                        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                          ({horse.groom})
                        </span>
                      )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      {horse.time && (
                        <span style={{ fontWeight: '600' }}>{horse.time}</span>
                      )}
                      {horse.pulse && (
                        <span style={{
                          background: horse.pulse > 150 ? 'var(--danger-light)' : 'var(--success-light)',
                          color: horse.pulse > 150 ? 'var(--danger)' : 'var(--success)',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}>
                          {horse.pulse} bpm
                        </span>
                      )}
                      {horse.feel && (
                        <span style={{
                          background: `${getFeelColor(horse.feel)}15`,
                          color: getFeelColor(horse.feel),
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}>
                          {getFeelLabel(horse.feel)}
                        </span>
                      )}
                      {getStatusIcon(horse.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trainer Comment */}
            {selectedHeat.trainerComment && (
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>Tränarens kommentar</h4>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  background: 'var(--background)',
                  padding: '12px',
                  borderRadius: '8px'
                }}>
                  {selectedHeat.trainerComment}
                </p>
              </div>
            )}

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {selectedHeat.status === 'scheduled' && (
                <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => {
                  setHeats(prev => prev.map(h =>
                    h.id === selectedHeat.id ? {
                      ...h,
                      status: 'in-progress',
                      actualStartTime: new Date().toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' }),
                      horses: h.horses.map(horse => ({ ...horse, status: 'in-progress' }))
                    } : h
                  ));
                  setActiveHeatId(selectedHeat.id);
                  setSelectedHeat(null);
                }}>
                  <Play size={16} />
                  Starta heat
                </button>
              )}
              {selectedHeat.status === 'in-progress' && (
                <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => {
                  handleOpenCompleteHeat(selectedHeat);
                  setSelectedHeat(null);
                }}>
                  <Check size={16} />
                  Avsluta heat
                </button>
              )}
              {selectedHeat.status === 'completed' && selectedHeat.pushToApp && (
                <button className="btn btn-primary" style={{ flex: 1 }}>
                  <Send size={16} />
                  Pusha till ägare
                </button>
              )}
              <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setSelectedHeat(null)}>
                Stäng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Complete Heat Modal */}
      {showCompleteHeatModal && completeHeatData && (
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
        }} onClick={() => setShowCompleteHeatModal(false)}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '800px',
            margin: '20px',
            maxHeight: '90vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }} onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h2 style={{ marginBottom: '4px' }}>Avsluta heat</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                  {heats.find(h => h.id === completeHeatData.heatId)?.name}
                </p>
              </div>
              <button
                onClick={() => setShowCompleteHeatModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px'
                }}
              >
                <X size={20} style={{ color: 'var(--text-muted)' }} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
              {/* Trainer Comment */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  <MessageSquare size={16} />
                  Övergripande kommentar
                </label>
                <textarea
                  value={completeHeatData.trainerComment}
                  onChange={(e) => setCompleteHeatData(prev => ({
                    ...prev,
                    trainerComment: e.target.value
                  }))}
                  placeholder="Hur gick heatet överlag? Något särskilt att notera?"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    fontSize: '14px',
                    minHeight: '80px',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Delegation Section */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <UserCheck size={16} />
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>Delegera till skötare</span>
                  <span style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    background: 'var(--background)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    Valfritt - kan fyllas i senare
                  </span>
                </div>

                <div style={{
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  {completeHeatData.delegations.map((delegation, idx) => (
                    <div
                      key={delegation.horseId}
                      style={{
                        padding: '16px',
                        borderTop: idx > 0 ? '1px solid var(--border)' : 'none',
                        background: idx % 2 === 0 ? 'white' : 'var(--background)'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '12px'
                      }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'var(--primary)15',
                          color: 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '600',
                          fontSize: '14px'
                        }}>
                          {idx + 1}
                        </div>
                        <span style={{ fontWeight: '600', fontSize: '15px' }}>{delegation.horseName}</span>
                      </div>

                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '12px'
                      }}>
                        {/* Groom Select */}
                        <div>
                          <label style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                            Skötare
                          </label>
                          <select
                            value={delegation.groom}
                            onChange={(e) => {
                              const newDelegations = [...completeHeatData.delegations];
                              newDelegations[idx].groom = e.target.value;
                              setCompleteHeatData(prev => ({ ...prev, delegations: newDelegations }));
                            }}
                            style={{
                              width: '100%',
                              padding: '8px',
                              borderRadius: '6px',
                              border: '1px solid var(--border)',
                              fontSize: '13px',
                              background: 'white'
                            }}
                          >
                            <option value="">Välj skötare</option>
                            {grooms.map(g => (
                              <option key={g.id} value={g.name}>{g.name}</option>
                            ))}
                          </select>
                        </div>

                        {/* Pulse Input */}
                        <div>
                          <label style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                            Puls (bpm)
                          </label>
                          <input
                            type="number"
                            value={delegation.pulse}
                            onChange={(e) => {
                              const newDelegations = [...completeHeatData.delegations];
                              newDelegations[idx].pulse = e.target.value;
                              setCompleteHeatData(prev => ({ ...prev, delegations: newDelegations }));
                            }}
                            placeholder="145"
                            style={{
                              width: '100%',
                              padding: '8px',
                              borderRadius: '6px',
                              border: '1px solid var(--border)',
                              fontSize: '13px'
                            }}
                          />
                        </div>

                        {/* Feel Select */}
                        <div>
                          <label style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                            Känsla
                          </label>
                          <select
                            value={delegation.feel}
                            onChange={(e) => {
                              const newDelegations = [...completeHeatData.delegations];
                              newDelegations[idx].feel = e.target.value;
                              setCompleteHeatData(prev => ({ ...prev, delegations: newDelegations }));
                            }}
                            style={{
                              width: '100%',
                              padding: '8px',
                              borderRadius: '6px',
                              border: '1px solid var(--border)',
                              fontSize: '13px',
                              background: 'white'
                            }}
                          >
                            <option value="">Välj känsla</option>
                            {feelOptions.map(f => (
                              <option key={f.id} value={f.id}>{f.label}</option>
                            ))}
                          </select>
                        </div>

                        {/* Notes Input */}
                        <div>
                          <label style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                            Anteckning
                          </label>
                          <input
                            type="text"
                            value={delegation.notes}
                            onChange={(e) => {
                              const newDelegations = [...completeHeatData.delegations];
                              newDelegations[idx].notes = e.target.value;
                              setCompleteHeatData(prev => ({ ...prev, delegations: newDelegations }));
                            }}
                            placeholder="Kort kommentar"
                            style={{
                              width: '100%',
                              padding: '8px',
                              borderRadius: '6px',
                              border: '1px solid var(--border)',
                              fontSize: '13px'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '16px 24px',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              gap: '12px',
              justifyContent: 'flex-end'
            }}>
              <button
                className="btn btn-secondary"
                onClick={() => setShowCompleteHeatModal(false)}
              >
                Avbryt
              </button>
              <button
                className="btn btn-primary"
                onClick={handleCompleteHeat}
              >
                <Check size={16} />
                Avsluta heat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Heat Modal - Complete Form */}
      {showAddHeatModal && (
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
        }} onClick={() => setShowAddHeatModal(false)}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '700px',
            margin: '20px',
            maxHeight: '90vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }} onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h2 style={{ marginBottom: '4px' }}>Skapa nytt heat</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                  {formatDate(selectedDate)}
                </p>
              </div>
              <button
                onClick={() => setShowAddHeatModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px'
                }}
              >
                <X size={20} style={{ color: 'var(--text-muted)' }} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
              {/* Heat Type Selection */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '14px', fontWeight: '600', display: 'block', marginBottom: '12px' }}>
                  Typ av träning
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {heatTypes.map((type) => (
                    <div
                      key={type.id}
                      onClick={() => setNewHeat(prev => ({ ...prev, type: type.id }))}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: newHeat.type === type.id ? `2px solid ${type.color}` : '2px solid var(--border)',
                        background: newHeat.type === type.id ? `${type.color}10` : 'white',
                        cursor: 'pointer',
                        flex: '1',
                        minWidth: '120px'
                      }}
                    >
                      <div style={{
                        fontWeight: '600',
                        color: newHeat.type === type.id ? type.color : 'var(--text-primary)',
                        marginBottom: '2px'
                      }}>
                        {type.label}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{type.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time and Track */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                    Tid
                  </label>
                  <input
                    type="time"
                    value={newHeat.scheduledTime}
                    onChange={(e) => setNewHeat(prev => ({ ...prev, scheduledTime: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '14px'
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                    Bana
                  </label>
                  <select
                    value={newHeat.track}
                    onChange={(e) => setNewHeat(prev => ({ ...prev, track: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '14px',
                      background: 'white'
                    }}
                  >
                    {tracks.map(track => (
                      <option key={track} value={track}>{track}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                    Distans
                  </label>
                  <input
                    type="text"
                    value={newHeat.distance}
                    onChange={(e) => setNewHeat(prev => ({ ...prev, distance: e.target.value }))}
                    placeholder="2000m"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '14px'
                    }}
                  />
                </div>
              </div>

              {/* Target Pace and Push to App */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                    Måltempo
                  </label>
                  <input
                    type="text"
                    value={newHeat.targetPace}
                    onChange={(e) => setNewHeat(prev => ({ ...prev, targetPace: e.target.value }))}
                    placeholder="1.16"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '14px'
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                    Dela med ägare
                  </label>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    cursor: 'pointer',
                    background: newHeat.pushToApp ? 'var(--primary)08' : 'white'
                  }}>
                    <input
                      type="checkbox"
                      checked={newHeat.pushToApp}
                      onChange={(e) => setNewHeat(prev => ({ ...prev, pushToApp: e.target.checked }))}
                      style={{ width: '18px', height: '18px' }}
                    />
                    <span style={{ fontSize: '14px' }}>Pusha till appen</span>
                    <Send size={14} style={{ color: 'var(--text-muted)', marginLeft: 'auto' }} />
                  </label>
                </div>
              </div>

              {/* Horse Selection */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'block',
                  marginBottom: '12px'
                }}>
                  Välj hästar ({newHeat.selectedHorses.length} valda)
                </label>
                <div style={{
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  maxHeight: '200px',
                  overflowY: 'auto'
                }}>
                  {availableHorses.map((horse, idx) => (
                    <label
                      key={horse.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        borderTop: idx > 0 ? '1px solid var(--border-light)' : 'none',
                        cursor: 'pointer',
                        background: newHeat.selectedHorses.includes(horse.id) ? 'var(--primary)08' : 'white'
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={newHeat.selectedHorses.includes(horse.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setNewHeat(prev => ({
                              ...prev,
                              selectedHorses: [...prev.selectedHorses, horse.id]
                            }));
                          } else {
                            setNewHeat(prev => ({
                              ...prev,
                              selectedHorses: prev.selectedHorses.filter(id => id !== horse.id)
                            }));
                          }
                        }}
                        style={{ width: '18px', height: '18px' }}
                      />
                      <span style={{ fontWeight: '500' }}>{horse.name}</span>
                      {newHeat.selectedHorses.includes(horse.id) && (
                        <span style={{
                          marginLeft: 'auto',
                          fontSize: '12px',
                          color: 'var(--primary)',
                          fontWeight: '600'
                        }}>
                          #{newHeat.selectedHorses.indexOf(horse.id) + 1}
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                  Anteckningar (valfritt)
                </label>
                <textarea
                  value={newHeat.trainerComment}
                  onChange={(e) => setNewHeat(prev => ({ ...prev, trainerComment: e.target.value }))}
                  placeholder="Ev. instruktioner eller mål för heatet"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    fontSize: '14px',
                    minHeight: '80px',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '16px 24px',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              gap: '12px',
              justifyContent: 'flex-end'
            }}>
              <button
                className="btn btn-secondary"
                onClick={() => setShowAddHeatModal(false)}
              >
                Avbryt
              </button>
              <button
                className="btn btn-primary"
                onClick={handleCreateHeat}
                disabled={newHeat.selectedHorses.length === 0}
                style={{
                  opacity: newHeat.selectedHorses.length === 0 ? 0.5 : 1,
                  cursor: newHeat.selectedHorses.length === 0 ? 'not-allowed' : 'pointer'
                }}
              >
                <Plus size={16} />
                Skapa heat
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
