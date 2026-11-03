import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, Globe, Users2, Lightbulb, Rocket } from "lucide-react";
import { ContentCard, PageHero } from "@/components/shared";
import { startups, type Startup } from "@/data/site";

type Filter = "all" | "incubated" | "virtual";

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All startups" },
  { key: "incubated", label: "Incubated" },
  { key: "virtual", label: "Virtual" },
];

function badgeFor(startup: Startup) {
  if (startup.virtual) return { label: "Virtual", icon: Globe, classes: "bg-secondary text-primary" };
  if (startup.tag === "Co-Working")
    return { label: "Co-Working", icon: Users2, classes: "bg-accent text-accent-foreground" };
  if (startup.tag === "Innovator")
    return { label: "Innovator", icon: Lightbulb, classes: "bg-accent text-accent-foreground" };
  return { label: "Incubated", icon: Rocket, classes: "bg-secondary text-primary" };
}

function StartupsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = startups.filter((s) => {
    if (filter === "all") return true;
    if (filter === "virtual") return s.virtual;
    return !s.virtual;
  });

  return (
    <div>
      <PageHero
        eyebrow="Our startups"
        title={`${startups.length} ventures growing with us`}
        description="A thriving community of startups incubated at Bio Innospace — from nanotech and biotech to foods, engineering and green technologies."
      />

      <section className="section-pad">
        <div className="container-site">
          <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Filter startups">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  filter === f.key
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                    : "border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((startup) => {
              const badge = badgeFor(startup);
              const BadgeIcon = badge.icon;
              return (
                <ContentCard key={startup.name} className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Building2 className="h-5 w-5" aria-hidden />
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${badge.classes}`}
                    >
                      <BadgeIcon className="h-3.5 w-3.5" aria-hidden />
                      {badge.label}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-semibold leading-snug text-foreground">{startup.name}</h2>
                    {startup.tag && startup.tag !== "Co-Working" && startup.tag !== "Innovator" && (
                      <p className="mt-1.5 text-sm italic text-muted-foreground">{startup.tag}</p>
                    )}
                  </div>
                </ContentCard>
              );
            })}
          </div>

          {visible.length === 0 && (
            <p className="mt-8 text-center text-muted-foreground">No startups in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/startups")({
  component: StartupsPage,
  head: () => ({
    meta: [
      { title: "Our Startups | Bio Innospace" },
      {
        name: "description",
        content:
          "Meet the ventures incubated at Bio Innospace — nanotech, biotech, foods, engineering and green technology startups.",
      },
      { property: "og:title", content: "Our Startups | Bio Innospace" },
      {
        property: "og:description",
        content: "A thriving community of startups incubated at Bio Innospace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
