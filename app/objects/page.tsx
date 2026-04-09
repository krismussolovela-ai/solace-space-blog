import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PickOfTheWeek } from "@/components/PickOfTheWeek";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Objects | Solace Space",
  description:
    "Things worth carrying. A weekly pick of handmade objects from Mexico and beyond — chosen for daily ritual use, meaningful origin, and the ability to make a new place feel inhabited.",
};

const currentPick = {
  name: "Barro negro bowl",
  origin: "San Bartolo Coyotepec, Oaxaca",
  maker: "Doña Rosa Nieto",
  description:
    "A handmade black clay bowl fired in the traditional barro negro style. The weight of it grounds a table. I've moved it across three apartments and it's the first thing I unpack every time. Not because I need it, but because it reminds me that I'm home.",
  story:
    "Barro negro — black clay — is made only in San Bartolo Coyotepec, a village thirty minutes south of Oaxaca City. The craft has been passed through families for generations. This bowl was made by hand, not on a wheel. You can feel the fingerprints.",
  price: "~$45",
  criteria: "Handmade · Oaxaca, Mexico · Daily ritual use",
  weekOf: "April 7, 2026",
  available: false,
};

export default async function ObjectsPage() {
  const allPosts = await getAllPosts();
  const objectsPosts = allPosts.filter((p) => p.category?.toLowerCase() === "objects");

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-6"
            >
              Objects · @solacespace
            </p>
            <h1
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-5xl md:text-6xl font-light text-deep-brown leading-tight mb-6"
            >
              Things worth carrying.
            </h1>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
              className="text-base font-light leading-relaxed max-w-2xl"
            >
              Every week: one handmade object chosen for its origin, its craft, and its ability to make a new place feel inhabited. From Mexico and beyond. Curated by Kristina Muss.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* Selection criteria */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-px" style={{ backgroundColor: "#E8D9C4" }}>
              {[
                { label: "Handmade", description: "Made by hand, not by machine. Craft that shows." },
                { label: "Meaningful origin", description: "From Mexico or a place with a story worth telling." },
                { label: "Daily ritual use", description: "Something you reach for every day. Not decoration." },
              ].map((criterion) => (
                <div key={criterion.label} className="p-6" style={{ backgroundColor: "#FAF5EC" }}>
                  <p
                    style={{ fontFamily: "var(--font-jost)", color: "#2AADA4" }}
                    className="text-xs tracking-widest uppercase mb-2"
                  >
                    {criterion.label}
                  </p>
                  <p
                    style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                    className="text-xs font-light leading-relaxed"
                  >
                    {criterion.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* Pick of the Week */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-10"
            >
              Pick of the week
            </p>
            <PickOfTheWeek pick={currentPick} />
          </div>
        </section>

        {/* Objects from the journal */}
        {objectsPosts.length > 0 && (
          <>
            <div className="max-w-5xl mx-auto px-6">
              <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
            </div>
            <section className="py-16 px-6">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                  <p
                    style={{ fontFamily: "var(--font-jost)" }}
                    className="text-xs tracking-[0.2em] uppercase text-clay"
                  >
                    From the objects journal
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {objectsPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col gap-3"
                    >
                      {post.image && (
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.imageAlt || post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      {!post.image && (
                        <div className="aspect-[4/3]" style={{ backgroundColor: "#E8D9C4" }} />
                      )}
                      <p
                        style={{ fontFamily: "var(--font-jost)", color: "#2AADA4" }}
                        className="text-xs tracking-widest uppercase"
                      >
                        Objects
                      </p>
                      <h3
                        style={{ fontFamily: "var(--font-cormorant)" }}
                        className="text-xl font-light text-deep-brown leading-tight group-hover:text-clay transition-colors"
                      >
                        {post.title}
                      </h3>
                      <p
                        style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                        className="text-sm font-light leading-relaxed line-clamp-2"
                      >
                        {post.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Wishlist signup */}
        <section
          className="py-20 px-6"
          style={{ backgroundColor: "#2C3519" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
              className="text-xs tracking-[0.2em] uppercase mb-5"
            >
              Coming soon
            </p>
            <h2
              style={{ fontFamily: "var(--font-cormorant)", color: "#FAF5EC" }}
              className="text-3xl md:text-4xl font-light leading-tight mb-4"
            >
              A small curated shop.
            </h2>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "rgba(196, 168, 130, 0.8)" }}
              className="text-sm font-light leading-relaxed max-w-lg mx-auto mb-10"
            >
              Each object is chosen based on wishlist interest before it&apos;s sourced. Subscribe to be notified when new picks become available to order.
            </p>
            <div className="max-w-sm mx-auto">
              <NewsletterSignup variant="dark" buttonText="Notify me of new objects" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
