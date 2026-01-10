const FardaPage = () => {
	const features = [
		{
			id: 1,
			title: "Pill Tracking",
			subtitle: "Never Miss a Dose",
			description:
				"IoT sensors monitor your medication supply and send real-time updates. Get reminders before you run out of pills, and automate refill orders through your pharmacy.",
			gradient: "from-green-600 to-emerald-600",
			accentColor: "#16a34a",
			features: ["IoT Sensors", "Reminders", "Auto-Refill"],
		},
		{
			id: 2,
			title: "Remote Monitoring",
			subtitle: "Family Care Connection",
			description:
				"Allow family members or caregivers to monitor medication adherence remotely. Send alerts if doses are missed, ensuring your loved ones stay on track with their health.",
			gradient: "from-emerald-600 to-teal-600",
			accentColor: "#059669",
			features: ["Remote Access", "Family Alerts", "Health Tracking"],
		},
		{
			id: 3,
			title: "Smart Analytics",
			subtitle: "Health Insights",
			description:
				"Analyze medication adherence patterns and generate health reports. Share data with healthcare providers for better treatment decisions and personalized care plans.",
			gradient: "from-teal-600 to-cyan-600",
			accentColor: "#0d9488",
			features: ["Analytics", "Reports", "Provider Sharing"],
		},
	];

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#f0fdf4" }}>
			{/* Hero Section */}
			<div className="relative pt-32 pb-20 text-center overflow-hidden">
				<div className="relative max-w-4xl mx-auto px-4">
					<h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						Farda
					</h1>
					<p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
						IoT-Based Mobile App - Smart Pill Tracking for Remote Care
					</p>
					<div className="flex justify-center gap-4">
						<div className="h-1 w-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full"></div>
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
						Smart Health Management Starts Here
					</h2>
					<p className="text-lg text-gray-700 mb-8">
						Take control of medication adherence with intelligent IoT tracking
					</p>
					<button
						type="button"
						className="px-10 py-4 text-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
					>
						Get Started Today
					</button>
				</div>
			</div>
		</div>
	);
};

export default FardaPage;
