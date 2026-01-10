import dashboardImg from "./previews/dashboard.png";
import generalChatImg from "./previews/general-chat.png";
import sportAiChatImg from "./previews/sport-ai-chat.png";

const SportXPage = () => {
	const features = [
		{
			id: 1,
			image: dashboardImg,
			title: "Analytics Dashboard",
			description:
				"Real-time sports analytics and comprehensive statistics tracking. Monitor player performance, game metrics, and team progress with interactive visualizations and detailed insights.",
			gradient: "from-blue-600 to-purple-600",
			number: "01",
		},
		{
			id: 2,
			image: generalChatImg,
			title: "General Chat",
			description:
				"Engage with a vibrant community of sports enthusiasts. Share opinions, discuss strategies, and connect with fellow fans in real-time conversations.",
			gradient: "from-green-600 to-emerald-600",
			number: "02",
		},
		{
			id: 3,
			image: sportAiChatImg,
			title: "Sport AI Assistant",
			description:
				"Get AI-powered sports insights and predictions. Ask questions about player stats, game strategies, and receive personalized recommendations based on advanced analytics.",
			gradient: "from-orange-600 to-red-600",
			number: "03",
		},
	];

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#111111" }}>
			{/* Hero Section */}
			<div className="relative pt-32 pb-32 text-center overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
					<div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
				</div>
				<div className="relative max-w-4xl mx-auto px-4">
					<h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
						SportX Platform
					</h1>
					<p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
						Next-generation sports analytics and AI-powered insights platform
					</p>
					<div className="flex justify-center gap-4">
						<div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="max-w-6xl mx-auto px-4 py-20">
				{features.map((feature, index) => (
					<div
						key={feature.id}
						className="mb-32 scroll-mt-20 opacity-100 animate-fade-in"
					>
						<div
							className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
								index % 2 === 1 ? "lg:grid-cols-2-reverse" : ""
							}`}
						>
							{/* Image Section */}
							<div
								className={`relative group ${
									index % 2 === 1 ? "lg:order-2" : "lg:order-1"
								}`}
							>
								<div className="absolute -inset-1 bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-xl"></div>
								<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-1 group-hover:p-0 transition-all duration-300">
									<div className="bg-gray-800 rounded-2xl overflow-hidden">
										<img
											src={feature.image}
											alt={feature.title}
											className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
										/>
									</div>
								</div>
								{/* Floating Badge */}
								<div
									className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-r opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-2xl"
									style={{
										backgroundImage: `linear-gradient(to right, ${feature.gradient})`,
									}}
								></div>
							</div>

							{/* Content Section */}
							<div
								className={`relative ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
							>
								<div className="flex items-start gap-4 mb-6">
									<div
										className={`text-6xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent opacity-30`}
									>
										{feature.number}
									</div>
									<div className="flex-1">
										<div
											className={`h-1 w-16 bg-gradient-to-r ${feature.gradient} rounded-full mb-4`}
										></div>
									</div>
								</div>

								<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
									{feature.title}
								</h2>

								<p className="text-lg text-gray-400 mb-8 leading-relaxed">
									{feature.description}
								</p>

								<div className="flex items-center gap-2">
									<button
										type="button"
										className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r ${feature.gradient} text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
									>
										Explore More
										{/** biome-ignore lint/a11y/noSvgWithoutTitle: <> */}
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Navigation to Next Project */}
			<div className="py-16 border-t border-gray-200/10 bg-[#111111]">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<p className="text-gray-600 mb-4">Continue Exploring</p>
					<a
						href="/hisabot"
						className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
					>
						Next Project: Hisabot →
					</a>
				</div>
			</div>
		</div>
	);
};

export default SportXPage;
