import React, { Suspense } from "react";
const Customer = React.lazy(() => import("./Home.jsx"));
const Admin = React.lazy(() => import("./Login.jsx"));

//Instead of regular import statements, we will use the above approach for lazy loading

export default (props) => {
	if (props.user === "admin") {
		return (
			// fallback component is rendered until our main component is loaded
			<Suspense fallback={<div>Loading</div>}>
				<Admin />
			</Suspense>
		);
	} else if (props.user === "customer") {
		return (
			<Suspense fallback={<div>Loading</div>}>
				<Customer />
			</Suspense>
		);
	} else {
		return <div> Invalid User </div>;
	}
};