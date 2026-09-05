import {
  Search,
  Accessibility,
  Volume2,
  Menu,
} from "lucide-react";

import { useLanguage } from "../../LanguageContext.jsx";

export default function Header() {
  const {
    language,
    changeLanguage,
    increaseFont,
    decreaseFont,
    resetFont,
  } = useLanguage();

  const isHindi = language === "hi";

  // ================================
  // SCREEN READER
  // ================================
  const speakPage = () => {
    if (!("speechSynthesis" in window)) {
      alert(
        isHindi
          ? "इस ब्राउज़र में स्क्रीन रीडर समर्थित नहीं है।"
          : "Screen reader is not supported by this browser."
      );
      return;
    }

    window.speechSynthesis.cancel();

    const mainContent = document.getElementById("main-content");

    const text = mainContent
      ? mainContent.innerText
      : document.body.innerText;

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = isHindi ? "hi-IN" : "en-IN";
    speech.rate = 0.9;

    window.speechSynthesis.speak(speech);
  };

  // ================================
  // STOP SCREEN READER
  // ================================
  const stopScreenReader = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  // ================================
  // SKIP TO MAIN CONTENT
  // ================================
  const handleSkipToContent = (e) => {
    e.preventDefault();

    const mainContent = document.getElementById("main-content");

    if (mainContent) {
      mainContent.setAttribute("tabindex", "-1");

      mainContent.focus();

      mainContent.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="site-header">

      {/* =========================================
          GOVERNMENT TOP BAR
      ========================================= */}
      <div className="gov-bar">
        <div className="container gov-bar-content">

          {/* Government Identity */}
          <div className="gov-identity">
            <span>भारत सरकार</span>
            <span>|</span>
            <span>Government of India</span>
          </div>

          {/* Government Tools */}
          <div className="gov-tools">

            {/* Skip to Main Content */}
            <a
              href="#main-content"
              onClick={handleSkipToContent}
            >
              {isHindi
                ? "मुख्य सामग्री पर जाएं"
                : "Skip to Main Content"}
            </a>

            {/* Decrease Font */}
            <button
              type="button"
              onClick={decreaseFont}
              aria-label={
                isHindi
                  ? "टेक्स्ट का आकार कम करें"
                  : "Decrease text size"
              }
              title={
                isHindi
                  ? "टेक्स्ट का आकार कम करें"
                  : "Decrease text size"
              }
            >
              A-
            </button>

            {/* Reset Font */}
            <button
              type="button"
              onClick={resetFont}
              aria-label={
                isHindi
                  ? "टेक्स्ट का सामान्य आकार"
                  : "Normal text size"
              }
              title={
                isHindi
                  ? "टेक्स्ट का सामान्य आकार"
                  : "Normal text size"
              }
            >
              A
            </button>

            {/* Increase Font */}
            <button
              type="button"
              onClick={increaseFont}
              aria-label={
                isHindi
                  ? "टेक्स्ट का आकार बढ़ाएं"
                  : "Increase text size"
              }
              title={
                isHindi
                  ? "टेक्स्ट का आकार बढ़ाएं"
                  : "Increase text size"
              }
            >
              A+
            </button>

            {/* Screen Reader */}
            <button
              type="button"
              className="tool-button"
              onClick={speakPage}
              aria-label={
                isHindi
                  ? "पृष्ठ को पढ़ें"
                  : "Read page aloud"
              }
              title={
                isHindi
                  ? "पृष्ठ को पढ़ें"
                  : "Read page aloud"
              }
            >
              <Volume2 size={15} />

              <span>
                {isHindi
                  ? "स्क्रीन रीडर"
                  : "Screen Reader"}
              </span>
            </button>

            {/* Stop Reading */}
            <button
              type="button"
              className="tool-button"
              onClick={stopScreenReader}
              aria-label={
                isHindi
                  ? "पढ़ना बंद करें"
                  : "Stop screen reader"
              }
              title={
                isHindi
                  ? "पढ़ना बंद करें"
                  : "Stop reading"
              }
            >
              <span>
                {isHindi ? "रोकें" : "Stop"}
              </span>
            </button>

            {/* Hindi */}
            <button
              type="button"
              className={`language-button ${
                isHindi ? "active" : ""
              }`}
              onClick={() => changeLanguage("hi")}
            >
              हिन्दी
            </button>

            {/* English */}
            <button
              type="button"
              className={`language-button ${
                !isHindi ? "active" : ""
              }`}
              onClick={() => changeLanguage("en")}
            >
              English
            </button>

          </div>
        </div>
      </div>

      {/* =========================================
          MAIN BRANDING
      ========================================= */}
      <div className="branding">
        <div className="container branding-content">

          {/* Left Branding */}
          <div className="brand-section">

            {/* Government Emblem */}
            <img
              src="/assets/images/state-emblem.png"
              alt={
                isHindi
                  ? "भारत का राजकीय चिन्ह"
                  : "State Emblem of India"
              }
              className="state-emblem"
            />

            {/* Branding Text */}
            <div className="brand-text">

              {/* Hindi Department Name */}
              <div className="hindi-title">
                गृह मंत्रालय
              </div>

              {/* Official English Department Name */}
              <div className="english-title">
                MINISTRY OF HOME AFFAIRS
              </div>

              {/* Project Name */}
              <div className="project-title">
                {isHindi
                  ? "अचानक बाढ़ पूर्व चेतावनी प्रणाली"
                  : "Flash Flood Early Warning System"}
              </div>

              {/* Division */}
              <div className="project-subtitle">
                {isHindi
                  ? "आपदा प्रबंधन प्रभाग"
                  : "Disaster Management Division"}
              </div>

            </div>
          </div>

          {/* Right Branding Actions */}
          <div className="brand-actions">

            {/* Search */}
            <button
              type="button"
              className="search-button"
              aria-label={
                isHindi
                  ? "खोजें"
                  : "Search"
              }
              title={
                isHindi
                  ? "खोजें"
                  : "Search"
              }
            >
              <Search size={22} />
            </button>

            {/* Accessibility */}
            <button
              type="button"
              className="accessibility-button"
              aria-label={
                isHindi
                  ? "पहुंच-योग्यता"
                  : "Accessibility"
              }
              title={
                isHindi
                  ? "पहुंच-योग्यता"
                  : "Accessibility"
              }
            >
              <Accessibility size={19} />

              <span>
                {isHindi
                  ? "पहुंच-योग्यता"
                  : "Accessibility"}
              </span>
            </button>

          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE MENU BUTTON
      ========================================= */}
      <button
        type="button"
        className="mobile-menu-button"
        aria-label={
          isHindi
            ? "नेविगेशन मेनू खोलें"
            : "Open navigation menu"
        }
      >
        <Menu size={24} />

        {isHindi ? "मेनू" : "Menu"}
      </button>

    </header>
  );
}