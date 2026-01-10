import homeImg from "./previews/home.png";
import splashImg from "./previews/splash.png";
import talkImg from "./previews/talk.png";

const IMissUPage = () => {
	const features = [
		{
			id: 1,
			image: splashImg,
			title: "I Miss U — Stay Close, Even When Apart",
			description:
				"Welcome to a revolutionary application that bridges the distance between loved ones. I Miss U is designed with emotion at its core, creating a meaningful space where distance becomes irrelevant. The splash screen captures the essence of connection and warmth, inviting users into a world where memories come alive through the power of voice. Whether separated by miles or time zones, this application ensures that the voices and moments you cherish remain just a tap away. Experience the comforting feeling of being close to those you miss the most, anytime and anywhere.",
			gradient: "from-pink-600 to-rose-600",
			accentColor: "#ec4899",
		},
		{
			id: 2,
			image: homeImg,
			title: "Home Screen — Reconnect Through a Familiar Voice",
			description:
				"Step into your personal hub of connections where all your loved ones are organized and accessible. The home screen serves as your command center for staying in touch with family and friends through the power of voice. Browse through your list of cherished contacts, each one ready to connect with just a simple tap. Get quick access to recent conversations, favorite contacts, and memorable moments shared with those you care about. The intuitive interface ensures that reconnecting with loved ones feels natural and effortless. Every visit brings you closer to the people who matter most, with their familiar voices ready to fill your heart with warmth and comfort.",
			gradient: "from-amber-600 to-orange-600",
			accentColor: "#f59e0b",
		},
		{
			id: 3,
			image: talkImg,
			title: "Talk With Relative Screen — Hear the Voice You Miss, Anytime",
			description:
				"Experience the profound joy of hearing the voice of someone you love whenever you need them. The talk screen creates an intimate space where conversations flow naturally, transcending the barriers of distance. Crystal-clear voice quality ensures that every word, every laugh, and every emotion comes through beautifully. Enjoy seamless conversations with your relatives, whether it's a quick check-in or a long heart-to-heart discussion. The interface is designed to keep you focused on the connection, with minimal distractions and maximum comfort. Share voice messages, record precious conversations for later, and build deeper bonds through the simple yet powerful act of hearing each other's voices. This is more than just a call feature—it's a bridge to the hearts of those you miss.",
			gradient: "from-purple-600 to-indigo-600",
			accentColor: "#a855f7",
		},
	];

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#f8f5f7" }}>
			{/* Hero Section */}
			<div className="relative pt-20 pb-16 text-center">
				<div className="relative max-w-4xl mx-auto px-4">
					<h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
						I Miss U
					</h1>
					<p className="text-xl text-gray-700 max-w-2xl mx-auto">
						Stay connected with the voices you love, no matter the distance
					</p>
				</div>
			</div>

			{/* All Screens Gallery - Top Section */}
			<div className="max-w-7xl mx-auto px-4 py-16 mb-20">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={feature.id}
							className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
						>
							{/* Image with overlay */}
							<div
								className="relative bg-gray-100 flex items-center justify-center"
								style={{ minHeight: "700px" }}
							>
								<img
									src={feature.image}
									alt={feature.title}
									className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
								/>
								{/* Minimal overlay for title only */}
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
									<div
										className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3"
										style={{ backgroundColor: feature.accentColor }}
									>
										{index + 1}
									</div>
									<h3 className="text-white font-bold text-lg leading-tight">
										{feature.title.split(" — ")[0]}
									</h3>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Detailed Features Section */}
			<div className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-4">
					{features.map((feature, index) => (
						<div
							key={feature.id}
							className={`mb-20 pb-20 last:mb-0 last:pb-0 border-b last:border-b-0 border-gray-200 ${
								index > 0 ? "pt-20" : ""
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

									<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
										{feature.title}
									</h2>

									<p className="text-lg text-gray-700 mb-8 leading-relaxed">
										{feature.description}
									</p>

									<button
										type="button"
										className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
										style={{
											backgroundColor: feature.accentColor,
										}}
									>
										Learn More
										<svg
											className="w-5 h-5"
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

								{/* Side Feature Box */}
								<div className="relative">
									<div
										className="h-96 rounded-2xl p-8 text-white shadow-xl flex flex-col justify-center items-center text-center"
										style={{
											background: `linear-gradient(135deg, ${feature.accentColor} 0%, ${feature.accentColor}cc 100%)`,
										}}
									>
										<div className="text-6xl font-bold mb-4 opacity-30">
											{index + 1}
										</div>
										<h3 className="text-2xl font-bold mb-3">
											{feature.title.split(" — ")[0]}
										</h3>
										<p className="text-sm opacity-90">
											{feature.title.split(" — ")[1]}
										</p>
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

export default IMissUPage;
