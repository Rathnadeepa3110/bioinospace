import { createFileRoute } from "@tanstack/react-router";
import { Target, Telescope } from "lucide-react";
import { ContentCard, PageHero } from "@/components/shared";
import { org, stats } from "@/data/site";

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Bio Innospace"
        title="Where research becomes innovation"
        description="A biotechnology innovation and incubation initiative under the collaboration of RGU and AIC RAISE."
      />

      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Who we are</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {org.about}
          </p>
        </div>
      </section>

      <section className="section-pad bg-surface-tint">
        <div className="container-site grid gap-6 md:grid-cols-2">
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
      </section>

      <section className="section-pad">
        <div className="container-site grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card-soft p-6 text-center">
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | Bio Innospace" },
      {
        name: "description",
        content:
          "Learn about Bio Innospace — a biotechnology innovation and incubation initiative under the collaboration of RGU and AIC RAISE.",
      },
      { property: "og:title", content: "About | Bio Innospace" },
      {
        property: "og:description",
        content:
          "A biotechnology innovation and incubation initiative under the collaboration of RGU and AIC RAISE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
