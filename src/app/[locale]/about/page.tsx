import SwitchLanguage from "@/component/SwitchLanguage";
import { useTranslations } from "next-intl";
import React from "react";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <SwitchLanguage />
    </div>
  );
}
