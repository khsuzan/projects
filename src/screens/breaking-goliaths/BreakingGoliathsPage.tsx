const BreakingGoliathsPage = () => {
	const features = [
		{
			id: 1,
			title: "AI-Powered Motivation",
			subtitle: "Strengthen Your Belief",
			description:
				"An intelligent platform based on the breaking goliaths book that helps strengthen your belief in your hard work and faith. Our AI provides personalized motivation, insights, and guidance tailored to your journey.",
			gradient: "from-amber-600 to-orange-600",
			accentColor: "#d97706",
			features: ["Personalized Insights", "Daily Motivation", "Goal Tracking"],
		},
		{
			id: 2,
			title: "Faith-Based Guidance",
			subtitle: "Spiritual Connection",
			description:
				"Connect your spiritual beliefs with practical actions. Receive daily affirmations, wisdom passages, and inspirational content rooted in faith and determination.",
			gradient: "from-orange-600 to-red-600",
			accentColor: "#ea580c",
			features: ["Daily Affirmations", "Wisdom Content", "Faith Journey"],
		},
		{
			id: 3,
			title: "Community Support",
			subtitle: "Shared Strength",
			description:
				"Join a community of believers working hard on their goals. Share your journey, celebrate victories, and support others in their pursuit of breaking through barriers.",
			gradient: "from-red-600 to-rose-600",
			accentColor: "#dc2626",
			features: ["Community Forum", "Success Stories", "Peer Support"],
		},
	];

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#fffbeb" }}>
			{/* Hero Section */}
			<div className="relative pt-32 pb-20 text-center overflow-hidden">
				<div className="relative max-w-4xl mx-auto px-4">
					<h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						Breaking Goliaths
					</h1>
					<p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
						AI-Powered Platform - Strengthen Your Belief Through Hard Work and
						Faith
					</p>
					<div className="flex justify-center gap-4">
						<div className="h-1 w-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-red-600 to-rose-600 rounded-full"></div>
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
						Transform Your Life Today
					</h2>
					<p className="text-lg text-gray-700 mb-8">
						Start your journey of faith, hard work, and breaking through
						barriers
					</p>
					<button
						type="button"
						className="px-10 py-4 text-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
					>
						Join Community Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default BreakingGoliathsPage;
