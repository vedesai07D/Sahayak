import type { Localized, LocalizedList } from "@/lib/i18n";

export type ScamCategory = {
  id: string;
  emoji: string;
  title: Localized;
  description: Localized;
};

export const SCAM_CATEGORIES: ScamCategory[] = [
  {
    id: "bank-call",
    emoji: "🏦",
    title: { en: "Fake bank & KYC calls", hi: "नकली बैंक व केवाईसी कॉल", mr: "बनावट बँक व केवायसी कॉल" },
    description: {
      en: "Callers claim your account or ATM card will be blocked unless you share details or OTP right away.",
      hi: "कॉलर कहता है कि अभी विवरण या ओटीपी न देने पर खाता या एटीएम बंद हो जाएगा।",
      mr: "कॉल करणारा म्हणतो की आत्ता माहिती किंवा ओटीपी दिला नाही तर बँक खाते बंद होईल.",
    },
  },
  {
    id: "upi",
    emoji: "💸",
    title: { en: "UPI & Collect request scams", hi: "यूपीआई और पैसे माँगने की ठगी", mr: "यूपीआय व पेमेंट रिक्वेस्ट फसवणूक" },
    description: {
      en: "Someone sends a 'collect request' that looks like money coming in, but entering your PIN sends money out.",
      hi: "कोई 'रिक्वेस्ट' भेजता है जो पैसे आने जैसी दिखती है, पर पिन डालते ही पैसे कट जाते हैं।",
      mr: "पैसे येण्यासारखी 'रिक्वेस्ट' पाठवून पिन टाकायला लावून पैसे पळवले जातात.",
    },
  },
  {
    id: "qr",
    emoji: "🔳",
    title: { en: "QR code payment scams", hi: "क्यूआर कोड स्कैन ठगी", mr: "क्यूआर कोड स्कॅन फसवणूक" },
    description: {
      en: "A buyer or caller sends a QR code claiming you must scan it to receive money or a refund.",
      hi: "खरीदार कहता है कि पैसे लेने के लिए आपको यह क्यूआर कोड स्कैन करना होगा।",
      mr: "पैसे किंवा परतावा मिळवण्यासाठी क्यूआर स्कॅन करायला सांगितले जाते.",
    },
  },
  {
    id: "electricity",
    emoji: "💡",
    title: { en: "Electricity & utility disconnection SMS", hi: "बिजली बिल कटने का फ़र्ज़ी संदेश", mr: "वीजबिल कट होण्याचा बनावट मेसेज" },
    description: {
      en: "An SMS warns your electricity will be disconnected tonight at 9:30 PM unless you call an urgent number.",
      hi: "संदेश आता है कि आज रात 9:30 बजे बिजली काट दी जाएगी, तुरंत इस नंबर पर बात करें।",
      mr: "आज रात्री वीज कापली जाईल अशी भीती दाखवून नंबरवर फोन करायला लावणारा मेसेज.",
    },
  },
  {
    id: "courier",
    emoji: "📦",
    title: { en: "Parcel & Digital Arrest scams", hi: "फ़र्ज़ी पार्सल और पुलिस धमकी ठगी", mr: "बनावट पार्सल व पोलीस धमकी फसवणूक" },
    description: {
      en: "Callers pretending to be police or customs claim a parcel with illegal items has your name.",
      hi: "पुलिस या कस्टम अधिकारी बनकर डराते हैं कि आपके नाम से गैरकानूनी पार्सल पकड़ा गया है।",
      mr: "पोलीस किंवा सीमाशुल्क अधिकारी असल्याचे भासवून पार्सलमध्ये बेकायदेशीर वस्तू असल्याचा धाक दाखवणे.",
    },
  },
  {
    id: "customer-care",
    emoji: "☎️",
    title: { en: "Fake customer care numbers", hi: "गूगल पर नकली हेल्पलाइन नंबर", mr: "गुगलवरील बनावट हेल्पलाइन नंबर" },
    description: {
      en: "Scammers place fake phone numbers on Google search results for courier, gas, and bank support.",
      hi: "गूगल सर्च पर बैंक, गैस या कूरियर के नाम पर ठगों के नकली नंबर होते हैं।",
      mr: "शोध निकालांवर गॅस, कुरिअर किंवा बँकेच्या नावावर बनावट नंबर असतात.",
    },
  },
  {
    id: "whatsapp-impersonation",
    emoji: "💬",
    title: { en: "WhatsApp child & friend impersonation", hi: "बच्चा या दोस्त बनकर पैसे माँगना", mr: "मुलगा किंवा मित्र बनून पैसे मागणे" },
    description: {
      en: "A message from an unknown number claims: 'Hi Mom/Dad, lost my phone, this is my new number, urgent money needed'.",
      hi: "अनजान नंबर से संदेश: 'मम्मी, फ़ोन खो गया, यह नया नंबर है, तुरंत अस्पताल/दोस्त के लिए पैसे भेजो'।",
      mr: "'आई/बाबा, फोन हरवला, हा नवीन नंबर आहे, तातडीने पैसे पाठवा' असा बनावट मेसेज.",
    },
  },
  {
    id: "lottery",
    emoji: "🎫",
    title: { en: "Lottery & KBC lucky draw prizes", hi: "लॉटरी और केबीसी लकी ड्रॉ ठगी", mr: "लॉटरी व केबीसी बक्षीस फसवणूक" },
    description: {
      en: "A message says you won ₹25 Lakh in a lottery you never entered, asking for a small processing fee.",
      hi: "आपने ₹25 लाख का इनाम जीता है, बस फ़ाइल चार्ज या टैक्स के नाम पर पैसे माँगे जाते हैं।",
      mr: "कोणतीही स्पर्धा न खेळता २५ लाख जिंकल्याचा दावा करून कर किंवा शुल्क मागणारे मेसेज.",
    },
  },
  {
    id: "remote-access",
    emoji: "🖥️",
    title: { en: "Screen-sharing & remote app scams", hi: "स्क्रीन शेयरिंग ऐप (एनीडेस्क) ठगी", mr: "स्क्रीन-शेअरिंग अ‍ॅप फसवणूक" },
    description: {
      en: "A caller asks you to install AnyDesk, TeamViewer or QuickSupport so a 'technician' can view your screen.",
      hi: "कॉलर कहता है कि एनीडेस्क या क्विकसपोर्ट ऐप डालें ताकि वह आपकी स्क्रीन देखकर समस्या ठीक कर सके।",
      mr: "तांत्रिक बिघाड दुरुस्त करण्याचे कारण सांगून स्क्रीन पाहणारे अ‍ॅप इन्स्टॉल करायला लावणे.",
    },
  },
  {
    id: "investment",
    emoji: "📈",
    title: { en: "Guaranteed double return investment schemes", hi: "पैसे दोगुने करने वाले फ़र्ज़ी ग्रुप", mr: "पैसे दुप्पट करणाऱ्या बनावट योजना" },
    description: {
      en: "WhatsApp and Telegram groups promising guaranteed 20% to 50% monthly returns.",
      hi: "व्हाट्सएप ग्रुप जहाँ महीने में पैसा दोगुना करने का लालच देकर बड़ी रकम फँसा ली जाती है।",
      mr: "काही दिवसांत भरघोस परताव्याचे आमिष दाखवून रक्कम हडप करणारे ग्रुप्स.",
    },
  },
];

export type ScamStory = {
  id: string;
  categoryId: string;
  title: Localized;
  summary: Localized;
  story: Localized;
  warningSigns: LocalizedList;
  whatWentWrong: Localized;
  shouldHaveDone: LocalizedList;
  whatToDoIfHappened: LocalizedList;
  keyLesson: Localized;
  difficulty: "beginner" | "comfortable" | "confident";
  /** Optional linked quiz shown at the bottom of the story page. */
  quizId?: string;
  /** Optional YouTube video id rendered after the story text. */
  video?: string;
};

