import { useState } from 'react';
import type { FormEvent } from 'react';
import { Send, ShieldCheck, Mail, MapPin, Phone, ChevronDown, Award, CheckCircle, Package, Truck, Compass, Coins, Users } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [project, setProject] = useState('residential');
  
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  const faqs = [
    {
      q: "Which HDMR board is best for modular kitchens in Rishikesh?",
      a: "We highly recommend Century Prowud or Action TESA HDMR boards for modular kitchens in Rishikesh's climate. They offer maximum density and moisture resistance, preventing swelling and warping over decades of use."
    },
    {
      q: "What is the difference between HDMR and normal commercial plywood?",
      a: "HDMR (High-Density Moisture Resistant) boards are made by compressing fine wood fibers under high pressure, providing absolute water resistance and density. Commercial plywood consists of layered veneers which can split or swell in wet zones. HDMR is superior for kitchens, vanities, and bathroom units."
    },
    {
      q: "Do you manufacture custom wooden doors and almirah cabinets in Rishikesh?",
      a: "Yes! At Jagdamba Timber Works, we design and manufacture bespoke veneered doors, membranic entries, and custom wardrobe panels at our local studio workshop, tailored to your site measurements and styling choice."
    },
    {
      q: "Do you supply premium laminates and cabinet hardware to Haridwar & Dehradun?",
      a: "Yes. In addition to serving Rishikesh, we regularly distribute premium decorative laminates (Virgo, Black Cobra) and silent-close cabinet fittings (Mazix, HEPO) to building projects and carpenters across Haridwar, Dehradun, and Uttarakhand."
    },
    {
      q: "Which plywood grade should be used for bedroom wardrobes and TV units?",
      a: "For bedroom wardrobes and TV units, we recommend MR (Moisture Resistant) or BWP (Boiling Water Proof) grade plywood, combined with premium wood veneers or structural laminates to resist temperature changes."
    }
  ];

  const trustSignals = [
    {
      icon: <Award className="w-5 h-5 text-amber-200" />,
      title: "Retail & Wholesale",
      desc: "Direct volume pricing for major commercial builders, architects, carpenters, and residential homeowners."
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-amber-200" />,
      title: "Genuine Products",
      desc: "Authorized partner channels with verified manufacturer warranties and official batch certifications."
    },
    {
      icon: <Compass className="w-5 h-5 text-amber-200" />,
      title: "Jagdamba Doors Manufacturer",
      desc: "Custom sizing, engineered solid cores, and bespoke veneers designed and manufactured in our local workshop."
    },
    {
      icon: <Package className="w-5 h-5 text-amber-200" />,
      title: "Trusted Brands",
      desc: "Authorized dealership status with Century Ply, Action TESA, Virgo Laminates, Black Cobra, and HEPO fittings."
    },
    {
      icon: <Coins className="w-5 h-5 text-amber-200" />,
      title: "Competitive Pricing",
      desc: "Highly competitive sourcing prices on premium wood panels and hardware fittings."
    },
    {
      icon: <Users className="w-5 h-5 text-amber-200" />,
      title: "Expert Guidance",
      desc: "Over 40 years of combined master woodworking and design engineering expertise to guide your project."
    },
    {
      icon: <Truck className="w-5 h-5 text-amber-200" />,
      title: "Fast Delivery",
      desc: "Prompt logistics and direct transport networks delivering directly to building sites."
    },
    {
      icon: <MapPin className="w-5 h-5 text-amber-200" />,
      title: "Serving Rishikesh & Nearby",
      desc: "Prompt supply routes serving Gumaniwala, Tapovan, Haridwar, Dehradun, and surrounding Uttarakhand zones."
    }
  ];

  return (
    <>
      {/* 1. Slogan Divider Section */}
      <section className="relative bg-black py-40 border-t border-white/5 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="sunbeam" style={{ left: '10%', transform: 'skewX(-15deg)' }} />
          <div className="sunbeam" style={{ left: '70%', transform: 'skewX(-15deg)' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="font-serif-display text-4xl md:text-6xl font-light text-white/90 leading-tight">
            "We don't sell materials.<br />
            <span className="italic text-amber-200/90 font-light">We help you build a home.</span>"
          </p>
        </div>
      </section>

      {/* 2. FAQ Accordion Section (Local SEO Goldmine) */}
      <section id="faq" className="relative bg-black py-32 border-t border-white/5 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 w-full text-center">
          
          <div className="mb-16">
            <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-medium">
              09 · Frequently Asked Questions
            </div>
            <h2 className="font-serif-display text-4xl md:text-5xl font-light text-white">
              Interior design insights & queries.
            </h2>
          </div>

          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl border border-white/5 bg-white/2 overflow-hidden transition-all duration-300 hover:border-amber-200/20"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm font-medium text-white/90 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-amber-200/60 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-amber-200' : 'rotate-0'
                      }`}
                    />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100 py-5 px-6' : 'max-h-0 opacity-0 pointer-events-none'
                    } overflow-hidden`}
                  >
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Why Customers Choose Jagdamba Section (Trust & Local SEO Boost) */}
      <section className="relative bg-neutral-950 py-32 border-t border-white/5 flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 w-full text-center">
          
          <div className="mb-16">
            <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-medium font-sans">
              Quality Assurance & Trust
            </div>
            <h2 className="font-serif-display text-4xl md:text-5xl font-light text-white leading-tight">
              Why builders, architects & homeowners<br />choose Jagdamba.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
            {trustSignals.map((signal, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-amber-200/25 hover:bg-white/5 transition-all duration-500 flex flex-col gap-4 shadow-xl"
              >
                <div className="w-10 h-10 rounded-full bg-amber-200/10 flex items-center justify-center border border-amber-200/20">
                  {signal.icon}
                </div>
                <div>
                  <h3 className="font-serif-display text-lg text-white font-light mb-2">{signal.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed font-light font-sans">{signal.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Main Contact Form Section */}
      <section id="contact" className="relative bg-neutral-950 py-32 flex items-center justify-center border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 w-full">
          
          <div className="grid md:grid-cols-2 gap-16 items-start w-full">
            
            {/* Left Column: Contact info details */}
            <div className="space-y-10 text-left">
              <div>
                <div className="text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium">
                  10 · Contact
                </div>
                <h2 className="font-serif-display text-5xl md:text-6xl font-light leading-[1.05] text-white">
                  Let's build<br />something quiet<br />together.
                </h2>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-amber-200 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1">Corporate Showroom</div>
                    <div className="text-sm font-light text-white/80">
                      Devendra Vihar Gali No. 11, Gumaniwala, Rishikesh (Near DSB School), Uttarakhand, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-amber-200 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1">General Inquiries</div>
                    <div className="text-sm font-light text-white/80">
                      +91 94126 78698 / +91 97600 30333
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-amber-200 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1">Electronic Mail</div>
                    <div className="text-sm font-light text-white/80">
                      studio@jagdambatimber.com
                    </div>
                  </div>
                </div>

                {/* Grayscale Dark-Mode Map Embed (High Trust & Local SEO Signal) */}
                <div className="rounded-xl overflow-hidden border border-white/5 bg-neutral-900/60 aspect-video shadow-lg relative mt-6 h-48 w-full">
                  <iframe
                    title="Jagdamba Timber Works Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4988451151614!2d78.25531397637706!3d30.058379474917904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e89e26bdfbb%3A0x873197bcc38fc5d3!2sJagdamba%20Timber!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Areas We Serve Local SEO tags */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-white/40 mb-3 font-semibold font-sans">Areas We Serve & Supply</div>
                  <div className="flex flex-wrap gap-2">
                    {['Rishikesh', 'Gumaniwala', 'Tapovan', 'Haridwar', 'Dehradun', 'Roorkee', 'Narendra Nagar', 'Jolly Grant'].map((area) => (
                      <span 
                        key={area} 
                        className="text-[10px] tracking-wider text-amber-200/60 bg-amber-200/5 border border-amber-200/10 px-3 py-1.5 rounded-full hover:border-amber-200/30 hover:text-amber-200 transition-all duration-300 cursor-default"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact form box */}
            <div className="rounded-2xl border border-white/5 bg-white/2 p-8 shadow-2xl relative">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-amber-200/10 flex items-center justify-center text-amber-200 border border-amber-200/20">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div className="font-serif-display text-2xl text-white font-light">Inquiry Sent.</div>
                  <p className="text-xs text-white/60 max-w-sm">
                    Thank you for reaching out. A studio representative will contact you in the next 24 hours to schedule a consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-semibold">
                      Full Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="E.g. Alexander Wright"
                      className="w-full bg-neutral-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-200/60 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-semibold">
                      Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full bg-neutral-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-200/60 transition-colors"
                    />
                  </div>

                  {/* Project Selector field */}
                  <div className="space-y-2">
                    <label htmlFor="form-project" className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-semibold">
                      Project Type
                    </label>
                    <select
                      id="form-project"
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                      className="w-full bg-neutral-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-200/60 transition-colors cursor-pointer"
                    >
                      <option value="residential">Residential Interiors</option>
                      <option value="commercial">Commercial Space</option>
                      <option value="custom">Bespoke Doors / Wardrobes</option>
                      <option value="wholesale">Wholesale Plywood / Panels</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="form-message" className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-semibold">
                      Brief Message
                    </label>
                    <textarea
                      id="form-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your design vision, timelines, and material requirements..."
                      className="w-full bg-neutral-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-200/60 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-amber-200 hover:bg-amber-100 text-black font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-amber-200/10 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Request Consultation
                  </button>

                </form>
              )}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
