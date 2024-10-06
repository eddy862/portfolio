import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNavbar"
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects"
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto px-5 sm:px-10 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Client />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
