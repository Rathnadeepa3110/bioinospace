import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Atom,
  ArrowRight,
  ArrowUpRight,
  FlaskConical,
  HandCoins,
  HeartPulse,
  GraduationCap,
  Layers,
  Leaf,
  LineChart,
  Microscope,
  Pill,
  Recycle,
  Sprout,
  Target,
  Telescope,
} from "lucide-react";
import heroLab from "@/assets/hero-lab.jpg";
import { ContentCard, SectionHeading } from "@/components/shared";
import { focusAreas, org, services, startups, stats } from "@/data/site";

const focusIcons = [Atom, Layers, HeartPulse, Pill, Sprout, Leaf, Recycle];
const serviceIcons = [FlaskConical, LineChart, HandCoins, Microscope, GraduationCap];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroLab}
          alt="Scientists working in a bright modern biotechnology laboratory"
          width={1024}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/45 to-background/15"
        />
        <div className="container-site relative py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">RGU × AIC RAISE Initiative</span>
            <h1 className="mt-5 text-4xl font-bold text-balance-tight text-foreground sm:text-5xl md:text-6xl">
              Bio Innospace
            </h1>
            <p className="mt-4 font-display text-lg font-semibold text-primary md:text-xl">
              Biotechnology Innovation &amp; Incubation
            </p>
            <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-foreground/90 md:text-lg">
              Empowering researchers, students, innovators, and startups to transform scientific
              ideas into innovative products, technologies, and sustainable solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-primary/90 hover:shadow-[var(--shadow-lift)]"
              >
                Discover our story
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/startups"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Explore startups
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container-site grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="About us"
              title="Bridging scientific research with real-world applications"
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {org.about}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-surface-tint">
        <div className="container-site">
          <SectionHeading
            eyebrow="Purpose"
            title="Our mission & vision"
            description="Two commitments that guide everything we incubate, support, and build."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <ContentCard>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Target className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{org.mission}</p>
            </ContentCard>
            <ContentCard>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-glow text-primary-foreground">
                <Telescope className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{org.vision}</p>
            </ContentCard>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="What we work on"
            title="Our focus areas"
            description="Seven domains where lab science meets market-ready innovation."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, i) => {
              const Icon = focusIcons[i % focusIcons.length]!;
              return (
                <ContentCard key={area} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="pt-1.5 font-medium leading-snug text-foreground">{area}</p>
                </ContentCard>
              );
            })}
            <Link
              to="/focus-areas"
              className="card-soft group flex items-center justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="font-semibold text-primary">See all focus areas</span>
              <ArrowRight
                className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-surface-tint">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we help"
            title="Our services"
            description="From the first experiment to the first customer — support at every step."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = serviceIcons[i % serviceIcons.length]!;
              return (
                <ContentCard key={service} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="pt-1.5 font-medium leading-snug text-foreground">{service}</p>
                </ContentCard>
              );
            })}
            <Link
              to="/services"
              className="card-soft group flex items-center justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="font-semibold text-primary">Explore all services</span>
              <ArrowRight
                className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Startups preview */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our startups"
            title="Innovations taking flight"
            description="A growing community of ventures incubated at Bio Innospace."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {startups.slice(0, 14).map((startup) => (
              <span
                key={startup.name}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-[var(--shadow-soft)]"
              >
                {startup.name}
              </span>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/startups"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View all {startups.length} startups
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-10 md:pb-16">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary to-primary-glow px-6 py-10 text-center shadow-[var(--shadow-lift)] md:px-16 md:py-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-white/10 blur-2xl"
            />
            <h2 className="relative mx-auto max-w-2xl text-3xl font-bold text-balance-tight text-primary-foreground md:text-4xl">
              Have an idea brewing in the lab? Let's make it real.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
              Bio Innospace supports researchers, students, innovators, and startups from concept to
              commercialization.
            </p>
            <Link
              to="/team"
              className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
            >
              Meet the team
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bio Innospace | Biotechnology Innovation & Incubation" },
      {
        name: "description",
        content:
          "Bio Innospace empowers researchers, students, innovators, and startups to transform scientific ideas into products, technologies, and sustainable solutions.",
      },
      { property: "og:title", content: "Bio Innospace | Biotechnology Innovation & Incubation" },
      {
        property: "og:description",
        content:
          "Empowering researchers, students, innovators, and startups to transform scientific ideas into sustainable solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
