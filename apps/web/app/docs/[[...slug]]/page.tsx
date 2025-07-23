import {
  DocsPage,
  DocsDescription,
  DocsTitle,
  DocsBody,
} from 'fumadocs-ui/page';

export default function Page() {
  return (
    <DocsPage>
      <DocsTitle>title</DocsTitle>
      <DocsDescription>description</DocsDescription>
      <DocsBody>
        <h2>This heading looks good!</h2>
        It applies the Typography styles, wrap your content here.
      </DocsBody>
    </DocsPage>
  );
}
