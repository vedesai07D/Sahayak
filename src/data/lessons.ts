import type { Lang, Localized, LocalizedList } from "@/lib/i18n";

export type LessonCategory = "basics" | "whatsapp" | "payments" | "internet" | "services";

export type Lesson = {
  id: string;
  category: LessonCategory;
  title: Localized;
  description: Localized;
  steps: LocalizedList;
  difficulty: "beginner" | "comfortable" | "confident";
  estimatedTime: number; // minutes
  quizId?: string;
  /**
   * Verified YouTube video IDs, one per language where available.
   * Mirrors the `Localized` shape but holds YouTube ids, not display strings.
   */
  video?: { en?: string; hi?: string; mr?: string };
  videoTitle?: Localized;
};

export const LESSON_CATEGORIES: {
  id: LessonCategory;
  emoji: string;
  title: Localized;
  blurb: Localized;
}[] = [
  {
    id: "basics",
    emoji: "📱",
    title: {
      en: "Smartphone Basics",
      hi: "स्मार्टफ़ोन की मूल बातें",
      mr: "स्मार्टफोनची मूलतत्त्वे",
    },
    blurb: {
      en: "Everyday things your phone can do.",
      hi: "फ़ोन की बुनियादी और ज़रूरी बातें।",
      mr: "फोनच्या दैनंदिन आणि महत्त्वाच्या गोष्टी.",
    },
  },
  {
    id: "whatsapp",
    emoji: "💬",
    title: { en: "WhatsApp & Family", hi: "व्हाट्सएप और परिवार", mr: "व्हॉट्सअ‍ॅप आणि कुटुंब" },
    blurb: {
      en: "Messages, voice notes, photos and video calls.",
      hi: "संदेश, आवाज़ रिकॉर्डिंग, फ़ोटो और वीडियो कॉल।",
      mr: "मेसेज, व्हॉइस मेसेज, फोटो आणि व्हिडिओ कॉल.",
    },
  },
  {
    id: "payments",
    emoji: "💳",
    title: { en: "Digital Payments", hi: "डिजिटल भुगतान", mr: "डिजिटल पेमेंट" },
    blurb: {
      en: "UPI, QR codes, PIN rules and paying safely.",
      hi: "यूपीआई, क्यूआर कोड और सुरक्षित भुगतान।",
      mr: "यूपीआय, क्यूआर कोड आणि सुरक्षित पेमेंट.",
    },
  },
  {
    id: "internet",
    emoji: "🌐",
    title: { en: "Internet & Wi-Fi", hi: "इंटरनेट और वाई-फ़ाई", mr: "इंटरनेट आणि वाय-फाय" },
    blurb: {
      en: "Browsers, search, passwords, Wi-Fi and OTPs.",
      hi: "गूगल सर्च, पासवर्ड, वाई-फ़ाई और ओटीपी सुरक्षा।",
      mr: "गुगल सर्च, पासवर्ड, वाय-फाय आणि ओटीपी सुरक्षा.",
    },
  },
  {
    id: "services",
    emoji: "🏛️",
    title: {
      en: "Everyday Services",
      hi: "ज़रूरी डिजिटल सेवाएँ",
      mr: "दैनंदिन डिजिटल सेवा",
    },
    blurb: {
      en: "Documents, bill payments, doctor appointments and maps.",
      hi: "दस्तावेज़, बिल भुगतान, डॉक्टर अपॉइंटमेंट और मैप्स।",
      mr: "कागदपत्रे, बिल पेमेंट, डॉक्टर भेट आणि नकाशे.",
    },
  },
];

