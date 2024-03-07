import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Contacts } from "./views/Contacts.js";
import { AddContact } from "./views/AddContacts.js";
import { EditContact } from "./views/EditContact";

export const Layout = () => {
	const basename = process.env.BASENAME || ""
	return (
		<div>
			<BrowserRouter basename = {
				basename
			}>
				<div>
					<Routes>
						<Route exact path="/" element={<Contacts/>} />
						<Route exact path="/contacts" element={<Contacts/>} />
						<Route exact path="/add" element={<AddContact/>} />
						<Route exact path="/edit/:id" element={<EditContact/>} />
						<Route path = "*" element = {<h1 className="notfound">Not found!</h1>} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);