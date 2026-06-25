import { HomePage } from './components/home-page';
import { JsonLd } from '@/lib/seo/json-ld';

export default function Page() {
  return (
    <>
      <JsonLd />
      <HomePage />
    </>
  );
}