export const SCAM_STORIES: ScamStory[] = [
  {
    id: "story-fake-bank-officer",
    categoryId: "bank-call",
    title: {
      en: "The Fake Bank Officer Calling About KYC Expiry",
      hi: "केवाईसी समाप्त होने का नकली बैंक कॉल",
      mr: "केवायसी संपल्याचा बनावट बँक कॉल",
    },
    summary: {
      en: "A polite caller claimed an account would be locked within 1 hour unless an OTP was verified.",
      hi: "एक विनम्र कॉलर ने कहा कि 1 घंटे में खाता बंद हो जाएगा, जब तक कि अभी आया ओटीपी न बताया जाए।",
      mr: "एका तासात बँक खाते बंद होईल अशी भीती दाखवून ओटीपी मागण्यात आला.",
    },
    story: {
      en: "Mr. Sharma, 69, received a polite phone call. The caller said he was speaking from SBI's head office and that Mr. Sharma's KYC had expired. To make it sound genuine, the caller even read out the last four digits of Mr. Sharma's account number. He said, 'Sir, I have sent a safety confirmation code to your phone. Please read it to me so your pension account stays active.' In a hurry, Mr. Sharma read out the 6-digit OTP. Within 2 minutes, ₹45,000 was withdrawn from his savings.",
      hi: "69 वर्षीय श्री शर्मा को एक विनम्र कॉल आया। बोलने वाले ने कहा कि वह एसबीआई के मुख्य कार्यालय से बोल रहा है और उनका केवाईसी समाप्त हो गया है। विश्वास जीतने के लिए उसने उनके खाते के अंतिम 4 अंक भी सही बताए। उसने कहा, 'सर, आपके फ़ोन पर एक कोड भेजा है, जल्दी बताइए ताकि पेंशन खाता बंद न हो।' घबराहट में शर्मा जी ने वह 6 अंकों का ओटीपी बता दिया। दो मिनट के अंदर उनके खाते से ₹45,000 निकल गए।",
      mr: "६९ वर्षांच्या श्री. शर्मा यांना बँकेतून बोलत असल्याचा फोन आला. कॉलर म्हणाला की तुमचे केवायसी संपले आहे. खात्री पटण्यासाठी त्याने खात्याचे शेवटचे चार अंकही सांगितले. तो म्हणाला, 'सर, पेन्शन खाते चालू ठेवण्यासाठी आलेला पडताळणी कोड सांगा.' घाबरून शर्माजींनी ६ अंकी ओटीपी सांगितला. अवघ्या दोन मिनिटांत त्यांच्या खात्यातून ₹४५,००० कापले गेले.",
    },
    warningSigns: {
      en: [
        "Created false urgency: 'account will be locked in 1 hour'.",
        "Asked to read out an OTP over the phone call.",
        "Called from an ordinary 10-digit mobile number instead of an official bank SMS header.",
      ],
      hi: [
        "घबराहट और हड़बड़ी पैदा की: '1 घंटे में खाता बंद हो जाएगा'।",
        "फ़ोन कॉल पर मुँह से ओटीपी बोलने को कहा।",
        "किसी बैंक के आधिकारिक नंबर के बजाय सामान्य 10 अंकों के मोबाइल नंबर से कॉल आया।",
      ],
      mr: [
        "भीती आणि घाई निर्माण केली: 'एका तासात खाते बंद होईल'.",
        "फोनवर तोंडी ओटीपी विचारला.",
        "बँकेच्या अधिकृत क्रमांकाऐवजी साध्या मोबाईल नंबरवरून कॉल आला.",
      ],
    },
    whatWentWrong: {
      en: "The caller having the last four digits of the account felt like proof of identity. But account numbers are often leaked from old shopping receipts and are not proof of identity.",
      hi: "खाते के अंतिम चार अंक पता होने से शर्मा जी को लगा कि सचमुच बैंक से कॉल है। जबकि यह जानकारी पुरानी रसीदों या पर्चियों से लीक हो जाती है।",
      mr: "खात्याचे शेवटचे अंक माहित असल्याने खरा अधिकारी वाटला. परंतु अशी जुजबी माहिती जुन्या पावत्यांवरून मिळू शकते.",
    },
    shouldHaveDone: {
      en: [
        "Politely say: 'I will visit my local branch in person' and hang up.",
        "Never read an OTP to any caller under any circumstances.",
        "Check with your local branch using the number printed on your passbook.",
      ],
      hi: [
        "साफ़ कहिए: 'मैं खुद अपनी बैंक शाखा जाकर बात करूँगा' और कॉल काट दें।",
        "किसी भी परिस्थिति में फ़ोन पर ओटीपी किसी को न बताएँ।",
        "अपनी पासबुक पर छपे आधिकारिक नंबर पर कॉल करके जाँच करें।",
      ],
      mr: [
        "स्पष्ट सांगा: 'मी स्वतः बँकेत जाऊन बोलेन' आणि फोन ठेवा.",
        "कोणत्याही परिस्थितीत फोनवर कोणालाही ओटीपी सांगू नका.",
        "पासबुकवरील अधिकृत नंबरवर फोन करून खात्री करा.",
      ],
    },
    whatToDoIfHappened: {
      en: [
        "Dial 1930 immediately (the Cyber Fraud Helpline) within the golden hour to freeze the transferred amount.",
        "Call the bank's toll-free number printed on your ATM card to block the card and net banking.",
        "Keep the SMS alert as evidence; do not delete it.",
      ],
      hi: [
        "तुरंत 1930 (साइबर हेल्पलाइन) पर कॉल करें ताकि भेजी गई राशि आगे निकलने से पहले रोकी जा सके।",
        "एटीएम कार्ड के पीछे लिखे टोल-फ्री नंबर पर कॉल करके कार्ड और खाता तुरंत ब्लॉक करवाएँ।",
        "बैंक से आया हुआ पैसे कटने का एसएमएस सुरक्षित रखें, उसे डिलीट न करें।",
      ],
      mr: [
        "लगेच १९३० या सायबर गुन्हे हेल्पलाइनवर फोन करा जेणेकरून गेलेले पैसे रोखता येतील.",
        "एटीएम कार्डच्या मागे दिलेल्या टोल-फ्री नंबरवर फोन करून कार्ड आणि खाते त्वरित ब्लॉक करा.",
        "पैसे कापल्याचा एसएमएस पुरावा म्हणून जपून ठेवा, डिलीट करू नका.",
      ],
    },
    keyLesson: {
      en: "Banks never ask for your OTP. An OTP is only for YOU to approve an action you initiated.",
      hi: "बैंक कभी फ़ोन पर ओटीपी नहीं माँगता। ओटीपी सिर्फ़ आपके निजी इस्तेमाल के लिए होता है।",
      mr: "बँक कधीही फोनवर ओटीपी मागत नाही. ओटीपी ही तुमची वैयक्तिक गुप्त चावी आहे.",
    },
    difficulty: "beginner",
    quizId: "quiz-scams",
    video: "Mnj-LhF2nug",
  },
  {
    id: "story-upi-request",
    categoryId: "upi",
    title: {
      en: "The OLX Buyer Who Sent a 'Collect Request' to Send Advance",
      hi: "सामान खरीदने के बहाने पैसे काटने वाली रिक्वेस्ट",
      mr: "वस्तू खरेदीच्या बहाण्याने पैसे लाटणारी रिक्वेस्ट",
    },
    summary: {
      en: "A buyer claimed he was paying ₹10,000 advance, but sent a request that took ₹10,000 away.",
      hi: "खरीदार ने कहा कि वह ₹10,000 बयाना भेज रहा है, पर उसने ऐसी रिक्वेस्ट भेजी जिससे उल्टे पैसे कट गए।",
      mr: "अ‍ॅडव्हान्स पाठवण्याच्या नावाखाली ₹१०,००० काढणारी रिक्वेस्ट पाठवली.",
    },
    story: {
      en: "Mrs. Kulkarni, 65, put an old sofa for sale online. A polite man called immediately, saying he loved the sofa and wanted to send a ₹10,000 advance through Google Pay. Moments later, a notification popped up on her phone saying 'Request from Amit: ₹10,000'. The caller said on the phone: 'Aaji, I have sent the money. Just tap Pay and type your UPI PIN to accept it into your account.' Confused by the word 'Pay', she entered her PIN. Instead of receiving ₹10,000, ₹10,000 was deducted from her account.",
      hi: "65 वर्षीय श्रीमती कुलकर्णी ने अपना पुराना सोफ़ा बेचने के लिए ऑनलाइन डाला। तुरंत एक व्यक्ति का कॉल आया जिसने कहा कि वह सोफ़ा खरीदना चाहता है और ₹10,000 बयाना गूगल पे से भेज रहा है। थोड़ी देर में उनके फ़ोन पर संदेश आया: 'अमित की ओर से ₹10,000 की रिक्वेस्ट'। कॉलर ने कहा: 'माजी, मैंने पैसे भेज दिए हैं, बस 'Pay' दबाकर अपना यूपीआई पिन डालिए ताकि पैसे आपके खाते में आ जाएँ।' उन्होंने पिन डाल दिया और पैसे आने के बजाय उनके खाते से ₹10,000 कट गए।",
      mr: "६५ वर्षांच्या श्रीमती कुलकर्णी यांनी जुना सोफा विकायला काढला. एका माणसाने फोन करून सोफा पसंत असल्याचे सांगितले आणि ₹१०,००० अ‍ॅडव्हान्स पाठवतो म्हणाला. लगेच फोनवर 'अमितकडून ₹१०,००० ची रिक्वेस्ट' असा मेसेज आला. तो म्हणाला: 'आजी, मी पैसे पाठवले आहेत, फक्त 'Pay' दाबून तुमचा यूपीआय पिन टाका म्हणजे पैसे खात्यात येतील.' त्यांनी पिन टाकताच पैसे येण्याऐवजी खात्यातून ₹१०,००० निघून गेले.",
    },
    warningSigns: {
      en: [
        "The screen said 'Pay' and asked for a UPI PIN.",
        "The buyer was eager to pay advance without even seeing the item in person.",
        "The caller kept rushing her on the phone: 'Press Pay now, enter PIN now'.",
      ],
      hi: [
        "स्क्रीन पर 'Pay' (भुगतान करें) लिखा था और यूपीआई पिन माँगा गया।",
        "सामान बिना देखे ही बयाना देने की बहुत जल्दबाज़ी दिखाई।",
        "फ़ोन पर लगातार दबाव बनाया: 'जल्दी पिन डालिए'।",
      ],
      mr: [
        "स्क्रीनवर 'Pay' लिहिले होते आणि यूपीआय पिन मागितला.",
        "वस्तू प्रत्यक्ष न पाहताच आगाऊ पैसे देण्याची घाई केली.",
        "फोनवर सतत घाई केली: 'लगेच पिन टाका'.",
      ],
    },
    whatWentWrong: {
      en: "Entering a UPI PIN NEVER receives money. A PIN is only used to AUTHORIZE money leaving your account.",
      hi: "यूपीआई पिन डालने से कभी पैसे नहीं आते। पिन केवल पैसे भेजने के लिए होता है।",
      mr: "यूपीआय पिन टाकल्याने कधीही पैसे येत नाहीत. पिन फक्त पैसे पाठवण्यासाठी असतो.",
    },
    shouldHaveDone: {
      en: [
        "Remember: To receive money, you do NOT touch your phone or enter any PIN.",
        "Reject any payment request that asks for your PIN.",
        "Wait for the bank's SMS confirming credit before believing any payment.",
      ],
      hi: [
        "याद रखें: पैसे आने पर आपको फ़ोन पर कोई पिन नहीं डालना होता।",
        "जिस भी स्क्रीन पर पिन माँगा जाए, उसे तुरंत रद्द (Decline) कर दें।",
        "जब तक बैंक से पैसे जमा होने का एसएमएस न आए, भरोसा न करें।",
      ],
      mr: [
        "लक्षात ठेवा: पैसे मिळताना फोनवर कोणताही पिन टाकावा लागत नाही.",
        "पिन विचारणाऱ्या कोणत्याही विनंतीला नकार (Decline) द्या.",
        "बँकेकडून पैसे जमा झाल्याचा अधिकृत एसएमएस येईपर्यंत विश्वास ठेवू नका.",
      ],
    },
    whatToDoIfHappened: {
      en: [
        "Call 1930 immediately to register a cyber fraud complaint.",
        "Open your UPI app, tap on the transaction and click 'Report Fraud / Dispute'.",
        "Block the scammer's number on WhatsApp and Phone.",
      ],
      hi: [
        "तुरंत 1930 पर कॉल करके ठगी की शिकायत दर्ज कराएँ।",
        "पेमेंट ऐप में उसी लेन-देन पर जाकर 'Report Fraud' (धोखाधड़ी की रिपोर्ट) दर्ज करें।",
        "ठग का नंबर ब्लॉक कर दें।",
      ],
      mr: [
        "ताबडतोब १९३० वर कॉल करून सायबर तक्रार नोंदवा.",
        "यूपीआय अ‍ॅपमध्ये त्या व्यवहारावर जाऊन तक्रार (Report Fraud) नोंदवा.",
        "त्या भामट्याचा नंबर ब्लॉक करा.",
      ],
    },
    keyLesson: {
      en: "PIN = Pay. No PIN is ever needed to receive money.",
      hi: "पिन यानी पैसे देना। पैसे लेने के लिए कभी पिन की ज़रूरत नहीं होती।",
      mr: "पिन म्हणजे पैसे देणे. पैसे स्वीकारण्यासाठी कधीही पिन लागत नाही.",
    },
    difficulty: "beginner",
    quizId: "quiz-scams",
    video: "i7DcdpKxPsA",
  },
  {
    id: "story-electricity-bill",
    categoryId: "electricity",
    title: {
      en: "The Midnight Electricity Cut Threat SMS",
      hi: "आज रात बिजली कटने का डरावना एसएमएस",
      mr: "आज रात्री वीज कापण्याचा भीतीदायक एसएमएस",
    },
    summary: {
      en: "An SMS said power would be disconnected at 9:30 PM. An 'officer' asked for a ₹10 test recharge to steal bank details.",
      hi: "एसएमएस में लिखा था कि आज रात बिजली कट जाएगी। बात करने पर ₹10 का टेस्ट रिचार्ज करवाकर खाता खाली कर दिया।",
      mr: "रात्री वीज कापली जाईल असा मेसेज आला. १० रुपयांचे रिचार्ज करण्याच्या बहाण्याने पैसे लाटले.",
    },
    story: {
      en: "Mr. Joshi, 72, received an SMS at 6 PM: 'Dear Consumer, your electricity power will be disconnected tonight at 9:30 PM because previous month bill was not updated. Please immediately contact electricity officer at 98765xxxxx.' Worried that his lights and fridge would shut down, he called the number. The man spoke authoritatively: 'Sir, our system shows ₹11 unpaid. Download this quick support app and pay ₹10 online so the power cut is cancelled.' When Mr. Joshi entered his debit card details into the link, the scammer stole his card credentials and withdrew ₹30,000.",
      hi: "72 वर्षीय श्री जोशी को शाम 6 बजे एक एसएमएस मिला: 'प्रिय उपभोक्ता, आपका बिजली कनेक्शन आज रात 9:30 बजे काट दिया जाएगा क्योंकि पुराना बिल अपडेट नहीं है। तुरंत बिजली अधिकारी 98765xxxxx पर बात करें।' अंधेरे के डर से उन्होंने तुरंत उस नंबर पर बात की। सामने वाले ने कहा: 'सर, सिस्टम में ₹11 बकाया दिख रहे हैं। मैं एक लिंक भेज रहा हूँ, उसपर ₹10 का भुगतान कर दीजिए तो कनेक्शन नहीं कटेगा।' जैसे ही जोशी जी ने लिंक पर एटीएम कार्ड का विवरण डाला, ठग ने उनके कार्ड से ₹30,000 उड़ा लिए।",
      mr: "७२ वर्षांच्या जोशींना संध्याकाळी मेसेज आला: 'तुमचे वीजबिल भरलेले नसल्याने आज रात्री ९:३० वाजता वीज कापली जाईल. त्वरित वीज अधिकारी ९८७६५xxxxx या नंबरवर संपर्क करा.' अंधाराच्या भीतीने त्यांनी फोन लावला. तो माणूस म्हणाला: 'सर, फक्त ₹१० चे ऑनलाइन पेमेंट करा म्हणजे वीज कापली जाणार नाही.' जोशींनी त्याने दिलेल्या लिंकवर एटीएम कार्डची माहिती टाकताच खात्यातून ₹३०,००० गायब झाले.",
    },
    warningSigns: {
      en: [
        "Threatening night disconnection time (9:30 PM) to create panic.",
        "SMS sent from an unknown personal mobile number, not the electricity board's short code (like MSEB or BSES).",
        "Asked to install an app or click an unknown link for a tiny ₹10 fee.",
      ],
      hi: [
        "रात के समय बिजली काटने की धमकी देकर डराना।",
        "सरकारी विभाग के कोड के बजाय किसी सामान्य मोबाइल नंबर से एसएमएस आना।",
        "मात्र ₹10 के लिए कोई ऐप डाउनलोड करवाने या अनजान लिंक पर कार्ड नंबर माँगना।",
      ],
      mr: [
        "रात्री वीज कापण्याची भीती दाखवून घबराट पसरवणे.",
        "वीज मंडळाच्या नावाऐवजी वैयक्तिक मोबाईल नंबरवरून मेसेज येणे.",
        "केवळ ₹१० साठी अनोळखी अ‍ॅप इन्स्टॉल करायला सांगणे किंवा लिंक देणे.",
      ],
    },
    whatWentWrong: {
      en: "Electricity boards give formal written notices and never cut power at night via single SMS. The scammer used the fear of darkness to bypass critical thinking.",
      hi: "बिजली विभाग हमेशा लिखित नोटिस देता है और रात में इस तरह कभी बिजली नहीं काटता। ठग ने अंधेरे के डर का फ़ायदा उठाया।",
      mr: "वीज मंडळ लेखी नोटीस देते, रात्री अशा प्रकारे मेसेज पाठवून वीज कापत नाही. अंधाराच्या भीतीने घाईत चूक झाली.",
    },
    shouldHaveDone: {
      en: [
        "Check your last paid electricity receipt or bill on the official provider app.",
        "Never call mobile numbers given in suspicious warning SMS messages.",
        "Ask a family member to verify bill status before reacting.",
      ],
      hi: [
        "अपने पिछले महीने के बिल की रसीद देखें या आधिकारिक ऐप पर बकाया जाँचें।",
        "एसएमएस में दिए गए किसी भी अनजान मोबाइल नंबर पर कभी कॉल न करें।",
        "कोई भी कदम उठाने से पहले परिवार के किसी सदस्य से बात करें।",
      ],
      mr: [
        "मागील महिन्याची वीजबिल पावती तपासा किंवा अधिकृत अ‍ॅपवर शिल्लक पाहा.",
        "मेसेजमध्ये दिलेल्या अनोळखी नंबरवर कधीही फोन करू नका.",
        "घाबरून जाण्यापूर्वी कुटुंबातील सदस्यांशी बोला.",
      ],
    },
    whatToDoIfHappened: {
      en: [
        "Immediately block your debit card by calling the bank's toll-free number.",
        "Dial 1930 to report the cyber crime.",
        "Forward the fraud SMS to 1909 (Spam reporting) to help authorities block the number.",
      ],
      hi: [
        "बैंक को कॉल करके तुरंत अपना एटीएम कार्ड ब्लॉक करवाएँ।",
        "1930 पर कॉल करके साइबर अपराध की शिकायत दर्ज करें।",
        "इस फ़र्ज़ी एसएमएस को 1909 पर फ़ॉरवर्ड करें ताकि वह नंबर बंद हो सके।",
      ],
      mr: [
        "बँकेला फोन करून तात्काळ तुमचे एटीएम कार्ड ब्लॉक करा.",
        "१९३० वर फोन करून सायबर फसवणुकीची तक्रार नोंदवा.",
        "तो बनावट मेसेज १९०९ वर फॉरवर्ड करा जेणेकरून तो नंबर बंद केला जाईल.",
      ],
    },
    keyLesson: {
      en: "Government utility services never threaten sudden midnight disconnection via an SMS with a personal phone number.",
      hi: "बिजली या पानी विभाग कभी भी किसी व्यक्तिगत मोबाइल नंबर से अचानक कनेक्शन काटने की धमकी नहीं देता।",
      mr: "वीज किंवा पाणी मंडळ कधीही वैयक्तिक मोबाईल नंबरवरून अचानक वीज कापण्याची धमकी देत नाही.",
    },
    difficulty: "beginner",
    quizId: "quiz-scams",
  },
  {
    id: "story-digital-arrest",
    categoryId: "courier",
    title: {
      en: "The Fake Police Video Call & 'Digital Arrest' Scam",
      hi: "नकली पुलिस और 'डिजिटल अरेस्ट' की धमकी",
      mr: "बनावट पोलीस आणि 'डिजिटल अरेस्ट'ची धमकी",
    },
    summary: {
      en: "Scammers in fake police uniforms on Skype threatened an elderly man with arrest over a fake parcel.",
      hi: "नकली पुलिस की वर्दी पहनकर वीडियो कॉल पर डराया कि आपके नाम से नशीला पार्सल मिला है और पैसे ट्रांसफर करवाए।",
      mr: "पोलीस गणवेशातील भामट्यांनी व्हिडिओ कॉलवर पार्सलचे खोटे कारण सांगून घाबरवले.",
    },
    story: {
      en: "Retired professor Mr. Deshmukh, 74, received a call from someone claiming to be FedEx courier. The caller said a parcel in Mr. Deshmukh's name containing passports and illegal drugs was seized at Mumbai airport. Before he could speak, the call was transferred to a 'CBI Police Officer'. The man appeared on a Skype video call wearing an official-looking police uniform with a police station backdrop. He declared: 'You are placed under Digital Arrest. Do not leave this room or tell anyone, or police will arrive at your home.' Terrified, Mr. Deshmukh transferred ₹3,50,000 into a 'court verification account' to prove his innocence.",
      hi: "74 वर्षीय सेवानिवृत्त प्रोफ़ेसर श्री देशमुख को एक कूरियर कंपनी के नाम से कॉल आया। कॉलर ने कहा कि उनके नाम से भेजा गया एक पार्सल मुंबई हवाई अड्डे पर पकड़ा गया है जिसमें नशीला सामान है। इसके बाद कॉल को तथाकथित 'सीबीआई अधिकारी' को जोड़ दिया गया। वीडियो कॉल पर एक व्यक्ति पुलिस की वर्दी में दिखा जिसके पीछे थाने जैसा बैनर लगा था। उसने कड़क आवाज़ में कहा: 'आपको डिजिटल अरेस्ट किया जाता है। कमरे से बाहर न निकलें और न किसी को बताएँ, वरना तुरंत गाड़ी भेजकर उठा लिया जाएगा।' अत्यधिक डर के कारण देशमुख जी ने अपनी जमा पूँजी से ₹3,50,000 उनके बताए खाते में जमा कर दिए।",
      mr: "७४ वर्षांच्या निवृत्त प्राध्यापक श्री. देशमुखांना कुरिअर कंपनीच्या नावाने फोन आला. तुमच्या नावाच्या पार्सलमध्ये बेकायदेशीर वस्तू सापडल्याचे सांगण्यात आले. नंतर फोन एका 'पोलीस अधिकाऱ्याला' जोडला गेला. व्हिडिओ कॉलवर पोलीस गणवेश घातलेला माणूस दिसला. तो म्हणाला: 'तुम्हाला डिजिटल अरेस्ट केले आहे. खोलीबाहेर पडू नका, कोणाशी बोलू नका.' प्रचंड घाबरून देशमुखांनी निर्दोष सिद्ध होण्यासाठी ₹३,५०,००० त्यांच्या खात्यात पाठवले.",
    },
    warningSigns: {
      en: [
        "Used terms like 'Digital Arrest' — there is NO legal concept of digital arrest in Indian law.",
        "Demanded secrecy: 'Do not tell your family, keep the video camera on'.",
        "Demanded transferring money to a 'government verification account'.",
      ],
      hi: [
        "'डिजिटल अरेस्ट' शब्द का इस्तेमाल — भारतीय कानून में डिजिटल अरेस्ट जैसा कोई नियम नहीं है।",
        "गोपनीयता रखने का दबाव: 'परिवार को न बताएँ, कैमरा चालू रखें'।",
        "जाँच के नाम पर सरकारी खाते में पैसे ट्रांसफर करने की माँग की।",
      ],
      mr: [
        "'डिजिटल अरेस्ट' शब्दाचा वापर — भारतीय कायद्यात असा कोणताही प्रकार नाही.",
        "गोपनीयतेचा दबाव: 'कुटुंबाला सांगू नका, कॅमेरा चालू ठेवा'.",
        "तपासणीच्या नावाखाली पैशांची मागणी केली.",
      ],
    },
    whatWentWrong: {
      en: "Police and investigating agencies never conduct trials over video calls, and NEVER ask citizens to transfer money to prove innocence.",
      hi: "पुलिस कभी भी वीडियो कॉल पर पूछताछ या गिरफ़्तारी नहीं करती, और न ही किसी से पैसे जमा करने को कहती है।",
      mr: "पोलीस कधीही व्हिडिओ कॉलवर तपास किंवा अटक करत नाहीत आणि निर्दोषत्वासाठी पैसे मागत नाहीत.",
    },
    shouldHaveDone: {
      en: [
        "Disconnect the video call immediately. Real police visit in person with official paperwork.",
        "Immediately walk to your nearest local police station or call 112.",
        "Talk openly with your children or neighbors.",
      ],
      hi: [
        "तुरंत वीडियो कॉल काट दें। असली पुलिस कभी ऐसे कॉल नहीं करती, वे खुद घर आते हैं।",
        "नज़दीकी थाने जाएँ या सीधे 112 पर कॉल करके बताएं।",
        "अपने बच्चों और पड़ोसियों को तुरंत इस बात की जानकारी दें।",
      ],
      mr: [
        "लगेच व्हिडिओ कॉल बंद करा. खरी पोलीस यंत्रणा प्रत्यक्ष नोटीस घेऊन येते.",
        "जवळच्या पोलीस ठाण्यात जा किंवा ११२ वर संपर्क साधा.",
        "कुटुंबातील व्यक्तींना किंवा शेजाऱ्यांना लगेच सांगा.",
      ],
    },
    whatToDoIfHappened: {
      en: [
        "Dial 1930 without delay — cyber police can freeze the destination accounts.",
        "File a complaint at the nearest police station under cyber fraud and extortion.",
        "Preserve the video call screenshot and bank transfer transaction slips.",
      ],
      hi: [
        "बिना एक मिनट गँवाए 1930 पर कॉल करें ताकि भेजा गया पैसा ज़ब्त कराया जा सके।",
        "नज़दीकी पुलिस स्टेशन में धोखाधड़ी और ब्लैकमेलिंग की प्राथमिकी (FIR) दर्ज करवाएँ।",
        "कॉल के स्क्रीनशॉट और बैंक रसीद को सुरक्षित रखें।",
      ],
      mr: [
        "क्षणभराचाही विलंब न करता १९३० वर फोन करा जेणेकरून पैसे गोठवता येतील.",
        "जवळच्या पोलीस ठाण्यात जाऊन फसवणूक व खंडणीची रीतसर तक्रार दाखल करा.",
        "व्हिडिओ कॉलचे स्क्रीनशॉट आणि बँकेचे तपशील जपून ठेवा.",
      ],
    },
    keyLesson: {
      en: "There is NO such thing as 'Digital Arrest'. Real law enforcement never asks for money transfers over video calls.",
      hi: "कानून में 'डिजिटल अरेस्ट' नाम की कोई चीज़ नहीं है। पुलिस कभी वीडियो कॉल पर पैसे नहीं माँगती।",
      mr: "कायद्यात 'डिजिटल अरेस्ट' असा कोणताही प्रकार नाही. पोलीस कधीही व्हिडिओ कॉलवर पैसे मागत नाहीत.",
    },
    difficulty: "comfortable",
    quizId: "quiz-scams",
  },
  {
    id: "story-fake-customer-care",
    categoryId: "customer-care",
    title: {
      en: "The Fake Customer Care Number Found on Google Search",
      hi: "गूगल पर खोजा गया नकली कस्टमर केयर नंबर",
      mr: "गुगलवर शोधलेला बनावट कस्टमर केअर नंबर",
    },
    summary: {
      en: "When an LPG gas cylinder booking failed, searching Google led directly to a scammer's mobile number.",
      hi: "रसोई गैस बुकिंग न होने पर गूगल से नंबर निकाला, जो ठग का निकला।",
      mr: "गॅस बुकिंगची अडचण आल्यावर गुगलवरून नंबर शोधला, तो भामट्याचा निघाला.",
    },
    story: {
      en: "Mrs. Mehra, 66, wanted to check why her LPG gas cylinder had not arrived. She opened Google and typed 'Indane Gas customer care number'. The very first result showed a mobile number in large text. She called it. The person who answered said: 'Yes madam, Indane support desk. Your delivery is pending because of a ₹5 verification issue. Please install this QuickSupport app on your phone so we can update your address.' As soon as she installed the app, the scammer could see her entire screen. He asked her to open her mobile banking app to pay ₹5. He watched her type her PIN and transferred ₹50,000 away.",
      hi: "66 वर्षीय श्रीमती मेहरा का गैस सिलेंडर नहीं आया था। उन्होंने गूगल खोला और लिखा 'गैस एजेंसी कस्टमर केयर नंबर'। सबसे ऊपर एक मोबाइल नंबर दिखा। उन्होंने उसपर कॉल किया। कॉलर बोला: 'हाँ मैडम, गैस सहायता केंद्र। आपका सिलेंडर रुका हुआ है क्योंकि ₹5 का पता सत्यापन नहीं हुआ है। आप अपने फ़ोन में QuickSupport ऐप डाल लीजिए, हम यहाँ से ठीक कर देते हैं।' जैसे ही उन्होंने ऐप डाला, ठग को उनकी पूरी स्क्रीन दिखने लगी। उसने कहा कि ₹5 का भुगतान करें। जैसे ही उन्होंने बैंक पिन डाला, ठग ने देख लिया और ₹50,000 निकाल लिए।",
      mr: "६६ वर्षांच्या श्रीमती मेहरांचा गॅस सिलिंडर आला नव्हता. त्यांनी गुगलवर 'गॅस कस्टमर केअर' शोधले. सर्वात वर एक मोबाईल नंबर दिसला. त्यावर फोन केला असता तो माणूस म्हणाला: 'मॅडम, ₹५ चा व्हेरिफिकेशन प्रॉब्लेम आहे. QuickSupport अ‍ॅप इन्स्टॉल करा.' अ‍ॅप इन्स्टॉल करताच भामट्याला त्यांची पूर्ण स्क्रीन दिसू लागली. त्याने ₹५ भरण्यासाठी बँक अ‍ॅप उघडायला लावले, पिन पाहिला आणि ₹५०,००० लंपास केले.",
    },
    warningSigns: {
      en: [
        "The customer care number was an ordinary 10-digit mobile number, not an official 1800 toll-free line.",
        "Asked to install a screen-sharing app (QuickSupport / AnyDesk).",
        "Asked to open a banking app while someone was connected remotely.",
      ],
      hi: [
        "कस्टमर केयर नंबर 1800 वाले टोल-फ्री के बजाय सामान्य 10 अंकों का मोबाइल नंबर था।",
        "स्क्रीन शेयरिंग ऐप (QuickSupport या AnyDesk) इंस्टॉल करने को कहा।",
        "फ़ोन पर किसी के जुड़े रहने के दौरान बैंक ऐप खोलने को कहा।",
      ],
      mr: [
        "टोल-फ्री नंबरऐवजी (१८००) साध्या १० अंकी मोबाईल नंबरवरून बोलणे झाले.",
        "स्क्रीन पाहणारे अ‍ॅप (QuickSupport किंवा AnyDesk) इन्स्टॉल करायला सांगितले.",
        "फोनवर अनोळखी व्यक्ती असताना बँक अ‍ॅप उघडण्यास सांगितले.",
      ],
    },
    whatWentWrong: {
      en: "Anyone can post fake phone numbers on Google Maps and search results. Genuine companies NEVER ask you to install screen-viewing apps to solve an issue.",
      hi: "गूगल पर कोई भी व्यक्ति फ़र्ज़ी नंबर डाल सकता है। असली कंपनियाँ कभी भी स्क्रीन देखने वाला ऐप इंस्टॉल नहीं करवातीं।",
      mr: "गुगलवर कोणीही बनावट नंबर टाकू शकते. अधिकृत कंपन्या समस्या सोडवण्यासाठी स्क्रीन शेअरिंग अ‍ॅप इन्स्टॉल करायला सांगत नाहीत.",
    },
    shouldHaveDone: {
      en: [
        "Always use the customer care number printed on your physical LPG passbook or gas book receipt.",
        "NEVER install AnyDesk, TeamViewer or QuickSupport at the instruction of a phone caller.",
        "If someone asks to see your screen, hang up immediately.",
      ],
      hi: [
        "हमेशा अपनी गैस पासबुक या बिल पर छपे आधिकारिक नंबर पर ही कॉल करें।",
        "फ़ोन कॉल पर किसी के कहने पर AnyDesk या QuickSupport कभी इंस्टॉल न करें।",
        "जो भी आपकी स्क्रीन देखने की बात करे, तुरंत कॉल काट दें।",
      ],
      mr: [
        "नेहमी जुन्या गॅस पासबुकवर किंवा अधिकृत पावतीवर दिलेला नंबरच वापरा.",
        "फोनवरील व्यक्तीच्या सांगण्यावरून AnyDesk किंवा QuickSupport कधीही इन्स्टॉल करू नका.",
        "स्क्रीन पाहण्याची मागणी करणाऱ्याचा फोन तात्काळ कट करा.",
      ],
    },
    whatToDoIfHappened: {
      en: [
        "Uninstall the remote app immediately and turn off Wi-Fi/Mobile Data.",
        "Call your bank immediately to block net-banking and change passwords.",
        "Call 1930 to report the unauthorized transaction.",
      ],
      hi: [
        "उस ऐप (QuickSupport आदि) को तुरंत अनइंस्टॉल करें और फ़ोन का इंटरनेट बंद कर दें।",
        "बैंक को तुरंत कॉल करके नेट बैंकिंग ब्लॉक कराएँ और पासवर्ड बदलें।",
        "1930 पर कॉल करके धोखाधड़ी की शिकायत दर्ज कराएँ।",
      ],
      mr: [
        "ते रिमोट अ‍ॅप त्वरित अनइन्स्टॉल करा आणि इंटरनेट बंद करा.",
        "बँकेला फोन करून नेट बँकिंग ब्लॉक करा आणि पासवर्ड बदला.",
        "१९३० वर फोन करून अनधिकृत व्यवहाराची तक्रार नोंदवा.",
      ],
    },
    keyLesson: {
      en: "Google search numbers are not verified. Always use numbers printed on your physical bills or official apps.",
      hi: "गूगल सर्च पर मिलने वाले नंबर हमेशा सही नहीं होते। हमेशा अपनी बिल रसीद या पासबुक पर छपे नंबर पर ही भरोसा करें।",
      mr: "गुगल सर्चवरील सर्व नंबर खरे नसतात. नेहमी अधिकृत पावती किंवा पासबुकवरील नंबरच वापरा.",
    },
    difficulty: "comfortable",
    quizId: "quiz-scams",
  },
  {
    id: "story-whatsapp-impersonation",
    categoryId: "whatsapp-impersonation",
    title: {
      en: "The WhatsApp 'Hi Mom, I Lost My Phone' Scam",
      hi: "व्हाट्सएप पर 'मम्मी, नया नंबर है' कहकर पैसे माँगना",
      mr: "व्हॉट्सअ‍ॅपवर 'आई, नवा नंबर आहे' म्हणून पैसे मागणे",
    },
    summary: {
      en: "A WhatsApp message pretended to be a son in trouble needing ₹25,000 urgently, warning 'don't call'.",
      hi: "अनजान नंबर से संदेश आया कि बेटा मुसीबत में है और उसे तुरंत पैसे चाहिए, और 'कॉल मत करना' लिखा।",
      mr: "मुलगा संकटात असल्याचे सांगून तातडीने ₹२५,००० मागितले आणि 'फोन करू नको' असा मेसेज केला.",
    },
    story: {
      en: "Mrs. Verma, 67, received a WhatsApp message from an unknown number: 'Hi Mum, I dropped my phone in water. This is my friend's number. I am at the mechanic and need ₹25,000 urgently to pay for car repair. Please UPI to this number right away. Don't call on this number as microphone is broken.' Anxious for her son's safety, she was about to send the money. Luckily, she paused and dialed her son's usual number that was saved in her contacts. Her son answered normally from his office, completely unaware of the message. It was a complete fraud.",
      hi: "67 वर्षीय श्रीमती वर्मा को एक अनजान नंबर से व्हाट्सएप संदेश आया: 'मम्मी, मेरा फ़ोन पानी में गिर गया। यह मेरे दोस्त का नंबर है। गाड़ी ख़राब हो गई है और मिस्त्री को देने के लिए तुरंत ₹25,000 चाहिए। कृपया इस नंबर पर तुरंत यूपीआई कर दो। इसपर कॉल मत करना क्योंकि इसका माइक ख़राब है।' बेटे की चिंता में वह पैसे भेजने ही वाली थीं, पर उन्होंने रुककर अपने बेटे के पुराने सहेजे हुए नंबर पर फ़ोन मिलाया। बेटा अपने दफ़्तर में आराम से काम कर रहा था और उसे इस संदेश की कोई जानकारी नहीं थी। यह एक सुनियोजित ठगी थी।",
      mr: "६७ वर्षांच्या श्रीमती वर्मांना अनोळखी नंबरवरून व्हॉट्सअ‍ॅप मेसेज आला: 'आई, माझा फोन पाण्यात पडला. हा मित्राचा नंबर आहे. गाडी दुरुस्तीसाठी त्वरित ₹२५,००० लागतील. या नंबरवर लगेच यूपीआय कर. फोन करू नकोस, माइक खराब आहे.' त्या पैसे पाठवणारच होत्या, पण त्यांनी मुलाच्या नेहमीच्या नंबरवर फोन लावला. मुलगा ऑफिसमध्ये होता आणि त्याला काहीच माहिती नव्हते. ती निव्वळ फसवणूक होती.",
    },
    warningSigns: {
      en: [
        "Came from an unknown new number pretending to be a close family member.",
        "Specific excuse not to call: 'phone broken', 'don't call, only text'.",
        "High emotional urgency: 'need money right now for emergency'.",
      ],
      hi: [
        "अनजान नंबर से आया और करीबी रिश्तेदार होने का दावा किया।",
        "फ़ोन न उठाने का बहाना बनाया: 'माइक ख़राब है, कॉल मत करना केवल मैसेज करो'।",
        "अत्यधिक जल्दबाज़ी: 'अभी तुरंत पैसे भेजो'।",
      ],
      mr: [
        "अनोळखी नंबरवरून जवळचा नातेवाईक असल्याचे भासवले.",
        "फोन न करण्याचा बहाणा केला: 'माइक खराब आहे, फक्त मेसेज कर'.",
        "भावनिक घाई केली: 'तातडीने पैसे पाठवा'.",
      ],
    },
    whatWentWrong: {
      en: "The scammer counted on parental emotion and worry overriding verification. Mrs. Verma saved herself by making a single direct phone call.",
      hi: "ठग को लगा कि माँ घबराकर बिना सोचे पैसे भेज देगी। पर वर्मा जी ने पुराने नंबर पर एक कॉल करके खुद को बचा लिया।",
      mr: "पालकांच्या काळजीचा गैरफायदा घेण्याचा डाव होता. एका साध्या फोन कॉलने वर्माजींचे पैसे वाचले.",
    },
    shouldHaveDone: {
      en: [
        "ALWAYS call the person on their existing saved number before sending a single rupee.",
        "Ask a personal family question that only your real child would know (e.g. 'What did we eat yesterday?').",
        "Never send money to an unknown number claiming to be family.",
      ],
      hi: [
        "एक रुपया भी भेजने से पहले हमेशा उनके पुराने सहेजे हुए नंबर पर कॉल करके बात करें।",
        "कोई ऐसा पारिवारिक सवाल पूछें जिसका जवाब केवल आपका असली बच्चा जानता हो।",
        "परिवार का नाम लेकर आए किसी भी अनजान नंबर पर पैसे न भेजें।",
      ],
      mr: [
        "एक रुपयाही पाठवण्यापूर्वी नेहमी आधीपासून सेव्ह असलेल्या जुन्या नंबरवर फोन करा.",
        "फक्त आपल्या माणसालाच ठाऊक असलेला घरगुती प्रश्न विचारा.",
        "कुटुंबाचे नाव सांगणाऱ्या अनोळखी नंबरवर कधीही पैसे पाठवू नका.",
      ],
    },
    whatToDoIfHappened: {
      en: [
        "Call 1930 immediately to block the destination UPI account.",
        "Block and report the contact on WhatsApp.",
        "Alert other family members so they are not targeted with the same trick.",
      ],
      hi: [
        "तुरंत 1930 पर कॉल करके उस यूपीआई खाते को ब्लॉक करवाएँ।",
        "व्हाट्सएप पर उस नंबर को ब्लॉक और रिपोर्ट करें।",
        "परिवार के बाकी लोगों को भी सतर्क कर दें।",
      ],
      mr: [
        "लगेच १९३० वर कॉल करून तक्रार करा.",
        "व्हॉट्सअ‍ॅपवर त्या नंबरला ब्लॉक आणि रिपोर्ट करा.",
        "कुटुंबातील इतर सदस्यांनाही याची कल्पना द्या.",
      ],
    },
    keyLesson: {
      en: "Whenever a message says 'New number, urgent money, don't call' — ALWAYS call the old number first.",
      hi: "जब भी कोई कहे 'नया नंबर है, पैसे चाहिए, कॉल मत करना' — हमेशा पुराने नंबर पर फ़ोन करके जाँचें।",
      mr: "जेव्हा मेसेज येतो 'नवा नंबर आहे, पैसे हवेत, फोन करू नको' — तेव्हा आधी जुन्या नंबरवर फोन लावाच.",
    },
    difficulty: "beginner",
    quizId: "quiz-scams",
  },
  {
    id: "story-kbc-lottery",
    categoryId: "lottery",
    title: {
      en: "The WhatsApp KBC / Lucky Draw ₹25 Lakh Lottery Scam",
      hi: "व्हाट्सएप पर ₹25 लाख की केबीसी लॉटरी का झाँसा",
      mr: "व्हॉट्सअ‍ॅपवर २५ लाखांच्या केबीसी लॉटरीचे आमिष",
    },
    summary: {
      en: "A colorful WhatsApp audio message claimed an elderly lady won ₹25 Lakh, but needed to pay a ₹12,000 tax first.",
      hi: "व्हाट्सएप पर ऑडियो आया कि आपकी 25 लाख की लॉटरी लगी है, बस पहले ₹12,000 का सरकारी टैक्स जमा करना होगा।",
      mr: "कोणतीही लॉटरी न घेता २५ लाख जिंकल्याचा दावा करून ₹१२,००० कर मागितला.",
    },
    story: {
      en: "Mrs. Shinde, 70, received an image on WhatsApp with photos of Amitabh Bachchan and the KBC logo, along with an audio recording: 'Congratulations! Your SIM number has won ₹25,00,000 in the All India SIM Lucky Draw. To receive your cheque, please deposit ₹12,500 for government GST tax to Manager Rana Pratap at 99887xxxxx.' Excited by the thought of helping her children, she was ready to go to the bank to deposit the ₹12,500. Her granddaughter saw the message, smiled gently, and explained: 'Aaji, you never bought a lottery ticket. Real prizes never ask the winner to pay money first!'",
      hi: "70 वर्षीय श्रीमती शिंदे को व्हाट्सएप पर अमिताभ बच्चन और केबीसी के लोगो वाली एक तस्वीर और आवाज़ संदेश मिला: 'बधाई हो! आपके सिम नंबर ने 25 लाख की लॉटरी जीती है। चेक लेने के लिए मैनेजर राणा प्रताप के खाते में ₹12,500 का सरकारी टैक्स जमा करें।' अपने बच्चों की मदद की खुशी में वह पैसे जमा करने बैंक जाने लगीं। तभी उनकी पोती ने वह संदेश देखा और प्यार से समझाया: 'दादी, आपने कभी कोई लॉटरी टिकट नहीं खरीदा। असली इनाम में कभी जीतने वाले से पैसे नहीं माँगे जाते!'",
      mr: "७० वर्षांच्या श्रीमती शिंदेंना व्हॉट्सअ‍ॅपवर केबीसीचा फोटो आणि ऑडिओ आला: 'अभिनंदन! तुमच्या सिम नंबरला २५ लाखांची लॉटरी लागली आहे. चेक मिळवण्यासाठी ₹१२,५०० सरकारी टॅक्स भरा.' नातवाने तो मेसेज पाहिला आणि समजावले: 'आजी, तू कधी लॉटरीचे तिकीट घेतलेच नाहीस. खरे बक्षीस मिळताना कधीही आधी पैसे भरावे लागत नाहीत!'",
    },
    warningSigns: {
      en: [
        "You 'won' a prize in a contest or lottery you never entered.",
        "Asked to pay 'advance tax', 'GST', or 'processing fee' to receive your prize.",
        "Used famous TV logos and celebrity photos to look legitimate.",
      ],
      hi: [
        "ऐसी प्रतियोगिता या लॉटरी में इनाम जीतना जिसमें आपने कभी भाग ही नहीं लिया।",
        "इनाम पाने के लिए पहले 'टैक्स', 'जीएसटी' या 'फ़ाइल चार्ज' माँगना।",
        "अमिताभ बच्चन या टीवी शो के फ़ोटो लगाकर असली जैसा दिखाना।",
      ],
      mr: [
        "सहभाग न घेतलेल्या स्पर्धेत किंवा लॉटरीत बक्षीस लागल्याचा दावा.",
        "बक्षीस मिळण्यासाठी आधी 'टॅक्स' किंवा 'शुल्क' भरायला सांगणे.",
        "टीव्ही शो आणि प्रसिद्ध व्यक्तींच्या फोटोंचा गैरवापर.",
      ],
    },
    whatWentWrong: {
      en: "Scammers prey on the dream of helping family. Once you pay ₹12,500, they ask for ₹25,000 more and the 'prize' never exists.",
      hi: "ठग परिवार की मदद करने की बुज़ुर्गों की भावना का फ़ायदा उठाते हैं। एक बार पैसे देने पर वे और माँगते रहते हैं और कोई लॉटरी नहीं मिलती।",
      mr: "एकदा ₹१२,५०० भरले की ते आणखी पैशांची मागणी करतात. प्रत्यक्षात कोणतीही लॉटरी अस्तित्वात नसते.",
    },
    shouldHaveDone: {
      en: [
        "Delete the message immediately. Real lotteries deduct taxes at source, they NEVER ask for deposits.",
        "Never send money to claim any prize or lucky draw.",
        "Block the unknown sender on WhatsApp.",
      ],
      hi: [
        "संदेश को तुरंत डिलीट कर दें। असली इनाम में कभी पहले पैसे नहीं माँगे जाते।",
        "किसी भी इनाम या लकी ड्रॉ के नाम पर एक रुपया भी न भेजें।",
        "व्हाट्सएप पर उस नंबर को ब्लॉक कर दें।",
      ],
      mr: [
        "तो मेसेज लगेच डिलीट करा. खऱ्या बक्षीसासाठी कधीही आगाऊ रक्कम मागत नाहीत.",
        "कोणत्याही बक्षिसाच्या आमिषाने पैसे पाठवू नका.",
        "त्या अनोळखी नंबरला व्हॉट्सअ‍ॅपवर ब्लॉक करा.",
      ],
    },
    whatToDoIfHappened: {
      en: [
        "Report the transaction to 1930 and your bank immediately.",
        "Stop all further communication with the scammer; do not send any more money.",
        "Report the fraud number on the Chakshu portal (sancharsaathi.gov.in).",
      ],
      hi: [
        "1930 और अपने बैंक को तुरंत लेन-देन की जानकारी दें।",
        "ठग से तुरंत बात करना बंद करें और उसे कोई और पैसे न भेजें।",
        "संचार साथी पोर्टल (Chakshu) पर उस नंबर की रिपोर्ट करें।",
      ],
      mr: [
        "बँकेला आणि १९३० ला त्वरित व्यवहाराची माहिती द्या.",
        "भामट्याशी बोलणे पूर्णपणे थांबवा, आणखी पैसे देऊ नका.",
        "संचार साथी (Chakshu) पोर्टलवर त्या नंबरची तक्रार करा.",
      ],
    },
    keyLesson: {
      en: "If you didn't buy a ticket, you didn't win. Real prizes NEVER ask you to pay money first.",
      hi: "अगर टिकट नहीं खरीदा, तो लॉटरी नहीं लग सकती। असली इनाम में कभी पहले पैसे नहीं माँगे जाते।",
      mr: "तिकीट काढले नसेल तर लॉटरी लागूच शकत नाही. खरे बक्षीस कधीही आधी पैसे मागत नाही.",
    },
    difficulty: "beginner",
    quizId: "quiz-scams",
  },
];

