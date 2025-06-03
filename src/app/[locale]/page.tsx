"use client";
import NavItem from "@/component/NavItem";
import SwitchLanguage from "@/component/SwitchLanguage";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/lib/headerData";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white flex flex-col">
      {/* Header with Navigation */}
      <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex space-x-reverse space-x-8">
              {navItems.map((item, index) => (
                <NavItem
                  highlight={false}
                  key={index}
                  href={item.href}
                  label={t(`${item.label}`)}
                />
              ))}
            </div>
            <SwitchLanguage />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{t("subtitle")}</p>
            <div className="flex justify-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
              >
                {t("about")}
              </Link>
              <Link
                href="/features"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
              >
                {t("features")}
              </Link>
            </div>
          </section>

          {/* Features Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">
                {t("feature1.title")}
              </h3>
              <p className="text-gray-300">{t("feature1.description")}</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">
                {t("feature2.title")}
              </h3>
              <p className="text-gray-300">{t("feature2.description")}</p>
            </div>
          </section>

          {/* Translation Showcase */}
          <section className="bg-gray-800/30 p-8 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-6">
              {t("translationShowcase.title")}
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                {t("translationShowcase.description")}
              </p>
              <div className="flex flex-wrap gap-2">
                {["en", "fa"].map((lang) => (
                  <button
                    key={lang}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm cursor-pointer"
                    onClick={() => (window.location.href = `/${lang}`)}
                  >
                    {t(`languages.${lang}`)}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved by{" "}
              <a
                href="https://afghangeeks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Afghan Geeks
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
