import type { Localized, LocalizedList } from "@/lib/i18n";
import type { CommunityPost } from "@/lib/store";

/* ---------------- YouTube tutorials ---------------- */
export type Tutorial = {
  id: string;
  title: Localized;
  description: Localized;
  videoId: string;
  category: string;
  /** Real durations are unknown, so the field is optional — never invented. */
  duration?: string;
  difficulty: "beginner" | "comfortable" | "confident";
};

/** One entry per unique verified YouTube video used in the lessons. */
export const TUTORIALS: Tutorial[] = [
  /* ── Basics ── */
  {
    id: "vid-phone-basics",
    title: {
      en: "Smartphone basics explained slowly",
      hi: "बुजुर्गों के लिए स्मार्टफ़ोन कैसे चलाएं",
      mr: "ज्येष्ठांसाठी स्मार्टफोन कसा चालवावा",
    },
    description: {
      en: "Buttons, touch screen and daily apps, explained slowly and simply.",
      hi: "बटन, टच स्क्रीन और रोज़ के ऐप — धीरे-धीरे और आसान भाषा में।",
      mr: "बटणे, टच स्क्रीन आणि रोजचे अ‍ॅप्स — हळूहळू आणि सोप्या भाषेत.",
    },
    videoId: "uQ1MA17A0ZA",
    category: "Basics",
    difficulty: "beginner",
  },
  {
    id: "vid-large-text",
    title: {
      en: "Making text larger and easier to read",
      hi: "फोन के अक्षर बड़े कैसे करें",
      mr: "फोनवरील अक्षरे मोठी कशी करावीत",
    },
    description: {
      en: "Increase the font size so reading is comfortable.",
      hi: "फ़ॉन्ट साइज़ बढ़ाएँ ताकि पढ़ना आसान हो जाए।",
      mr: "फॉन्ट साइज वाढवा जेणेकरून वाचणे सोपे होईल.",
    },
    videoId: "a6mIcB4Ry8c",
    category: "Basics",
    difficulty: "beginner",
  },
  {
    id: "vid-screen-lock",
    title: {
      en: "Setting a secure screen lock",
      hi: "पिन लॉक कैसे लगाएं",
      mr: "पिन लॉक कसा लावावा",
    },
    description: {
      en: "Protect your phone with a simple PIN lock.",
      hi: "एक आसान पिन से अपने फ़ोन को सुरक्षित रखें।",
      mr: "एका सोप्या पिनने तुमचा फोन सुरक्षित ठेवा.",
    },
    videoId: "GOheHJedWHI",
    category: "Basics",
    difficulty: "beginner",
  },
  {
    id: "vid-photos",
    title: {
      en: "Taking and viewing photos",
      hi: "मोबाइल से फोटो कैसे खींचें",
      mr: "मोबाईलने फोटो कसे काढावेत",
    },
    description: {
      en: "Take clear photos of family and documents, and view them.",
      hi: "परिवार और कागज़ों की साफ़ फ़ोटो लें और उन्हें देखें।",
      mr: "कुटुंब आणि कागदपत्रांचे स्पष्ट फोटो काढा आणि पाहा.",
    },
    videoId: "dL08ykVuuhQ",
    category: "Basics",
    difficulty: "beginner",
  },
  {
    id: "vid-torch",
    title: {
      en: "Using the flashlight (Torch)",
      hi: "फ़ोन की टॉर्च कैसे जलाएँ",
      mr: "फोनची टॉर्च कशी लावावी",
    },
    description: {
      en: "Turn the phone torch on and off in two taps.",
      hi: "दो टैप में फ़ोन की टॉर्च जलाएँ और बुझाएँ।",
      mr: "दोन टॅपमध्ये फोनची टॉर्च लावा आणि विझवा.",
    },
    videoId: "hzgZGUOuvvg",
    category: "Basics",
    difficulty: "beginner",
  },
  {
    id: "vid-volume",
    title: {
      en: "Adjusting volume for calls and videos",
      hi: "फ़ोन की आवाज़ कैसे बढ़ाएँ",
      mr: "फोनचा आवाज कसा वाढवावा",
    },
    description: {
      en: "Make rings, calls and video sound louder or softer.",
      hi: "घंटी, कॉल और वीडियो की आवाज़ कम या ज़्यादा करना सीखें।",
      mr: "रिंग, कॉल आणि व्हिडिओचा आवाज कमी किंवा जास्त करणे शिका.",
    },
    videoId: "RK9IYSndyLw",
    category: "Basics",
    difficulty: "beginner",
  },
  {
    id: "vid-contacts",
    title: {
      en: "Saving phone numbers with clear names",
      hi: "फोन में नंबर सेव कैसे करें",
      mr: "फोनमध्ये नंबर कसे जतन करावेत",
    },
    description: {
      en: "Save family and doctor numbers with easy names.",
      hi: "परिवार और डॉक्टर के नंबर आसान नाम से सहेजें।",
      mr: "कुटुंब आणि डॉक्टरांचे नंबर सोप्या नावाने जतन करा.",
    },
    videoId: "A2KwGm6Yr4E",
    category: "Basics",
    difficulty: "beginner",
  },
  /* ── WhatsApp ── */
  {
    id: "vid-wa-message",
    title: {
      en: "Sending a WhatsApp text message",
      hi: "व्हाट्सएप पर मैसेज कैसे भेजें",
      mr: "व्हॉट्सअ‍ॅपवर मेसेज कसा पाठवावा",
    },
    description: {
      en: "Open a chat, type and send your first message.",
      hi: "चैट खोलें, लिखें और अपना संदेश भेजें।",
      mr: "चॅट उघडा, लिहा आणि तुमचा मेसेज पाठवा.",
    },
    videoId: "bitdnzMEcEw",
    category: "WhatsApp",
    difficulty: "beginner",
  },
  {
    id: "vid-wa-voice",
    title: {
      en: "Sending a voice message",
      hi: "व्हाट्सएप वॉइस मैसेज कैसे भेजें",
      mr: "व्हॉट्सअ‍ॅप व्हॉइस मेसेज कसा पाठवावा",
    },
    description: {
      en: "No typing needed — speak your message and send it.",
      hi: "टाइप की ज़रूरत नहीं — बोलकर संदेश भेजें।",
      mr: "टाइप करण्याची गरज नाही — बोलून मेसेज पाठवा.",
    },
    videoId: "PZzIczw2bdc",
    category: "WhatsApp",
    difficulty: "beginner",
  },
  {
    id: "vid-wa-video-call",
    title: {
      en: "Making a video call to see your family",
      hi: "व्हाट्सएप वीडियो कॉल कैसे करें",
      mr: "व्हॉट्सअ‍ॅप व्हिडिओ कॉल कसा करावा",
    },
    description: {
      en: "See your children and grandchildren face to face.",
      hi: "बच्चों और नाती-पोतों को आमने-सामने देखकर बात करें।",
      mr: "मुलांना आणि नातवंडांना समोरासमोर पाहून बोला.",
    },
    videoId: "SoJ5sp1n5OQ",
    category: "WhatsApp",
    difficulty: "beginner",
  },
  {
    id: "vid-wa-delete",
    title: {
      en: "Deleting a message sent by mistake",
      hi: "व्हाट्सएप पर गलती से भेजा संदेश कैसे मिटाएँ",
      mr: "व्हॉट्सअ‍ॅपवर चुकीने पाठवलेला मेसेज कसा काढावा",
    },
    description: {
      en: "Delete a wrong message for everyone within minutes.",
      hi: "गलत संदेश कुछ मिनटों में सबके लिए मिटा दें।",
      mr: "चुकीचा मेसेज काही मिनिटांत सर्वांसाठी काढून टाका.",
    },
    videoId: "0fe9nzUHEHE",
    category: "WhatsApp",
    difficulty: "comfortable",
  },
  {
    id: "vid-wa-groups",
    title: {
      en: "Stopping strangers from adding you to groups",
      hi: "व्हाट्सएप ग्रुप प्राइवेसी सेटिंग कैसे करें",
      mr: "व्हॉट्सअ‍ॅप ग्रुप प्रायव्हसी सेटिंग कशी करावी",
    },
    description: {
      en: "Only your saved contacts can add you to groups.",
      hi: "सिर्फ़ आपके संपर्क ही आपको ग्रुप में जोड़ सकें — सेटिंग करें।",
      mr: "फक्त तुमचे संपर्कच तुम्हाला ग्रुपमध्ये जोडू शकतील — सेटिंग करा.",
    },
    videoId: "G8OtkY3dPfY",
    category: "WhatsApp",
    difficulty: "comfortable",
  },
  /* ── Payments ── */
  {
    id: "vid-upi-pin",
    title: {
      en: "The Golden Rule: PIN is ONLY to send money",
      hi: "यूपीआई पिन का सही उपयोग कैसे करें",
      mr: "यूपीआय पिनचा योग्य वापर कसा करावा",
    },
    description: {
      en: "Why your UPI PIN must never be shared with anyone.",
      hi: "यूपीआई पिन किसी को क्यों नहीं बताना चाहिए — आसान भाषा में।",
      mr: "यूपीआय पिन कोणालाही का सांगू नये — सोप्या भाषेत.",
    },
    videoId: "i7DcdpKxPsA",
    category: "Payments",
    difficulty: "beginner",
  },
  {
    id: "vid-qr-pay",
    title: {
      en: "Scanning a shop QR code to pay",
      hi: "क्यूआर कोड स्कैन करके पेमेंट कैसे करें",
      mr: "क्यूआर कोड स्कॅन करून पेमेंट कसे करावे",
    },
    description: {
      en: "Pay at any shop by scanning the QR code with your phone.",
      hi: "फ़ोन से क्यूआर कोड स्कैन करके किसी भी दुकान पर पैसे दें।",
      mr: "फोनने क्यूआर कोड स्कॅन करून कोणत्याही दुकानात पैसे द्या.",
    },
    videoId: "44cq5JQUBtA",
    category: "Payments",
    difficulty: "beginner",
  },
  {
    id: "vid-qr-pay-2",
    title: {
      en: "Paying with a QR code: another easy way",
      hi: "क्यूआर कोड से पेमेंट की एक और आसान विधि",
      mr: "क्यूआर कोडने पेमेंटची आणखी एक सोपी पद्धत",
    },
    description: {
      en: "A second simple demonstration of paying with QR codes.",
      hi: "क्यूआर कोड से पैसे देने का दूसरा आसान उदाहरण।",
      mr: "क्यूआर कोडने पैसे देण्याचे दुसरे सोपे उदाहरण.",
    },
    videoId: "0mVT6f9e-M0",
    category: "Payments",
    difficulty: "beginner",
  },
  {
    id: "vid-balance",
    title: {
      en: "Checking your bank balance safely",
      hi: "यूपीआई ऐप से बैंक बैलेंस कैसे देखें",
      mr: "यूपीआय अ‍ॅपने बँक शिल्लक कशी पाहावी",
    },
    description: {
      en: "See the money in your account from home, safely.",
      hi: "घर बैठे खाते की राशि सुरक्षित रूप से देखें।",
      mr: "घरबसल्या खात्यातील रक्कम सुरक्षितपणे पाहा.",
    },
    videoId: "HUztgY119Mg",
    category: "Payments",
    difficulty: "beginner",
  },
  {
    id: "vid-balance-2",
    title: {
      en: "More ways to check your bank balance",
      hi: "बैंक बैलेंस जाँचने के और आसान तरीके",
      mr: "बँक शिल्लक तपासण्याचे आणखी सोपे मार्ग",
    },
    description: {
      en: "Another simple way to see your balance.",
      hi: "बैलेंस देखने का एक और आसान तरीका।",
      mr: "शिल्लक पाहण्याचा आणखी एक सोपा मार्ग.",
    },
    videoId: "VOpd9afWZIA",
    category: "Payments",
    difficulty: "beginner",
  },
  {
    id: "vid-balance-3",
    title: {
      en: "Checking balance: one more method",
      hi: "बैंक बैलेंस देखने का एक और तरीका",
      mr: "बँक शिल्लक पाहण्याचा आणखी एक मार्ग",
    },
    description: {
      en: "A further demonstration of checking your balance.",
      hi: "बैलेंस जाँचने का और विस्तार से उदाहरण।",
      mr: "शिल्लक तपासण्याचे अधिक विस्तृत उदाहरण.",
    },
    videoId: "kjNRJRIUhS8",
    category: "Payments",
    difficulty: "beginner",
  },
  {
    id: "vid-failed-payment",
    title: {
      en: "What to do if a payment gets stuck",
      hi: "अटका हुआ पेमेंट कैसे ठीक करें",
      mr: "अडकलेले पेमेंट कसे सोडवावे",
    },
    description: {
      en: "Calm, correct steps when money is deducted but not received.",
      hi: "पैसे कटकर अटक जाएँ तो शांति से सही कदम उठाएँ।",
      mr: "पैसे कापून अडकल्यास शांतपणे योग्य पावले उचला.",
    },
    videoId: "1OpzcIyNOI0",
    category: "Payments",
    difficulty: "comfortable",
  },
  /* ── Internet ── */
  {
    id: "vid-wifi-data",
    title: {
      en: "Wi-Fi vs Mobile Data",
      hi: "वाई-फ़ाई और मोबाइल डेटा में अंतर समझें",
      mr: "वाय-फाय आणि मोबाईल डेटा यातील फरक समजून घ्या",
    },
    description: {
      en: "When to use home Wi-Fi and when to use your SIM data.",
      hi: "घर का वाई-फ़ाई कब और सिम का डेटा कब चलाएँ।",
      mr: "घरचे वाय-फाय केव्हा आणि सिमचा डेटा केव्हा वापरावा.",
    },
    videoId: "AgZWcWJe3yA",
    category: "Internet",
    difficulty: "beginner",
  },
  {
    id: "vid-otp",
    title: {
      en: "What is an OTP and why you must never share it",
      hi: "ओटीपी क्या है और इसे कैसे सुरक्षित रखें",
      mr: "ओटीपी म्हणजे काय आणि तो सुरक्षित कसा ठेवावा",
    },
    description: {
      en: "The one habit that stops most OTP fraud.",
      hi: "एक आदत जो ओटीपी की लगभग हर ठगी रोक देती है।",
      mr: "एक सवय जी ओटीपीची जवळपास सर्व फसवणूक रोखते.",
    },
    videoId: "Mnj-LhF2nug",
    category: "Internet",
    difficulty: "beginner",
  },
  {
    id: "vid-voice-search",
    title: {
      en: "Searching safely on Google with voice",
      hi: "गूगल पर बोलकर सर्च कैसे करें",
      mr: "गुगलवर बोलून शोध कसा घ्यावा",
    },
    description: {
      en: "Ask Google anything by speaking, in your own language.",
      hi: "गूगल से अपनी भाषा में बोलकर कुछ भी पूछें।",
      mr: "गुगलला तुमच्या भाषेत बोलून काहीही विचारा.",
    },
    videoId: "dqnxgbC_xo8",
    category: "Internet",
    difficulty: "beginner",
  },
  {
    id: "vid-safe-browsing",
    title: {
      en: "Recognizing safe websites and links",
      hi: "सुरक्षित इंटरनेट कैसे चलाएँ",
      mr: "सुरक्षित इंटरनेट कसे वापरावे",
    },
    description: {
      en: "Spot genuine sites and avoid fake links.",
      hi: "असली वेबसाइट पहचानें और फ़र्ज़ी लिंक से बचें।",
      mr: "खरी वेबसाइट ओळखा आणि बनावट लिंक टाळा.",
    },
    videoId: "gXoSkk73Bu0",
    category: "Internet",
    difficulty: "comfortable",
  },
  {
    id: "vid-update-apps",
    title: {
      en: "Updating apps safely on Wi-Fi",
      hi: "प्ले स्टोर से ऐप अपडेट कैसे करें",
      mr: "प्ले स्टोअरवरून अ‍ॅप कसे अपडेट करावे",
    },
    description: {
      en: "Keep WhatsApp and bank apps safe with updates.",
      hi: "अपडेट करके व्हाट्सएप और बैंक ऐप सुरक्षित रखें।",
      mr: "अपडेट करून व्हॉट्सअ‍ॅप आणि बँक अ‍ॅप्स सुरक्षित ठेवा.",
    },
    videoId: "CkeZ2TKCvPY",
    category: "Internet",
    difficulty: "comfortable",
  },
  {
    id: "vid-update-apps-2",
    title: {
      en: "Keeping your phone apps updated",
      hi: "फ़ोन के ऐप अपडेट रखने का आसान तरीका",
      mr: "फोनचे अ‍ॅप्स अपडेट ठेवण्याची सोपी पद्धत",
    },
    description: {
      en: "Another walkthrough of updating your apps.",
      hi: "ऐप अपडेट करने का दूसरा आसान उदाहरण।",
      mr: "अ‍ॅप्स अपडेट करण्याचे दुसरे सोपे उदाहरण.",
    },
    videoId: "QPMhnBfebQo",
    category: "Internet",
    difficulty: "comfortable",
  },
  /* ── Services ── */
  {
    id: "vid-maps",
    title: {
      en: "Finding your way with Google Maps",
      hi: "गूगल मैप्स से रास्ता कैसे देखें",
      mr: "गुगल मॅप्सने रस्ता कसा पाहावा",
    },
    description: {
      en: "Search a place and follow spoken directions.",
      hi: "जगह खोजें और बोलकर बताया गया रास्ता देखें।",
      mr: "जागा शोधा आणि बोलून सांगितलेला रस्ता पाहा.",
    },
    videoId: "nfYLyYtmzW0",
    category: "Services",
    difficulty: "comfortable",
  },
  {
    id: "vid-digilocker",
    title: {
      en: "Keeping documents safely in DigiLocker",
      hi: "डिजीलॉकर में सरकारी दस्तावेज़ कैसे रखें",
      mr: "डिजिलॉकरमध्ये सरकारी कागदपत्रे कशी ठेवावीत",
    },
    description: {
      en: "Carry Aadhaar and other documents safely on your phone.",
      hi: "आधार और अन्य ज़रूरी कागज़ फ़ोन में सुरक्षित रखें।",
      mr: "आधार आणि इतर महत्त्वाची कागदपत्रे फोनमध्ये सुरक्षित ठेवा.",
    },
    videoId: "MBVeEDcBCOk",
    category: "Services",
    difficulty: "confident",
  },
];

