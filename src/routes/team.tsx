import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, UserRound } from "lucide-react";
import { ContentCard, PageHero } from "@/components/shared";
import { researchInterns, team } from "@/data/site";
import manickamPhoto from "../../image/manikam.jpeg";
import ananthPhoto from "../../image/Dr.J.P.Ananth.jpeg";
import ramkumarPhoto from "../../image/Mr.Ramkumar .png";
import suriyarajPhoto from "../../image/suriyaraj.jpeg";
import nagadharshiniPhoto from "../../image/nagadharshini.jpeg";
import sivakumaranPhoto from "../../image/siva.jpeg";
import jothiPhoto from "../../image/jothi.jpeg";
import kiruthikaPhoto from "../../image/kiruthika.jpeg";
import akshayPhoto from "../../image/akshay_img.jpeg";
import rathnadeepaPhoto from "../../image/rathna.jpeg";
import kameshwaranPhoto from "../../image/Kameshwaran.jpeg";
import santhoshPhoto from "../../image/santhosh.jpeg";
import nisharaPhoto from "../../image/Nishara.jpeg";
import asmithaPhoto from "../../image/Asmitha.jpeg";

const memberPhotos: Record<string, string> = {
  "Dr. R. Manickam": manickamPhoto,
  "Dr. J. P. Ananth": ananthPhoto,
  "Mr. Ramkumar": ramkumarPhoto,
  "Dr. S. P. Suriyaraj": suriyarajPhoto,
  "Ms. Nagadharshini": nagadharshiniPhoto,
  "Mr. Sivakumaran": sivakumaranPhoto,
  "Ms. Jothi": jothiPhoto,
};

const internPhotos: Record<string, string> = {
  "Ms. Kiruthika": kiruthikaPhoto,
  "Mr. Akshay Kumaran": akshayPhoto,
  "Ms. Rathnadeepa": rathnadeepaPhoto,
  "Mr. Kameshwaran": kameshwaranPhoto,
  "Mr. Santhosh": santhoshPhoto,
  "Ms. Nishara": nisharaPhoto,
  "Ms. Asmitha": asmithaPhoto,
};

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
              member.name === "Mr. Ramkumar" ? (
                <ContentCard
                  key={member.name}
                  className="flex flex-col items-center text-center !transition-transform hover:translate-y-0"
                >
                  <img
                    src={memberPhotos[member.name]}
                    alt={member.name}
                    className="h-64 w-full rounded-xl object-cover object-top shadow-[var(--shadow-soft)]"
                  />
                  <h3 className="mt-4 font-semibold leading-snug text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {member.role}
                  </p>
                </ContentCard>
              ) : member.bio?.length ? (
                <ContentCard
                  key={member.name}
                  className="sm:col-span-2 lg:col-span-3 flex flex-col gap-6 !transition-transform hover:translate-y-0 md:flex-row md:items-start"
                >
                  {memberPhotos[member.name] ? (
                    <img
                      src={memberPhotos[member.name]}
                      alt={member.name}
                      className="h-56 w-44 shrink-0 rounded-xl object-cover object-top shadow-[var(--shadow-soft)] md:h-64 md:w-52"
                    />
                  ) : (
                    <span className="flex h-56 w-44 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary md:h-64 md:w-52">
                      <UserRound className="h-10 w-10" aria-hidden />
                    </span>
                  )}
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold leading-tight text-primary md:text-3xl">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-foreground">{member.role}</p>
                    <div className="mt-4 space-y-4 border-t border-border pt-4">
                      {member.bio.map((paragraph) => (
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
                <ContentCard
                  key={member.name}
                  className="flex flex-col items-center text-center !transition-transform hover:translate-y-0"
                >
                  {memberPhotos[member.name] ? (
                    <img
                      src={memberPhotos[member.name]}
                      alt={member.name}
                      className="h-64 w-full rounded-xl object-cover object-top shadow-[var(--shadow-soft)]"
                    />
                  ) : (
                    <span className="flex h-64 w-full items-center justify-center rounded-xl bg-secondary text-primary">
                      <UserRound className="h-10 w-10" aria-hidden />
                    </span>
                  )}
                  <h3 className="mt-4 font-semibold leading-snug text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {member.role}
                  </p>
                </ContentCard>
              ),
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
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Research interns</h2>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {researchInterns.map((intern) => (
              <ContentCard
                key={intern.name}
                className="flex flex-col items-center text-center !transition-transform hover:translate-y-0"
              >
                {internPhotos[intern.name] ? (
                  <img
                    src={internPhotos[intern.name]}
                    alt={intern.name}
                    className="h-64 w-full rounded-xl object-cover object-top shadow-[var(--shadow-soft)]"
                  />
                ) : (
                  <span className="flex h-64 w-full items-center justify-center rounded-xl bg-secondary text-primary">
                    <UserRound className="h-10 w-10" aria-hidden />
                  </span>
                )}
                <h3 className="mt-4 font-medium text-foreground">{intern.name}</h3>
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
