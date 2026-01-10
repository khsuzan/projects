const RydrPage = () => {
	const features = [
		{
			id: 1,
			title: "Route Sharing Network",
			subtitle: "Connect Riders",
			description:
				"Share your daily routes with other riders and discover people on similar paths. Build a network of riders heading the same direction and split travel costs.",
			gradient: "from-green-600 to-emerald-600",
			accentColor: "#16a34a",
			features: ["Route Mapping", "Rider Matching", "Cost Sharing"],
		},
		{
			id: 2,
			title: "Community Building",
			subtitle: "Meet Fellow Riders",
			description:
				"Connect with riders in your area and build lasting communities. Share experiences, tips, and make commuting more enjoyable with new friends.",
			gradient: "from-emerald-600 to-teal-600",
			accentColor: "#059669",
			features: ["Social Features", "Events", "Rider Groups"],
		},
		{
			id: 3,
			title: "Smart Scheduling",
			subtitle: "Seamless Coordination",
			description:
				"Schedule rides in advance with synchronized timing. Get notifications for upcoming rides and manage your commute efficiently with intelligent scheduling.",
			gradient: "from-teal-600 to-blue-600",
			accentColor: "#0d9488",
			features: ["Schedule Management", "Notifications", "Smart Sync"],
		},
	];

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#f0fdf4" }}>
			{/* Hero Section */}
			<div className="relative pt-32 pb-20 text-center overflow-hidden">
				<div className="relative max-w-4xl mx-auto px-4">
					<h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						Rydr
					</h1>
					<p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
						Route Sharing App - Build Rider Communities
					</p>
					<div className="flex justify-center gap-4">
						<div className="h-1 w-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></div>
					</div>
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
						Join the Rider Community
					</h2>
					<p className="text-lg text-gray-700 mb-8">
						Share rides, save money, and connect with riders near you
					</p>
					<button
						type="button"
						className="px-10 py-4 text-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
					>
						Download App
					</button>
				</div>
			</div>
		</div>
	);
};

export default RydrPage;
