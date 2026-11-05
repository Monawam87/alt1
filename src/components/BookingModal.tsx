import { useState, type FormEvent } from 'react';
import { X, Calendar, Clock, Users, User, Phone, Mail, FileText, CheckCircle2, Sparkles, type LucideIcon } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';

type VisitType = 'individual' | 'family' | 'group' | 'school';

export default function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t } = useLang();
  const b = t.booking;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    visitors: '1',
    visitType: 'individual' as VisitType,
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = b.required;
    if (!form.phone.trim()) {
      e.phone = b.required;
    } else if (!/^0?\d{8,12}$/.test(form.phone.replace(/\s/g, ''))) {
      e.phone = b.invalidPhone;
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = b.invalidEmail;
    }
    if (!form.date) e.date = b.required;
    if (!form.time) e.time = b.required;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setErrors({});
      setForm({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        visitors: '1',
        visitType: 'individual',
        notes: '',
      });
    }, 300);
  };

  const visitTypes: { key: VisitType; label: string }[] = [
    { key: 'individual', label: b.typeIndividual },
    { key: 'family', label: b.typeFamily },
    { key: 'group', label: b.typeGroup },
    { key: 'school', label: b.typeSchool },
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
  ];

  const today = new Date().toISOString().split('T')[0];

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-500 ${
        open ? 'visible' : 'invisible'
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-earth-950/70 backdrop-blur-md transition-opacity duration-500 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-4 sm:p-6 ${
          open ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500`}
      >
        <div
          className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto scrollbar-hide bg-white rounded-3xl shadow-2xl transition-all duration-500 ${
            open ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
          }`}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-gradient-to-l from-earth-800 to-earth-900 px-6 py-5 flex items-center justify-between rounded-t-3xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sand-400/20 flex items-center justify-center">
                <Calendar size={22} className="text-sand-300" />
              </div>
              <div>
                <h3 className="font-display text-lg text-white">{b.title}</h3>
                <p className="text-sand-200/50 text-xs">{b.subtitle}</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label={b.cancel}
            >
              <X size={20} />
            </button>
          </div>

          {submitted ? (
            /* Success state */
            <div className="px-6 py-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-50 mb-5 animate-scale-in">
                <CheckCircle2 size={44} className="text-teal-500" />
              </div>
              <h4 className="font-display text-2xl text-earth-900 mb-3">{b.successTitle}</h4>
              <p className="text-earth-500 leading-relaxed mb-6">{b.successMessage}</p>
              <button
                onClick={handleClose}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-sand-400 to-sand-500 text-earth-900 font-bold hover:shadow-lg hover:shadow-sand-500/30 transition-all duration-300"
              >
                {b.closeSuccess}
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name */}
              <Field label={b.name} icon={User} error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={b.namePlaceholder}
                  className="form-input"
                />
              </Field>

              {/* Phone + Email */}
              <div className="grid grid-cols-2 gap-4">
                <Field label={b.phone} icon={Phone} error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={b.phonePlaceholder}
                    dir="ltr"
                    className="form-input text-right"
                  />
                </Field>
                <Field label={b.email} icon={Mail} error={errors.email} optional>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={b.emailPlaceholder}
                    dir="ltr"
                    className="form-input text-right"
                  />
                </Field>
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-2 gap-4">
                <Field label={b.date} icon={Calendar} error={errors.date}>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="form-input"
                  />
                </Field>
                <Field label={b.time} icon={Clock} error={errors.time}>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="form-input"
                  >
                    <option value="">{b.selectTime}</option>
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>{ts}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Visitors + Visit Type */}
              <div className="grid grid-cols-2 gap-4">
                <Field label={b.visitors} icon={Users}>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={form.visitors}
                    onChange={(e) => setForm({ ...form, visitors: e.target.value })}
                    className="form-input"
                  />
                </Field>
                <Field label={b.visitType} icon={Sparkles}>
                  <select
                    value={form.visitType}
                    onChange={(e) => setForm({ ...form, visitType: e.target.value as VisitType })}
                    className="form-input"
                  >
                    {visitTypes.map((vt) => (
                      <option key={vt.key} value={vt.key}>{vt.label}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Notes */}
              <Field label={b.notes} icon={FileText} optional>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder={b.notesPlaceholder}
                  rows={3}
                  className="form-input resize-none"
                />
              </Field>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-3 rounded-full border-2 border-earth-200 text-earth-600 font-bold hover:bg-earth-50 transition-all duration-300"
                >
                  {b.cancel}
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-full bg-gradient-to-r from-sand-400 to-sand-500 text-earth-900 font-bold hover:shadow-lg hover:shadow-sand-500/30 transition-all duration-300"
                >
                  {b.submit}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Form input styles */}
      <style>{`
        .form-input {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border-radius: 0.75rem;
          border: 1.5px solid #e8d8c0;
          background: #fbf7f0;
          color: #4a3a2f;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.2s ease;
        }
        .form-input:focus {
          border-color: #c9a86a;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(201, 168, 106, 0.15);
        }
        .form-input::placeholder {
          color: #b8a396;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  icon: Icon,
  error,
  optional,
  children,
}: {
  label: string;
  icon: LucideIcon;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-1.5 text-earth-700 text-sm font-bold mb-1.5">
        <Icon size={15} className="text-earth-400" />
        {label}
        {optional && <span className="text-earth-300 font-normal text-xs">— optional</span>}
      </span>
      {children}
      {error && <span className="block mt-1 text-clay-500 text-xs font-medium">{error}</span>}
    </label>
  );
}
