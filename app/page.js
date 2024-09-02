import AppBar from "@/ui/app-bar/app-bar";
import Slides from "@/ui/slides/slides";
import WorksGallery from "@/ui/works-gallery";
import Workflow from "@/ui/workflow";
import AboutUs from "@/ui/about-us";
import Team from "@/ui/team";
import CompanyValues from "@/ui/company-values";
import Stats from "@/ui/stats";
import Logos from "@/ui/logos";
import Footer from "@/ui/footer";

export default async function Home() {
  const sectionsData = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/inne_sekcje')
  const sections = await sectionsData.json()
  const workflowSection = sections.filter(item => item.slug == "proces-wykonczenia")[0]
  const aboutUsSection = sections.filter(item => item.slug == "o-nas")[0]
  const companyValues = sections.filter(item => item.slug == "o-firmy")[0]
  const logos = sections.filter(item => item.slug == "loga-partnerow")[0]
  
  let infoData = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/company_office')
  let info = await infoData.json()
  info = info.filter(item => item.slug == "gdynia")[0]

  return (
    <>
      <header className="p-8 h-screen">
        <AppBar />
        <Slides />
      </header>
      <main>
        <WorksGallery />
        <Workflow section={workflowSection} />
        <AboutUs btnText={aboutUsSection.meta.button_text} content={aboutUsSection.content.rendered} />
        <Team />
        <CompanyValues section={companyValues} />
        <Stats />
        <Logos logos={logos} />
      </main>
      <Footer info={info} />
    </>
  );
}
