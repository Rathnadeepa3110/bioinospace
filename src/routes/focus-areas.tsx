import { createFileRoute } from "@tanstack/react-router";
import {
  Atom,
  HeartPulse,
  Layers,
  Leaf,
  Pill,
  Recycle,
  Sprout,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ContentCard, PageHero } from "@/components/shared";
import { focusAreas } from "@/data/site";

const icons = [Atom, Layers, HeartPulse, Pill, Sprout, Leaf, Recycle];
const descriptions = [
  "Engineering materials at the nanoscale to create stronger, lighter and smarter composites.",
  "Designing next-generation bio-formulations powered by nanobiotechnology.",
  "Advancing diagnostics, devices and therapies that improve human health.",
  "Translating biotechnology into safer medicines and nutritional products.",
  "Improving crops, soil and ecosystems with environmentally conscious biotech.",
  "Unlocking the potential of herbal actives and nature-derived products.",
  "Building sustainable materials and clean technologies for a greener future.",
];

function FocusAreasPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our focus areas"
        title="Seven domains of scientific impact"
        description="From nanoscale materials to green technologies — the fields where Bio Innospace turns research into reality."
      />
      <section className="section-pad">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <ContentCard key={area} className="flex flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="mt-5 text-lg font-semibold leading-snug text-foreground">{area}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {descriptions[i]}
                </p>
              </ContentCard>
            );
          })}
        </div>
        <div className="container-site mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            See how we support these areas
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/focus-areas")({
  component: FocusAreasPage,
  head: () => ({
    meta: [
      { title: "Focus Areas | Bio Innospace" },
      {
        name: "description",
        content:
          "Nanotechnology, nanobiotechnology, healthcare, pharma, agriculture, herbal innovation and sustainable materials — the focus areas of Bio Innospace.",
      },
      { property: "og:title", content: "Focus Areas | Bio Innospace" },
      {
        property: "og:description",
        content:
          "Seven domains where Bio Innospace turns scientific research into market-ready innovation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