/* ---------------- Quizzes ---------------- */
export type QuizQuestion = {
  id: string;
  quizId: string;
  question: Localized;
  options: LocalizedList;
  answer: number;
  explanation: Localized;
};

export const QUIZZES: { id: string; title: Localized }[] = [
  { id: "quiz-payments", title: { en: "Payments & UPI Safety", hi: "भुगतान और यूपीआई सुरक्षा", mr: "पेमेंट व यूपीआय सुरक्षा" } },
  { id: "quiz-internet", title: { en: "Internet & OTP Safety", hi: "इंटरनेट और ओटीपी सुरक्षा", mr: "इंटरनेट व ओटीपी सुरक्षा" } },
  { id: "quiz-whatsapp", title: { en: "WhatsApp Confidence", hi: "व्हाट्सएप आत्मविश्वास", mr: "व्हॉट्सअ‍ॅप आत्मविश्वास" } },
  { id: "quiz-basics", title: { en: "Smartphone Basics", hi: "स्मार्टफ़ोन मूल बातें", mr: "स्मार्टफोन मूलतत्त्वे" } },
  { id: "quiz-scams", title: { en: "Spot the Scam", hi: "ठगी पहचानें", mr: "फसवणूक ओळखा" } },
  { id: "quiz-services", title: { en: "Everyday Services", hi: "ज़रूरी डिजिटल सेवाएँ", mr: "दैनंदिन डिजिटल सेवा" } },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    quizId: "quiz-payments",
    question: {
      en: "Should you ever tell someone your UPI PIN over a phone call?",
      hi: "क्या कभी किसी को फ़ोन पर अपना यूपीआई पिन बताना चाहिए?",
      mr: "कधीही कोणाला फोनवर यूपीआय पिन सांगावा का?",
    },
    options: {
      en: ["Yes, if they are from the bank", "No, never tell anyone", "Only if it is a police officer"],
      hi: ["हाँ, अगर वह बैंक से हो", "नहीं, कभी किसी को न बताएँ", "केवल अगर वह पुलिस वाला हो"],
      mr: ["होय, बँकेतून बोलत असल्यास", "नाही, कधीही कोणाला सांगू नये", "फक्त पोलीस असल्यास"],
    },
    answer: 1,
    explanation: {
      en: "Your UPI PIN is your private signature. Real banks and police will NEVER ask for it.",
      hi: "आपका यूपीआई पिन केवल आपके लिए है। असली बैंक या पुलिस इसे कभी नहीं माँगते।",
      mr: "तुमचा यूपीआय पिन खासगी असतो. खरी बँक किंवा पोलीस तो कधीही मागत नाहीत.",
    },
  },
  {
    id: "q2",
    quizId: "quiz-payments",
    question: {
      en: "Do you need to enter your UPI PIN to RECEIVE money or a refund?",
      hi: "पैसे या रिफ़ंड पाने के लिए क्या यूपीआई पिन डालना पड़ता है?",
      mr: "पैसे किंवा परतावा मिळवण्यासाठी यूपीआय पिन टाकावा लागतो का?",
    },
    options: {
      en: ["No, never enter a PIN to receive money", "Yes, always", "Only for amounts above ₹5,000"],
      hi: ["नहीं, पैसे पाने के लिए कभी पिन नहीं चाहिए", "हाँ, हमेशा चाहिए", "केवल ₹5,000 से ऊपर की रकम पर"],
      mr: ["नाही, पैसे मिळताना कधीही पिन लागत नाही", "होय, नेहमी लागतो", "केवळ ₹५,००० पेक्षा जास्त असल्यास"],
    },
    answer: 0,
    explanation: {
      en: "Entering a PIN only deducts money from your account. Receiving money requires NO pin.",
      hi: "पिन डालने से हमेशा पैसे कटते हैं। पैसे आने पर कभी पिन नहीं डालना होता।",
      mr: "पिन टाकल्याने खात्यातून पैसे जातात. पैसे स्वीकारताना कोणत्याही पिनची गरज नसते.",
    },
  },
  {
    id: "q3",
    quizId: "quiz-payments",
    question: {
      en: "Before confirming a payment in a shop, what should you verify on screen?",
      hi: "दुकान पर भुगतान करने से पहले स्क्रीन पर क्या जाँचना चाहिए?",
      mr: "दुकानात पेमेंट करण्यापूर्वी स्क्रीनवर काय तपासले पाहिजे?",
    },
    options: {
      en: ["The shopkeeper's name and the exact amount", "Only the color of the screen", "Nothing, just type the PIN quickly"],
      hi: ["दुकानदार का नाम और सही बिल राशि", "केवल स्क्रीन का रंग", "कुछ नहीं, सीधे पिन डाल दें"],
      mr: ["दुकानदाराचे नाव आणि अचूक रक्कम", "फक्त स्क्रीनचा रंग", "काहीच नाही, थेट पिन टाका"],
    },
    answer: 0,
    explanation: {
      en: "Always read the recipient's name and amount slowly before entering your PIN.",
      hi: "पिन डालने से पहले हमेशा दुकानदार का नाम और राशि दो बार ध्यान से पढ़ें।",
      mr: "पिन टाकण्यापूर्वी नेहमी समोरच्याचे नाव आणि रक्कम शांतपणे तपासून घ्या.",
    },
  },
  {
    id: "q4",
    quizId: "quiz-internet",
    question: {
      en: "What is an OTP received via SMS?",
      hi: "एसएमएस पर आने वाला ओटीपी (OTP) क्या होता है?",
      mr: "एसएमएसने येणारा ओटीपी (OTP) म्हणजे काय?",
    },
    options: {
      en: ["A secret one-time code to approve your own transaction", "A coupon code for shopping", "A permanent phone number"],
      hi: ["आपके अपने काम को मंज़ूर करने वाला गुप्त एक-बारीय कोड", "खरीदारी का कूपन कोड", "फ़ोन नंबर"],
      mr: ["तुमचा व्यवहार मंजूर करणारा गुप्त कोड", "खरेदीचा कूपन कोड", "फोन नंबर"],
    },
    answer: 0,
    explanation: {
      en: "An OTP verifies you. Sharing it over a call lets scammers steal from your account.",
      hi: "ओटीपी आपकी पहचान की चाबी है। किसी को बताने से वह आपके खाते से पैसे चुरा सकता है।",
      mr: "ओटीपी म्हणजे तुमच्या खात्याची चावी. फोनवर कोणालाही सांगू नका.",
    },
  },
  {
    id: "q5",
    quizId: "quiz-internet",
    question: {
      en: "A caller asks you to install AnyDesk or QuickSupport so they can 'fix' your phone. You should:",
      hi: "फ़ोन पर कोई एनीडेस्क या क्विकसपोर्ट ऐप डालने को कहे ताकि फ़ोन ठीक कर सके। आप क्या करेंगे?",
      mr: "फोनवर कोणी एनीडेस्क किंवा क्विकसपोर्ट अ‍ॅप इन्स्टॉल करायला सांगतो. तुम्ही काय कराल?",
    },
    options: {
      en: ["Refuse and hang up immediately", "Install it immediately", "Give them your phone password"],
      hi: ["मना करें और तुरंत कॉल काट दें", "तुरंत इंस्टॉल कर लेंगे", "फ़ोन का पासवर्ड दे देंगे"],
      mr: ["नकार द्या आणि लगेच फोन ठेवा", "लगेच इन्स्टॉल कराल", "फोनचा पासवर्ड द्याल"],
    },
    answer: 0,
    explanation: {
      en: "Screen sharing apps let strangers see your passwords, messages and bank PINs. Never install them.",
      hi: "स्क्रीन शेयरिंग ऐप से ठग आपके पासवर्ड और बैंक पिन देख सकते हैं। इसे कभी न डालें।",
      mr: "स्क्रीन शेअरिंग अ‍ॅप्समुळे भामट्यांना तुमचे पासवर्ड आणि पिन दिसतात. ते कधीही इन्स्टॉल करू नका.",
    },
  },
  {
    id: "q6",
    quizId: "quiz-whatsapp",
    question: {
      en: "An unknown number sends a message: 'Hi Mum, lost my phone, send money urgently'. What is the FIRST step?",
      hi: "अनजान नंबर से संदेश आए: 'मम्मी, नया नंबर है, तुरंत पैसे भेजो'। सबसे पहला कदम क्या होना चाहिए?",
      mr: "अनोळखी नंबरवरून 'आई, नवा नंबर, लगेच पैसे पाठव' असा मेसेज आला. पहिली पायरी कोणती?",
    },
    options: {
      en: ["Call your child on their OLD saved number first to verify", "Send the money immediately", "Forward your bank details"],
      hi: ["पहले अपने बच्चे के पुराने सहेजे हुए नंबर पर कॉल करके बात करें", "तुरंत पैसे भेज दें", "बैंक का विवरण भेजें"],
      mr: ["आधी मुलाच्या जुन्या सेव्ह असलेल्या नंबरवर फोन करून खात्री करा", "लगेच पैसे पाठवा", "बँकेची माहिती पाठवा"],
    },
    answer: 0,
    explanation: {
      en: "A single phone call to the existing number exposes this impersonation scam immediately.",
      hi: "पुराने नंबर पर एक बार बात करने से तुरंत पता चल जाता है कि यह ठगी का संदेश है।",
      mr: "जुन्या नंबरवर एका फोन कॉलने लगेच स्पष्ट होते की हा बनावट मेसेज आहे.",
    },
  },
  {
    id: "q7",
    quizId: "quiz-basics",
    question: {
      en: "How do you make text on your phone larger so it is comfortable to read?",
      hi: "फ़ोन पर अक्षरों का आकार बड़ा कैसे करें ताकि आसानी से पढ़ा जा सके?",
      mr: "फोनवर वाचण्यासाठी अक्षरे मोठी कशी करावीत?",
    },
    options: {
      en: ["Go to Settings → Display → Font size", "Tap the phone on a table", "Turn off the Wi-Fi"],
      hi: ["सेटिंग्स → डिस्प्ले (Display) → फॉन्ट साइज़ (Font Size) में जाएँ", "फ़ोन को मेज़ पर रखें", "वाई-फ़ाई बंद करें"],
      mr: ["सेटिंग्ज → डिस्प्ले → फॉन्ट साइजमध्ये जाऊन", "फोन आपटून", "वाय-फाय बंद करून"],
    },
    answer: 0,
    explanation: {
      en: "Font size in Settings makes all messages, contacts and news comfortably readable.",
      hi: "सेटिंग्स में फॉन्ट साइज़ बड़ा करने से सारे संदेश और नंबर साफ़ दिखने लगते हैं।",
      mr: "सेटिंग्जमधील फॉन्ट साइजने सर्व अक्षरे मोठी आणि वाचण्यास सोपी होतात.",
    },
  },
  /* ── quiz-payments (3 more) ── */
  {
    id: "qp4",
    quizId: "quiz-payments",
    question: {
      en: "At a shop, you scan the QR code on the counter. What do you do before entering your PIN?",
      hi: "दुकान पर काउंटर का क्यूआर कोड स्कैन करने के बाद पिन डालने से पहले आप क्या करेंगे?",
      mr: "दुकानात काउंटरवरील क्यूआर कोड स्कॅन केल्यावर पिन टाकण्यापूर्वी तुम्ही काय कराल?",
    },
    options: {
      en: ["Enter the PIN quickly so the queue moves", "Check the shopkeeper's name and the exact amount on screen", "Ask the shopkeeper to enter the PIN for you"],
      hi: ["लाइन न लगे इसलिए जल्दी से पिन डालें", "स्क्रीन पर दुकानदार का नाम और सही राशि जाँचें", "दुकानदार को अपना पिन डालने को कहें"],
      mr: ["रांग थांबू नये म्हणून पटकन पिन टाका", "स्क्रीनवर दुकानदाराचे नाव आणि अचूक रक्कम तपासा", "दुकानदाराला तुमचा पिन टाकायला सांगा"],
    },
    answer: 1,
    explanation: {
      en: "Always read the name and amount on your own screen slowly before typing your PIN.",
      hi: "पिन डालने से पहले अपनी स्क्रीन पर नाम और राशि धीरे-धीरे पढ़ें।",
      mr: "पिन टाकण्यापूर्वी तुमच्या स्क्रीनवरील नाव आणि रक्कम शांतपणे तपासा.",
    },
  },
  {
    id: "qp5",
    quizId: "quiz-payments",
    question: {
      en: "An SMS says: 'You won ₹500 cashback. Enter your UPI PIN to claim it.' What do you do?",
      hi: "एसएमएस आया: 'आपको ₹500 कैशबैक मिला है। पाने के लिए यूपीआई पिन डालें।' आप क्या करेंगे?",
      mr: "एसएमएस आला: 'तुम्हाला ₹५०० कॅशबॅक मिळाला आहे. मिळवण्यासाठी यूपीआय पिन टाका.' तुम्ही काय कराल?",
    },
    options: {
      en: ["Ignore and delete it — real cashback never needs your PIN", "Enter the PIN in the link", "Reply with your phone number"],
      hi: ["ध्यान न दें और मिटा दें — सच्चे कैशबैक के लिए कभी पिन नहीं चाहिए", "लिंक पर जाकर पिन डालें", "अपना फ़ोन नंबर भेजें"],
      mr: ["दुर्लक्ष करा आणि डिलीट करा — खऱ्या कॅशबॅकसाठी कधीही पिन लागत नाही", "लिंकवर जाऊन पिन टाका", "तुमचा फोन नंबर पाठवा"],
    },
    answer: 0,
    explanation: {
      en: "Your UPI PIN only sends money out. Any message asking for it is a trick.",
      hi: "यूपीआई पिन से हमेशा पैसे जाते हैं। पिन माँगने वाला कोई भी संदेश ठगी है।",
      mr: "यूपीआय पिनने नेहमी पैसे जातात. पिन मागणारा कोणताही मेसेज फसवणूक आहे.",
    },
  },
  {
    id: "qp6",
    quizId: "quiz-payments",
    question: {
      en: "You want to check your bank balance from home. Which is the safe way?",
      hi: "आप घर बैठे बैंक बैलेंस देखना चाहते हैं। कौन सा तरीका सुरक्षित है?",
      mr: "तुम्हाला घरबसल्या बँक शिल्लक तपासायची आहे. कोणता मार्ग सुरक्षित आहे?",
    },
    options: {
      en: ["Call a customer care number found on Google search", "Give your account number and OTP to a caller", "Open your own bank app or UPI app and check the balance"],
      hi: ["गूगल सर्च से मिला कस्टमर केयर नंबर मिलाएँ", "कॉलर को खाता नंबर और ओटीपी बता दें", "अपना बैंक ऐप या यूपीआई ऐप खोलकर बैलेंस देखें"],
      mr: ["गुगल शोधातून मिळालेल्या कस्टमर केअर नंबरवर फोन करा", "कॉलरला खाते क्रमांक आणि ओटीपी सांगा", "तुमचे स्वतःचे बँक अ‍ॅप किंवा यूपीआय अ‍ॅप उघडून शिल्लक पाहा"],
    },
    answer: 2,
    explanation: {
      en: "Use only your own official bank or UPI app. Numbers found in searches are often fake.",
      hi: "केवल अपना आधिकारिक बैंक या यूपीआई ऐप इस्तेमाल करें। सर्च में मिले नंबर अक्सर नकली होते हैं।",
      mr: "फक्त तुमचे अधिकृत बँक किंवा यूपीआय अ‍ॅप वापरा. शोधात मिळणारे नंबर बहुधा बनावट असतात.",
    },
  },
  /* ── quiz-internet (4 more) ── */
  {
    id: "qi3",
    quizId: "quiz-internet",
    question: {
      en: "You want to watch videos at home without using your daily mobile data. What is the best way?",
      hi: "बिना रोज़ का मोबाइल डेटा खर्च किए घर पर वीडियो देखना है। सबसे अच्छा तरीका क्या है?",
      mr: "दररोजचा मोबाईल डेटा न वापरता घरी व्हिडिओ पाहायचे आहेत. सर्वोत्तम मार्ग कोणता?",
    },
    options: {
      en: ["Connect your phone to the home Wi-Fi", "Keep mobile data on all day", "Turn the phone off and on again"],
      hi: ["फ़ोन को घर के वाई-फ़ाई से जोड़ें", "मोबाइल डेटा दिन भर चालू रखें", "फ़ोन बंद करके दोबारा चालू करें"],
      mr: ["फोन घरातील वाय-फायशी जोडा", "मोबाईल डेटा दिवसभर चालू ठेवा", "फोन बंद करून पुन्हा चालू करा"],
    },
    answer: 0,
    explanation: {
      en: "Home Wi-Fi does not use your SIM's daily data pack, so videos and calls stay comfortable.",
      hi: "घर के वाई-फ़ाई से सिम का डेटा पैक खर्च नहीं होता, इसलिए वीडियो आराम से चलते हैं।",
      mr: "घरातील वाय-फायने सिमचा डेटा पॅक खर्च होत नाही, त्यामुळे व्हिडिओ आरामात चालतात.",
    },
  },
  {
    id: "qi4",
    quizId: "quiz-internet",
    question: {
      en: "An SMS from an unknown number says: 'You won a prize! Tap this link.' What do you do?",
      hi: "अनजान नंबर से एसएमएस आया: 'आपने इनाम जीता है! इस लिंक पर दबाएँ।' आप क्या करेंगे?",
      mr: "अनोळखी नंबरवरून एसएमएस आला: 'तुम्ही बक्षीस जिंकलात! या लिंकवर दाबा.' तुम्ही काय कराल?",
    },
    options: {
      en: ["Tap the link and fill in your details", "Do not tap it — delete the message", "Forward it to all your friends"],
      hi: ["लिंक पर दबाकर अपनी जानकारी भरें", "लिंक पर न दबाएँ — संदेश मिटा दें", "सभी दोस्तों को भेज दें"],
      mr: ["लिंकवर दाबून तुमची माहिती भरा", "लिंकवर दाबू नका — मेसेज डिलीट करा", "सर्व मित्रांना पाठवा"],
    },
    answer: 1,
    explanation: {
      en: "Links from unknown numbers can steal your information. Real prizes never arrive this way.",
      hi: "अनजान नंबर के लिंक आपकी जानकारी चुरा सकते हैं। असली इनाम इस तरह कभी नहीं आते।",
      mr: "अनोळखी नंबरवरील लिंक तुमची माहिती चोरू शकतात. खरी बक्षीसे अशी कधीही येत नाहीत.",
    },
  },
  {
    id: "qi5",
    quizId: "quiz-internet",
    question: {
      en: "You want to know tomorrow's weather without typing. What do you do?",
      hi: "बिना टाइप किए कल का मौसम जानना है। आप क्या करेंगे?",
      mr: "टाइप न करता उद्याचे हवामान जाणायचे आहे. तुम्ही काय कराल?",
    },
    options: {
      en: ["Tap the microphone 🎙️ in the Google app and ask by voice", "Send an SMS to the weather office", "Call the police helpline"],
      hi: ["गूगल ऐप में माइक्रोफ़ोन 🎙️ दबाकर बोलकर पूछें", "मौसम विभाग को एसएमएस भेजें", "पुलिस हेल्पलाइन पर कॉल करें"],
      mr: ["गुगल अ‍ॅपमधील मायक्रोफोन 🎙️ दाबून बोलून विचारा", "हवामान खात्याला एसएमएस पाठवा", "पोलीस हेल्पलाइनवर फोन करा"],
    },
    answer: 0,
    explanation: {
      en: "Google's microphone lets you speak your question in your own language.",
      hi: "गूगल के माइक्रोफ़ोन से आप अपनी भाषा में बोलकर सवाल पूछ सकते हैं।",
      mr: "गुगलच्या मायक्रोफोनने तुम्ही तुमच्या भाषेत बोलून प्रश्न विचारू शकता.",
    },
  },
  {
    id: "qi6",
    quizId: "quiz-internet",
    question: {
      en: "The Play Store shows an update for WhatsApp. What should you do?",
      hi: "प्ले स्टोर पर व्हाट्सएप का अपडेट दिख रहा है। आपको क्या करना चाहिए?",
      mr: "प्ले स्टोअरवर व्हॉट्सअ‍ॅपचे अपडेट दिसते. तुम्ही काय केले पाहिजे?",
    },
    options: {
      en: ["Ignore it forever", "Uninstall WhatsApp", "Tap Update, ideally while on Wi-Fi"],
      hi: ["हमेशा के लिए नज़रअंदाज़ करें", "व्हाट्सएप हटा दें", "वाई-फ़ाई पर रहते हुए 'अपडेट' दबाएँ"],
      mr: ["नेहमी दुर्लक्ष करा", "व्हॉट्सअ‍ॅप काढून टाका", "वाय-फायवर असताना 'अपडेट' दाबा"],
    },
    answer: 2,
    explanation: {
      en: "Updates fix safety problems. Doing it on Wi-Fi saves your mobile data.",
      hi: "अपडेट से सुरक्षा की कमियाँ ठीक होती हैं। वाई-फ़ाई पर करने से डेटा बचता है।",
      mr: "अपडेटने सुरक्षेतील त्रुटी दूर होतात. वाय-फायवर केल्यास डेटा वाचतो.",
    },
  },
  /* ── quiz-whatsapp (5 more) ── */
  {
    id: "qw2",
    quizId: "quiz-whatsapp",
    question: {
      en: "You have typed a message in WhatsApp. How do you send it?",
      hi: "आपने व्हाट्सएप पर संदेश टाइप कर लिया है। उसे कैसे भेजेंगे?",
      mr: "तुम्ही व्हॉट्सअ‍ॅपवर मेसेज टाइप केला आहे. तो कसा पाठवाल?",
    },
    options: {
      en: ["Tap the red phone button", "Tap the green arrow button", "Tap the camera icon"],
      hi: ["लाल फ़ोन वाले बटन पर दबाएँ", "हरे तीर वाले बटन पर दबाएँ", "कैमरा के निशान पर दबाएँ"],
      mr: ["लाल फोन बटणावर दाबा", "हिरव्या बाणाच्या बटणावर दाबा", "कॅमेरा चिन्हावर दाबा"],
    },
    answer: 1,
    explanation: {
      en: "The green round arrow on the right sends your message.",
      hi: "दाहिनी ओर का हरा गोल तीर संदेश भेजता है।",
      mr: "उजव्या बाजूचा हिरवा गोल बाण मेसेज पाठवतो.",
    },
  },
  {
    id: "qw3",
    quizId: "quiz-whatsapp",
    question: {
      en: "How do you send a voice message on WhatsApp?",
      hi: "व्हाट्सएप पर आवाज़ संदेश कैसे भेजें?",
      mr: "व्हॉट्सअ‍ॅपवर व्हॉइस मेसेज कसा पाठवावा?",
    },
    options: {
      en: ["Press and hold the microphone 🎙️ button, speak, then lift your finger", "Type the word 'voice' in the chat", "Take a photo of your phone"],
      hi: ["माइक्रोफ़ोन 🎙️ बटन दबाकर रखें, बोलें, फिर उंगली उठा लें", "चैट में 'आवाज़' शब्द लिखें", "अपने फ़ोन की फ़ोटो खींचें"],
      mr: ["मायक्रोफोन 🎙️ बटण दाबून धरा, बोला, मग बोट वर करा", "चॅटमध्ये 'आवाज' हा शब्द लिहा", "तुमच्या फोनचा फोटो काढा"],
    },
    answer: 0,
    explanation: {
      en: "Hold the green microphone, speak clearly, and let go — the message is sent.",
      hi: "हरा माइक दबाकर रखें, साफ़ बोलें और छोड़ दें — संदेश चला जाता है।",
      mr: "हिरवा माइक दाबून धरा, स्पष्ट बोला आणि सोडा — मेसेज पाठवला जातो.",
    },
  },
  {
    id: "qw4",
    quizId: "quiz-whatsapp",
    question: {
      en: "Which icon starts a video call inside a WhatsApp chat?",
      hi: "व्हाट्सएप चैट में वीडियो कॉल कौन सा निशान शुरू करता है?",
      mr: "व्हॉट्सअ‍ॅप चॅटमध्ये व्हिडिओ कॉल कोणत्या चिन्हावरून सुरू होतो?",
    },
    options: {
      en: ["The trash bin 🗑️", "The settings gear ⚙️", "The video camera 📹 at the top"],
      hi: ["कूड़ेदान 🗑️", "सेटिंग्स गियर ⚙️", "ऊपर बना वीडियो कैमरा 📹"],
      mr: ["कचराकुंडी 🗑️", "सेटिंग्ज गियर ⚙️", "वरील व्हिडिओ कॅमेरा 📹"],
    },
    answer: 2,
    explanation: {
      en: "The small video camera at the top right of the chat starts a video call.",
      hi: "चैट के ऊपर दाईं ओर बना छोटा वीडियो कैमरा वीडियो कॉल शुरू करता है।",
      mr: "चॅटच्या वर उजवीकडील लहान व्हिडिओ कॅमेरा व्हिडिओ कॉल सुरू करतो.",
    },
  },
  {
    id: "qw5",
    quizId: "quiz-whatsapp",
    question: {
      en: "You sent a photo to the wrong person by mistake. What do you do right away?",
      hi: "गलती से किसी ग़लत व्यक्ति को फ़ोटो चली गई। तुरंत क्या करेंगे?",
      mr: "चुकीने चुकीच्या व्यक्तीला फोटो गेला. लगेच काय कराल?",
    },
    options: {
      en: ["Press and hold the message, tap the trash bin, choose 'Delete for Everyone'", "Switch off the phone", "Send one more photo"],
      hi: ["संदेश पर दबाकर रखें, कूड़ेदान पर दबाएँ, 'सभी के लिए मिटाएँ' चुनें", "फ़ोन बंद कर दें", "एक और फ़ोटो भेज दें"],
      mr: ["मेसेजवर दाबून ठेवा, कचराकुंडीवर दाबा, 'सर्वांसाठी डिलीट करा' निवडा", "फोन बंद करा", "आणखी एक फोटो पाठवा"],
    },
    answer: 0,
    explanation: {
      en: "'Delete for Everyone' removes the message from their phone too, if done quickly.",
      hi: "'सभी के लिए मिटाएँ' से जल्दी करने पर संदेश सामने वाले के फ़ोन से भी हट जाता है।",
      mr: "'सर्वांसाठी डिलीट करा' ने लवकर केल्यास मेसेज समोरच्याच्या फोनमधूनही निघतो.",
    },
  },
  {
    id: "qw6",
    quizId: "quiz-whatsapp",
    question: {
      en: "How do you stop strangers from adding you to WhatsApp groups?",
      hi: "अजनबियों को व्हाट्सएप ग्रुप में जोड़ने से कैसे रोकें?",
      mr: "अनोळखी लोकांना व्हॉट्सअ‍ॅप ग्रुपमध्ये जोडण्यापासून कसे रोखावे?",
    },
    options: {
      en: ["Delete WhatsApp from the phone", "Settings → Privacy → Groups → 'My Contacts'", "Ask friends not to add you"],
      hi: ["फ़ोन से व्हाट्सएप हटा दें", "सेटिंग्स → प्राइवेसी → ग्रुप्स → 'मेरे संपर्क' चुनें", "दोस्तों से न जोड़ने को कहें"],
      mr: ["फोनमधून व्हॉट्सअ‍ॅप काढून टाका", "सेटिंग्ज → प्रायव्हसी → ग्रुप्स → 'माझे संपर्क' निवडा", "मित्रांना न जोडण्यास सांगा"],
    },
    answer: 1,
    explanation: {
      en: "This setting allows only your saved contacts to add you to groups.",
      hi: "इस सेटिंग से केवल आपके सहेजे हुए संपर्क ही आपको ग्रुप में जोड़ पाते हैं।",
      mr: "या सेटिंगने फक्त तुमचे सेव्ह केलेले संपर्कच तुम्हाला ग्रुपमध्ये जोडू शकतात.",
    },
  },
  /* ── quiz-basics (5 more) ── */
  {
    id: "qb2",
    quizId: "quiz-basics",
    question: {
      en: "Why is a screen lock (PIN) important on your phone?",
      hi: "फ़ोन पर स्क्रीन लॉक (पिन) क्यों ज़रूरी है?",
      mr: "फोनवर स्क्रीन लॉक (पिन) का महत्त्वाचा आहे?",
    },
    options: {
      en: ["It protects your photos, WhatsApp and bank apps if the phone is misplaced", "It makes the battery charge faster", "It makes the ringtone louder"],
      hi: ["फ़ोन कहीं छूट जाए तो फ़ोटो, व्हाट्सएप और बैंक ऐप सुरक्षित रहते हैं", "इससे बैटरी जल्दी चार्ज होती है", "इससे घंटी की आवाज़ बढ़ती है"],
      mr: ["फोन हरवल्यास फोटो, व्हॉट्सअ‍ॅप आणि बँक अ‍ॅप्स सुरक्षित राहतात", "याने बॅटरी लवकर चार्ज होते", "याने रिंगटोन मोठी होते"],
    },
    answer: 0,
    explanation: {
      en: "A simple PIN keeps strangers out of your private apps and photos.",
      hi: "एक आसान पिन अजनबियों को आपके निजी ऐप और फ़ोटो से दूर रखता है।",
      mr: "एक सोपा पिन अनोळखी लोकांना तुमच्या खासगी अ‍ॅप्स आणि फोटोंपासून दूर ठेवतो.",
    },
  },
  {
    id: "qb3",
    quizId: "quiz-basics",
    question: {
      en: "The lights have gone out. How do you turn on your phone's torch?",
      hi: "बिजली चली गई है। फ़ोन की टॉर्च कैसे जलाएँगे?",
      mr: "वीज गेली आहे. फोनची टॉर्च कशी लावाल?",
    },
    options: {
      en: ["Shake the phone three times", "Swipe down from the top of the screen and tap the torch 🔦 icon", "Open the camera app"],
      hi: ["फ़ोन को तीन बार हिलाएँ", "स्क्रीन के ऊपर से नीचे स्वाइप करके टॉर्च 🔦 निशान दबाएँ", "कैमरा ऐप खोलें"],
      mr: ["फोन तीनदा हलवा", "स्क्रीनच्या वरून खाली सरकवून टॉर्च 🔦 चिन्हावर दाबा", "कॅमेरा अ‍ॅप उघडा"],
    },
    answer: 1,
    explanation: {
      en: "The quick panel at the top has a torch button that turns the light on instantly.",
      hi: "ऊपर से खींची गई पट्टी में टॉर्च का बटन होता है जो तुरंत लाइट जलाता है।",
      mr: "वरून ओढलेल्या पॅनेलमध्ये टॉर्चचे बटण असते जे लगेच दिवा लावते.",
    },
  },
  {
    id: "qb4",
    quizId: "quiz-basics",
    question: {
      en: "You are saving your son's phone number. Which name is best?",
      hi: "आप अपने बेटे का नंबर सहेज रहे हैं। कौन सा नाम सबसे अच्छा है?",
      mr: "तुम्ही तुमच्या मुलाचा नंबर जतन करत आहात. कोणते नाव सर्वोत्तम?",
    },
    options: {
      en: ["98765", "New Contact 2", "Son Ramesh"],
      hi: ["98765", "नया संपर्क 2", "बेटा रमेश"],
      mr: ["९८७६५", "नवीन संपर्क २", "मुलगा रमेश"],
    },
    answer: 2,
    explanation: {
      en: "A clear name like 'Son Ramesh' is instantly recognizable when they call.",
      hi: "'बेटा रमेश' जैसा साफ़ नाम कॉल आने पर तुरंत पहचान में आता है।",
      mr: "'मुलगा रमेश' असे स्पष्ट नाव कॉल आल्यावर लगेच ओळखू येते.",
    },
  },
  {
    id: "qb5",
    quizId: "quiz-basics",
    question: {
      en: "During a call the other person sounds too quiet. What do you do?",
      hi: "कॉल पर सामने वाले की आवाज़ बहुत धीमी है। आप क्या करेंगे?",
      mr: "कॉलवर समोरच्या व्यक्तीचा आवाज खूप कमी आहे. तुम्ही काय कराल?",
    },
    options: {
      en: ["Press the volume-up button on the side of the phone", "Shout into the phone", "Hang up and call again"],
      hi: ["फ़ोन के किनारे वाला आवाज़ बढ़ाने का बटन दबाएँ", "फ़ोन में ज़ोर से बोलें", "कॉल काटकर दोबारा मिलाएँ"],
      mr: ["फोनच्या बाजूचे आवाज वाढवण्याचे बटण दाबा", "फोनमध्ये मोठ्याने बोला", "कॉल ठेवून पुन्हा लावा"],
    },
    answer: 0,
    explanation: {
      en: "The side volume buttons make the caller's voice louder during the call.",
      hi: "किनारे के आवाज़ बटन कॉल के दौरान सामने वाले की आवाज़ तेज़ कर देते हैं।",
      mr: "बाजूच्या आवाज बटनांनी कॉल दरम्यान समोरच्याचा आवाज वाढतो.",
    },
  },
  {
    id: "qb6",
    quizId: "quiz-basics",
    question: {
      en: "You just took a photo. How do you see it in full size?",
      hi: "आपने अभी फ़ोटो खींची है। उसे पूरी तरह कैसे देखेंगे?",
      mr: "तुम्ही आत्ताच फोटो काढला. तो पूर्ण कसा पाहाल?",
    },
    options: {
      en: ["Restart the phone", "Tap the small square picture in the corner of the camera", "Press the camera button again"],
      hi: ["फ़ोन को रीस्टार्ट करें", "कैमरा के कोने में बनी छोटी चौकोर फ़ोटो पर दबाएँ", "कैमरा बटन दोबारा दबाएँ"],
      mr: ["फोन रीस्टार्ट करा", "कॅमेऱ्याच्या कोपऱ्यातील लहान चौकोन फोटोवर दाबा", "कॅमेरा बटण पुन्हा दाबा"],
    },
    answer: 1,
    explanation: {
      en: "The small thumbnail in the corner opens the photo you just took.",
      hi: "कोने की छोटी फ़ोटो दबाने से आपकी खींची हुई तस्वीर पूरी खुल जाती है।",
      mr: "कोपऱ्यातील लहान फोटोवर दाबल्यास काढलेला फोटो पूर्ण उघडतो.",
    },
  },
  /* ── quiz-scams (new, 6) ── */
  {
    id: "qs1",
    quizId: "quiz-scams",
    question: {
      en: "A caller says your bank account will be blocked unless you share the OTP that just arrived. What do you do?",
      hi: "कॉलर कहता है कि अभी आया ओटीपी न बताने पर आपका बैंक खाता बंद हो जाएगा। आप क्या करेंगे?",
      mr: "कॉलर म्हणतो की आत्ता आलेला ओटीपी सांगितला नाही तर तुमचे बँक खाते बंद होईल. तुम्ही काय कराल?",
    },
    options: {
      en: ["Read out the OTP quickly", "Hang up and check with your branch using the number on your passbook", "Ask them to call back tomorrow and share it then"],
      hi: ["ओटीपी जल्दी से बता दें", "कॉल काटकर पासबुक पर लिखे नंबर से अपनी शाखा में जाँच करें", "कल कॉल करने को कहकर तब बता दें"],
      mr: ["ओटीपी पटकन सांगा", "फोन ठेवून पासबुकवरील नंबरवरून तुमच्या शाखेत खात्री करा", "उद्या फोन करायला सांगून मग सांगा"],
    },
    answer: 1,
    explanation: {
      en: "Real banks never ask for an OTP over the phone. Check yourself using the number printed on your passbook.",
      hi: "असली बैंक फ़ोन पर कभी ओटीपी नहीं माँगता। पासबुक पर छपे नंबर से खुद जाँच करें।",
      mr: "खरी बँक फोनवर कधीही ओटीपी मागत नाही. पासबुकवरील नंबरवरून स्वतः खात्री करा.",
    },
  },
  {
    id: "qs2",
    quizId: "quiz-scams",
    question: {
      en: "A person in a police uniform appears on a video call and says you are under 'digital arrest'. What do you do?",
      hi: "वीडियो कॉल पर पुलिस वर्दी में एक व्यक्ति कहता है कि आप 'डिजिटल अरेस्ट' में हैं। आप क्या करेंगे?",
      mr: "व्हिडिओ कॉलवर पोलीस गणवेशातील व्यक्ती म्हणते की तुम्ही 'डिजिटल अरेस्ट' आहात. तुम्ही काय कराल?",
    },
    options: {
      en: ["Hang up at once and tell your family — real police never do this", "Transfer money to prove you are innocent", "Keep the camera on and stay silent"],
      hi: ["तुरंत कॉल काटकर परिवार को बताएँ — असली पुलिस ऐसा कभी नहीं करती", "निर्दोष साबित करने के लिए पैसे भेजें", "कैमरा चालू रखकर चुपचाप बैठे रहें"],
      mr: ["लगेच फोन ठेवा आणि कुटुंबीयांना सांगा — खरे पोलीस हे कधीही करत नाहीत", "निर्दोष सिद्ध करण्यासाठी पैसे पाठवा", "कॅमेरा चालू ठेवून गप्प बसा"],
    },
    answer: 0,
    explanation: {
      en: "There is no 'digital arrest' in law. Police never arrest or ask for money on a video call.",
      hi: "कानून में 'डिजिटल अरेस्ट' जैसा कुछ नहीं है। पुलिस वीडियो कॉल पर न गिरफ़्तार करती है, न पैसे माँगती है।",
      mr: "कायद्यात 'डिजिटल अरेस्ट' असा प्रकार नाही. पोलीस व्हिडिओ कॉलवर अटक करत नाहीत किंवा पैसे मागत नाहीत.",
    },
  },
  {
    id: "qs3",
    quizId: "quiz-scams",
    question: {
      en: "A WhatsApp message says you won ₹25 lakh in a lucky draw, but you must pay ₹12,000 'tax' first. What do you do?",
      hi: "व्हाट्सएप संदेश कहता है कि आपने ₹25 लाख की लॉटरी जीती है, पर पहले ₹12,000 का 'टैक्स' देना होगा। आप क्या करेंगे?",
      mr: "व्हॉट्सअ‍ॅप मेसेज म्हणतो की तुम्ही ₹२५ लाखांची लॉटरी जिंकलात, पण आधी ₹१२,००० 'टॅक्स' द्यावा लागेल. तुम्ही काय कराल?",
    },
    options: {
      en: ["Pay the ₹12,000 quickly", "Ask them for a bigger prize", "Delete and block — real prizes never ask for money first"],
      hi: ["₹12,000 जल्दी से भेज दें", "उनसे और बड़ा इनाम माँगें", "मिटाकर ब्लॉक करें — असली इनाम कभी पहले पैसे नहीं माँगता"],
      mr: ["₹१२,००० पटकन द्या", "त्यांच्याकडे मोठे बक्षीस मागा", "डिलीट करून ब्लॉक करा — खरे बक्षीस कधीही आधी पैसे मागत नाही"],
    },
    answer: 2,
    explanation: {
      en: "You cannot win a lottery you never entered. Any prize that asks for fees is a scam.",
      hi: "जिस लॉटरी में भाग नहीं लिया, वह इनाम नहीं मिल सकता। फ़ीस माँगने वाला हर इनाम ठगी है।",
      mr: "ज्या लॉटरीत सहभागी झाला नाहीत, ते बक्षीस मिळू शकत नाही. फी मागणारे प्रत्येक बक्षीस फसवणूक आहे.",
    },
  },
  {
    id: "qs4",
    quizId: "quiz-scams",
    question: {
      en: "A caller says your electricity will be cut tonight unless you pay right now. What do you do?",
      hi: "कॉलर कहता है कि अभी पैसे न देने पर आज रात बिजली काट दी जाएगी। आप क्या करेंगे?",
      mr: "कॉलर म्हणतो की आत्ता पैसे दिले नाहीत तर आज रात्री वीज कापली जाईल. तुम्ही काय कराल?",
    },
    options: {
      en: ["Pay immediately through the link they send", "Check your dues on the official electricity app or an old bill — never pay a stranger on a call", "Give your card details over the phone"],
      hi: ["उनके भेजे लिंक से तुरंत भुगतान करें", "बिजली विभाग की आधिकारिक ऐप या पुराने बिल पर बकाया जाँचें — कॉल पर किसी अजनबी को भुगतान न करें", "फ़ोन पर अपना कार्ड विवरण बता दें"],
      mr: ["त्यांनी पाठवलेल्या लिंकवरून लगेच पेमेंट करा", "वीज मंडळाच्या अधिकृत अ‍ॅपवर किंवा जुन्या बिलावर थकबाकी तपासा — कॉलवर अनोळखी व्यक्तीला पेमेंट करू नका", "फोनवर तुमच्या कार्डचे तपशील सांगा"],
    },
    answer: 1,
    explanation: {
      en: "Electricity boards send written notices, not night-time threats from mobile numbers. Verify on the official app first.",
      hi: "बिजली विभाग लिखित नोटिस देता है, मोबाइल नंबर से रात की धमकी नहीं। पहले आधिकारिक ऐप पर जाँचें।",
      mr: "वीज मंडळ लेखी नोटीस देते, मोबाईल नंबरवरून रात्रीची धमकी नाही. आधी अधिकृत अ‍ॅपवर तपासा.",
    },
  },
  {
    id: "qs5",
    quizId: "quiz-scams",
    question: {
      en: "You need your gas cylinder helpline number. Where is the safe place to get it?",
      hi: "आपको गैस सिलेंडर हेल्पलाइन नंबर चाहिए। सुरक्षित जगह कौन सी है?",
      mr: "तुम्हाला गॅस सिलिंडर हेल्पलाइन नंबर हवा आहे. सुरक्षित ठिकाण कोणते?",
    },
    options: {
      en: ["The number printed on your gas passbook or receipt", "The first number that appears on Google search", "A number forwarded in a WhatsApp message"],
      hi: ["गैस पासबुक या रसीद पर छपा नंबर", "गूगल सर्च में सबसे ऊपर दिखने वाला नंबर", "व्हाट्सएप संदेश में भेजा गया नंबर"],
      mr: ["गॅस पासबुक किंवा पावतीवर छापलेला नंबर", "गुगल शोधात सर्वात वर दिसणारा नंबर", "व्हॉट्सअ‍ॅप मेसेजमध्ये पाठवलेला नंबर"],
    },
    answer: 0,
    explanation: {
      en: "Numbers printed on your own passbook or receipt are genuine. Search results often carry fake ones.",
      hi: "अपनी पासबुक या रसीद पर छपे नंबर असली होते हैं। सर्च में अक्सर नकली नंबर मिलते हैं।",
      mr: "तुमच्या पासबुक किंवा पावतीवरील नंबर खरे असतात. शोध निकालांत बहुधा बनावट नंबर असतात.",
    },
  },
  {
    id: "qs6",
    quizId: "quiz-scams",
    question: {
      en: "A caller asks you to install AnyDesk so they can 'fix' your bank problem. What do you do?",
      hi: "कॉलर कहता है कि बैंक की समस्या ठीक करने के लिए एनीडेस्क ऐप डालें। आप क्या करेंगे?",
      mr: "कॉलर म्हणतो की बँकेची समस्या सोडवण्यासाठी एनीडेस्क अ‍ॅप इन्स्टॉल करा. तुम्ही काय कराल?",
    },
    options: {
      en: ["Install it and open your bank app", "Refuse and hang up — no bank ever needs to see your screen", "Share your PIN so they can work faster"],
      hi: ["ऐप डालकर अपना बैंक ऐप खोलें", "मना करके कॉल काट दें — किसी बैंक को आपकी स्क्रीन देखने की ज़रूरत नहीं होती", "जल्दी काम हो जाए इसलिए पिन बता दें"],
      mr: ["अ‍ॅप इन्स्टॉल करून तुमचे बँक अ‍ॅप उघडा", "नकार द्या आणि फोन ठेवा — कोणत्याही बँकेला तुमची स्क्रीन पाहण्याची गरज नसते", "लवकर काम व्हावे म्हणून पिन सांगा"],
    },
    answer: 1,
    explanation: {
      en: "Screen-sharing apps let strangers watch your PINs and passwords. Banks never ask you to install them.",
      hi: "स्क्रीन शेयरिंग ऐप से अजनबी आपके पिन और पासवर्ड देख सकते हैं। बैंक कभी इसे डालने को नहीं कहता।",
      mr: "स्क्रीन-शेअरिंग अ‍ॅपने अनोळखी व्यक्तीला तुमचे पिन आणि पासवर्ड दिसतात. बँका हे अ‍ॅप कधीही इन्स्टॉल करायला सांगत नाहीत.",
    },
  },
  /* ── quiz-services (new, 5) ── */
  {
    id: "qv1",
    quizId: "quiz-services",
    question: {
      en: "Where can you safely keep your Aadhaar and PAN cards on your phone?",
      hi: "आधार और पैन कार्ड फ़ोन पर सुरक्षित कहाँ रख सकते हैं?",
      mr: "आधार आणि पॅन कार्ड फोनवर सुरक्षित कुठे ठेवता येतात?",
    },
    options: {
      en: ["In the official DigiLocker app", "In a WhatsApp group", "In an SMS to yourself"],
      hi: ["आधिकारिक डिजीलॉकर ऐप में", "किसी व्हाट्सएप ग्रुप में", "खुद को भेजे गए एसएमएस में"],
      mr: ["अधिकृत डिजिलॉकर अ‍ॅपमध्ये", "एका व्हॉट्सअ‍ॅप ग्रुपमध्ये", "स्वतःला पाठवलेल्या एसएमएसमध्ये"],
    },
    answer: 0,
    explanation: {
      en: "DigiLocker is the Government of India's official app; documents there are legally valid.",
      hi: "डिजीलॉकर भारत सरकार का आधिकारिक ऐप है; वहाँ रखे दस्तावेज़ कानूनी रूप से मान्य हैं।",
      mr: "डिजिलॉकर हे भारत सरकारचे अधिकृत अ‍ॅप आहे; तिथे ठेवलेले दस्तऐवज कायदेशीरदृष्ट्या वैध आहेत.",
    },
  },
  {
    id: "qv2",
    quizId: "quiz-services",
    question: {
      en: "You want spoken directions to the hospital. Which app helps?",
      hi: "अस्पताल तक बोलकर रास्ता बताने वाला कौन सा ऐप मदद करता है?",
      mr: "रुग्णालयापर्यंत बोलून मार्ग दाखवणारे कोणते अ‍ॅप मदत करते?",
    },
    options: {
      en: ["The Play Store", "Google Maps", "The calculator"],
      hi: ["प्ले स्टोर", "गूगल मैप्स", "कैलकुलेटर"],
      mr: ["प्ले स्टोअर", "गुगल मॅप्स", "कॅल्क्युलेटर"],
    },
    answer: 1,
    explanation: {
      en: "Google Maps speaks each turn aloud so you can follow the way without staring at the screen.",
      hi: "गूगल मैप्स हर मोड़ बोलकर बताता है, जिससे स्क्रीन देखे बिना रास्ता मिलता है।",
      mr: "गुगल मॅप्स प्रत्येक वळण बोलून सांगते, त्यामुळे स्क्रीनकडे न पाहता रस्ता समजतो.",
    },
  },
  {
    id: "qv3",
    quizId: "quiz-services",
    question: {
      en: "You are paying your electricity bill from home. Where do you find your consumer number?",
      hi: "आप घर से बिजली बिल भर रहे हैं। उपभोक्ता नंबर कहाँ मिलेगा?",
      mr: "तुम्ही घरून वीजबिल भरत आहात. ग्राहक क्रमांक कुठे मिळेल?",
    },
    options: {
      en: ["Printed on your old paper electricity bill", "A caller will tell you over the phone", "It is your own phone number"],
      hi: ["पुराने कागज़ के बिजली बिल पर छपा होता है", "कोई कॉलर फ़ोन पर बता देगा", "यह आपका अपना फ़ोन नंबर होता है"],
      mr: ["जुन्या कागदी वीजबिलावर छापलेला असतो", "कोणी कॉलर फोनवर सांगेल", "तो तुमचा स्वतःचा फोन नंबर असतो"],
    },
    answer: 0,
    explanation: {
      en: "Your consumer number is printed on every paper bill. Never take it from a caller.",
      hi: "उपभोक्ता नंबर हर कागज़ के बिल पर छपा होता है। किसी कॉलर से कभी न लें।",
      mr: "ग्राहक क्रमांक प्रत्येक कागदी बिलावर छापलेला असतो. कॉलरकडून कधीही घेऊ नका.",
    },
  },
  {
    id: "qv4",
    quizId: "quiz-services",
    question: {
      en: "You booked a doctor appointment online. What should you keep for the clinic visit?",
      hi: "आपने ऑनलाइन डॉक्टर अपॉइंटमेंट ले लिया है। क्लिनिक जाते समय क्या रखना चाहिए?",
      mr: "तुम्ही ऑनलाइन डॉक्टर भेट बुक केली आहे. दवाखान्यात जाताना काय ठेवावे?",
    },
    options: {
      en: ["Nothing at all", "A screenshot or the confirmation message", "The clinic's landline number"],
      hi: ["कुछ भी नहीं", "स्क्रीनशॉट या पुष्टि संदेश", "क्लिनिक का लैंडलाइन नंबर"],
      mr: ["काहीच नाही", "स्क्रीनशॉट किंवा पुष्टी मेसेज", "दवाखान्याचा लँडलाइन नंबर"],
    },
    answer: 1,
    explanation: {
      en: "Showing the confirmation at the desk saves time and avoids confusion.",
      hi: "काउंटर पर पुष्टि दिखाने से समय बचता है और भ्रम नहीं होता।",
      mr: "काउंटरवर पुष्टी दाखवल्यास वेळ वाचतो आणि गोंधळ होत नाही.",
    },
  },
  {
    id: "qv5",
    quizId: "quiz-services",
    question: {
      en: "The Jeevan Pramaan app helps pensioners submit which document from home?",
      hi: "'जीवन प्रमाण' ऐप पेंशनधारियों को घर से कौन सा दस्तावेज़ जमा करने में मदद करता है?",
      mr: "'जीवन प्रमाण' अ‍ॅप पेन्शनधारकांना घरून कोणता दस्तऐवज सादर करण्यास मदत करते?",
    },
    options: {
      en: ["The annual life certificate", "The electricity bill", "A passport application"],
      hi: ["वार्षिक जीवन प्रमाण पत्र", "बिजली का बिल", "पासपोर्ट का आवेदन"],
      mr: ["वार्षिक जीवन प्रमाणपत्र", "वीजबिल", "पासपोर्ट अर्ज"],
    },
    answer: 0,
    explanation: {
      en: "With a simple face check on the phone, the life certificate is submitted without a bank visit.",
      hi: "फ़ोन पर चेहरा पहचान से जीवन प्रमाण पत्र बिना बैंक जाए जमा हो जाता है।",
      mr: "फोनवर चेहऱ्याच्या पडताळणीने जीवन प्रमाणपत्र बँकेत न जाता जमा होते.",
    },
  },
];

