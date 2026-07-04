import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  LayoutDashboard,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Phone,
  Rocket,
  Route,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "Projects", "Skills", "Experience", "Education"];

const metrics = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Reusable Components" },
  { value: "3", label: "Major Frontend Projects" },
  { value: "100%", label: "Responsive Layout Focus" },
];

const services = [
  {
    icon: <MonitorSmartphone size={24} />,
    title: "Responsive Web Apps",
    text: "Mobile-first layouts with clean desktop, tablet and mobile experiences.",
  },
  {
    icon: <LayoutDashboard size={24} />,
    title: "Dashboard Interfaces",
    text: "Tables, filters, cards, reports, empty states and API-driven screens.",
  },
  {
    icon: <Code2 size={24} />,
    title: "Reusable Components",
    text: "Scalable UI sections built with React, TypeScript and Tailwind CSS.",
  },
];

const projects = [
  {
    id: "01",
    title: "Affiliate Dashboard",
    category: "Enterprise Operations Platform",
    description:
      "A campaign and reporting dashboard for affiliate operations with performance cards, campaign tables, filters and clean data-focused layouts.",
    role: "Frontend Developer",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "REST API", "Charts"],
    highlights: [
      "Created dashboard cards for revenue, campaign and reporting summaries.",
      "Built reusable table, filter and status components for operations screens.",
      "Integrated API response states including loading, error and empty UI.",
      "Improved responsive dashboard layout for desktop and smaller screens.",
    ],
    visual: "dashboard",
  },
  {
    id: "02",
    title: "E-commerce Website",
    category: "Product Shopping Interface",
    description:
      "A modern e-commerce frontend with product listing, category browsing, cart flow and user-friendly shopping screens.",
    role: "Frontend Developer",
    stack: ["React.js", "Redux Toolkit", "Material UI", "Axios", "Routing"],
    highlights: [
      "Developed product cards, category sections, cart UI and navigation flow.",
      "Used Redux Toolkit for cart state and reusable actions.",
      "Designed clean product detail and listing pages with responsive behavior.",
      "Handled API-based product data and component-level UI states.",
    ],
    visual: "commerce",
  },
  {
    id: "03",
    title: "E-Library Platform",
    category: "Learning Frontend Application",
    description:
      "A learning platform frontend with content cards, search-like browsing, category sections and smooth navigation patterns.",
    role: "Frontend Developer",
    stack: ["React.js", "Tailwind CSS", "React Router", "JavaScript", "Forms"],
    highlights: [
      "Built structured content pages with reusable card components.",
      "Implemented routing and clean navigation between learning sections.",
      "Created responsive UI blocks for courses, resources and user sections.",
      "Focused on readable layout, spacing and cross-browser consistency.",
    ],
    visual: "library",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: <Code2 size={22} />,
    items: ["React.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3"],
  },
  {
    title: "UI & Styling",
    icon: <MonitorSmartphone size={22} />,
    items: ["Tailwind CSS", "Material UI", "Bootstrap", "Responsive UI"],
  },
  {
    title: "State & API",
    icon: <Database size={22} />,
    items: ["Redux Toolkit", "Context API", "Axios", "Fetch API", "REST API"],
  },
  {
    title: "Workflow",
    icon: <Route size={22} />,
    items: ["Vite", "Git", "GitHub", "VS Code", "Chrome DevTools"],
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Frontend Developer, Doniv Digital Media LLP, Indore",
    period: "May 2024 - April 2026",
    points: [
      "Developed frontend modules for enterprise-grade dashboards using React.js and TypeScript.",
      "Integrated REST APIs and managed loading, error, success and empty states.",
      "Converted UI requirements into reusable components and responsive screens.",
      "Worked on performance-focused frontend implementation and clean page structure.",
    ],
  },
  {
    role: "Associate Software Intern",
    company: "E-skill Web, Indore",
    period: "Mar 2023 - Dec 2024",
    points: [
      "Built responsive web applications using React.js, JavaScript and Tailwind CSS.",
      "Created landing pages, forms, reusable sections and routing-based layouts.",
      "Worked with Material UI components and modern frontend design patterns.",
      "Improved cross-browser compatibility and mobile responsiveness.",
    ],
  },
];

