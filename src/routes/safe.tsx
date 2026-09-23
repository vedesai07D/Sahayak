import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/safe")({
  head: () => ({
    meta: [
      { title: "Stay Safe — Sahayak" },
      {
        name: "description",
        content:
          "Recognise common scams: UPI, OTP, fake bank calls and more, with real-life stories and clear steps to stay safe.",
      },
      { property: "og:title", content: "Stay Safe — Sahayak" },
      {
        property: "og:description",
        content: "Learn about common scams before they happen to you.",
      },
    ],
  }),
  component: () => <Outlet />,
});
