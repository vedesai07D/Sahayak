import type { Localized } from "@/lib/i18n";

export const DAILY_TIPS: Localized[] = [
  {
    en: "Never share your OTP with anyone, even if they say they are calling from your bank.",
    hi: "अपना ओटीपी किसी को न बताएँ, चाहे वे कहें कि वे बैंक से बोल रहे हैं।",
    mr: "तुमचा ओटीपी कोणालाही सांगू नका, ते बँकेतून बोलत असल्याचे म्हणाले तरीही.",
  },
  {
    en: "Check the receiver's name on the screen before you confirm a UPI payment.",
    hi: "यूपीआई भुगतान से पहले स्क्रीन पर पाने वाले का नाम ज़रूर देखें।",
    mr: "यूपीआय पेमेंट करण्यापूर्वी स्क्रीनवरील नाव नक्की तपासा.",
  },
  {
    en: "Do not install an app because a stranger on a call tells you to.",
    hi: "किसी अनजान कॉल करने वाले के कहने पर कोई ऐप इंस्टॉल न करें।",
    mr: "अनोळखी व्यक्तीच्या सांगण्यावरून कोणतेही अ‍ॅप इन्स्टॉल करू नका.",
  },
  {
    en: "Open official websites yourself instead of tapping links sent by strangers.",
    hi: "अनजान लिंक पर टैप करने के बजाय आधिकारिक वेबसाइट खुद खोलें।",
    mr: "अनोळखी लिंकवर टॅप करण्याऐवजी अधिकृत वेबसाइट स्वतः उघडा.",
  },
  {
    en: "A bank employee will never ask for your UPI PIN or card PIN.",
    hi: "बैंक कर्मचारी कभी आपका यूपीआई पिन या कार्ड पिन नहीं पूछेगा।",
    mr: "बँक कर्मचारी कधीही तुमचा यूपीआय पिन किंवा कार्ड पिन विचारणार नाही.",
  },
  {
    en: "You never need a PIN to receive money. Only to send it.",
    hi: "पैसे लेने के लिए पिन की ज़रूरत नहीं होती, केवल भेजने के लिए होती है।",
    mr: "पैसे स्वीकारण्यासाठी पिन लागत नाही, फक्त पाठवण्यासाठी लागतो.",
  },
  {
    en: "Keep a screen lock on your phone — a simple PIN protects everything inside.",
    hi: "फ़ोन पर स्क्रीन लॉक रखें — एक साधारण पिन सब कुछ सुरक्षित रखता है।",
    mr: "फोनवर स्क्रीन लॉक ठेवा — साधा पिनही सर्व सुरक्षित ठेवतो.",
  },
  {
    en: "If a message creates fear or urgency, slow down. Scams need you to hurry.",
    hi: "अगर कोई संदेश डर या जल्दबाज़ी पैदा करे तो रुकिए। ठगी को जल्दबाज़ी चाहिए।",
    mr: "संदेशाने भीती किंवा घाई निर्माण केली तर थांबा. फसवणुकीला घाई हवी असते.",
  },
  {
    en: "Talk to a family member before sending money to someone you met online.",
    hi: "ऑनलाइन मिले किसी व्यक्ति को पैसे भेजने से पहले परिवार से बात करें।",
    mr: "ऑनलाइन भेटलेल्या व्यक्तीला पैसे पाठवण्यापूर्वी कुटुंबाशी बोला.",
  },
  {
    en: "Update your apps regularly on Wi-Fi. Updates fix safety problems.",
    hi: "वाई-फ़ाई पर ऐप नियमित अपडेट करें। अपडेट सुरक्षा खामियाँ ठीक करते हैं।",
    mr: "वाय-फायवर अ‍ॅप्स नियमित अपडेट करा. अपडेट सुरक्षेतील त्रुटी दूर करतात.",
  },
  {
    en: "Nobody honest will ask you to move money to a 'safe account'.",
    hi: "कोई ईमानदार व्यक्ति आपसे 'सुरक्षित खाते' में पैसे भेजने को नहीं कहेगा।",
    mr: "प्रामाणिक व्यक्ती तुम्हाला 'सुरक्षित खात्यात' पैसे पाठवायला सांगणार नाही.",
  },
  {
    en: "Save a few trusted numbers so you can call for help quickly.",
    hi: "कुछ भरोसेमंद नंबर सहेजें ताकि ज़रूरत पर तुरंत कॉल कर सकें।",
    mr: "काही विश्वासाचे नंबर जतन करा, म्हणजे गरज पडल्यास लगेच फोन करता येईल.",
  },
];

export function tipOfTheDay(): { index: number; text: Localized } {
  const day = Math.floor(Date.now() / 86400000);
  const index = day % DAILY_TIPS.length;
  return { index, text: DAILY_TIPS[index] ?? DAILY_TIPS[0]! };
}
