import AddProductForm from "@/components/AddProductForm";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { Bell, Rabbit, Shield, TrendingDown, Sparkles } from "lucide-react";
import Image from "next/image";
import { getProducts } from "./actions";
import ProductCard from "@/components/ProductCard";
import { ThemeToggle } from "@/components/ThemeToggle";

export default async function Home() {

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const products = user ? await getProducts() : [];

  const FEATURES = [
    {
      icon: Rabbit,
      title: "Neural Fast Engine",
      description:
        "Cyber scraper processes dynamic sites with AI-grade precision",
    },
    {
      icon: Shield,
      title: "Encrypted Core",
      description:
        "Your links live behind secure server firewalls",
    },
    {
      icon: Bell,
      title: "Real-Time Signals",
      description:
        "Instant neon alerts when the price matrix shifts",
    },
  ];

  return (
    <main
      className="
      min-h-screen relative

      /* LIGHT CYBER */
      bg-[radial-gradient(circle_at_top,#ecfeff,#ffffff_60%)]
      
      /* DARK CYBER */
      dark:bg-[radial-gradient(circle_at_top,#0f172a,#020617_60%)]

      transition-colors duration-200
    "
    >

      {/* SUBTLE GRID PATTERN */}
      <div className="
        absolute inset-0 pointer-events-none
        bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),
            linear-gradient(to_bottom,#00000006_1px,transparent_1px)]
        bg-[size:36px_36px]
        dark:opacity-20
      "/>

      {/* HEADER */}
     {/* HEADER */}
<header
  className="
  bg-white/60 dark:bg-black/60
  backdrop-blur-xl
  border-b border-cyan-200/30 dark:border-purple-500/20
  sticky top-0 z-10
"
>
  <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">

    {/* LOGO + BETA */}
    <div className="flex items-center">

      {/* LOGO BOX – negative margin removes PNG empty padding */}
      <div className="h-12 w-[240px] relative -mr-14">
        <Image
          src="/logo1.png"
          alt="PricePulse logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* BETA BADGE – now visually attached */}
      <span
        className="
        inline-flex items-center gap-1
        text-[11px]

        bg-cyan-50 dark:bg-purple-950/40
        border border-cyan-300/40 dark:border-purple-500/40

        px-1.5 py-0.5 rounded-md

        text-cyan-700 dark:text-purple-300

        shadow-[0_0_10px_rgba(6,182,212,0.2)]
        dark:shadow-[0_0_10px_rgba(168,85,247,0.2)]
      "
      >
        <Sparkles className="w-3 h-3" />
        beta
      </span>

    </div>

    {/* ACTION BUTTONS */}
    <div className="flex items-center gap-3">
      <ThemeToggle />
      <AuthButton user={user} />
    </div>

  </div>
</header>




      {/* HERO */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">

          <div
            className="
            inline-flex items-center gap-2
            bg-cyan-50 dark:bg-purple-950/40
            border border-cyan-300/40 dark:border-purple-500/40
            text-cyan-700 dark:text-purple-300
            px-5 py-2 rounded-full
            text-sm font-medium mb-6
          "
          >
            Built with care by Dhruv
          </div>

          <h2
            className="
            text-5xl font-bold
            text-slate-900 dark:text-white
            mb-4 tracking-tight

            drop-shadow-[0_0_6px_rgba(34,211,238,0.3)]
            dark:drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]
          "
          >
            Track Smarter, Buy Cheaper
          </h2>

          <p
            className="
            text-xl
            text-slate-600 dark:text-gray-400
            mb-12 max-w-2xl mx-auto
          "
          >
            Monitor prices from any ecommerce site.
            Get alerts when prices drop.
            Save money without the effort.
          </p>

          {/* PRODUCT FORM */}
          <AddProductForm user={user} />

          {/* FEATURES */}
          {products.length === 0 && (
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="

                  /* LIGHT */
                  bg-white/70
                  border border-cyan-200/40

                  /* DARK */
                  dark:bg-black/60
                  dark:border-purple-500/30

                  backdrop-blur-lg
                  p-6 rounded-xl

                  hover:-translate-y-1
                  transition-all duration-300

                  shadow-[0_0_20px_rgba(6,182,212,0.08)]
                  dark:shadow-[0_0_20px_rgba(168,85,247,0.15)]
                "
                >
                  <div
                    className="
                    w-12 h-12
                    bg-cyan-50 dark:bg-purple-950/40
                    border border-cyan-300/40 dark:border-purple-500/40
                    rounded-lg
                    flex items-center justify-center
                    mb-4 mx-auto
                  "
                  >
                    <Icon className="h-6 w-6 text-cyan-600 dark:text-purple-300" />
                  </div>

                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-gray-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>


      {/* PRODUCTS GRID */}
      {user && products.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-20">

          <div className="flex items-center justify-between mb-6">
           <h3 className="
   text-5xl font-bold

  text-cyan-700 dark:text-purple-300

  tracking-tight

  drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]
  dark:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]
">
              Your Tracked Products
            </h3>

            <span className="text-sm text-slate-500 dark:text-gray-400">
              {products.length}{" "}
              {products.length === 1 ? "product" : "products"}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 items-start">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </section>
      )}


      {/* EMPTY STATE */}
      {user && products.length === 0 && (
        <section className="max-w-2xl mx-auto px-4 pb-20 text-center">

          <div
            className="
            bg-white/70 dark:bg-black/60
            backdrop-blur-lg
            rounded-xl

            border-2 border-dashed
            border-cyan-300/40 dark:border-purple-500/40
            p-12
          "
          >
            <TrendingDown className="w-16 h-16 text-cyan-400 mx-auto mb-4" />

            <h3 className=" text-xl font-semibold

  text-cyan-700 dark:text-purple-300

  tracking-wide

  drop-shadow-[0_0_6px_rgba(6,182,212,0.3)]
  dark:drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]">
              No products yet
            </h3>

            <p className="text-slate-600 dark:text-gray-400">
              Add your first product above to start tracking prices!
            </p>
          </div>

        </section>
      )}

    </main>
  );
}
