import { Link } from "react-router";

const HomePage = () => {
	const projects = [
		{
			id: 1,
			name: "eSort",
			tagline: "AI-Powered Task & Note Organizer",
			description:
				"The intelligent way to manage your tasks and notes. Let AI automatically sort your ideas with voice control, smart dashboards, and beautiful interface.",
			path: "/esort",
			gradient: "from-blue-500 to-cyan-500",
			icon: "📋",
			features: ["AI Auto-Organize", "Voice Control", "Smart Dashboard"],
		},
		{
			id: 2,
			name: "SportX",
			tagline: "Sports Analytics & AI Insights",
			description:
				"Next-generation sports analytics platform with real-time dashboards, community chat, and AI-powered sports insights. Connect with enthusiasts worldwide.",
			path: "/sport-x",
			gradient: "from-purple-500 to-pink-500",
			icon: "⚽",
			features: ["Analytics", "AI Chat", "Community"],
		},
		{
			id: 3,
			name: "Hisabot",
			tagline: "Smart Accounting Platform",
			description:
				"Modern accounting solution for businesses. Track finances with comprehensive dashboards, multilingual support, and real-time analytics.",
			path: "/hisabot",
			gradient: "from-emerald-500 to-teal-500",
			icon: "💰",
			features: ["Dashboard", "Multilingual", "Analytics"],
		},
		{
			id: 4,
			name: "I Miss U",
			tagline: "Stay Connected Through Voice",
			description:
				"Revolutionary voice connection app bridging distance between loved ones. Crystal-clear conversations, voice messages, and meaningful connections.",
			path: "/i-miss-u",
			gradient: "from-pink-500 to-rose-500",
			icon: "❤️",
			features: ["Voice Call", "Messages", "Family Connect"],
		},
		{
			id: 5,
			name: "Mingly",
			tagline: "Connect & Share Experiences",
			description:
				"Global community platform for discovering events and activities. Join experiences, earn loyalty points, and connect with amazing people.",
			path: "/mingly",
			gradient: "from-cyan-500 to-blue-500",
			icon: "🌍",
			features: ["Event Discovery", "Rewards", "Community"],
		},
		{
			id: 6,
			name: "MathaiDetectives",
			tagline: "AI-Based Online Tutoring",
			description:
				"Master mathematics through adaptive AI tutoring. Personalized learning paths, real-time feedback, and interactive lessons powered by artificial intelligence.",
			path: "/mathaidetectives",
			gradient: "from-indigo-500 to-blue-500",
			icon: "🧮",
			features: ["AI Tutoring", "Adaptive Learning", "Progress Tracking"],
		},
		{
			id: 8,
			name: "Tether",
			tagline: "Voice Cloning Technology",
			description:
				"Create natural-sounding voice overs using Eleven Labs technology. Perfect for content creators, podcasters, and audiobook producers worldwide.",
			path: "/tether",
			gradient: "from-violet-500 to-purple-500",
			icon: "🎙️",
			features: ["Voice Cloning", "Multi-Language", "Easy Integration"],
		},
		{
			id: 9,
			name: "Farda",
			tagline: "IoT Pill Tracking App",
			description:
				"Smart medication management with IoT sensors. Track pills remotely, get reminders, enable family care connections, and share health analytics with providers.",
			path: "/farda",
			gradient: "from-green-500 to-emerald-500",
			icon: "💊",
			features: ["IoT Tracking", "Remote Monitoring", "Health Reports"],
		},
		{
			id: 10,
			name: "Breaking Goliaths",
			tagline: "AI Faith & Belief Strengthening",
			description:
				"Strengthen your belief in hard work and faith. AI-powered motivation, spiritual guidance, and community support based on the breaking goliaths book.",
			path: "/breaking-goliaths",
			gradient: "from-amber-500 to-orange-500",
			icon: "⛪",
			features: ["AI Motivation", "Faith Guidance", "Community"],
		},
		{
			id: 11,
			name: "Plate Prep",
			tagline: "AI Recipe & Community Platform",
			description:
				"Get personalized recipe suggestions powered by AI. Build communities, share recipes, and plan meals intelligently with nutritional guidance.",
			path: "/plate-prep",
			gradient: "from-red-500 to-yellow-500",
			icon: "🍳",
			features: ["AI Recipes", "Community", "Meal Planning"],
		},
		{
			id: 12,
			name: "CoachCal",
			tagline: "AI Fitness Coach App",
			description:
				"Transform your fitness journey with an intelligent AI coach. Personalized workouts, nutrition guidance, and smart tracking for optimal results.",
			path: "/coach-cal",
			gradient: "from-blue-500 to-purple-500",
			icon: "💪",
			features: ["AI Coach", "Smart Tracking", "Nutrition Plans"],
		},
		{
			id: 13,
			name: "Rydr",
			tagline: "Route Sharing & Rider Communities",
			description:
				"Share rides and build rider communities. Connect with people on similar routes, split costs, and create lasting commuting communities.",
			path: "/rydr",
			gradient: "from-green-500 to-teal-500",
			icon: "🚗",
			features: ["Route Sharing", "Communities", "Cost Sharing"],
		},
		{
			id: 14,
			name: "Mister Twister",
			tagline: "Ice Cream Truck Management",
			description:
				"Smart management system for ice cream truck operations. Fleet tracking, inventory management, sales analytics, and route optimization.",
			path: "/mister-twister",
			gradient: "from-sky-500 to-cyan-500",
			icon: "🍦",
			features: ["Fleet Mgmt", "Inventory", "Analytics"],
		},
	];

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#fafbfc" }}>
			{/* Hero Section */}
			<div className="relative pt-32 pb-24 text-center overflow-hidden">
				<div className="absolute inset-0 opacity-5">
					<div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
					<div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
					<div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
				</div>
				<div className="relative max-w-4xl mx-auto px-4">
					<div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full text-sm font-semibold mb-6 border border-blue-200">
						Kawsar Hossain Suzan
					</div>
					<h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						Innovative Apps & Solutions
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
						Explore a collection of modern, feature-rich applications designed
						to solve real-world problems and enhance user experiences.
					</p>
					<div className="flex justify-center gap-4">
						<div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
					</div>
				</div>
			</div>

			{/* Projects Grid */}
			<div className="max-w-7xl mx-auto px-4 py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<Link key={project.id} to={project.path} className="group h-full">
							<div className="h-full flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 hover:border-gray-200 bg-gradient-to-b from-white to-gray-50">
								{/* Card Header with Icon */}
								<div className="h-28 flex items-center justify-center pt-6">
									<div className="text-7xl">{project.icon}</div>
								</div>

								{/* Card Content */}
								<div className="p-8 flex flex-col flex-1">
									<h3 className="text-2xl font-bold text-gray-900 mb-2">
										{project.name}
									</h3>
									<p
										className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4`}
									>
										{project.tagline}
									</p>

									<p className="text-gray-600 mb-6 leading-relaxed text-sm flex-1">
										{project.description}
									</p>

									{/* Features Tags */}
									<div className="flex flex-wrap gap-2 mb-6">
										{project.features.map((feature) => (
											<span
												key={feature}
												className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border`}
												style={{
													borderColor: `#e5e7eb`,
												}}
											>
												{feature}
											</span>
										))}
									</div>

									{/* CTA Button */}
									<button
										type="button"
										className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${project.gradient} text-white`}
									>
										Explore Project
										<svg
											className="w-5 h-5 group-hover:translate-x-1 transition-transform"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<title>Arrow Right Icon</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</button>
								</div>
								{/* Top Border Accent */}
								<div
									style={{
										background: `linear-gradient(to right, var(--tw-gradient-stops))`,
									}}
									className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
								></div>
							</div>
						</Link>
					))}
				</div>
			</div>

			{/* Stats Section */}
			<div className="py-20 border-t border-gray-200/50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
						<div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
							<div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
								14
							</div>
							<p className="text-gray-700 font-semibold">Applications</p>
							<p className="text-gray-500 text-sm mt-1">
								Crafted with precision
							</p>
						</div>
						<div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
							<div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
								∞
							</div>
							<p className="text-gray-700 font-semibold">Possibilities</p>
							<p className="text-gray-500 text-sm mt-1">For your success</p>
						</div>
						<div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
							<div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
								100%
							</div>
							<p className="text-gray-700 font-semibold">Quality</p>
							<p className="text-gray-500 text-sm mt-1">Modern & scalable</p>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="py-24 text-center border-t border-gray-200/50">
				<div className="max-w-3xl mx-auto px-4">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Ready to Explore?
					</h2>
					<p className="text-lg text-gray-600 mb-8">
						Click on any project above to see detailed features, screenshots,
						and learn how each application can enhance your life or business.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="/esort"
							className="px-10 py-4 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
						>
							Start Exploring
						</Link>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="py-12 border-t border-gray-200/50 text-center">
				<p className="text-gray-700 text-sm font-semibold mb-2">
					Kawsar Hossain Suzan
				</p>
				<p className="text-gray-600 text-sm">
					© 2026 Project Portfolio. Crafted with precision and passion.
				</p>
			</div>
		</div>
	);
};

export default HomePage;
