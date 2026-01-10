import dashboardImage from "./previews/dashboard.png";
import splashImage from "./previews/splash.png";
import voiceImage from "./previews/voice.png";

const EsortPage = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50">
				<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
					<div className="text-2xl font-bold text-gray-900">eSort</div>
					<div className="flex gap-8 items-center"></div>
				</div>
			</nav>
			{/* Hero Section */}
			<section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
				<div className="max-w-5xl mx-auto text-center">
					<div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
						AI-Powered Productivity
					</div>
					<h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						AI Based Task & Note
						<br />
						Organizer
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
						The intelligent way to manage your tasks and notes. Let AI
						automatically sort your ideas while you stay focused on what
						matters.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
						<a
							href="#features"
							className="text-gray-600 hover:text-gray-900 transition"
						>
							<button
								type="button"
								className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-lg hover:shadow-xl"
							>
								Awesome! See More
							</button>
						</a>
					</div>
				</div>
			</section>
			<section id="features" className="py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-5xl font-bold text-gray-900 mb-4">
							Powerful Features
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Everything you need to organize your productivity
						</p>
					</div>

					{/* Feature 1: Smart Dashboard */}
					<div className="mb-20">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<h3 className="text-4xl font-bold text-gray-900 mb-4">
									Effortless Entry & Smart Dashboards
								</h3>
								<p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
									Notes and todos, simplified for your busy life. Just type your
									thoughts—eSort's AI identifies what's a task and what's a
									note, automatically organizing everything into your clean,
									easy-to-read dashboard. Whether you're capturing quick ideas,
									detailed project notes, or actionable tasks, our intelligent
									system understands your intent and places everything exactly
									where it belongs. No more manual sorting or wasted time
									deciding where to file that important thought. Your dashboard
									becomes a personalized command center where all your
									information is instantly accessible and perfectly organized.
								</p>
								<div className="flex gap-3 flex-wrap">
									<span className="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg font-medium">
										Auto-Organize
									</span>
									<span className="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg font-medium">
										Smart AI
									</span>
									<span className="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg font-medium">
										Clean Interface
									</span>
								</div>
							</div>
							<div className="rounded-2xl overflow-hidden transition flex justify-center">
								<img
									src={dashboardImage}
									alt="Dashboard"
									className="max-w-sm w-full h-auto"
								/>
							</div>
						</div>
					</div>

					{/* Feature 2: Retro Vibes */}
					<div className="mb-20">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div className="overflow-hidden transition order-2 lg:order-1 flex justify-center">
								<img
									src={splashImage}
									alt="Splash"
									className="max-w-sm w-full h-auto"
								/>
							</div>
							<div className="order-1 lg:order-2">
								<h3 className="text-4xl font-bold text-gray-900 mb-4">
									Intuitive & Beautiful Interface
								</h3>
								<p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
									Meet eSort, the AI-powered task and note tracker with a clean,
									modern design. Start your journey with a smart planner that
									organizes your life using intelligent sorting and a beautiful
									interface. We believe productivity shouldn't be complicated or
									overwhelming. That's why we've crafted an elegant, intuitive
									experience that adapts to how you work. Every feature is
									designed with simplicity in mind, letting you focus on what
									matters most instead of wrestling with complex menus and
									cluttered layouts. The beautiful interface isn't just eye
									candy—it's carefully designed to help you stay motivated and
									engaged with your tasks and goals.
								</p>
								<div className="flex gap-3 flex-wrap">
									<span className="px-4 py-2 bg-green-50 border border-green-200 text-green-700 rounded-lg font-medium">
										Modern Design
									</span>
									<span className="px-4 py-2 bg-green-50 border border-green-200 text-green-700 rounded-lg font-medium">
										AI-Powered
									</span>
									<span className="px-4 py-2 bg-green-50 border border-green-200 text-green-700 rounded-lg font-medium">
										Smart Sorting
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Feature 3: Voice */}
					<div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<h3 className="text-4xl font-bold text-gray-900 mb-4">
									Speak It, Sort It, Done
								</h3>
								<p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
									Automate your entire workflow with the integrated AI Voice
									Helper. Capture ideas and schedule reminders hands-free; let
									the AI handle the heavy lifting of organizing your schedule
									while you stay focused on what matters. Life moves fast, and
									sometimes typing isn't an option. Whether you're driving,
									cooking, or just in the flow, simply speak your thoughts and
									let our AI voice assistant do the work. It understands
									context, captures details, and instantly organizes everything
									into your system. Set reminders by voice, update your tasks on
									the go, and never miss an important deadline—all without
									lifting a finger. Your hands stay free, your mind stays
									focused, and your productivity skyrockets.
								</p>
								<div className="flex gap-3 flex-wrap">
									<span className="px-4 py-2 bg-purple-50 border border-purple-200 text-purple-700 rounded-lg font-medium">
										Voice Control
									</span>
									<span className="px-4 py-2 bg-purple-50 border border-purple-200 text-purple-700 rounded-lg font-medium">
										Hands-Free
									</span>
									<span className="px-4 py-2 bg-purple-50 border border-purple-200 text-purple-700 rounded-lg font-medium">
										AI Assistant
									</span>
								</div>
							</div>
							<div className="rounded-2xl overflow-hidden transition flex justify-center">
								<img
									src={voiceImage}
									alt="Voice"
									className="max-w-sm w-full h-auto"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default EsortPage;
