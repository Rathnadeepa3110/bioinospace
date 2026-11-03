import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, UserRound } from "lucide-react";
import { ContentCard, PageHero } from "@/components/shared";
import { researchInterns, team } from "@/data/site";
import manickamPhoto from "@/assets/manickam.jpg";
import suriyarajPhoto from "@/assets/suriyaraj.jpg";
import swathiPhoto from "@/assets/swathi.jpg";
import nagadharshiniPhoto from "@/assets/nagadharshini.jpg";
import sivakumaranPhoto from "@/assets/sivakumaran.jpg";
import jothiPhoto from "@/assets/jothi.jpg";
import kiruthikaPhoto from "@/assets/kiruthika.jpg";
import akshayPhoto from "@/assets/akshay.jpg";
import rathnadeepaPhoto from "@/assets/rathnadeepa.jpg";
import kameshwaranPhoto from "@/assets/kameshwaran.jpg";
import santhoshPhoto from "@/assets/santhosh.jpg";
import nisharaPhoto from "@/assets/nishara.jpg";
import asmithaPhoto from "@/assets/asmitha.jpg";

const memberPhotos: Record<string, string> = {
  "Dr. R. Manickam": manickamPhoto ,
  "Dr. S. P. Suriyaraj": suriyarajPhoto ,
  "Ms. Swathi": swathiPhoto ,
  "Ms. Nagadharshini": nagadharshiniPhoto ,
  "Mr. Sivakumaran": sivakumaranPhoto ,
  "Ms. Jothi": jothiPhoto ,
};

const internPhotos: Record<string, string> = {
  "Ms. Kiruthika": kiruthikaPhoto ,
  "Mr. Akshay Kumaran": akshayPhoto ,
  "Ms. Rathnadeepa": rathnadeepaPhoto ,
  "Mr. Kameshwaran": kameshwaranPhoto ,
  "Mr. Santhosh": santhoshPhoto ,
  "Ms. Nishara": nisharaPhoto ,
  "Ms. Asmitha": asmithaPhoto ,
};

function initials(name: string) {
  const cleaned = name.replace(/^(Dr\.|Ms\.|Mr\.)\s*/i, "").trim();
  const parts = cleaned.split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

function TeamPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our people"
        title="The team behind Bio Innospace"
        description="Scientists, managers and mentors working together to turn ideas into impact."
      />

      <section className="section-pad">
        <div className="container-site">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Core team</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) =>
              memberPhotos[member.name] ? (
                <ContentCard
                  key={member.name}
                  className="sm:col-span-2 lg:col-span-3 flex flex-col gap-6 !transition-transform hover:translate-y-0 md:flex-row md:items-start"
                >
                  <img
                    src={memberPhotos[member.name]}
                    alt={member.name}
                    className="h-56 w-44 shrink-0 rounded-xl object-cover object-top shadow-[var(--shadow-soft)] md:h-64 md:w-52"
                  />
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold leading-tight text-primary md:text-3xl">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-foreground">{member.role}</p>
                    <div className="mt-4 space-y-4 border-t border-border pt-4">
                      {(member.bio ?? []).map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 24)}
                          className="text-sm leading-relaxed text-muted-foreground md:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </ContentCard>
              ) : (
                <ContentCard key={member.name} className="flex items-start gap-4">
                  {memberPhotos[member.name] ? (
                    <img
                      src={memberPhotos[member.name]}
                      alt={member.name}
                      className="h-14 w-14 shrink-0 rounded-full border-2 border-primary/15 object-cover object-top shadow-[var(--shadow-soft)]"
                    />
                  ) : (
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow font-display text-base font-bold text-primary-foreground">
                      {initials(member.name)}
                    </span>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-semibold leading-snug text-foreground">{member.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </ContentCard>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-tint">
        <div className="container-site">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
              <FlaskConical className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Research interns
            </h2>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {researchInterns.map((intern) => (
              <ContentCard
                key={intern.name}
                className="flex items-start gap-5 !transition-transform hover:translate-y-0"
              >
                {internPhotos[intern.name] ? (
                  <img
                    src={internPhotos[intern.name]}
                    alt={intern.name}
                    className="h-44 w-36 shrink-0 rounded-xl object-cover object-top shadow-[var(--shadow-soft)]"
                  />
                ) : (
                  <span className="flex h-44 w-36 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <UserRound className="h-10 w-10" aria-hidden />
                  </span>
                )}
                <h3 className="pt-1 font-medium text-foreground">{intern.name}</h3>
              </ContentCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team | Bio Innospace" },
      {
        name: "description",
        content:
          "Meet the Bio Innospace team — leadership, scientists, project staff and research interns driving biotechnology innovation.",
      },
      { property: "og:title", content: "Team | Bio Innospace" },
      {
        property: "og:description",
        content: "The people behind Bio Innospace — leadership, scientists and research interns.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
