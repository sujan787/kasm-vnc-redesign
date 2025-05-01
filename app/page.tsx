


import NavBar from "../components/nav-bar"
import Footer from "../components/footer"

// @ts-ignore
// import Filer from '@cloudcannon/filer';
import Blocks from "@/components/blocks";
import json from "@/content/pages/index.json"

export default async function Home() {

  // const filer = new Filer({ path: 'content' });
  // const json = await filer.getItem('index.md', { folder: 'pages' });
  // const page = JSON.parse(JSON.stringify(json))
  const page = { data: json }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white ">
      <NavBar isScrolled={false} />
      <Blocks content_blocks={page.data.content_blocks} />
      <Footer />
    </div>
  )
}

