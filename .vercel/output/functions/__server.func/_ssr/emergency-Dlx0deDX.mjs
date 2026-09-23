import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as ArrowLeft, a as UserPlus, p as ShieldAlert, s as Trash2, v as PhoneCall } from "../_libs/lucide-react.mjs";
import { S as useApp, _ as LargeCard, b as SectionHeader, f as Chip, p as ElderButton, v as PageHeader } from "./router-Pl2TF-rv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/emergency-Dlx0deDX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Shared emergency content used by the /emergency page and the Settings
* emergency section. Order matters for the user: trusted family contacts
* first (one tap to call someone they know), then official helplines,
* then the first-aid checklists.
*/
function EmergencyContent() {
	const { state, t, update } = useApp();
	const [showAddContact, setShowAddContact] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [relationship, setRelationship] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const addContact = () => {
		if (!name.trim() || !phone.trim()) return;
		update((s) => ({ contacts: [...s.contacts, {
			id: `c-${Date.now()}`,
			name: name.trim(),
			relationship: relationship.trim(),
			phone: phone.trim()
		}] }));
		setName("");
		setRelationship("");
		setPhone("");
		setShowAddContact(false);
	};
	const removeContact = (id) => {
		update((s) => ({ contacts: s.contacts.filter((c) => c.id !== id) }));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						title: t("trustedContacts"),
						emoji: "👨‍👩‍👧"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
						size: "md",
						variant: "outline",
						onClick: () => setShowAddContact(!showAddContact),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { "aria-hidden": "true" }),
							" ",
							t("addEmergencyContact")
						]
					})]
				}),
				showAddContact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, {
					className: "mb-4 space-y-4 border-2 border-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold",
							children: t("addEmergencyContact")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: name,
									onChange: (e) => setName(e.target.value),
									placeholder: t("contactName"),
									"aria-label": t("contactName"),
									className: "min-h-14 rounded-xl border-2 border-border bg-background px-4 text-lg"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: relationship,
									onChange: (e) => setRelationship(e.target.value),
									placeholder: t("relationship"),
									"aria-label": t("relationship"),
									className: "min-h-14 rounded-xl border-2 border-border bg-background px-4 text-lg"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: phone,
									onChange: (e) => setPhone(e.target.value),
									placeholder: t("phoneNumber"),
									"aria-label": t("phoneNumber"),
									inputMode: "tel",
									className: "min-h-14 rounded-xl border-2 border-border bg-background px-4 text-lg"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
								onClick: addContact,
								disabled: !name.trim() || !phone.trim(),
								children: t("addContactBtn")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
								variant: "ghost",
								onClick: () => setShowAddContact(false),
								children: t("cancel")
							})]
						})
					]
				}) : null,
				state.contacts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: state.contacts.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface flex flex-col justify-between gap-4 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-bold",
								children: c.name
							}),
							c.relationship ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base text-muted-foreground",
								children: c.relationship
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-lg font-medium tabular-nums",
								children: c.phone
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${c.phone}`,
								className: "inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-lg font-bold text-primary-foreground shadow-lift hover:brightness-110 active:scale-[0.99]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
									className: "size-6 shrink-0",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									t("callContact"),
									" ",
									c.name
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElderButton, {
								size: "md",
								variant: "outline",
								"aria-label": `Remove ${c.name}`,
								onClick: () => removeContact(c.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { "aria-hidden": "true" })
							})]
						})]
					}, c.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-muted-foreground",
						children: t("noContactsYet")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-base text-muted-foreground",
						children: t("trustedContactsSubtitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElderButton, {
							onClick: () => setShowAddContact(true),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { "aria-hidden": "true" }),
								" ",
								t("addEmergencyContact")
							]
						})
					})
				] })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("emergencyHelplineTitle"),
				emoji: "📞"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface border-2 border-destructive bg-destructive-soft p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-bold text-destructive",
									children: t("emergency1930")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "success",
									children: t("worksOfflineCall")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-lg leading-relaxed text-foreground",
								children: t("emergency1930Desc")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:1930",
									className: "inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-destructive px-6 text-xl font-bold text-destructive-foreground shadow-lift hover:brightness-110 active:scale-[0.99]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
										className: "size-7 shrink-0",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [t("callNow"), " (1930)"] })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface border-2 border-primary p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-bold text-primary",
									children: t("emergency112")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "success",
									children: t("worksOfflineCall")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-lg leading-relaxed text-foreground",
								children: t("emergency112Desc")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:112",
									className: "inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 text-xl font-bold text-primary-foreground shadow-lift hover:brightness-110 active:scale-[0.99]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
										className: "size-7 shrink-0",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [t("callNow"), " (112)"] })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold",
									children: t("emergency14567")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "success",
									children: t("worksOfflineCall")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-base leading-relaxed text-muted-foreground",
								children: t("emergency14567Desc")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:14567",
									className: "inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-border bg-card px-5 text-lg font-bold hover:bg-muted active:scale-[0.99]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
										className: "size-6 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [t("callNow"), " (14567)"] })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold",
									children: t("emergency108")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "success",
									children: t("worksOfflineCall")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-base leading-relaxed text-muted-foreground",
								children: t("emergency108Desc")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:108",
									className: "inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-border bg-card px-5 text-lg font-bold hover:bg-muted active:scale-[0.99]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
										className: "size-6 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [t("callNow"), " (108)"] })]
								})
							})
						]
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: t("quickEmergencySteps"),
				emoji: "⚡"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, {
					className: "space-y-3 border-2 border-warning bg-warning-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "flex items-center gap-2 text-xl font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
							className: "size-6 shrink-0 text-warning",
							"aria-hidden": "true"
						}), t("moneyLostHeading")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-6 text-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("moneyLostStep1") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("moneyLostStep2") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("moneyLostStep3") })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LargeCard, {
					className: "space-y-3 border-2 border-destructive bg-destructive-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "flex items-center gap-2 text-xl font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
							className: "size-6 shrink-0 text-destructive",
							"aria-hidden": "true"
						}), t("threatHeading")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-6 text-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("threatStep1") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("threatStep2") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("threatStep3") })
						]
					})]
				})]
			})] })
		]
	});
}
function EmergencyPage() {
	const { t } = useApp();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": "true" }),
					" ",
					t("back"),
					" ",
					t("home")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: t("emergency"),
				subtitle: t("emergencySubtitle"),
				emoji: "🚨"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencyContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base text-muted-foreground text-center",
				children: t("allLessonsWorkOffline")
			})
		]
	});
}
//#endregion
export { EmergencyPage as component };
