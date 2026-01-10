const MathaidetectivesPage = () => {
	const features = [
		{
			id: 1,
			title: "AI-Powered Tutoring",
			subtitle: "Personalized Learning",
			description:
				"Experience adaptive learning powered by artificial intelligence. Our AI tutors understand your learning pace, identify knowledge gaps, and provide customized learning paths tailored to your needs. Get real-time feedback and instant explanations for complex concepts.",
			gradient: "from-indigo-600 to-blue-600",
			accentColor: "#4f46e5",
			features: ["Adaptive Learning", "Real-time Feedback", "Custom Paths"],
		},
		{
			id: 2,
			title: "Interactive Lessons",
			subtitle: "Engage & Learn",
			description:
				"Master mathematics through interactive sessions with AI tutors. Practice problems with step-by-step explanations, visual demonstrations, and instant corrections. Build confidence through structured learning modules.",
			gradient: "from-blue-600 to-cyan-600",
			accentColor: "#0891b2",
			features: ["Step-by-Step", "Visual Learning", "Practice Tests"],
		},
		{
			id: 3,
			title: "Progress Tracking",
			subtitle: "Measure Your Growth",
			description:
				"Track your learning journey with comprehensive analytics. Monitor improvement in different mathematical concepts, identify weak areas, and celebrate milestones. Share progress reports with teachers and parents.",
			gradient: "from-cyan-600 to-teal-600",
			accentColor: "#14b8a6",
			features: ["Analytics", "Reports", "Milestones"],
		},
	];

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#f0f9ff" }}>
			{/* Hero Section */}
			<div className="relative pt-32 pb-20 text-center overflow-hidden">
				<div className="relative max-w-4xl mx-auto px-4">
					<h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						MathaiDetectives
					</h1>
					<p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
						AI-Based Online Tutoring Platform - Master Mathematics with
						Intelligent Guidance
					</p>
					<div className="flex justify-center gap-4">
						<div className="h-1 w-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full"></div>
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
						Start Your Math Journey Today
					</h2>
					<p className="text-lg text-gray-700 mb-8">
						Join thousands of students mastering mathematics with AI-powered
						tutoring
					</p>
					<button
						type="button"
						className="px-10 py-4 text-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
					>
						Get Started Free
					</button>
				</div>
			</div>
		</div>
	);
};
export default MathaidetectivesPage;
