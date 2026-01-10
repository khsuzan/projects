import cartImg from "./previews/cart.png";
import driverDashboardImg from "./previews/driver-dashboard.png";
import driverMapImg from "./previews/driver-map.png";
import driverProductListingImg from "./previews/driver-product-listing.png";
import productsImg from "./previews/products.png";
import splashImg from "./previews/splash.png";

const MisterTwisterPage = () => {
	const appScreens = [
		{ id: 1, title: "Splash Screen", image: splashImg },
		{ id: 2, title: "Driver Dashboard", image: driverDashboardImg },
		{ id: 3, title: "Driver Map", image: driverMapImg },
		{ id: 4, title: "Product Listing", image: driverProductListingImg },
		{ id: 5, title: "Products", image: productsImg },
		{ id: 6, title: "Cart", image: cartImg },
	];

	const features = [
		{
			id: 1,
			title: "Fleet Management",
			subtitle: "Efficient Operations",
			description:
				"Manage your ice cream truck fleet with intelligent scheduling and route optimization. Track vehicles in real-time, optimize delivery routes, and maximize revenue.",
			gradient: "from-sky-600 to-cyan-600",
			accentColor: "#0284c7",
			features: ["Fleet Tracking", "Route Optimization", "Real-time Updates"],
		},
		{
			id: 2,
			title: "Inventory Tracking",
			subtitle: "Stock Management",
			description:
				"Monitor ice cream stock levels across all trucks. Get alerts for low inventory, automate reordering, and reduce waste with smart inventory management.",
			gradient: "from-cyan-600 to-teal-600",
			accentColor: "#06b6d4",
			features: ["Stock Alerts", "Auto Reorder", "Waste Reduction"],
		},
		{
			id: 3,
			title: "Sales Analytics",
			subtitle: "Business Intelligence",
			description:
				"Analyze sales data across locations and time periods. Identify profitable routes, peak selling times, and optimize pricing for maximum profitability.",
			gradient: "from-teal-600 to-green-600",
			accentColor: "#0d9488",
			features: ["Sales Reports", "Analytics", "Pricing Optimization"],
		},
	];

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#f0f9ff" }}>
			{/* Hero Section */}
			<div className="relative pt-32 pb-20 text-center overflow-hidden">
				<div className="relative max-w-4xl mx-auto px-4">
					<h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						Mister Twister
					</h1>
					<p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
						Ice Cream Selling Truck Management - Smart Business Solutions
					</p>
					<div className="flex justify-center gap-4">
						<div className="h-1 w-12 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-full"></div>
					</div>
				</div>
			</div>

			{/* App Screens Gallery */}
			<div className="max-w-7xl mx-auto px-4 py-24">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						App Interface Preview
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Explore the intuitive design and powerful features of Mister Twister
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{appScreens.map((screen) => (
						<div
							key={screen.id}
							className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 bg-gradient-to-b from-white to-gray-50 flex flex-col"
						>
							<div className="flex-1 p-4 bg-gray-50 flex items-center justify-center">
								<img
									src={screen.image}
									alt={screen.title}
									className="w-full h-auto max-h-96 object-contain"
								/>
							</div>
							<div className="p-4 border-t border-gray-100">
								<h3 className="text-lg font-bold text-gray-900 text-center">
									{screen.title}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Key Highlights */}
			<div className="max-w-7xl mx-auto px-4 py-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature) => (
						<div
							key={feature.id}
							className="p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 bg-white hover:shadow-lg"
							style={{
								borderTopColor: feature.accentColor,
								borderTopWidth: "3px",
							}}
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-2">
								{feature.title}
							</h3>
							<p
								className="text-sm font-semibold mb-4"
								style={{ color: feature.accentColor }}
							>
								{feature.subtitle}
							</p>
							<p className="text-gray-600 mb-6 leading-relaxed">
								{feature.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{feature.features.map((feat) => (
									<span
										key={feat}
										className="px-3 py-1 text-xs font-semibold rounded-full"
										style={{
											backgroundColor: `${feature.accentColor}15`,
											color: feature.accentColor,
										}}
									>
										{feat}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* CTA Section */}
			<div className="py-24 text-center border-t border-gray-200">
				<div className="max-w-3xl mx-auto px-4">
					<h2 className="text-4xl font-bold text-gray-900 mb-6">
						Optimize Your Ice Cream Business
					</h2>
					<p className="text-lg text-gray-700 mb-8">
						Manage trucks, track inventory, and maximize profits with
						intelligent solutions
					</p>
					<button
						type="button"
						className="px-10 py-4 text-lg bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-sky-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
					>
						Get Started Today
					</button>
				</div>
			</div>
		</div>
	);
};

export default MisterTwisterPage;