/* ---------------- Scam or Safe scenarios ---------------- */
export type Scenario = {
  id: string;
  text: Localized;
  isScam: boolean;
  explanation: Localized;
};

export const SCENARIOS: Scenario[] = [
  {
    id: "s1",
    text: {
      en: "Someone calls claiming to be from your bank and asks you to read out the OTP sent to your phone.",
      hi: "कोई बैंक से होने का दावा कर आपके फ़ोन पर आया हुआ ओटीपी पढ़ने को कहे।",
      mr: "कोणी बँकेतून असल्याचे सांगून फोनवर आलेला ओटीपी विचारतो.",
    },
    isScam: true,
    explanation: {
      en: "Real banks NEVER ask for an OTP over the phone.",
      hi: "असली बैंक कभी फ़ोन पर ओटीपी नहीं माँगता।",
      mr: "खरी बँक कधीही फोनवर ओटीपी मागत नाही.",
    },
  },
  {
    id: "s2",
    text: {
      en: "Your bank's own official app asks for your UPI PIN when you pay at the grocery shop.",
      hi: "किराने की दुकान पर सामान खरीदते समय आपका असली बैंक ऐप यूपीआई पिन माँगे।",
      mr: "किराणा दुकानात पैसे भरताना तुमचे अधिकृत बँक अ‍ॅप यूपीआय पिन विचारते.",
    },
    isScam: false,
    explanation: {
      en: "Entering your PIN in your own payment app to approve a purchase you made is completely normal.",
      hi: "खरीदे गए सामान का भुगतान करने के लिए अपने ऐप में पिन डालना बिल्कुल सामान्य है।",
      mr: "स्वतः खरेदी केलेल्या सामानाचे पेमेंट करताना स्वतःच्या अ‍ॅपमध्ये पिन टाकणे सुरक्षित आहे.",
    },
  },
  {
    id: "s3",
    text: {
      en: "A WhatsApp message says you won ₹25 Lakh in a lucky draw, but you must transfer ₹5,000 for tax first.",
      hi: "व्हाट्सएप संदेश कहे कि आपने ₹25 लाख जीते हैं, पर पहले टैक्स के लिए ₹5,000 जमा करने होंगे।",
      mr: "व्हॉट्सअ‍ॅपवर २५ लाखांचे बक्षीस लागल्याचे सांगून ₹५,००० टॅक्स भरण्यास सांगितले जाते.",
    },
    isScam: true,
    explanation: {
      en: "Real prizes NEVER ask the winner to pay money in advance.",
      hi: "सच्चे इनाम में कभी जीतने वाले से पहले पैसे नहीं माँगे जाते।",
      mr: "खऱ्या बक्षीसासाठी कधीही आधी पैसे भरावे लागत नाहीत.",
    },
  },
  {
    id: "s4",
    text: {
      en: "An unknown buyer sends you a QR code and says 'Scan this code to receive your advance money'.",
      hi: "कोई खरीदार क्यूआर कोड भेजकर कहे कि 'पैसे लेने के लिए यह कोड स्कैन करें'।",
      mr: "खरेदीदार क्यूआर पाठवून सांगतो की 'पैसे मिळवण्यासाठी हा कोड स्कॅन करा'.",
    },
    isScam: true,
    explanation: {
      en: "Scanning a QR code always SENDS money away. It never receives money.",
      hi: "क्यूआर स्कैन करने से हमेशा पैसे जाते हैं, कभी आते नहीं।",
      mr: "क्यूआर कोड स्कॅन केल्यास नेहमी पैसे जातात, कधीही येत नाहीत.",
    },
  },
  {
    id: "s5",
    text: {
      en: "An SMS says: 'Your electricity will be cut at 9:30 PM tonight, call this 10-digit mobile number immediately'.",
      hi: "एसएमएस: 'आज रात 9:30 बजे बिजली कट जाएगी, तुरंत इस मोबाइल नंबर पर कॉल करें'।",
      mr: "एसएमएस: 'आज रात्री ९:३० वाजता वीज कापली जाईल, या मोबाईल नंबरवर लगेच फोन करा'.",
    },
    isScam: true,
    explanation: {
      en: "Electricity boards give formal written notices, never urgent threats from personal mobile numbers.",
      hi: "बिजली विभाग व्यक्तिगत नंबर से रात में कनेक्शन काटने की ऐसी धमकी कभी नहीं देता।",
      mr: "वीज मंडळ लेखी नोटीस देते, वैयक्तिक नंबरवरून अशी रात्रीची धमकी देत नाही.",
    },
  },
  {
    id: "s6",
    text: {
      en: "Your son visits your home and teaches you how to make a video call to your grandchild.",
      hi: "आपका बेटा घर आकर आपको नाती-पोतों से वीडियो कॉल करने का तरीका सिखाता है।",
      mr: "तुमचा मुलगा घरी येऊन नातवंडांशी व्हिडिओ कॉल करायला शिकवतो.",
    },
    isScam: false,
    explanation: {
      en: "Learning in person from your trusted family members is completely safe and encouraging.",
      hi: "अपने परिवार के सामने बैठकर सीखना पूरी तरह सुरक्षित और बहुत अच्छी बात है।",
      mr: "कुटुंबातील व्यक्तींकडून प्रत्यक्ष शिकणे पूर्णपणे सुरक्षित आहे.",
    },
  },
  {
    id: "s7",
    text: {
      en: "A caller claims to be a police officer on a video call and says you are in 'Digital Arrest' for a parcel.",
      hi: "वीडियो कॉल पर एक व्यक्ति पुलिस की वर्दी में कहे कि आप पार्सल के कारण 'डिजिटल अरेस्ट' हैं।",
      mr: "व्हिडिओ कॉलवर पोलीस गणवेशातील व्यक्ती पार्सलमुळे तुम्ही 'डिजिटल अरेस्ट' आहात असे सांगते.",
    },
    isScam: true,
    explanation: {
      en: "There is NO 'digital arrest' in Indian law. Police never conduct trials over video calls.",
      hi: "कानून में 'डिजिटल अरेस्ट' जैसा कुछ नहीं होता। पुलिस कभी वीडियो कॉल पर गिरफ़्तारी या पैसे नहीं माँगती।",
      mr: "कायद्यात 'डिजिटल अरेस्ट' असा कोणताही प्रकार नाही. ही १००% फसवणूक आहे.",
    },
  },
  {
    id: "s8",
    text: {
      en: "You install the official WhatsApp or Google Pay app directly from the Google Play Store.",
      hi: "आप गूगल प्ले स्टोर (Play Store) से सीधे व्हाट्सएप या गूगल पे ऐप इंस्टॉल करते हैं।",
      mr: "तुम्ही थेट गुगल प्ले स्टोअरवरून व्हॉट्सअ‍ॅप किंवा गुगल पे अ‍ॅप इन्स्टॉल करता.",
    },
    isScam: false,
    explanation: {
      en: "The official Google Play Store checks apps before publishing and is the safe place to install them.",
      hi: "गूगल प्ले स्टोर सुरक्षित जगह है जहाँ ऐप्स की सुरक्षा जाँच होती है।",
      mr: "गुगल प्ले स्टोअर हे अधिकृत व सुरक्षित ठिकाण आहे.",
    },
  },
  {
    id: "s9",
    text: {
      en: "A caller asks you to download AnyDesk or QuickSupport on your phone so he can view your screen.",
      hi: "फ़ोन पर कोई AnyDesk या QuickSupport ऐप डालने को कहे ताकि वह आपकी स्क्रीन देख सके।",
      mr: "फोनवर कोणी स्क्रीन पाहण्यासाठी AnyDesk किंवा QuickSupport अ‍ॅप टाकायला सांगतो.",
    },
    isScam: true,
    explanation: {
      en: "Screen sharing gives the scammer total sight of your bank accounts and passwords.",
      hi: "स्क्रीन शेयर करने से ठग आपके बैंक खाते और पासवर्ड देख सकता है।",
      mr: "स्क्रीन शेअरिंग अ‍ॅप्समुळे भामट्यांना तुमचे सर्व पासवर्ड दिसतात.",
    },
  },
  {
    id: "s10",
    text: {
      en: "You dial the customer helpline printed on the back of your bank passbook to ask a question.",
      hi: "आप किसी सवाल के लिए अपनी बैंक पासबुक के पीछे छपे नंबर पर फ़ोन मिलाते हैं।",
      mr: "शंकेचे निरसन करण्यासाठी तुम्ही पासबुकच्या मागे छापलेल्या नंबरवर बँकेला फोन करता.",
    },
    isScam: false,
    explanation: {
      en: "The phone numbers printed on your physical bank passbook or ATM card are 100% genuine and safe.",
      hi: "पासबुक या एटीएम कार्ड पर छपे नंबर हमेशा असली और सुरक्षित होते हैं।",
      mr: "पासबुक किंवा एटीएम कार्डवरील नंबर १००% खरे आणि सुरक्षित असतात.",
    },
  },
];