export const LESSONS: Lesson[] = [
  /* ---------------- BASICS ---------------- */
  {
    id: "basics-understanding-phone",
    category: "basics",
    title: {
      en: "Understanding your phone buttons",
      hi: "फ़ोन के मुख्य बटन समझना",
      mr: "फोनची मुख्य बटने समजून घेणे",
    },
    description: {
      en: "Learn what the power button, volume buttons, and screen icons do.",
      hi: "स्क्रीन चालू-बंद करने वाले बटन, आवाज़ के बटन और मुख्य निशानों की जानकारी।",
      mr: "स्क्रीन चालू-बंद करण्याचे बटण, आवाजाचे बटण आणि चिन्हांची माहिती.",
    },
    steps: {
      en: [
        "Hold the phone comfortably with the screen facing you.",
        "The small button on the right side turns the screen on or off with a single press.",
        "The longer button right beside it changes the sound volume (top is louder, bottom is softer).",
        "The row of icons at the very bottom opens your daily apps like Phone and WhatsApp.",
        "If you ever feel lost or opened the wrong thing, swipe up from the bottom or press the round Home button.",
      ],
      hi: [
        "फ़ोन को आराम से हाथ में पकड़ें, स्क्रीन अपनी तरफ़ रखें।",
        "दाहिनी तरफ़ का छोटा बटन एक बार दबाने से स्क्रीन चालू या बंद होती है।",
        "उसके पास का लंबा बटन आवाज़ कम या ज़्यादा करने के लिए होता है (ऊपर से ज़्यादा, नीचे से कम)।",
        "स्क्रीन के सबसे नीचे वाली पट्टी में आपके रोज़ काम आने वाले ऐप जैसे फ़ोन और व्हाट्सएप रहते हैं।",
        "अगर कभी गलती से कोई ग़लत चीज़ खुल जाए, तो नीचे से ऊपर स्वाइप करें या गोल होम बटन दबाएँ।",
      ],
      mr: [
        "फोन आरामात हातात धरा, स्क्रीन समोर ठेवा.",
        "उजव्या बाजूचे लहान बटण एकदा दाबल्यास स्क्रीन चालू किंवा बंद होते.",
        "त्याजवळील लांब बटणाने आवाज कमी किंवा जास्त करता येतो (वर जास्त, खाली कमी).",
        "स्क्रीनच्या खालच्या भागात फोन आणि व्हॉट्सअ‍ॅपसारखे रोजचे अ‍ॅप्स असतात.",
        "काही चुकीचे उघडल्यास, खालून वर सरकवा किंवा मधले गोल होम बटण दाबा.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 3,
    video: { en: "u2ZMr0Cf4ZM" },
    videoTitle: {
      en: "Smartphone basics explained slowly",
      hi: "स्मार्टफ़ोन की मूल बातें - आसान वीडियो",
      mr: "स्मार्टफोनची मूलतत्त्वे - सोपा व्हिडिओ",
    },
  },
  {
    id: "basics-touchscreen",
    category: "basics",
    title: {
      en: "Using the touchscreen gently",
      hi: "टचस्क्रीन आराम से चलाना",
      mr: "टचस्क्रीन अलगद वापरणे",
    },
    description: {
      en: "Tap, slide and scroll comfortably without pressing hard.",
      hi: "बिना ज़ोर लगाए उंगली से छूना, ऊपर-नीचे सरकाना और खोलना सीखें।",
      mr: "जोर न लावता बोटाने स्पर्श करणे, वर-खाली सरकवणे आणि उघडणे शिका.",
    },
    steps: {
      en: [
        "Touch the screen gently with the flat pad of your finger, not your fingernail.",
        "A single short touch is called a 'tap' — use it to select or open any item.",
        "Slide your finger upwards on the screen to see more text below. This is called 'scrolling'.",
        "Slide left or right to flip through photos like pages in a book.",
        "Remember: smartphone screens detect light touch; you never need to press hard.",
      ],
      hi: [
        "उंगली के पोर (फ्लैट हिस्से) से स्क्रीन को हल्के से छुएँ, नाख़ून से नहीं।",
        "एक बार हल्के से छूने को 'टैप' कहते हैं — इससे कोई भी चीज़ खुलती है।",
        "नीचे का हिस्सा देखने के लिए उंगली को स्क्रीन पर ऊपर की ओर सरकाएँ (इसे स्क्रोल करना कहते हैं)।",
        "फ़ोटो देखने के लिए किताब के पन्ने की तरह उंगली को बाएँ या दाएँ सरकाएँ।",
        "याद रखें: स्क्रीन बहुत संवेदनशील होती है, ज़ोर लगाने की बिलकुल ज़रूरत नहीं है।",
      ],
      mr: [
        "बोटाच्या पुढच्या मऊ भागाने हलकेच स्पर्श करा, नखाने नाही.",
        "एकदा हलकेच स्पर्श करण्याला 'टॅप' म्हणतात — याने कोणतीही गोष्ट उघडते.",
        "खालील मजकूर पाहण्यासाठी बोट स्क्रीनवर वरच्या दिशेने सरकवा (याला स्क्रोल म्हणतात).",
        "फोटो पाहण्यासाठी पुस्तकाच्या पानाप्रमाणे बोट डावीकडे किंवा उजवीकडे सरकवा.",
        "लक्षात ठेवा: स्क्रीन खूप संवेदनशील असते, जोर लावण्याची अजिबात गरज नसते.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 3,
    quizId: "quiz-basics",
  },
  {
    id: "basics-volume",
    category: "basics",
    title: {
      en: "Adjusting volume for calls and videos",
      hi: "कॉल और वीडियो की आवाज़ बढ़ाना",
      mr: "कॉल आणि व्हिडिओचा आवाज वाढवणे",
    },
    description: {
      en: "Make phone calls, incoming rings and videos louder or softer.",
      hi: "फ़ोन की घंटी, बात करते समय की आवाज़ और वीडियो की आवाज़ नियंत्रित करें।",
      mr: "फोनची रिंग, संभाषणाचा आवाज आणि व्हिडिओचा आवाज कमी-जास्त करा.",
    },
    steps: {
      en: [
        "Find the two volume buttons on the side of your phone.",
        "Press the upper half to make the sound louder.",
        "Press the lower half to make it quieter.",
        "During an active phone call, pressing the upper button makes the caller's voice clearer and louder.",
        "A volume bar will appear on screen showing your current level.",
      ],
      hi: [
        "फ़ोन के किनारे दिए गए आवाज़ वाले बटनों को देखें।",
        "ऊपर वाला बटन दबाने से आवाज़ बढ़ती है।",
        "नीचे वाला बटन दबाने से आवाज़ धीमी होती है।",
        "कॉल पर बात करते समय ऊपर का बटन दबाने से सामने वाले की आवाज़ साफ़ और तेज़ सुनाई देती है।",
        "स्क्रीन पर आवाज़ का स्तर दिखाने वाली एक छोटी पट्टी भी दिखती है।",
      ],
      mr: [
        "फोनच्या बाजूला असलेली आवाजाची बटने शोधा.",
        "वरचे बटण दाबल्यास आवाज वाढतो.",
        "खालचे बटण दाबल्यास आवाज कमी होतो.",
        "कॉल चालू असताना वरचे बटण दाबल्यास समोरच्या व्यक्तीचा आवाज स्पष्ट आणि मोठा ऐकू येतो.",
        "स्क्रीनवर आवाजाची पातळी दर्शवणारी लहान पट्टी दिसते.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 3,
  },
  {
    id: "basics-large-text",
    category: "basics",
    title: {
      en: "Making text larger and easier to read",
      hi: "अक्षरों का आकार बड़ा करना",
      mr: "अक्षरांचा आकार मोठा करणे",
    },
    description: {
      en: "Increase font size on your phone so reading is comfortable without straining your eyes.",
      hi: "फ़ोन के अक्षर बड़े करें ताकि बिना चश्मे या बिना आँख पर ज़ोर दिए आसानी से पढ़ सकें।",
      mr: "फोनवरील अक्षरे मोठी करा जेणेकरून डोळ्यांवर ताण न येता सहज वाचता येईल.",
    },
    steps: {
      en: [
        "Open the Settings app on your phone (look for the gear ⚙️ icon).",
        "Tap on 'Display' or 'Screen'.",
        "Look for 'Font size' or 'Text size'.",
        "Slide the circle slider to the right towards 'Large' or 'Largest'.",
        "All letters in messages, contacts, and news will immediately become bigger and clearer.",
      ],
      hi: [
        "अपने फ़ोन में 'सेटिंग्स' ऐप खोलें (गियर ⚙️ जैसा निशान)।",
        "'डिस्प्ले' (Display) या 'स्क्रीन' पर टैप करें।",
        "'फॉन्ट साइज़' (Font Size) या 'अक्षरों का आकार' विकल्प चुनें।",
        "नीचे दी गई पट्टी में गोल बिंदु को दाहिनी ओर 'बड़ा' (Large) की तरफ़ खिसकाएँ।",
        "अब आपके संदेश, संपर्क और खबरें बड़े और साफ़ अक्षरों में दिखने लगेंगी।",
      ],
      mr: [
        "फोनमधील 'सेटिंग्ज' (Settings) अ‍ॅप उघडा (गियर ⚙️ चिन्ह).",
        "'डिस्प्ले' (Display) किंवा 'स्क्रीन' पर्यायावर दाबा.",
        "'फॉन्ट साइज' (Font Size) किंवा 'अक्षरांचा आकार' शोधा.",
        "खालील पट्टीतील गोल खूण उजवीकडे 'मोठा' (Large) कडे सरकवा.",
        "आता मेसेज, संपर्क आणि बातम्यांची अक्षरे मोठी व स्पष्ट दिसतील.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 4,
  },
  {
    id: "basics-screen-lock",
    category: "basics",
    title: {
      en: "Setting a secure screen lock",
      hi: "सुरक्षित स्क्रीन लॉक लगाना",
      mr: "सुरक्षित स्क्रीन लॉक ठेवणे",
    },
    description: {
      en: "Protect your personal photos, WhatsApp chats and bank apps with a simple 4 or 6 digit PIN.",
      hi: "4 या 6 अंकों का पिन कोड लगाकर अपने फ़ोन और बैंक ऐप को सुरक्षित रखें।",
      mr: "४ किंवा ६ अंकी पिन ठेवून तुमचे फोटो आणि बँक अ‍ॅप्स सुरक्षित ठेवा.",
    },
    steps: {
      en: [
        "Go to Settings → Security & Privacy → Screen Lock.",
        "Choose 'PIN' — a 4-digit or 6-digit number you can easily remember.",
        "Avoid obvious numbers like 1234, 0000, or your birth year.",
        "Enter your chosen PIN and confirm it once more.",
        "Write this PIN down in a private notebook at home so you never forget it.",
      ],
      hi: [
        "सेटिंग्स → सुरक्षा (Security) → स्क्रीन लॉक (Screen Lock) में जाएँ।",
        "'पिन' (PIN) चुनें — 4 या 6 अंकों का ऐसा नंबर जो आपको याद रहे।",
        "1234, 0000 या जन्म वर्ष जैसे आसान नंबर न रखें।",
        "अपना चुना हुआ पिन डालें और पुष्टि के लिए दोबारा वही नंबर डालें।",
        "इस पिन को घर पर अपनी किसी निजी डायरी में लिखकर सुरक्षित रख लें।",
      ],
      mr: [
        "सेटिंग्ज → सुरक्षा (Security) → स्क्रीन लॉक (Screen Lock) मध्ये जा.",
        "'पिन' (PIN) निवडा — ४ किंवा ६ अंकी क्रमांक जो तुम्हाला लक्षात राहील.",
        "१२३४, ०००० किंवा जन्माचे वर्ष यांसारखे सोपे क्रमांक ठेवू नका.",
        "तुमचा पिन प्रविष्ट करा आणि खात्रीसाठी पुन्हा तोच क्रमांक टाका.",
        "हा पिन घरातील खासगी डायरीत लिहून ठेवा जेणेकरून विसरणार नाही.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 4,
    quizId: "quiz-basics",
  },
  {
    id: "basics-taking-photos",
    category: "basics",
    title: {
      en: "Taking and viewing photos",
      hi: "फ़ोटो खींचना और देखना",
      mr: "फोटो काढणे आणि पाहणे",
    },
    description: {
      en: "Use the camera to capture memories of family, flowers or documents and view them in Gallery.",
      hi: "कैमरे से परिवार, त्योहार या ज़रूरी कागज़ों की साफ़ फ़ोटो लेना सीखें।",
      mr: "कॅमेऱ्याने कुटुंब, सण किंवा कागदपत्रांचे स्पष्ट फोटो काढणे शिका.",
    },
    steps: {
      en: [
        "Tap the Camera icon 📷 on your screen.",
        "Hold the phone steady with both hands facing the subject.",
        "Tap the screen where you want to focus (e.g. on a person's face or document text).",
        "Press the big round white button at the bottom to take the picture.",
        "Tap the small square in the corner to see the photo you just took in full size.",
      ],
      hi: [
        "स्क्रीन पर कैमरा 📷 के निशान को छुएँ।",
        "फ़ोन को दोनों हाथों से स्थिर पकड़ें।",
        "स्क्रीन पर जहाँ साफ़ दिखाना है (जैसे चेहरे या कागज़ पर) वहाँ उंगली से छुएँ।",
        "नीचे दिए गए बड़े गोल सफ़ेद बटन को दबाएँ — फ़ोटो खिंच जाएगी।",
        "कोने में दिख रहे छोटे चौकोर डिब्बे को छूकर अपनी खींची हुई फ़ोटो पूरी स्क्रीन पर देखें।",
      ],
      mr: [
        "स्क्रीनवरील कॅमेरा 📷 चिन्हावर दाबा.",
        "फोन दोन्ही हातांनी स्थिर पकडा.",
        "स्क्रीनवर जिथे स्पष्ट दिसायचे आहे (उदा. चेहऱ्यावर किंवा कागदावर) तिथे स्पर्श करा.",
        "खालील मोठ्या पांढऱ्या गोल बटणावर दाबा — फोटो काढला जाईल.",
        "कोपऱ्यातील लहान चौकटीवर दाबून काढलेला फोटो पूर्ण स्क्रीनवर पाहा.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 4,
    video: { en: "5eYYtUB9wUY" },
    videoTitle: {
      en: "Taking and sharing photos",
      hi: "फ़ोटो लेना और देखना - आसान वीडियो",
      mr: "फोटो काढणे व पाहणे - सोपा व्हिडिओ",
    },
  },
  {
    id: "basics-torch",
    category: "basics",
    title: {
      en: "Using the flashlight (Torch)",
      hi: "फ़ोन की टॉर्च (फ़्लैशलाइट) जलाना",
      mr: "फोनची टॉर्च (फ्लॅशलाइट) लावणे",
    },
    description: {
      en: "Turn on your phone's bright light when walking at night or during a power cut.",
      hi: "बिजली चले जाने पर या अंधेरे में चलने के लिए फ़ोन की तेज़ टॉर्च जलाएँ।",
      mr: "वीज गेल्यावर किंवा अंधारात चालण्यासाठी फोनची प्रखर टॉर्च लावा.",
    },
    steps: {
      en: [
        "Swipe down from the very top of your screen with one finger.",
        "A panel of quick buttons will open.",
        "Look for the Flashlight or Torch 🔦 icon.",
        "Tap it once — the light on the back of your phone turns on immediately.",
        "Tap it once more to turn it off when you are done to save battery.",
      ],
      hi: [
        "स्क्रीन के सबसे ऊपर से नीचे की तरफ़ उंगली से स्वाइप करें।",
        "यहाँ कई छोटे बटन (क्विक सेटिंग्स) दिखाई देंगे।",
        "टॉर्च 🔦 या फ़्लैशलाइट वाले निशान को ढूँढ़ें।",
        "उसपर एक बार दबाएँ — फ़ोन के पीछे की तेज़ लाइट जल जाएगी।",
        "काम खत्म होने पर उसी निशान को दोबारा दबाकर बंद कर दें ताकि बैटरी बची रहे।",
      ],
      mr: [
        "स्क्रीनच्या अगदी वरून खालच्या दिशेने बोट सरकवा.",
        "येथे लहान बटनांचा संच (क्विक सेटिंग्स) दिसेल.",
        "टॉर्च 🔦 किंवा फ्लॅशलाइट चिन्ह शोधा.",
        "त्यावर एकदा दाबा — फोनच्या पाठीमागील दिवा लगेच लागेल.",
        "काम झाल्यावर त्याच चिन्हावर पुन्हा दाबून टॉर्च बंद करा.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 3,
  },
  {
    id: "basics-contacts",
    category: "basics",
    title: {
      en: "Saving phone numbers with clear names",
      hi: "नंबर साफ़ नाम से सहेजना",
      mr: "नंबर स्पष्ट नावाने जतन करणे",
    },
    description: {
      en: "Save doctor and family numbers with labels like 'Son Ramesh' or 'Dr. Sharma'.",
      hi: "परिवार और डॉक्टर के नंबर ऐसे नाम से सहेजें जिन्हें ढूँढ़ना बेहद आसान हो।",
      mr: "कुटुंब आणि डॉक्टरांचे नंबर सहज ओळखता येतील अशा स्पष्ट नावाने जतन करा.",
    },
    steps: {
      en: [
        "Open the Phone (Dialer 📞) app.",
        "Type the phone number, then tap 'Add Contact' or 'Create New Contact'.",
        "Type the name clearly — for example, 'Son Rajesh' or 'Family Doctor'.",
        "Tap 'Save'.",
        "Now when they call, their full name will appear on your screen.",
      ],
      hi: [
        "फ़ोन (कॉल 📞) का ऐप खोलें।",
        "नंबर डायल करें, फिर 'नया संपर्क जोड़ें' (Add Contact) पर दबाएँ।",
        "साफ़ नाम लिखें — जैसे 'बेटा राजेश' या 'फैमिली डॉक्टर'।",
        "ऊपर दिए गए 'सहेजें' (Save) बटन को दबाएँ।",
        "अब जब भी उनका कॉल आएगा, स्क्रीन पर उनका नाम साफ़ दिखाई देगा।",
      ],
      mr: [
        "फोन (कॉल 📞) अ‍ॅप उघडा.",
        "नंबर डायल करा, नंतर 'नवीन संपर्क जोडा' (Add Contact) दाबा.",
        "स्पष्ट नाव लिहा — उदा. 'मुलगा राजेश' किंवा 'फॅमिली डॉक्टर'.",
        "'जतन करा' (Save) बटणावर दाबा.",
        "आता त्यांचा फोन आल्यावर स्क्रीनवर त्यांचे नाव स्पष्ट दिसेल.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 4,
  },

  /* ---------------- WHATSAPP ---------------- */
  {
    id: "wa-send-message",
    category: "whatsapp",
    title: {
      en: "Sending a WhatsApp text message",
      hi: "व्हाट्सएप पर संदेश भेजना",
      mr: "व्हॉट्सअ‍ॅपवर मेसेज पाठवणे",
    },
    description: {
      en: "How to open a chat, type a message, and send it to your children or friends.",
      hi: "किसी परिजन की चैट खोलकर संदेश लिखना और भेजना सीखें।",
      mr: "नातेवाईकांची चॅट उघडून मेसेज लिहिणे आणि पाठवणे शिका.",
    },
    steps: {
      en: [
        "Open WhatsApp by tapping the green speech bubble icon.",
        "Tap on the person's name in your chat list.",
        "Tap the white box at the bottom that says 'Message'. A keyboard will appear.",
        "Type your message slowly.",
        "Tap the green circular arrow button on the right to send.",
      ],
      hi: [
        "हरे रंग के व्हाट्सएप आइकॉन को छूकर ऐप खोलें।",
        "अपनी चैट सूची में से उस व्यक्ति के नाम पर टैप करें जिन्हें संदेश भेजना है।",
        "नीचे 'संदेश लिखें' (Message) वाली सफ़ेद पट्टी को छुएँ। कीबोर्ड खुल जाएगा।",
        "आराम से अपना संदेश टाइप करें।",
        "दाहिनी तरफ़ बने हरे गोल तीर वाले निशान को दबाकर संदेश भेज दें।",
      ],
      mr: [
        "हिरव्या रंगाच्या व्हॉट्सअ‍ॅप चिन्हावर दाबून अ‍ॅप उघडा.",
        "ज्या व्यक्तीला मेसेज पाठवायचा आहे त्यांच्या नावावर दाबा.",
        "खालील पांढऱ्या चौकटीवर (Message) दाबा. कीबोर्ड उघडेल.",
        "सावकाश तुमचा मेसेज टाइप करा.",
        "उजव्या बाजूच्या हिरव्या बाणाच्या बटणावर दाबून मेसेज पाठवा.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 4,
    video: { en: "gwSHqPFP5Wg" },
    videoTitle: {
      en: "WhatsApp for beginners",
      hi: "व्हाट्सएप चलाना सीखें - आसान वीडियो",
      mr: "व्हॉट्सअ‍ॅप वापरणे - सोपा व्हिडिओ",
    },
  },
  {
    id: "wa-voice-message",
    category: "whatsapp",
    title: {
      en: "Sending a voice message (Speaking instead of typing)",
      hi: "बोलकर आवाज़ संदेश (वॉइस नोट) भेजना",
      mr: "टाइप न करता बोलून मेसेज पाठवणे",
    },
    description: {
      en: "No need to type! Just hold the microphone button, speak your message, and let go.",
      hi: "टाइप करने की ज़रूरत नहीं! माइक का बटन दबाकर रखें, बोलें और भेज दें।",
      mr: "टाइप करण्याची गरज नाही! माइकचे बटण दाबून ठेवा, बोला आणि पाठवा.",
    },
    steps: {
      en: [
        "Open the chat of the person you want to talk to.",
        "Look at the bottom right corner for the round green Microphone 🎙️ button.",
        "Press and hold down that microphone button with your finger.",
        "Speak clearly near your phone: for example, 'I reached home safely'.",
        "Lift your finger off the screen — your voice note is sent instantly!",
      ],
      hi: [
        "उस व्यक्ति की चैट खोलें जिनसे बात करनी है।",
        "नीचे दाहिने कोने में बने हरे माइक्रोफ़ोन 🎙️ वाले बटन को देखें।",
        "उस माइक बटन को उंगली से दबाकर रखें।",
        "फ़ोन के पास अपना संदेश साफ़ आवाज़ में बोलें: जैसे 'मैं घर पहुँच गया हूँ'।",
        "बोलने के बाद उंगली उठा लें — आपकी आवाज़ का संदेश तुरंत पहुँच जाएगा!",
      ],
      mr: [
        "ज्यांच्याशी बोलायचे आहे त्यांची चॅट उघडा.",
        "खाली उजव्या कोपऱ्यात असलेल्या हिरव्या मायक्रोफोन 🎙️ बटणाकडे पाहा.",
        "ते माइक बटण बोटाने दाबून ठेवा.",
        "फोनजवळ स्पष्ट आवाजात बोला: उदा. 'मी सुखरूप घरी पोहोचलो आहे'.",
        "बोलून झाल्यावर बोट वर करा — तुमचा व्हॉइस मेसेज लगेच पाठवला जाईल!",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 3,
  },
  {
    id: "wa-video-call",
    category: "whatsapp",
    title: {
      en: "Making a video call to see your family",
      hi: "अपनों से आमने-सामने वीडियो कॉल करना",
      mr: "कुटुंबाशी समोरासमोर व्हिडिओ कॉल करणे",
    },
    description: {
      en: "Talk face-to-face with your children and grandchildren anytime on Wi-Fi or mobile data.",
      hi: "घर बैठे बच्चों और नाती-पोतों को देखकर उनसे आमने-सामने बात करें।",
      mr: "घरबसल्या मुलांना आणि नातवंडांना प्रत्यक्ष पाहून त्यांच्याशी बोला.",
    },
    steps: {
      en: [
        "Open WhatsApp and tap the person's name.",
        "At the top right corner of the chat, look for the Video Camera 📹 icon.",
        "Tap the video camera icon. The phone will start ringing.",
        "When they answer, hold the phone in front of your face so they can see your smile.",
        "When you finish talking, tap the red phone button to hang up.",
      ],
      hi: [
        "व्हाट्सएप खोलकर उस परिजन के नाम पर टैप करें।",
        "स्क्रीन के ऊपर दाहिने कोने में वीडियो कैमरा 📹 का निशान देखें।",
        "उस वीडियो कैमरा निशान को छुएँ। घंटी बजना शुरू हो जाएगी।",
        "जब वे कॉल उठाएँ, तो फ़ोन अपने चेहरे के सामने रखें ताकि वे आपको देख सकें।",
        "बात पूरी होने पर लाल रंग का फ़ोन वाला बटन दबाकर कॉल काटें।",
      ],
      mr: [
        "व्हॉट्सअ‍ॅप उघडून नातेवाईकांच्या नावावर दाबा.",
        "स्क्रीनच्या वर उजव्या कोपऱ्यातील व्हिडिओ कॅमेरा 📹 चिन्ह शोधा.",
        "त्या व्हिडिओ कॅमेरा चिन्हावर दाबा. रिंग वाजायला सुरुवात होईल.",
        "त्यांनी फोन उचलल्यावर फोन चेहऱ्यासमोर धरा जेणेकरून ते तुम्हाला पाहू शकतील.",
        "बोलणे झाल्यावर लाल रंगाचे फोन बटण दाबून कॉल बंद करा.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 4,
    video: { en: "0v8YDvRHtLU" },
    videoTitle: {
      en: "Making a video call",
      hi: "वीडियो कॉल करना - आसान वीडियो",
      mr: "व्हिडिओ कॉल करणे - सोपा व्हिडिओ",
    },
  },
  {
    id: "wa-delete-mistake",
    category: "whatsapp",
    title: {
      en: "Deleting a message sent by mistake",
      hi: "गलती से भेजा गया संदेश मिटाना",
      mr: "चुकीने पाठवलेला मेसेज काढून टाकणे",
    },
    description: {
      en: "Sent something to the wrong person? How to delete it for everyone within minutes.",
      hi: "अगर किसी को गलती से कोई फ़ोटो या संदेश चला जाए, तो उसे तुरंत दोनों तरफ़ से कैसे मिटाएँ।",
      mr: "चुकीच्या व्यक्तीला मेसेज किंवा फोटो गेल्यास दोन्हीकडून लगेच कसा काढायचा ते शिका.",
    },
    steps: {
      en: [
        "Press and hold your finger on the message you sent by mistake until it turns blue.",
        "Look at the top of your screen for the Trash Bin 🗑️ icon.",
        "Tap the trash bin icon.",
        "Choose 'Delete for Everyone' (सभी के लिए मिटाएँ).",
        "The message disappears from both your phone and their phone!",
      ],
      hi: [
        "गलती से भेजे गए संदेश पर उंगली दो सेकंड दबाकर रखें जब तक वह नीला न हो जाए।",
        "स्क्रीन के सबसे ऊपर कूड़ेदान (Trash 🗑️) का निशान देखें।",
        "कूड़ेदान के निशान पर टैप करें।",
        "'सभी के लिए मिटाएँ' (Delete for Everyone) विकल्प चुनें।",
        "संदेश आपके और सामने वाले दोनों के फ़ोन से हट जाएगा!",
      ],
      mr: [
        "चुकीने पाठवलेल्या मेसेजवर दोन सेकंद बोट दाबून ठेवा जोपर्यंत तो निळा होत नाही.",
        "स्क्रीनच्या वर कचराकुंडीचे (Trash 🗑️) चिन्ह दिसेल.",
        "कचराकुंडीच्या चिन्हावर दाबा.",
        "'सर्वांसाठी डिलीट करा' (Delete for Everyone) हा पर्याय निवडा.",
        "तो मेसेज तुमच्या आणि समोरच्या व्यक्तीच्या दोघांच्या फोनमधून निघून जाईल!",
      ],
    },
    difficulty: "comfortable",
    estimatedTime: 3,
  },
  {
    id: "wa-group-privacy",
    category: "whatsapp",
    title: {
      en: "Stopping strangers from adding you to groups",
      hi: "अनजान लोगों को ग्रुप में जोड़ने से रोकना",
      mr: "अनोळखी लोकांना ग्रुपमध्ये जोडण्यापासून रोखणे",
    },
    description: {
      en: "Protect your privacy so only your saved contacts can add you to WhatsApp groups.",
      hi: "ऐसी सेटिंग करें जिससे केवल आपके जानने वाले ही आपको किसी ग्रुप में जोड़ सकें।",
      mr: "फक्त ओळखीच्या लोकांनीच तुम्हाला ग्रुपमध्ये जोडावे यासाठी प्रायव्हसी सेटिंग करा.",
    },
    steps: {
      en: [
        "In WhatsApp, tap the 3 dots at the top right → Settings.",
        "Tap Privacy → Groups.",
        "Change the setting from 'Everyone' to 'My Contacts'.",
        "Tap 'Done'.",
        "Now unknown scammers and strangers cannot pull you into strange groups!",
      ],
      hi: [
        "व्हाट्सएप में ऊपर 3 बिंदुओं पर दबाएँ → 'सेटिंग्स' (Settings) चुनें।",
        "'प्राइवेसी' (Privacy) → 'ग्रुप' (Groups) पर जाएँ।",
        "वहाँ 'हर कोई' (Everyone) की जगह 'मेरे संपर्क' (My Contacts) चुन लें।",
        "'पूर्ण' (Done) पर दबाएँ।",
        "अब कोई भी अनजान व्यक्ति आपको किसी फ़र्ज़ी ग्रुप में नहीं जोड़ पाएगा!",
      ],
      mr: [
        "व्हॉट्सअ‍ॅपमध्ये वर ३ ठिपक्यांवर दाबा → 'सेटिंग्ज' (Settings) निवडा.",
        "'प्रायव्हसी' (Privacy) → 'ग्रुप्स' (Groups) मध्ये जा.",
        "'प्रत्येकजण' ऐवजी 'माझे संपर्क' (My Contacts) हा पर्याय निवडा.",
        "'पूर्ण' (Done) दाबा.",
        "आता कोणताही अनोळखी व्यक्ती तुम्हाला संशयास्पद ग्रुपमध्ये जोडू शकणार नाही!",
      ],
    },
    difficulty: "comfortable",
    estimatedTime: 4,
    quizId: "quiz-whatsapp",
  },

  /* ---------------- PAYMENTS ---------------- */
  {
    id: "pay-what-is-upi",
    category: "payments",
    title: {
      en: "Understanding UPI payments safely",
      hi: "यूपीआई भुगतान को सुरक्षित रूप से समझना",
      mr: "यूपीआय पेमेंट सुरक्षितपणे समजून घेणे",
    },
    description: {
      en: "What UPI apps (Google Pay, PhonePe, Paytm, BHIM) do and how money moves.",
      hi: "यूपीआई कैसे काम करता है और आपके बैंक खाते से पैसे कैसे सुरक्षित रहते हैं।",
      mr: "यूपीआय अ‍ॅप्स कसे काम करतात आणि बँकेतून सुरक्षित व्यवहार कसा होतो ते शिका.",
    },
    steps: {
      en: [
        "UPI is a government-backed system that links your phone number directly to your bank account.",
        "You can pay for groceries, milk, medicines, or send money to children in seconds.",
        "You never need to give your bank account number or branch code to the shopkeeper.",
        "Every payment requires entering your secret 4 or 6 digit UPI PIN.",
        "Money goes straight from your bank to the seller's bank safely.",
      ],
      hi: [
        "यूपीआई एक सरकारी और सुरक्षित प्रणाली है जो आपके फ़ोन नंबर को सीधे आपके बैंक खाते से जोड़ती है।",
        "इससे आप सब्ज़ी, दूध, दवाइयों का भुगतान या बच्चों को पैसे कुछ सेकंड में भेज सकते हैं।",
        "दुकानदार को अपना बैंक खाता नंबर या पासबुक दिखाने की कोई ज़रूरत नहीं होती।",
        "हर भुगतान को मंज़ूरी देने के लिए आपका 4 या 6 अंकों का गुप्त यूपीआई पिन डालना होता है।",
        "पैसे सीधे आपके बैंक से दुकानदार के बैंक में सुरक्षित चले जाते हैं।",
      ],
      mr: [
        "यूपीआय ही सरकारी आणि सुरक्षित व्यवस्था आहे जी तुमचा फोन नंबर थेट बँकेशी जोडते.",
        "याद्वारे भाजीपाला, दूध, औषधे यांचे पेमेंट किंवा मुलांना पैसे सेकंदात पाठवता येतात.",
        "दुकानदाराला बँक खाते क्रमांक देण्याची काहीच गरज नसते.",
        "प्रत्येक पेमेंट मंजूर करण्यासाठी तुमचा ४ किंवा ६ अंकी गुप्त यूपीआय पिन लागतो.",
        "पैसे थेट तुमच्या बँकेतून दुकानदाराच्या बँकेत सुरक्षित जमा होतात.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 5,
    video: { en: "TnZbdHtTgAA" },
    videoTitle: {
      en: "How UPI payments work",
      hi: "यूपीआई कैसे काम करता है - आसान वीडियो",
      mr: "यूपीआय कसे चालते - सोपा व्हिडिओ",
    },
    quizId: "quiz-payments",
  },
  {
    id: "pay-upi-pin",
    category: "payments",
    title: {
      en: "The Golden Rule: PIN is ONLY to send money",
      hi: "सुनहरा नियम: पिन केवल पैसे भेजने के लिए है",
      mr: "सुवर्ण नियम: पिन फक्त पैसे पाठवण्यासाठी लागतो",
    },
    description: {
      en: "NEVER enter your UPI PIN to receive money or refunds. PIN only deducts money from your account.",
      hi: "पैसे पाने या रिफ़ंड के लिए पिन कभी नहीं चाहिए। पिन डालने से हमेशा आपके पैसे कटते हैं।",
      mr: "पैसे किंवा परतावा मिळवण्यासाठी पिन कधीही लागत नाही. पिन टाकल्यास पैसे जातात.",
    },
    steps: {
      en: [
        "Remember this single rule: Entering your UPI PIN ALWAYS TAKES MONEY OUT of your account.",
        "You NEVER need to enter a PIN to receive pension, prize, refund or family money.",
        "If someone says 'Enter PIN to receive ₹5,000 in your account', it is a 100% FRAUD.",
        "Never share your UPI PIN with anyone, not even bank managers or police officers.",
        "Always cover the screen with your hand when typing your PIN in a shop.",
      ],
      hi: [
        "यह एक नियम हमेशा याद रखें: यूपीआई पिन डालने से हमेशा आपके खाते से पैसे कटते हैं।",
        "पेंशन, इनाम, रिफ़ंड या पैसे पाने के लिए कभी भी पिन डालने की ज़रूरत नहीं होती।",
        "अगर कोई कहे कि '₹5,000 पाने के लिए अपना पिन डालें', तो वह 100% ठगी है।",
        "अपना यूपीआई पिन किसी को न बताएँ — न बैंक वाले को, न पुलिस को।",
        "दुकान में पिन डालते समय स्क्रीन को अपने दूसरे हाथ से छुपा लें।",
      ],
      mr: [
        "हा एक नियम कायम लक्षात ठेवा: यूपीआय पिन टाकल्याने नेहमी खात्यातून पैसे जातात.",
        "पेन्शन, बक्षीस, परतावा किंवा पैसे मिळवण्यासाठी कधीही पिन टाकावा लागत नाही.",
        "'₹५,००० मिळवण्यासाठी पिन टाका' असे कोणी म्हटल्यास ती १००% फसवणूक आहे.",
        "तुमचा यूपीआय पिन कोणालाही सांगू नका — बँकेच्या अधिकाऱ्यालाही नाही.",
        "दुकानात पिन टाकताना स्क्रीन दुसऱ्या हाताने झाकून घ्या.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 4,
    quizId: "quiz-payments",
  },
  {
    id: "pay-qr-code",
    category: "payments",
    title: {
      en: "Scanning a shop QR code to pay",
      hi: "दुकान पर क्यूआर कोड स्कैन कर भुगतान करना",
      mr: "दुकानात क्यूआर कोड स्कॅन करून पेमेंट करणे",
    },
    description: {
      en: "How to use your phone's camera in GPay or PhonePe to pay the grocery store or chemist.",
      hi: "किराने की दुकान या मेडिकल स्टोर पर लगे क्यूआर कोड को स्कैन कर भुगतान करना सीखें।",
      mr: "किराणा किंवा मेडिकल दुकानातील क्यूआर कोड स्कॅन करून पेमेंट करायला शिका.",
    },
    steps: {
      en: [
        "Open your payment app (Google Pay, PhonePe, Paytm or BHIM).",
        "Tap the 'Scan QR' button at the top (it looks like a square 🔳).",
        "Point your phone's camera at the shopkeeper's QR code on the counter.",
        "Verify that the shop's name appears on screen, then type the exact bill amount.",
        "Tap 'Pay' and enter your secret UPI PIN. You will hear a success chime!",
      ],
      hi: [
        "अपना पेमेंट ऐप (गूगल पे, फोनपे, पेटीएम या भीम) खोलें।",
        "ऊपर 'स्कैन क्यूआर' (Scan QR 🔳) वाले बटन को दबाएँ।",
        "काउंटर पर लगे चौकोर क्यूआर कोड के सामने अपने फ़ोन का कैमरा रखें।",
        "स्क्रीन पर दुकानदार का नाम देखें और जितने पैसे देने हैं वह राशि भरें।",
        "'भुगतान करें' (Pay) दबाएँ और अपना गुप्त यूपीआई पिन डालें। भुगतान सफल हो जाएगा!",
      ],
      mr: [
        "तुमचे पेमेंट अ‍ॅप (Google Pay, PhonePe, Paytm किंवा BHIM) उघडा.",
        "वर दिलेल्या 'स्कॅन क्यूआर' (Scan QR 🔳) बटणावर दाबा.",
        "काउंटरवरील चौकोनी क्यूआर कोडसमोर फोनचा कॅमेरा धरा.",
        "स्क्रीनवर दुकानदाराचे नाव तपासा आणि बिलाची अचूक रक्कम लिहा.",
        "'पे' (Pay) दाबा आणि तुमचा गुप्त यूपीआई पिन टाका. पेमेंट यशस्वी होईल!",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 5,
    video: { en: "kFVGvHDh6Kk" },
    videoTitle: {
      en: "Scanning a QR code to pay",
      hi: "क्यूआर स्कैन कर भुगतान - आसान वीडियो",
      mr: "क्यूआर स्कॅन करून पेमेंट - सोपा व्हिडिओ",
    },
  },
  {
    id: "pay-check-balance",
    category: "payments",
    title: {
      en: "Checking your bank balance safely",
      hi: "घर बैठे बैंक बैलेंस सुरक्षित जाँचना",
      mr: "घरी बसून बँक शिल्लक सुरक्षित तपासणे",
    },
    description: {
      en: "Check how much money is in your account without visiting an ATM or bank branch.",
      hi: "बिना बैंक या एटीएम जाए अपने फ़ोन में खाते की शेष राशि देखना सीखें।",
      mr: "बँकेत किंवा एटीएममध्ये न जाता फोनवर खात्यातील शिल्लक रक्कम पाहणे शिका.",
    },
    steps: {
      en: [
        "Open your payment app (e.g. PhonePe or Google Pay).",
        "Tap 'Check Bank Balance' or your bank account card.",
        "Enter your secret UPI PIN.",
        "Your current bank balance will be displayed on screen in private.",
        "Tap the back button when done so the screen does not stay visible to others.",
      ],
      hi: [
        "अपना पेमेंट ऐप (जैसे फोनपे या गूगल पे) खोलें।",
        "'बैंक बैलेंस चेक करें' (Check Balance) विकल्प पर टैप करें।",
        "अपना गुप्त यूपीआई पिन दर्ज करें।",
        "आपके खाते में मौजूद कुल राशि स्क्रीन पर साफ़ दिखने लगेगी।",
        "देखने के बाद वापस (Back) बटन दबा दें ताकि कोई और इसे न देख सके।",
      ],
      mr: [
        "तुमचे पेमेंट अ‍ॅप (उदा. PhonePe किंवा Google Pay) उघडा.",
        "'बँक बॅलन्स तपासा' (Check Balance) पर्यायावर दाबा.",
        "तुमचा गुप्त यूपीआय पिन टाका.",
        "तुमच्या खात्यातील शिल्लक रक्कम स्क्रीनवर खासगीत दिसेल.",
        "पाहून झाल्यावर बॅक बटण दाबा जेणेकरून इतरांना रक्कम दिसणार नाही.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 3,
  },
  {
    id: "pay-failed-refund",
    category: "payments",
    title: {
      en: "What to do if a payment gets stuck",
      hi: "पैसे अटक जाएँ या भुगतान फ़ेल हो तो क्या करें",
      mr: "पेमेंट अडकल्यास किंवा अयशस्वी झाल्यास काय करावे",
    },
    description: {
      en: "Money deducted but shopkeeper did not receive it? Know the safe steps.",
      hi: "खाते से पैसे कट गए पर दुकानदार तक नहीं पहुँचे? घबराएँ नहीं, सही कदम जानें।",
      mr: "खात्यातून पैसे कापले गेले पण समोर पोहोचले नाहीत? घाबरू नका, योग्य पायऱ्या समजून घ्या.",
    },
    steps: {
      en: [
        "Do NOT panic. When network fails, banks automatically return the money within 24 to 72 hours.",
        "Take a screenshot of the failed payment screen showing the UTR or Transaction ID.",
        "Tap 'Help' or 'Raise Dispute' directly inside that transaction in your UPI app.",
        "NEVER search Google for customer care numbers — fake numbers steal more money!",
        "If not refunded in 3 days, visit your bank branch with your passbook and transaction ID.",
      ],
      hi: [
        "घबराएँ नहीं! नेटवर्क समस्या होने पर बैंक 24 से 72 घंटों में पैसे अपने-आप खाते में वापस भेज देता है।",
        "फ़ेल हुए भुगतान की स्क्रीन का फ़ोटो (स्क्रीनशॉट) ले लें जिसमें लेन-देन नंबर (UTR) लिखा हो।",
        "ऐप के अंदर उसी लेन-देन पर जाकर 'मदद' (Help) या 'शिकायत दर्ज करें' पर टैप करें।",
        "इंटरनेट पर कभी कस्टमर केयर नंबर न खोजें — वहाँ ठगों के नकली नंबर होते हैं!",
        "अगर 3 दिन में पैसे न आएँ, तो अपनी पासबुक लेकर बैंक शाखा में बात करें।",
      ],
      mr: [
        "घाबरू नका! नेटवर्क समस्येमुळे पैसे अडकल्यास २४ ते ७२ तासांत पैसे बँकेत आपोआप परत येतात.",
        "अयशस्वी झालेल्या व्यवहाराचा स्क्रीनशॉट काढून ठेवा ज्यावर व्यवहार क्रमांक (UTR) असतो.",
        "अ‍ॅपमध्ये त्याच व्यवहाराखालील 'मदत' (Help) किंवा तक्रार पर्यायावर दाबा.",
        "गुगलवर कधीही कस्टमर केअर नंबर शोधू नका — तिथे भामट्यांचे बनावट नंबर असतात!",
        "३ दिवसांत पैसे परत न आल्यास पासबुक घेऊन बँकेच्या शाखेत संपर्क साधा.",
      ],
    },
    difficulty: "comfortable",
    estimatedTime: 4,
    quizId: "quiz-payments",
  },

  /* ---------------- INTERNET & WI-FI ---------------- */
  {
    id: "net-wifi-vs-data",
    category: "internet",
    title: {
      en: "Wi-Fi vs Mobile Data: Saving your internet pack",
      hi: "वाई-फ़ाई और मोबाइल डेटा में अंतर",
      mr: "वाय-फाय आणि मोबाईल डेटामधील फरक",
    },
    description: {
      en: "Know when your home Wi-Fi is on and how to turn mobile data on or off.",
      hi: "घर का वाई-फ़ाई कब काम करता है और सिम का इंटरनेट पैक कैसे बचाएँ।",
      mr: "घरातील वाय-फाय आणि सिमच्या डेटा पॅकमधील फरक समजून घेऊन बचत करा.",
    },
    steps: {
      en: [
        "Wi-Fi comes from a router in your house — it does not use your phone's daily SIM data pack.",
        "Mobile Data comes from your SIM card when you are outside travelling.",
        "Swipe down from the top of your screen to see the Wi-Fi icon (looks like curved radio waves 📶).",
        "At home, keep Wi-Fi connected to watch videos and make calls without spending daily mobile data.",
        "Turn off Mobile Data when not using it outdoors to save battery and pack limits.",
      ],
      hi: [
        "वाई-फ़ाई घर में लगे बॉक्स (राउटर) से मिलता है — इससे आपके सिम का दैनिक डेटा पैक खर्च नहीं होता।",
        "मोबाइल डेटा आपके सिम से मिलता है, जो घर से बाहर सफर के दौरान काम आता है।",
        "स्क्रीन के ऊपर से नीचे स्वाइप करने पर वाई-फ़ाई का निशान (घुमावदार तरंगें 📶) दिखता है।",
        "घर पर हमेशा वाई-फ़ाई जोड़कर रखें ताकि वीडियो और कॉल बिना डेटा खत्म हुए चल सकें।",
        "बाहर जाते समय ज़रूरत न होने पर मोबाइल डेटा बंद रखने से बैटरी भी बचती है।",
      ],
      mr: [
        "वाय-फाय घरातील राउटरकडून मिळते — याने तुमच्या सिमचा दैनंदिन डेटा पॅक खर्च होत नाही.",
        "मोबाईल डेटा हा सिमकार्डवरून मिळतो, जो घराबाहेर असताना उपयोगी पडतो.",
        "स्क्रीनच्या वरून खाली सरकवल्यावर वाय-फाय चिन्ह (लहरी 📶) दिसते.",
        "घरात असताना नेहमी वाय-फाय जोडून ठेवा जेणेकरून व्हिडिओ आणि कॉल आरामात चालतील.",
        "घराबाहेर गरज नसताना मोबाईल डेटा बंद ठेवल्यास बॅटरी आणि पॅक दोन्ही वाचतात.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 4,
  },
  {
    id: "net-otp",
    category: "internet",
    title: {
      en: "What is an OTP and why you must never share it",
      hi: "ओटीपी क्या है और इसे कभी किसी को क्यों न बताएँ",
      mr: "ओटीपी म्हणजे काय आणि तो कोणालाही का सांगू नये",
    },
    description: {
      en: "The secret 6-digit SMS code that locks your bank and accounts. Protect it with your life.",
      hi: "फ़ोन पर आने वाला 6 अंकों का गुप्त कोड जो आपके पैसे की चाबी है। इसे कभी किसी को न दें।",
      mr: "फोनवर येणारा ६ अंकी गुप्त कोड जो तुमच्या पैशांची किल्ली आहे. तो कधीही कोणाला सांगू नका.",
    },
    steps: {
      en: [
        "OTP stands for One-Time Password — a short number sent via SMS to verify that YOU are doing the action.",
        "Sharing an OTP with someone is like handing them the key to your bank safe.",
        "Real bank officers, electric companies, or courier agents will NEVER ask for your OTP.",
        "If a caller says 'I need the OTP to keep your SIM/account active', end the call immediately.",
        "Always read the full SMS text carefully — it says what action the OTP is approving.",
      ],
      hi: [
        "ओटीपी (OTP) एक गुप्त कोड है जो एसएमएस द्वारा आता है ताकि पक्का हो सके कि यह काम आप ही कर रहे हैं।",
        "किसी को ओटीपी बताना अपनी बैंक तिजोरी की चाबी सौंपने जैसा है।",
        "सच्चा बैंक कर्मचारी, बिजली विभाग या कूरियर वाला आपसे कभी भी ओटीपी नहीं माँगता।",
        "अगर कोई कहे कि 'सिम या खाता चालू रखने के लिए ओटीपी बताओ', तो तुरंत फ़ोन काट दें।",
        "ओटीपी वाले एसएमएस को हमेशा पूरा पढ़ें — उसमें लिखा होता है कि पैसे कहाँ जा रहे हैं।",
      ],
      mr: [
        "ओटीपी (OTP) हा एसएमएसने येणारा गुप्त कोड आहे जो व्यवहार तुम्हीच करत आहात हे सिद्ध करतो.",
        "कोणालाही ओटीपी सांगणे म्हणजे बँक तिजोरीची किल्ली दुसऱ्याच्या हातात देण्यासारखे आहे.",
        "बँकेचा खरा अधिकारी, वीज मंडळ किंवा कुरिअरवाला तुमच्याकडे कधीही ओटीपी मागत नाही.",
        "'खाते किंवा सिम चालू ठेवण्यासाठी ओटीपी सांगा' असा फोन आल्यास लगेच फोन ठेवा.",
        "ओटीपी आलेला एसएमएस नेहमी पूर्ण वाचा — त्यात पैसे कुठे जात आहेत ते लिहिलेले असते.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 4,
    video: { en: "0lYRTfF3nJ4" },
    videoTitle: {
      en: "Why you must never share an OTP",
      hi: "ओटीपी क्यों न बताएँ - ज़रूरी वीडियो",
      mr: "ओटीपी का सांगू नये - महत्त्वाचा व्हिडिओ",
    },
    quizId: "quiz-internet",
  },
  {
    id: "net-search-google",
    category: "internet",
    title: {
      en: "Searching safely on Google with voice",
      hi: "गूगल पर बोलकर सुरक्षित जानकारी ढूँढ़ना",
      mr: "गुगलवर बोलून सुरक्षित माहिती शोधणे",
    },
    description: {
      en: "How to use the microphone in Google to find recipes, temple timings or devotional songs.",
      hi: "कीबोर्ड पर लिखे बिना केवल बोलकर भजन, मौसम, नुस्खे और जानकारी ढूँढ़ना सीखें।",
      mr: "टाइप न करता फक्त बोलून भजन, हवामान आणि उपयुक्त माहिती शोधायला शिका.",
    },
    steps: {
      en: [
        "Open the Google app or look for the Google search bar on your home screen.",
        "Tap the small colorful Microphone 🎙️ icon.",
        "Speak clearly: for example, 'Today weather in Pune' or 'Morning bhajan'.",
        "Google will understand your words and show the best results.",
        "Caution: NEVER trust helpline numbers shown on Google search. Always use numbers on your passbook.",
      ],
      hi: [
        "गूगल (Google) ऐप खोलें या अपनी स्क्रीन पर बनी सर्च पट्टी को देखें।",
        "सर्च पट्टी में बने रंगीन माइक 🎙️ के निशान को दबाएँ।",
        "साफ़ आवाज़ में बोलें: जैसे 'आज का मौसम' या 'सुबह के भजन'।",
        "गूगल आपकी बात समझकर तुरंत सबसे अच्छी जानकारी सामने ला देगा।",
        "सावधानी: गूगल पर दिखने वाले किसी भी कस्टमर केयर नंबर पर भरोसा न करें। हमेशा पासबुक पर लिखा नंबर ही मिलाएँ।",
      ],
      mr: [
        "गुगल (Google) अ‍ॅप उघडा किंवा स्क्रीनवरील सर्च पट्टी पाहा.",
        "पट्टीमधील रंगीबेरंगी माइक 🎙️ चिन्हावर दाबा.",
        "स्पष्ट आवाजात बोला: उदा. 'आजचे हवामान' किंवा 'सकाळचे भजन'.",
        "गुगल लगेच अचूक निकाल स्क्रीनवर दाखवेल.",
        "सावध राहा: गुगलवर दिसणाऱ्या कस्टमर केअर नंबरवर कधीही विश्वास ठेवू नका. पासबुकवरील नंबरच वापरा.",
      ],
    },
    difficulty: "beginner",
    estimatedTime: 4,
  },
  {
    id: "net-safe-browsing",
    category: "internet",
    title: {
      en: "Recognizing safe websites and links",
      hi: "सुरक्षित वेबसाइट और लिंक पहचानना",
      mr: "सुरक्षित वेबसाइट आणि लिंक ओळखणे",
    },
    description: {
      en: "Learn how to spot genuine official sites and avoid fake look-alike pages.",
      hi: "नकली वेबसाइट से बचने के नियम और सुरक्षित सरकारी व बैंक पोर्टल पहचानें।",
      mr: "बनावट वेबसाइट्स कशा ओळखायच्या आणि अधिकृत संकेतस्थळे कशी पाहायची ते शिका.",
    },
    steps: {
      en: [
        "Look at the address bar at the top of the browser: genuine secure sites start with 'https://' and have a padlock 🔒.",
        "Government websites in India end with '.gov.in' or '.nic.in' (e.g. cybercrime.gov.in).",
        "Never tap on links sent by strangers via SMS or WhatsApp promising gifts or tax refunds.",
        "If a website flashes 'Your phone has a virus! Clean now', just close the browser tab. It is a fake ad.",
        "Always open your bank's official app instead of clicking a link in a message.",
      ],
      hi: [
        "ब्राउज़र में सबसे ऊपर वेबसाइट का पता देखें: सुरक्षित पते में 'https://' और ताले 🔒 का निशान होता है।",
        "भारत सरकार की असली वेबसाइटों के अंत में '.gov.in' या '.nic.in' होता है।",
        "एसएमएस या व्हाट्सएप पर अनजान नंबर से आए किसी भी लिंक पर कभी न दबाएँ।",
        "अगर कोई वेबसाइट कहे 'फ़ोन में वायरस है! यहाँ दबाएँ', तो तुरंत उस पेज को बंद कर दें। यह सिर्फ़ डराने वाला झूठा विज्ञापन है।",
        "संदेश में आए लिंक के बजाय हमेशा अपने बैंक के असली ऐप से काम करें।",
      ],
      mr: [
        "ब्राउझरमध्ये वर पत्ता तपासा: सुरक्षित पत्त्यामध्ये 'https://' आणि कुलूप 🔒 चिन्ह असते.",
        "भारतातील सरकारी वेबसाइट्सच्या शेवटी '.gov.in' किंवा '.nic.in' असते.",
        "एसएमएस किंवा व्हॉट्सअ‍ॅपवर अनोळखी नंबरवरून आलेल्या लिंकवर कधीही दाबू नका.",
        "'फोनमध्ये व्हायरस आला आहे' असा मेसेज आल्यास घाबरू नका, ते पान बंद करा. ती बनावट जाहिरात असते.",
        "मेसेजमधील लिंकऐवजी नेहमी बँकेच्या अधिकृत अ‍ॅपचा वापर करा.",
      ],
    },
    difficulty: "comfortable",
    estimatedTime: 5,
    video: { en: "aO858HyFbKI" },
    videoTitle: {
      en: "Internet safety basics",
      hi: "इंटरनेट सुरक्षा - आसान वीडियो",
      mr: "इंटरनेट सुरक्षा - सोपा व्हिडिओ",
    },
    quizId: "quiz-internet",
  },
  {
    id: "net-update-apps",
    category: "internet",
    title: {
      en: "Updating apps safely on Wi-Fi",
      hi: "प्ले स्टोर से सुरक्षित ऐप अपडेट करना",
      mr: "प्ले स्टोअरवरून सुरक्षित अ‍ॅप अपडेट करणे",
    },
    description: {
      en: "Keep your apps updated so security bugs are fixed and they run smoothly.",
      hi: "ऐप को समय-समय पर अपडेट रखें ताकि कोई सुरक्षा ख़ामी न रहे और फ़ोन तेज़ चले।",
      mr: "अ‍ॅप्स वेळोवेळी अपडेट ठेवा जेणेकरून त्रुटी दूर होतात आणि फोन चांगला चालतो.",
    },
    steps: {
      en: [
        "Connect your phone to home Wi-Fi so your mobile data pack is preserved.",
        "Open the Google Play Store (on Android) or App Store (on iPhone).",
        "Tap your profile icon in the top right corner.",
        "Tap 'Manage apps and device' → 'Updates available'.",
        "Tap 'Update' next to WhatsApp, Banking apps, and Sahayak.",
      ],
      hi: [
        "फ़ोन को घर के वाई-फ़ाई से जोड़ें ताकि सिम का डेटा खर्च न हो।",
        "गूगल प्ले स्टोर (Play Store) ऐप खोलें।",
        "ऊपर दाहिने कोने में अपनी प्रोफ़ाइल फ़ोटो या पहले अक्षर पर दबाएँ।",
        "'Manage apps and device' (ऐप और डिवाइस प्रबंधित करें) → 'Updates available' पर जाएँ।",
        "व्हाट्सएप और बैंक ऐप के सामने 'अपडेट' (Update) का बटन दबाएँ।",
      ],
      mr: [
        "फोन घरातील वाय-फायशी जोडा जेणेकरून मोबाईल डेटा वाचेल.",
        "गुगल प्ले स्टोअर (Play Store) उघडा.",
        "वर उजव्या कोपऱ्यातील तुमच्या प्रोफाइल चिन्हावर दाबा.",
        "'अ‍ॅप्स आणि डिव्हाइस व्यवस्थापित करा' → 'अपडेट्स उपलब्ध' मध्ये जा.",
        "व्हॉट्सअ‍ॅप आणि बँक अ‍ॅप्ससमोरील 'अपडेट' बटणावर दाबा.",
      ],
    },
    difficulty: "comfortable",
    estimatedTime: 4,
  },

  /* ---------------- SERVICES ---------------- */
  {
    id: "svc-navigation",
    category: "services",
    title: {
      en: "Finding your way with Google Maps",
      hi: "गूगल मैप्स से रास्ता ढूँढ़ना",
      mr: "गुगल मॅप्सने रस्ता शोधणे",
    },
    description: {
      en: "Search for a hospital, temple or shop and follow spoken step-by-step directions.",
      hi: "अस्पताल, मंदिर या बाज़ार का रास्ता खोजें और बोलकर रास्ता बताने वाली सुविधा चलाएँ।",
      mr: "रुग्णालय, मंदिर किंवा दुकानाचा रस्ता शोधा आणि बोलून मार्गदर्शन मिळवा.",
    },
    steps: {
      en: [
        "Open the Maps app on your phone.",
        "Type or speak the place you want to reach (e.g. 'City Hospital').",
        "Tap the blue 'Directions' button.",
        "Choose walking 🚶, two-wheeler 🛵, or car 🚗.",
        "Tap the blue 'Start' button. Maps will speak turn-by-turn directions aloud to guide you!",
      ],
      hi: [
        "फ़ोन में मैप्स (Maps) ऐप खोलें।",
        "जहाँ जाना है उसका नाम बोलें या लिखें (जैसे 'ज़िला अस्पताल')।",
        "नीचे नीले रंग के 'दिशा-निर्देश' (Directions) बटन को दबाएँ।",
        "पैदल 🚶 या वाहन 🚗 का विकल्प चुनें।",
        "नीले रंग का 'शुरू करें' (Start) बटन दबाएँ। अब मैप आपको बोलकर एक-एक मोड़ बताता जाएगा!",
      ],
      mr: [
        "फोनमधील मॅप्स (Maps) अ‍ॅप उघडा.",
        "जिथे जायचे आहे त्या जागेचे नाव बोला किंवा लिहा (उदा. 'जिल्हा रुग्णालय').",
        "निळ्या रंगाच्या 'दिशा' (Directions) बटणावर दाबा.",
        "पायी 🚶 किंवा वाहनाचा 🚗 पर्याय निवडा.",
        "'सुरू करा' (Start) दाबा. मॅप्स तुम्हाला प्रत्येक वळणावर बोलून मार्गदर्शन करेल!",
      ],
    },
    difficulty: "comfortable",
    estimatedTime: 5,
    video: { en: "sGDHkbAmqzc" },
    videoTitle: {
      en: "Using Google Maps",
      hi: "गूगल मैप्स चलाना - आसान वीडियो",
      mr: "गुगल मॅप्स वापरणे - सोपा व्हिडिओ",
    },
  },
  {
    id: "svc-digilocker",
    category: "services",
    title: {
      en: "Keeping documents safely in DigiLocker",
      hi: "डिजीलॉकर में सरकारी दस्तावेज़ रखना",
      mr: "डिजिलॉकरमध्ये कागदपत्रे सुरक्षित ठेवणे",
    },
    description: {
      en: "Carry your Aadhaar card, PAN card, and driving license securely on your phone without losing originals.",
      hi: "आधार कार्ड और अन्य ज़रूरी पहचान पत्र अपने फ़ोन में सरकारी मान्यता के साथ सुरक्षित रखें।",
      mr: "आधार कार्ड आणि इतर ओळखपत्रे फोनमध्ये अधिकृतपणे सुरक्षित ठेवा.",
    },
    steps: {
      en: [
        "DigiLocker is the official Government of India app for digital document storage.",
        "Install DigiLocker from the official Google Play Store.",
        "Log in using your Aadhaar number and OTP.",
        "Your official Aadhaar card, PAN card, and vehicle papers can be downloaded in seconds.",
        "These digital documents are 100% legally valid across all airports, trains, and offices in India.",
      ],
      hi: [
        "डिजीलॉकर (DigiLocker) भारत सरकार का आधिकारिक सुरक्षित ऐप है।",
        "गूगल प्ले स्टोर से सिर्फ़ असली डिजीलॉकर ऐप इंस्टॉल करें।",
        "अपने आधार नंबर और उसपर आए ओटीपी से लॉगिन करें।",
        "आपका असली आधार कार्ड और पैन कार्ड तुरंत आपके फ़ोन में सुरक्षित आ जाएगा।",
        "यह डिजिटल पहचान पत्र ट्रेन, हवाई अड्डे और सभी सरकारी दफ़्तरों में पूरी तरह मान्य है।",
      ],
      mr: [
        "डिजिलॉकर (DigiLocker) हे भारत सरकारचे अधिकृत सुरक्षित अ‍ॅप आहे.",
        "प्ले स्टोअरवरून अधिकृत डिजिलॉकर अ‍ॅप इन्स्टॉल करा.",
        "तुमचा आधार क्रमांक आणि ओटीपी टाकून लॉगिन करा.",
        "तुमचे अधिकृत आधार कार्ड आणि पॅन कार्ड सेकंदात फोनमध्ये सुरक्षित दिसेल.",
        "हे डिजिटल दस्तऐवज रेल्वे, विमानतळ आणि सर्व सरकारी कार्यालयांत पूर्णपणे वैध आहेत.",
      ],
    },
    difficulty: "confident",
    estimatedTime: 5,
  },
  {
    id: "svc-doctor-appointment",
    category: "services",
    title: {
      en: "Booking a doctor appointment online",
      hi: "ऑनलाइन डॉक्टर अपॉइंटमेंट लेना",
      mr: "ऑनलाइन डॉक्टर भेट बुक करणे",
    },
    description: {
      en: "Book a clinic or hospital visit from home without standing in long queues.",
      hi: "लंबी कतारों में खड़े हुए बिना घर से ही डॉक्टर के मिलने का समय तय करना।",
      mr: "रांगेत उभे न राहता घरबसल्या डॉक्टरांची भेट बुक करायला शिका.",
    },
    steps: {
      en: [
        "Use the official app or website of your hospital or trusted clinic.",
        "Choose the doctor or department (e.g. Eye, Heart, General Physician).",
        "Select an available date and time slot that suits you.",
        "Enter your name and phone number carefully.",
        "Save the confirmation message or screenshot on your phone to show at the clinic desk.",
      ],
      hi: [
        "अपने अस्पताल या भरोसेमंद क्लिनिक की आधिकारिक वेबसाइट या ऐप खोलें।",
        "डॉक्टर या विभाग (जैसे आँख, हृदय या सामान्य डॉक्टर) का चयन करें।",
        "अपनी सुविधानुसार तारीख और समय का समय चुनें।",
        "अपना नाम और फ़ोन नंबर ध्यान से भरें।",
        "आए हुए पुष्टि संदेश (कंफ़र्मेशन) का स्क्रीनशॉट रख लें ताकि अस्पताल में दिखा सकें।",
      ],
      mr: [
        "तुमच्या रुग्णालयाचे किंवा क्लिनिकचे अधिकृत अ‍ॅप किंवा वेबसाइट उघडा.",
        "डॉक्टर किंवा विभाग (उदा. डोळे, हृदय किंवा जनरल फिजिशियन) निवडा.",
        "तुमच्या सोयीनुसार तारीख आणि वेळ निवडा.",
        "तुमचे नाव आणि फोन नंबर अचूक टाका.",
        "मिळालेल्या पुष्टी संदेशाचा (कन्फर्मेशन) स्क्रीनशॉट ठेवा जो दवाखान्यात दाखवता येईल.",
      ],
    },
    difficulty: "comfortable",
    estimatedTime: 5,
  },
  {
    id: "svc-utility-bills",
    category: "services",
    title: {
      en: "Paying electricity and water bills from home",
      hi: "घर बैठे बिजली और पानी का बिल भरना",
      mr: "घरी बसून वीज आणि पाण्याचे बिल भरणे",
    },
    description: {
      en: "Pay monthly household utility bills securely without waiting in queues.",
      hi: "लाइन में लगे बिना अपने फ़ोन से बिजली का बिल सुरक्षित रूप से जमा करें।",
      mr: "रांगेत न थांबता फोनवरून वीजबिल सुरक्षितपणे भरायला शिका.",
    },
    steps: {
      en: [
        "Open your payment app (Google Pay, PhonePe, or Paytm).",
        "Tap 'Electricity' or 'Water Bill' in the Bill Payment section.",
        "Select your electricity provider (e.g. Mahavitaran, BSES, Adani, etc.).",
        "Type your Consumer Number printed on your old paper electricity bill.",
        "Verify your name and the exact bill amount, then pay using your UPI PIN.",
      ],
      hi: [
        "अपना पेमेंट ऐप (गूगल पे, फोनपे या पेटीएम) खोलें।",
        "बिल भुगतान वाले हिस्से में 'बिजली बिल' (Electricity) पर टैप करें।",
        "अपनी बिजली कंपनी का नाम चुनें।",
        "अपने पुराने कागज़ वाले बिल पर लिखा उपभोक्ता नंबर (Consumer Number) दर्ज करें।",
        "स्क्रीन पर अपना नाम और बिल की सही राशि जाँचें, फिर यूपीआई पिन डालकर भुगतान करें।",
      ],
      mr: [
        "तुमचे पेमेंट अ‍ॅप (Google Pay, PhonePe किंवा Paytm) उघडा.",
        "बिल पेमेंट भागात 'वीजबिल' (Electricity) पर्यायावर दाबा.",
        "तुमच्या वीज कंपनीचे नाव निवडा (उदा. महावितरण, अदानी इत्यादी).",
        "जुन्या बिलावरील ग्राहक क्रमांक (Consumer Number) टाका.",
        "स्क्रीनवर तुमचे नाव आणि बिलाची अचूक रक्कम तपासा, नंतर यूपीआय पिन टाकून पेमेंट करा.",
      ],
    },
    difficulty: "comfortable",
    estimatedTime: 5,
  },
  {
    id: "svc-senior-schemes",
    category: "services",
    title: {
      en: "Digital Life Certificate for Pensioners (Jeevan Pramaan)",
      hi: "घर बैठे जीवन प्रमाण पत्र (पेंशन) जमा करना",
      mr: "पेन्शनसाठी घरबसल्या जीवन प्रमाणपत्र सादर करणे",
    },
    description: {
      en: "Submit your annual pensioner life certificate from home using smartphone face authentication.",
      hi: "पेंशन जारी रखने के लिए बैंक जाए बिना फ़ोन से जीवन प्रमाण पत्र जमा करना सीखें।",
      mr: "बँकेत न जाता फोनवरून वार्षिक जीवन प्रमाणपत्र कसे सादर करायचे ते समजून घ्या.",
    },
    steps: {
      en: [
        "PPO pensioners can now submit their annual life certificate using the Government's official Jeevan Pramaan app.",
        "The app uses simple face authentication using your phone's front camera.",
        "Keep your Aadhaar number, Pension Account Number, and PPO number ready.",
        "Follow the on-screen instructions to blink in front of the camera.",
        "Once verified, a confirmation SMS with certificate ID is sent immediately — no bank visit required!",
      ],
      hi: [
        "पेंशनधारी अब सरकारी 'जीवन प्रमाण' ऐप से घर बैठे वार्षिक जीवन प्रमाण पत्र दे सकते हैं।",
        "यह ऐप आपके फ़ोन के कैमरे से केवल चेहरा देखकर पहचान सत्यापित कर लेता है।",
        "अपना आधार नंबर, पेंशन खाता नंबर और पीपीओ (PPO) नंबर पास रखें।",
        "स्क्रीन पर दिए गए निर्देश अनुसार कैमरे के सामने एक बार पलक झपकाएँ।",
        "सत्यापन पूरा होते ही प्रमाण पत्र जमा हो जाता है और बैंक जाने की बिल्कुल ज़रूरत नहीं पड़ती!",
      ],
      mr: [
        "पेन्शनधारक आता सरकारच्या अधिकृत 'जीवन प्रमाण' अ‍ॅपद्वारे घरबसल्या प्रमाणपत्र देऊ शकतात.",
        "हे अ‍ॅप फोनच्या कॅमेऱ्याने केवळ चेहरा तपासून पडताळणी करते.",
        "तुमचा आधार क्रमांक, बँक खाते आणि पीपीओ (PPO) क्रमांक तयार ठेवा.",
        "स्क्रीनवरील सूचनेनुसार कॅमेऱ्यासमोर एकदा डोळ्यांची उघडझाप करा.",
        "पडताळणी होताच प्रमाणपत्र जमा होते — बँकेत जाण्याची अजिबात गरज पडत नाही!",
      ],
    },
    difficulty: "confident",
    estimatedTime: 6,
  },
];

export function lessonsByCategory(cat: LessonCategory) {
  return LESSONS.filter((l) => l.category === cat);
}

export function getLesson(id: string) {
  return LESSONS.find((l) => l.id === id);
}

/** YouTube id for a lesson in the given language (en fallback), if verified. */
export function lessonVideoId(lesson: Lesson | undefined, lang: Lang): string | undefined {
  return lesson?.video?.[lang] ?? lesson?.video?.en;
}
