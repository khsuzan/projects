const CoachCalPage = () => {
	const features = [
		{
			id: 1,
			title: "AI Fitness Coach",
			subtitle: "Personalized Training",
			description:
				"Get customized workout plans powered by artificial intelligence. Your AI coach adapts to your fitness level, goals, and preferences, creating dynamic training programs that evolve with you.",
			gradient: "from-blue-600 to-purple-600",
			accentColor: "#3b82f6",
			features: ["AI Coach", "Custom Plans", "Progressive Training"],
		},
		{
			id: 2,
			title: "Smart Tracking",
			subtitle: "Real-Time Monitoring",
			description:
				"Monitor your progress with advanced analytics. Track workouts, calories, weight, and performance metrics. Get AI-powered insights to optimize your training.",
			gradient: "from-purple-600 to-pink-600",
			accentColor: "#a855f7",
			features: ["Real-Time Tracking", "Analytics", "Performance Insights"],
		},
		{
			id: 3,
			title: "Nutrition Guidance",
			subtitle: "AI Meal Planning",
			description:
				"Receive personalized nutrition recommendations from your AI coach. Plan meals aligned with your fitness goals and dietary preferences for optimal results.",
			gradient: "from-pink-600 to-orange-600",
			accentColor: "#f97316",
			features: ["Meal Plans", "Nutrition Tracking", "Goal Alignment"],
		},
	];

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#f0f9ff" }}>
			{/* Hero Section */}
			<div className="relative pt-32 pb-20 text-center overflow-hidden">
				<div className="relative max-w-4xl mx-auto px-4">
					<h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						CoachCal
					</h1>
					<p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
						AI-Powered Fitness Coach App - Transform Your Body with Intelligence
					</p>
					<div className="flex justify-center gap-4">
						<div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full"></div>
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
						Transform Your Fitness Journey
					</h2>
					<p className="text-lg text-gray-700 mb-8">
						Start training with your personal AI coach today
					</p>
					<button
						type="button"
						className="px-10 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
					>
						Start Your Journey
					</button>
				</div>
			</div>
		</div>
	);
};
export default CoachCalPage;