/* ---------------- Dictionary ---------------- */
export type Term = {
  id: string;
  term: string;
  full?: string;
  meaning: Localized;
  tip?: Localized;
  category?: string;
};

export const DICTIONARY: Term[] = [
  {
    id: "otp",
    term: "OTP",
    full: "One-Time Password",
    meaning: {
      en: "A temporary 4 or 6 digit code sent via SMS to verify that you are authorizing an action.",
      hi: "एसएमएस से आने वाला 4 या 6 अंकों का अस्थायी गुप्त कोड जो आपकी पहचान साबित करता है।",
      mr: "पडताळणीसाठी एसएमएसने येणारा ४ किंवा ६ अंकी तात्पुरता गुप्त कोड.",
    },
    tip: {
      en: "Never share your OTP with anyone over a phone call, not even a bank manager.",
      hi: "फ़ोन पर किसी को भी कभी ओटीपी न बताएँ, चाहे वह खुद को बैंक मैनेजर ही क्यों न कहे।",
      mr: "फोनवर कोणालाही कधीही ओटीपी सांगू नका, अगदी बँक अधिकाऱ्यालाही नाही.",
    },
    category: "Security",
  },
  {
    id: "upi",
    term: "UPI",
    full: "Unified Payments Interface",
    meaning: {
      en: "A government-backed system to send and receive money directly between bank accounts using mobile phones.",
      hi: "फ़ोन से सीधे बैंक से बैंक में पैसे भेजने और मँगवाने की सुरक्षित सरकारी प्रणाली।",
      mr: "फोनवरून एका बँक खात्यातून दुसऱ्या खात्यात थेट पैसे पाठवण्याची सुरक्षित सरकारी पद्धत.",
    },
    tip: {
      en: "You only need to enter your PIN to SEND money, NEVER to receive money.",
      hi: "पिन केवल पैसे भेजने के लिए चाहिए, पैसे पाने के लिए कभी नहीं।",
      mr: "पिन फक्त पैसे पाठवण्यासाठी लागतो, पैसे स्वीकारण्यासाठी कधीही नाही.",
    },
    category: "Payments",
  },
  {
    id: "qr",
    term: "QR Code",
    meaning: {
      en: "A black-and-white square pattern that your phone camera scans to open a payment or a webpage.",
      hi: "चौकोर काला-सफ़ेद निशान जिसे कैमरा पढ़कर दुकानदार का नाम और भुगतान खोलता है।",
      mr: "चौकोनी काळी-पांढरी नक्षी जी कॅमेऱ्याने स्कॅन करून पेमेंट किंवा माहितीचे पान उघडते.",
    },
    tip: {
      en: "Scanning a QR code always SENDS money away from your account.",
      hi: "क्यूआर कोड स्कैन करने से हमेशा पैसे आपके खाते से जाते हैं।",
      mr: "क्यूआर कोड स्कॅन केल्याने नेहमी पैसे खात्यातून जातात.",
    },
    category: "Payments",
  },
  {
    id: "wifi",
    term: "Wi-Fi",
    meaning: {
      en: "Wireless internet provided by a nearby router box (usually at home), without using your SIM data pack.",
      hi: "घर में लगे बॉक्स (राउटर) से मिलने वाला इंटरनेट, जिससे सिम का डेटा पैक खर्च नहीं होता।",
      mr: "घरातील राउटरकडून मिळणारे इंटरनेट, ज्यामुळे सिमचा डेटा पॅक संपत नाही.",
    },
    tip: {
      en: "Connect to Wi-Fi at home to watch videos and make calls comfortably.",
      hi: "घर पर हमेशा वाई-फ़ाई जोड़ें ताकि वीडियो आराम से देख सकें।",
      mr: "घरी असताना नेहमी वाय-फाय जोडून ठेवा.",
    },
    category: "Internet",
  },
  {
    id: "data",
    term: "Mobile Data",
    meaning: {
      en: "Internet provided directly by your SIM card operator (Jio, Airtel, Vi) when you are away from home Wi-Fi.",
      hi: "सिम कार्ड कंपनी की ओर से मिलने वाला इंटरनेट, जो घर से बाहर सफर में काम आता है।",
      mr: "घराबाहेर असताना सिमकार्डद्वारे मिळणारे इंटरनेट.",
    },
    tip: {
      en: "Turn off Mobile Data at home when Wi-Fi is available to save your daily limit.",
      hi: "घर पर वाई-फ़ाई होने पर मोबाइल डेटा बंद रखने से पैक बचा रहता है।",
      mr: "घरी वाय-फाय असताना मोबाईल डेटा बंद ठेवल्यास पॅक वाचतो.",
    },
    category: "Internet",
  },
  {
    id: "pin",
    term: "UPI PIN",
    meaning: {
      en: "A secret 4 or 6 digit number you chose that authorizes money leaving your bank account.",
      hi: "आपका चुना हुआ 4 या 6 अंकों का गुप्त कोड जो आपके खाते से पैसे जाने की मंज़ूरी देता है।",
      mr: "तुमचा ४ किंवा ६ अंकी गुप्त क्रमांक जो खात्यातून पैसे पाठवण्यास मंजुरी देतो.",
    },
    tip: {
      en: "Keep your UPI PIN completely private. Cover the screen when typing it in shops.",
      hi: "अपना पिन हमेशा गुप्त रखें। दुकान में डालते समय स्क्रीन छुपा लें।",
      mr: "पिन नेहमी गुप्त ठेवा. दुकानात टाकताना स्क्रीन झाकून घ्या.",
    },
    category: "Payments",
  },
  {
    id: "screenlock",
    term: "Screen Lock",
    meaning: {
      en: "A PIN, pattern or fingerprint that prevents unauthorized people from opening your phone.",
      hi: "फ़ोन पर लगा पिन या पासवर्ड जो किसी और को आपका फ़ोन खोलने से रोकता है।",
      mr: "पिन किंवा बोटाचा ठसा जो इतरांना तुमचा फोन उघडण्यापासून रोखतो.",
    },
    tip: {
      en: "A screen lock protects your WhatsApp and bank apps if your phone is ever misplaced.",
      hi: "अगर फ़ोन कहीं छूट जाए तो स्क्रीन लॉक आपके बैंक और संदेशों को सुरक्षित रखता है।",
      mr: "फोन गहाळ झाल्यास स्क्रीन लॉकमुळे बँक व मेसेज सुरक्षित राहतात.",
    },
    category: "Security",
  },
  {
    id: "phishing",
    term: "Phishing Link",
    meaning: {
      en: "A fake website link sent in an SMS that looks identical to your bank or electricity board.",
      hi: "एसएमएस में आया फ़र्ज़ी लिंक जो बैंक या बिजली विभाग जैसा दिखता है ताकि जानकारी चुरा सके।",
      mr: "बँकेसारखी दिसणारी बनावट लिंक जी माहिती चोरण्यासाठी पाठवली जाते.",
    },
    tip: {
      en: "Never click links from unknown numbers. Open your official bank app instead.",
      hi: "अनजान नंबर से आए लिंक पर न दबाएँ। हमेशा बैंक के असली ऐप से काम करें।",
      mr: "अनोळखी नंबरवरील लिंकवर दाबू नका. अधिकृत अ‍ॅप वापरा.",
    },
    category: "Security",
  },
  {
    id: "videocall",
    term: "Video Call",
    meaning: {
      en: "A phone call where both people can see each other on screen while speaking in real time.",
      hi: "ऐसा कॉल जिसमें बात करते समय सामने वाले का चेहरा स्क्रीन पर साफ़ दिखता है।",
      mr: "समोरासमोर चेहरा पाहून प्रत्यक्ष बोलता येणारा फोन कॉल.",
    },
    tip: {
      en: "Video calls work best over Wi-Fi so the picture stays smooth and clear.",
      hi: "वाई-फ़ाई पर वीडियो कॉल करने से तस्वीर साफ़ और बिना रुके चलती है।",
      mr: "वाय-फायवर व्हिडिओ कॉल केल्यास चेहरा स्पष्ट दिसतो.",
    },
    category: "Basics",
  },
  {
    id: "voicenote",
    term: "Voice Note",
    meaning: {
      en: "A recorded voice message on WhatsApp sent by pressing the green microphone button.",
      hi: "व्हाट्सएप पर माइक बटन दबाकर बोलकर भेजा गया आवाज़ संदेश।",
      mr: "व्हॉट्सअ‍ॅपवर माइकचे बटण दाबून बोलून पाठवलेला व्हॉइस मेसेज.",
    },
    tip: {
      en: "No need to type long paragraphs: just speak your heart out in your own language.",
      hi: "टाइप करने की ज़रूरत नहीं, अपनी भाषा में आसानी से बोलकर भेजें।",
      mr: "टाइप न करता आपल्या भाषेत सहज बोलून पाठवा.",
    },
    category: "WhatsApp",
  },
  {
    id: "spam",
    term: "Spam",
    meaning: {
      en: "Unwanted lottery, loan, or advertising messages sent automatically to thousands of people.",
      hi: "हज़ारों लोगों को एक साथ भेजे गए अनचाहे प्रचार, लॉटरी या लोन के संदेश।",
      mr: "अनेकांना एकाच वेळी पाठवलेले नको असलेले जाहिरातीचे किंवा फसवणुकीचे संदेश.",
    },
    tip: {
      en: "Block and report spam messages on WhatsApp so they can never disturb you again.",
      hi: "व्हाट्सएप पर स्पैम संदेशों को ब्लॉक कर दें ताकि वे दोबारा न आ सकें।",
      mr: "व्हॉट्सअ‍ॅपवर अशा मेसेजला ब्लॉक करा जेणेकरून ते पुन्हा त्रास देणार नाहीत.",
    },
    category: "Security",
  },
  {
    id: "app",
    term: "App",
    full: "Application",
    meaning: {
      en: "A software program on your phone designed for a specific task, shown as an icon on screen.",
      hi: "फ़ोन की स्क्रीन पर दिखने वाला प्रोग्राम, जैसे व्हाट्सएप, यूट्यूब या कैमरा।",
      mr: "फोनच्या स्क्रीनवर दिसणारे साधन, जसे व्हॉट्सअ‍ॅप, कॅमेरा किंवा गुगल.",
    },
    tip: {
      en: "Only install apps from the official Google Play Store or Apple App Store.",
      hi: "ऐप हमेशा केवल आधिकारिक गूगल प्ले स्टोर से ही डालें।",
      mr: "अ‍ॅप्स नेहमी अधिकृत गुगल प्ले स्टोअरवरूनच घ्यावेत.",
    },
    category: "Basics",
  },
  /* ── Security ── */
  {
    id: "malware",
    term: "Malware",
    meaning: {
      en: "Harmful software that secretly enters your phone to steal information or damage it.",
      hi: "आपके फ़ोन में चुपके से घुसकर जानकारी चुराने या नुकसान पहुँचाने वाला हानिकारक सॉफ़्टवेयर।",
      mr: "तुमच्या फोनमध्ये चोरट्याने शिरून माहिती चोरणारे किंवा नुकसान करणारे हानिकारक सॉफ्टवेअर.",
    },
    tip: {
      en: "Never install apps from links sent in messages.",
      hi: "संदेशों में आए लिंक से कभी ऐप इंस्टॉल न करें।",
      mr: "मेसेजमधील लिंकवरून कधीही अ‍ॅप इंस्टॉल करू नका.",
    },
    category: "Security",
  },
  {
    id: "virus",
    term: "Virus",
    meaning: {
      en: "A type of malware that spreads from one device to another, like a sickness.",
      hi: "बीमारी की तरह एक फ़ोन से दूसरे फ़ोन में फैलने वाला मैलवेयर।",
      mr: "आजारासारखे एका फोनमधून दुसऱ्या फोनमध्ये पसरणारे मालवेअर.",
    },
    tip: {
      en: "An antivirus app from the Play Store can help find and remove it.",
      hi: "प्ले स्टोर का एंटीवायरस ऐप इसे खोजकर हटाने में मदद करता है।",
      mr: "प्ले स्टोअरचे अँटीव्हायरस अ‍ॅप ते शोधून काढण्यास मदत करते.",
    },
    category: "Security",
  },
  {
    id: "screenshare",
    term: "Screen Sharing",
    meaning: {
      en: "Apps like AnyDesk that let a stranger see and control your phone screen from far away.",
      hi: "एनीडेस्क जैसे ऐप जो किसी अजनबी को दूर से आपकी स्क्रीन देखने और नियंत्रित करने देते हैं।",
      mr: "एनीडेस्कसारखे अ‍ॅप ज्यामुळे अनोळखी व्यक्ती दूरून तुमची स्क्रीन पाहू व चालवू शकते.",
    },
    tip: {
      en: "No bank or office ever needs to see your screen. Never install it for a caller.",
      hi: "किसी भी बैंक या दफ़्तर को आपकी स्क्रीन देखने की ज़रूरत नहीं होती। कॉलर के लिए कभी इंस्टॉल न करें।",
      mr: "कोणत्याही बँकेला तुमची स्क्रीन पाहण्याची गरज नसते. कॉलरसाठी कधीही इंस्टॉल करू नका.",
    },
    category: "Security",
  },
  {
    id: "simswap",
    term: "SIM Swap Scam",
    meaning: {
      en: "When a thief gets a duplicate copy of your SIM card to receive your OTPs.",
      hi: "जब ठग आपके सिम की नकली कॉपी बनवाकर आपके ओटीपी पाने लगते हैं।",
      mr: "चोर तुमच्या सिमची दुसरी प्रत मिळवून तुमचे ओटीपी मिळवतात.",
    },
    tip: {
      en: "If your phone suddenly loses network, call your mobile operator at once.",
      hi: "अगर फ़ोन का नेटवर्क अचानक चला जाए, तो तुरंत अपनी मोबाइल कंपनी को फ़ोन करें।",
      mr: "फोनचे नेटवर्क अचानक गेले तर लगेच मोबाईल कंपनीला फोन करा.",
    },
    category: "Security",
  },
  {
    id: "twofactor",
    term: "Two-Factor Authentication",
    meaning: {
      en: "An extra safety layer: password plus an OTP, so thieves cannot open your account.",
      hi: "सुरक्षा की दूसरी दीवार: पासवर्ड के साथ ओटीपी, ताकि ठग आपका खाता न खोल सकें।",
      mr: "सुरक्षेची दुसरी पातळी: पासवर्डसह ओटीपी, जेणेकरून चोर खाते उघडू शकत नाहीत.",
    },
    tip: {
      en: "Turn it on for WhatsApp and email — it takes one minute.",
      hi: "व्हाट्सएप और ईमेल पर इसे चालू करें — सिर्फ़ एक मिनट लगता है।",
      mr: "व्हॉट्सअ‍ॅप आणि ईमेलसाठी ते चालू करा — फक्त एक मिनिट लागतो.",
    },
    category: "Security",
  },
  {
    id: "fakeapp",
    term: "Fake App",
    meaning: {
      en: "A copy of a real app (like a bank app) made by thieves to steal your details.",
      hi: "असली ऐप जैसी दिखने वाली नकली ऐप जो ठग जानकारी चुराने के लिए बनाते हैं।",
      mr: "खऱ्या अ‍ॅपसारखी दिसणारी बनावट अ‍ॅप जी चोर माहिती चोरण्यासाठी बनवतात.",
    },
    tip: {
      en: "Check the download count and reviews before installing any app.",
      hi: "कोई भी ऐप डालने से पहले उसके डाउनलोड और रिव्यू ज़रूर देखें।",
      mr: "कोणतेही अ‍ॅप घेण्यापूर्वी त्याचे डाउनलोड व अभिप्राय नक्की पाहा.",
    },
    category: "Security",
  },
  {
    id: "cybercrime",
    term: "Cyber Crime",
    meaning: {
      en: "Crimes done using phones or the internet, like stealing money or cheating online.",
      hi: "फ़ोन या इंटरनेट से की जाने वाली ठगी, जैसे पैसे चुराना या ऑनलाइन धोखा।",
      mr: "फोन किंवा इंटरनेटद्वारे केली जाणारी फसवणूक, जसे पैसे चोरणे किंवा ऑनलाइन फसवणे.",
    },
    tip: {
      en: "Report it at cybercrime.gov.in or call 1930.",
      hi: "साइबरक्राइम.जीओवी.इन पर शिकायत करें या 1930 पर कॉल करें।",
      mr: "cybercrime.gov.in वर तक्रार करा किंवा 1930 वर फोन करा.",
    },
    category: "Security",
  },
  {
    id: "helpline1930",
    term: "Helpline 1930",
    meaning: {
      en: "The national number to report online money fraud, available all day.",
      hi: "ऑनलाइन ठगी की शिकायत का राष्ट्रीय नंबर, जो हर समय उपलब्ध है।",
      mr: "ऑनलाइन फसवणुकीची तक्रार करण्याचा राष्ट्रीय क्रमांक, जो सदैव उपलब्ध आहे.",
    },
    tip: {
      en: "Call right after money is stolen — quick calls can freeze the money.",
      hi: "पैसे कटने के तुरंत बाद कॉल करने पर पैसे रुकने की संभावना सबसे ज़्यादा होती है।",
      mr: "पैसे गेल्यावर लगेच फोन केल्यास पैसे अडवण्याची शक्यता सर्वाधिक असते.",
    },
    category: "Security",
  },
  {
    id: "digitalarrest",
    term: "Digital Arrest",
    meaning: {
      en: "A fake video-call threat where crooks pose as police and say you are under arrest at home.",
      hi: "नकली वीडियो कॉल धमकी, जिसमें ठग पुलिस बनकर कहते हैं कि आप घर पर ही गिरफ़्तार हैं।",
      mr: "बनावट व्हिडिओ कॉल धमकी, ज्यात चोर पोलीस बनून म्हणतात की तुम्ही घरच्या घरी अटकेत आहात.",
    },
    tip: {
      en: "Real police never arrest anyone over a video call.",
      hi: "असली पुलिस कभी वीडियो कॉल पर किसी को गिरफ़्तार नहीं करती।",
      mr: "खरे पोलीस कधीही व्हिडिओ कॉलवरून अटक करत नाहीत.",
    },
    category: "Security",
  },
  {
    id: "strongpassword",
    term: "Strong Password",
    meaning: {
      en: "A secret code that is long and mixes letters, numbers and symbols — hard to guess.",
      hi: "लंबा और अक्षरों, अंकों व चिह्नों वाला गुप्त कोड, जिसका अंदाज़ा लगाना मुश्किल हो।",
      mr: "लांब व अक्षरे, अंक आणि चिन्हे असलेला गुप्त कोड जो अंदाजणे कठीण असते.",
    },
    tip: {
      en: "Never use birthdays or 1234. Use a line from a song you love.",
      hi: "जन्मदिन या 1234 कभी न रखें। अपने पसंदीदा गीत की एक पंक्ति रखें।",
      mr: "जन्मदिवस किंवा 1234 कधीही वापरू नका. आवडत्या गाण्यातील एक ओळ वापरा.",
    },
    category: "Security",
  },
  /* ── Payments ── */
  {
    id: "netbanking",
    term: "Net Banking",
    meaning: {
      en: "Using your bank's own website or app to check balance and transfer money.",
      hi: "अपनी बैंक की वेबसाइट या ऐप से बैलेंस देखना और पैसे भेजना।",
      mr: "तुमच्या बँकेच्या संकेतस्थळ किंवा अ‍ॅपद्वारे शिल्लक पाहणे व पैसे पाठवणे.",
    },
    tip: {
      en: "Open it only by typing your bank's name yourself, never from SMS links.",
      hi: "इसे हमेशा बैंक का नाम खुद लिखकर खोलें, एसएमएस लिंक से कभी नहीं।",
      mr: "ते नेहमी बँकेचे नाव स्वतः लिहून उघडा, एसएमएस लिंकवरून कधीही नाही.",
    },
    category: "Payments",
  },
  {
    id: "wallet",
    term: "Digital Wallet",
    meaning: {
      en: "An app like Paytm where you keep a little money for small everyday payments.",
      hi: "पेटीएम जैसे ऐप जिनमें छोटे-मोटे भुगतान के लिए थोड़े पैसे रखे जाते हैं।",
      mr: "पेटीएमसारखे अ‍ॅप ज्यात रोजच्या छोट्या पेमेंटसाठी थोडे पैसे ठेवले जातात.",
    },
    tip: {
      en: "Keep only a small amount in the wallet, like cash in a purse.",
      hi: "वॉलेट में पर्स की तरह थोड़े ही पैसे रखें।",
      mr: "वॉलेटमध्ये पाकिटासारखे थोडेच पैसे ठेवा.",
    },
    category: "Payments",
  },
  {
    id: "ifsc",
    term: "IFSC Code",
    meaning: {
      en: "An 11-character code that tells which bank branch an account belongs to.",
      hi: "11 अक्षरों का कोड जो बताता है कि खाता किस बैंक की किस शाखा का है।",
      mr: "११ अंकी कोड जो सांगतो की खाते कोणत्या बँकेच्या कोणत्या शाखेचे आहे.",
    },
    tip: {
      en: "It is safe to share IFSC with someone who is sending you money.",
      hi: "पैसे भेजने वाले को आईएफएससी बताना सुरक्षित है।",
      mr: "तुम्हाला पैसे पाठवणाऱ्याला आयएफएससी सांगणे सुरक्षित आहे.",
    },
    category: "Payments",
  },
  {
    id: "atmpin",
    term: "ATM PIN",
    meaning: {
      en: "The secret 4-digit number you type at an ATM machine to take out cash.",
      hi: "एटीएम से पैसे निकालने के लिए डाला जाने वाला 4 अंकों का गुप्त नंबर।",
      mr: "एटीएममधून पैसे काढण्यासाठी टाकला जाणारा ४ अंकी गुप्त क्रमांक.",
    },
    tip: {
      en: "Cover the keypad with your hand while typing your PIN.",
      hi: "पिन डालते समय हाथ से कीबोर्ड ढक लें।",
      mr: "पिन टाकताना हाताने कीपॅड झाका.",
    },
    category: "Payments",
  },
  {
    id: "debitcard",
    term: "Debit Card",
    meaning: {
      en: "The plastic card linked to your bank account, used at ATMs and shops.",
      hi: "आपके बैंक खाते से जुड़ा प्लास्टिक कार्ड, जो एटीएम और दुकानों पर चलता है।",
      mr: "तुमच्या बँक खात्याशी जोडलेले प्लास्टिक कार्ड, जे एटीएम व दुकानांत वापरता येते.",
    },
    tip: {
      en: "The CVV (3 digits on the back) is like an OTP — never share it.",
      hi: "कार्ड के पीछे के 3 अंक (सीवीवी) ओटीपी जैसे हैं — कभी साझा न करें।",
      mr: "कार्डच्या मागील ३ अंक (सीव्हीव्ही) ओटीपीसारखे आहेत — कधीही शेअर करू नका.",
    },
    category: "Payments",
  },
  {
    id: "refundscam",
    term: "Refund Scam",
    meaning: {
      en: "A trick where someone promises to return your money but asks you to scan a QR or enter your PIN.",
      hi: "ऐसी ठगी जहाँ कोई पैसे लौटाने का वादा करके क्यूआर स्कैन या पिन डलवाता है।",
      mr: "पैसे परत देण्याचे आमिष दाखवून क्यूआर स्कॅन किंवा पिन टाकून घेण्याची फसवणूक.",
    },
    tip: {
      en: "Receiving a refund never needs your PIN or a QR scan.",
      hi: "पैसे पाने के लिए कभी पिन या क्यूआर स्कैन की ज़रूरत नहीं होती।",
      mr: "परतावा मिळवण्यासाठी कधीही पिन किंवा क्यूआर स्कॅनची गरज नसते.",
    },
    category: "Payments",
  },
  {
    id: "collectrequest",
    term: "Collect Request",
    meaning: {
      en: "A UPI message asking you to approve a payment — approving sends money OUT of your account.",
      hi: "यूपीआई पर आया भुगतान का अनुरोध — इसे स्वीकार करने से आपके खाते से पैसे जाते हैं।",
      mr: "यूपीआयवरील पेमेंटची विनंती — ती स्वीकारल्यास तुमच्या खात्यातून पैसे जातात.",
    },
    tip: {
      en: "If you did not order anything, never accept a collect request.",
      hi: "अगर आपने कुछ नहीं मँगाया, तो कलेक्ट रिक्वेस्ट कभी स्वीकार न करें।",
      mr: "तुम्ही काही मागवले नसेल तर कलेक्ट रिक्वेस्ट कधीही स्वीकारू नका.",
    },
    category: "Payments",
  },
  {
    id: "autopay",
    term: "Auto-Pay",
    meaning: {
      en: "A setting that lets an app cut money from your account automatically every month.",
      hi: "सुविधा जिससे ऐप हर महीने अपने आप आपके खाते से पैसे काटता है।",
      mr: "सुविधा ज्यामुळे अ‍ॅप दर महिन्याला आपोआप तुमच्या खात्यातून पैसे कापते.",
    },
    tip: {
      en: "Check your bank statement for small unknown cuts — they may be old auto-pays.",
      hi: "बैंक स्टेटमेंट में छोटी अनजान कटौती देखें — वे पुराने ऑटो-पे हो सकते हैं।",
      mr: "बँक स्टेटमेंटमधील छोटे अनोळखी कपात पाहा — ते जुने ऑटो-पे असू शकतात.",
    },
    category: "Payments",
  },
  /* ── Internet ── */
  {
    id: "browser",
    term: "Browser",
    meaning: {
      en: "The app you use to open websites — like Chrome or Safari.",
      hi: "वेबसाइट खोलने वाला ऐप — जैसे क्रोम या सफ़ारी।",
      mr: "वेबसाइट उघडण्याचे अ‍ॅप — जसे क्रोम किंवा सफारी.",
    },
    tip: {
      en: "Look for the small lock symbol before typing passwords on a website.",
      hi: "वेबसाइट पर पासवर्ड डालने से पहले छोटे ताले का निशान देखें।",
      mr: "वेबसाइटवर पासवर्ड टाकण्यापूर्वी छोटे कुलूपाचे चिन्ह पाहा.",
    },
    category: "Internet",
  },
  {
    id: "searchengine",
    term: "Search Engine",
    meaning: {
      en: "A website like Google where you type a question and get answers from the internet.",
      hi: "गूगल जैसी वेबसाइट जहाँ सवाल लिखने पर इंटरनेट से जवाब मिलते हैं।",
      mr: "गुगलसारखे संकेतस्थळ जिथे प्रश्न लिहिल्यास इंटरनेटवरून उत्तरे मिळतात.",
    },
    tip: {
      en: "Helpline numbers found in search results are often fake — use your passbook number.",
      hi: "सर्च में मिलने वाले हेल्पलाइन नंबर अक्सर नकली होते हैं — पासबुक का नंबर ही इस्तेमाल करें।",
      mr: "शोधात मिळणारे हेल्पलाइन क्रमांक बहुधा बनावट असतात — पासबुकवरील क्रमांकच वापरा.",
    },
    category: "Internet",
  },
  {
    id: "website",
    term: "Website",
    meaning: {
      en: "A place on the internet with pages of information, like a shop or a bank branch online.",
      hi: "इंटरनेट पर जानकारी की जगह, जैसे किसी दुकान या बैंक की ऑनलाइन शाखा।",
      mr: "इंटरनेटवरील माहितीचे ठिकाण, जसे दुकान किंवा बँकेची ऑनलाइन शाखा.",
    },
    tip: {
      en: "A real bank website starts with https and shows a lock symbol.",
      hi: "असली बैंक वेबसाइट एचटीटीपीएस से शुरू होती है और ताला दिखाती है।",
      mr: "खरी बँक वेबसाइट https ने सुरू होते आणि कुलूप दाखवते.",
    },
    category: "Internet",
  },
  {
    id: "cloud",
    term: "Cloud",
    meaning: {
      en: "Safe online storage for your photos and contacts, kept by big companies like Google.",
      hi: "आपकी तस्वीरों और संपर्कों की सुरक्षित ऑनलाइन जगह, जो गूगल जैसी कंपनियाँ रखती हैं।",
      mr: "तुमचे फोटो व संपर्क ठेवणारी सुरक्षित ऑनलाइन जागा, जी गुगलसारख्या कंपन्या सांभाळतात.",
    },
    tip: {
      en: "If your phone breaks, cloud photos can still be recovered on a new phone.",
      hi: "फ़ोन खराब हो जाए तो क्लाउड की तस्वीरें नए फ़ोन पर वापस मिल सकती हैं।",
      mr: "फोन खराब झाल्यास क्लाउडचे फोटो नव्या फोनवर परत मिळू शकतात.",
    },
    category: "Internet",
  },
  {
    id: "update",
    term: "Update",
    meaning: {
      en: "A free upgrade that makes an app or your phone safer and better.",
      hi: "मुफ़्त सुधार जो ऐप या फ़ोन को ज़्यादा सुरक्षित और बेहतर बनाता है।",
      mr: "मोफत सुधारणा जी अ‍ॅप किंवा फोन अधिक सुरक्षित व चांगला बनवते.",
    },
    tip: {
      en: "Always tap 'Update' when your apps ask — it fixes safety holes.",
      hi: "जब ऐप पूछे तो हमेशा 'अपडेट' दबाएँ — यह सुरक्षा की कमियाँ ठीक करता है।",
      mr: "अ‍ॅप विचारेल तेव्हा नेहमी 'अपडेट' दाबा — ते सुरक्षेतील त्रुटी दुरुस्त करते.",
    },
    category: "Internet",
  },
  {
    id: "download",
    term: "Download",
    meaning: {
      en: "Copying something from the internet onto your phone, like an app or a photo.",
      hi: "इंटरनेट से ऐप या फ़ोटो जैसी चीज़ अपने फ़ोन में लाना।",
      mr: "इंटरनेटवरून अ‍ॅप किंवा फोटोसारखी गोष्ट तुमच्या फोनमध्ये आणणे.",
    },
    tip: {
      en: "Only download apps from the Play Store, not from message links.",
      hi: "ऐप केवल प्ले स्टोर से डालें, संदेश के लिंक से नहीं।",
      mr: "अ‍ॅप फक्त प्ले स्टोअरमधून घ्या, मेसेज लिंकवरून नाही.",
    },
    category: "Internet",
  },
  {
    id: "playstore",
    term: "Play Store",
    meaning: {
      en: "Google's official shop for phone apps — every app there is checked for safety.",
      hi: "फ़ोन ऐप की गूगल की आधिकारिक दुकान — यहाँ हर ऐप की जाँच की जाती है।",
      mr: "फोन अ‍ॅप्सचे गुगलचे अधिकृत दुकान — येथील प्रत्येक अ‍ॅप तपासलेले असते.",
    },
    tip: {
      en: "If an app is not in the Play Store, do not install it.",
      hi: "जो ऐप प्ले स्टोर पर नहीं है, उसे कभी इंस्टॉल न करें।",
      mr: "जे अ‍ॅप प्ले स्टोअरमध्ये नाही, ते कधीही इंस्टॉल करू नका.",
    },
    category: "Internet",
  },
  {
    id: "googleaccount",
    term: "Google Account",
    meaning: {
      en: "One login that connects Gmail, Maps, Play Store and your phone backup.",
      hi: "एक लॉगिन जो जीमेल, मैप्स, प्ले स्टोर और फ़ोन बैकअप को जोड़ता है।",
      mr: "एक लॉगिन जो जीमेल, मॅप्स, प्ले स्टोअर आणि फोन बॅकअप जोडते.",
    },
    tip: {
      en: "Write the password on paper and keep it safely at home.",
      hi: "पासवर्ड कागज़ पर लिखकर घर पर सुरक्षित रखें।",
      mr: "पासवर्ड कागदावर लिहून घरी सुरक्षित ठेवा.",
    },
    category: "Internet",
  },
  /* ── WhatsApp ── */
  {
    id: "group",
    term: "WhatsApp Group",
    meaning: {
      en: "A shared chat where many people can send messages and photos together.",
      hi: "साझा चैट जहाँ कई लोग एक साथ संदेश और फ़ोटो भेज सकते हैं।",
      mr: "सामायिक चॅट जिथे अनेक लोक एकत्र मेसेज व फोटो पाठवू शकतात.",
    },
    tip: {
      en: "Stop strangers from adding you: Settings → Privacy → Groups → My Contacts.",
      hi: "अजनबियों को जोड़ने से रोकें: सेटिंग्स → प्राइवेसी → ग्रुप्स → मेरे संपर्क।",
      mr: "अनोळखींना जोडण्यापासून थांबवा: सेटिंग्ज → प्रायव्हसी → ग्रुप्स → माझे संपर्क.",
    },
    category: "WhatsApp",
  },
  {
    id: "forward",
    term: "Forwarded Message",
    meaning: {
      en: "A message someone copied and re-sent — marked with a 'Forwarded' label.",
      hi: "किसी का भेजा संदेश जो दोबारा भेजा गया — उस पर 'फ़ॉरवर्डेड' लिखा होता है।",
      mr: "कोणीतरी पुढे पाठवलेला मेसेज — त्यावर 'फॉरवर्डेड' असे लिहिले असते.",
    },
    tip: {
      en: "Forwarded news is often false — check before believing or sharing.",
      hi: "फ़ॉरवर्ड की गई खबर अक्सर झूठी होती है — मानने या भेजने से पहले जाँचें।",
      mr: "फॉरवर्ड केलेली बातमी बहुधा खोटी असते — मानण्यापूर्वी किंवा पाठवण्यापूर्वी तपासा.",
    },
    category: "WhatsApp",
  },
  {
    id: "blockreport",
    term: "Block & Report",
    meaning: {
      en: "WhatsApp buttons that stop a stranger from messaging you and alert WhatsApp.",
      hi: "व्हाट्सएप के बटन जो अजनबी को संदेश भेजने से रोकते हैं और व्हाट्सएप को सूचना देते हैं।",
      mr: "व्हॉट्सअ‍ॅपची बटणे जी अनोळखी व्यक्तीला मेसेजपासून थांबवतात व व्हॉट्सअ‍ॅपला कळवतात.",
    },
    tip: {
      en: "Blocking someone is not rude — it is taking care of yourself.",
      hi: "किसी को ब्लॉक करना बुरा नहीं — यह अपनी देखभाल है।",
      mr: "कोणाला ब्लॉक करणे चुकीचे नाही — ती स्वतःची काळजी आहे.",
    },
    category: "WhatsApp",
  },
  {
    id: "twostep",
    term: "Two-Step Verification",
    meaning: {
      en: "A WhatsApp safety setting that asks for your own secret PIN when opening WhatsApp on a new phone.",
      hi: "व्हाट्सएप सुरक्षा सेटिंग जो नए फ़ोन पर व्हाट्सएप खोलने पर आपका अपना गुप्त पिन माँगता है।",
      mr: "व्हॉट्सअ‍ॅप सुरक्षा सेटिंग जी नव्या फोनवर व्हॉट्सअ‍ॅप उघडताना तुमचा स्वतःचा गुप्त पिन मागते.",
    },
    tip: {
      en: "Turn it on today: WhatsApp → Settings → Account → Two-step verification.",
      hi: "आज ही चालू करें: व्हाट्सएप → सेटिंग्स → अकाउंट → टू-स्टेप वेरिफ़िकेशन।",
      mr: "आजच चालू करा: व्हॉट्सअ‍ॅप → सेटिंग्ज → अकाउंट → टू-स्टेप व्हेरिफिकेशन.",
    },
    category: "WhatsApp",
  },
  {
    id: "status",
    term: "WhatsApp Status",
    meaning: {
      en: "A photo or message that stays visible to your contacts for 24 hours, then disappears.",
      hi: "फ़ोटो या संदेश जो 24 घंटे तक आपके संपर्कों को दिखता है, फिर गायब हो जाता है।",
      mr: "फोटो किंवा मेसेज जो २४ तास तुमच्या संपर्कांना दिसतो, मग नाहीसा होतो.",
    },
    tip: {
      en: "Set status to be seen only by your contacts, not everyone.",
      hi: "स्टेटस को सिर्फ़ अपने संपर्कों तक रखें, सबके लिए नहीं।",
      mr: "स्टेटस फक्त तुमच्या संपर्कांपुरता ठेवा, सर्वांसाठी नाही.",
    },
    category: "WhatsApp",
  },
  {
    id: "mute",
    term: "Mute",
    meaning: {
      en: "Silencing a group or person so their messages arrive without beeping.",
      hi: "किसी ग्रुप या व्यक्ति को चुप करना ताकि संदेश आएं पर आवाज़ न हो।",
      mr: "एखादा ग्रुप किंवा व्यक्ती शांत करणे जेणेकरून मेसेज येतील पण आवाज होणार नाही.",
    },
    tip: {
      en: "Mute noisy groups for peace — messages will still be there when you want.",
      hi: "शांति के लिए शोर मचाने वाले ग्रुप म्यूट करें — संदेश फिर भी मिलते रहेंगे।",
      mr: "शांततेसाठी गोंगाट करणारे ग्रुप म्यूट करा — मेसेज तरीही मिळत राहतील.",
    },
    category: "WhatsApp",
  },
  /* ── Basics ── */
  {
    id: "smartphone",
    term: "Smartphone",
    meaning: {
      en: "A phone with a big touch screen that can make calls, show photos and run apps.",
      hi: "बड़ी टच स्क्रीन वाला फ़ोन जो कॉल, फ़ोटो और ऐप चला सकता है।",
      mr: "मोठ्या टच स्क्रीनचा फोन जो कॉल, फोटो आणि अ‍ॅप्स चालवू शकतो.",
    },
    tip: {
      en: "Everything in this app works on any smartphone — Android or iPhone.",
      hi: "इस ऐप की हर बात किसी भी स्मार्टफ़ोन पर चलती है — एंड्रॉइड या आईफ़ोन।",
      mr: "या अ‍ॅपमधील सर्व काही कोणत्याही स्मार्टफोनवर चालते — अँड्रॉइड किंवा आयफोन.",
    },
    category: "Basics",
  },
  {
    id: "touchscreen",
    term: "Touch Screen",
    meaning: {
      en: "A screen you control by gently tapping or sliding your finger, not by buttons.",
      hi: "जिस स्क्रीन पर बटन की जगह उँगली से हल्के दबाव या सरकाव से काम होता है।",
      mr: "ज्या स्क्रीनवर बटनाऐवजी बोटाने हलके टॅप किंवा सरकवून काम होते.",
    },
    tip: {
      en: "Tap gently once — pressing hard is not needed.",
      hi: "हल्के से एक बार दबाएँ — ज़ोर से दबाने की ज़रूरत नहीं।",
      mr: "हलके एकदा टॅप करा — जोरात दाबण्याची गरज नाही.",
    },
    category: "Basics",
  },
  {
    id: "simcard",
    term: "SIM Card",
    meaning: {
      en: "The small chip from Jio, Airtel or Vi that gives your phone its number and network.",
      hi: "जियो, एयरटेल या वीआई की छोटी चिप जो फ़ोन को नंबर और नेटवर्क देती है।",
      mr: "जिओ, एअरटेल किंवा व्हीआयची छोटी चिप जी फोनला क्रमांक आणि नेटवर्क देते.",
    },
    tip: {
      en: "Your SIM number never changes even if you buy a new phone.",
      hi: "नया फ़ोन लेने पर भी आपका सिम नंबर वही रहता है।",
      mr: "नवीन फोन घेतला तरी तुमचा सिम क्रमांक तोच राहतो.",
    },
    category: "Basics",
  },
  {
    id: "battery",
    term: "Battery & Charging",
    meaning: {
      en: "The part that stores power; charging fills it, usually overnight.",
      hi: "फ़ोन का हिस्सा जो बिजली रखता है; चार्जिंग इसे भरता है, आमतौर पर रात में।",
      mr: "फोनचा भाग जो वीज साठवतो; चार्जिंगने तो भरतो, साधारण रात्री.",
    },
    tip: {
      en: "Use only the charger that came with the phone or one from a good shop.",
      hi: "फ़ोन के साथ आया या अच्छी दुकान का ही चार्जर इस्तेमाल करें।",
      mr: "फोनसोबत आलेले किंवा चांगल्या दुकानातीलच चार्जर वापरा.",
    },
    category: "Basics",
  },
  {
    id: "notification",
    term: "Notification",
    meaning: {
      en: "A small alert at the top of your screen when a message or reminder arrives.",
      hi: "संदेश या याद आने पर स्क्रीन के ऊपर दिखने वाली छोटी सूचना।",
      mr: "मेसेज किंवा आठवण आल्यावर स्क्रीनच्या वर दिसणारी छोटी सूचना.",
    },
    tip: {
      en: "Swipe from the top of the screen down to see all your notifications.",
      hi: "सभी सूचनाएँ देखने के लिए स्क्रीन के ऊपर से नीचे की ओर खींचें।",
      mr: "सर्व सूचना पाहण्यासाठी स्क्रीनच्या वरून खाली ओढा.",
    },
    category: "Basics",
  },
  {
    id: "screenshot",
    term: "Screenshot",
    meaning: {
      en: "A photo of whatever is on your screen right now, saved in your gallery.",
      hi: "आपकी स्क्रीन पर जो दिख रहा है उसकी तस्वीर, जो गैलरी में सहेजी जाती है।",
      mr: "तुमच्या स्क्रीनवर जे दिसते त्याचा फोटो, जो गॅलरीत जतन होतो.",
    },
    tip: {
      en: "Take one of any fraud message before deleting it — it helps in a complaint.",
      hi: "ठगी के संदेश को हटाने से पहले स्क्रीनशॉट ले लें — शिकायत में काम आता है।",
      mr: "फसवणुकीचा मेसेज हटवण्यापूर्वी स्क्रीनशॉट घ्या — तक्रारीत उपयोगी पडतो.",
    },
    category: "Basics",
  },
];

