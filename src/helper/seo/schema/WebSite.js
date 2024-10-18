const WebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pickelball Now",
  alternateName: "Pickelball",
  url: process.env.NEXT_PUBLIC_WEBAPP_BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${process.env.NEXT_PUBLIC_WEBAPP_BASE_URL}/search-result/{search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default WebSiteSchema;
