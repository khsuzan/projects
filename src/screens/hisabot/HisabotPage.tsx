import dashboardImg from "./previews/dashboard.png";
import settingsImg from "./previews/settings.png";
import splashImg from "./previews/splash.png";

const HisabotPage = () => {
	const features = [
		{
			id: 1,
			image: splashImg,
			title: "Elegant Splash Screen",
			description:
				"Welcome users with a stunning and polished splash screen that leaves a lasting first impression. Our beautifully designed interface sets the perfect tone for an intuitive and professional accounting experience. Every visual element is carefully crafted to reflect quality and trustworthiness, ensuring your users feel confident entering the application. The splash screen serves as a visual brand representation, creating a smooth and engaging transition into the powerful accounting tools that await them.",
			gradient: "from-blue-600 to-cyan-600",
			number: "01",
		},
		{
			id: 2,
			image: dashboardImg,
			title: "Accounting Dashboard",
			description:
				"Get a comprehensive financial overview at your fingertips with our powerful accounting dashboard. Track income, expenses, invoices, and transactions seamlessly with real-time analytics and interactive charts for complete business insights. Monitor cash flow, analyze spending patterns, and generate detailed financial reports instantly. The dashboard provides visual representations of your financial data, helping you make informed decisions quickly. Customize your view to focus on metrics that matter most to your business, and stay on top of your finances at all times.",
			gradient: "from-emerald-600 to-teal-600",
			number: "02",
		},
		{
			id: 3,
			image: settingsImg,
			title: "Multilingual Support",
			description:
				"Break language barriers and expand your reach globally with seamless multilingual support. Configure settings for multiple languages and currencies to serve your international clients effortlessly. Whether your users are in Asia, Europe, Americas, or beyond, Hisabot adapts to their language preferences and local currency standards. Manage financial data across different regions while maintaining consistency and accuracy. Support multiple timezone configurations and localized date formats to ensure a truly personalized experience for users worldwide. Scale your accounting operations internationally without technical complexity.",
			gradient: "from-violet-600 to-purple-600",
			number: "03",
		},
	];

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
			{/* Hero Section */}
			<div className="relative pt-32 pb-32 text-center overflow-hidden">
				<div className="absolute inset-0 opacity-5">
					<div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
					<div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
				</div>
				<div className="relative max-w-4xl mx-auto px-4">
					<h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						Hisabot
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						Smart accounting platform designed for modern businesses
					</p>
					<div className="flex justify-center gap-4">
						<div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
						<div className="h-1 w-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
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
								<div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-xl"></div>
								<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-100 to-gray-50 p-1 group-hover:p-0 transition-all duration-300 shadow-lg">
									<div className="bg-white rounded-2xl overflow-hidden">
										<img
											src={feature.image}
											alt={feature.title}
											className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
										/>
									</div>
								</div>
								{/* Floating Badge */}
								<div
									className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-2xl"
									style={{
										backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
										background: `linear-gradient(to right, var(--color-1), var(--color-2))`,
									}}
								></div>
							</div>

							{/* Content Section */}
							<div
								className={`relative ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
							>
								<div className="flex items-start gap-4 mb-6">
									<div
										className={`text-6xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent opacity-20`}
									>
										{feature.number}
									</div>
									<div className="flex-1">
										<div
											className={`h-1 w-16 bg-gradient-to-r ${feature.gradient} rounded-full`}
										></div>
									</div>
								</div>

								<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
									{feature.title}
								</h2>

								<p className="text-lg text-gray-600 mb-8 leading-relaxed">
									{feature.description}
								</p>

								<div className="flex items-center gap-2">
									<button
										type="button"
										className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r ${feature.gradient} text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
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
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HisabotPage;