/* ---------------- What Should I Do ---------------- */
export type HelpTopic = {
  id: string;
  emoji: string;
  title: Localized;
  steps: LocalizedList;
};

export const HELP_TOPICS: HelpTopic[] = [
  {
    id: "suspicious-call",
    emoji: "📞",
    title: {
      en: "I received a suspicious or threatening call",
      hi: "मुझे संदिग्ध या डराने वाला कॉल आया",
      mr: "मला संशयास्पद किंवा भीती दाखवणारा कॉल आला",
    },
    steps: {
      en: [
        "Do not panic. Calmly end the call immediately.",
        "Never share your OTP, UPI PIN, or ATM card details.",
        "If they claimed to be from your bank, call the number printed on your passbook.",
        "Tell a family member or trusted neighbor right away.",
      ],
      hi: [
        "घबराएँ नहीं। तुरंत और शांति से कॉल काट दें।",
        "अपना ओटीपी, यूपीआई पिन या एटीएम कार्ड का नंबर कभी न बताएँ।",
        "अगर कॉलर ने बैंक से होने का दावा किया हो, तो पासबुक पर छपे नंबर पर खुद बात करें।",
        "परिवार के किसी सदस्य या भरोसेमंद पड़ोसी को तुरंत पूरी बात बताएं।",
      ],
      mr: [
        "घाबरू नका. लगेच शांतपणे फोन बंद करा.",
        "तुमचा ओटीपी, यूपीआय पिन किंवा एटीएम कार्ड माहिती कधीही सांगू नका.",
        "बँकेचे नाव सांगत असल्यास पासबुकवरील अधिकृत नंबरवर फोन करून खात्री करा.",
        "कुटुंबातील व्यक्तींना किंवा शेजाऱ्यांना लगेच सांगा.",
      ],
    },
  },
  {
    id: "shared-otp",
    emoji: "🔢",
    title: {
      en: "I accidentally shared an OTP or money left my account",
      hi: "मैंने गलती से ओटीपी बता दिया या पैसे कट गए",
      mr: "मी चुकून ओटीपी सांगितला किंवा खात्यातून पैसे गेले",
    },
    steps: {
      en: [
        "Call the National Cyber Crime Helpline 1930 immediately (the golden hour to stop the transfer).",
        "Call your bank's toll-free number printed on your ATM card to freeze your card and account.",
        "Do not delete the SMS or WhatsApp chats — they are vital evidence for police.",
        "Change your internet banking password immediately from a trusted family phone.",
      ],
      hi: [
        "तुरंत 1930 (राष्ट्रीय साइबर अपराध हेल्पलाइन) पर कॉल करें ताकि भेजा गया पैसा आगे न जा सके।",
        "एटीएम कार्ड पर छपे बैंक के टोल-फ्री नंबर पर कॉल कर खाता और कार्ड तुरंत ब्लॉक करवाएँ।",
        "एसएमएस और संदेशों को न मिटाएँ — ये पुलिस के लिए अहम सबूत हैं।",
        "परिवार के किसी सदस्य के फ़ोन से अपने बैंक खाते का पासवर्ड बदलें।",
      ],
      mr: [
        "त्वरित १९३० या राष्ट्रीय सायबर हेल्पलाइनवर फोन करा जेणेकरून व्यवहार रोखता येईल.",
        "एटीएम कार्डवरील बँकेच्या नंबरवर फोन करून कार्ड आणि खाते तात्काळ ब्लॉक करा.",
        "एसएमएस किंवा व्हॉट्सअ‍ॅप मेसेज डिलीट करू नका — ते महत्त्वाचे पुरावे आहेत.",
        "कुटुंबातील विश्वासू व्यक्तीच्या फोनवरून पासवर्ड लगेच बदला.",
      ],
    },
  },
  {
    id: "clicked-link",
    emoji: "🔗",
    title: {
      en: "I clicked a suspicious link in an SMS or WhatsApp",
      hi: "मैंने किसी अनजान या संदिग्ध लिंक पर क्लिक कर दिया",
      mr: "मी चुकून संशयास्पद लिंकवर क्लिक केले",
    },
    steps: {
      en: [
        "Close the webpage immediately. Do not type any details on it.",
        "Turn off Wi-Fi and Mobile Data for a few minutes if anything started downloading.",
        "Go to your phone's 'Downloads' or 'Files' folder and delete any unfamiliar downloaded file.",
        "Restart your phone.",
      ],
      hi: [
        "तुरंत उस पेज को बंद कर दें। उसपर कोई भी नाम, नंबर या पासवर्ड न डालें।",
        "अगर कोई फ़ाइल डाउनलोड होने लगी हो तो कुछ मिनटों के लिए मोबाइल डेटा और वाई-फ़ाई बंद कर दें।",
        "फ़ोन के 'Files' या 'Downloads' फोल्डर में जाकर उस अनजान फ़ाइल को डिलीट कर दें।",
        "अपने फ़ोन को एक बार बंद करके फिर से चालू (Restart) करें।",
      ],
      mr: [
        "ते पान लगेच बंद करा. त्यावर कोणतीही माहिती किंवा पासवर्ड टाकू नका.",
        "काही डाउनलोड होत असल्यास काही मिनिटांसाठी इंटरनेट बंद करा.",
        "फोनमधील 'Files' किंवा 'Downloads' फोल्डरमध्ये जाऊन ती अनोळखी फाईल डिलीट करा.",
        "फोन एकदा रीस्टार्ट (बंद करून चालू) करा.",
      ],
    },
  },
  {
    id: "installed-app",
    emoji: "📲",
    title: {
      en: "Someone made me install AnyDesk or QuickSupport",
      hi: "किसी के कहने पर मैंने स्क्रीन शेयरिंग ऐप इंस्टॉल कर लिया",
      mr: "कोणाच्या सांगण्यावरून मी स्क्रीन शेअरिंग अ‍ॅप इन्स्टॉल केले",
    },
    steps: {
      en: [
        "Immediately turn off Mobile Data and Wi-Fi to cut the scammer's connection.",
        "Uninstall AnyDesk, TeamViewer, or QuickSupport from your phone right away.",
        "Restart your phone.",
        "Call your bank from another phone to ensure no unauthorized transactions occurred.",
      ],
      hi: [
        "तुरंत मोबाइल डेटा और वाई-फ़ाई बंद कर दें ताकि ठग का संपर्क कट जाए।",
        "अपने फ़ोन से AnyDesk, TeamViewer या QuickSupport को तुरंत अनइंस्टॉल (Delete) करें।",
        "फ़ोन को रीस्टार्ट करें।",
        "किसी दूसरे फ़ोन से अपने बैंक में कॉल करके जाँचें कि कोई ग़लत लेन-देन तो नहीं हुआ।",
      ],
      mr: [
        "भामट्याचा संपर्क तोडण्यासाठी लगेच इंटरनेट आणि वाय-फाय बंद करा.",
        "AnyDesk, TeamViewer किंवा QuickSupport अ‍ॅप फोनमधून तात्काळ अनइन्स्टॉल करा.",
        "फोन रीस्टार्ट करा.",
        "दुसऱ्या फोनवरून बँकेशी संपर्क साधून खात्यातील पैशांची खात्री करा.",
      ],
    },
  },
];

