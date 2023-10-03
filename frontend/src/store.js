import { configureStore } from '@reactjs/toolkit';

const store = configureStore({
	reducer: {},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: true
});

export default store;