const workflow = [
  "Understand requirements and screen flow",
  "Break UI into reusable React components",
  "Integrate APIs with loading and error states",
  "Polish responsive design and final user experience",
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f4f1e8] text-[#111111]">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-[#fffdf6]/85 px-4 py-3 shadow-sm backdrop-blur-xl lg:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-[#111111] text-sm font-black text-[#d6ff3f]">
              VL
            </span>
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.16em]">
                Vishal Lovanshi
              </span>
              <span className="text-xs font-bold text-black/50">
                React Frontend Developer
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-bold text-black/60 transition hover:text-black"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5"
            >
              Hire Me <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-full border border-black/10 bg-white md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-black/10 bg-[#fffdf6] p-3 shadow-sm md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-3 py-3 text-sm font-bold text-black/70 hover:bg-black/5"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="px-4 pb-12 pt-28 lg:px-8 lg:pt-32">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex min-h-[680px] flex-col justify-between rounded-[2.5rem] bg-[#111111] p-7 text-white shadow-2xl shadow-black/15 md:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#d6ff3f] px-4 py-2 text-sm font-black text-black">
                  <Sparkles size={16} /> Open to Frontend Developer Roles
                </span>
                <span className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/70">
                  Indore, India
                </span>
              </div>

              <p className="mt-16 text-sm font-black uppercase tracking-[0.45em] text-[#d6ff3f]">
                React.js | TypeScript | Tailwind CSS
              </p>
              <h1 className="mt-5 max-w-4xl text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
                Frontend developer building dashboards and product UI.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                I build responsive, scalable and user-friendly web applications
                using React.js, TypeScript, JavaScript, Tailwind CSS and
                Material UI. My work focuses on reusable components, API
                integration, dashboard UI and clean production-ready interfaces.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6ff3f] px-7 py-4 text-sm font-black text-black transition hover:-translate-y-1"
                >
                  View Case Studies <ArrowRight size={18} />
                </a>
                <a
                  href="mailto:vishallovanshi799@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  Contact Me <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/10 p-4"
                >
                  <p className="text-3xl font-black text-[#d6ff3f]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs font-bold leading-5 text-white/60">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2.5rem] border border-black/10 bg-[#fffdf6] p-5 shadow-sm">
              <div className="rounded-[2rem] bg-[#171717] p-5 text-white">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">
                      Project Preview
                    </p>
                    <h2 className="mt-2 text-2xl font-black">
                      Affiliate Dashboard UI
                    </h2>
                  </div>
                  <BarChart3 className="text-[#d6ff3f]" />
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {["Revenue", "Campaigns", "Leads"].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-white/10 bg-white/[0.07] p-4"
                    >
                      <p className="text-xs font-bold text-white/45">{item}</p>
                      <p className="mt-3 text-3xl font-black">
                        {index === 0 ? "$24k" : index === 1 ? "38" : "1.8k"}
                      </p>
                      <p className="mt-2 text-xs font-bold text-[#d6ff3f]">
                        +{index + 8}.4% this month
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.07] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-black">Campaign Performance</p>
                    <span className="rounded-full bg-[#d6ff3f] px-3 py-1 text-xs font-black text-black">
                      Live UI
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      ["Credit Monitoring", "84%"],
                      ["Loan Offers", "69%"],
                      ["Nutra Campaign", "56%"],
                    ].map(([name, width]) => (
                      <div key={name}>
                        <div className="mb-2 flex justify-between text-xs font-bold text-white/60">
                          <span>{name}</span>
                          <span>{width}</span>
                        </div>
                        <div className="h-3 rounded-full bg-white/10">
                          <div
                            className="h-3 rounded-full bg-[#d6ff3f]"
                            style={{ width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {[
                    "Reusable Cards",
                    "API States",
                    "Responsive Tables",
                    "Filter UI",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-2xl bg-white/[0.07] px-4 py-3 text-sm font-bold"
                    >
                      <CheckCircle2 size={17} className="text-[#d6ff3f]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[2rem] border border-black/10 bg-[#fffdf6] p-5 shadow-sm"
                >
                  <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-[#d6ff3f]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/60">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#d6ff3f] p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-black/55">
                About Me
              </p>
              <h2 className="mt-4 text-5xl font-black leading-tight">
                I convert requirements into clean frontend interfaces.
              </h2>
            </div>
            <div className="grid gap-4 text-lg leading-8 text-black/70 md:grid-cols-2">
              <p>
                I have worked on dashboards, e-commerce screens, learning
                platform UI, landing pages and reusable component structures.
              </p>
              <p>
                My strength is building practical UI with React, handling data
                states properly, and making layouts responsive for real users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Case Studies"
            title="Projects with role, stack and frontend responsibilities."
            text="These sections are written to help interviewers quickly understand what I built and how I contributed."
          />

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="grid overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#fffdf6] shadow-sm lg:grid-cols-[0.95fr_1.05fr]"
              >
                <ProjectVisual project={project} />
                <div className="p-7 md:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-black px-4 py-2 text-sm font-black text-white">
                      {project.id}
                    </span>
                    <span className="rounded-full bg-[#d6ff3f] px-4 py-2 text-sm font-black">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mt-7 text-4xl font-black tracking-tight md:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-black/65">
                    {project.description}
                  </p>

                  <div className="mt-7 grid gap-4 md:grid-cols-2">
                    <InfoBlock title="My Role" value={project.role} />
                    <InfoBlock
                      title="Focus"
                      value="UI, API flow, responsive screens"
                    />
                  </div>

                  <div className="mt-7">
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-black/45">
                      Work Done
                    </p>
                    <div className="grid gap-3">
                      {project.highlights.map((item) => (
                        <p
                          key={item}
                          className="flex gap-3 rounded-2xl bg-[#f4f1e8] p-4 text-sm font-bold leading-6 text-black/70"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-1 shrink-0 text-black"
                          />
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-black/10 px-4 py-2 text-xs font-black text-black/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Technical Skills"
            title="Frontend stack organized like real project work."
            text="Instead of only listing tools, this shows where each skill fits in frontend development."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[2rem] border border-black/10 bg-[#fffdf6] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#d6ff3f]">
                    {group.icon}
                  </div>
                  <ArrowUpRight size={20} />
                </div>
                <h3 className="text-2xl font-black">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f4f1e8] px-3 py-2 text-xs font-black text-black/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2.5rem] bg-[#111111] p-8 text-white md:p-10">
            <Rocket className="text-[#d6ff3f]" size={38} />
            <h2 className="mt-8 text-5xl font-black leading-tight">
              My frontend workflow.
            </h2>
            <p className="mt-5 leading-8 text-white/65">
              I follow a simple practical process so UI remains clean, reusable
              and easy to maintain.
            </p>
          </div>
          <div className="grid gap-4">
            {workflow.map((item, index) => (
              <div
                key={item}
                className="flex gap-5 rounded-[2rem] border border-black/10 bg-[#fffdf6] p-6 shadow-sm"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#d6ff3f] text-lg font-black">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-black">{item}</h3>
                  <p className="mt-2 text-black/60">
                    This keeps the project structured from first requirement to
                    final responsive UI.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Experience"
            title="Frontend development journey."
            text="Professional work focused on React UI, dashboards, forms, API integration and responsive implementation."
          />
          <div className="grid gap-6">
            {experience.map((item) => (
              <article
                key={item.role}
                className="grid gap-6 rounded-[2.5rem] border border-black/10 bg-[#fffdf6] p-7 shadow-sm lg:grid-cols-[0.32fr_1fr]"
              >
                <div>
                  <p className="rounded-full bg-[#d6ff3f] px-5 py-3 text-center text-sm font-black">
                    {item.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-4xl font-black">{item.role}</h3>
                  <p className="mt-2 text-lg font-black text-black/55">
                    {item.company}
                  </p>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {item.points.map((point) => (
                      <p
                        key={point}
                        className="flex gap-3 rounded-2xl bg-[#f4f1e8] p-4 text-sm font-bold leading-6 text-black/65"
                      >
                        <ShieldCheck size={18} className="mt-1 shrink-0" />
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle label="Education" title="Academic background." />
          <div className="grid gap-6 md:grid-cols-2">
            <Education
              title="MCA"
              school="Sanghvi Institute of Management & Science, Indore"
              year="2021 - 2023"
            />
            <Education
              title="BSc  Information Technology"
              school="SN College, Khandwa, DAVV University"
              year="2017 - 2020"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#111111] text-white shadow-2xl shadow-black/15 lg:grid-cols-[1fr_0.8fr]">
          <div className="p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d6ff3f]">
              Contact
            </p>
            <h2 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Looking for a React Frontend Developer?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              I am ready for frontend roles where I can build dashboards, web
              apps, landing pages and responsive user interfaces.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:vishallovanshi799@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6ff3f] px-7 py-4 text-sm font-black text-black transition hover:-translate-y-1"
              >
                <Mail size={18} /> Send Email
              </a>
              <a
                href="tel:+918435567133"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                <Phone size={18} /> Call Me
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 bg-white/[0.06] p-8 md:p-12 lg:border-l lg:border-t-0">
            <h3 className="text-2xl font-black">Quick Info</h3>
            <div className="mt-6 grid gap-4">
              <ContactLine icon={<MapPin size={18} />} text="Indore, India" />
              <ContactLine
                icon={<Mail size={18} />}
                text="vishallovanshi799@gmail.com"
              />
              <ContactLine icon={<Phone size={18} />} text="+91 84355 67133" />
              <ContactLine
                icon={<Code2 size={18} />}
                text="GitHub / Portfolio Projects"
              />
              <ContactLine
                icon={<ExternalLink size={18} />}
                text="Available for Interview"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-8 text-center text-sm font-bold text-black/45">
        © 2026 Vishal Lovanshi. Single page portfolio built with React and
        Tailwind CSS.
      </footer>
    </main>
  );
}

function SectionTitle({ label, title, text }) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.3em] text-black/45">
          {label}
        </p>
        <h2 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
          {title}
        </h2>
      </div>
      {text && <p className="max-w-md leading-7 text-black/60">{text}</p>}
    </div>
  );
}

function ProjectVisual({ project }) {
  const bars =
    project.visual === "dashboard"
      ? ["86%", "72%", "64%", "48%"]
      : project.visual === "commerce"
        ? ["Product Card", "Cart State", "Checkout UI", "Category Page"]
        : ["Course Card", "Library Route", "Search Layout", "User Section"];

  return (
    <div className="bg-[#111111] p-7 text-white md:p-10">
      <div className="mb-8 flex items-center justify-between">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-white/45">
          UI Preview
        </p>
        <span className="rounded-full bg-[#d6ff3f] px-4 py-2 text-xs font-black text-black">
          React UI
        </span>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-white/45">Screen</p>
            <h4 className="mt-1 text-2xl font-black">{project.title}</h4>
          </div>
          <LayoutDashboard className="text-[#d6ff3f]" />
        </div>

        {project.visual === "dashboard" ? (
          <div className="space-y-4">
            {bars.map((bar, index) => (
              <div key={bar}>
                <div className="mb-2 flex justify-between text-xs font-bold text-white/55">
                  <span>Module {index + 1}</span>
                  <span>{bar}</span>
                </div>
                <div className="h-4 rounded-full bg-white/10">
                  <div
                    className="h-4 rounded-full bg-[#d6ff3f]"
                    style={{ width: bar }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {bars.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.07] p-4"
              >
                <div className="mb-8 h-16 rounded-2xl bg-[#d6ff3f]/90" />
                <p className="text-sm font-black">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function InfoBlock({ title, value }) {
  return (
    <div className="rounded-2xl bg-[#f4f1e8] p-5">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-black/40">
        {title}
      </p>
      <p className="mt-2 font-black">{value}</p>
    </div>
  );
}

function Education({ title, school, year }) {
  return (
    <article className="rounded-[2.5rem] border border-black/10 bg-[#fffdf6] p-8 shadow-sm">
      <div className="mb-7 grid size-14 place-items-center rounded-2xl bg-[#d6ff3f]">
        <GraduationCap />
      </div>
      <h3 className="text-4xl font-black">{title}</h3>
      <p className="mt-3 text-lg font-bold text-black/65">{school}</p>
      <p className="mt-5 inline-flex rounded-full bg-black px-4 py-2 text-sm font-black text-white">
        {year}
      </p>
    </article>
  );
}

function ContactLine({ icon, text }) {
  return (
    <p className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-bold text-white/70">
      <span className="text-[#d6ff3f]">{icon}</span>
      {text}
    </p>
  );
}

export default App;
