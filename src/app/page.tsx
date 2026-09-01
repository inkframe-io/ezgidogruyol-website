import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Beyond } from "@/components/sections/beyond";
import { Skills } from "@/components/sections/skills";
import { References } from "@/components/sections/references";
import { SiteFooter } from "@/components/sections/footer";
import { LineAsset, type LineName } from "@/components/line-asset";

function Divider({ name }: { name: LineName }) {
  return (
    <LineAsset
      name={name}
      flow
      width={240}
      className="mx-auto hidden w-24 opacity-60 sm:block"
    />
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main" className="mx-auto max-w-4xl px-6">
        <Hero />
        <div className="space-y-24 py-16 md:space-y-32 md:py-24">
          <About />
          <Divider name="double-wave" />
          <Work />
          <Divider name="s-curve" />
          <Beyond />
          <Skills />
          <Divider name="halftone-divider" />
          <References />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
