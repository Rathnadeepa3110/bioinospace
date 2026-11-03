import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FlaskConical,
  GraduationCap,
  HandCoins,
  LineChart,
  Microscope,
  ArrowRight,
} from "lucide-react";
import { ContentCard, PageHero } from "@/components/shared";
import { services } from "@/data/site";

const icons = [FlaskConical, LineChart, HandCoins, Microscope, GraduationCap];
const descriptions = [
  "Access advanced laboratories, modern equipment and hands-on R&D support for your research and product development.",
  "Shape a winning business plan with guidance on strategy, financial planning and go-to-market thinking.",
  "Connect with seed funding sources and investors ready to back promising biotech ventures.",
  "Validate your product through testing, clinical trials and real market insights before you scale.",
  "Learn from experienced mentors through structured training, workshops and one-on-one guidance.",
];

function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our services"
        title="Support at every stage of your journey"
        description="From the first experiment to the first customer, Bio Innospace backs founders and researchers with practical, end-to-end support."
      />
      <section className="section-pad">
        <div className="container-site grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <ContentCard key={service} className="flex flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="mt-5 text-lg font-semibold leading-snug text-foreground">
                  {service}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {descriptions[i]}
                </p>
              </ContentCard>
            );
          })}
        </div>
        <div className="container-site mt-8 text-center">
          <Link
            to="/startups"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Meet the startups we support
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | Bio Innospace" },
      {
        name: "description",
        content:
          "Advanced labs and R&D support, business strategy, seed funding, product testing, clinical trials and mentorship — services from Bio Innospace.",
      },
      { property: "og:title", content: "Services | Bio Innospace" },
      {
        property: "og:description",
        content:
          "End-to-end support for biotech founders: labs, funding, testing, market insights and mentorship.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
