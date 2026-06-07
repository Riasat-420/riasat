import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, Award, Star, Users, Briefcase, Code2, X, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import oecCertificate from "@/assets/oec-certificate.jpg";
import innogosLogo from "@/assets/logos/innogos-logo.png";
import camaliLogo from "@/assets/logos/camali-logo.png";
import avoraLogo from "@/assets/logos/avora-logo.png";
import clinicLogo from "@/assets/logos/clinic-logo.png";
import portfolioMwwa from "@/assets/portfolio-mwwa.jpg";
import portfolioBrewton from "@/assets/portfolio-brewton.jpg";
import portfolioAberas from "@/assets/portfolio-aberas.jpg";
import portfolioFlistar from "@/assets/portfolio-flistar.jpg";
import logo from "@/assets/logo.png";
import profileImage from "@/assets/riasat-profile.png";
import LazyImage from "@/components/LazyImage";

const stats = [
  { value: "5+", label: "Years of Experience", icon: Briefcase },
  { value: "100+", label: "Projects Delivered", icon: Code2 },
  { value: "5.00", label: "Client Rating", icon: Star },
  { value: "100%", label: "Client Satisfaction", icon: Users },
];

const credentials = [
  {
    id: 1,
    title: "Soft Skills Training",
    issuer: "OEC & ICMPD",
    fullIssuer: "Overseas Employment Corporation (OEC) & International Centre for Migration Policy Development (ICMPD)",
    date: "February 2, 2026",
    duration: "21 Hours",
    certNo: "d4b66b1b",
    type: "Government",
    badge: "Govt. Certified",
    badgeColor: "bg-primary text-primary-foreground",
    description: "Officially recognized certification for enhancing employability skills and career readiness, issued by two international migration and employment organizations.",
    image: oecCertificate,
    canView: true,
  },
  {
    id: 2,
    title: "Internship Completion – Frontend Development",
    issuer: "Octanet Pvt Ltd",
    fullIssuer: "Octanet Services Pvt. Ltd.",
    date: "May 2024",
    type: "Professional",
    badge: "Industry Certified",
    badgeColor: "bg-secondary text-secondary-foreground border border-border",
    description: "Completed a structured frontend development internship covering HTML, CSS, JavaScript and modern UI development practices.",
    canView: false,
  },
  {
    id: 3,
    title: "Experience Letter",
    issuer: "Camali Grafix, Canada",
    fullIssuer: "Camali Grafix Montreal, Canada",
    date: "November 2024",
    type: "Professional",
    badge: "International",
    badgeColor: "bg-secondary text-secondary-foreground border border-border",
    description: "Official experience letter from a Canadian creative agency acknowledging full-stack WordPress development contributions for international clients.",
    canView: false,
  },
];

const clientLogos = [
  { name: "MWWA", image: portfolioMwwa, url: "http://mwwa.uk/" },
  { name: "Brewton", image: portfolioBrewton, url: "https://brewtonpk.com/" },
  { name: "Aberas", image: portfolioAberas, url: "https://aberasconstruction.ca/" },
  { name: "Flistar", image: portfolioFlistar, url: "https://flistar.eu/" },
  { name: "Innogos", image: innogosLogo, url: "https://innogos.com/", isLogo: true },
  { name: "Camali", image: camaliLogo, url: "https://camalibijoux.com/", isLogo: true },
  { name: "Clinic Luqi", image: clinicLogo, url: "https://clinicluqi.com/", isLogo: true },
  { name: "Avora", image: avoraLogo, url: "https://avoragroup.com.au/", isLogo: true },
];

