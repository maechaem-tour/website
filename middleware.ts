import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["th", "en", "zh", "he", "ja"],
  defaultLocale: "en",
});

export const config = {
  matcher: [
    "/",
    "/((?!api|_next|.*\\..*).*)",
  ],
};