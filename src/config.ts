export const config = {
  businessName: 'Divine Security Solution',
  ownerName: 'Shrikant Subhash Shinde',
  established: 2012,
  whatsappNumber: '919028670145',
  whatsappUrl: 'https://wa.me/919028670145',
  areas: ['Raigad', 'Thane', 'Mumbai'] as const,
  notableClients: [
    'Don Bosco School',
    'Hardcarb Technologies Pvt. Ltd.',
    'Rosy Foundation',
  ] as const,
  services: [
    {
      id: 'cctv',
      en: {
        title: 'CCTV Installation & Repair',
        description: 'Dome and bullet cameras, DVR/NVR setup, wiring, and after-service for homes, shops, and offices.',
      },
      mr: {
        title: 'CCTV इन्स्टॉलेशन आणि दुरुस्ती',
        description: 'डोम आणि बुलेट कॅमेरे, DVR/NVR सेटअप, वायरिंग, आणि घर, दुकान आणि ऑफिसांसाठी सर्व्हिस.',
      },
    },
    {
      id: 'ro',
      en: {
        title: 'RO Water Purifier Sales & Service',
        description: 'Wall-mounted RO units, filter replacement, membrane change, and annual maintenance.',
      },
      mr: {
        title: 'RO वॉटर प्युरिफायर विक्री आणि सर्व्हिस',
        description: 'वॉल-माउंटेड RO युनिट, फिल्टर बदल, मेम्ब्रेन बदल, आणि वार्षिक मेंटेनन्स.',
      },
    },
    {
      id: 'epbx',
      en: {
        title: 'EPBX Systems',
        description: 'Intercom and telephone exchange systems for offices, schools, and small industries.',
      },
      mr: {
        title: 'EPBX सिस्टम',
        description: 'ऑफिस, शाळा आणि छोट्या उद्योगांसाठी इंटरकॉम आणि टेलिफोन एक्सचेंज सिस्टम.',
      },
    },
    {
      id: 'biometric',
      en: {
        title: 'Biometric Attendance & Access Control',
        description: 'Fingerprint and card-based attendance machines, door access systems for offices and societies.',
      },
      mr: {
        title: 'बायोमेट्रिक हजेरी आणि अॅक्सेस कंट्रोल',
        description: 'फिंगरप्रिंट आणि कार्ड-आधारित हजेरी मशीन, ऑफिस आणि सोसायट्यंसाठी डोअर अॅक्सेस सिस्टम.',
      },
    },
    {
      id: 'amc',
      en: {
        title: 'Annual Maintenance Contracts',
        description: 'Yearly service contracts for CCTV, RO, EPBX, and biometric systems — regular checkups and priority repairs.',
      },
      mr: {
        title: 'वार्षिक मेंटेनन्स कॉन्ट्रॅक्ट',
        description: 'CCTV, RO, EPBX आणि बायोमेट्रिक सिस्टमसाठी वार्षिक सर्व्हिस कॉन्ट्रॅक्ट — नियमित तपासणी आणि प्राधान्य दुरुस्ती.',
      },
    },
  ] as const,
} as const;

export type ServiceId = (typeof config.services)[number]['id'];
export type Locale = 'en' | 'mr';