export function storiesForCategory(catId: string) {
  return SCAM_STORIES.filter((s) => s.categoryId === catId);
}

export function getStory(id: string) {
  return SCAM_STORIES.find((s) => s.id === id);
}

/**
 * Short reference cards for the most frequent scam patterns.
 * Shown one at a time in the Stay Safe tab (cursor in app state).
 */
export type CommonScam = {
  id: string;
  emoji: string;
  name: Localized;
  summary: Localized;
  redFlags: LocalizedList;
  quickTip: Localized;
  difficulty: "beginner" | "comfortable" | "confident";
};

export const COMMON_SCAMS: CommonScam[] = [
  {
    id: "scam-otp",
    emoji: "🔑",
    name: { en: "OTP sharing fraud", hi: "ओटीपी साझा करने की ठगी", mr: "ओटीपी शेअर करण्याची फसवणूक" },
    summary: {
      en: "A caller pretending to be from your bank asks for the OTP that just arrived on your phone, saying it is needed to 'verify' or 'unblock' your account.",
      hi: "बैंक से बताकर कॉलर आपसे वही ओटीपी माँगता है जो अभी आपके फ़ोन पर आया, और कहता है कि खाता 'वेरिफ़ाई' या 'अनब्लॉक' करने के लिए ज़रूरी है।",
      mr: "बँकेतून बोलत असल्याचे सांगून कॉलर तुमच्या फोनवर आत्ता आलेला ओटीपी मागतो आणि खाते 'तपासण्यासाठी' किंवा 'अनब्लॉक' करण्यासाठी आवश्यक असल्याचे सांगतो.",
    },
    redFlags: {
      en: [
        "Banks and officers never ask for your OTP",
        "They hurry you: 'account will be blocked in 10 minutes'",
        "The OTP message itself says 'do not share this with anyone'",
      ],
      hi: [
        "बैंक या अधिकारी कभी भी ओटीपी नहीं माँगते",
        "वे जल्दी मचाते हैं: '10 मिनट में खाता बंद हो जाएगा'",
        "ओटीपी संदेश में ही लिखा होता है 'इसे किसी से साझा न करें'",
      ],
      mr: [
        "बँक किंवा अधिकारी कधीही ओटीपी मागत नाहीत",
        "ते घाई करतात: '10 मिनिटांत खाते बंद होईल'",
        "ओटीपी मेसेजमध्येच 'हे कोणालाही शेअर करू नका' असे लिहिले असते",
      ],
    },
    quickTip: {
      en: "An OTP means money is moving out. If anyone asks for it, hang up and call your bank branch.",
      hi: "ओटीपी का मतलब है कि पैसे बाहर जा रहे हैं। कोई भी माँगे, तो फ़ोन काट दें और बैंक शाखा में पूछें।",
      mr: "ओटीपी म्हणजे पैसे बाहेर जात आहेत. कोणीही मागितल्यास फोन ठेवा आणि बँक शाखेत विचारा.",
    },
    difficulty: "beginner",
  },
  {
    id: "scam-upi-collect",
    emoji: "💸",
    name: { en: "UPI 'collect request' trick", hi: "यूपीआई 'कलेक्ट रिक्वेस्ट' चाल", mr: "यूपीआय 'कलेक्ट रिक्वेस्ट' युक्ती" },
    summary: {
      en: "Someone sends you a UPI collect request that looks like money is coming in — but when you enter your PIN to 'accept' it, money actually goes out of your account.",
      hi: "कोई आपको यूपीआई रिक्वेस्ट भेजता है जो ऐसे दिखती है जैसे पैसे आ रहे हैं — पर 'स्वीकार' करने के लिए पिन डालते ही पैसे आपके खाते से कट जाते हैं।",
      mr: "कोणीतरी तुम्हाला यूपीआय रिक्वेस्ट पाठवतो जी पैसे येत आहेत अशी दिसते — पण 'स्वीकारण्यासाठी' पिन टाकताच तुमच्या खात्यातून पैसे जातात.",
    },
    redFlags: {
      en: [
        "A request arrives from an unknown person",
        "It looks like money is coming in, but your PIN is asked",
        "You are told to act fast before the request 'expires'",
      ],
      hi: [
        "अनजान व्यक्ति से रिक्वेस्ट आती है",
        "पैसे आते दिखते हैं, पर आपका पिन माँगा जाता है",
        "रिक्वेस्ट 'खत्म' होने से पहले जल्दी करने को कहा जाता है",
      ],
      mr: [
        "अनोळखी व्यक्तीकडून रिक्वेस्ट येते",
        "पैसे येत आहेत असे दिसते, पण तुमचा पिन मागितला जातो",
        "रिक्वेस्ट 'संपण्यापूर्वी' लवकर करण्यास सांगितले जाते",
      ],
    },
    quickTip: {
      en: "Receiving money never needs your PIN. If a request asks for your PIN, it is a scam.",
      hi: "पैसे पाने के लिए कभी पिन नहीं लगता। अगर रिक्वेस्ट में पिन माँगा जाए, तो वह ठगी है।",
      mr: "पैसे मिळवण्यासाठी कधीही पिन लागत नाही. रिक्वेस्टमध्ये पिन मागितल्यास ती फसवणूक आहे.",
    },
    difficulty: "comfortable",
  },
  {
    id: "scam-qr",
    emoji: "🔳",
    name: { en: "QR code scan scam", hi: "क्यूआर कोड स्कैन ठगी", mr: "क्यूआर कोड स्कॅन फसवणूक" },
    summary: {
      en: "A buyer or caller sends you a QR code and says you must scan it to receive a payment or refund. Scanning it and entering your PIN sends money to them instead.",
      hi: "खरीदार या कॉलर आपको क्यूआर कोड भेजकर कहता है कि भुगतान या रिफ़ंड पाने के लिए इसे स्कैन करें। स्कैन करके पिन डालने पर पैसे उन्हें चले जाते हैं।",
      mr: "खरेदीदार किंवा कॉलर तुम्हाला क्यूआर कोड पाठवून म्हणतो की पेमेंट किंवा परतावा मिळण्यासाठी हा स्कॅन करा. स्कॅन करून पिन टाकल्यास पैसे त्यांना जातात.",
    },
    redFlags: {
      en: [
        "You are sent a QR code to receive money",
        "You are asked to enter your PIN after scanning",
        "The person is a stranger buying or refunding something online",
      ],
      hi: [
        "पैसे पाने के लिए आपको क्यूआर कोड भेजा जाता है",
        "स्कैन के बाद पिन डालने को कहा जाता है",
        "व्यक्ति कोई अनजान खरीदार या रिफ़ंड देने वाला है",
      ],
      mr: [
        "पैसे मिळण्यासाठी तुम्हाला क्यूआर कोड पाठवला जातो",
        "स्कॅन केल्यावर पिन टाकायला सांगितले जाते",
        "ती व्यक्ती अनोळखी खरेदीदार किंवा परतावा देणारी असते",
      ],
    },
    quickTip: {
      en: "Scan + PIN always means money leaves your account. Never scan a code to receive money.",
      hi: "स्कैन + पिन का मतलब हमेशा पैसे कटना है। पैसे पाने के लिए कभी कोई कोड स्कैन न करें।",
      mr: "स्कॅन + पिन म्हणजे नेहमी पैसे जातात. पैसे मिळवण्यासाठी कधीही कोड स्कॅन करू नका.",
    },
    difficulty: "comfortable",
  },
  {
    id: "scam-kyc",
    emoji: "🏦",
    name: { en: "Fake KYC update", hi: "नकली केवाईसी अपडेट", mr: "बनावट केवायसी अपडेट" },
    summary: {
      en: "An SMS or call warns that your bank account will be blocked unless you update your KYC right now using a link or an app they send.",
      hi: "संदेश या कॉल में कहा जाता है कि अभी केवाईसी अपडेट नहीं की तो खाता बंद हो जाएगा, और एक लिंक या ऐप भेजा जाता है।",
      mr: "मेसेज किंवा कॉलमध्ये सांगितले जाते की आत्ता केवायसी अपडेट केली नाही तर खाते बंद होईल आणि एक लिंक किंवा अ‍ॅप पाठवली जाते.",
    },
    redFlags: {
      en: [
        "A link arrives by SMS asking you to update KYC",
        "You are told to install an app or share your screen",
        "The message threatens to block your account today",
      ],
      hi: [
        "एसएमएस में केवाईसी अपडेट का लिंक आता है",
        "ऐप इंस्टॉल करने या स्क्रीन साझा करने को कहा जाता है",
        "आज ही खाता बंद करने की धमकी दी जाती है",
      ],
      mr: [
        "एसएमएसने केवायसी अपडेटची लिंक येते",
        "अ‍ॅप इंस्टॉल करण्यास किंवा स्क्रीन शेअर करण्यास सांगितले जाते",
        "आजच खाते बंद करण्याची धमकी दिली जाते",
      ],
    },
    quickTip: {
      en: "Banks do not send KYC links by SMS. Visit your branch or use the bank's official app.",
      hi: "बैंक एसएमएस से केवाईसी लिंक नहीं भेजते। शाखा जाएँ या बैंक की आधिकारिक ऐप इस्तेमाल करें।",
      mr: "बँका एसएमएसने केवायसी लिंक पाठवत नाहीत. शाखेत जा किंवा बँकेची अधिकृत अ‍ॅप वापरा.",
    },
    difficulty: "comfortable",
  },
  {
    id: "scam-helpline",
    emoji: "☎️",
    name: { en: "Fake customer care numbers", hi: "नकली कस्टमर केयर नंबर", mr: "बनावट कस्टमर केअर नंबर" },
    summary: {
      en: "Scammers place fake helpline numbers for banks, airlines and gas agencies at the top of Google search results. Calling them gives scammers direct access to you.",
      hi: "ठग गूगल सर्च में बैंक, एयरलाइन और गैस एजेंसी के नकली हेल्पलाइन नंबर ऊपर दिखाते हैं। उन पर कॉल करने से ठग सीधे आप तक पहुँच जाते हैं।",
      mr: "ठग गुगल शोधामध्ये बँक, विमान कंपनी आणि गॅस एजन्सीचे बनावट हेल्पलाइन नंबर वर दाखवतात. त्यांना कॉल केल्यास ठग थेट तुमच्यापर्यंत पोहोचतात.",
    },
    redFlags: {
      en: [
        "The number was found through a search engine",
        "They ask for OTP, PIN or card details to 'solve' your problem",
        "They ask you to pay a small 'service charge'",
      ],
      hi: [
        "नंबर सर्च इंजन से मिला है",
        "समस्या 'सुलझाने' के लिए ओटीपी, पिन या कार्ड विवरण माँगे जाते हैं",
        "एक छोटा 'सर्विस चार्ज' देने को कहा जाता है",
      ],
      mr: [
        "नंबर सर्च इंजिनमधून मिळाला आहे",
        "समस्या 'सोडवण्यासाठी' ओटीपी, पिन किंवा कार्ड तपशील मागितले जातात",
        "एक छोटा 'सर्व्हिस चार्ज' देण्यास सांगितले जाते",
      ],
    },
    quickTip: {
      en: "Take helpline numbers only from the official app or the back of your card. For cyber fraud, the real national helpline is 1930.",
      hi: "हेल्पलाइन नंबर सिर्फ़ आधिकारिक ऐप या कार्ड के पीछे से लें। साइबर ठगी के लिए असली राष्ट्रीय हेल्पलाइन 1930 है।",
      mr: "हेल्पलाइन नंबर फक्त अधिकृत अ‍ॅप किंवा कार्डच्या मागील बाजूवरून घ्या. सायबर फसवणुकीसाठी खरी राष्ट्रीय हेल्पलाइन 1930 आहे.",
    },
    difficulty: "comfortable",
  },
  {
    id: "scam-digital-arrest",
    emoji: "📦",
    name: { en: "'Digital arrest' & parcel threats", hi: "'डिजिटल अरेस्ट' और पार्सल धमकी", mr: "'डिजिटल अरेस्ट' व पार्सल धमकी" },
    summary: {
      en: "Callers claiming to be police or customs say a parcel with illegal items has your name. They keep you on a video call for hours and frighten you into transferring money.",
      hi: "पुलिस या कस्टम अधिकारी बनकर कॉलर कहते हैं कि आपके नाम से गैरकानूनी सामान का पार्सल पकड़ा गया है। वे घंटों वीडियो कॉल पर रखकर डराते हैं और पैसे भिजवाते हैं।",
      mr: "पोलीस किंवा सीमाशुल्क अधिकारी असल्याचे सांगून कॉलर म्हणतात की तुमच्या नावावर बेकायदेशीर वस्तूंचे पार्सल सापडले आहे. ते तासनतास व्हिडिओ कॉलवर ठेवून भीती दाखवतात आणि पैसे पाठवण्यास भाग पाडतात.",
    },
    redFlags: {
      en: [
        "Police contact you by video call",
        "You are told to stay on the call and tell no one",
        "They demand money to 'verify' or 'settle' the case",
      ],
      hi: [
        "पुलिस आपसे वीडियो कॉल पर संपर्क करती है",
        "कॉल पर बने रहने और किसी को न बताने को कहा जाता है",
        "मामला 'सुलझाने' के लिए पैसे माँगे जाते हैं",
      ],
      mr: [
        "पोलीस तुमच्याशी व्हिडिओ कॉलवर संपर्क करतात",
        "कॉलवर राहण्यास आणि कोणालाही न सांगण्यास सांगितले जाते",
        "प्रकरण 'सोडवण्यासाठी' पैसे मागितले जातात",
      ],
    },
    quickTip: {
      en: "Real police never arrest or question anyone over a video call. Hang up and tell a family member at once.",
      hi: "असली पुलिस कभी वीडियो कॉल पर गिरफ़्तार या पूछताछ नहीं करती। फ़ोन काटें और तुरंत परिवार को बताएँ।",
      mr: "खरे पोलीस कधीही व्हिडिओ कॉलवर अटक किंवा चौकशी करत नाहीत. फोन ठेवा आणि लगेच कुटुंबीयांना सांगा.",
    },
    difficulty: "confident",
  },
  {
    id: "scam-impersonation",
    emoji: "💬",
    name: { en: "'Hi Mom, I need money' messages", hi: "'मम्मी, मुझे पैसे चाहिए' वाले संदेश", mr: "'आई, मला पैसे हवे आहेत' मेसेज" },
    summary: {
      en: "A message from an unknown number says: 'Hi Mom/Dad, I lost my phone, this is my new number, I urgently need money for hospital/fees'.",
      hi: "अनजान नंबर से संदेश आता है: 'मम्मी/पापा, फ़ोन खो गया, यह नया नंबर है, अस्पताल/फीस के लिए तुरंत पैसे चाहिए।'",
      mr: "अनोळखी नंबरवरून मेसेज येतो: 'आई/बाबा, फोन हरवला, हा नवीन नंबर आहे, हॉस्पिटल/फीसाठी तातडीने पैसे हवे आहेत.'",
    },
    redFlags: {
      en: [
        "The message comes from an unfamiliar number",
        "It claims urgent need and asks to send money to a different account or UPI",
        "They avoid a phone call or voice note",
      ],
      hi: [
        "संदेश अनजान नंबर से आता है",
        "तुरंत ज़रूरत बताकर किसी दूसरे खाते या यूपीआई पर पैसे भेजने को कहा जाता है",
        "वे फ़ोन कॉल या आवाज़ संदेश से बचते हैं",
      ],
      mr: [
        "मेसेज अनोळखी नंबरवरून येतो",
        "तातडीची गरज सांगून दुसऱ्या खात्यात किंवा यूपीआयवर पैसे पाठवण्यास सांगितले जाते",
        "ते फोन कॉल किंवा व्हॉइस मेसेज टाळतात",
      ],
    },
    quickTip: {
      en: "Always call your child's real number first. A true emergency will answer the phone.",
      hi: "पहले अपने बच्चे के असली नंबर पर कॉल करें। सच्ची आपात स्थिति फ़ोन पर जवाब देगी।",
      mr: "आधी तुमच्या मुलाच्या खऱ्या नंबरवर कॉल करा. खरी तातडीची परिस्थिती फोनला उत्तर देईल.",
    },
    difficulty: "beginner",
  },
  {
    id: "scam-lottery",
    emoji: "🎰",
    name: { en: "Lottery & prize win scams", hi: "लॉटरी और इनाम जीतने की ठगी", mr: "लॉटरी व बक्षीस जिंकण्याची फसवणूक" },
    summary: {
      en: "A call or message announces you have won a big lottery or prize — but to receive it you must first pay a 'tax' or 'processing fee'.",
      hi: "कॉल या संदेश में बताया जाता है कि आपने बड़ी लॉटरी या इनाम जीता है — पर उसे पाने के लिए पहले 'टैक्स' या 'फ़ीस' देनी होगी।",
      mr: "कॉल किंवा मेसेजमध्ये सांगितले जाते की तुम्ही मोठी लॉटरी किंवा बक्षीस जिंकला आहात — पण ते मिळवण्यासाठी आधी 'कर' किंवा 'फी' भरावी लागेल.",
    },
    redFlags: {
      en: [
        "You won something you never entered",
        "You must pay money to receive money",
        "Payment is asked by UPI, gift card or bank transfer",
      ],
      hi: [
        "आपने कुछ जीता है जिसमें आपने हिस्सा ही नहीं लिया",
        "पैसे पाने के लिए पहले पैसे देने पड़ते हैं",
        "भुगतान यूपीआई, गिफ़्ट कार्ड या बैंक ट्रांसफ़र से माँगा जाता है",
      ],
      mr: [
        "तुम्ही जिंकलात त्यात तुम्ही सहभागीच झाला नव्हतात",
        "पैसे मिळवण्यासाठी आधी पैसे द्यावे लागतात",
        "पेमेंट यूपीआय, गिफ्ट कार्ड किंवा बँक ट्रान्सफरने मागितले जाते",
      ],
    },
    quickTip: {
      en: "If you did not buy a ticket, you cannot win. Real prizes never ask for money first.",
      hi: "अगर टिकट नहीं खरीदी, तो इनाम नहीं जीत सकते। असली इनाम में कभी पहले पैसे नहीं माँगे जाते।",
      mr: "तिकीट काढले नसेल तर बक्षीस जिंकू शकत नाही. खरे बक्षीस कधीही आधी पैसे मागत नाही.",
    },
    difficulty: "beginner",
  },
  {
    id: "scam-electricity",
    emoji: "💡",
    name: { en: "Electricity bill cut-off SMS", hi: "बिजली बिल कटौती का संदेश", mr: "वीजबिल कपातीचा मेसेज" },
    summary: {
      en: "An SMS warns that your electricity will be disconnected tonight unless you call the given number immediately and pay the pending bill.",
      hi: "संदेश में चेतावनी दी जाती है कि दिए गए नंबर पर तुरंत कॉल करके बकाया बिल न भरने पर आज रात बिजली काट दी जाएगी।",
      mr: "दिलेल्या नंबरवर लगेच कॉल करून थकबाकी भरली नाही तर आज रात्री वीज कापली जाईल अशी धमकी देणारा मेसेज येतो.",
    },
    redFlags: {
      en: [
        "A threatening cut-off time like 'tonight at 9:30'",
        "You are asked to call an unknown number",
        "Payment is demanded through a link or QR code",
      ],
      hi: [
        "'आज रात 9:30 बजे' जैसी कटौती की धमकी",
        "अनजान नंबर पर कॉल करने को कहा जाता है",
        "लिंक या क्यूआर कोड से भुगतान माँगा जाता है",
      ],
      mr: [
        "'आज रात्री 9:30 वाजता' अशी कपातीची धमकी",
        "अनोळखी नंबरवर कॉल करण्यास सांगितले जाते",
        "लिंक किंवा क्यूआर कोडने पेमेंट मागितले जाते",
      ],
    },
    quickTip: {
      en: "Check your bill only on the official electricity board app, website or office — never through an SMS link.",
      hi: "बिल सिर्फ़ बिजली विभाग की आधिकारिक ऐप, वेबसाइट या दफ़्तर पर जाँचें — एसएमएस लिंक से कभी नहीं।",
      mr: "बिल फक्त वीज मंडळाच्या अधिकृत अ‍ॅप, संकेतस्थळ किंवा कार्यालयात तपासा — एसएमएस लिंकमधून कधीही नाही.",
    },
    difficulty: "beginner",
  },
  {
    id: "scam-screen-share",
    emoji: "📲",
    name: { en: "Screen sharing & remote apps", hi: "स्क्रीन शेयरिंग और रिमोट ऐप्स", mr: "स्क्रीन शेअरिंग व रिमोट अ‍ॅप्स" },
    summary: {
      en: "A caller 'from the bank' asks you to install an app like AnyDesk or TeamViewer to 'fix a problem', then watches your screen while you enter passwords and PINs.",
      hi: "बैंक से बताकर कॉलर 'समस्या ठीक करने' के लिए एनीडेस्क या टीमव्यूवर जैसी ऐप इंस्टॉल करवाता है, फिर पासवर्ड और पिन डालते समय आपकी स्क्रीन देखता है।",
      mr: "बँकेतून बोलत असल्याचे सांगून कॉलर 'समस्या सोडवण्यासाठी' एनीडेस्क किंवा टीमव्ह्युअरसारखी अ‍ॅप इंस्टॉल करायला लावतो आणि पासवर्ड व पिन टाकताना तुमची स्क्रीन पाहतो.",
    },
    redFlags: {
      en: [
        "You are told to install a remote-control app",
        "Someone watches while you type passwords or PINs",
        "They ask you to log into your banking app during the call",
      ],
      hi: [
        "रिमोट ऐप इंस्टॉल करने को कहा जाता है",
        "पासवर्ड या पिन डालते समय कोई देख रहा होता है",
        "कॉल के दौरान ही बैंकिंग ऐप खोलने को कहा जाता है",
      ],
      mr: [
        "रिमोट अ‍ॅप इंस्टॉल करण्यास सांगितले जाते",
        "पासवर्ड किंवा पिन टाकताना कोणीतरी पाहत असते",
        "कॉल दरम्यानच बँकिंग अ‍ॅप उघडण्यास सांगितले जाते",
      ],
    },
    quickTip: {
      en: "No bank ever needs to see your screen. Never install an app because a caller asked you to.",
      hi: "किसी भी बैंक को आपकी स्क्रीन देखने की ज़रूरत नहीं होती। कॉलर के कहने पर कभी कोई ऐप इंस्टॉल न करें।",
      mr: "कोणत्याही बँकेला तुमची स्क्रीन पाहण्याची गरज नसते. कॉलरने सांगितल्यावर कधीही अ‍ॅप इंस्टॉल करू नका.",
    },
    difficulty: "confident",
  },
];
