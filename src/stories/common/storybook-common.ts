import tw from "twin.macro";

export const Row = tw.div`flex flex-row flex-wrap gap-4 items-center mb-3`;
export const Title = tw.h1`font-display font-medium text-black dark:text-white`;
export const Background = tw.div`pl-4 py-5 bg-white dark:bg-dark-bg`;

export const setDarkMode = (darkMode: boolean): void => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
