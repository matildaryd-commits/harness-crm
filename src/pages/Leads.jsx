import { useState } from 'react';
import {
  Plus, Search, Filter, MoreVertical, Phone, Mail, MessageCircle,
  User, Calendar, TrendingUp, Star, ChevronRight, ArrowRight,
  Smartphone, Users, Award, Heart
} from 'lucide-react';

export default function Leads() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLead, setSelectedLead] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const pipelineStages = [
    { id: 'new', label: 'Nya leads', color: '#6B7280' },
    { id: 'contacted', label: 'Kontaktade', color: '#3B82F6' },
    { id: 'interested', label: 'Intresserade', color: '#8B5CF6' },
    { id: 'negotiating', label: 'Förhandling', color: '#F59E0B' },
    { id: 'converted', label: 'Konverterade', color: '#22C55E' },
  ];

  const [leads, setLeads] = useState([
    {
      id: 1,
      name: 'Erik Johansson',
      email: 'erik.johansson@email.com',
      phone: '070-123 45 67',
      source: 'app',
      sourceDetail: 'Fan av Deeply Express',
      stage: 'new',
      interestedIn: ['Deeply Express', 'Global Harmony'],
      budget: '50 000 - 100 000 kr',
      ownershipInterest: '10-25%',
      notes: 'Följt stallet i appen i 3 månader. Mycket engagerad.',
      createdAt: '2024-01-25',
      lastContact: null,
      score: 85,
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
      interestedIn: ['Caspian Bro'],
      budget: '100 000 - 200 000 kr',
      ownershipInterest: '25-50%',
      notes: 'Ringde 26/1, mycket intresserad. Ska skicka info om Caspian Bro.',
      createdAt: '2024-01-20',
      lastContact: '2024-01-26',
      score: 72,
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
      interestedIn: ['Mansa Musa Mearas', 'Miami Mearas'],
      budget: '200 000 - 500 000 kr',
      ownershipInterest: '25-50%',
      notes: 'Erfaren hästägare, har ägt 3 travhästar tidigare. Vill ha kvalitetshäst.',
      createdAt: '2024-01-18',
      lastContact: '2024-01-27',
      score: 92,
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
      interestedIn: ['Pargas Sox'],
      budget: '75 000 - 150 000 kr',
      ownershipInterest: '10-25%',
      notes: 'Vill köpa 15% i Pargas Sox. Diskuterar pris och villkor.',
      createdAt: '2024-01-10',
      lastContact: '2024-01-28',
      score: 95,
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
      interestedIn: [],
      budget: '50 000 - 100 000 kr',
      ownershipInterest: '10-25%',
      notes: '',
      createdAt: '2024-01-28',
      lastContact: null,
      score: 45,
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
      interestedIn: ['Optimum Volante', 'Charente Bro'],
      budget: '100 000 - 300 000 kr',
      ownershipInterest: '25-50%',
      notes: 'Träffades på V75. Har stort intresse för unghästar.',
      createdAt: '2024-01-22',
      lastContact: '2024-01-26',
      score: 68,
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
      interestedIn: ['Deeply Express'],
      budget: '200 000+ kr',
      ownershipInterest: '25-50%',
      notes: 'Köpte 25% i Deeply Express. Nöjd kund!',
      createdAt: '2024-01-05',
      lastContact: '2024-01-20',
      score: 100,
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
    { label: 'Nya denna vecka', value: leads.filter(l => l.stage === 'new').length, icon: Plus },
    { label: 'Från appen', value: leads.filter(l => l.source === 'app').length, icon: Smartphone },
    { label: 'Konverterade', value: leads.filter(l => l.stage === 'converted').length, icon: Heart },
  ];

  const moveLead = (leadId, newStage) => {
    setLeads(leads.map(lead =>
      lead.id === leadId ? { ...lead, stage: newStage } : lead
    ));
  };

  return (
    <div className="page-content">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Leads</h1>
          <p>Hantera potentiella ägare och konvertera fans till delägare</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
          <Plus size={18} />
          Lägg till lead
        </button>
      </div>

      {/* Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '24px' }}>
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'var(--primary)15',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <stat.icon size={24} style={{ color: 'var(--primary)' }} />
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

            {/* Stage Cards */}
            <div style={{
              background: 'var(--background)',
              borderRadius: '12px',
              padding: '8px',
              minHeight: '400px'
            }}>
              {getLeadsByStage(stage.id).map((lead) => (
                <div
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  style={{
                    background: 'white',
                    borderRadius: '8px',
                    padding: '12px',
                    marginBottom: '8px',
                    cursor: 'pointer',
                    border: '1px solid var(--border)',
                    transition: 'all 0.15s ease'
                  }}
                >
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
              ))}

              {getLeadsByStage(stage.id).length === 0 && (
                <div style={{
                  padding: '40px 20px',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '13px'
                }}>
                  Inga leads i detta steg
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
                <div style={{ fontSize: '14px' }}>{selectedLead.email}</div>
              </div>
              <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Telefon</div>
                <div style={{ fontSize: '14px' }}>{selectedLead.phone}</div>
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
