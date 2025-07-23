// .source folder will be generated when you run `next dev`
import { docs } from '@/source.config';
import { loader } from 'fumadocs-core/source';

export const source: ReturnType<typeof loader> = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});