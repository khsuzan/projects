const PlatePrepPage = () => {
	const features = [
		{
			id: 1,
			title: "AI Recipe Suggestions",
			subtitle: "Smart Meal Planning",
			description:
				"Get personalized recipe recommendations based on your dietary preferences, available ingredients, and nutritional goals. Our AI learns your tastes and suggests meals you'll love.",
			gradient: "from-red-600 to-orange-600",
			accentColor: "#dc2626",
			features: ["AI Suggestions", "Dietary Filters", "Nutrition Info"],
		},
		{
			id: 2,
			title: "Community Recipes",
			subtitle: "Shared Culinary Wisdom",
			description:
				"Discover recipes from our vibrant community. Rate, review, and share your favorite dishes. Connect with other food enthusiasts and build lasting culinary friendships.",
			gradient: "from-orange-600 to-yellow-600",
			accentColor: "#ea580c",
			features: ["Community Forum", "User Ratings", "Recipe Sharing"],
		},
		{
			id: 3,
			title: "Smart Shopping Lists",
			subtitle: "Efficient Planning",
			description:
				"Automatically generate shopping lists from recipes. Organize by store sections, compare prices, and reduce waste with intelligent meal planning.",
			gradient: "from-yellow-600 to-amber-600",
			accentColor: "#eab308",
			features: ["Auto Shopping List", "Price Comparison", "Waste Reduction"],
		},
	];

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#fff7ed" }}>
			{/* Hero Section */}
			<div className="relative pt-32 pb-20 text-center overflow-hidden">
				<div className="relative max-w-4xl mx-auto px-4">
					<h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						Plate Prep
					</h1>
					<p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
						AI Recipe Suggestion Maker & Community Building Platform
					</p>
					<div className="flex justify-center gap-4">
						<div className="h-1 w-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full"></div>
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
						Start Cooking Smarter
					</h2>
					<p className="text-lg text-gray-700 mb-8">
						Join our community and discover personalized recipes you'll love
					</p>
					<button
						type="button"
						className="px-10 py-4 text-lg bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
					>
						Download App Free
					</button>
				</div>
			</div>
		</div>
	);
};
export default PlatePrepPage;
