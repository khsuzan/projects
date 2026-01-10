const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-400 py-16 px-6">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
					<div>
						<h3 className="text-white text-lg font-bold mb-4">Kawsar</h3>
						<p>AI-powered task and note organization for modern teams.</p>
					</div>
					<div>
						<h4 className="text-white font-bold mb-4">Product</h4>
						<ul className="space-y-2">
							<li>
								<a href="link" className="hover:text-white transition">
									Features
								</a>
							</li>
							<li>
								<a href="link" className="hover:text-white transition">
									Pricing
								</a>
							</li>
							<li>
								<a href="link" className="hover:text-white transition">
									Security
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-white font-bold mb-4">Company</h4>
						<ul className="space-y-2">
							<li>
								<a href="link" className="hover:text-white transition">
									About
								</a>
							</li>
							<li>
								<a href="link" className="hover:text-white transition">
									Blog
								</a>
							</li>
							<li>
								<a href="link" className="hover:text-white transition">
									Careers
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-white font-bold mb-4">Legal</h4>
						<ul className="space-y-2">
							<li>
								<a href="link" className="hover:text-white transition">
									Privacy
								</a>
							</li>
							<li>
								<a href="link" className="hover:text-white transition">
									Terms
								</a>
							</li>
							<li>
								<a href="link" className="hover:text-white transition">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
