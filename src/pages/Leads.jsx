import { useState } from 'react';
import {
  Plus, Search, Filter, MoreVertical, Phone, Mail, MessageCircle,
  User, Calendar, TrendingUp, Star, ChevronRight, ArrowRight,
  Smartphone, Users, Award, Heart, Target, Bell, UserPlus
} from 'lucide-react';

export default function Leads() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLead, setSelectedLead] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [draggedLead, setDraggedLead] = useState(null);
  const [showNewFansPanel, setShowNewFansPanel] = useState(false);

  const pipelineStages = [
    { id: 'new', label: 'Nya leads', color: '#6B7280' },
    { id: 'contacted', label: 'Kontaktade', color: '#3B82F6' },
    { id: 'interested', label: 'Intresserade', color: '#8B5CF6' },
    { id: 'negotiating', label: 'Förhandling', color: '#F59E0B' },
    { id: 'converted', label: 'Konverterade', color: '#22C55E' },
  ];

  // New fans who followed the stable but aren't in pipeline yet
  const [newFans, setNewFans] = useState([
    {
      id: 'fan-1',
      name: 'Emma Karlsson',
      followedAt: '2024-01-28',
      following: ['Deeply Express', 'Global Harmony'],
      engagement: 'high',
      appActivity: '15 likes, 3 kommentarer',
    },
    {
      id: 'fan-2',
      name: 'Oscar Lindqvist',
      followedAt: '2024-01-27',
      following: ['Pargas Sox'],
      engagement: 'medium',
      appActivity: '8 likes',
    },
    {
      id: 'fan-3',
      name: 'Frida Bergman',
      followedAt: '2024-01-26',
      following: ['Mansa Musa Mearas', 'Caspian Bro'],
      engagement: 'high',
      appActivity: '22 likes, 5 kommentarer, delat 2 inlägg',
    },
    {
      id: 'fan-4',
      name: 'Johan Pettersson',
      followedAt: '2024-01-25',
      following: [],
      engagement: 'low',
      appActivity: '2 likes',
    },
  ]);

  const [leads, setLeads] = useState([
    {
      id: 1,
      name: 'Erik Johansson',
      email: 'erik.johansson@email.com',
      phone: '070-123 45 67',
      source: 'app',
      sourceDetail: 'Fan av Deeply Express',
      stage: 'new',
      currentStatus: 'fan', // fan, partOwner, owner
      interestedIn: ['Deeply Express', 'Global Harmony'],
      budget: '50 000 - 100 000 kr',
      ownershipInterest: '10-25%',
      notes: 'Följt stallet i appen i 3 månader. Mycket engagerad.',
      createdAt: '2024-01-25',
      lastContact: null,
      score: 85,
      activeSearches: [
        { type: 'horse', criteria: 'Travhäst, 3-5 år, budget 50-100k', createdAt: '2024-01-20' },
      ],
      activities: [
        { type: 'app', text: 'Började följa stallet', date: '2024-01-15' },
        { type: 'app', text: 'Gillade 12 inlägg', date: '2024-01-20' },
        { type: 'app', text: 'Visade intresse för delägarskap', date: '2024-01-25' },
      ]
    },
    {
      id: 2,
      name: 'Maria Lindgren',
      email: 'maria.l@gmail.com',
      phone: '073-456 78 90',
      source: 'app',
      sourceDetail: 'Hitta häst-matchning',
      stage: 'contacted',
      currentStatus: 'fan',
      interestedIn: ['Caspian Bro'],
      budget: '100 000 - 200 000 kr',
      ownershipInterest: '25-50%',
      notes: 'Ringde 26/1, mycket intresserad. Ska skicka info om Caspian Bro.',
      createdAt: '2024-01-20',
      lastContact: '2024-01-26',
      score: 72,
      activeSearches: [
        { type: 'horse', criteria: 'Unghäst, lovande, budget 100-200k', createdAt: '2024-01-18' },
        { type: 'share', criteria: '25-50% andel i aktiv häst', createdAt: '2024-01-22' },
      ],
      activities: [
        { type: 'app', text: 'Skapade sökning i Hitta häst', date: '2024-01-20' },
        { type: 'call', text: 'Telefonsamtal 15 min', date: '2024-01-26' },
      ]
    },
    {
      id: 3,
      name: 'Anders Björk',
      email: 'anders.bjork@företag.se',
      phone: '076-234 56 78',
      source: 'referral',
      sourceDetail: 'Rekommenderad av Johan Berg',
      stage: 'interested',
      currentStatus: 'partOwner', // Already owns shares in another stable
      interestedIn: ['Mansa Musa Mearas', 'Miami Mearas'],
      budget: '200 000 - 500 000 kr',
      ownershipInterest: '25-50%',
      notes: 'Erfaren hästägare, har ägt 3 travhästar tidigare. Vill ha kvalitetshäst.',
      createdAt: '2024-01-18',
      lastContact: '2024-01-27',
      score: 92,
      activeSearches: [],
      activities: [
        { type: 'referral', text: 'Referens från Johan Berg', date: '2024-01-18' },
        { type: 'email', text: 'Skickade stallpresentation', date: '2024-01-19' },
        { type: 'meeting', text: 'Stallbesök', date: '2024-01-24' },
        { type: 'call', text: 'Uppföljningssamtal', date: '2024-01-27' },
      ]
    },
    {
      id: 4,
      name: 'Sofia Ekström',
      email: 'sofia.ekstrom@mail.com',
      phone: '070-345 67 89',
      source: 'app',
      sourceDetail: 'Fan av Pargas Sox',
      stage: 'negotiating',
      currentStatus: 'fan',
      interestedIn: ['Pargas Sox'],
      budget: '75 000 - 150 000 kr',
      ownershipInterest: '10-25%',
      notes: 'Vill köpa 15% i Pargas Sox. Diskuterar pris och villkor.',
      createdAt: '2024-01-10',
      lastContact: '2024-01-28',
      score: 95,
      activeSearches: [
        { type: 'share', criteria: '10-25% i Pargas Sox specifikt', createdAt: '2024-01-10' },
      ],
      activities: [
        { type: 'app', text: 'Fan sedan 6 månader', date: '2024-01-10' },
        { type: 'email', text: 'Första kontakt', date: '2024-01-12' },
        { type: 'meeting', text: 'Stallbesök', date: '2024-01-17' },
        { type: 'call', text: 'Prisförhandling', date: '2024-01-25' },
        { type: 'email', text: 'Skickade avtalsförslag', date: '2024-01-28' },
      ]
    },
    {
      id: 5,
      name: 'Peter Nilsson',
      email: 'peter.n@hotmail.com',
      phone: '072-567 89 01',
      source: 'app',
      sourceDetail: 'Hitta delägare-matchning',
      stage: 'new',
      currentStatus: 'fan',
      interestedIn: [],
      budget: '50 000 - 100 000 kr',
      ownershipInterest: '10-25%',
      notes: '',
      createdAt: '2024-01-28',
      lastContact: null,
      score: 45,
      activeSearches: [
        { type: 'share', criteria: 'Valfri häst, 10-25%, budget max 100k', createdAt: '2024-01-28' },
      ],
      activities: [
        { type: 'app', text: 'Registrerade sig i appen', date: '2024-01-28' },
        { type: 'app', text: 'Skapade delägar-sökning', date: '2024-01-28' },
      ]
    },
    {
      id: 6,
      name: 'Karin Ström',
      email: 'karin.strom@email.se',
      phone: '073-678 90 12',
      source: 'event',
      sourceDetail: 'V75 Solvalla mingel',
      stage: 'contacted',
      currentStatus: 'owner', // Already owns horses elsewhere
      interestedIn: ['Optimum Volante', 'Charente Bro'],
      budget: '100 000 - 300 000 kr',
      ownershipInterest: '25-50%',
      notes: 'Träffades på V75. Har stort intresse för unghästar.',
      createdAt: '2024-01-22',
      lastContact: '2024-01-26',
      score: 68,
      activeSearches: [],
      activities: [
        { type: 'event', text: 'Möte på V75 Solvalla', date: '2024-01-22' },
        { type: 'email', text: 'Skickade info om unghästarna', date: '2024-01-23' },
        { type: 'call', text: 'Uppföljningssamtal', date: '2024-01-26' },
      ]
    },
    {
      id: 7,
      name: 'Gustav Wallin',
      email: 'gustav@wallin-invest.se',
      phone: '070-789 01 23',
      source: 'referral',
      sourceDetail: 'Via Stall Zet',
      stage: 'converted',
      currentStatus: 'partOwner', // Now a part owner with us!
      interestedIn: ['Deeply Express'],
      budget: '200 000+ kr',
      ownershipInterest: '25-50%',
      notes: 'Köpte 25% i Deeply Express. Nöjd kund!',
      createdAt: '2024-01-05',
      lastContact: '2024-01-20',
      score: 100,
      activeSearches: [],
      activities: [
        { type: 'referral', text: 'Intro via Stall Zet', date: '2024-01-05' },
        { type: 'meeting', text: 'Stallbesök', date: '2024-01-08' },
        { type: 'call', text: 'Förhandling', date: '2024-01-12' },
        { type: 'success', text: 'Avtal signerat - 25% Deeply Express', date: '2024-01-20' },
      ]
    },
  ]);

  const getLeadsByStage = (stageId) => {
    return leads.filter(lead => {
      const matchesStage = lead.stage === stageId;
      const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           lead.email.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStage && matchesSearch;
    });
  };

  const getSourceIcon = (source) => {
    switch (source) {
      case 'app': return <Smartphone size={14} />;
      case 'referral': return <Users size={14} />;
      case 'event': return <Award size={14} />;
      default: return <User size={14} />;
    }
  };

  const getSourceLabel = (source) => {
    switch (source) {
      case 'app': return 'Från appen';
      case 'referral': return 'Referens';
      case 'event': return 'Event';
      default: return 'Annat';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'fan': return { label: 'Fan', color: '#EC4899', bg: '#FDF2F8' };
      case 'partOwner': return { label: 'Delägare', color: '#8B5CF6', bg: '#F3E8FF' };
      case 'owner': return { label: 'Ägare', color: '#22C55E', bg: '#DCFCE7' };
      default: return { label: 'Okänd', color: '#6B7280', bg: '#F3F4F6' };
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'app': return <Smartphone size={12} />;
      case 'call': return <Phone size={12} />;
      case 'email': return <Mail size={12} />;
      case 'meeting': return <Users size={12} />;
      case 'referral': return <Star size={12} />;
      case 'event': return <Award size={12} />;
      case 'success': return <Heart size={12} />;
      default: return <MessageCircle size={12} />;
    }
  };

  const stats = [
    { label: 'Totalt leads', value: leads.length, icon: TrendingUp },
    { label: 'Nya fans', value: newFans.length, icon: Bell, highlight: true },
    { label: 'Från appen', value: leads.filter(l => l.source === 'app').length, icon: Smartphone },
    { label: 'Konverterade', value: leads.filter(l => l.stage === 'converted').length, icon: Heart },
  ];

  const moveLead = (leadId, newStage) => {
    setLeads(leads.map(lead =>
      lead.id === leadId ? { ...lead, stage: newStage } : lead
    ));
  };

  // Drag and drop handlers
  const handleDragStart = (e, lead) => {
    setDraggedLead(lead);
    e.dataTransfer.effectAllowed = 'move';
    e.target.style.opacity = '0.5';
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1';
    setDraggedLead(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, stageId) => {
    e.preventDefault();
    if (draggedLead && draggedLead.stage !== stageId) {
      moveLead(draggedLead.id, stageId);
    }
    setDraggedLead(null);
  };

  // Convert fan to lead
  const convertFanToLead = (fan) => {
    const newLead = {
      id: Date.now(),
      name: fan.name,
      email: '',
      phone: '',
      source: 'app',
      sourceDetail: `Följare sedan ${fan.followedAt}`,
      stage: 'new',
      currentStatus: 'fan',
      interestedIn: fan.following,
      budget: 'Ej angett',
      ownershipInterest: 'Ej angett',
      notes: `App-aktivitet: ${fan.appActivity}`,
      createdAt: new Date().toISOString().split('T')[0],
      lastContact: null,
      score: fan.engagement === 'high' ? 65 : fan.engagement === 'medium' ? 45 : 25,
      activeSearches: [],
      activities: [
        { type: 'app', text: `Började följa stallet`, date: fan.followedAt },
        { type: 'app', text: 'Konverterad till lead', date: new Date().toISOString().split('T')[0] },
      ]
    };
    setLeads([...leads, newLead]);
    setNewFans(newFans.filter(f => f.id !== fan.id));
  };

  return (
    <div className="page-content">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Leads</h1>
          <p>Hantera potentiella ägare och konvertera fans till delägare</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            className={`btn ${showNewFansPanel ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setShowNewFansPanel(!showNewFansPanel)}
            style={{ position: 'relative' }}
          >
            <Bell size={18} />
            Nya fans
            {newFans.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                background: 'var(--danger)',
                color: 'white',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                fontSize: '11px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {newFans.length}
              </span>
            )}
          </button>
          <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
            <Plus size={18} />
            Lägg till lead
          </button>
        </div>
      </div>

      {/* New Fans Panel */}
      {showNewFansPanel && (
        <div className="card" style={{ marginBottom: '24px', border: '2px solid var(--primary)' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bell size={18} style={{ color: 'var(--primary)' }} />
              <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Nya fans som följer stallet</h3>
              <span style={{
                background: 'var(--danger)',
                color: 'white',
                padding: '2px 8px',
                borderRadius: '100px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                {newFans.length} att hantera
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
              Dessa personer har börjat följa stallet i appen. Lägg till dem som leads för att börja konvertera.
            </p>
          </div>
          <div style={{ padding: '16px 20px' }}>
            {newFans.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>
                Inga nya fans att hantera
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                {newFans.map((fan) => (
                  <div key={fan.id} style={{
                    background: 'var(--background)',
                    borderRadius: '8px',
                    padding: '12px',
                    border: '1px solid var(--border)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <div>
                        <div style={{ fontWeight: '600', fontSize: '14px' }}>{fan.name}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                          Följer sedan {fan.followedAt}
                        </div>
                      </div>
                      <span style={{
                        background: fan.engagement === 'high' ? 'var(--success-light)' : fan.engagement === 'medium' ? 'var(--warning-light)' : 'var(--border-light)',
                        color: fan.engagement === 'high' ? 'var(--success)' : fan.engagement === 'medium' ? 'var(--warning)' : 'var(--text-muted)',
                        padding: '2px 8px',
                        borderRadius: '100px',
                        fontSize: '11px',
                        fontWeight: '500'
                      }}>
                        {fan.engagement === 'high' ? 'Hög' : fan.engagement === 'medium' ? 'Medium' : 'Låg'} aktivitet
                      </span>
                    </div>

                    {fan.following.length > 0 && (
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                        <Heart size={12} style={{ display: 'inline', marginRight: '4px' }} />
                        Följer: {fan.following.join(', ')}
                      </div>
                    )}

                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                      {fan.appActivity}
                    </div>

                    <button
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '8px' }}
                      onClick={() => convertFanToLead(fan)}
                    >
                      <UserPlus size={14} />
                      Lägg till som lead
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '24px' }}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              cursor: stat.highlight ? 'pointer' : 'default',
              border: stat.highlight && newFans.length > 0 ? '2px solid var(--danger)' : 'none'
            }}
            onClick={() => stat.highlight && setShowNewFansPanel(true)}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: stat.highlight && newFans.length > 0 ? 'var(--danger-light)' : 'var(--primary)15',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <stat.icon size={24} style={{ color: stat.highlight && newFans.length > 0 ? 'var(--danger)' : 'var(--primary)' }} />
            </div>
            <div>
              <div className="stat-card-value" style={{ fontSize: '24px' }}>{stat.value}</div>
              <div className="stat-card-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ padding: '16px 20px' }}>
          <div className="search-box" style={{ maxWidth: '400px' }}>
            <Search size={18} />
            <input
              type="text"
              placeholder="Sök leads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Pipeline */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${pipelineStages.length}, 1fr)`,
        gap: '16px',
        overflowX: 'auto'
      }}>
        {pipelineStages.map((stage) => (
          <div key={stage.id} style={{ minWidth: '250px' }}>
            {/* Stage Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px',
              padding: '0 4px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: stage.color
              }} />
              <h3 style={{ fontSize: '14px', fontWeight: '600' }}>{stage.label}</h3>
              <span style={{
                background: 'var(--background)',
                padding: '2px 8px',
                borderRadius: '100px',
                fontSize: '12px',
                color: 'var(--text-muted)'
              }}>
                {getLeadsByStage(stage.id).length}
              </span>
            </div>

            {/* Stage Cards - Drop Zone */}
            <div
              style={{
                background: draggedLead && draggedLead.stage !== stage.id ? 'var(--primary)10' : 'var(--background)',
                borderRadius: '12px',
                padding: '8px',
                minHeight: '400px',
                border: draggedLead && draggedLead.stage !== stage.id ? '2px dashed var(--primary)' : '2px solid transparent',
                transition: 'all 0.2s ease'
              }}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, stage.id)}
            >
              {getLeadsByStage(stage.id).map((lead) => {
                const status = getStatusLabel(lead.currentStatus);
                return (
                  <div
                    key={lead.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, lead)}
                    onDragEnd={handleDragEnd}
                    onClick={() => setSelectedLead(lead)}
                    style={{
                      background: 'white',
                      borderRadius: '8px',
                      padding: '12px',
                      marginBottom: '8px',
                      cursor: 'grab',
                      border: '1px solid var(--border)',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {/* Status Label */}
                    <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={{
                        background: status.bg,
                        color: status.color,
                        padding: '2px 8px',
                        borderRadius: '100px',
                        fontSize: '10px',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        {status.label}
                      </span>
                      {lead.activeSearches && lead.activeSearches.length > 0 && (
                        <span style={{
                          background: 'var(--info-light)',
                          color: 'var(--info)',
                          padding: '2px 8px',
                          borderRadius: '100px',
                          fontSize: '10px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <Target size={10} />
                          {lead.activeSearches.length} sökning{lead.activeSearches.length > 1 ? 'ar' : ''}
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <div>
                        <div style={{ fontWeight: '600', fontSize: '14px' }}>{lead.name}</div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '12px',
                          color: 'var(--text-muted)',
                          marginTop: '2px'
                        }}>
                          {getSourceIcon(lead.source)}
                          {getSourceLabel(lead.source)}
                        </div>
                      </div>
                      <div style={{
                        background: lead.score >= 80 ? 'var(--success-light)' : lead.score >= 50 ? 'var(--warning-light)' : 'var(--border-light)',
                        color: lead.score >= 80 ? 'var(--success)' : lead.score >= 50 ? 'var(--warning)' : 'var(--text-muted)',
                        padding: '2px 8px',
                        borderRadius: '100px',
                        fontSize: '11px',
                        fontWeight: '600'
                      }}>
                        {lead.score}%
                      </div>
                    </div>

                    {lead.interestedIn.length > 0 && (
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                        <Heart size={12} style={{ display: 'inline', marginRight: '4px' }} />
                        {lead.interestedIn.slice(0, 2).join(', ')}
                        {lead.interestedIn.length > 2 && ` +${lead.interestedIn.length - 2}`}
                      </div>
                    )}

                    {/* Active Searches Preview */}
                    {lead.activeSearches && lead.activeSearches.length > 0 && (
                      <div style={{
                        fontSize: '11px',
                        color: 'var(--info)',
                        marginBottom: '8px',
                        padding: '6px 8px',
                        background: 'var(--info-light)',
                        borderRadius: '4px'
                      }}>
                        <Target size={10} style={{ display: 'inline', marginRight: '4px' }} />
                        {lead.activeSearches[0].criteria.substring(0, 40)}...
                      </div>
                    )}

                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      {lead.budget}
                    </div>

                    {/* Quick Actions */}
                    {stage.id !== 'converted' && (
                      <div style={{
                        display: 'flex',
                        gap: '4px',
                        marginTop: '12px',
                        paddingTop: '12px',
                        borderTop: '1px solid var(--border-light)'
                      }}>
                        <button
                          style={{
                            flex: 1,
                            padding: '6px',
                            background: 'var(--background)',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-secondary)'
                          }}
                          onClick={(e) => { e.stopPropagation(); }}
                        >
                          <Phone size={14} />
                        </button>
                        <button
                          style={{
                            flex: 1,
                            padding: '6px',
                            background: 'var(--background)',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-secondary)'
                          }}
                          onClick={(e) => { e.stopPropagation(); }}
                        >
                          <Mail size={14} />
                        </button>
                        <button
                          style={{
                            flex: 1,
                            padding: '6px',
                            background: 'var(--primary)',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            gap: '4px',
                            fontSize: '11px'
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = pipelineStages.findIndex(s => s.id === lead.stage);
                            if (currentIndex < pipelineStages.length - 1) {
                              moveLead(lead.id, pipelineStages[currentIndex + 1].id);
                            }
                          }}
                        >
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}

              {getLeadsByStage(stage.id).length === 0 && (
                <div style={{
                  padding: '40px 20px',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '13px'
                }}>
                  {draggedLead ? 'Släpp här' : 'Inga leads i detta steg'}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
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
        }} onClick={() => setSelectedLead(null)}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            width: '100%',
            maxWidth: '600px',
            margin: '20px',
            maxHeight: '80vh',
            overflow: 'auto'
          }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  {(() => {
                    const status = getStatusLabel(selectedLead.currentStatus);
                    return (
                      <span style={{
                        background: status.bg,
                        color: status.color,
                        padding: '4px 10px',
                        borderRadius: '100px',
                        fontSize: '11px',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        {status.label}
                      </span>
                    );
                  })()}
                </div>
                <h2>{selectedLead.name}</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {getSourceIcon(selectedLead.source)}
                  <span>{selectedLead.sourceDetail}</span>
                </div>
              </div>
              <div style={{
                background: selectedLead.score >= 80 ? 'var(--success-light)' : selectedLead.score >= 50 ? 'var(--warning-light)' : 'var(--border-light)',
                color: selectedLead.score >= 80 ? 'var(--success)' : selectedLead.score >= 50 ? 'var(--warning)' : 'var(--text-muted)',
                padding: '6px 12px',
                borderRadius: '100px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Score: {selectedLead.score}%
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>E-post</div>
                <div style={{ fontSize: '14px' }}>{selectedLead.email || 'Ej angett'}</div>
              </div>
              <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Telefon</div>
                <div style={{ fontSize: '14px' }}>{selectedLead.phone || 'Ej angett'}</div>
              </div>
              <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Budget</div>
                <div style={{ fontSize: '14px' }}>{selectedLead.budget}</div>
              </div>
              <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Ägarandel</div>
                <div style={{ fontSize: '14px' }}>{selectedLead.ownershipInterest}</div>
              </div>
            </div>

            {/* Active Searches Section */}
            {selectedLead.activeSearches && selectedLead.activeSearches.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Target size={14} />
                  Aktiva sökningar i matchning
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedLead.activeSearches.map((search, idx) => (
                    <div key={idx} style={{
                      background: 'var(--info-light)',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid var(--info)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{
                          background: 'var(--info)',
                          color: 'white',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '10px',
                          fontWeight: '600',
                          textTransform: 'uppercase'
                        }}>
                          {search.type === 'horse' ? 'Hitta häst' : 'Hitta andel'}
                        </span>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                          Skapad {search.createdAt}
                        </span>
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--text-primary)' }}>
                        {search.criteria}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedLead.interestedIn.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>Intresserad av</h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {selectedLead.interestedIn.map((horse, idx) => (
                    <span key={idx} style={{
                      background: 'var(--primary)15',
                      color: 'var(--primary)',
                      padding: '6px 12px',
                      borderRadius: '100px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}>
                      {horse}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedLead.notes && (
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>Anteckningar</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6' }}>{selectedLead.notes}</p>
              </div>
            )}

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>Aktivitetshistorik</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedLead.activities.map((activity, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 12px',
                    background: 'var(--background)',
                    borderRadius: '8px',
                    fontSize: '13px'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)'
                    }}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <span style={{ flex: 1 }}>{activity.text}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{activity.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn btn-secondary" style={{ flex: 1 }}>
                <Phone size={16} />
                Ring
              </button>
              <button className="btn btn-secondary" style={{ flex: 1 }}>
                <Mail size={16} />
                E-post
              </button>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => setSelectedLead(null)}>
                Stäng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Lead Modal */}
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
            <h2 style={{ marginBottom: '16px' }}>Lägg till ny lead</h2>
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
