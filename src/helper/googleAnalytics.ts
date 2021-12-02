declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

function InitializeReactGA(ReactGA: any) {
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize("MANDO_GA");
    window.GA_INITIALIZED = true;
  }
}

export default InitializeReactGA;