const duplicatedLogos = [...clientLogos, ...clientLogos];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TrustPage = () => {
  const [viewCert, setViewCert] = useState<(typeof credentials)[0] | null>(null);

  useSEO({
    title: "Trust & Credentials | Govt-Certified Developer — Dev Riasat",
    description: "Verified credentials of Muhammad Riasat Ali — OEC & ICMPD govt certification, international experience letters, and 8+ trusted clients across 5 countries.",
    canonical: "https://riasat.lovable.app/trust",
    type: "profile",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": "https://riasat.lovable.app/trust#webpage",
      "url": "https://riasat.lovable.app/trust",
      "name": "Trust & Credentials — Dev Riasat",
      "isPartOf": { "@id": "https://riasat.lovable.app/#website" },
      "mainEntity": { "@id": "https://riasat.lovable.app/#person" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://riasat.lovable.app/" },
          { "@type": "ListItem", "position": 2, "name": "Trust", "item": "https://riasat.lovable.app/trust" }
        ]
      }
    },
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <LazyImage src={logo} alt="Dev Riasat" width={240} height={80} priority className="h-10 w-auto object-contain" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <h2 className="text-[clamp(4rem,18vw,14rem)] font-display font-bold text-muted-foreground/10 whitespace-nowrap select-none">
              TRUST
            </h2>
          </motion.div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6"
            >
              <ShieldCheck className="w-4 h-4" />
              Trust & Credentials
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-4xl md:text-6xl font-display font-bold leading-tight mb-4"
            >
              Verified. Certified.
              <br />
              <span className="text-primary">Trusted Worldwide.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground max-w-xl mx-auto text-lg"
            >
              A transparent look at Muhammad Riasat Ali's certifications, credentials, and the clients who've trusted his work.
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div key={stat.label} variants={itemVariants} className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-4xl md:text-5xl font-display font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Official Records</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold">Certifications & Credentials</h2>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {credentials.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  onClick={cert.canView ? () => setViewCert(cert) : undefined}
                  className={`bg-card border rounded-2xl p-6 transition-all duration-300 flex flex-col gap-4 ${
                    cert.canView
                      ? "border-primary/40 shadow-md shadow-primary/10 cursor-pointer hover:border-primary hover:shadow-xl hover:shadow-primary/20"
                      : "border-border/60 hover:border-primary/20 hover:shadow-md"
                  }`}
                >
                  {/* Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {cert.type === "Government"
                        ? <ShieldCheck className="w-6 h-6 text-primary" />
                        : <Award className="w-6 h-6 text-primary" />
                      }
                    </div>
                    <span className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-bold ${cert.badgeColor}`}>
                      {cert.type === "Government" && <ShieldCheck className="w-2.5 h-2.5" />}
                      {cert.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg leading-tight mb-1">{cert.title}</h3>
                    <p className="text-primary text-sm font-medium mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mb-3">{cert.date}{cert.duration ? ` · ${cert.duration}` : ""}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                  </div>

                  {/* CTA */}
                  {cert.canView && (
                    <div className="flex items-center gap-2 text-primary text-sm font-medium pt-2 border-t border-border/50">
                      <ShieldCheck className="w-4 h-4" />
                      View Certificate
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Professional Profile */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-10 max-w-3xl mx-auto text-center md:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring" }}
                className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl flex-shrink-0"
              >
                <LazyImage src={profileImage} alt="Muhammad Riasat Ali" width={256} height={256} priority className="w-full h-full object-cover" />
              </motion.div>
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider"
                >
                  <ShieldCheck className="w-3 h-3" />
                  OEC & ICMPD Govt. Certified
                </motion.div>
                <h2 className="text-3xl font-display font-bold mb-1">Muhammad Riasat Ali</h2>
                <p className="text-primary font-medium mb-3">Full-Stack Developer · WordPress Expert · Dev Riasat</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  5+ years of experience delivering 100+ projects for clients across UK, Canada, Australia, Europe & Pakistan. Certified by international organizations and trusted by businesses worldwide.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a
                    href="https://github.com/riasat-420"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  <a
                    href="https://wa.me/+923498088939"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm px-4 py-1.5 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
                  >
                    Hire Me →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client logos carousel */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Happy Clients</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold">Trusted By Real Businesses</h2>
              </div>
            </motion.div>

            {/* Static grid on this page */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {clientLogos.map((logo, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.03 }}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-xl border border-border/50 p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg flex items-center justify-center ${
                    logo.isLogo
                      ? "h-24 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-100 dark:to-slate-200"
                      : "h-24 bg-background/50"
                  }`}
                >
                  <LazyImage
                    src={logo.image}
                    alt={logo.name}
                    width={logo.isLogo ? 240 : 400}
                    height={logo.isLogo ? 96 : 240}
                    className={`transition-all duration-300 ${
                      logo.isLogo
                        ? "h-12 w-auto object-contain opacity-90 group-hover:opacity-100"
                        : "w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100"
                    }`}
                  />
                  {!logo.isLogo && (
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent rounded-xl flex items-end p-3">
                      <span className="text-xs font-semibold text-primary-foreground">{logo.name}</span>
                    </div>
                  )}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3 h-3 text-primary" />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-4">Ready to join the list of satisfied clients?</p>
              <a
                href="https://wa.me/+923498088939"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                Start a Project →
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer strip */}
      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Muhammad Riasat Ali · <Link to="/" className="hover:text-foreground transition-colors">Back to Portfolio</Link>
      </div>

      {/* Certificate Lightbox */}
      <AnimatePresence>
        {viewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setViewCert(null)}
            className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">OEC & ICMPD — Government Certified</span>
                  <span className="text-[10px] uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-bold ml-1">
                    Verified
                  </span>
                </div>
                <button
                  onClick={() => setViewCert(null)}
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <LazyImage
                  src={viewCert.image}
                  alt={`${viewCert.title} Certificate`}
                  width={1200}
                  height={850}
                  className="w-full rounded-xl object-contain"
                />
              </div>
              <div className="px-6 pb-5 text-center">
                <p className="text-xs text-muted-foreground">
                  Certificate No: <span className="font-mono text-foreground">d4b66b1b</span> · Issued by OEC & ICMPD · 21 Hours Training · Feb 2, 2026
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrustPage;
