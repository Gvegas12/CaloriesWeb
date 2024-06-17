import { FC } from "react";

import { BrowserRouter } from "react-router-dom";

import AppRouter from "../router/UI/AppRouter/AppRouter";

const App: FC = () => (
	<BrowserRouter>
		<AppRouter />
	</BrowserRouter>
);

export default App;
