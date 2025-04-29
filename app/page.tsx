import { promises as fs } from 'fs';
import path from 'path';
import CloudCannonLivePreview from './_components/CloudCannon';

// Read JSON content at build time
async function getContent() {
  const filePath = path.join(process.cwd(), 'content', 'homepage.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function Home() {
  const data = await getContent();

  return (
    <main>
      <h1 className="editable">{data.title}</h1>
      <h2 className="editable">{data.subtitle}</h2>
      <p className="editable">{data.description}</p>
      <CloudCannonLivePreview />
    </main>
  );
}

