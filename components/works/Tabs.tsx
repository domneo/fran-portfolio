import { useState } from "react";
import styles from "styles/works/Tabs.module.scss";

interface Tab {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (tabs.length === 0) return null;

  return (
    <div className={styles.tabs}>
      <div className={styles.tablist} role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`${styles.tab} ${activeIndex === i ? styles.active : ""}`}
            role="tab"
            aria-selected={activeIndex === i}
            onClick={() => setActiveIndex(i)}
          >
            {tab.label}
            <svg
              className={`${styles.activeIcon} ${activeIndex === i ? styles.activeIconVisible : ""}`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.58333 16H8.45833C8.60417 15.1042 9 14.125 9.66667 13.0625C11 10.9583 13.6875 8.89583 16 8.41667V7.54167C14.8542 7.29167 13.7292 6.77083 12.6458 6C10.4375 4.4375 8.8125 2.10417 8.45833 0H7.58333C7.375 1.10417 6.89583 2.16667 6.14583 3.25C4.66667 5.39583 2.35417 6.97917 0 7.54167V8.41667C1.1875 8.66667 2.39583 9.25 3.58333 10.1458C6 11.9583 7.27083 14.2083 7.58333 16Z"
                fill="var(--black)"
              />
              <path
                d="M7.79167 12H8.22917C8.30208 11.5521 8.5 11.0625 8.83333 10.5312C9.5 9.47917 10.8437 8.44792 12 8.20833V7.77083C11.4271 7.64583 10.8646 7.38542 10.3229 7C9.21875 6.21875 8.40625 5.05208 8.22917 4H7.79167C7.6875 4.55208 7.44792 5.08333 7.07292 5.625C6.33333 6.69792 5.17708 7.48958 4 7.77083V8.20833C4.59375 8.33333 5.19792 8.625 5.79167 9.07292C7 9.97917 7.63542 11.1042 7.79167 12Z"
                fill="var(--white)"
              />
            </svg>
          </button>
        ))}
      </div>
      <div className={styles.tabpanel} role="tabpanel">
        {tabs[activeIndex].children}
      </div>
    </div>
  );
};
