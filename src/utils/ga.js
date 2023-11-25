import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GA_KEY); // Replace 'your-measurement-id' with your actual Measurement ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