export const OFFICIAL_RESOURCES = [
  {
    label: { en: "National Emergency (Police, Medical, Fire)", hi: "राष्ट्रीय आपातकालीन सेवा (पुलिस, स्वास्थ्य, अग्नि)", mr: "राष्ट्रीय आपत्कालीन सेवा (पोलीस, रुग्णवाहिका, अग्निशामक)" },
    value: "112",
    tollFree: true,
  },
  {
    label: { en: "National Cyber Crime Reporting Helpline", hi: "राष्ट्रीय साइबर वित्तीय अपराध हेल्पलाइन", mr: "राष्ट्रीय सायबर गुन्हा हेल्पलाइन" },
    value: "1930",
    tollFree: true,
  },
  {
    label: { en: "Elderline — Senior Citizens National Helpline", hi: "एल्डरलाइन — वरिष्ठ नागरिक राष्ट्रीय हेल्पलाइन", mr: "एल्डरलाइन — ज्येष्ठ नागरिक हेल्पलाइन" },
    value: "14567",
    tollFree: true,
  },
  {
    label: { en: "National Cyber Crime Reporting Portal", hi: "राष्ट्रीय साइबर अपराध पोर्टल", mr: "राष्ट्रीय सायबर गुन्हा पोर्टल" },
    value: "cybercrime.gov.in",
  },
  {
    label: { en: "Your Bank's Official Customer Care", hi: "आपके बैंक का आधिकारिक नंबर", mr: "तुमच्या बँकेचा अधिकृत नंबर" },
    value: "Use number on passbook / ATM card",
  },
];

