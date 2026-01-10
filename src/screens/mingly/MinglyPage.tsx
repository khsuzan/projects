import bookingImg from "./previews/booking.jpg";
import homeImg from "./previews/home.png";
import settingsImg from "./previews/settings.png";

const MinglyPage = () => {
	const features = [
		{
			id: 1,
			image: homeImg,
			title: "Home Screen",
			subtitle: "Discover & Connect",
			description:
				"Welcome to your personalized discovery hub. Browse through a curated selection of activities, events, and meet-ups tailored to your interests. The home screen presents you with real-time recommendations, trending events, and opportunities to connect with like-minded individuals in your area. Experience seamless navigation with intuitive filters, saved favorites, and personalized suggestions based on your activity history and preferences.",
			gradient: "from-cyan-600 to-blue-600",
			accentColor: "#06b6d4",
			features: [
				"Real-time Discovery",
				"Smart Recommendations",
				"Event Browsing",
				"User Profiles",
			],
		},
		{
			id: 2,
			image: bookingImg,
			title: "Booking Screen",
			subtitle: "Reserve with Ease",
			description:
				"Secure your spot instantly with our streamlined booking experience. Select your preferred date, time, and group size with just a few taps. View detailed event information, pricing, capacity, and participant reviews before confirming your reservation. The booking system is powered by our points-based loyalty program, allowing you to earn rewards on every booking and redeem them for discounts or exclusive experiences.",
			gradient: "from-purple-600 to-pink-600",
			accentColor: "#a855f7",
			features: [
				"Instant Confirmation",
				"Points Earning",
				"Flexible Scheduling",
				"Payment Options",
			],
		},
		{
			id: 3,
			image: settingsImg,
			title: "Settings Screen",
			subtitle: "Customize Your Experience",
			description:
				"Take full control of your Mingly experience with comprehensive settings. Enable multilingual support to use the app in your preferred language with complete localization of all features. Manage your subscription tier to unlock premium benefits, adjust your membership level, and access exclusive perks. Configure notification preferences, privacy settings, language preferences, currency options, and personalization features to create the perfect user experience tailored to your needs.",
			gradient: "from-emerald-600 to-teal-600",
			accentColor: "#10b981",
			features: [
				"Multilingual Support",
				"Subscription Management",
				"Privacy Controls",
				"Personalization",
			],
		},
	];

	const highlights = [
		{
			icon: "🌍",
			title: "Multilingual Support",
			description:
				"Use Mingly in your preferred language with complete interface localization",
		},
		{
			icon: "⭐",
			title: "Points-Based Rewards",
			description:
				"Earn loyalty points on every booking and redeem for exclusive benefits",
		},
		{
			icon: "👑",
			title: "Premium Subscription",
			description:
				"Choose from flexible subscription tiers unlocking premium features and experiences",
		},
	];

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#0E0F11" }}>
			{/* Hero Section */}
			<div className="relative pt-32 pb-20 text-center overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
					<div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
				</div>
				<div className="relative max-w-4xl mx-auto px-4">
					<h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
						Mingly
					</h1>
					<p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
						Connect, explore, and share experiences with a global community
					</p>
					<div className="flex justify-center gap-4">
						<div className="h-1 w-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
					</div>
				</div>
			</div>

			{/* All Screens Gallery - Top Section */}
			<div className="max-w-7xl mx-auto px-4 py-16 mb-20">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={feature.id}
							className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-800"
						>
							{/* Image */}
							<div
								className="relative bg-gray-900 flex items-center justify-center"
								style={{ minHeight: "700px" }}
							>
								<img
									src={feature.image}
									alt={feature.title}
									className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
								/>
								{/* Overlay */}
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
									<div
										className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3"
										style={{ backgroundColor: feature.accentColor }}
									>
										{index + 1}
									</div>
									<h3 className="text-white font-bold text-lg leading-tight">
										{feature.title}
									</h3>
									<p className="text-gray-300 text-sm mt-1">
										{feature.subtitle}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Highlights Section */}
			<div className="max-w-7xl mx-auto px-4 py-20 mb-20">
				<h2 className="text-4xl font-bold text-white text-center mb-16">
					Key Features
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{highlights.map((highlight) => (
						<div
							key={highlight.title}
							className="relative group p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 bg-gradient-to-br from-gray-900/50 to-gray-800/20 hover:from-gray-900/80 hover:to-gray-800/50"
						>
							<div className="text-5xl mb-4">{highlight.icon}</div>
							<h3 className="text-xl font-bold text-white mb-3">
								{highlight.title}
							</h3>
							<p className="text-gray-400 leading-relaxed">
								{highlight.description}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Detailed Features Section */}
			<div className="py-20 border-t border-gray-800">
				<div className="max-w-6xl mx-auto px-4">
					{features.map((feature, index) => (
						<div
							key={feature.id}
							className={`mb-24 pb-24 last:mb-0 last:pb-0 border-b last:border-b-0 border-gray-800 ${
								index > 0 ? "pt-24" : ""
							}`}
						>
							<div
								className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
									index % 2 === 1 ? "lg:grid-cols-2-reverse" : ""
								}`}
							>
								{/* Content */}
								<div>
									<div className="flex items-center gap-3 mb-6">
										<div
											className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
											style={{ backgroundColor: feature.accentColor }}
										>
											{index + 1}
										</div>
										<div
											className="h-1 w-12 rounded-full"
											style={{ backgroundColor: feature.accentColor }}
										></div>
									</div>

									<h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
										{feature.title}
									</h2>
									<p
										className="text-lg mb-6 leading-relaxed"
										style={{ color: feature.accentColor }}
									>
										{feature.subtitle}
									</p>

									<p className="text-lg text-gray-400 mb-8 leading-relaxed">
										{feature.description}
									</p>

									{/* Feature Tags */}
									<div className="flex flex-wrap gap-3 mb-8">
										{feature.features.map((feat) => (
											<span
												key={feat}
												className="px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 hover:scale-105"
												style={{
													borderColor: feature.accentColor,
													color: feature.accentColor,
													backgroundColor: `${feature.accentColor}15`,
												}}
											>
												{feat}
											</span>
										))}
									</div>
								</div>

								{/* Feature Icon Box */}
								<div className="relative">
									<div
										className="relative h-96 rounded-2xl p-8 text-white shadow-2xl flex flex-col justify-center items-center text-center border border-gray-700 overflow-hidden"
										style={{
											background: `linear-gradient(135deg, ${feature.accentColor}20 0%, ${feature.accentColor}05 100%)`,
											borderColor: feature.accentColor,
										}}
									>
										<div
											className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20"
											style={{ backgroundColor: feature.accentColor }}
										></div>
										<div className="relative z-10">
											<div className="text-6xl font-bold mb-4 opacity-50">
												{index + 1}
											</div>
											<h3 className="text-2xl font-bold mb-3">
												{feature.title}
											</h3>
											<p className="text-gray-300 text-sm">
												{feature.subtitle}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MinglyPage;
