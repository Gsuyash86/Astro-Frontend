import { TNN_HEALTH_MSID } from "../../../constants/index";

let hoursAvailable = {
  "@type": "OpeningHoursSpecification",
  opens: "09:00",
  closes: "18:00",
};
const sameAs = [
  // 'https://www.facebook.com/healthandmeofficial',
  // 'https://x.com/healthandmenow',
  // 'https://www.instagram.com/healthandmenow',
];
const OrgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pickelball Now",
  logo: {
    "@type": "ImageObject",
    url: `${process.env.NEXT_PUBLIC_PHOTO_API}/photo/msid-${TNN_HEALTH_MSID}/${TNN_HEALTH_MSID}.jpg`,
    width: 600,
    height: 60,
  },
  url: process.env.NEXT_PUBLIC_WEBAPP_BASE_URL,

  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No-FC 6, Second Floor, Film City, Noida Sector 16A,",
    addressLocality: "Noida",
    addressRegion: "India",
    postalCode: "201301",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 – 0120 – 6634600",
    contactType: "Customer Service",
    areaServed: "IN",
    availableLanguage: "English",
    hoursAvailable: hoursAvailable,
  },
  sameAs: sameAs,
};

export default OrgSchema;
