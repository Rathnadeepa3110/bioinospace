import { createFileRoute } from "@tanstack/react-router";
import { Handshake, GraduationCap } from "lucide-react";
import { ContentCard, PageHero } from "@/components/shared";
import { advisors } from "@/data/site";

function initials(name: string) {
  const cleaned = name.replace(/^Dr\.\s*/i, "").trim();
  const parts = cleaned.split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

function CollaboratorsPage() {
  return (
    <div>
      <PageHero
        eyebrow="MoU & Collaborators"
        title="A network that spans the world"
        description="Bio Innospace collaborates with leading universities, research institutes and industry partners through memoranda of understanding and shared expertise."
      />

      <section className="section-pad">
        <div className="container-site">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
              <Handshake className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              MoU &amp; Collaborators
            </h2>
          </div>
          <div className="card-soft mt-6 flex items-start gap-4 p-6">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <GraduationCap className="h-5 w-5" aria-hidden />
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Our signed MoUs and institutional collaborators bring expertise from institutes such
              as IIT Madras, Anna University, Bharathiar University, PSG Institute of Advanced
              Studies, NIPER Hajipur, the University of Madras and international partners in the
              United States — extending our advisory strength below.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-tint">
        <div className="container-site">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Advisors</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Distinguished experts from academia, research institutes and industry who guide our
            scientific direction.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {advisors.map((advisor) => (
              <ContentCard key={advisor.name} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow font-display text-sm font-bold text-primary-foreground">
                  {initials(advisor.name)}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold leading-snug text-foreground">{advisor.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {advisor.org}
                  </p>
                </div>
              </ContentCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/collaborators")({
  component: CollaboratorsPage,
  head: () => ({
    meta: [
      { title: "MoU & Collaborators | Bio Innospace" },
      {
        name: "description",
        content:
          "Bio Innospace collaborates with leading institutes worldwide and is guided by distinguished advisors from academia and industry.",
      },
      { property: "og:title", content: "MoU & Collaborators | Bio Innospace" },
      {
        property: "og:description",
        content:
          "A worldwide collaboration network and expert advisors guiding Bio Innospace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
