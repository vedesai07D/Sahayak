import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { C as House, E as Gamepad2, F as BookMarked, I as Award, P as BookOpen, d as Shield, h as Search, i as Users, m as Settings, t as X, u as Siren, w as Heart, x as Menu } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as __exportAll } from "./server-Bu8-0pln.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Pl2TF-rv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-kG1NJf-t.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var LANGUAGES = [
	{
		code: "en",
		label: "English",
		speech: "en-IN"
	},
	{
		code: "hi",
		label: "हिंदी",
		speech: "hi-IN"
	},
	{
		code: "mr",
		label: "मराठी",
		speech: "mr-IN"
	}
];
function pick(value, lang) {
	if (!value) return "";
	if (typeof value === "string") return value;
	return value[lang] ?? value.en ?? "";
}
function pickList(value, lang) {
	if (!value) return [];
	if (Array.isArray(value)) return value;
	return value[lang] ?? value.en ?? [];
}
var en = {
	appName: "Sahayak",
	tagline: "Learn. Stay Safe. Stay Connected.",
	home: "Home",
	learn: "Learn",
	staySafe: "Stay Safe",
	games: "Games",
	community: "Community",
	settings: "Settings",
	search: "Search",
	saved: "Saved",
	more: "More",
	back: "Back",
	goodMorning: "Good Morning",
	goodAfternoon: "Good Afternoon",
	goodEvening: "Good Evening",
	howCanHelp: "How can Sahayak help you today?",
	learnSomething: "Learn Something New",
	playMind: "Play & Exercise Your Mind",
	listenLearn: "Listen & Learn",
	continueLearning: "Continue Learning",
	continueBtn: "Continue",
	todayTip: "Today's Safety Tip",
	learnMore: "Learn More",
	yourProgress: "Your Progress",
	digitalSkills: "Digital Skills",
	safety: "Safety",
	listen: "Listen",
	pause: "Pause",
	resume: "Resume",
	stop: "Stop",
	restart: "Restart",
	markComplete: "Mark as Complete",
	completed: "Completed",
	save: "Save",
	savedLabel: "Saved",
	relatedLessons: "Related lessons",
	steps: "Step-by-step instructions",
	learnSubtitle: "Take small steps. Learn at your own pace.",
	safeSubtitle: "Learn about common scams before they happen to you.",
	gamesTitle: "Games & Brain Exercise",
	gamesSubtitle: "Simple games for memory, thinking and safety.",
	watchLearn: "Watch & Learn",
	quizzes: "Quizzes",
	scamStories: "Real-Life Scam Stories",
	scamOrSafe: "Scam or Safe?",
	safetyCheck: "My Safety Check",
	whatShouldIDo: "What Should I Do?",
	dictionary: "Digital Dictionary",
	dictionarySubtitle: "Simple meanings of everyday technology and internet words.",
	trustedContacts: "Trusted Contacts",
	mySaved: "My Saved Items",
	about: "About",
	privacy: "Privacy",
	scam: "SCAM",
	safe: "SAFE",
	warningSigns: "Warning signs",
	whatWentWrong: "What went wrong?",
	whatToDo: "What you should do",
	whatToDoIfHappened: "What to do if this happened to you",
	keyLesson: "Key lesson",
	tryAgain: "Try Again",
	playAgain: "Play Again",
	score: "Score",
	bestScore: "Best score",
	start: "Start",
	next: "Next",
	finish: "Finish",
	correct: "Correct!",
	notQuite: "Not quite. Let's learn why.",
	offline: "You're offline. Saved lessons, games, emergency numbers and safety content still work.",
	videoNeedsInternet: "An internet connection is required to play this video.",
	hostedByYouTube: "Videos are hosted on YouTube.",
	emptySaved: "You haven't saved anything yet.",
	emptySavedHint: "Tap Save on a lesson or story to find it here.",
	exploreLessons: "Explore Lessons",
	language: "Language",
	textSize: "Text size",
	normal: "Normal",
	large: "Large",
	extraLarge: "Extra Large",
	highContrast: "High contrast",
	reduceMotion: "Reduce animations",
	appearance: "Appearance",
	light: "Light",
	dark: "Dark",
	system: "System",
	audio: "Audio",
	speechSpeed: "Speech speed",
	slow: "Slow",
	fast: "Fast",
	data: "Data",
	exportData: "Export my data",
	deleteData: "Delete all local data",
	cancel: "Cancel",
	navHome: "Home",
	navLearn: "Learn",
	navSafe: "Safe",
	navDict: "Words",
	navGames: "Games",
	menu: "Menu",
	closeMenu: "Close menu",
	needHelpNow: "Do you need emergency help?",
	openEmergencyHelp: "Open Emergency Help",
	lessonsProgress: "Lessons",
	storiesProgress: "Stories",
	nextUp: "Next up",
	continueStory: "Continue story",
	percentDone: "done",
	completedBadge: "Completed ✓",
	readAndListen: "Read & Listen",
	watchVideos: "Watch Videos",
	chooseCategory: "Choose a topic",
	nextLesson: "Next lesson",
	allLessons: "All lessons",
	findSpecificLesson: "Looking for a specific lesson?",
	quickQuiz: "Quick quiz",
	lessonComplete: "Lesson completed!",
	stories: "Stories",
	commonScamsTab: "Common Scams",
	helpAndSafetyCheck: "Help & Safety Check",
	nextStory: "Next story",
	previousStory: "Previous story",
	markAsRead: "Mark as read & next",
	browseAll: "Browse all",
	readStory: "Read story",
	allStoriesRead: "Well done! You have read all the stories.",
	previous: "Previous",
	nextScam: "Next scam",
	previousScam: "Previous scam",
	backToGames: "Back to games",
	quizChallenge: "Quiz Challenge",
	safetyCheckGame: "Safety Check",
	chooseQuiz: "Choose a quiz",
	digitalWordQuiz: "Digital Word Quiz",
	scamOrSafeDesc: "Is this message real or a trick? Decide quickly.",
	wordQuizDesc: "Guess the right digital word from a hint.",
	quizChallengeDesc: "Answer short questions on payments, internet and WhatsApp.",
	safetyCheckDesc: "Do you already follow safe habits? Check yourself.",
	yesWord: "Yes",
	noWord: "No",
	confirm: "Yes, delete everything",
	createPost: "Create Post",
	like: "Like",
	comment: "Comment",
	postPlaceholder: "Share a question or a tip…",
	post: "Post",
	searchPlaceholder: "Search lessons, scams, words…",
	noResults: "No results found.",
	skipIntro: "Skip Introduction",
	getStarted: "Get Started",
	beginner: "Beginner",
	comfortable: "Comfortable",
	confident: "Confident",
	comfortQuestion: "How comfortable are you with smartphones?",
	somethingWrong: "Something went wrong. Please try again.",
	call: "Call",
	message: "Message",
	emergency: "Emergency Help",
	emergencyBtn: "🚨 Emergency",
	emergencySubtitle: "Direct emergency helplines, trusted family contacts, and immediate fraud relief steps.",
	emergencyHelplineTitle: "Direct Emergency Phone Helplines",
	emergency112: "National Emergency Helpline (112)",
	emergency112Desc: "All-in-one emergency: Police, Fire, Ambulance. Free call, 24x7.",
	emergency1930: "National Cyber Fraud Helpline (1930)",
	emergency1930Desc: "Report online/banking fraud immediately to freeze stolen money.",
	emergency14567: "Elderline — Senior Citizens (14567)",
	emergency14567Desc: "Free national helpline for senior citizens guidance and support.",
	emergency108: "Medical Ambulance (108)",
	emergency108Desc: "Immediate medical emergency transport.",
	worksOfflineCall: "✓ Works offline (Direct Phone Call)",
	requiresInternet: "🌐 Requires Internet",
	callNow: "Call Now",
	callContact: "Call",
	quickEmergencySteps: "What to do right now in an emergency",
	moneyLostHeading: "If money was just deducted by fraud:",
	moneyLostStep1: "Call 1930 immediately (the 'golden hour') to stop the transfer.",
	moneyLostStep2: "Call your bank customer care (number on passbook or card) to freeze your account/card.",
	moneyLostStep3: "Do not delete SMS or WhatsApp messages. They are required as proof.",
	threatHeading: "If someone is threatening or blackmailing you on a call:",
	threatStep1: "Disconnect the call immediately. Do not panic.",
	threatStep2: "Never send money or share OTP under fear.",
	threatStep3: "Inform a trusted family member or call 112.",
	noContactsYet: "No trusted contacts saved yet.",
	addEmergencyContact: "Add Family Contact",
	trustedContactsSubtitle: "Keep family or doctor numbers ready for single-tap calling.",
	recommendedForYou: "Recommended for You",
	recommendedSubtitle: "Handpicked lessons and safety stories based on your comfort level.",
	currentLevelLabel: "Your learning level",
	changeLevel: "Change",
	suggestedLesson: "Next lesson to try",
	suggestedSafety: "Important scam to know",
	allCompletedLevel: "Great job! You completed the key lessons for this level. Explore more below!",
	watchVideo: "Watch Video Lesson",
	videoIncluded: "Video Included",
	videoSectionTitle: "Video Demonstration",
	videoSectionDesc: "Watch and follow along. You can pause anytime.",
	allLessonsWorkOffline: "All written lessons and safety guides work without internet.",
	learnWithVideos: "Learn with Videos",
	learnWithVideosSubtitle: "Visual step-by-step videos you can watch anytime.",
	categoryAll: "All Topics",
	filterByTopic: "Filter by topic",
	stepNumber: "Step",
	searchDictionary: "Search words (e.g. OTP, UPI, Wi-Fi)...",
	dictionaryTip: "Safety Tip",
	allWords: "All Words",
	wordsCount: "words",
	memoryGamePrompt: "Find the matching pairs. Moves:",
	hiddenCard: "Hidden card",
	questionOf: "Question",
	ofWord: "of",
	scoreFeedback: "Every attempt helps you remember. There is no pass or fail here.",
	youGotScore: "You got",
	correctOutOf: "correct out of",
	readAloudUnavailable: "Reading aloud is not supported on this browser. You can still read the text above.",
	today: "Today",
	yesterday: "Yesterday",
	daysAgo: "days ago",
	allFilter: "All",
	yourNameOptional: "Your name (optional)",
	selectCategory: "Category",
	keepGoing: "Keep going!",
	videos: "videos",
	addContactSuccess: "Contact added successfully.",
	contactName: "Name",
	relationship: "Relationship (e.g. Son, Daughter, Doctor)",
	phoneNumber: "Phone Number",
	addContactBtn: "Add contact",
	dataStorageNote: "Sahayak works without a login. Everything you do is stored privately on your device.",
	startWithSimpleLesson: "Start with a short, simple lesson.",
	completedCountNote: "lessons completed — you're becoming more confident every day!",
	scenariosCountDesc: "short, real-life situations. Decide if each one is a scam or safe.",
	searchPromptSub: "Find a lesson, a scam story or a digital word.",
	searchWordPlaceholder: "Type a word, e.g. WhatsApp, OTP, UPI",
	trySimplerSearch: "Try a simpler word, like 'UPI' or 'call'.",
	officialHelp: "Official Help & Helplines",
	commonScams: "Common Scams to Watch Out For",
	credits: "Credits",
	creditsSubtitle: "The people and place behind Sahayak.",
	creditsMadeWithLove: "Made with ❤️ at PICT",
	creditsDept: "Department of Computer Engineering",
	creditsGuide: "Under the guidance of Dr. A. M. Bagade, HOD",
	creditsMentor: "Faculty Mentor: Prof. Rutuja Kulkarni",
	communitySubtitle: "Ask questions, share tips and help each other stay safe.",
	communityNeedsInternet: "Community needs an internet connection. Lessons, games and safety content still work offline.",
	communityNotConfigured: "Community is not set up yet. Please contact the person who manages this app.",
	communitySignIn: "Sign In",
	communitySignUp: "Create Account",
	communityEmail: "Email",
	communityPassword: "Password",
	communityUsername: "Your name",
	communityUsernameHint: "This is what others will see in the community. It does not need to be unique.",
	communityCheckEmail: "Account created! Please check your email and click the confirmation link we sent you. After confirming, come back and sign in.",
	communityHaveAccount: "Already have an account?",
	communityNoAccount: "New here? Create an account.",
	communitySigningIn: "Signing in…",
	communitySigningUp: "Creating account…",
	communitySignOut: "Sign out",
	communityLoginTitle: "Join the Community",
	communityLoginHint: "Sign in to ask questions and share tips with others.",
	communitySignedInAs: "Signed in as",
	communityYourMessage: "Your message",
	communityAnonymous: "Anonymous",
	communityPrivacyNote: "Never share your OTP, PIN or bank details here.",
	communityCommentPlaceholder: "Write a helpful reply",
	communityReported: "Reported",
	communityReport: "Report",
	communityEmpty: "No posts yet. Be the first to ask or share!",
	communityLoadError: "Could not load community posts. Check your connection and try again.",
	communityActionFailed: "That did not go through. Your text is still here — please try again.",
	communityAuthFailed: "Sign in failed. Please check your email and password.",
	communityDelete: "Delete",
	communityConfirmDelete: "Delete this post?"
};
var dicts = {
	en,
	hi: {
		appName: "सहायक",
		tagline: "सीखिए। सुरक्षित रहिए। जुड़े रहिए।",
		home: "होम",
		learn: "सीखें",
		staySafe: "सुरक्षित रहें",
		games: "खेल",
		community: "समुदाय",
		settings: "सेटिंग्स",
		search: "खोजें",
		saved: "सहेजे गए",
		more: "और",
		back: "वापस",
		goodMorning: "सुप्रभात",
		goodAfternoon: "नमस्कार",
		goodEvening: "शुभ संध्या",
		howCanHelp: "सहायक आज आपकी कैसे मदद करे?",
		learnSomething: "कुछ नया सीखें",
		playMind: "खेलें और दिमाग तेज़ करें",
		listenLearn: "सुनें और सीखें",
		continueLearning: "सीखना जारी रखें",
		continueBtn: "जारी रखें",
		todayTip: "आज की सुरक्षा सलाह",
		learnMore: "और जानें",
		yourProgress: "आपकी प्रगति",
		digitalSkills: "डिजिटल कौशल",
		safety: "सुरक्षा",
		listen: "सुनें",
		pause: "रोकें",
		resume: "जारी रखें",
		stop: "बंद करें",
		restart: "फिर से",
		markComplete: "पूरा हुआ चिह्नित करें",
		completed: "पूरा हुआ",
		save: "सहेजें",
		savedLabel: "सहेजा गया",
		relatedLessons: "संबंधित पाठ",
		steps: "चरण दर चरण निर्देश",
		learnSubtitle: "छोटे कदम बढ़ाइए। अपनी गति से सीखिए।",
		safeSubtitle: "ठगी होने से पहले उसके तरीके पहचानिए।",
		gamesTitle: "खेल और दिमागी कसरत",
		gamesSubtitle: "याददाश्त, सोच और सुरक्षा के आसान खेल।",
		watchLearn: "देखें और सीखें",
		quizzes: "प्रश्नोत्तरी",
		scamStories: "सच्ची ठगी की कहानियाँ",
		scamOrSafe: "ठगी या सुरक्षित?",
		safetyCheck: "मेरी सुरक्षा जाँच",
		whatShouldIDo: "मैं क्या करूँ?",
		dictionary: "डिजिटल शब्दकोश",
		dictionarySubtitle: "तकनीक और इंटरनेट के रोज़मर्रा के शब्दों के आसान अर्थ।",
		trustedContacts: "भरोसेमंद संपर्क",
		mySaved: "मेरी सहेजी चीज़ें",
		about: "परिचय",
		privacy: "निजता",
		scam: "ठगी",
		safe: "सुरक्षित",
		warningSigns: "चेतावनी के संकेत",
		whatWentWrong: "क्या गलत हुआ?",
		whatToDo: "आपको क्या करना चाहिए",
		whatToDoIfHappened: "अगर आपके साथ ऐसा हो जाए तो क्या करें",
		keyLesson: "मुख्य सीख",
		tryAgain: "फिर कोशिश करें",
		playAgain: "फिर खेलें",
		score: "अंक",
		bestScore: "सर्वश्रेष्ठ अंक",
		start: "शुरू करें",
		next: "आगे",
		finish: "समाप्त",
		correct: "सही!",
		notQuite: "बिलकुल नहीं। आइए कारण समझें।",
		offline: "आप ऑफ़लाइन हैं। सहेजे गए पाठ, खेल, आपातकालीन नंबर और सुरक्षा सामग्री फिर भी चलेगी।",
		videoNeedsInternet: "यह वीडियो चलाने के लिए इंटरनेट चाहिए।",
		hostedByYouTube: "वीडियो YouTube पर उपलब्ध हैं।",
		emptySaved: "आपने अभी कुछ सहेजा नहीं है।",
		emptySavedHint: "किसी पाठ या कहानी पर सहेजें दबाइए।",
		exploreLessons: "पाठ देखें",
		language: "भाषा",
		textSize: "अक्षरों का आकार",
		normal: "सामान्य",
		large: "बड़ा",
		extraLarge: "बहुत बड़ा",
		highContrast: "अधिक स्पष्ट रंग",
		reduceMotion: "एनिमेशन कम करें",
		appearance: "रंग-रूप",
		light: "हल्का",
		dark: "गहरा",
		system: "फ़ोन जैसा",
		audio: "आवाज़",
		speechSpeed: "बोलने की गति",
		slow: "धीमा",
		fast: "तेज़",
		data: "जानकारी",
		exportData: "मेरी जानकारी सहेजें",
		deleteData: "सारी जानकारी मिटाएँ",
		cancel: "रद्द करें",
		navHome: "होम",
		navLearn: "सीखें",
		navSafe: "सुरक्षा",
		navDict: "शब्द",
		navGames: "खेल",
		menu: "मेन्यू",
		closeMenu: "मेन्यू बंद करें",
		needHelpNow: "क्या आपको आपातकालीन मदद चाहिए?",
		openEmergencyHelp: "आपातकालीन मदद खोलें",
		lessonsProgress: "पाठ",
		storiesProgress: "कहानियाँ",
		nextUp: "अगला",
		continueStory: "कहानी जारी रखें",
		percentDone: "पूरा",
		completedBadge: "पूरा हुआ ✓",
		readAndListen: "पढ़ें और सुनें",
		watchVideos: "वीडियो देखें",
		chooseCategory: "विषय चुनें",
		nextLesson: "अगला पाठ",
		allLessons: "सभी पाठ",
		findSpecificLesson: "कोई खास पाठ ढूँढ रहे हैं?",
		quickQuiz: "छोटा क्विज़",
		lessonComplete: "पाठ पूरा हुआ!",
		stories: "कहानियाँ",
		commonScamsTab: "आम ठगी",
		helpAndSafetyCheck: "मदद और सुरक्षा जाँच",
		nextStory: "अगली कहानी",
		previousStory: "पिछली कहानी",
		markAsRead: "पढ़ा हुआ चिह्नित करें और आगे बढ़ें",
		browseAll: "सभी देखें",
		readStory: "कहानी पढ़ें",
		allStoriesRead: "बहुत बढ़िया! आपने सारी कहानियाँ पढ़ ली हैं।",
		previous: "पिछला",
		nextScam: "अगली ठगी",
		previousScam: "पिछली ठगी",
		backToGames: "खेलों पर वापस",
		quizChallenge: "क्विज़ चैलेंज",
		safetyCheckGame: "सुरक्षा जाँच",
		chooseQuiz: "क्विज़ चुनें",
		digitalWordQuiz: "डिजिटल शब्द क्विज़",
		scamOrSafeDesc: "यह संदेश असली है या ठगी? जल्दी पहचानें।",
		wordQuizDesc: "संकेत से सही डिजिटल शब्द पहचानें।",
		quizChallengeDesc: "भुगतान, इंटरनेट और व्हाट्सएप पर छोटे सवालों के जवाब दें।",
		safetyCheckDesc: "क्या आप पहले से सुरक्षित आदतें अपनाते हैं? खुद जाँचें।",
		yesWord: "हाँ",
		noWord: "नहीं",
		confirm: "हाँ, सब मिटाएँ",
		createPost: "पोस्ट लिखें",
		like: "पसंद",
		comment: "टिप्पणी",
		postPlaceholder: "कोई सवाल या सुझाव लिखिए…",
		post: "भेजें",
		searchPlaceholder: "पाठ, ठगी, शब्द खोजें…",
		noResults: "कुछ नहीं मिला।",
		skipIntro: "परिचय छोड़ें",
		getStarted: "शुरू करें",
		beginner: "नया हूँ",
		comfortable: "ठीक-ठाक",
		confident: "आत्मविश्वासी",
		comfortQuestion: "स्मार्टफ़ोन चलाने में आप कितने सहज हैं?",
		somethingWrong: "कुछ गड़बड़ हुई। कृपया फिर कोशिश करें।",
		call: "कॉल",
		message: "संदेश",
		emergency: "आपातकालीन मदद",
		emergencyBtn: "🚨 आपातकालीन",
		emergencySubtitle: "तुरंत कॉल करने वाले नंबर, परिवार के संपर्क और ठगी से बचाव के तुरंत कदम।",
		emergencyHelplineTitle: "आपातकालीन फ़ोन हेल्पलाइन",
		emergency112: "राष्ट्रीय आपातकालीन हेल्पलाइन (112)",
		emergency112Desc: "पुलिस, एम्बुलेंस और अग्निशमन के लिए एक ही नंबर। 24 घंटे मुफ़्त कॉल।",
		emergency1930: "राष्ट्रीय साइबर वित्तीय अपराध हेल्पलाइन (1930)",
		emergency1930Desc: "ऑनलाइन या बैंक खाते से ठगी होने पर तुरंत कॉल करें ताकि पैसे रोके जा सकें।",
		emergency14567: "एल्डरलाइन — वरिष्ठ नागरिक हेल्पलाइन (14567)",
		emergency14567Desc: "बुज़ुर्गों के लिए मुफ़्त राष्ट्रीय सहायता और मार्गदर्शन हेल्पलाइन।",
		emergency108: "स्वास्थ्य एम्बुलेंस सेवा (108)",
		emergency108Desc: "चिकित्सा आपातकाल के लिए तुरंत वाहन सहायता।",
		worksOfflineCall: "✓ बिना इंटरनेट के काम करता है (सीधा फ़ोन कॉल)",
		requiresInternet: "🌐 इंटरनेट आवश्यक है",
		callNow: "अभी कॉल करें",
		callContact: "कॉल करें",
		quickEmergencySteps: "आपातकाल में तुरंत क्या करें",
		moneyLostHeading: "अगर धोखे से खाते से पैसे कट जाएँ:",
		moneyLostStep1: "बिना देर किए तुरंत 1930 पर कॉल करें ताकि भेजा गया पैसा आगे न बढ़ सके।",
		moneyLostStep2: "अपनी पासबुक या एटीएम कार्ड पर लिखे बैंक नंबर पर कॉल कर खाता और कार्ड ब्लॉक करवाएँ।",
		moneyLostStep3: "आए हुए एसएमएस और व्हाट्सएप संदेश न मिटाएँ। ये सबूत के रूप में काम आते हैं।",
		threatHeading: "अगर कोई फ़ोन पर डरा या धमका रहा हो:",
		threatStep1: "तुरंत कॉल काट दें। डरने की कोई बात नहीं है।",
		threatStep2: "डरकर किसी को पैसे न भेजें और न ही ओटीपी बताएँ।",
		threatStep3: "अपने परिवार के किसी सदस्य को बताएं या 112 पर कॉल करें।",
		noContactsYet: "अभी कोई आपातकालीन संपर्क नहीं जोड़ा गया है।",
		addEmergencyContact: "परिवार का संपर्क जोड़ें",
		trustedContactsSubtitle: "ज़रूरत के समय एक बटन दबाकर कॉल करने के लिए नंबर सहेजें।",
		recommendedForYou: "आपके लिए सुझाव",
		recommendedSubtitle: "आपकी सुविधा और स्तर के अनुसार चुने गए पाठ और सुरक्षा कहानियाँ।",
		currentLevelLabel: "आपका स्तर",
		changeLevel: "बदलें",
		suggestedLesson: "सीखने के लिए अगला पाठ",
		suggestedSafety: "ज़रूरी सुरक्षा कहानी",
		allCompletedLevel: "बहुत बढ़िया! आपने इस स्तर के सभी मुख्य पाठ पूरे कर लिए हैं। नीचे अन्य पाठ भी देखें!",
		watchVideo: "वीडियो पाठ देखें",
		videoIncluded: "वीडियो सहित",
		videoSectionTitle: "वीडियो में देखकर सीखें",
		videoSectionDesc: "वीडियो देखकर साथ-साथ अभ्यास करें। इसे कभी भी रोक सकते हैं।",
		allLessonsWorkOffline: "सभी लिखित पाठ और सुरक्षा नियम बिना इंटरनेट के काम करते हैं।",
		learnWithVideos: "वीडियो से सीखें",
		learnWithVideosSubtitle: "सरल और स्पष्ट वीडियो जिन्हें देखकर आसानी से सीखा जा सकता है।",
		categoryAll: "सभी विषय",
		filterByTopic: "विषय के अनुसार चुनें",
		stepNumber: "चरण",
		searchDictionary: "शब्द खोजें (जैसे OTP, UPI, Wi-Fi)...",
		dictionaryTip: "सुरक्षा सलाह",
		allWords: "सभी शब्द",
		wordsCount: "शब्द",
		memoryGamePrompt: "एक जैसे जोड़े ढूँढ़िए। चालें:",
		hiddenCard: "छिपा हुआ कार्ड",
		questionOf: "प्रश्न",
		ofWord: "का / कुल",
		scoreFeedback: "हर प्रयास से याददाश्त मज़बूत होती है। यहाँ कोई पास या फ़ेल नहीं है।",
		youGotScore: "आपने सही उत्तर दिए:",
		correctOutOf: "कुल में से:",
		readAloudUnavailable: "इस डिवाइस पर आवाज़ में पढ़ना उपलब्ध नहीं है। आप ऊपर लिखा पाठ पढ़ सकते हैं।",
		today: "आज",
		yesterday: "कल",
		daysAgo: "दिन पहले",
		allFilter: "सभी",
		yourNameOptional: "आपका नाम (वैकल्पिक)",
		selectCategory: "श्रेणी",
		keepGoing: "जारी रखें!",
		videos: "वीडियो",
		addContactSuccess: "संपर्क सफलतापूर्वक जोड़ा गया।",
		contactName: "नाम",
		relationship: "रिश्ता (जैसे बेटा, बेटी, डॉक्टर)",
		phoneNumber: "फ़ोन नंबर",
		addContactBtn: "संपर्क जोड़ें",
		dataStorageNote: "सहायक बिना लॉगिन के काम करता है। आपकी सारी जानकारी केवल आपके फ़ोन में सुरक्षित रहती है।",
		startWithSimpleLesson: "एक छोटे और आसान पाठ से शुरुआत करें।",
		completedCountNote: "पाठ पूरे हुए — आप हर दिन अधिक आत्मविश्वासी बन रहे हैं!",
		scenariosCountDesc: "छोटे वास्तविक प्रसंग। तय करें कि कौन सा सुरक्षित है और कौन सा ठगी।",
		searchPromptSub: "पाठ, ठगी की कहानी या कोई तकनीकी शब्द ढूँढ़ें।",
		searchWordPlaceholder: "शब्द लिखें, जैसे व्हाट्सएप, ओटीपी, यूपीआई",
		trySimplerSearch: "कोई सरल शब्द लिखकर देखें, जैसे 'यूपीआई' या 'कॉल' ।",
		officialHelp: "सरकारी मदद और हेल्पलाइन",
		commonScams: "ठगी के आम प्रकार जिनपर ध्यान दें",
		credits: "क्रेडिट्स",
		creditsSubtitle: "सहायक के पीछे के लोग और संस्था।",
		creditsMadeWithLove: "पीआईआईटी (PICT) में ❤️ से बनाया गया",
		creditsDept: "कंप्यूटर इंजीनियरिंग विभाग",
		creditsGuide: "डॉ. ए. एम. बागड़े, विभागाध्यक्ष के मार्गदर्शन में",
		creditsMentor: "फ़ैकल्टी मेंटर: प्रो. रुतुजा कुलकर्णी",
		communitySubtitle: "सवाल पूछिए, अनुभव साझा कीजिए और एक-दूसरे को सुरक्षित रहने में मदद कीजिए।",
		communityNeedsInternet: "समुदाय के लिए इंटरनेट चाहिए। पाठ, खेल और सुरक्षा सामग्री बिना इंटरनेट के भी चलती है।",
		communityNotConfigured: "समुदाय अभी चालू नहीं किया गया है। कृपया इस ऐप के प्रबंधक से संपर्क करें।",
		communitySignIn: "साइन इन करें",
		communitySignUp: "खाता बनाएँ",
		communityEmail: "ईमेल",
		communityPassword: "पासवर्ड",
		communityUsername: "आपका नाम",
		communityUsernameHint: "यह नाम समुदाय में सभी को दिखेगा। यह अलग-अलग लोगों के लिए एक जैसा हो सकता है।",
		communityCheckEmail: "खाता बन गया है! कृपया अपना ईमेल खोलें और हमारे भेजे गए पुष्टि लिंक पर क्लिक करें। पुष्टि के बाद वापस आकर साइन इन करें।",
		communityHaveAccount: "पहले से खाता है?",
		communityNoAccount: "नए हैं? खाता बनाइए।",
		communitySigningIn: "साइन इन हो रहा है…",
		communitySigningUp: "खाता बन रहा है…",
		communitySignOut: "साइन आउट",
		communityLoginTitle: "समुदाय से जुड़ें",
		communityLoginHint: "सवाल पूछने और सुझाव साझा करने के लिए साइन इन करें।",
		communitySignedInAs: "आप इस नाम से जुड़े हैं:",
		communityYourMessage: "आपका संदेश",
		communityAnonymous: "अनाम",
		communityPrivacyNote: "यहाँ कभी भी अपना ओटीपी, पिन या बैंक विवरण न लिखें।",
		communityCommentPlaceholder: "एक मददगार जवाब लिखिए…",
		communityReported: "रिपोर्ट किया गया",
		communityReport: "रिपोर्ट करें",
		communityEmpty: "अभी कोई पोस्ट नहीं है। सबसे पहले पूछें या साझा करें!",
		communityLoadError: "पोस्ट लोड नहीं हो सके। इंटरनेट जाँचकर फिर कोशिश करें।",
		communityActionFailed: "यह काम पूरा नहीं हुआ। आपका लिखा हुआ सुरक्षित है — फिर कोशिश करें।",
		communityAuthFailed: "साइन इन नहीं हो सका। ईमेल और पासवर्ड जाँचें।",
		communityDelete: "मिटाएँ",
		communityConfirmDelete: "यह पोस्ट मिटाएँ?"
	},
	mr: {
		appName: "सहायक",
		tagline: "शिका. सुरक्षित राहा. जोडलेले राहा.",
		home: "मुख्यपृष्ठ",
		learn: "शिका",
		staySafe: "सुरक्षित राहा",
		games: "खेळ",
		community: "समुदाय",
		settings: "सेटिंग्ज",
		search: "शोधा",
		saved: "जतन केलेले",
		more: "अधिक",
		back: "मागे",
		goodMorning: "शुभ सकाळ",
		goodAfternoon: "नमस्कार",
		goodEvening: "शुभ संध्याकाळ",
		howCanHelp: "सहायक आज कशी मदत करू शकेल?",
		learnSomething: "काहीतरी नवीन शिका",
		playMind: "खेळा आणि मेंदूला चालना द्या",
		listenLearn: "ऐका आणि शिका",
		continueLearning: "शिकणे सुरू ठेवा",
		continueBtn: "पुढे चला",
		todayTip: "आजची सुरक्षा टीप",
		learnMore: "अधिक जाणून घ्या",
		yourProgress: "तुमची प्रगती",
		digitalSkills: "डिजिटल कौशल्ये",
		safety: "सुरक्षा",
		listen: "ऐका",
		pause: "थांबवा",
		resume: "पुढे",
		stop: "बंद करा",
		restart: "पुन्हा",
		markComplete: "पूर्ण झाले",
		completed: "पूर्ण",
		save: "जतन करा",
		savedLabel: "जतन केले",
		relatedLessons: "संबंधित धडे",
		steps: "पायरी पायरीने सूचना",
		learnSubtitle: "लहान पावले टाका. तुमच्या गतीने शिका.",
		safeSubtitle: "फसवणूक होण्याआधी तिचे प्रकार ओळखा.",
		gamesTitle: "खेळ आणि मेंदूचा व्यायाम",
		gamesSubtitle: "स्मरणशक्ती, विचार आणि सुरक्षेचे सोपे खेळ.",
		watchLearn: "पाहा आणि शिका",
		quizzes: "प्रश्नमंजुषा",
		scamStories: "खऱ्या फसवणुकीच्या गोष्टी",
		scamOrSafe: "फसवणूक की सुरक्षित?",
		safetyCheck: "माझी सुरक्षा तपासणी",
		whatShouldIDo: "मी काय करू?",
		dictionary: "डिजिटल शब्दकोश",
		dictionarySubtitle: "तंत्रज्ञान आणि इंटरनेटच्या दैनंदिन शब्दांचे सोपे अर्थ.",
		trustedContacts: "विश्वासाचे संपर्क",
		mySaved: "माझ्या जतन केलेल्या गोष्टी",
		about: "आमच्याविषयी",
		privacy: "गोपनीयता",
		scam: "फसवणूक",
		safe: "सुरक्षित",
		warningSigns: "धोक्याची चिन्हे",
		whatWentWrong: "काय चुकले?",
		whatToDo: "तुम्ही काय करावे",
		whatToDoIfHappened: "तुमच्यासोबत असे घडल्यास काय करावे",
		keyLesson: "महत्त्वाचा धडा",
		tryAgain: "पुन्हा प्रयत्न करा",
		playAgain: "पुन्हा खेळा",
		score: "गुण",
		bestScore: "सर्वोत्तम गुण",
		start: "सुरू करा",
		next: "पुढे",
		finish: "पूर्ण",
		correct: "बरोबर!",
		notQuite: "बरोबर नाही. कारण समजून घेऊ.",
		offline: "तुम्ही ऑफलाइन आहात. जतन केलेले धडे, खेळ, आपत्कालीन नंबर आणि सुरक्षा माहिती वापरता येईल.",
		videoNeedsInternet: "हा व्हिडिओ पाहण्यासाठी इंटरनेट आवश्यक आहे.",
		hostedByYouTube: "व्हिडिओ YouTube वर उपलब्ध आहेत.",
		emptySaved: "तुम्ही अजून काही जतन केलेले नाही.",
		emptySavedHint: "धडा किंवा गोष्टीवर जतन करा दाबा.",
		exploreLessons: "धडे पाहा",
		language: "भाषा",
		textSize: "अक्षरांचा आकार",
		normal: "सामान्य",
		large: "मोठा",
		extraLarge: "खूप मोठा",
		highContrast: "अधिक स्पष्ट रंग",
		reduceMotion: "हालचाल कमी करा",
		appearance: "रंगरूप",
		light: "फिकट",
		dark: "गडद",
		system: "फोनप्रमाणे",
		audio: "आवाज",
		speechSpeed: "बोलण्याचा वेग",
		slow: "हळू",
		fast: "जलद",
		data: "माहिती",
		exportData: "माझी माहिती जतन करा",
		deleteData: "सर्व माहिती काढून टाका",
		cancel: "रद्द करा",
		navHome: "होम",
		navLearn: "शिका",
		navSafe: "सुरक्षित",
		navDict: "शब्द",
		navGames: "खेळ",
		menu: "मेनू",
		closeMenu: "मेनू बंद करा",
		needHelpNow: "तुम्हाला तातडीची मदत हवी आहे का?",
		openEmergencyHelp: "तातडीची मदत उघडा",
		lessonsProgress: "धडे",
		storiesProgress: "गोष्टी",
		nextUp: "पुढील",
		continueStory: "गोष्ट पुढे वाचा",
		percentDone: "पूर्ण",
		completedBadge: "पूर्ण झाले ✓",
		readAndListen: "वाचा आणि ऐका",
		watchVideos: "व्हिडिओ पहा",
		chooseCategory: "विषय निवडा",
		nextLesson: "पुढील धडा",
		allLessons: "सर्व धडे",
		findSpecificLesson: "एखादा विशिष्ट धडा शोधत आहात?",
		quickQuiz: "छोटी प्रश्नमंजुषा",
		lessonComplete: "धडा पूर्ण झाला!",
		stories: "गोष्टी",
		commonScamsTab: "सामान्य फसवणूक",
		helpAndSafetyCheck: "मदत आणि सुरक्षा तपासणी",
		nextStory: "पुढील गोष्ट",
		previousStory: "मागील गोष्ट",
		markAsRead: "वाचले म्हणून चिन्हांकित करा आणि पुढे जा",
		browseAll: "सर्व पहा",
		readStory: "गोष्ट वाचा",
		allStoriesRead: "उत्तम! तुम्ही सर्व गोष्टी वाचल्या आहेत.",
		previous: "मागील",
		nextScam: "पुढील फसवणूक",
		previousScam: "मागील फसवणूक",
		backToGames: "खेळांवर परत",
		quizChallenge: "प्रश्नमंजुषा आव्हान",
		safetyCheckGame: "सुरक्षा तपासणी",
		chooseQuiz: "प्रश्नमंजुषा निवडा",
		digitalWordQuiz: "डिजिटल शब्द प्रश्नमंजुषा",
		scamOrSafeDesc: "हा मेसेज खरा आहे की फसवणूक? पटकन ओळखा.",
		wordQuizDesc: "खुणेवरून अचूक डिजिटल शब्द ओळखा.",
		quizChallengeDesc: "पेमेंट, इंटरनेट आणि व्हॉट्सअ‍ॅपवरील छोट्या प्रश्नांची उत्तरे द्या.",
		safetyCheckDesc: "तुम्ही आधीच सुरक्षित सवयी पाळता का? स्वतःला तपासा.",
		yesWord: "होय",
		noWord: "नाही",
		confirm: "होय, सर्व काढा",
		createPost: "पोस्ट लिहा",
		like: "आवडले",
		comment: "प्रतिक्रिया",
		postPlaceholder: "प्रश्न किंवा सूचना लिहा…",
		post: "पाठवा",
		searchPlaceholder: "धडे, फसवणूक, शब्द शोधा…",
		noResults: "काही सापडले नाही.",
		skipIntro: "ओळख वगळा",
		getStarted: "सुरुवात करा",
		beginner: "नवीन आहे",
		comfortable: "ठीक आहे",
		confident: "आत्मविश्वास आहे",
		comfortQuestion: "स्मार्टफोन वापरताना तुम्हाला किती सोपे वाटते?",
		somethingWrong: "काहीतरी चुकले. कृपया पुन्हा प्रयत्न करा.",
		call: "कॉल",
		message: "संदेश",
		emergency: "तातडीची मदत",
		emergencyBtn: "🚨 तातडीची मदत",
		emergencySubtitle: "थेट आपत्कालीन संपर्क क्रमांक, कुटुंबाचे फोन आणि फसवणुकीतून बचावाच्या तातडीच्या पायऱ्या.",
		emergencyHelplineTitle: "आपत्कालीन फोन हेल्पलाइन",
		emergency112: "राष्ट्रीय आपत्कालीन हेल्पलाइन (112)",
		emergency112Desc: "पोलीस, रुग्णवाहिका आणि अग्निशामक दलासाठी एकच क्रमांक. २४ तास मोफत सेवा.",
		emergency1930: "राष्ट्रीय सायबर आर्थिक गुन्हा हेल्पलाइन (1930)",
		emergency1930Desc: "ऑनलाइन किंवा बँक खात्यातून फसवणूक झाल्यास चोरीचे पैसे रोखण्यासाठी तातडीने फोन करा.",
		emergency14567: "एल्डरलाइन — ज्येष्ठ नागरिक हेल्पलाइन (14567)",
		emergency14567Desc: "ज्येष्ठांच्या मदतीसाठी आणि मार्गदर्शनासाठी राष्ट्रीय मोफत हेल्पलाइन.",
		emergency108: "वैद्यकीय रुग्णवाहिका सेवा (108)",
		emergency108Desc: "तातडीच्या उपचारासाठी वाहन मदत.",
		worksOfflineCall: "✓ इंटरनेटशिवाय चालते (थेट फोन कॉल)",
		requiresInternet: "🌐 इंटरनेट आवश्यक आहे",
		callNow: "आत्ता कॉल करा",
		callContact: "कॉल करा",
		quickEmergencySteps: "आपत्कालीन परिस्थितीत आत्ता काय करावे",
		moneyLostHeading: "फसवणुकीने खात्यातून पैसे गेले असल्यास:",
		moneyLostStep1: "अजिबात वेळ न घालवता लगेच १९३० वर फोन करा जेणेकरून पैसे पुढे जाण्यापासून रोखता येतील.",
		moneyLostStep2: "पासबुक किंवा एटीएम कार्डवरील बँकेच्या नंबरवर फोन करून बँक खाते आणि कार्ड ब्लॉक करा.",
		moneyLostStep3: "आलेले एसएमएस आणि व्हॉट्सअ‍ॅप मेसेज डिलीट करू नका. ते पुरावा म्हणून लागतात.",
		threatHeading: "कोणी फोनवर घाबरवत किंवा धमकावत असल्यास:",
		threatStep1: "लगेच फोन बंद करा. घाबरण्याचे काहीच कारण नाही.",
		threatStep2: "भीतीपोटी कोणालाही पैसे पाठवू नका किंवा ओटीपी सांगू नका.",
		threatStep3: "कुटुंबातील कोणालातरी सांगा किंवा ११२ वर संपर्क साधा.",
		noContactsYet: "अजून कोणताही आपत्कालीन संपर्क जोडलेला नाही.",
		addEmergencyContact: "कुटुंबातील संपर्क जोडा",
		trustedContactsSubtitle: "तातडीच्या वेळी एका बटणावर फोन करण्यासाठी क्रमांक जतन करून ठेवा.",
		recommendedForYou: "तुमच्यासाठी शिफारस",
		recommendedSubtitle: "तुमच्या सोयीनुसार आणि पातळीनुसार निवडलेले धडे आणि सुरक्षा गोष्टी.",
		currentLevelLabel: "तुमची पातळी",
		changeLevel: "बदला",
		suggestedLesson: "शिकण्यासाठी पुढचा धडा",
		suggestedSafety: "महत्त्वाची सुरक्षा गोष्ट",
		allCompletedLevel: "छान! तुम्ही या पातळीचे सर्व मुख्य धडे पूर्ण केले आहेत. खाली इतर धडेही नक्की पाहा!",
		watchVideo: "व्हिडिओ धडा पाहा",
		videoIncluded: "व्हिडिओ समाविष्ट",
		videoSectionTitle: "व्हिडिओ पाहून शिका",
		videoSectionDesc: "व्हिडिओ पाहून सोबत सराव करा. हा कधीही थांबवता येतो.",
		allLessonsWorkOffline: "सर्व लिखित धडे आणि सुरक्षा नियम इंटरनेटशिवाय चालतात.",
		learnWithVideos: "व्हिडिओद्वारे शिका",
		learnWithVideosSubtitle: "सोपे आणि स्पष्ट व्हिडिओ जे पाहून सहज शिकता येते.",
		categoryAll: "सर्व विषय",
		filterByTopic: "विषयानुसार निवडा",
		stepNumber: "पायरी",
		searchDictionary: "शब्द शोधा (उदा. OTP, UPI, Wi-Fi)...",
		dictionaryTip: "सुरक्षा टीप",
		allWords: "सर्व शब्द",
		wordsCount: "शब्द",
		memoryGamePrompt: "एकसारख्या जोड्या शोधा. चाली:",
		hiddenCard: "लपवलेले कार्ड",
		questionOf: "प्रश्न",
		ofWord: "पैकी",
		scoreFeedback: "प्रत्येक प्रयत्नाने स्मरणशक्ती वाढते. इथे कोणी पास किंवा नापास नाही.",
		youGotScore: "तुम्ही बरोबर उत्तरे दिली:",
		correctOutOf: "एकूण पैकी:",
		readAloudUnavailable: "या डिव्हाइसवर आवाजात वाचणे उपलब्ध नाही. तुम्ही वरील मजकूर वाचू शकता.",
		today: "आज",
		yesterday: "काल",
		daysAgo: "दिवसांपूर्वी",
		allFilter: "सर्व",
		yourNameOptional: "तुमचे नाव (पर्यायी)",
		selectCategory: "वर्ग",
		keepGoing: "पुढे चला!",
		videos: "व्हिडिओ",
		addContactSuccess: "संपर्क यशस्वीपणे जोडला गेला.",
		contactName: "नाव",
		relationship: "नाते (उदा. मुलगा, मुलगी, डॉक्टर)",
		phoneNumber: "फोन नंबर",
		addContactBtn: "संपर्क जोडा",
		dataStorageNote: "सहायक लॉगिनशिवाय चालते. तुमची सर्व माहिती फक्त तुमच्या फोनमध्ये सुरक्षित राहते.",
		startWithSimpleLesson: "एका छोट्या आणि सोप्या धड्याने सुरुवात करा.",
		completedCountNote: "धडे पूर्ण झाले — तुम्ही दररोज अधिक आत्मविश्वासू बनत आहात!",
		scenariosCountDesc: "छोटे वास्तववादी प्रसंग. कोणता सुरक्षित आणि कोणती फसवणूक ते ठरवा.",
		searchPromptSub: "धडा, फसवणुकीची गोष्ट किंवा तांत्रिक शब्द शोधा.",
		searchWordPlaceholder: "शब्द लिहा, उदा. व्हॉट्सअ‍ॅप, ओटीपी, यूपीआय",
		trySimplerSearch: "सोपा शब्द लिहून पाहा, उदा. 'यूपीआय' किंवा 'कॉल'.",
		officialHelp: "सरकारी मदत आणि हेल्पलाइन",
		commonScams: "फसवणुकीचे सामान्य प्रकार ज्यांची काळजी घ्यावी",
		credits: "क्रेडिट्स",
		creditsSubtitle: "सहायकमागील लोक आणि संस्था.",
		creditsMadeWithLove: "पीआयसीटी (PICT) मध्ये ❤️ ने बनवले",
		creditsDept: "संगणक अभियांत्रिकी विभाग",
		creditsGuide: "डॉ. ए. एम. बागडे, विभागप्रमुख यांच्या मार्गदर्शनाखाली",
		creditsMentor: "फॅकल्टी मेंटॉर: प्रा. रुतुजा कुलकर्णी",
		communitySubtitle: "प्रश्न विचारा, अनुभव सांगा आणि एकमेकांना सुरक्षित राहण्यास मदत करा.",
		communityNeedsInternet: "समुदायासाठी इंटरनेट आवश्यक आहे. धडे, खेळ आणि सुरक्षा माहिती इंटरनेटशिवायही चालते.",
		communityNotConfigured: "समुदाय अजून सुरू केलेला नाही. कृपया या अ‍ॅपच्या व्यवस्थापकाशी संपर्क करा.",
		communitySignIn: "साइन इन करा",
		communitySignUp: "खाते तयार करा",
		communityEmail: "ईमेल",
		communityPassword: "पासवर्ड",
		communityUsername: "तुमचे नाव",
		communityUsernameHint: "हे नाव समुदायात सर्वांना दिसेल. ते वेगवेगळ्या लोकांसाठी सारखे असू शकते.",
		communityCheckEmail: "खाते तयार झाले! कृपया तुमचा ईमेल तपासा आणि आम्ही पाठवलेल्या पुष्टी लिंकवर क्लिक करा. पुष्टीनंतर परत येऊन साइन इन करा.",
		communityHaveAccount: "आधीच खाते आहे?",
		communityNoAccount: "नवीन आहात? खाते तयार करा.",
		communitySigningIn: "साइन इन होत आहे…",
		communitySigningUp: "खाते तयार होत आहे…",
		communitySignOut: "साइन आउट",
		communityLoginTitle: "समुदायात सहभागी व्हा",
		communityLoginHint: "प्रश्न विचारण्यासाठी आणि सूचना देण्यासाठी साइन इन करा.",
		communitySignedInAs: "तुम्ही या नावाने जुळले आहात:",
		communityYourMessage: "तुमचा मेसेज",
		communityAnonymous: "अनामिक",
		communityPrivacyNote: "इथे कधीही तुमचा ओटीपी, पिन किंवा बँक माहिती लिहू नका.",
		communityCommentPlaceholder: "मदत करणारी प्रतिक्रिया लिहा…",
		communityReported: "तक्रार केली",
		communityReport: "तक्रार करा",
		communityEmpty: "अजून कोणतीही पोस्ट नाही. पहिल्यांदा तुम्ही विचारा किंवा सांगा!",
		communityLoadError: "पोस्ट लोड होऊ शकल्या नाहीत. इंटरनेट तपासून पुन्हा प्रयत्न करा.",
		communityActionFailed: "हे पूर्ण झाले नाही. तुमचा मजकूर सुरक्षित आहे — पुन्हा प्रयत्न करा.",
		communityAuthFailed: "साइन इन होऊ शकले नाही. ईमेल आणि पासवर्ड तपासा.",
		communityDelete: "काढा",
		communityConfirmDelete: "ही पोस्ट काढून टाकायची?"
	}
};
function translate(lang, key) {
	return dicts[lang]?.[key] ?? en[key] ?? key;
}
var STORAGE_KEY = "sahayak.state.v1";
var defaultState = {
	version: 1,
	onboarded: false,
	skillLevel: "beginner",
	lang: "en",
	textSize: "large",
	highContrast: false,
	reduceMotion: false,
	theme: "light",
	speechRate: "normal",
	notify: "off",
	completedLessons: [],
	completedVideos: [],
	completedStories: [],
	scamCursor: 0,
	favorites: [],
	recent: [],
	quizScores: {},
	gameScores: {},
	posts: [],
	likedPosts: [],
	contacts: [],
	safetyCheck: {},
	lastTipIndex: 0
};
var AppCtx = (0, import_react.createContext)(null);
function AppProvider({ children, seedPosts }) {
	const [state, setState] = (0, import_react.useState)(defaultState);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let loaded = {
			...defaultState,
			posts: seedPosts
		};
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				loaded = {
					...defaultState,
					...parsed
				};
				if (!parsed.posts || parsed.posts.length === 0) loaded.posts = seedPosts;
			}
		} catch {}
		setState(loaded);
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
		} catch {}
	}, [state, ready]);
	(0, import_react.useEffect)(() => {
		if (typeof document === "undefined") return;
		const el = document.documentElement;
		el.setAttribute("data-text", state.textSize);
		el.setAttribute("data-motion", state.reduceMotion ? "reduced" : "full");
		el.classList.toggle("contrast-high", state.highContrast);
		el.lang = state.lang;
		const applyTheme = () => {
			const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches === true;
			const dark = state.theme === "dark" || state.theme === "system" && prefersDark;
			el.classList.toggle("dark", dark);
		};
		applyTheme();
		if (state.theme === "system" && window.matchMedia) {
			const mq = window.matchMedia("(prefers-color-scheme: dark)");
			mq.addEventListener("change", applyTheme);
			return () => mq.removeEventListener("change", applyTheme);
		}
	}, [
		state.textSize,
		state.reduceMotion,
		state.highContrast,
		state.theme,
		state.lang
	]);
	const update = (0, import_react.useCallback)((patch) => {
		setState((s) => ({
			...s,
			...typeof patch === "function" ? patch(s) : patch
		}));
	}, []);
	const value = (0, import_react.useMemo)(() => {
		const t = (key) => translate(state.lang, key);
		return {
			state,
			ready,
			update,
			t,
			isFavorite: (id) => state.favorites.includes(id),
			toggleFavorite: (id) => update((s) => ({ favorites: s.favorites.includes(id) ? s.favorites.filter((f) => f !== id) : [...s.favorites, id] })),
			completeLesson: (id) => update((s) => s.completedLessons.includes(id) ? { completedLessons: s.completedLessons.filter((x) => x !== id) } : { completedLessons: [...s.completedLessons, id] }),
			completeVideo: (id) => update((s) => s.completedVideos.includes(id) ? { completedVideos: s.completedVideos.filter((x) => x !== id) } : { completedVideos: [...s.completedVideos, id] }),
			completeStory: (id) => update((s) => (s.completedStories ?? []).includes(id) ? { completedStories: (s.completedStories ?? []).filter((x) => x !== id) } : { completedStories: [...s.completedStories ?? [], id] }),
			trackRecent: (item) => update((s) => ({ recent: [{
				...item,
				at: Date.now()
			}, ...s.recent.filter((r) => r.id !== item.id)].slice(0, 12) })),
			recordQuiz: (id, score, total) => update((s) => ({ quizScores: {
				...s.quizScores,
				[id]: {
					best: Math.max(score, s.quizScores[id]?.best ?? 0),
					total
				}
			} })),
			recordGame: (id, score) => update((s) => ({ gameScores: {
				...s.gameScores,
				[id]: {
					best: Math.max(score, s.gameScores[id]?.best ?? 0),
					played: (s.gameScores[id]?.played ?? 0) + 1
				}
			} })),
			resetAll: () => {
				try {
					localStorage.removeItem(STORAGE_KEY);
				} catch {}
				setState({
					...defaultState,
					posts: seedPosts,
					onboarded: true
				});
			}
		};
	}, [
		state,
		ready,
		update,
		seedPosts
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppCtx.Provider, {
		value,
		children
	});
}
function useApp() {
	const ctx = (0, import_react.useContext)(AppCtx);
	if (!ctx) throw new Error("useApp must be used inside AppProvider");
	return ctx;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var SOURCES = {
	logo: "/assets/branding/logo.png",
	app: "/assets/branding/app-logo.png",
	dashboard: "/assets/branding/dashboard-logo.png"
};
/**
* Sahayak brand image. Falls back to the diya glyph if the PNG is missing,
* so a deleted/renamed asset never shows a broken-image icon.
*/
function BrandLogo({ variant = "logo", className, alt = "" }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	if (failed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("flex items-center justify-center rounded-2xl bg-primary text-2xl text-primary-foreground", className),
		"aria-hidden": "true",
		children: "🪔"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: SOURCES[variant],
		alt,
		onError: () => setFailed(true),
		className: cn("rounded-2xl object-contain", className)
	});
}
var variants = {
	primary: "bg-primary text-primary-foreground hover:brightness-110",
	secondary: "bg-secondary text-secondary-foreground hover:brightness-95 border border-border",
	outline: "bg-card text-foreground border-2 border-border hover:bg-muted",
	ghost: "bg-transparent text-foreground hover:bg-muted",
	danger: "bg-destructive text-destructive-foreground hover:brightness-110",
	success: "bg-success text-success-foreground hover:brightness-110",
	warning: "bg-warning text-warning-foreground hover:brightness-110"
};
var sizes = {
	md: "min-h-12 px-4 py-2 text-base gap-2",
	lg: "min-h-14 px-5 py-3 text-lg gap-3",
	xl: "min-h-16 px-6 py-4 text-xl gap-3"
};
var base = "inline-flex items-center justify-center rounded-xl font-semibold transition-[filter,background-color,transform] duration-150 active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none";
function ElderButton({ variant = "primary", size = "lg", className, fullWidth, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		...props,
		className: cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)
	});
}
function ElderLink({ variant = "primary", size = "lg", className, fullWidth, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		...props,
		className: cn(base, variants[variant], sizes[size], fullWidth && "w-full", className),
		children
	});
}
function PageHeader({ title, subtitle, emoji }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "text-3xl font-bold md:text-4xl",
			children: [emoji ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				"aria-hidden": "true",
				children: [emoji, " "]
			}) : null, title]
		}), subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-lg text-muted-foreground",
			children: subtitle
		}) : null]
	});
}
function SectionHeader({ title, action, emoji }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex flex-wrap items-center justify-between gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "text-2xl font-bold",
			children: [emoji ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				"aria-hidden": "true",
				children: [emoji, " "]
			}) : null, title]
		}), action]
	});
}
function LargeCard({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		"data-surface": true,
		className: cn("card-surface p-5", className),
		children
	});
}
function Chip({ children, tone = "muted" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold", {
			muted: "bg-muted text-muted-foreground",
			primary: "bg-primary-soft text-primary",
			danger: "bg-destructive-soft text-destructive",
			success: "bg-success-soft text-success",
			warning: "bg-warning-soft text-warning",
			accent: "bg-accent-soft text-accent"
		}[tone]),
		children
	});
}
function ProgressCard({ label, value, total, tone = "primary" }) {
	const pct = total > 0 ? Math.round(value / total * 100) : 0;
	const bar = {
		primary: "bg-primary",
		success: "bg-success",
		accent: "bg-accent"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-surface": true,
		className: "card-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg font-semibold",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-lg font-bold tabular-nums",
					children: [pct, "%"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 h-4 w-full overflow-hidden rounded-full bg-muted",
				role: "progressbar",
				"aria-valuenow": pct,
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-label": label,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("h-full rounded-full transition-all", bar),
					style: { width: `${pct}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: [
					value,
					" / ",
					total
				]
			})
		]
	});
}
function EmptyState({ emoji = "📭", title, hint, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-surface": true,
		className: "card-surface flex flex-col items-center p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-5xl",
				"aria-hidden": "true",
				children: emoji
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xl font-semibold",
				children: title
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-base text-muted-foreground",
				children: hint
			}) : null,
			action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: action
			}) : null
		]
	});
}
function InfoNote({ children, tone = "primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("rounded-xl border p-4 text-base", tone === "primary" ? "border-border bg-primary-soft text-foreground" : "border-border bg-warning-soft text-foreground"),
		children
	});
}
var SLIDES = [
	{
		emoji: "🪔",
		title: {
			en: "Welcome to Sahayak",
			hi: "सहायक में आपका स्वागत है",
			mr: "सहायकमध्ये आपले स्वागत आहे"
		},
		text: {
			en: "Your friendly digital education and safety companion, designed especially for seniors.",
			hi: "वरिष्ठ नागरिकों के लिए बनाया गया आपका सरल और सुरक्षित डिजिटल साथी।",
			mr: "ज्येष्ठ नागरिकांसाठी तयार केलेला तुमचा सोपा आणि सुरक्षित डिजिटल मार्गदर्शक."
		}
	},
	{
		emoji: "📚",
		title: {
			en: "Learn Step-by-Step",
			hi: "आराम से नया सीखें",
			mr: "सावकाश नवीन शिका"
		},
		text: {
			en: "Clear lessons on smartphones, WhatsApp, UPI payments, and online services at your own pace.",
			hi: "स्मार्टफ़ोन, व्हाट्सएप और यूपीआई भुगतान अपनी गति से सरल चरणों में सीखें।",
			mr: "स्मार्टफोन, व्हॉट्सअ‍ॅप आणि यूपीआय पेमेंट तुमच्या गतीने सोप्या पायऱ्यांत शिका."
		}
	},
	{
		emoji: "🛡️",
		title: {
			en: "Stay Safe from Scams",
			hi: "ठगी से सुरक्षित रहें",
			mr: "फसवणुकीपासून सावध राहा"
		},
		text: {
			en: "Recognize fake bank calls, OTP tricks and phishing messages before anyone can fool you.",
			hi: "नकली बैंक कॉल, ओटीपी धोखाधड़ी और फ़िशिंग संदेशों को समय रहते पहचानना सीखें।",
			mr: "बनावट बँक कॉल, ओटीपी फसवणूक आणि संशयास्पद मेसेज वेळेत ओळखायला शिका."
		}
	},
	{
		emoji: "🚨",
		title: {
			en: "One-Tap Emergency Help",
			hi: "एक टैप पर आपातकालीन मदद",
			mr: "एका टॅपवर तातडीची मदत"
		},
		text: {
			en: "Immediate access to 112, 1930 cyber helpline, elderline, and family contacts anytime.",
			hi: "112, 1930 साइबर हेल्पलाइन और परिवार के नंबरों पर तुरंत आपातकालीन कॉल सुविधा।",
			mr: "११२, १९३० सायबर हेल्पलाइन आणि कुटुंबाच्या नंबरवर थेट आपत्कालीन कॉल सुविधा."
		}
	},
	{
		emoji: "🎮",
		title: {
			en: "Brain Games & Dictionary",
			hi: "दिमागी खेल और शब्दकोश",
			mr: "मेंदूचे खेळ आणि शब्दकोश"
		},
		text: {
			en: "Exercise your memory with gentle games and look up technology words in simple language.",
			hi: "आसान खेलों से याददाश्त तेज़ करें और तकनीक के शब्दों के सरल अर्थ जानें।",
			mr: "सोप्या खेळांनी स्मरणशक्ती वाढवा आणि तांत्रिक शब्दांचे सोपे अर्थ समजून घ्या."
		}
	}
];
var LEVELS = [
	{
		id: "beginner",
		emoji: "🌱",
		labelKey: "beginner",
		note: {
			en: "I am just starting out with smartphones.",
			hi: "मैं स्मार्टफ़ोन में नया हूँ, धीरे-धीरे सीखना चाहता हूँ।",
			mr: "मी स्मार्टफोन नवीन वापरत आहे, सावकाश शिकायचे आहे."
		}
	},
	{
		id: "comfortable",
		emoji: "🙂",
		labelKey: "comfortable",
		note: {
			en: "I manage everyday calls and WhatsApp, but want more confidence.",
			hi: "मैं कॉल और व्हाट्सएप चला लेता हूँ, पर डिजिटल भुगतान और सुरक्षा सीखना चाहता हूँ।",
			mr: "मी कॉल आणि व्हॉट्सअ‍ॅप वापरतो, पण पेमेंट आणि सुरक्षितता शिकायची आहे."
		}
	},
	{
		id: "confident",
		emoji: "🚀",
		labelKey: "confident",
		note: {
			en: "I use apps regularly and want to master online services and fraud protection.",
			hi: "मैं ऐप्स खुद चलाता हूँ और डिजिटल सेवाएँ व उन्नत सुरक्षा सीखना चाहता हूँ।",
			mr: "मी अ‍ॅप्स वापरतो आणि प्रगत डिजिटल सेवा व फसवणुकीपासून बचाव शिकायचा आहे."
		}
	}
];
function Onboarding() {
	const { state, update, t } = useApp();
	const [step, setStep] = (0, import_react.useState)(0);
	const finish = (level) => update({
		skillLevel: level,
		onboarded: true
	});
	const slide = SLIDES[step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh flex-col bg-background px-4 sm:px-6 py-6 sm:py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-xl flex-1 flex-col justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex flex-wrap items-center justify-between gap-x-3 gap-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex min-w-0 items-center gap-2 text-xl font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
							variant: "dashboard",
							className: "size-11 shrink-0"
						}), t("appName")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1",
						role: "group",
						"aria-label": "Language",
						children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => update({ lang: l.code }),
							"aria-pressed": state.lang === l.code,
							className: cn("min-h-11 rounded-lg border-2 px-2.5 sm:px-3 font-semibold transition-colors", state.lang === l.code ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-muted"),
							children: l.label
						}, l.code))
					})]
				}),
				slide ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface flex flex-1 flex-col items-center justify-center p-6 sm:p-8 text-center shadow-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-7xl",
							"aria-hidden": "true",
							children: slide.emoji
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 text-3xl font-bold leading-tight",
							children: pick(slide.title, state.lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-xl leading-relaxed text-muted-foreground",
							children: pick(slide.text, state.lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-base font-semibold text-muted-foreground",
							children: [
								t("stepNumber"),
								" ",
								step + 1,
								" ",
								t("ofWord"),
								" ",
								SLIDES.length + 1
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface flex-1 p-6 sm:p-8 shadow-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl sm:text-3xl font-bold leading-tight",
							children: t("comfortQuestion")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-lg text-muted-foreground",
							children: state.lang === "hi" ? "कोई भी उत्तर ग़लत नहीं है। यह सिर्फ़ आपके लिए सही पाठ चुनने में मदद करता है।" : state.lang === "mr" ? "कोणतेही उत्तर चुकीचे नाही. हे फक्त तुमच्यासाठी योग्य धडे निवडण्यास मदत करते." : "There is no wrong answer. This only helps us suggest useful lessons."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-4",
							children: LEVELS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => finish(l.id),
								className: "flex min-h-20 items-center gap-4 rounded-2xl border-2 border-border bg-card p-4 text-left transition-all hover:border-primary hover:bg-primary-soft active:scale-[0.99]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl shrink-0",
									"aria-hidden": "true",
									children: l.emoji
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xl font-bold",
										children: t(l.labelKey)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-base text-muted-foreground mt-0.5",
										children: pick(l.note, state.lang)
									})]
								})]
							}, l.id))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3 sm:flex-row",
					children: [slide ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
						size: "xl",
						fullWidth: true,
						onClick: () => setStep((s) => s + 1),
						children: t("next")
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
						variant: "outline",
						size: "xl",
						fullWidth: true,
						onClick: () => update({ onboarded: true }),
						children: t("skipIntro")
					})]
				})
			]
		})
	});
}
var NAV = [
	{
		to: "/",
		key: "home",
		shortKey: "navHome",
		Icon: House
	},
	{
		to: "/learn",
		key: "learn",
		shortKey: "navLearn",
		Icon: BookOpen
	},
	{
		to: "/safe",
		key: "staySafe",
		shortKey: "navSafe",
		Icon: Shield
	},
	{
		to: "/dictionary",
		key: "dictionary",
		shortKey: "navDict",
		Icon: BookMarked
	},
	{
		to: "/games",
		key: "games",
		shortKey: "navGames",
		Icon: Gamepad2
	},
	{
		to: "/community",
		key: "community",
		shortKey: "community",
		Icon: Users
	}
];
function LanguageSelector({ compact }) {
	const { state, update } = useApp();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-1",
		role: "group",
		"aria-label": "Language",
		children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => update({ lang: l.code }),
			"aria-pressed": state.lang === l.code,
			className: cn("min-h-11 rounded-lg border-2 px-3 text-base font-semibold transition-colors", compact ? "px-2 text-sm" : "", state.lang === l.code ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:bg-muted"),
			children: l.label
		}, l.code))
	});
}
function OfflineBanner() {
	const { t } = useApp();
	const [offline, setOffline] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const sync = () => setOffline(!navigator.onLine);
		sync();
		window.addEventListener("online", sync);
		window.addEventListener("offline", sync);
		return () => {
			window.removeEventListener("online", sync);
			window.removeEventListener("offline", sync);
		};
	}, []);
	if (!offline) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		role: "status",
		className: "bg-warning-soft px-4 py-3 text-center text-base font-medium",
		children: ["⚠️ ", t("offline")]
	});
}
function SideMenu({ open, onClose, isActive }) {
	const { t } = useApp();
	const closeRef = (0, import_react.useRef)(null);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		onClose();
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		document.body.style.overflow = "hidden";
		closeRef.current?.focus();
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [open, onClose]);
	if (!open) return null;
	const rowCls = (active) => cn("flex min-h-14 items-center gap-3 rounded-xl px-4 text-lg font-semibold transition-colors", active ? "bg-primary-soft text-primary" : "text-foreground hover:bg-muted");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-label": t("closeMenu"),
			onClick: onClose,
			className: "absolute inset-0 h-full w-full bg-black/50",
			tabIndex: -1
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": t("menu"),
			className: "absolute inset-y-0 right-0 flex w-80 max-w-[85vw] flex-col overflow-y-auto border-l border-border bg-card shadow-lift",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xl font-bold",
					children: t("appName")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					ref: closeRef,
					onClick: onClose,
					"aria-label": t("closeMenu"),
					className: "inline-flex size-11 items-center justify-center rounded-xl border border-border hover:bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						"aria-hidden": "true",
						className: "size-5"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": t("menu"),
				className: "flex flex-col gap-1 p-3",
				children: [
					NAV.map(({ to, key, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to,
						className: rowCls(isActive(to)),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							"aria-hidden": "true",
							className: "size-6"
						}), t(key)]
					}, to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 border-t border-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/emergency",
						className: "flex min-h-14 items-center gap-3 rounded-xl bg-destructive-soft px-4 text-lg font-bold text-destructive transition-colors hover:bg-destructive hover:text-destructive-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, {
							"aria-hidden": "true",
							className: "size-6"
						}), t("emergency")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/saved",
						className: rowCls(isActive("/saved")),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							"aria-hidden": "true",
							className: "size-6"
						}), t("saved")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/search",
						className: rowCls(isActive("/search")),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							"aria-hidden": "true",
							className: "size-6"
						}), t("search")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/settings",
						className: rowCls(isActive("/settings")),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
							"aria-hidden": "true",
							className: "size-6"
						}), t("settings")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/credits",
						className: rowCls(isActive("/credits")),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
							"aria-hidden": "true",
							className: "size-6"
						}), t("credits")]
					})
				]
			})]
		})]
	});
}
function EmergencyConfirm({ open, onClose }) {
	const { t } = useApp();
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-label": t("cancel"),
			onClick: onClose,
			className: "absolute inset-0 h-full w-full bg-black/60",
			tabIndex: -1
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "alertdialog",
			"aria-modal": "true",
			"aria-label": t("emergency"),
			className: "relative w-full max-w-sm rounded-2xl border-2 border-destructive bg-card p-6 shadow-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-16 items-center justify-center rounded-2xl bg-destructive-soft text-destructive",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "size-9" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-center text-2xl font-bold",
					children: t("needHelpNow")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/emergency",
						onClick: onClose,
						className: "flex min-h-14 items-center justify-center rounded-xl bg-destructive px-6 text-xl font-bold text-destructive-foreground hover:opacity-90",
						children: t("openEmergencyHelp")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "min-h-14 rounded-xl border-2 border-border bg-card px-6 text-xl font-semibold hover:bg-muted",
						children: t("cancel")
					})]
				})
			]
		})]
	});
}
function AppShell({ children }) {
	const { state, t, ready } = useApp();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [confirmOpen, setConfirmOpen] = (0, import_react.useState)(false);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xl font-semibold",
			children: "सहायक · Sahayak"
		})
	});
	if (!state.onboarded) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {});
	const isActive = (to) => to === "/" ? pathname === "/" : pathname.startsWith(to);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfflineBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2 shrink-0",
							"aria-label": t("appName"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
								variant: "dashboard",
								className: "size-10 sm:size-11"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-2xl font-bold sm:block",
								children: t("appName")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "ml-2 hidden items-center gap-1 xl:flex",
							"aria-label": "Main",
							children: NAV.map(({ to, key, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to,
								className: cn("inline-flex min-h-12 items-center gap-2 rounded-xl px-3 text-base font-semibold", isActive(to) ? "bg-primary-soft text-primary" : "text-foreground hover:bg-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									"aria-hidden": "true",
									className: "size-5"
								}), t(key)]
							}, to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-1.5 sm:gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setConfirmOpen(true),
								"aria-label": t("emergency"),
								"aria-haspopup": "dialog",
								className: "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border-2 border-destructive bg-destructive-soft px-2.5 sm:px-3 text-destructive transition-colors hover:bg-destructive hover:text-destructive-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, {
									"aria-hidden": "true",
									className: "size-5 shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden text-base font-bold sm:inline",
									children: t("emergency")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMenuOpen(true),
								"aria-label": t("menu"),
								"aria-haspopup": "dialog",
								"aria-expanded": menuOpen,
								className: "inline-flex size-11 items-center justify-center rounded-xl border border-border hover:bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
									"aria-hidden": "true",
									className: "size-5"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-3 sm:px-4 pb-2.5 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelector, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "mx-auto max-w-6xl px-4 py-6 pb-[calc(8.5rem+env(safe-area-inset-bottom))] lg:pb-10",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Main",
				className: "fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-card xl:hidden shadow-lift pb-[env(safe-area-inset-bottom)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto flex max-w-3xl",
					children: NAV.slice(0, 5).map(({ to, shortKey, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to,
							className: cn("flex min-h-16 flex-col items-center justify-center gap-0.5 px-0.5 py-2 text-center font-semibold", isActive(to) ? "text-primary font-bold" : "text-muted-foreground"),
							"aria-current": isActive(to) ? "page" : void 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								"aria-hidden": "true",
								className: "size-6"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] leading-tight sm:text-xs line-clamp-2",
								children: t(shortKey)
							})]
						})
					}, to))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideMenu, {
				open: menuOpen,
				onClose: () => setMenuOpen(false),
				isActive
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencyConfirm, {
				open: confirmOpen,
				onClose: () => setConfirmOpen(false)
			})
		]
	});
}
var TUTORIALS = [
	{
		id: "vid-whatsapp-basics",
		title: {
			en: "WhatsApp for beginners",
			hi: "शुरुआती लोगों के लिए व्हाट्सएप",
			mr: "नवशिक्यांसाठी व्हॉट्सअ‍ॅप"
		},
		description: {
			en: "A gentle walk-through of messages, voice notes, photos and calls.",
			hi: "संदेश लिखना, आवाज़ भेजना, फ़ोटो और कॉल करने की सरल सीख।",
			mr: "मेसेज, व्हॉइस मेसेज, फोटो आणि कॉल समजून घेण्याची सोपी पद्धत."
		},
		videoId: "gwSHqPFP5Wg",
		category: "WhatsApp",
		duration: "8 min",
		difficulty: "beginner"
	},
	{
		id: "vid-upi-intro",
		title: {
			en: "How UPI payments work",
			hi: "यूपीआई भुगतान कैसे काम करता है",
			mr: "यूपीआय पेमेंट कसे चालते"
		},
		description: {
			en: "Sending and receiving money safely with a UPI app.",
			hi: "यूपीआई ऐप से सुरक्षित रूप से पैसे भेजना और मँगवाना।",
			mr: "यूपीआय अ‍ॅपवरून सुरक्षितपणे पैसे पाठवणे आणि स्वीकारणे."
		},
		videoId: "TnZbdHtTgAA",
		category: "Payments",
		duration: "6 min",
		difficulty: "beginner"
	},
	{
		id: "vid-google-maps",
		title: {
			en: "Using Google Maps",
			hi: "गूगल मैप्स का उपयोग",
			mr: "गुगल मॅप्स वापरणे"
		},
		description: {
			en: "Search a place and follow spoken step-by-step directions.",
			hi: "रास्ता ढूँढ़ें और बोलकर दिशा बताने वाली सुविधा का उपयोग करें।",
			mr: "रस्ता शोधा आणि बोलून मार्गदर्शन मिळवा."
		},
		videoId: "sGDHkbAmqzc",
		category: "Services",
		duration: "9 min",
		difficulty: "comfortable"
	},
	{
		id: "vid-video-call",
		title: {
			en: "Making a video call",
			hi: "परिवार को वीडियो कॉल करना",
			mr: "कुटुंबाला व्हिडिओ कॉल करणे"
		},
		description: {
			en: "Talk face to face with your children and grandchildren.",
			hi: "अपनों से आमने-सामने वीडियो पर बात करें।",
			mr: "मुलांशी आणि नातवंडांशी समोरासमोर बोला."
		},
		videoId: "0v8YDvRHtLU",
		category: "WhatsApp",
		duration: "5 min",
		difficulty: "beginner"
	},
	{
		id: "vid-online-scams",
		title: {
			en: "How to identify online scams",
			hi: "ऑनलाइन ठगी कैसे पहचानें",
			mr: "ऑनलाइन फसवणूक कशी ओळखावी"
		},
		description: {
			en: "Common tricks used by scammers and how to spot them early.",
			hi: "ठगों के आम हथकंडे और उनसे बचने के आसान नियम।",
			mr: "फसवणुकीचे सामान्य प्रकार आणि सुरुवातीलाच कसे सावध राहावे."
		},
		videoId: "R2b1U0kR5bA",
		category: "Safety",
		duration: "10 min",
		difficulty: "comfortable"
	},
	{
		id: "vid-smartphone-basics",
		title: {
			en: "Smartphone basics explained slowly",
			hi: "स्मार्टफ़ोन की मूल बातें",
			mr: "स्मार्टफोनची मूलतत्त्वे"
		},
		description: {
			en: "Buttons, screens, settings and apps explained slowly.",
			hi: "फ़ोन के बटन, स्क्रीन और मुख्य ऐप धीरे-धीरे समझें।",
			mr: "फोनची बटने, स्क्रीन आणि मुख्य अ‍ॅप्स समजून घ्या."
		},
		videoId: "u2ZMr0Cf4ZM",
		category: "Basics",
		duration: "12 min",
		difficulty: "beginner"
	},
	{
		id: "vid-internet-safety",
		title: {
			en: "Internet safety basics",
			hi: "इंटरनेट सुरक्षा के नियम",
			mr: "इंटरनेट सुरक्षेचे नियम"
		},
		description: {
			en: "Passwords, unknown links and safe browsing habits.",
			hi: "पासवर्ड, अनजान लिंक और सुरक्षित इंटरनेट चलाने की अच्छी आदतें।",
			mr: "पासवर्ड, अनोळखी लिंक्स आणि सुरक्षित इंटरनेट वापराच्या चांगल्या सवयी."
		},
		videoId: "aO858HyFbKI",
		category: "Internet",
		duration: "7 min",
		difficulty: "comfortable"
	},
	{
		id: "vid-qr-payments",
		title: {
			en: "Scanning a QR code to pay",
			hi: "क्यूआर कोड स्कैन कर भुगतान करना",
			mr: "क्यूआर कोड स्कॅन करून पेमेंट करणे"
		},
		description: {
			en: "Paying at a shop or pharmacy with your phone camera.",
			hi: "दुकान या दवाखाने में कैमरे से क्यूआर स्कैन कर पैसे देना।",
			mr: "दुकानात फोनच्या कॅमेऱ्याने क्यूआर स्कॅन करून पैसे भरणे."
		},
		videoId: "kFVGvHDh6Kk",
		category: "Payments",
		duration: "5 min",
		difficulty: "beginner"
	},
	{
		id: "vid-otp-fraud",
		title: {
			en: "Why you must never share an OTP",
			hi: "ओटीपी कभी किसी को क्यों न बताएँ",
			mr: "ओटीपी कोणालाही का सांगू नये"
		},
		description: {
			en: "How OTP fraud happens and how to stop it with one simple habit.",
			hi: "ओटीपी की ठगी कैसे होती है और एक आदत से खुद को कैसे सुरक्षित रखें।",
			mr: "ओटीपी फसवणूक कशी होते आणि एका सवयीने कसे सुरक्षित राहावे."
		},
		videoId: "0lYRTfF3nJ4",
		category: "Safety",
		duration: "6 min",
		difficulty: "beginner"
	},
	{
		id: "vid-photos-sharing",
		title: {
			en: "Taking and sharing photos",
			hi: "फ़ोटो लेना और परिवार को भेजना",
			mr: "फोटो काढणे आणि पाठवणे"
		},
		description: {
			en: "From the camera to your family group easily.",
			hi: "कैमरे से फ़ोटो खींचकर परिवार के व्हाट्सएप ग्रुप में भेजना।",
			mr: "कॅमेऱ्याने फोटो काढून कौटुंबिक ग्रुपवर सहज पाठवणे."
		},
		videoId: "5eYYtUB9wUY",
		category: "Basics",
		duration: "7 min",
		difficulty: "beginner"
	}
];
var QUIZZES = [
	{
		id: "quiz-payments",
		title: {
			en: "Payments & UPI Safety",
			hi: "भुगतान और यूपीआई सुरक्षा",
			mr: "पेमेंट व यूपीआय सुरक्षा"
		}
	},
	{
		id: "quiz-internet",
		title: {
			en: "Internet & OTP Safety",
			hi: "इंटरनेट और ओटीपी सुरक्षा",
			mr: "इंटरनेट व ओटीपी सुरक्षा"
		}
	},
	{
		id: "quiz-whatsapp",
		title: {
			en: "WhatsApp Confidence",
			hi: "व्हाट्सएप आत्मविश्वास",
			mr: "व्हॉट्सअ‍ॅप आत्मविश्वास"
		}
	},
	{
		id: "quiz-basics",
		title: {
			en: "Smartphone Basics",
			hi: "स्मार्टफ़ोन मूल बातें",
			mr: "स्मार्टफोन मूलतत्त्वे"
		}
	}
];
var QUIZ_QUESTIONS = [
	{
		id: "q1",
		quizId: "quiz-payments",
		question: {
			en: "Should you ever tell someone your UPI PIN over a phone call?",
			hi: "क्या कभी किसी को फ़ोन पर अपना यूपीआई पिन बताना चाहिए?",
			mr: "कधीही कोणाला फोनवर यूपीआय पिन सांगावा का?"
		},
		options: {
			en: [
				"Yes, if they are from the bank",
				"No, never tell anyone",
				"Only if it is a police officer"
			],
			hi: [
				"हाँ, अगर वह बैंक से हो",
				"नहीं, कभी किसी को न बताएँ",
				"केवल अगर वह पुलिस वाला हो"
			],
			mr: [
				"होय, बँकेतून बोलत असल्यास",
				"नाही, कधीही कोणाला सांगू नये",
				"फक्त पोलीस असल्यास"
			]
		},
		answer: 1,
		explanation: {
			en: "Your UPI PIN is your private signature. Real banks and police will NEVER ask for it.",
			hi: "आपका यूपीआई पिन केवल आपके लिए है। असली बैंक या पुलिस इसे कभी नहीं माँगते।",
			mr: "तुमचा यूपीआय पिन खासगी असतो. खरी बँक किंवा पोलीस तो कधीही मागत नाहीत."
		}
	},
	{
		id: "q2",
		quizId: "quiz-payments",
		question: {
			en: "Do you need to enter your UPI PIN to RECEIVE money or a refund?",
			hi: "पैसे या रिफ़ंड पाने के लिए क्या यूपीआई पिन डालना पड़ता है?",
			mr: "पैसे किंवा परतावा मिळवण्यासाठी यूपीआय पिन टाकावा लागतो का?"
		},
		options: {
			en: [
				"No, never enter a PIN to receive money",
				"Yes, always",
				"Only for amounts above ₹5,000"
			],
			hi: [
				"नहीं, पैसे पाने के लिए कभी पिन नहीं चाहिए",
				"हाँ, हमेशा चाहिए",
				"केवल ₹5,000 से ऊपर की रकम पर"
			],
			mr: [
				"नाही, पैसे मिळताना कधीही पिन लागत नाही",
				"होय, नेहमी लागतो",
				"केवळ ₹५,००० पेक्षा जास्त असल्यास"
			]
		},
		answer: 0,
		explanation: {
			en: "Entering a PIN only deducts money from your account. Receiving money requires NO pin.",
			hi: "पिन डालने से हमेशा पैसे कटते हैं। पैसे आने पर कभी पिन नहीं डालना होता।",
			mr: "पिन टाकल्याने खात्यातून पैसे जातात. पैसे स्वीकारताना कोणत्याही पिनची गरज नसते."
		}
	},
	{
		id: "q3",
		quizId: "quiz-payments",
		question: {
			en: "Before confirming a payment in a shop, what should you verify on screen?",
			hi: "दुकान पर भुगतान करने से पहले स्क्रीन पर क्या जाँचना चाहिए?",
			mr: "दुकानात पेमेंट करण्यापूर्वी स्क्रीनवर काय तपासले पाहिजे?"
		},
		options: {
			en: [
				"The shopkeeper's name and the exact amount",
				"Only the color of the screen",
				"Nothing, just type the PIN quickly"
			],
			hi: [
				"दुकानदार का नाम और सही बिल राशि",
				"केवल स्क्रीन का रंग",
				"कुछ नहीं, सीधे पिन डाल दें"
			],
			mr: [
				"दुकानदाराचे नाव आणि अचूक रक्कम",
				"फक्त स्क्रीनचा रंग",
				"काहीच नाही, थेट पिन टाका"
			]
		},
		answer: 0,
		explanation: {
			en: "Always read the recipient's name and amount slowly before entering your PIN.",
			hi: "पिन डालने से पहले हमेशा दुकानदार का नाम और राशि दो बार ध्यान से पढ़ें।",
			mr: "पिन टाकण्यापूर्वी नेहमी समोरच्याचे नाव आणि रक्कम शांतपणे तपासून घ्या."
		}
	},
	{
		id: "q4",
		quizId: "quiz-internet",
		question: {
			en: "What is an OTP received via SMS?",
			hi: "एसएमएस पर आने वाला ओटीपी (OTP) क्या होता है?",
			mr: "एसएमएसने येणारा ओटीपी (OTP) म्हणजे काय?"
		},
		options: {
			en: [
				"A secret one-time code to approve your own transaction",
				"A coupon code for shopping",
				"A permanent phone number"
			],
			hi: [
				"आपके अपने काम को मंज़ूर करने वाला गुप्त एक-बारीय कोड",
				"खरीदारी का कूपन कोड",
				"फ़ोन नंबर"
			],
			mr: [
				"तुमचा व्यवहार मंजूर करणारा गुप्त कोड",
				"खरेदीचा कूपन कोड",
				"फोन नंबर"
			]
		},
		answer: 0,
		explanation: {
			en: "An OTP verifies you. Sharing it over a call lets scammers steal from your account.",
			hi: "ओटीपी आपकी पहचान की चाबी है। किसी को बताने से वह आपके खाते से पैसे चुरा सकता है।",
			mr: "ओटीपी म्हणजे तुमच्या खात्याची चावी. फोनवर कोणालाही सांगू नका."
		}
	},
	{
		id: "q5",
		quizId: "quiz-internet",
		question: {
			en: "A caller asks you to install AnyDesk or QuickSupport so they can 'fix' your phone. You should:",
			hi: "फ़ोन पर कोई एनीडेस्क या क्विकसपोर्ट ऐप डालने को कहे ताकि फ़ोन ठीक कर सके। आप क्या करेंगे?",
			mr: "फोनवर कोणी एनीडेस्क किंवा क्विकसपोर्ट अ‍ॅप इन्स्टॉल करायला सांगतो. तुम्ही काय कराल?"
		},
		options: {
			en: [
				"Refuse and hang up immediately",
				"Install it immediately",
				"Give them your phone password"
			],
			hi: [
				"मना करें और तुरंत कॉल काट दें",
				"तुरंत इंस्टॉल कर लेंगे",
				"फ़ोन का पासवर्ड दे देंगे"
			],
			mr: [
				"नकार द्या आणि लगेच फोन ठेवा",
				"लगेच इन्स्टॉल कराल",
				"फोनचा पासवर्ड द्याल"
			]
		},
		answer: 0,
		explanation: {
			en: "Screen sharing apps let strangers see your passwords, messages and bank PINs. Never install them.",
			hi: "स्क्रीन शेयरिंग ऐप से ठग आपके पासवर्ड और बैंक पिन देख सकते हैं। इसे कभी न डालें।",
			mr: "स्क्रीन शेअरिंग अ‍ॅप्समुळे भामट्यांना तुमचे पासवर्ड आणि पिन दिसतात. ते कधीही इन्स्टॉल करू नका."
		}
	},
	{
		id: "q6",
		quizId: "quiz-whatsapp",
		question: {
			en: "An unknown number sends a message: 'Hi Mum, lost my phone, send money urgently'. What is the FIRST step?",
			hi: "अनजान नंबर से संदेश आए: 'मम्मी, नया नंबर है, तुरंत पैसे भेजो'। सबसे पहला कदम क्या होना चाहिए?",
			mr: "अनोळखी नंबरवरून 'आई, नवा नंबर, लगेच पैसे पाठव' असा मेसेज आला. पहिली पायरी कोणती?"
		},
		options: {
			en: [
				"Call your child on their OLD saved number first to verify",
				"Send the money immediately",
				"Forward your bank details"
			],
			hi: [
				"पहले अपने बच्चे के पुराने सहेजे हुए नंबर पर कॉल करके बात करें",
				"तुरंत पैसे भेज दें",
				"बैंक का विवरण भेजें"
			],
			mr: [
				"आधी मुलाच्या जुन्या सेव्ह असलेल्या नंबरवर फोन करून खात्री करा",
				"लगेच पैसे पाठवा",
				"बँकेची माहिती पाठवा"
			]
		},
		answer: 0,
		explanation: {
			en: "A single phone call to the existing number exposes this impersonation scam immediately.",
			hi: "पुराने नंबर पर एक बार बात करने से तुरंत पता चल जाता है कि यह ठगी का संदेश है।",
			mr: "जुन्या नंबरवर एका फोन कॉलने लगेच स्पष्ट होते की हा बनावट मेसेज आहे."
		}
	},
	{
		id: "q7",
		quizId: "quiz-basics",
		question: {
			en: "How do you make text on your phone larger so it is comfortable to read?",
			hi: "फ़ोन पर अक्षरों का आकार बड़ा कैसे करें ताकि आसानी से पढ़ा जा सके?",
			mr: "फोनवर वाचण्यासाठी अक्षरे मोठी कशी करावीत?"
		},
		options: {
			en: [
				"Go to Settings → Display → Font size",
				"Tap the phone on a table",
				"Turn off the Wi-Fi"
			],
			hi: [
				"सेटिंग्स → डिस्प्ले (Display) → फॉन्ट साइज़ (Font Size) में जाएँ",
				"फ़ोन को मेज़ पर रखें",
				"वाई-फ़ाई बंद करें"
			],
			mr: [
				"सेटिंग्ज → डिस्प्ले → फॉन्ट साइजमध्ये जाऊन",
				"फोन आपटून",
				"वाय-फाय बंद करून"
			]
		},
		answer: 0,
		explanation: {
			en: "Font size in Settings makes all messages, contacts and news comfortably readable.",
			hi: "सेटिंग्स में फॉन्ट साइज़ बड़ा करने से सारे संदेश और नंबर साफ़ दिखने लगते हैं।",
			mr: "सेटिंग्जमधील फॉन्ट साइजने सर्व अक्षरे मोठी आणि वाचण्यास सोपी होतात."
		}
	}
];
var SCENARIOS = [
	{
		id: "s1",
		text: {
			en: "Someone calls claiming to be from your bank and asks you to read out the OTP sent to your phone.",
			hi: "कोई बैंक से होने का दावा कर आपके फ़ोन पर आया हुआ ओटीपी पढ़ने को कहे।",
			mr: "कोणी बँकेतून असल्याचे सांगून फोनवर आलेला ओटीपी विचारतो."
		},
		isScam: true,
		explanation: {
			en: "Real banks NEVER ask for an OTP over the phone.",
			hi: "असली बैंक कभी फ़ोन पर ओटीपी नहीं माँगता।",
			mr: "खरी बँक कधीही फोनवर ओटीपी मागत नाही."
		}
	},
	{
		id: "s2",
		text: {
			en: "Your bank's own official app asks for your UPI PIN when you pay at the grocery shop.",
			hi: "किराने की दुकान पर सामान खरीदते समय आपका असली बैंक ऐप यूपीआई पिन माँगे।",
			mr: "किराणा दुकानात पैसे भरताना तुमचे अधिकृत बँक अ‍ॅप यूपीआय पिन विचारते."
		},
		isScam: false,
		explanation: {
			en: "Entering your PIN in your own payment app to approve a purchase you made is completely normal.",
			hi: "खरीदे गए सामान का भुगतान करने के लिए अपने ऐप में पिन डालना बिल्कुल सामान्य है।",
			mr: "स्वतः खरेदी केलेल्या सामानाचे पेमेंट करताना स्वतःच्या अ‍ॅपमध्ये पिन टाकणे सुरक्षित आहे."
		}
	},
	{
		id: "s3",
		text: {
			en: "A WhatsApp message says you won ₹25 Lakh in a lucky draw, but you must transfer ₹5,000 for tax first.",
			hi: "व्हाट्सएप संदेश कहे कि आपने ₹25 लाख जीते हैं, पर पहले टैक्स के लिए ₹5,000 जमा करने होंगे।",
			mr: "व्हॉट्सअ‍ॅपवर २५ लाखांचे बक्षीस लागल्याचे सांगून ₹५,००० टॅक्स भरण्यास सांगितले जाते."
		},
		isScam: true,
		explanation: {
			en: "Real prizes NEVER ask the winner to pay money in advance.",
			hi: "सच्चे इनाम में कभी जीतने वाले से पहले पैसे नहीं माँगे जाते।",
			mr: "खऱ्या बक्षीसासाठी कधीही आधी पैसे भरावे लागत नाहीत."
		}
	},
	{
		id: "s4",
		text: {
			en: "An unknown buyer sends you a QR code and says 'Scan this code to receive your advance money'.",
			hi: "कोई खरीदार क्यूआर कोड भेजकर कहे कि 'पैसे लेने के लिए यह कोड स्कैन करें'।",
			mr: "खरेदीदार क्यूआर पाठवून सांगतो की 'पैसे मिळवण्यासाठी हा कोड स्कॅन करा'."
		},
		isScam: true,
		explanation: {
			en: "Scanning a QR code always SENDS money away. It never receives money.",
			hi: "क्यूआर स्कैन करने से हमेशा पैसे जाते हैं, कभी आते नहीं।",
			mr: "क्यूआर कोड स्कॅन केल्यास नेहमी पैसे जातात, कधीही येत नाहीत."
		}
	},
	{
		id: "s5",
		text: {
			en: "An SMS says: 'Your electricity will be cut at 9:30 PM tonight, call this 10-digit mobile number immediately'.",
			hi: "एसएमएस: 'आज रात 9:30 बजे बिजली कट जाएगी, तुरंत इस मोबाइल नंबर पर कॉल करें'।",
			mr: "एसएमएस: 'आज रात्री ९:३० वाजता वीज कापली जाईल, या मोबाईल नंबरवर लगेच फोन करा'."
		},
		isScam: true,
		explanation: {
			en: "Electricity boards give formal written notices, never urgent threats from personal mobile numbers.",
			hi: "बिजली विभाग व्यक्तिगत नंबर से रात में कनेक्शन काटने की ऐसी धमकी कभी नहीं देता।",
			mr: "वीज मंडळ लेखी नोटीस देते, वैयक्तिक नंबरवरून अशी रात्रीची धमकी देत नाही."
		}
	},
	{
		id: "s6",
		text: {
			en: "Your son visits your home and teaches you how to make a video call to your grandchild.",
			hi: "आपका बेटा घर आकर आपको नाती-पोतों से वीडियो कॉल करने का तरीका सिखाता है।",
			mr: "तुमचा मुलगा घरी येऊन नातवंडांशी व्हिडिओ कॉल करायला शिकवतो."
		},
		isScam: false,
		explanation: {
			en: "Learning in person from your trusted family members is completely safe and encouraging.",
			hi: "अपने परिवार के सामने बैठकर सीखना पूरी तरह सुरक्षित और बहुत अच्छी बात है।",
			mr: "कुटुंबातील व्यक्तींकडून प्रत्यक्ष शिकणे पूर्णपणे सुरक्षित आहे."
		}
	},
	{
		id: "s7",
		text: {
			en: "A caller claims to be a police officer on a video call and says you are in 'Digital Arrest' for a parcel.",
			hi: "वीडियो कॉल पर एक व्यक्ति पुलिस की वर्दी में कहे कि आप पार्सल के कारण 'डिजिटल अरेस्ट' हैं।",
			mr: "व्हिडिओ कॉलवर पोलीस गणवेशातील व्यक्ती पार्सलमुळे तुम्ही 'डिजिटल अरेस्ट' आहात असे सांगते."
		},
		isScam: true,
		explanation: {
			en: "There is NO 'digital arrest' in Indian law. Police never conduct trials over video calls.",
			hi: "कानून में 'डिजिटल अरेस्ट' जैसा कुछ नहीं होता। पुलिस कभी वीडियो कॉल पर गिरफ़्तारी या पैसे नहीं माँगती।",
			mr: "कायद्यात 'डिजिटल अरेस्ट' असा कोणताही प्रकार नाही. ही १००% फसवणूक आहे."
		}
	},
	{
		id: "s8",
		text: {
			en: "You install the official WhatsApp or Google Pay app directly from the Google Play Store.",
			hi: "आप गूगल प्ले स्टोर (Play Store) से सीधे व्हाट्सएप या गूगल पे ऐप इंस्टॉल करते हैं।",
			mr: "तुम्ही थेट गुगल प्ले स्टोअरवरून व्हॉट्सअ‍ॅप किंवा गुगल पे अ‍ॅप इन्स्टॉल करता."
		},
		isScam: false,
		explanation: {
			en: "The official Google Play Store checks apps before publishing and is the safe place to install them.",
			hi: "गूगल प्ले स्टोर सुरक्षित जगह है जहाँ ऐप्स की सुरक्षा जाँच होती है।",
			mr: "गुगल प्ले स्टोअर हे अधिकृत व सुरक्षित ठिकाण आहे."
		}
	},
	{
		id: "s9",
		text: {
			en: "A caller asks you to download AnyDesk or QuickSupport on your phone so he can view your screen.",
			hi: "फ़ोन पर कोई AnyDesk या QuickSupport ऐप डालने को कहे ताकि वह आपकी स्क्रीन देख सके।",
			mr: "फोनवर कोणी स्क्रीन पाहण्यासाठी AnyDesk किंवा QuickSupport अ‍ॅप टाकायला सांगतो."
		},
		isScam: true,
		explanation: {
			en: "Screen sharing gives the scammer total sight of your bank accounts and passwords.",
			hi: "स्क्रीन शेयर करने से ठग आपके बैंक खाते और पासवर्ड देख सकता है।",
			mr: "स्क्रीन शेअरिंग अ‍ॅप्समुळे भामट्यांना तुमचे सर्व पासवर्ड दिसतात."
		}
	},
	{
		id: "s10",
		text: {
			en: "You dial the customer helpline printed on the back of your bank passbook to ask a question.",
			hi: "आप किसी सवाल के लिए अपनी बैंक पासबुक के पीछे छपे नंबर पर फ़ोन मिलाते हैं।",
			mr: "शंकेचे निरसन करण्यासाठी तुम्ही पासबुकच्या मागे छापलेल्या नंबरवर बँकेला फोन करता."
		},
		isScam: false,
		explanation: {
			en: "The phone numbers printed on your physical bank passbook or ATM card are 100% genuine and safe.",
			hi: "पासबुक या एटीएम कार्ड पर छपे नंबर हमेशा असली और सुरक्षित होते हैं।",
			mr: "पासबुक किंवा एटीएम कार्डवरील नंबर १००% खरे आणि सुरक्षित असतात."
		}
	}
];
var DICTIONARY = [
	{
		id: "otp",
		term: "OTP",
		full: "One-Time Password",
		meaning: {
			en: "A temporary 4 or 6 digit code sent via SMS to verify that you are authorizing an action.",
			hi: "एसएमएस से आने वाला 4 या 6 अंकों का अस्थायी गुप्त कोड जो आपकी पहचान साबित करता है।",
			mr: "पडताळणीसाठी एसएमएसने येणारा ४ किंवा ६ अंकी तात्पुरता गुप्त कोड."
		},
		tip: {
			en: "Never share your OTP with anyone over a phone call, not even a bank manager.",
			hi: "फ़ोन पर किसी को भी कभी ओटीपी न बताएँ, चाहे वह खुद को बैंक मैनेजर ही क्यों न कहे।",
			mr: "फोनवर कोणालाही कधीही ओटीपी सांगू नका, अगदी बँक अधिकाऱ्यालाही नाही."
		},
		category: "Security"
	},
	{
		id: "upi",
		term: "UPI",
		full: "Unified Payments Interface",
		meaning: {
			en: "A government-backed system to send and receive money directly between bank accounts using mobile phones.",
			hi: "फ़ोन से सीधे बैंक से बैंक में पैसे भेजने और मँगवाने की सुरक्षित सरकारी प्रणाली।",
			mr: "फोनवरून एका बँक खात्यातून दुसऱ्या खात्यात थेट पैसे पाठवण्याची सुरक्षित सरकारी पद्धत."
		},
		tip: {
			en: "You only need to enter your PIN to SEND money, NEVER to receive money.",
			hi: "पिन केवल पैसे भेजने के लिए चाहिए, पैसे पाने के लिए कभी नहीं।",
			mr: "पिन फक्त पैसे पाठवण्यासाठी लागतो, पैसे स्वीकारण्यासाठी कधीही नाही."
		},
		category: "Payments"
	},
	{
		id: "qr",
		term: "QR Code",
		meaning: {
			en: "A black-and-white square pattern that your phone camera scans to open a payment or a webpage.",
			hi: "चौकोर काला-सफ़ेद निशान जिसे कैमरा पढ़कर दुकानदार का नाम और भुगतान खोलता है।",
			mr: "चौकोनी काळी-पांढरी नक्षी जी कॅमेऱ्याने स्कॅन करून पेमेंट किंवा माहितीचे पान उघडते."
		},
		tip: {
			en: "Scanning a QR code always SENDS money away from your account.",
			hi: "क्यूआर कोड स्कैन करने से हमेशा पैसे आपके खाते से जाते हैं।",
			mr: "क्यूआर कोड स्कॅन केल्याने नेहमी पैसे खात्यातून जातात."
		},
		category: "Payments"
	},
	{
		id: "wifi",
		term: "Wi-Fi",
		meaning: {
			en: "Wireless internet provided by a nearby router box (usually at home), without using your SIM data pack.",
			hi: "घर में लगे बॉक्स (राउटर) से मिलने वाला इंटरनेट, जिससे सिम का डेटा पैक खर्च नहीं होता।",
			mr: "घरातील राउटरकडून मिळणारे इंटरनेट, ज्यामुळे सिमचा डेटा पॅक संपत नाही."
		},
		tip: {
			en: "Connect to Wi-Fi at home to watch videos and make calls comfortably.",
			hi: "घर पर हमेशा वाई-फ़ाई जोड़ें ताकि वीडियो आराम से देख सकें।",
			mr: "घरी असताना नेहमी वाय-फाय जोडून ठेवा."
		},
		category: "Internet"
	},
	{
		id: "data",
		term: "Mobile Data",
		meaning: {
			en: "Internet provided directly by your SIM card operator (Jio, Airtel, Vi) when you are away from home Wi-Fi.",
			hi: "सिम कार्ड कंपनी की ओर से मिलने वाला इंटरनेट, जो घर से बाहर सफर में काम आता है।",
			mr: "घराबाहेर असताना सिमकार्डद्वारे मिळणारे इंटरनेट."
		},
		tip: {
			en: "Turn off Mobile Data at home when Wi-Fi is available to save your daily limit.",
			hi: "घर पर वाई-फ़ाई होने पर मोबाइल डेटा बंद रखने से पैक बचा रहता है।",
			mr: "घरी वाय-फाय असताना मोबाईल डेटा बंद ठेवल्यास पॅक वाचतो."
		},
		category: "Internet"
	},
	{
		id: "pin",
		term: "UPI PIN",
		meaning: {
			en: "A secret 4 or 6 digit number you chose that authorizes money leaving your bank account.",
			hi: "आपका चुना हुआ 4 या 6 अंकों का गुप्त कोड जो आपके खाते से पैसे जाने की मंज़ूरी देता है।",
			mr: "तुमचा ४ किंवा ६ अंकी गुप्त क्रमांक जो खात्यातून पैसे पाठवण्यास मंजुरी देतो."
		},
		tip: {
			en: "Keep your UPI PIN completely private. Cover the screen when typing it in shops.",
			hi: "अपना पिन हमेशा गुप्त रखें। दुकान में डालते समय स्क्रीन छुपा लें।",
			mr: "पिन नेहमी गुप्त ठेवा. दुकानात टाकताना स्क्रीन झाकून घ्या."
		},
		category: "Payments"
	},
	{
		id: "screenlock",
		term: "Screen Lock",
		meaning: {
			en: "A PIN, pattern or fingerprint that prevents unauthorized people from opening your phone.",
			hi: "फ़ोन पर लगा पिन या पासवर्ड जो किसी और को आपका फ़ोन खोलने से रोकता है।",
			mr: "पिन किंवा बोटाचा ठसा जो इतरांना तुमचा फोन उघडण्यापासून रोखतो."
		},
		tip: {
			en: "A screen lock protects your WhatsApp and bank apps if your phone is ever misplaced.",
			hi: "अगर फ़ोन कहीं छूट जाए तो स्क्रीन लॉक आपके बैंक और संदेशों को सुरक्षित रखता है।",
			mr: "फोन गहाळ झाल्यास स्क्रीन लॉकमुळे बँक व मेसेज सुरक्षित राहतात."
		},
		category: "Security"
	},
	{
		id: "phishing",
		term: "Phishing Link",
		meaning: {
			en: "A fake website link sent in an SMS that looks identical to your bank or electricity board.",
			hi: "एसएमएस में आया फ़र्ज़ी लिंक जो बैंक या बिजली विभाग जैसा दिखता है ताकि जानकारी चुरा सके।",
			mr: "बँकेसारखी दिसणारी बनावट लिंक जी माहिती चोरण्यासाठी पाठवली जाते."
		},
		tip: {
			en: "Never click links from unknown numbers. Open your official bank app instead.",
			hi: "अनजान नंबर से आए लिंक पर न दबाएँ। हमेशा बैंक के असली ऐप से काम करें।",
			mr: "अनोळखी नंबरवरील लिंकवर दाबू नका. अधिकृत अ‍ॅप वापरा."
		},
		category: "Security"
	},
	{
		id: "videocall",
		term: "Video Call",
		meaning: {
			en: "A phone call where both people can see each other on screen while speaking in real time.",
			hi: "ऐसा कॉल जिसमें बात करते समय सामने वाले का चेहरा स्क्रीन पर साफ़ दिखता है।",
			mr: "समोरासमोर चेहरा पाहून प्रत्यक्ष बोलता येणारा फोन कॉल."
		},
		tip: {
			en: "Video calls work best over Wi-Fi so the picture stays smooth and clear.",
			hi: "वाई-फ़ाई पर वीडियो कॉल करने से तस्वीर साफ़ और बिना रुके चलती है।",
			mr: "वाय-फायवर व्हिडिओ कॉल केल्यास चेहरा स्पष्ट दिसतो."
		},
		category: "Basics"
	},
	{
		id: "voicenote",
		term: "Voice Note",
		meaning: {
			en: "A recorded voice message on WhatsApp sent by pressing the green microphone button.",
			hi: "व्हाट्सएप पर माइक बटन दबाकर बोलकर भेजा गया आवाज़ संदेश।",
			mr: "व्हॉट्सअ‍ॅपवर माइकचे बटण दाबून बोलून पाठवलेला व्हॉइस मेसेज."
		},
		tip: {
			en: "No need to type long paragraphs: just speak your heart out in your own language.",
			hi: "टाइप करने की ज़रूरत नहीं, अपनी भाषा में आसानी से बोलकर भेजें।",
			mr: "टाइप न करता आपल्या भाषेत सहज बोलून पाठवा."
		},
		category: "WhatsApp"
	},
	{
		id: "spam",
		term: "Spam",
		meaning: {
			en: "Unwanted lottery, loan, or advertising messages sent automatically to thousands of people.",
			hi: "हज़ारों लोगों को एक साथ भेजे गए अनचाहे प्रचार, लॉटरी या लोन के संदेश।",
			mr: "अनेकांना एकाच वेळी पाठवलेले नको असलेले जाहिरातीचे किंवा फसवणुकीचे संदेश."
		},
		tip: {
			en: "Block and report spam messages on WhatsApp so they can never disturb you again.",
			hi: "व्हाट्सएप पर स्पैम संदेशों को ब्लॉक कर दें ताकि वे दोबारा न आ सकें।",
			mr: "व्हॉट्सअ‍ॅपवर अशा मेसेजला ब्लॉक करा जेणेकरून ते पुन्हा त्रास देणार नाहीत."
		},
		category: "Security"
	},
	{
		id: "app",
		term: "App",
		full: "Application",
		meaning: {
			en: "A software program on your phone designed for a specific task, shown as an icon on screen.",
			hi: "फ़ोन की स्क्रीन पर दिखने वाला प्रोग्राम, जैसे व्हाट्सएप, यूट्यूब या कैमरा।",
			mr: "फोनच्या स्क्रीनवर दिसणारे साधन, जसे व्हॉट्सअ‍ॅप, कॅमेरा किंवा गुगल."
		},
		tip: {
			en: "Only install apps from the official Google Play Store or Apple App Store.",
			hi: "ऐप हमेशा केवल आधिकारिक गूगल प्ले स्टोर से ही डालें।",
			mr: "अ‍ॅप्स नेहमी अधिकृत गुगल प्ले स्टोअरवरूनच घ्यावेत."
		},
		category: "Basics"
	},
	{
		id: "malware",
		term: "Malware",
		meaning: {
			en: "Harmful software that secretly enters your phone to steal information or damage it.",
			hi: "आपके फ़ोन में चुपके से घुसकर जानकारी चुराने या नुकसान पहुँचाने वाला हानिकारक सॉफ़्टवेयर।",
			mr: "तुमच्या फोनमध्ये चोरट्याने शिरून माहिती चोरणारे किंवा नुकसान करणारे हानिकारक सॉफ्टवेअर."
		},
		tip: {
			en: "Never install apps from links sent in messages.",
			hi: "संदेशों में आए लिंक से कभी ऐप इंस्टॉल न करें।",
			mr: "मेसेजमधील लिंकवरून कधीही अ‍ॅप इंस्टॉल करू नका."
		},
		category: "Security"
	},
	{
		id: "virus",
		term: "Virus",
		meaning: {
			en: "A type of malware that spreads from one device to another, like a sickness.",
			hi: "बीमारी की तरह एक फ़ोन से दूसरे फ़ोन में फैलने वाला मैलवेयर।",
			mr: "आजारासारखे एका फोनमधून दुसऱ्या फोनमध्ये पसरणारे मालवेअर."
		},
		tip: {
			en: "An antivirus app from the Play Store can help find and remove it.",
			hi: "प्ले स्टोर का एंटीवायरस ऐप इसे खोजकर हटाने में मदद करता है।",
			mr: "प्ले स्टोअरचे अँटीव्हायरस अ‍ॅप ते शोधून काढण्यास मदत करते."
		},
		category: "Security"
	},
	{
		id: "screenshare",
		term: "Screen Sharing",
		meaning: {
			en: "Apps like AnyDesk that let a stranger see and control your phone screen from far away.",
			hi: "एनीडेस्क जैसे ऐप जो किसी अजनबी को दूर से आपकी स्क्रीन देखने और नियंत्रित करने देते हैं।",
			mr: "एनीडेस्कसारखे अ‍ॅप ज्यामुळे अनोळखी व्यक्ती दूरून तुमची स्क्रीन पाहू व चालवू शकते."
		},
		tip: {
			en: "No bank or office ever needs to see your screen. Never install it for a caller.",
			hi: "किसी भी बैंक या दफ़्तर को आपकी स्क्रीन देखने की ज़रूरत नहीं होती। कॉलर के लिए कभी इंस्टॉल न करें।",
			mr: "कोणत्याही बँकेला तुमची स्क्रीन पाहण्याची गरज नसते. कॉलरसाठी कधीही इंस्टॉल करू नका."
		},
		category: "Security"
	},
	{
		id: "simswap",
		term: "SIM Swap Scam",
		meaning: {
			en: "When a thief gets a duplicate copy of your SIM card to receive your OTPs.",
			hi: "जब ठग आपके सिम की नकली कॉपी बनवाकर आपके ओटीपी पाने लगते हैं।",
			mr: "चोर तुमच्या सिमची दुसरी प्रत मिळवून तुमचे ओटीपी मिळवतात."
		},
		tip: {
			en: "If your phone suddenly loses network, call your mobile operator at once.",
			hi: "अगर फ़ोन का नेटवर्क अचानक चला जाए, तो तुरंत अपनी मोबाइल कंपनी को फ़ोन करें।",
			mr: "फोनचे नेटवर्क अचानक गेले तर लगेच मोबाईल कंपनीला फोन करा."
		},
		category: "Security"
	},
	{
		id: "twofactor",
		term: "Two-Factor Authentication",
		meaning: {
			en: "An extra safety layer: password plus an OTP, so thieves cannot open your account.",
			hi: "सुरक्षा की दूसरी दीवार: पासवर्ड के साथ ओटीपी, ताकि ठग आपका खाता न खोल सकें।",
			mr: "सुरक्षेची दुसरी पातळी: पासवर्डसह ओटीपी, जेणेकरून चोर खाते उघडू शकत नाहीत."
		},
		tip: {
			en: "Turn it on for WhatsApp and email — it takes one minute.",
			hi: "व्हाट्सएप और ईमेल पर इसे चालू करें — सिर्फ़ एक मिनट लगता है।",
			mr: "व्हॉट्सअ‍ॅप आणि ईमेलसाठी ते चालू करा — फक्त एक मिनिट लागतो."
		},
		category: "Security"
	},
	{
		id: "fakeapp",
		term: "Fake App",
		meaning: {
			en: "A copy of a real app (like a bank app) made by thieves to steal your details.",
			hi: "असली ऐप जैसी दिखने वाली नकली ऐप जो ठग जानकारी चुराने के लिए बनाते हैं।",
			mr: "खऱ्या अ‍ॅपसारखी दिसणारी बनावट अ‍ॅप जी चोर माहिती चोरण्यासाठी बनवतात."
		},
		tip: {
			en: "Check the download count and reviews before installing any app.",
			hi: "कोई भी ऐप डालने से पहले उसके डाउनलोड और रिव्यू ज़रूर देखें।",
			mr: "कोणतेही अ‍ॅप घेण्यापूर्वी त्याचे डाउनलोड व अभिप्राय नक्की पाहा."
		},
		category: "Security"
	},
	{
		id: "cybercrime",
		term: "Cyber Crime",
		meaning: {
			en: "Crimes done using phones or the internet, like stealing money or cheating online.",
			hi: "फ़ोन या इंटरनेट से की जाने वाली ठगी, जैसे पैसे चुराना या ऑनलाइन धोखा।",
			mr: "फोन किंवा इंटरनेटद्वारे केली जाणारी फसवणूक, जसे पैसे चोरणे किंवा ऑनलाइन फसवणे."
		},
		tip: {
			en: "Report it at cybercrime.gov.in or call 1930.",
			hi: "साइबरक्राइम.जीओवी.इन पर शिकायत करें या 1930 पर कॉल करें।",
			mr: "cybercrime.gov.in वर तक्रार करा किंवा 1930 वर फोन करा."
		},
		category: "Security"
	},
	{
		id: "helpline1930",
		term: "Helpline 1930",
		meaning: {
			en: "The national number to report online money fraud, available all day.",
			hi: "ऑनलाइन ठगी की शिकायत का राष्ट्रीय नंबर, जो हर समय उपलब्ध है।",
			mr: "ऑनलाइन फसवणुकीची तक्रार करण्याचा राष्ट्रीय क्रमांक, जो सदैव उपलब्ध आहे."
		},
		tip: {
			en: "Call right after money is stolen — quick calls can freeze the money.",
			hi: "पैसे कटने के तुरंत बाद कॉल करने पर पैसे रुकने की संभावना सबसे ज़्यादा होती है।",
			mr: "पैसे गेल्यावर लगेच फोन केल्यास पैसे अडवण्याची शक्यता सर्वाधिक असते."
		},
		category: "Security"
	},
	{
		id: "digitalarrest",
		term: "Digital Arrest",
		meaning: {
			en: "A fake video-call threat where crooks pose as police and say you are under arrest at home.",
			hi: "नकली वीडियो कॉल धमकी, जिसमें ठग पुलिस बनकर कहते हैं कि आप घर पर ही गिरफ़्तार हैं।",
			mr: "बनावट व्हिडिओ कॉल धमकी, ज्यात चोर पोलीस बनून म्हणतात की तुम्ही घरच्या घरी अटकेत आहात."
		},
		tip: {
			en: "Real police never arrest anyone over a video call.",
			hi: "असली पुलिस कभी वीडियो कॉल पर किसी को गिरफ़्तार नहीं करती।",
			mr: "खरे पोलीस कधीही व्हिडिओ कॉलवरून अटक करत नाहीत."
		},
		category: "Security"
	},
	{
		id: "strongpassword",
		term: "Strong Password",
		meaning: {
			en: "A secret code that is long and mixes letters, numbers and symbols — hard to guess.",
			hi: "लंबा और अक्षरों, अंकों व चिह्नों वाला गुप्त कोड, जिसका अंदाज़ा लगाना मुश्किल हो।",
			mr: "लांब व अक्षरे, अंक आणि चिन्हे असलेला गुप्त कोड जो अंदाजणे कठीण असते."
		},
		tip: {
			en: "Never use birthdays or 1234. Use a line from a song you love.",
			hi: "जन्मदिन या 1234 कभी न रखें। अपने पसंदीदा गीत की एक पंक्ति रखें।",
			mr: "जन्मदिवस किंवा 1234 कधीही वापरू नका. आवडत्या गाण्यातील एक ओळ वापरा."
		},
		category: "Security"
	},
	{
		id: "netbanking",
		term: "Net Banking",
		meaning: {
			en: "Using your bank's own website or app to check balance and transfer money.",
			hi: "अपनी बैंक की वेबसाइट या ऐप से बैलेंस देखना और पैसे भेजना।",
			mr: "तुमच्या बँकेच्या संकेतस्थळ किंवा अ‍ॅपद्वारे शिल्लक पाहणे व पैसे पाठवणे."
		},
		tip: {
			en: "Open it only by typing your bank's name yourself, never from SMS links.",
			hi: "इसे हमेशा बैंक का नाम खुद लिखकर खोलें, एसएमएस लिंक से कभी नहीं।",
			mr: "ते नेहमी बँकेचे नाव स्वतः लिहून उघडा, एसएमएस लिंकवरून कधीही नाही."
		},
		category: "Payments"
	},
	{
		id: "wallet",
		term: "Digital Wallet",
		meaning: {
			en: "An app like Paytm where you keep a little money for small everyday payments.",
			hi: "पेटीएम जैसे ऐप जिनमें छोटे-मोटे भुगतान के लिए थोड़े पैसे रखे जाते हैं।",
			mr: "पेटीएमसारखे अ‍ॅप ज्यात रोजच्या छोट्या पेमेंटसाठी थोडे पैसे ठेवले जातात."
		},
		tip: {
			en: "Keep only a small amount in the wallet, like cash in a purse.",
			hi: "वॉलेट में पर्स की तरह थोड़े ही पैसे रखें।",
			mr: "वॉलेटमध्ये पाकिटासारखे थोडेच पैसे ठेवा."
		},
		category: "Payments"
	},
	{
		id: "ifsc",
		term: "IFSC Code",
		meaning: {
			en: "An 11-character code that tells which bank branch an account belongs to.",
			hi: "11 अक्षरों का कोड जो बताता है कि खाता किस बैंक की किस शाखा का है।",
			mr: "११ अंकी कोड जो सांगतो की खाते कोणत्या बँकेच्या कोणत्या शाखेचे आहे."
		},
		tip: {
			en: "It is safe to share IFSC with someone who is sending you money.",
			hi: "पैसे भेजने वाले को आईएफएससी बताना सुरक्षित है।",
			mr: "तुम्हाला पैसे पाठवणाऱ्याला आयएफएससी सांगणे सुरक्षित आहे."
		},
		category: "Payments"
	},
	{
		id: "atmpin",
		term: "ATM PIN",
		meaning: {
			en: "The secret 4-digit number you type at an ATM machine to take out cash.",
			hi: "एटीएम से पैसे निकालने के लिए डाला जाने वाला 4 अंकों का गुप्त नंबर।",
			mr: "एटीएममधून पैसे काढण्यासाठी टाकला जाणारा ४ अंकी गुप्त क्रमांक."
		},
		tip: {
			en: "Cover the keypad with your hand while typing your PIN.",
			hi: "पिन डालते समय हाथ से कीबोर्ड ढक लें।",
			mr: "पिन टाकताना हाताने कीपॅड झाका."
		},
		category: "Payments"
	},
	{
		id: "debitcard",
		term: "Debit Card",
		meaning: {
			en: "The plastic card linked to your bank account, used at ATMs and shops.",
			hi: "आपके बैंक खाते से जुड़ा प्लास्टिक कार्ड, जो एटीएम और दुकानों पर चलता है।",
			mr: "तुमच्या बँक खात्याशी जोडलेले प्लास्टिक कार्ड, जे एटीएम व दुकानांत वापरता येते."
		},
		tip: {
			en: "The CVV (3 digits on the back) is like an OTP — never share it.",
			hi: "कार्ड के पीछे के 3 अंक (सीवीवी) ओटीपी जैसे हैं — कभी साझा न करें।",
			mr: "कार्डच्या मागील ३ अंक (सीव्हीव्ही) ओटीपीसारखे आहेत — कधीही शेअर करू नका."
		},
		category: "Payments"
	},
	{
		id: "refundscam",
		term: "Refund Scam",
		meaning: {
			en: "A trick where someone promises to return your money but asks you to scan a QR or enter your PIN.",
			hi: "ऐसी ठगी जहाँ कोई पैसे लौटाने का वादा करके क्यूआर स्कैन या पिन डलवाता है।",
			mr: "पैसे परत देण्याचे आमिष दाखवून क्यूआर स्कॅन किंवा पिन टाकून घेण्याची फसवणूक."
		},
		tip: {
			en: "Receiving a refund never needs your PIN or a QR scan.",
			hi: "पैसे पाने के लिए कभी पिन या क्यूआर स्कैन की ज़रूरत नहीं होती।",
			mr: "परतावा मिळवण्यासाठी कधीही पिन किंवा क्यूआर स्कॅनची गरज नसते."
		},
		category: "Payments"
	},
	{
		id: "collectrequest",
		term: "Collect Request",
		meaning: {
			en: "A UPI message asking you to approve a payment — approving sends money OUT of your account.",
			hi: "यूपीआई पर आया भुगतान का अनुरोध — इसे स्वीकार करने से आपके खाते से पैसे जाते हैं।",
			mr: "यूपीआयवरील पेमेंटची विनंती — ती स्वीकारल्यास तुमच्या खात्यातून पैसे जातात."
		},
		tip: {
			en: "If you did not order anything, never accept a collect request.",
			hi: "अगर आपने कुछ नहीं मँगाया, तो कलेक्ट रिक्वेस्ट कभी स्वीकार न करें।",
			mr: "तुम्ही काही मागवले नसेल तर कलेक्ट रिक्वेस्ट कधीही स्वीकारू नका."
		},
		category: "Payments"
	},
	{
		id: "autopay",
		term: "Auto-Pay",
		meaning: {
			en: "A setting that lets an app cut money from your account automatically every month.",
			hi: "सुविधा जिससे ऐप हर महीने अपने आप आपके खाते से पैसे काटता है।",
			mr: "सुविधा ज्यामुळे अ‍ॅप दर महिन्याला आपोआप तुमच्या खात्यातून पैसे कापते."
		},
		tip: {
			en: "Check your bank statement for small unknown cuts — they may be old auto-pays.",
			hi: "बैंक स्टेटमेंट में छोटी अनजान कटौती देखें — वे पुराने ऑटो-पे हो सकते हैं।",
			mr: "बँक स्टेटमेंटमधील छोटे अनोळखी कपात पाहा — ते जुने ऑटो-पे असू शकतात."
		},
		category: "Payments"
	},
	{
		id: "browser",
		term: "Browser",
		meaning: {
			en: "The app you use to open websites — like Chrome or Safari.",
			hi: "वेबसाइट खोलने वाला ऐप — जैसे क्रोम या सफ़ारी।",
			mr: "वेबसाइट उघडण्याचे अ‍ॅप — जसे क्रोम किंवा सफारी."
		},
		tip: {
			en: "Look for the small lock symbol before typing passwords on a website.",
			hi: "वेबसाइट पर पासवर्ड डालने से पहले छोटे ताले का निशान देखें।",
			mr: "वेबसाइटवर पासवर्ड टाकण्यापूर्वी छोटे कुलूपाचे चिन्ह पाहा."
		},
		category: "Internet"
	},
	{
		id: "searchengine",
		term: "Search Engine",
		meaning: {
			en: "A website like Google where you type a question and get answers from the internet.",
			hi: "गूगल जैसी वेबसाइट जहाँ सवाल लिखने पर इंटरनेट से जवाब मिलते हैं।",
			mr: "गुगलसारखे संकेतस्थळ जिथे प्रश्न लिहिल्यास इंटरनेटवरून उत्तरे मिळतात."
		},
		tip: {
			en: "Helpline numbers found in search results are often fake — use your passbook number.",
			hi: "सर्च में मिलने वाले हेल्पलाइन नंबर अक्सर नकली होते हैं — पासबुक का नंबर ही इस्तेमाल करें।",
			mr: "शोधात मिळणारे हेल्पलाइन क्रमांक बहुधा बनावट असतात — पासबुकवरील क्रमांकच वापरा."
		},
		category: "Internet"
	},
	{
		id: "website",
		term: "Website",
		meaning: {
			en: "A place on the internet with pages of information, like a shop or a bank branch online.",
			hi: "इंटरनेट पर जानकारी की जगह, जैसे किसी दुकान या बैंक की ऑनलाइन शाखा।",
			mr: "इंटरनेटवरील माहितीचे ठिकाण, जसे दुकान किंवा बँकेची ऑनलाइन शाखा."
		},
		tip: {
			en: "A real bank website starts with https and shows a lock symbol.",
			hi: "असली बैंक वेबसाइट एचटीटीपीएस से शुरू होती है और ताला दिखाती है।",
			mr: "खरी बँक वेबसाइट https ने सुरू होते आणि कुलूप दाखवते."
		},
		category: "Internet"
	},
	{
		id: "cloud",
		term: "Cloud",
		meaning: {
			en: "Safe online storage for your photos and contacts, kept by big companies like Google.",
			hi: "आपकी तस्वीरों और संपर्कों की सुरक्षित ऑनलाइन जगह, जो गूगल जैसी कंपनियाँ रखती हैं।",
			mr: "तुमचे फोटो व संपर्क ठेवणारी सुरक्षित ऑनलाइन जागा, जी गुगलसारख्या कंपन्या सांभाळतात."
		},
		tip: {
			en: "If your phone breaks, cloud photos can still be recovered on a new phone.",
			hi: "फ़ोन खराब हो जाए तो क्लाउड की तस्वीरें नए फ़ोन पर वापस मिल सकती हैं।",
			mr: "फोन खराब झाल्यास क्लाउडचे फोटो नव्या फोनवर परत मिळू शकतात."
		},
		category: "Internet"
	},
	{
		id: "update",
		term: "Update",
		meaning: {
			en: "A free upgrade that makes an app or your phone safer and better.",
			hi: "मुफ़्त सुधार जो ऐप या फ़ोन को ज़्यादा सुरक्षित और बेहतर बनाता है।",
			mr: "मोफत सुधारणा जी अ‍ॅप किंवा फोन अधिक सुरक्षित व चांगला बनवते."
		},
		tip: {
			en: "Always tap 'Update' when your apps ask — it fixes safety holes.",
			hi: "जब ऐप पूछे तो हमेशा 'अपडेट' दबाएँ — यह सुरक्षा की कमियाँ ठीक करता है।",
			mr: "अ‍ॅप विचारेल तेव्हा नेहमी 'अपडेट' दाबा — ते सुरक्षेतील त्रुटी दुरुस्त करते."
		},
		category: "Internet"
	},
	{
		id: "download",
		term: "Download",
		meaning: {
			en: "Copying something from the internet onto your phone, like an app or a photo.",
			hi: "इंटरनेट से ऐप या फ़ोटो जैसी चीज़ अपने फ़ोन में लाना।",
			mr: "इंटरनेटवरून अ‍ॅप किंवा फोटोसारखी गोष्ट तुमच्या फोनमध्ये आणणे."
		},
		tip: {
			en: "Only download apps from the Play Store, not from message links.",
			hi: "ऐप केवल प्ले स्टोर से डालें, संदेश के लिंक से नहीं।",
			mr: "अ‍ॅप फक्त प्ले स्टोअरमधून घ्या, मेसेज लिंकवरून नाही."
		},
		category: "Internet"
	},
	{
		id: "playstore",
		term: "Play Store",
		meaning: {
			en: "Google's official shop for phone apps — every app there is checked for safety.",
			hi: "फ़ोन ऐप की गूगल की आधिकारिक दुकान — यहाँ हर ऐप की जाँच की जाती है।",
			mr: "फोन अ‍ॅप्सचे गुगलचे अधिकृत दुकान — येथील प्रत्येक अ‍ॅप तपासलेले असते."
		},
		tip: {
			en: "If an app is not in the Play Store, do not install it.",
			hi: "जो ऐप प्ले स्टोर पर नहीं है, उसे कभी इंस्टॉल न करें।",
			mr: "जे अ‍ॅप प्ले स्टोअरमध्ये नाही, ते कधीही इंस्टॉल करू नका."
		},
		category: "Internet"
	},
	{
		id: "googleaccount",
		term: "Google Account",
		meaning: {
			en: "One login that connects Gmail, Maps, Play Store and your phone backup.",
			hi: "एक लॉगिन जो जीमेल, मैप्स, प्ले स्टोर और फ़ोन बैकअप को जोड़ता है।",
			mr: "एक लॉगिन जो जीमेल, मॅप्स, प्ले स्टोअर आणि फोन बॅकअप जोडते."
		},
		tip: {
			en: "Write the password on paper and keep it safely at home.",
			hi: "पासवर्ड कागज़ पर लिखकर घर पर सुरक्षित रखें।",
			mr: "पासवर्ड कागदावर लिहून घरी सुरक्षित ठेवा."
		},
		category: "Internet"
	},
	{
		id: "group",
		term: "WhatsApp Group",
		meaning: {
			en: "A shared chat where many people can send messages and photos together.",
			hi: "साझा चैट जहाँ कई लोग एक साथ संदेश और फ़ोटो भेज सकते हैं।",
			mr: "सामायिक चॅट जिथे अनेक लोक एकत्र मेसेज व फोटो पाठवू शकतात."
		},
		tip: {
			en: "Stop strangers from adding you: Settings → Privacy → Groups → My Contacts.",
			hi: "अजनबियों को जोड़ने से रोकें: सेटिंग्स → प्राइवेसी → ग्रुप्स → मेरे संपर्क।",
			mr: "अनोळखींना जोडण्यापासून थांबवा: सेटिंग्ज → प्रायव्हसी → ग्रुप्स → माझे संपर्क."
		},
		category: "WhatsApp"
	},
	{
		id: "forward",
		term: "Forwarded Message",
		meaning: {
			en: "A message someone copied and re-sent — marked with a 'Forwarded' label.",
			hi: "किसी का भेजा संदेश जो दोबारा भेजा गया — उस पर 'फ़ॉरवर्डेड' लिखा होता है।",
			mr: "कोणीतरी पुढे पाठवलेला मेसेज — त्यावर 'फॉरवर्डेड' असे लिहिले असते."
		},
		tip: {
			en: "Forwarded news is often false — check before believing or sharing.",
			hi: "फ़ॉरवर्ड की गई खबर अक्सर झूठी होती है — मानने या भेजने से पहले जाँचें।",
			mr: "फॉरवर्ड केलेली बातमी बहुधा खोटी असते — मानण्यापूर्वी किंवा पाठवण्यापूर्वी तपासा."
		},
		category: "WhatsApp"
	},
	{
		id: "blockreport",
		term: "Block & Report",
		meaning: {
			en: "WhatsApp buttons that stop a stranger from messaging you and alert WhatsApp.",
			hi: "व्हाट्सएप के बटन जो अजनबी को संदेश भेजने से रोकते हैं और व्हाट्सएप को सूचना देते हैं।",
			mr: "व्हॉट्सअ‍ॅपची बटणे जी अनोळखी व्यक्तीला मेसेजपासून थांबवतात व व्हॉट्सअ‍ॅपला कळवतात."
		},
		tip: {
			en: "Blocking someone is not rude — it is taking care of yourself.",
			hi: "किसी को ब्लॉक करना बुरा नहीं — यह अपनी देखभाल है।",
			mr: "कोणाला ब्लॉक करणे चुकीचे नाही — ती स्वतःची काळजी आहे."
		},
		category: "WhatsApp"
	},
	{
		id: "twostep",
		term: "Two-Step Verification",
		meaning: {
			en: "A WhatsApp safety setting that asks for your own secret PIN when opening WhatsApp on a new phone.",
			hi: "व्हाट्सएप सुरक्षा सेटिंग जो नए फ़ोन पर व्हाट्सएप खोलने पर आपका अपना गुप्त पिन माँगता है।",
			mr: "व्हॉट्सअ‍ॅप सुरक्षा सेटिंग जी नव्या फोनवर व्हॉट्सअ‍ॅप उघडताना तुमचा स्वतःचा गुप्त पिन मागते."
		},
		tip: {
			en: "Turn it on today: WhatsApp → Settings → Account → Two-step verification.",
			hi: "आज ही चालू करें: व्हाट्सएप → सेटिंग्स → अकाउंट → टू-स्टेप वेरिफ़िकेशन।",
			mr: "आजच चालू करा: व्हॉट्सअ‍ॅप → सेटिंग्ज → अकाउंट → टू-स्टेप व्हेरिफिकेशन."
		},
		category: "WhatsApp"
	},
	{
		id: "status",
		term: "WhatsApp Status",
		meaning: {
			en: "A photo or message that stays visible to your contacts for 24 hours, then disappears.",
			hi: "फ़ोटो या संदेश जो 24 घंटे तक आपके संपर्कों को दिखता है, फिर गायब हो जाता है।",
			mr: "फोटो किंवा मेसेज जो २४ तास तुमच्या संपर्कांना दिसतो, मग नाहीसा होतो."
		},
		tip: {
			en: "Set status to be seen only by your contacts, not everyone.",
			hi: "स्टेटस को सिर्फ़ अपने संपर्कों तक रखें, सबके लिए नहीं।",
			mr: "स्टेटस फक्त तुमच्या संपर्कांपुरता ठेवा, सर्वांसाठी नाही."
		},
		category: "WhatsApp"
	},
	{
		id: "mute",
		term: "Mute",
		meaning: {
			en: "Silencing a group or person so their messages arrive without beeping.",
			hi: "किसी ग्रुप या व्यक्ति को चुप करना ताकि संदेश आएं पर आवाज़ न हो।",
			mr: "एखादा ग्रुप किंवा व्यक्ती शांत करणे जेणेकरून मेसेज येतील पण आवाज होणार नाही."
		},
		tip: {
			en: "Mute noisy groups for peace — messages will still be there when you want.",
			hi: "शांति के लिए शोर मचाने वाले ग्रुप म्यूट करें — संदेश फिर भी मिलते रहेंगे।",
			mr: "शांततेसाठी गोंगाट करणारे ग्रुप म्यूट करा — मेसेज तरीही मिळत राहतील."
		},
		category: "WhatsApp"
	},
	{
		id: "smartphone",
		term: "Smartphone",
		meaning: {
			en: "A phone with a big touch screen that can make calls, show photos and run apps.",
			hi: "बड़ी टच स्क्रीन वाला फ़ोन जो कॉल, फ़ोटो और ऐप चला सकता है।",
			mr: "मोठ्या टच स्क्रीनचा फोन जो कॉल, फोटो आणि अ‍ॅप्स चालवू शकतो."
		},
		tip: {
			en: "Everything in this app works on any smartphone — Android or iPhone.",
			hi: "इस ऐप की हर बात किसी भी स्मार्टफ़ोन पर चलती है — एंड्रॉइड या आईफ़ोन।",
			mr: "या अ‍ॅपमधील सर्व काही कोणत्याही स्मार्टफोनवर चालते — अँड्रॉइड किंवा आयफोन."
		},
		category: "Basics"
	},
	{
		id: "touchscreen",
		term: "Touch Screen",
		meaning: {
			en: "A screen you control by gently tapping or sliding your finger, not by buttons.",
			hi: "जिस स्क्रीन पर बटन की जगह उँगली से हल्के दबाव या सरकाव से काम होता है।",
			mr: "ज्या स्क्रीनवर बटनाऐवजी बोटाने हलके टॅप किंवा सरकवून काम होते."
		},
		tip: {
			en: "Tap gently once — pressing hard is not needed.",
			hi: "हल्के से एक बार दबाएँ — ज़ोर से दबाने की ज़रूरत नहीं।",
			mr: "हलके एकदा टॅप करा — जोरात दाबण्याची गरज नाही."
		},
		category: "Basics"
	},
	{
		id: "simcard",
		term: "SIM Card",
		meaning: {
			en: "The small chip from Jio, Airtel or Vi that gives your phone its number and network.",
			hi: "जियो, एयरटेल या वीआई की छोटी चिप जो फ़ोन को नंबर और नेटवर्क देती है।",
			mr: "जिओ, एअरटेल किंवा व्हीआयची छोटी चिप जी फोनला क्रमांक आणि नेटवर्क देते."
		},
		tip: {
			en: "Your SIM number never changes even if you buy a new phone.",
			hi: "नया फ़ोन लेने पर भी आपका सिम नंबर वही रहता है।",
			mr: "नवीन फोन घेतला तरी तुमचा सिम क्रमांक तोच राहतो."
		},
		category: "Basics"
	},
	{
		id: "battery",
		term: "Battery & Charging",
		meaning: {
			en: "The part that stores power; charging fills it, usually overnight.",
			hi: "फ़ोन का हिस्सा जो बिजली रखता है; चार्जिंग इसे भरता है, आमतौर पर रात में।",
			mr: "फोनचा भाग जो वीज साठवतो; चार्जिंगने तो भरतो, साधारण रात्री."
		},
		tip: {
			en: "Use only the charger that came with the phone or one from a good shop.",
			hi: "फ़ोन के साथ आया या अच्छी दुकान का ही चार्जर इस्तेमाल करें।",
			mr: "फोनसोबत आलेले किंवा चांगल्या दुकानातीलच चार्जर वापरा."
		},
		category: "Basics"
	},
	{
		id: "notification",
		term: "Notification",
		meaning: {
			en: "A small alert at the top of your screen when a message or reminder arrives.",
			hi: "संदेश या याद आने पर स्क्रीन के ऊपर दिखने वाली छोटी सूचना।",
			mr: "मेसेज किंवा आठवण आल्यावर स्क्रीनच्या वर दिसणारी छोटी सूचना."
		},
		tip: {
			en: "Swipe from the top of the screen down to see all your notifications.",
			hi: "सभी सूचनाएँ देखने के लिए स्क्रीन के ऊपर से नीचे की ओर खींचें।",
			mr: "सर्व सूचना पाहण्यासाठी स्क्रीनच्या वरून खाली ओढा."
		},
		category: "Basics"
	},
	{
		id: "screenshot",
		term: "Screenshot",
		meaning: {
			en: "A photo of whatever is on your screen right now, saved in your gallery.",
			hi: "आपकी स्क्रीन पर जो दिख रहा है उसकी तस्वीर, जो गैलरी में सहेजी जाती है।",
			mr: "तुमच्या स्क्रीनवर जे दिसते त्याचा फोटो, जो गॅलरीत जतन होतो."
		},
		tip: {
			en: "Take one of any fraud message before deleting it — it helps in a complaint.",
			hi: "ठगी के संदेश को हटाने से पहले स्क्रीनशॉट ले लें — शिकायत में काम आता है।",
			mr: "फसवणुकीचा मेसेज हटवण्यापूर्वी स्क्रीनशॉट घ्या — तक्रारीत उपयोगी पडतो."
		},
		category: "Basics"
	}
];
var HELP_TOPICS = [
	{
		id: "suspicious-call",
		emoji: "📞",
		title: {
			en: "I received a suspicious or threatening call",
			hi: "मुझे संदिग्ध या डराने वाला कॉल आया",
			mr: "मला संशयास्पद किंवा भीती दाखवणारा कॉल आला"
		},
		steps: {
			en: [
				"Do not panic. Calmly end the call immediately.",
				"Never share your OTP, UPI PIN, or ATM card details.",
				"If they claimed to be from your bank, call the number printed on your passbook.",
				"Tell a family member or trusted neighbor right away."
			],
			hi: [
				"घबराएँ नहीं। तुरंत और शांति से कॉल काट दें।",
				"अपना ओटीपी, यूपीआई पिन या एटीएम कार्ड का नंबर कभी न बताएँ।",
				"अगर कॉलर ने बैंक से होने का दावा किया हो, तो पासबुक पर छपे नंबर पर खुद बात करें।",
				"परिवार के किसी सदस्य या भरोसेमंद पड़ोसी को तुरंत पूरी बात बताएं।"
			],
			mr: [
				"घाबरू नका. लगेच शांतपणे फोन बंद करा.",
				"तुमचा ओटीपी, यूपीआय पिन किंवा एटीएम कार्ड माहिती कधीही सांगू नका.",
				"बँकेचे नाव सांगत असल्यास पासबुकवरील अधिकृत नंबरवर फोन करून खात्री करा.",
				"कुटुंबातील व्यक्तींना किंवा शेजाऱ्यांना लगेच सांगा."
			]
		}
	},
	{
		id: "shared-otp",
		emoji: "🔢",
		title: {
			en: "I accidentally shared an OTP or money left my account",
			hi: "मैंने गलती से ओटीपी बता दिया या पैसे कट गए",
			mr: "मी चुकून ओटीपी सांगितला किंवा खात्यातून पैसे गेले"
		},
		steps: {
			en: [
				"Call the National Cyber Crime Helpline 1930 immediately (the golden hour to stop the transfer).",
				"Call your bank's toll-free number printed on your ATM card to freeze your card and account.",
				"Do not delete the SMS or WhatsApp chats — they are vital evidence for police.",
				"Change your internet banking password immediately from a trusted family phone."
			],
			hi: [
				"तुरंत 1930 (राष्ट्रीय साइबर अपराध हेल्पलाइन) पर कॉल करें ताकि भेजा गया पैसा आगे न जा सके।",
				"एटीएम कार्ड पर छपे बैंक के टोल-फ्री नंबर पर कॉल कर खाता और कार्ड तुरंत ब्लॉक करवाएँ।",
				"एसएमएस और संदेशों को न मिटाएँ — ये पुलिस के लिए अहम सबूत हैं।",
				"परिवार के किसी सदस्य के फ़ोन से अपने बैंक खाते का पासवर्ड बदलें।"
			],
			mr: [
				"त्वरित १९३० या राष्ट्रीय सायबर हेल्पलाइनवर फोन करा जेणेकरून व्यवहार रोखता येईल.",
				"एटीएम कार्डवरील बँकेच्या नंबरवर फोन करून कार्ड आणि खाते तात्काळ ब्लॉक करा.",
				"एसएमएस किंवा व्हॉट्सअ‍ॅप मेसेज डिलीट करू नका — ते महत्त्वाचे पुरावे आहेत.",
				"कुटुंबातील विश्वासू व्यक्तीच्या फोनवरून पासवर्ड लगेच बदला."
			]
		}
	},
	{
		id: "clicked-link",
		emoji: "🔗",
		title: {
			en: "I clicked a suspicious link in an SMS or WhatsApp",
			hi: "मैंने किसी अनजान या संदिग्ध लिंक पर क्लिक कर दिया",
			mr: "मी चुकून संशयास्पद लिंकवर क्लिक केले"
		},
		steps: {
			en: [
				"Close the webpage immediately. Do not type any details on it.",
				"Turn off Wi-Fi and Mobile Data for a few minutes if anything started downloading.",
				"Go to your phone's 'Downloads' or 'Files' folder and delete any unfamiliar downloaded file.",
				"Restart your phone."
			],
			hi: [
				"तुरंत उस पेज को बंद कर दें। उसपर कोई भी नाम, नंबर या पासवर्ड न डालें।",
				"अगर कोई फ़ाइल डाउनलोड होने लगी हो तो कुछ मिनटों के लिए मोबाइल डेटा और वाई-फ़ाई बंद कर दें।",
				"फ़ोन के 'Files' या 'Downloads' फोल्डर में जाकर उस अनजान फ़ाइल को डिलीट कर दें।",
				"अपने फ़ोन को एक बार बंद करके फिर से चालू (Restart) करें।"
			],
			mr: [
				"ते पान लगेच बंद करा. त्यावर कोणतीही माहिती किंवा पासवर्ड टाकू नका.",
				"काही डाउनलोड होत असल्यास काही मिनिटांसाठी इंटरनेट बंद करा.",
				"फोनमधील 'Files' किंवा 'Downloads' फोल्डरमध्ये जाऊन ती अनोळखी फाईल डिलीट करा.",
				"फोन एकदा रीस्टार्ट (बंद करून चालू) करा."
			]
		}
	},
	{
		id: "installed-app",
		emoji: "📲",
		title: {
			en: "Someone made me install AnyDesk or QuickSupport",
			hi: "किसी के कहने पर मैंने स्क्रीन शेयरिंग ऐप इंस्टॉल कर लिया",
			mr: "कोणाच्या सांगण्यावरून मी स्क्रीन शेअरिंग अ‍ॅप इन्स्टॉल केले"
		},
		steps: {
			en: [
				"Immediately turn off Mobile Data and Wi-Fi to cut the scammer's connection.",
				"Uninstall AnyDesk, TeamViewer, or QuickSupport from your phone right away.",
				"Restart your phone.",
				"Call your bank from another phone to ensure no unauthorized transactions occurred."
			],
			hi: [
				"तुरंत मोबाइल डेटा और वाई-फ़ाई बंद कर दें ताकि ठग का संपर्क कट जाए।",
				"अपने फ़ोन से AnyDesk, TeamViewer या QuickSupport को तुरंत अनइंस्टॉल (Delete) करें।",
				"फ़ोन को रीस्टार्ट करें।",
				"किसी दूसरे फ़ोन से अपने बैंक में कॉल करके जाँचें कि कोई ग़लत लेन-देन तो नहीं हुआ।"
			],
			mr: [
				"भामट्याचा संपर्क तोडण्यासाठी लगेच इंटरनेट आणि वाय-फाय बंद करा.",
				"AnyDesk, TeamViewer किंवा QuickSupport अ‍ॅप फोनमधून तात्काळ अनइन्स्टॉल करा.",
				"फोन रीस्टार्ट करा.",
				"दुसऱ्या फोनवरून बँकेशी संपर्क साधून खात्यातील पैशांची खात्री करा."
			]
		}
	}
];
var OFFICIAL_RESOURCES = [
	{
		label: {
			en: "National Emergency (Police, Medical, Fire)",
			hi: "राष्ट्रीय आपातकालीन सेवा (पुलिस, स्वास्थ्य, अग्नि)",
			mr: "राष्ट्रीय आपत्कालीन सेवा (पोलीस, रुग्णवाहिका, अग्निशामक)"
		},
		value: "112",
		tollFree: true
	},
	{
		label: {
			en: "National Cyber Crime Reporting Helpline",
			hi: "राष्ट्रीय साइबर वित्तीय अपराध हेल्पलाइन",
			mr: "राष्ट्रीय सायबर गुन्हा हेल्पलाइन"
		},
		value: "1930",
		tollFree: true
	},
	{
		label: {
			en: "Elderline — Senior Citizens National Helpline",
			hi: "एल्डरलाइन — वरिष्ठ नागरिक राष्ट्रीय हेल्पलाइन",
			mr: "एल्डरलाइन — ज्येष्ठ नागरिक हेल्पलाइन"
		},
		value: "14567",
		tollFree: true
	},
	{
		label: {
			en: "National Cyber Crime Reporting Portal",
			hi: "राष्ट्रीय साइबर अपराध पोर्टल",
			mr: "राष्ट्रीय सायबर गुन्हा पोर्टल"
		},
		value: "cybercrime.gov.in"
	},
	{
		label: {
			en: "Your Bank's Official Customer Care",
			hi: "आपके बैंक का आधिकारिक नंबर",
			mr: "तुमच्या बँकेचा अधिकृत नंबर"
		},
		value: "Use number on passbook / ATM card"
	}
];
var SAFETY_QUESTIONS = [
	{
		id: "lock",
		q: {
			en: "Do you use a screen lock on your phone?",
			hi: "क्या आप अपने फ़ोन पर स्क्रीन लॉक रखते हैं?",
			mr: "तुम्ही फोनवर स्क्रीन लॉक वापरता का?"
		},
		lesson: "basics-screen-lock"
	},
	{
		id: "updated",
		q: {
			en: "Are your WhatsApp and bank apps updated?",
			hi: "क्या आपके व्हाट्सएप और बैंक ऐप अपडेट हैं?",
			mr: "तुमचे व्हॉट्सअ‍ॅप आणि बँक अ‍ॅप्स अपडेट आहेत का?"
		},
		lesson: "net-update-apps"
	},
	{
		id: "otp",
		q: {
			en: "Do you know never to share an OTP with callers?",
			hi: "क्या आप जानते हैं कि ओटीपी कभी किसी को नहीं बताना है?",
			mr: "ओटीपी कोणालाही सांगायचा नसतो हे ठाऊक आहे का?"
		},
		lesson: "net-otp"
	},
	{
		id: "pin",
		q: {
			en: "Do you know that entering a PIN only sends money out?",
			hi: "क्या आप जानते हैं कि पिन डालने से हमेशा पैसे कटते हैं?",
			mr: "पिन टाकल्याने नेहमी पैसे जातात हे ठाऊक आहे का?"
		},
		lesson: "pay-upi-pin"
	},
	{
		id: "group",
		q: {
			en: "Have you stopped strangers from adding you to WhatsApp groups?",
			hi: "क्या आपने अजनबियों को ग्रुप में जोड़ने से रोका है?",
			mr: "अनोळखी लोकांना ग्रुपमध्ये जोडण्यापासून थांबवले आहे का?"
		},
		lesson: "wa-group-privacy"
	},
	{
		id: "qr",
		q: {
			en: "Do you know that scanning a QR code is only for paying?",
			hi: "क्या आप जानते हैं कि क्यूआर केवल पैसे देने के लिए होता है?",
			mr: "क्यूआर फक्त पैसे देण्यासाठी असतो हे ठाऊक आहे का?"
		},
		lesson: "pay-qr-code"
	},
	{
		id: "contacts",
		q: {
			en: "Have you saved emergency contacts with clear names?",
			hi: "क्या आपने आपातकालीन संपर्क साफ़ नाम से सहेजे हैं?",
			mr: "तुम्ही आपत्कालीन संपर्क स्पष्ट नावाने जतन केले आहेत का?"
		},
		lesson: "basics-contacts"
	}
];
var COMMUNITY_CATEGORIES = [
	"Ask for Help",
	"Digital Safety",
	"Technology",
	"Hobbies",
	"Local Activities",
	"Share a Tip",
	"General"
];
var day = 864e5;
var SEED_POSTS = [
	{
		id: "p1",
		author: "Sunita R.",
		category: "Ask for Help",
		text: "How do I increase the text size on my phone? The letters are very small for me.",
		at: Date.now() - day * 1,
		likes: 12,
		comments: [{
			id: "c1",
			author: "Ramesh K.",
			text: "Settings → Display → Font size. It helped me a lot.",
			at: Date.now() - day * 1 + 36e5
		}]
	},
	{
		id: "p2",
		author: "Ramesh K.",
		category: "Share a Tip",
		text: "I learned how to use Google Maps today and reached the hospital without asking anyone. Very happy!",
		at: Date.now() - day * 2,
		likes: 24,
		comments: []
	},
	{
		id: "p3",
		author: "Vijaya M.",
		category: "Ask for Help",
		text: "Can someone explain QR codes in simple words?",
		at: Date.now() - day * 2,
		likes: 9,
		comments: [{
			id: "c2",
			author: "Anil D.",
			text: "It is a square picture. Your camera reads it and opens the payment page.",
			at: Date.now() - day * 2 + 72e5
		}]
	},
	{
		id: "p4",
		author: "Anil D.",
		category: "Digital Safety",
		text: "Got a call saying my electricity will be cut at 10 pm. I checked the official app — no dues. Please be careful.",
		at: Date.now() - day * 3,
		likes: 31,
		comments: []
	},
	{
		id: "p5",
		author: "Farida S.",
		category: "Technology",
		text: "My grandson set up video calls for me. Now I see my great-granddaughter every Sunday.",
		at: Date.now() - day * 3,
		likes: 40,
		comments: []
	},
	{
		id: "p6",
		author: "Prakash J.",
		category: "Digital Safety",
		text: "Reminder from my bank visit today: they will never ask for OTP. Never.",
		at: Date.now() - day * 4,
		likes: 18,
		comments: []
	},
	{
		id: "p7",
		author: "Kamala N.",
		category: "Hobbies",
		text: "I started recording bhajans on my phone's voice recorder. Very simple to use.",
		at: Date.now() - day * 5,
		likes: 15,
		comments: []
	},
	{
		id: "p8",
		author: "Iqbal M.",
		category: "Local Activities",
		text: "Our society is running a free 'smartphone for seniors' class every Saturday at 10 am.",
		at: Date.now() - day * 5,
		likes: 27,
		comments: []
	}
];
var WORD_PUZZLES = [
	{
		q: {
			en: "Which word means a temporary code sent via SMS to verify you?",
			hi: "एसएमएस द्वारा आया अस्थायी गुप्त कोड क्या कहलाता है?",
			mr: "एसएमएसने येणारा तात्पुरता पडताळणी कोड कोणता?"
		},
		options: [
			"OTP",
			"GPS",
			"PDF"
		],
		answer: 0
	},
	{
		q: {
			en: "Which word means the app you use to open websites (like Chrome)?",
			hi: "वेबसाइट खोलने वाले ऐप (जैसे Chrome) को क्या कहते हैं?",
			mr: "वेबसाइट्स उघडणाऱ्या अ‍ॅपला काय म्हणतात?"
		},
		options: [
			"Browser",
			"Battery",
			"Bluetooth"
		],
		answer: 0
	},
	{
		q: {
			en: "Which of these is the system to pay directly from your bank via phone?",
			hi: "फ़ोन से बैंक द्वारा भुगतान करने की सरकारी प्रणाली कौन सी है?",
			mr: "फोनवरून बँकेद्वारे थेट पेमेंट करण्याची पद्धत कोणती?"
		},
		options: [
			"UPI",
			"USB",
			"SMS"
		],
		answer: 0
	},
	{
		q: {
			en: "Which word means unwanted messages sent to many people at once?",
			hi: "हज़ारों लोगों को भेजे जाने वाले अनचाहे संदेशों को क्या कहते हैं?",
			mr: "अनेकांना पाठवलेल्या नको असलेल्या मेसेजला काय म्हणतात?"
		},
		options: [
			"Spam",
			"Scan",
			"Save"
		],
		answer: 0
	},
	{
		q: {
			en: "Which one lets Google Maps know where you are standing?",
			hi: "गूगल मैप्स को आपकी जगह बताने वाली सुविधा कौन सी है?",
			mr: "नकाशाला तुमचे ठिकाण कळवणारी सुविधा कोणती?"
		},
		options: [
			"GPS",
			"PIN",
			"QR"
		],
		answer: 0
	},
	{
		q: {
			en: "Which word means a newer and safer version of an app?",
			hi: "ऐप का नया और सुरक्षित रूप क्या कहलाता है?",
			mr: "अ‍ॅपच्या नव्या व सुरक्षित आवृत्तीला काय म्हणतात?"
		},
		options: [
			"Update",
			"Upload",
			"Undo"
		],
		answer: 0
	}
];
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center card-surface p-8 shadow-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-6xl font-bold text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-2xl font-bold",
					children: "पेज नहीं मिला · Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-lg text-muted-foreground",
					children: "यह पेज उपलब्ध नहीं है। आइए आपको सुरक्षित मुख्यपृष्ठ पर वापस ले चलते हैं।"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-6 text-lg font-bold text-primary-foreground shadow-lift hover:brightness-110",
						children: "🏠 मुख्यपृष्ठ · Go Home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center card-surface p-8 shadow-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold",
					children: "कुछ गड़बड़ हुई · Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-lg text-muted-foreground",
					children: "आपकी कोई भी सहेजी गई जानकारी खोई नहीं है।"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-6 text-lg font-bold text-primary-foreground shadow-lift hover:brightness-110",
						children: "🔄 फिर कोशिश करें · Try Again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-border bg-card px-6 text-lg font-bold",
						children: "🏠 मुख्यपृष्ठ · Home"
					})]
				})
			]
		})
	});
}
var Route$16 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sahayak — Learn. Stay Safe. Stay Connected." },
			{
				name: "description",
				content: "Sahayak is a friendly digital education and safety companion for older adults: simple lessons, scam awareness and brain games."
			},
			{
				name: "theme-color",
				content: "#1b6b72"
			},
			{
				name: "theme-color",
				content: "#1d2230",
				media: "(prefers-color-scheme: dark)"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/assets/branding/app-logo.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/assets/branding/app-logo.png"
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
var THEME_INIT_SCRIPT = `try{var s=JSON.parse(localStorage.getItem("sahayak.state.v1")||"{}");var d=s.theme==="dark"||(s.theme==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}`;
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: THEME_INIT_SCRIPT } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$16.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppProvider, {
			seedPosts: SEED_POSTS,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
		})
	});
}
var $$splitComponentImporter$14 = () => import("./routes-SJsrguLt.mjs");
var Route$15 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Sahayak — Learn. Stay Safe. Stay Connected." },
		{
			name: "description",
			content: "Simple lessons, scam awareness and brain games for older adults. No login needed, works on your device."
		},
		{
			property: "og:title",
			content: "Sahayak — Learn. Stay Safe. Stay Connected."
		},
		{
			property: "og:description",
			content: "A friendly digital education and safety companion for older adults."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./community-DVrkdu4M.mjs");
var Route$14 = createFileRoute("/community")({
	head: () => ({ meta: [
		{ title: "Community — Sahayak" },
		{
			name: "description",
			content: "A friendly space for older adults to ask questions, share tips and warn each other about scams."
		},
		{
			property: "og:title",
			content: "Community — Sahayak"
		},
		{
			property: "og:description",
			content: "Ask, share and learn together."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./credits-CmomAeP5.mjs");
var Route$13 = createFileRoute("/credits")({
	head: () => ({ meta: [
		{ title: "Credits — Sahayak" },
		{
			name: "description",
			content: "Sahayak was made with ❤️ at PICT, Department of Computer Engineering."
		},
		{
			property: "og:title",
			content: "Credits — Sahayak"
		},
		{
			property: "og:description",
			content: "The people and place behind Sahayak."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./dictionary-PT5okFOy.mjs");
var Route$12 = createFileRoute("/dictionary")({
	head: () => ({ meta: [
		{ title: "Digital Dictionary — Sahayak" },
		{
			name: "description",
			content: "Simple meanings of everyday technology and internet words: OTP, UPI, Wi-Fi, QR code, PIN and phishing."
		},
		{
			property: "og:title",
			content: "Digital Dictionary — Sahayak"
		},
		{
			property: "og:description",
			content: "Understand digital words with simple definitions and voice playback."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./emergency-Dlx0deDX.mjs");
var Route$11 = createFileRoute("/emergency")({
	head: () => ({ meta: [
		{ title: "Emergency Help & Helplines — Sahayak" },
		{
			name: "description",
			content: "Trusted family contacts, Cyber Crime 1930, National 112, Senior Citizens 14567, Ambulance 108 — one tap to call."
		},
		{
			property: "og:title",
			content: "Emergency Help — Sahayak"
		},
		{
			property: "og:description",
			content: "One-tap emergency calls and instant safety steps for seniors."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./games-DM1z7T4c.mjs");
var Route$10 = createFileRoute("/games")({
	head: () => ({ meta: [
		{ title: "Games & Brain Exercise — Sahayak" },
		{
			name: "description",
			content: "Digital-safety games for older adults: Scam or Safe, word quiz, quiz challenge and a safety check."
		},
		{
			property: "og:title",
			content: "Games & Brain Exercise — Sahayak"
		},
		{
			property: "og:description",
			content: "Simple games for memory, thinking and safety."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./learn-CDAqdD_k.mjs");
var Route$9 = createFileRoute("/learn")({
	head: () => ({ meta: [
		{ title: "Learn Digital Skills — Sahayak" },
		{
			name: "description",
			content: "Step-by-step lessons on smartphones, WhatsApp, UPI payments, the internet and digital services for older adults."
		},
		{
			property: "og:title",
			content: "Learn Digital Skills — Sahayak"
		},
		{
			property: "og:description",
			content: "Take small steps. Learn at your own pace."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./safe-DFvJCiKt.mjs");
var Route$8 = createFileRoute("/safe")({
	head: () => ({ meta: [
		{ title: "Stay Safe — Sahayak" },
		{
			name: "description",
			content: "Recognise common scams: UPI, OTP, fake bank calls and more, with real-life stories and clear steps to stay safe."
		},
		{
			property: "og:title",
			content: "Stay Safe — Sahayak"
		},
		{
			property: "og:description",
			content: "Learn about common scams before they happen to you."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./saved-Dhe7OPd3.mjs");
var Route$7 = createFileRoute("/saved")({
	head: () => ({ meta: [
		{ title: "My Saved Items — Sahayak" },
		{
			name: "description",
			content: "The lessons and scam stories you saved, kept privately on your own device."
		},
		{
			property: "og:title",
			content: "My Saved Items — Sahayak"
		},
		{
			property: "og:description",
			content: "Everything you saved, in one simple place."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./search-C6V2Lv1z.mjs");
var Route$6 = createFileRoute("/search")({
	head: () => ({ meta: [
		{ title: "Search — Sahayak" },
		{
			name: "description",
			content: "Search lessons, scam stories and the digital dictionary in simple language."
		},
		{
			property: "og:title",
			content: "Search — Sahayak"
		},
		{
			property: "og:description",
			content: "Find a lesson, a scam story or a word you don't know."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./settings-CXlaAKBA.mjs");
var Route$5 = createFileRoute("/settings")({
	head: () => ({ meta: [
		{ title: "Settings — Sahayak" },
		{
			name: "description",
			content: "Change language, text size, contrast and speech speed, and manage your data."
		},
		{
			property: "og:title",
			content: "Settings — Sahayak"
		},
		{
			property: "og:description",
			content: "Make Sahayak comfortable for your eyes and ears."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./watch-BoIHAjU0.mjs");
var Route$4 = createFileRoute("/watch")({
	head: () => ({ meta: [
		{ title: "Watch & Learn — Sahayak" },
		{
			name: "description",
			content: "Short video tutorials on smartphones, WhatsApp, UPI payments and staying safe online."
		},
		{
			property: "og:title",
			content: "Watch & Learn — Sahayak"
		},
		{
			property: "og:description",
			content: "Follow along with simple video tutorials."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
/**
* OPTIONAL third TTS tier — seam only, intentionally not wired into the app.
*
* Today Sahayak speaks via (1) pre-generated recordings under public/audio/
* and (2) the browser's built-in speechSynthesis. Both work fully offline, so
* this route exists purely as a future integration point for a paid/online TTS
* provider (e.g. Google Cloud TTS, Azure Neural TTS).
*
* To implement later:
*   - put the provider API key in a SERVER-SIDE env var (e.g. TTS_PROVIDER_KEY)
*     — never a VITE_-prefixed one, so it can never reach the browser bundle;
*   - rate-limit this route and validate the `text`/`lang` input;
*   - keep pre-generated audio + browser TTS as the fallback so Community-style
*     connectivity is never required for learning content.
*/
var Route$3 = createFileRoute("/api/tts")({ server: { handlers: { POST: async () => {
	return new Response(JSON.stringify({ error: "Online TTS tier is not configured. Use pre-generated audio or browser speech." }), {
		status: 501,
		headers: { "content-type": "application/json" }
	});
} } } });
var $$splitComponentImporter$2 = () => import("./learn._lessonId-D1-Dig2H.mjs");
var Route$2 = createFileRoute("/learn/$lessonId")({
	head: () => ({ meta: [
		{ title: "Lesson — Sahayak" },
		{
			name: "description",
			content: "A short, step-by-step lesson you can read or listen to at your own pace."
		},
		{
			property: "og:title",
			content: "Lesson — Sahayak"
		},
		{
			property: "og:description",
			content: "Simple step-by-step digital skills for older adults."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./safe.index-CPmnkqOt.mjs");
var Route$1 = createFileRoute("/safe/")({
	head: () => ({ meta: [
		{ title: "Stay Safe — Scam Awareness — Sahayak" },
		{
			name: "description",
			content: "Real-life fraud stories, common scam patterns and a personal safety checklist — one step at a time."
		},
		{
			property: "og:title",
			content: "Stay Safe — Scam Awareness — Sahayak"
		},
		{
			property: "og:description",
			content: "Learn about common scams before they happen to you."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./safe._storyId-BRjTJtev.mjs");
var Route = createFileRoute("/safe/$storyId")({
	head: () => ({ meta: [
		{ title: "Real-Life Scam Story — Sahayak" },
		{
			name: "description",
			content: "A true-to-life scam story with warning signs, what went wrong, and what to do if it happens."
		},
		{
			property: "og:title",
			content: "Real-Life Scam Story — Sahayak"
		},
		{
			property: "og:description",
			content: "Spot the warning signs before it happens to you."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$15.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$16
});
var CommunityRoute = Route$14.update({
	id: "/community",
	path: "/community",
	getParentRoute: () => Route$16
});
var CreditsRoute = Route$13.update({
	id: "/credits",
	path: "/credits",
	getParentRoute: () => Route$16
});
var DictionaryRoute = Route$12.update({
	id: "/dictionary",
	path: "/dictionary",
	getParentRoute: () => Route$16
});
var EmergencyRoute = Route$11.update({
	id: "/emergency",
	path: "/emergency",
	getParentRoute: () => Route$16
});
var GamesRoute = Route$10.update({
	id: "/games",
	path: "/games",
	getParentRoute: () => Route$16
});
var LearnRoute = Route$9.update({
	id: "/learn",
	path: "/learn",
	getParentRoute: () => Route$16
});
var SafeRoute = Route$8.update({
	id: "/safe",
	path: "/safe",
	getParentRoute: () => Route$16
});
var SavedRoute = Route$7.update({
	id: "/saved",
	path: "/saved",
	getParentRoute: () => Route$16
});
var SearchRoute = Route$6.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$16
});
var SettingsRoute = Route$5.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => Route$16
});
var WatchRoute = Route$4.update({
	id: "/watch",
	path: "/watch",
	getParentRoute: () => Route$16
});
var ApiTtsRoute = Route$3.update({
	id: "/api/tts",
	path: "/api/tts",
	getParentRoute: () => Route$16
});
var LearnLessonIdRoute = Route$2.update({
	id: "/$lessonId",
	path: "/$lessonId",
	getParentRoute: () => LearnRoute
});
var SafeIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => SafeRoute
});
var SafeStoryIdRoute = Route.update({
	id: "/$storyId",
	path: "/$storyId",
	getParentRoute: () => SafeRoute
});
var LearnRouteChildren = { LearnLessonIdRoute };
var LearnRouteWithChildren = LearnRoute._addFileChildren(LearnRouteChildren);
var SafeRouteChildren = {
	SafeStoryIdRoute,
	SafeIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	CommunityRoute,
	CreditsRoute,
	DictionaryRoute,
	EmergencyRoute,
	GamesRoute,
	LearnRoute: LearnRouteWithChildren,
	SafeRoute: SafeRoute._addFileChildren(SafeRouteChildren),
	SavedRoute,
	SearchRoute,
	SettingsRoute,
	WatchRoute,
	ApiTtsRoute
};
var routeTree = Route$16._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { LANGUAGES as C, useApp as S, pickList as T, LargeCard as _, OFFICIAL_RESOURCES as a, SectionHeader as b, SAFETY_QUESTIONS as c, WORD_PUZZLES as d, Chip as f, InfoNote as g, EmptyState as h, HELP_TOPICS as i, SCENARIOS as l, ElderLink as m, COMMUNITY_CATEGORIES as n, QUIZZES as o, ElderButton as p, DICTIONARY as r, QUIZ_QUESTIONS as s, router_exports as t, TUTORIALS as u, PageHeader as v, pick as w, cn as x, ProgressCard as y };