/* ---------------- Safety check ---------------- */
export const SAFETY_QUESTIONS: { id: string; q: Localized; lesson?: string }[] = [
  { id: "lock", q: { en: "Do you use a screen lock on your phone?", hi: "क्या आप अपने फ़ोन पर स्क्रीन लॉक रखते हैं?", mr: "तुम्ही फोनवर स्क्रीन लॉक वापरता का?" }, lesson: "basics-screen-lock" },
  { id: "updated", q: { en: "Are your WhatsApp and bank apps updated?", hi: "क्या आपके व्हाट्सएप और बैंक ऐप अपडेट हैं?", mr: "तुमचे व्हॉट्सअ‍ॅप आणि बँक अ‍ॅप्स अपडेट आहेत का?" }, lesson: "net-update-apps" },
  { id: "otp", q: { en: "Do you know never to share an OTP with callers?", hi: "क्या आप जानते हैं कि ओटीपी कभी किसी को नहीं बताना है?", mr: "ओटीपी कोणालाही सांगायचा नसतो हे ठाऊक आहे का?" }, lesson: "net-otp" },
  { id: "pin", q: { en: "Do you know that entering a PIN only sends money out?", hi: "क्या आप जानते हैं कि पिन डालने से हमेशा पैसे कटते हैं?", mr: "पिन टाकल्याने नेहमी पैसे जातात हे ठाऊक आहे का?" }, lesson: "pay-upi-pin" },
  { id: "group", q: { en: "Have you stopped strangers from adding you to WhatsApp groups?", hi: "क्या आपने अजनबियों को ग्रुप में जोड़ने से रोका है?", mr: "अनोळखी लोकांना ग्रुपमध्ये जोडण्यापासून थांबवले आहे का?" }, lesson: "wa-group-privacy" },
  { id: "qr", q: { en: "Do you know that scanning a QR code is only for paying?", hi: "क्या आप जानते हैं कि क्यूआर केवल पैसे देने के लिए होता है?", mr: "क्यूआर फक्त पैसे देण्यासाठी असतो हे ठाऊक आहे का?" }, lesson: "pay-qr-code" },
  { id: "contacts", q: { en: "Have you saved emergency contacts with clear names?", hi: "क्या आपने आपातकालीन संपर्क साफ़ नाम से सहेजे हैं?", mr: "तुम्ही आपत्कालीन संपर्क स्पष्ट नावाने जतन केले आहेत का?" }, lesson: "basics-contacts" },
];

