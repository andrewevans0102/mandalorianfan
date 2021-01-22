function InitializeReactGA(ReactGA) {
	if (!window.GA_INITIALIZED) {
		ReactGA.initialize("MANDO_GA");
		window.GA_INITIALIZED = true;
	}
}

export default InitializeReactGA;
