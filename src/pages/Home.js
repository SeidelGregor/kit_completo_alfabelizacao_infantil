import { Navbar } from '../components/navbar/navbar';
import { BodyContent } from '../components/body/body_content';
import { Footer } from '../components/footer/footer';

export function Home() {
  return `
    ${Navbar()}
    ${BodyContent()}
    ${Footer()}
  `;
}