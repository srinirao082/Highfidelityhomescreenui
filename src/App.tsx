import {
  ShieldCheck,
  Sparkles,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Check,
  Zap,
  Clock,
  Shield,
  FileText,
  ChevronRight,
  Droplet,
  FileSearch,
  Eye,
  TrendingUp,
  Users,
  Building2,
  Scale,
  AlertTriangle,
  Lock,
  Target,
} from "lucide-react";
import { FeatureCard } from "./components/FeatureCard";
import { HeroBackground } from "./components/HeroBackground";
import { BentoCard } from "./components/BentoCard";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { ProcessStep } from "./components/ProcessStep";
import { NavigationDropdown } from "./components/NavigationDropdown";
import { motion } from "motion/react";
import { useState } from "react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const platformItems = [
    {
      title: "Prohibited Land Checker",
      description: "Verify government and restricted land records.",
      href: "#platform-prohibited"
    },
    {
      title: "Lakes & Nalas Risk Check",
      description: "Detect proximity and encroachment risks near water bodies.",
      href: "#platform-lakes"
    },
    {
      title: "EC Upload & Risk Analysis",
      description: "Upload encumbrance certificates and receive automated legal insights.",
      href: "#platform-ec"
    }
  ];

  const enterpriseItems = [
    {
      title: "Real Estate Developers",
      description: "Scale due diligence, reduce delays, and ensure compliance across portfolios.",
      href: "#enterprise-developers"
    },
    {
      title: "Banks & NBFCs",
      description: "Minimize lending risks with automated land verification and legal checks.",
      href: "#enterprise-banks"
    },
    {
      title: "Brokers, Agents & Lawyers",
      description: "Build trust with clients through instant, reliable land verification.",
      href: "#enterprise-brokers"
    }
  ];

  const resourcesItems = [
    {
      title: "Blog",
      description: "Expert insights on land verification and compliance.",
      href: "#resources-blog"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and API references.",
      href: "#resources-docs"
    },
    {
      title: "FAQs",
      description: "Quick answers to common questions.",
      href: "#resources-faqs"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Animated Background */}
      <HeroBackground />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl border-b border-black/5" />
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative w-11 h-11 rounded-[15px] bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <div className="absolute inset-0 rounded-[15px] bg-gradient-to-br from-white/20 to-transparent" />
              <ShieldCheck
                className="w-6 h-6 text-white relative z-10"
                strokeWidth={2.5}
              />
            </div>
            <div>
              <span
                className="text-gray-900 block"
                style={{
                  fontSize: "19px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                HYDRAA
              </span>
              <span className="text-gray-500 text-[10px] tracking-wider uppercase">
                Intelligence Platform
              </span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <NavigationDropdown label="Platform" items={platformItems} delay={0.1} />
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              onClick={() => scrollToSection('solutions')}
              className="text-gray-700 hover:text-gray-900 transition-colors text-[14px] relative group"
              style={{ fontWeight: 500 }}
            >
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300" />
            </motion.button>
            <NavigationDropdown label="Enterprise" items={enterpriseItems} delay={0.2} />
            <NavigationDropdown label="Resources" items={resourcesItems} delay={0.25} />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center gap-3"
          >
            <button
              className="px-5 py-2.5 text-gray-700 hover:text-gray-900 transition-colors text-[14px]"
              style={{ fontWeight: 500 }}
            >
              Sign in
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full transition-all text-[14px] shadow-lg shadow-gray-900/20 relative overflow-hidden group"
              style={{ fontWeight: 600 }}
            >
              <span className="relative z-10">Launch Platform</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-20 max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm rounded-full border border-blue-200/50 mb-10 shadow-sm group hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-blue-600 group-hover:rotate-12 transition-transform" />
              <span
                className="text-gray-700 text-[13px]"
                style={{ fontWeight: 600 }}
              >
                Trusted by 1,000+ organizations worldwide
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1
                className="text-gray-900 mb-6 leading-[1.08]"
                style={{
                  fontSize: "clamp(48px, 5.5vw, 72px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                }}
              >
                Land verification built for
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    the modern world
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-blue-200/50 via-indigo-200/50 to-purple-200/50 -z-0 blur-sm"
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
              style={{ fontSize: "19px" }}
            >
              AI-powered verification meets intelligent
              automation. Verify land authenticity, analyze
              documents, and ensure compliance—all in seconds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-xl shadow-blue-500/30 text-[16px] flex items-center gap-2.5 relative overflow-hidden"
                style={{ fontWeight: 600 }}
              >
                <span className="relative z-10">
                  Start Free Trial
                </span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-full border border-gray-200 shadow-lg text-[16px] hover:bg-gray-50 hover:shadow-xl transition-all"
                style={{ fontWeight: 600 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[12px] text-gray-500"
            >
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-blue-600" />
                <span>Bank-grade security</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-yellow-600" />
                <span>Setup in minutes</span>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-24"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200/60 shadow-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                <div className="text-center">
                  <div
                    className="text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text mb-2"
                    style={{
                      fontSize: "42px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    <AnimatedCounter
                      end={99.8}
                      decimals={1}
                      suffix="%"
                    />
                  </div>
                  <div
                    className="text-gray-600 text-[14px]"
                    style={{ fontWeight: 500 }}
                  >
                    Accuracy Rate
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-transparent bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text mb-2"
                    style={{
                      fontSize: "42px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    <AnimatedCounter end={12} suffix="s" />
                  </div>
                  <div
                    className="text-gray-600 text-[14px]"
                    style={{ fontWeight: 500 }}
                  >
                    Avg Processing
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-transparent bg-gradient-to-br from-orange-600 to-red-600 bg-clip-text mb-2"
                    style={{
                      fontSize: "42px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    <AnimatedCounter end={50} suffix="K+" />
                  </div>
                  <div
                    className="text-gray-600 text-[14px]"
                    style={{ fontWeight: 500 }}
                  >
                    Monthly Checks
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-transparent bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text mb-2"
                    style={{
                      fontSize: "42px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    24/7
                  </div>
                  <div
                    className="text-gray-600 text-[14px]"
                    style={{ fontWeight: 500 }}
                  >
                    Uptime
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Grid Features */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2
                className="text-gray-900 mb-3"
                style={{
                  fontSize: "40px",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                }}
              >
                Platform Capabilities
              </h2>
              <p
                className="text-gray-600"
                style={{ fontSize: "18px" }}
              >
                Comprehensive land verification powered by advanced technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
              <BentoCard
                icon={<AlertTriangle className="w-7 h-7" />}
                title="Prohibited Land Verification"
                description="Identify restricted and government lands using official records and spatial data. Powered by AI-driven cross-referencing and satellite analysis."
                gradient="from-blue-500 to-cyan-500"
                className="lg:col-span-2"
                delay={0}
              />
              <BentoCard
                icon={<Droplet className="w-7 h-7" />}
                title="Lakes & Nalas Risk Detection"
                description="Analyze land proximity to lakes and drainage channels to identify encroachment risks using machine learning."
                gradient="from-purple-500 to-pink-500"
                className=""
                delay={0.1}
              />
              <BentoCard
                icon={<FileSearch className="w-7 h-7" />}
                title="Encumbrance Certificate Analysis"
                description="Automatically process EC documents with smart OCR and highlight legal risks through intelligent document analysis."
                gradient="from-orange-500 to-red-500"
                className=""
                delay={0.2}
              />
              <BentoCard
                icon={<Eye className="w-7 h-7" />}
                title="Continuous Land Status Monitoring"
                description="Track changes in land status, legal records, and environmental constraints over time with real-time updates and AI-powered alerts."
                gradient="from-green-500 to-emerald-500"
                className="lg:col-span-2"
                delay={0.3}
              />
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-gray-900 mb-3"
                style={{
                  fontSize: "40px",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                }}
              >
                Simple. Fast. Powerful.
              </h2>
              <p
                className="text-gray-600"
                style={{ fontSize: "18px" }}
              >
                Get started in three easy steps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ProcessStep
                number="01"
                title="Upload Documents"
                description="Drag and drop land documents or enter survey numbers directly into our platform"
                delay={0}
              />
              <ProcessStep
                number="02"
                title="AI Analysis"
                description="Our AI instantly verifies authenticity, checks compliance, and flags potential issues"
                delay={0.1}
              />
              <ProcessStep
                number="03"
                title="Get Results"
                description="Receive comprehensive reports with risk scores and actionable insights in seconds"
                delay={0.2}
              />
            </div>
          </div>

          {/* Solutions Section */}
          <div id="solutions" className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-gray-900 mb-3"
                style={{
                  fontSize: "40px",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                }}
              >
                Solutions for Critical Challenges
              </h2>
              <p
                className="text-gray-600"
                style={{ fontSize: "18px" }}
              >
                Problem-first approach to land verification
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 
                  className="text-gray-900 mb-3"
                  style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.015em' }}
                >
                  Safe Land Buying
                </h3>
                <p className="text-gray-600 mb-3" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  Avoid purchasing disputed or prohibited land. Cross-reference official records and satellite imagery to flag high-risk properties instantly.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg">
                  <Droplet className="w-7 h-7 text-white" />
                </div>
                <h3 
                  className="text-gray-900 mb-3"
                  style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.015em' }}
                >
                  Waterbody Risk Prevention
                </h3>
                <p className="text-gray-600 mb-3" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  Prevent demolition risks from lake and nala encroachments. Analyze proximity to water bodies using geospatial AI and regulatory data.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 shadow-lg">
                  <FileSearch className="w-7 h-7 text-white" />
                </div>
                <h3 
                  className="text-gray-900 mb-3"
                  style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.015em' }}
                >
                  Automated Legal Due Diligence
                </h3>
                <p className="text-gray-600 mb-3" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  Skip slow manual EC verification. Upload documents for instant automated analysis highlighting ownership disputes and compliance issues.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Enterprise Section */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-gray-900 mb-3"
                style={{
                  fontSize: "40px",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                }}
              >
                Built for Enterprise Scale
              </h2>
              <p
                className="text-gray-600"
                style={{ fontSize: "18px" }}
              >
                Trusted by industry leaders across real estate, finance, and legal sectors
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 
                  className="text-gray-900 mb-3"
                  style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.015em' }}
                >
                  Real Estate Developers
                </h3>
                <p className="text-gray-700 mb-6" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  Scale due diligence across large portfolios. Reduce project delays caused by land disputes. Ensure regulatory compliance before acquisition.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-[14px]">Bulk verification for multiple properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-[14px]">Risk scoring for portfolio optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-[14px]">Compliance documentation at scale</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 shadow-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 
                  className="text-gray-900 mb-3"
                  style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.015em' }}
                >
                  Banks & NBFCs
                </h3>
                <p className="text-gray-700 mb-6" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  Minimize lending risks with automated land verification. Accelerate loan approvals with instant legal checks. Reduce NPA exposure from disputed properties.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-[14px]">Pre-approval land risk assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-[14px]">Automated EC validation for loans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-[14px]">Regulatory compliance tracking</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200/50 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mb-6 shadow-lg">
                  <Scale className="w-7 h-7 text-white" />
                </div>
                <h3 
                  className="text-gray-900 mb-3"
                  style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.015em' }}
                >
                  Brokers, Agents & Lawyers
                </h3>
                <p className="text-gray-700 mb-6" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  Build trust with clients through instant, reliable verification. Differentiate your services with data-backed insights. Close deals faster with confidence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-[14px]">White-label reports for clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-[14px]">Instant property risk summaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-[14px]">Decision confidence for stakeholders</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-[40px] opacity-90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] rounded-[40px]" />

            <div className="relative px-8 lg:px-16 py-16 lg:py-20 text-center rounded-[40px]">
              <h2
                className="text-white mb-4"
                style={{
                  fontSize: "44px",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                }}
              >
                Ready to get started?
              </h2>
              <p
                className="text-white/90 mb-10 max-w-2xl mx-auto"
                style={{ fontSize: "19px" }}
              >
                Join thousands of organizations using HYDRAA to
                verify land with confidence
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow:
                      "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-gray-900 rounded-full shadow-2xl text-[16px] flex items-center gap-2.5"
                  style={{ fontWeight: 600 }}
                >
                  Start Free Trial
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 text-[16px] hover:bg-white/20 transition-all"
                  style={{ fontWeight: 600 }}
                >
                  Talk to Sales
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}