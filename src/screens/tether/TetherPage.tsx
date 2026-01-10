const TetherPage = () => {
	const features = [
		{
			id: 1,
			title: "Voice Cloning Technology",
			subtitle: "Powered by Eleven Labs",
			description:
				"Experience cutting-edge voice cloning technology. Clone any voice with stunning accuracy and create natural-sounding audio in minutes. Perfect for content creators, podcasters, and audiobook producers.",
			gradient: "from-violet-600 to-purple-600",
			accentColor: "#7c3aed",
			features: ["Eleven Labs API", "High Accuracy", "Natural Sound"],
		},
		{
			id: 2,
			title: "Multi-Language Support",
			subtitle: "Global Reach",
			description:
				"Clone voices and generate speech in multiple languages and dialects. Expand your content to international audiences with authentic-sounding voice overs.",
			gradient: "from-purple-600 to-pink-600",
			accentColor: "#a855f7",
			features: ["Multi-Language", "Dialects", "Global Access"],
		},
		{
			id: 3,
			title: "Easy Integration",
			subtitle: "Developer Friendly",
			description:
				"Simple API and intuitive dashboard for seamless voice cloning. Integrate into your workflows, automate content creation, and scale your production effortlessly.",
			gradient: "from-pink-600 to-rose-600",
			accentColor: "#ec4899",
			features: ["API Access", "Dashboard", "Automation"],
		},
	];

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#faf5ff" }}>
			{/* Hero Section */}
			<div className="relative pt-32 pb-20 text-center overflow-hidden">
				<div className="relative max-w-4xl mx-auto px-4">
					<h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						Tether
					</h1>
					<p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
						Voice Cloning App - Powered by Eleven Labs
					</p>
					<div className="flex justify-center gap-4">
						<div className="h-1 w-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full"></div>
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
						Clone Your Voice Today
					</h2>
					<p className="text-lg text-gray-700 mb-8">
						Start creating authentic voice overs with Eleven Labs technology
					</p>
					<button
						type="button"
						className="px-10 py-4 text-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
					>
						Start Free Trial
					</button>
				</div>
			</div>

			{/* Navigation to Next Project */}
			<div className="py-16 border-t border-gray-200 bg-gray-50">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<p className="text-gray-600 mb-4">Continue Exploring</p>
					<a
						href="/farda"
						className="inline-block px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
					>
						Next Project: Farda →
					</a>
				</div>
			</div>
		</div>
	);
};
export default TetherPage;
