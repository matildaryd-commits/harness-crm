import { useState } from 'react';
import {
  Plus, Search, MoreVertical, Phone, Mail, ChevronRight,
  User, Calendar, TrendingUp, Heart, FileText, CreditCard,
  CheckCircle, AlertCircle, Clock, Send, Star, TrendingDown,
  ArrowUpRight, ArrowDownRight
} from 'lucide-react';

export default function Owners() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const owners = [
    {
      id: 1,
      name: 'Johan Zetterlund',
      company: 'Stall Zet AB',
      viaCompany: null,
      type: 'company',
      email: 'johan@stallzet.se',
      phone: '070-123 45 67',
      status: 'active',
      since: '2021-03-15',
      horses: [
        { name: 'Deeply Express', ownership: 50, status: 'active', officialOwner: 'Stall Zet AB' },
      ],
      totalOwnership: 1,
      // ROI - vad kunden tjänat (prispengar minus avgifter)
      roi: { amount: 342500, trend: 'up', percentage: 28 },
      // Avgift per månad
      fee: 12500,
      // Senaste faktura
      lastInvoice: { date: '2024-01-15', paid: true, amount: 12500 },
      lastActivity: '2024-01-28',
      notes: 'Långvarig kund, mycket nöjd. Intresserad av fler andelar.',
      source: 'referral',
      // Ekonomisk historik
      financials: {
        totalPaid: 450000,
        totalEarnings: 792500,
        prizeMoneyShare: 685000,
        bonuses: 107500,
      },
      communications: [
        { type: 'email', text: 'Månadsrapport januari', date: '2024-01-28' },
        { type: 'call', text: 'Diskussion om V75-start', date: '2024-01-25' },
        { type: 'meeting', text: 'Stallbesök', date: '2024-01-15' },
      ]
    },
    {
      id: 2,
      name: 'Stefan Ringström',
      company: 'SRF Stable AB',
      viaCompany: null,
      type: 'company',
      email: 'stefan@srfstable.se',
      phone: '073-234 56 78',
      status: 'active',
      since: '2022-06-01',
      horses: [
        { name: 'Deeply Express', ownership: 50, status: 'active', officialOwner: 'SRF Stable AB' },
      ],
      totalOwnership: 1,
      roi: { amount: 285000, trend: 'up', percentage: 22 },
      fee: 12500,
      lastInvoice: { date: '2024-01-15', paid: true, amount: 12500 },
      lastActivity: '2024-01-27',
      notes: 'Professionellt stall, bra kommunikation.',
      source: 'direct',
      financials: {
        totalPaid: 375000,
        totalEarnings: 660000,
        prizeMoneyShare: 570000,
        bonuses: 90000,
      },
      communications: [
        { type: 'email', text: 'Månadsrapport januari', date: '2024-01-28' },
        { type: 'app', text: 'Kommenterade träningsuppdatering', date: '2024-01-27' },
      ]
    },
    {
      id: 3,
      name: 'Maria Ek',
      company: 'Stall Global AB',
      viaCompany: null,
      type: 'company',
      email: 'maria@stallglobal.com',
      phone: '076-345 67 89',
      status: 'active',
      since: '2020-09-01',
      horses: [
        { name: 'Global Harmony', ownership: 100, status: 'active', officialOwner: 'Stall Global AB' },
        { name: 'Global Himalaya', ownership: 100, status: 'active', officialOwner: 'Stall Global AB' },
        { name: 'Global Holy Ground', ownership: 100, status: 'resting', officialOwner: 'Stall Global AB' },
      ],
      totalOwnership: 3,
      roi: { amount: 1850000, trend: 'up', percentage: 45 },
      fee: 45000,
      lastInvoice: { date: '2024-01-20', paid: true, amount: 45000 },
      lastActivity: '2024-01-28',
      notes: 'Stor kund med flera hästar. VIP-behandling.',
      source: 'referral',
      financials: {
        totalPaid: 1800000,
        totalEarnings: 3650000,
        prizeMoneyShare: 3200000,
        bonuses: 450000,
      },
      communications: [
        { type: 'email', text: 'Månadsrapport januari', date: '2024-01-28' },
        { type: 'meeting', text: 'Kvartalsmöte', date: '2024-01-20' },
        { type: 'call', text: 'Diskussion om ny häst', date: '2024-01-18' },
      ]
    },
    {
      id: 4,
      name: 'Anders Pargas',
      company: 'Pargas Racing Oy',
      viaCompany: 'OfCourse KB',
      type: 'company',
      email: 'anders@pargasracing.fi',
      phone: '+358 40 123 4567',
      status: 'active',
      since: '2019-04-01',
      horses: [
        { name: 'Pargas Sox', ownership: 50, status: 'active', officialOwner: 'OfCourse KB' },
      ],
      totalOwnership: 1,
      roi: { amount: 425000, trend: 'up', percentage: 52 },
      fee: 7500,
      lastInvoice: { date: '2024-01-10', paid: true, amount: 7500 },
      lastActivity: '2024-01-26',
      notes: 'Finsk ägare, kommunicerar på engelska. Äger via OfCourse KB.',
      source: 'direct',
      financials: {
        totalPaid: 450000,
        totalEarnings: 875000,
        prizeMoneyShare: 820000,
        bonuses: 55000,
      },
      communications: [
        { type: 'email', text: 'Monthly report January', date: '2024-01-28' },
        { type: 'app', text: 'Liked training update', date: '2024-01-26' },
      ]
    },
    {
      id: 5,
      name: 'Matilda Rydow',
      company: 'Klurix AB',
      viaCompany: 'OfCourse KB',
      type: 'company',
      email: 'matilda@klurix.se',
      phone: '070-456 78 90',
      status: 'active',
      since: '2023-02-15',
      horses: [
        { name: 'Pargas Sox', ownership: 25, status: 'active', officialOwner: 'OfCourse KB' },
      ],
      totalOwnership: 1,
      roi: { amount: 78500, trend: 'up', percentage: 35 },
      fee: 3750,
      lastInvoice: { date: '2024-01-10', paid: true, amount: 3750 },
      lastActivity: '2024-01-25',
      notes: 'Äger via OfCourse KB. Engagerad i appen.',
      source: 'app',
      financials: {
        totalPaid: 82500,
        totalEarnings: 161000,
        prizeMoneyShare: 152000,
        bonuses: 9000,
      },
      communications: [
        { type: 'email', text: 'Månadsrapport januari', date: '2024-01-28' },
        { type: 'app', text: 'Frågade om V75-chansen', date: '2024-01-25' },
      ]
    },
    {
      id: 6,
      name: 'Karl Lindgren',
      company: null,
      viaCompany: 'OfCourse KB',
      type: 'private',
      email: 'karl.lindgren@email.se',
      phone: '070-567 89 01',
      status: 'active',
      since: '2023-04-01',
      horses: [
        { name: 'Pargas Sox', ownership: 25, status: 'active', officialOwner: 'OfCourse KB' },
      ],
      totalOwnership: 1,
      roi: { amount: 62000, trend: 'up', percentage: 28 },
      fee: 3750,
      lastInvoice: { date: '2024-01-10', paid: true, amount: 3750 },
      lastActivity: '2024-01-24',
      notes: 'Privatperson som äger via OfCourse KB. Första hästen.',
      source: 'app',
      financials: {
        totalPaid: 67500,
        totalEarnings: 129500,
        prizeMoneyShare: 122000,
        bonuses: 7500,
      },
      communications: [
        { type: 'email', text: 'Månadsrapport januari', date: '2024-01-28' },
        { type: 'app', text: 'Kommenterade lopp', date: '2024-01-24' },
      ]
    },
    {
      id: 7,
      name: 'Erik Broström',
      company: 'Bro Stables AB',
      viaCompany: null,
      type: 'company',
      email: 'erik@brostables.se',
      phone: '072-678 90 12',
      status: 'active',
      since: '2022-01-01',
      horses: [
        { name: 'Caspian Bro', ownership: 100, status: 'active', officialOwner: 'Bro Stables AB' },
        { name: 'Charente Bro', ownership: 100, status: 'active', officialOwner: 'Bro Stables AB' },
        { name: 'Michigan Bro', ownership: 100, status: 'active', officialOwner: 'Bro Stables AB' },
        { name: 'Panama Bro', ownership: 100, status: 'resting', officialOwner: 'Bro Stables AB' },
      ],
      totalOwnership: 4,
      roi: { amount: -125000, trend: 'down', percentage: -8 },
      fee: 60000,
      lastInvoice: { date: '2024-01-01', paid: false, amount: 60000, dueDate: '2024-01-31' },
      lastActivity: '2024-01-28',
      notes: 'Stort uppfödningsstall. Faktura förfaller 31/1.',
      source: 'direct',
      financials: {
        totalPaid: 1440000,
        totalEarnings: 1315000,
        prizeMoneyShare: 1250000,
        bonuses: 65000,
      },
      communications: [
        { type: 'email', text: 'Fakturapåminnelse', date: '2024-01-28' },
        { type: 'call', text: 'Diskussion om unghästar', date: '2024-01-22' },
      ]
    },
    {
      id: 8,
      name: 'Lisa Mearas',
      company: 'Stall Mearas HB',
      viaCompany: null,
      type: 'company',
      email: 'lisa@stallmearas.se',
      phone: '073-789 01 23',
      status: 'active',
      since: '2021-08-01',
      horses: [
        { name: 'Mansa Musa Mearas', ownership: 60, status: 'active', officialOwner: 'Stall Mearas HB' },
        { name: 'Miami Mearas', ownership: 100, status: 'active', officialOwner: 'Stall Mearas HB' },
        { name: 'Lupin Mearas', ownership: 100, status: 'active', officialOwner: 'Stall Mearas HB' },
      ],
      totalOwnership: 3,
      roi: { amount: 520000, trend: 'up', percentage: 38 },
      fee: 32000,
      lastInvoice: { date: '2024-01-15', paid: true, amount: 32000 },
      lastActivity: '2024-01-27',
      notes: 'Fokus på Muscle Hill-avkommor. Långsiktig plan.',
      source: 'referral',
      financials: {
        totalPaid: 896000,
        totalEarnings: 1416000,
        prizeMoneyShare: 1320000,
        bonuses: 96000,
      },
      communications: [
        { type: 'email', text: 'Månadsrapport januari', date: '2024-01-28' },
        { type: 'meeting', text: 'Avelsplanering 2024', date: '2024-01-27' },
      ]
    },
    {
      id: 9,
      name: 'Johan Svensson',
      company: null,
      viaCompany: 'Easy KB',
      type: 'private',
      email: 'johan.svensson@gmail.com',
      phone: '070-890 12 34',
      status: 'active',
      since: '2023-06-01',
      horses: [
        { name: 'Mansa Musa Mearas', ownership: 40, status: 'active', officialOwner: 'Easy KB' },
      ],
      totalOwnership: 1,
      roi: { amount: 145000, trend: 'up', percentage: 62 },
      fee: 6000,
      lastInvoice: { date: '2024-01-15', paid: true, amount: 6000 },
      lastActivity: '2024-01-24',
      notes: 'Köpte andel via Hitta häst i appen. Äger via Easy KB.',
      source: 'app',
      financials: {
        totalPaid: 90000,
        totalEarnings: 235000,
        prizeMoneyShare: 220000,
        bonuses: 15000,
      },
      communications: [
        { type: 'email', text: 'Månadsrapport januari', date: '2024-01-28' },
        { type: 'app', text: 'Frågade om nästa start', date: '2024-01-24' },
      ]
    },
    {
      id: 10,
      name: 'Mikael Grahn',
      company: 'Team Grazzhopper AB',
      viaCompany: null,
      type: 'syndicate',
      email: 'mikael@teamgrazzhopper.se',
      phone: '076-901 23 45',
      status: 'active',
      since: '2020-01-01',
      horses: [
        { name: 'Grazzhopper', ownership: 100, status: 'resting', officialOwner: 'Team Grazzhopper AB' },
      ],
      totalOwnership: 1,
      roi: { amount: 2850000, trend: 'up', percentage: 158 },
      fee: 15000,
      lastInvoice: { date: '2024-01-05', paid: true, amount: 15000 },
      lastActivity: '2024-01-20',
      notes: 'Syndikat med 8 medlemmar. Mikael är kontaktperson.',
      source: 'direct',
      financials: {
        totalPaid: 720000,
        totalEarnings: 3570000,
        prizeMoneyShare: 3400000,
        bonuses: 170000,
      },
      communications: [
        { type: 'email', text: 'Uppdatering om skadestatus', date: '2024-01-20' },
        { type: 'call', text: 'Veterinärrapport', date: '2024-01-15' },
      ]
    },
    {
      id: 11,
      name: 'Per Volante',
      company: 'Stall Volante AB',
      viaCompany: null,
      type: 'company',
      email: 'per@stallvolante.se',
      phone: '070-012 34 56',
      status: 'inactive',
      since: '2022-03-01',
      horses: [
        { name: 'Optimum Volante', ownership: 100, status: 'active', officialOwner: 'Stall Volante AB' },
      ],
      totalOwnership: 1,
      roi: { amount: -45000, trend: 'down', percentage: -18 },
      fee: 10000,
      lastInvoice: { date: '2023-12-15', paid: false, amount: 10000, dueDate: '2024-01-15' },
      lastActivity: '2024-01-10',
      notes: 'Har inte svarat på samtal. Följ upp betalning.',
      source: 'referral',
      financials: {
        totalPaid: 220000,
        totalEarnings: 175000,
        prizeMoneyShare: 165000,
        bonuses: 10000,
      },
      communications: [
        { type: 'email', text: 'Betalningspåminnelse 2', date: '2024-01-25' },
        { type: 'call', text: 'Inget svar', date: '2024-01-20' },
        { type: 'email', text: 'Betalningspåminnelse 1', date: '2024-01-15' },
      ]
    },
  ];

  const stats = [
    { label: 'Totalt ägare', value: owners.length, icon: User },
    { label: 'Aktiva', value: owners.filter(o => o.status === 'active').length, icon: CheckCircle },
    { label: 'Från appen', value: owners.filter(o => o.source === 'app').length, icon: Heart },
    { label: 'Obetalda', value: owners.filter(o => !o.lastInvoice.paid).length, icon: AlertCircle },
  ];

  const filteredOwners = owners.filter(owner => {
    const matchesSearch = owner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         owner.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         owner.horses.some(h => h.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTab = activeTab === 'all' ||
                      (activeTab === 'company' && owner.type === 'company') ||
                      (activeTab === 'private' && owner.type === 'private') ||
                      (activeTab === 'pending' && !owner.lastInvoice.paid);
    return matchesSearch && matchesTab;
  });

  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)} mkr`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)} tkr`;
    }
    return `${amount} kr`;
  };

  const getInvoiceStatusBadge = (invoice) => {
    if (invoice.paid) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <span className="status-badge active">Betald</span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{invoice.date}</span>
        </div>
      );
    } else {
      const isOverdue = invoice.dueDate && new Date(invoice.dueDate) < new Date();
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <span className={`status-badge ${isOverdue ? 'eliminated' : 'in-progress'}`}>
            {isOverdue ? 'Förfallen' : 'Obetald'}
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
            {isOverdue ? `Förföll ${invoice.dueDate}` : `Förfaller ${invoice.dueDate}`}
          </span>
        </div>
      );
    }
  };

  const getRoiBadge = (roi) => {
    const isPositive = roi.amount >= 0;
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{
          fontWeight: '600',
          color: isPositive ? 'var(--success)' : 'var(--danger)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {isPositive ? '+' : ''}{formatCurrency(roi.amount)}
        </span>
        <span style={{
          background: isPositive ? 'var(--success-light)' : 'var(--danger-light)',
          color: isPositive ? 'var(--success)' : 'var(--danger)',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '11px',
          fontWeight: '600'
        }}>
          {isPositive ? '+' : ''}{roi.percentage}%
        </span>
      </div>
    );
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'company': return 'Företag';
      case 'private': return 'Privat';
      case 'syndicate': return 'Syndikat';
      default: return type;
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'email': return <Mail size={12} />;
      case 'call': return <Phone size={12} />;
      case 'meeting': return <User size={12} />;
      case 'app': return <Heart size={12} />;
      default: return <FileText size={12} />;
    }
  };

  return (
    <div className="page-content">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Ägare</h1>
          <p>Hantera hästägare och delägare</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-secondary">
            <Send size={18} />
            Skicka månadsrapport
          </button>
          <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
            <Plus size={18} />
            Lägg till ägare
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '24px' }}>
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: stat.icon === AlertCircle ? 'var(--danger-light)' : 'var(--primary)15',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <stat.icon size={24} style={{ color: stat.icon === AlertCircle ? 'var(--danger)' : 'var(--primary)' }} />
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
        <div style={{ padding: '16px 20px', display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="search-box" style={{ maxWidth: '400px' }}>
            <Search size={18} />
            <input
              type="text"
              placeholder="Sök ägare eller häst..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { id: 'all', label: 'Alla' },
              { id: 'company', label: 'Företag' },
              { id: 'private', label: 'Privat' },
              { id: 'pending', label: 'Obetalda' },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab(tab.id)}
                style={{ padding: '8px 16px' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Owners Table */}
      <div className="card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Ägare</th>
                <th>Hästar</th>
                <th>ROI</th>
                <th>Avg/mån</th>
                <th>Senaste faktura</th>
                <th>Senast aktiv</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredOwners.map((owner) => (
                <tr key={owner.id} onClick={() => setSelectedOwner(owner)} style={{ cursor: 'pointer' }}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        background: owner.status === 'active' ? 'var(--primary)15' : 'var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: owner.status === 'active' ? 'var(--primary)' : 'var(--text-muted)'
                      }}>
                        {owner.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div style={{ fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {owner.name}
                          {owner.source === 'app' && (
                            <Heart size={12} style={{ color: 'var(--danger)' }} />
                          )}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          {owner.company && <span>{owner.company}</span>}
                          {!owner.company && <span>{getTypeLabel(owner.type)}</span>}
                          {owner.viaCompany && (
                            <span style={{
                              background: 'var(--warning-light)',
                              color: 'var(--warning)',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              fontSize: '10px',
                              fontWeight: '500'
                            }}>
                              via {owner.viaCompany}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: '13px' }}>
                      {owner.horses.slice(0, 2).map((horse, idx) => (
                        <div key={idx}>
                          {horse.name} ({horse.ownership}%)
                        </div>
                      ))}
                      {owner.horses.length > 2 && (
                        <div style={{ color: 'var(--text-muted)' }}>
                          +{owner.horses.length - 2} till
                        </div>
                      )}
                    </div>
                  </td>
                  <td>{getRoiBadge(owner.roi)}</td>
                  <td style={{ fontWeight: '500' }}>{formatCurrency(owner.fee)}</td>
                  <td>{getInvoiceStatusBadge(owner.lastInvoice)}</td>
                  <td style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{owner.lastActivity}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      style={{ padding: '6px', minWidth: 'auto' }}
                      onClick={(e) => e.stopPropagation()}
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

      {/* Owner Detail Modal */}
      {selectedOwner && (
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
        }} onClick={() => setSelectedOwner(null)}>
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <h2>{selectedOwner.name}</h2>
                  {selectedOwner.source === 'app' && (
                    <span style={{
                      background: 'var(--danger-light)',
                      color: 'var(--danger)',
                      padding: '4px 8px',
                      borderRadius: '100px',
                      fontSize: '11px',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Heart size={10} /> Från appen
                    </span>
                  )}
                  {selectedOwner.viaCompany && (
                    <span style={{
                      background: 'var(--warning-light)',
                      color: 'var(--warning)',
                      padding: '4px 8px',
                      borderRadius: '100px',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      via {selectedOwner.viaCompany}
                    </span>
                  )}
                </div>
                <div style={{ color: 'var(--text-muted)', marginTop: '4px' }}>
                  {selectedOwner.company && <span style={{ fontWeight: '500' }}>{selectedOwner.company}</span>}
                  {selectedOwner.company && ' • '}
                  {getTypeLabel(selectedOwner.type)} • Kund sedan {selectedOwner.since}
                </div>
              </div>
              {getInvoiceStatusBadge(selectedOwner.lastInvoice)}
            </div>

            {/* Contact Info */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
              <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>E-post</div>
                <div style={{ fontSize: '14px' }}>{selectedOwner.email}</div>
              </div>
              <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Telefon</div>
                <div style={{ fontSize: '14px' }}>{selectedOwner.phone}</div>
              </div>
            </div>

            {/* Financial Summary */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>Ekonomisk översikt</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                <div style={{
                  background: selectedOwner.roi.amount >= 0 ? 'var(--success-light)' : 'var(--danger-light)',
                  padding: '16px',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>ROI</div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: selectedOwner.roi.amount >= 0 ? 'var(--success)' : 'var(--danger)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}>
                    {selectedOwner.roi.amount >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    {selectedOwner.roi.amount >= 0 ? '+' : ''}{formatCurrency(selectedOwner.roi.amount)}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: selectedOwner.roi.amount >= 0 ? 'var(--success)' : 'var(--danger)',
                    marginTop: '2px'
                  }}>
                    {selectedOwner.roi.amount >= 0 ? '+' : ''}{selectedOwner.roi.percentage}%
                  </div>
                </div>
                <div style={{ background: 'var(--background)', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Prispengar</div>
                  <div style={{ fontSize: '18px', fontWeight: '600' }}>{formatCurrency(selectedOwner.financials.prizeMoneyShare)}</div>
                </div>
                <div style={{ background: 'var(--background)', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Betalat totalt</div>
                  <div style={{ fontSize: '18px', fontWeight: '600' }}>{formatCurrency(selectedOwner.financials.totalPaid)}</div>
                </div>
                <div style={{ background: 'var(--background)', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Månadsavgift</div>
                  <div style={{ fontSize: '18px', fontWeight: '600' }}>{formatCurrency(selectedOwner.fee)}</div>
                </div>
              </div>
            </div>

            {/* Horses */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Hästar ({selectedOwner.horses.length})
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedOwner.horses.map((horse, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px',
                    background: 'var(--background)',
                    borderRadius: '8px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'var(--text-secondary)'
                      }}>
                        {horse.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div style={{ fontWeight: '500' }}>{horse.name}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                          {horse.ownership}% ägarandel
                          {horse.officialOwner && horse.officialOwner !== selectedOwner.company && (
                            <span style={{ marginLeft: '4px' }}>
                              • Officiellt: {horse.officialOwner}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className={`status-badge ${horse.status === 'active' ? 'active' : 'resting'}`}>
                      {horse.status === 'active' ? 'Aktiv' : 'Vilar'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            {selectedOwner.notes && (
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>Anteckningar</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', background: 'var(--background)', padding: '12px', borderRadius: '8px' }}>
                  {selectedOwner.notes}
                </p>
              </div>
            )}

            {/* Communication History */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>Kommunikationshistorik</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedOwner.communications.map((comm, idx) => (
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
                      {getActivityIcon(comm.type)}
                    </div>
                    <span style={{ flex: 1 }}>{comm.text}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{comm.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn btn-secondary" style={{ flex: 1 }}>
                <Phone size={16} />
                Ring
              </button>
              <button className="btn btn-secondary" style={{ flex: 1 }}>
                <Mail size={16} />
                E-post
              </button>
              <button className="btn btn-secondary" style={{ flex: 1 }}>
                <FileText size={16} />
                Faktura
              </button>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => setSelectedOwner(null)}>
                Stäng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Owner Modal */}
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
            <h2 style={{ marginBottom: '16px' }}>Lägg till ny ägare</h2>
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