/* ---------------- Community seed ---------------- */
export const COMMUNITY_CATEGORIES = [
  "Ask for Help",
  "Digital Safety",
  "Technology",
  "Hobbies",
  "Local Activities",
  "Share a Tip",
  "General",
];

const day = 86400000;
export const SEED_POSTS: CommunityPost[] = [
  { id: "p1", author: "Sunita R.", category: "Ask for Help", text: "How do I increase the text size on my phone? The letters are very small for me.", at: Date.now() - day * 1, likes: 12, comments: [{ id: "c1", author: "Ramesh K.", text: "Settings → Display → Font size. It helped me a lot.", at: Date.now() - day * 1 + 3600000 }] },
  { id: "p2", author: "Ramesh K.", category: "Share a Tip", text: "I learned how to use Google Maps today and reached the hospital without asking anyone. Very happy!", at: Date.now() - day * 2, likes: 24, comments: [] },
  { id: "p3", author: "Vijaya M.", category: "Ask for Help", text: "Can someone explain QR codes in simple words?", at: Date.now() - day * 2, likes: 9, comments: [{ id: "c2", author: "Anil D.", text: "It is a square picture. Your camera reads it and opens the payment page.", at: Date.now() - day * 2 + 7200000 }] },
  { id: "p4", author: "Anil D.", category: "Digital Safety", text: "Got a call saying my electricity will be cut at 10 pm. I checked the official app — no dues. Please be careful.", at: Date.now() - day * 3, likes: 31, comments: [] },
  { id: "p5", author: "Farida S.", category: "Technology", text: "My grandson set up video calls for me. Now I see my great-granddaughter every Sunday.", at: Date.now() - day * 3, likes: 40, comments: [] },
  { id: "p6", author: "Prakash J.", category: "Digital Safety", text: "Reminder from my bank visit today: they will never ask for OTP. Never.", at: Date.now() - day * 4, likes: 18, comments: [] },
  { id: "p7", author: "Kamala N.", category: "Hobbies", text: "I started recording bhajans on my phone's voice recorder. Very simple to use.", at: Date.now() - day * 5, likes: 15, comments: [] },
  { id: "p8", author: "Iqbal M.", category: "Local Activities", text: "Our society is running a free 'smartphone for seniors' class every Saturday at 10 am.", at: Date.now() - day * 5, likes: 27, comments: [] },
];

/* ---------------- Word puzzle & number sequences ---------------- */
export const WORD_PUZZLES = [
  { q: { en: "Which word means a temporary code sent via SMS to verify you?", hi: "एसएमएस द्वारा आया अस्थायी गुप्त कोड क्या कहलाता है?", mr: "एसएमएसने येणारा तात्पुरता पडताळणी कोड कोणता?" }, options: ["OTP", "GPS", "PDF"], answer: 0 },
  { q: { en: "Which word means the app you use to open websites (like Chrome)?", hi: "वेबसाइट खोलने वाले ऐप (जैसे Chrome) को क्या कहते हैं?", mr: "वेबसाइट्स उघडणाऱ्या अ‍ॅपला काय म्हणतात?" }, options: ["Browser", "Battery", "Bluetooth"], answer: 0 },
  { q: { en: "Which of these is the system to pay directly from your bank via phone?", hi: "फ़ोन से बैंक द्वारा भुगतान करने की सरकारी प्रणाली कौन सी है?", mr: "फोनवरून बँकेद्वारे थेट पेमेंट करण्याची पद्धत कोणती?" }, options: ["UPI", "USB", "SMS"], answer: 0 },
  { q: { en: "Which word means unwanted messages sent to many people at once?", hi: "हज़ारों लोगों को भेजे जाने वाले अनचाहे संदेशों को क्या कहते हैं?", mr: "अनेकांना पाठवलेल्या नको असलेल्या मेसेजला काय म्हणतात?" }, options: ["Spam", "Scan", "Save"], answer: 0 },
  { q: { en: "Which one lets Google Maps know where you are standing?", hi: "गूगल मैप्स को आपकी जगह बताने वाली सुविधा कौन सी है?", mr: "नकाशाला तुमचे ठिकाण कळवणारी सुविधा कोणती?" }, options: ["GPS", "PIN", "QR"], answer: 0 },
  { q: { en: "Which word means a newer and safer version of an app?", hi: "ऐप का नया और सुरक्षित रूप क्या कहलाता है?", mr: "अ‍ॅपच्या नव्या व सुरक्षित आवृत्तीला काय म्हणतात?" }, options: ["Update", "Upload", "Undo"], answer: 0 },
];

