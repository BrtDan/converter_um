import React from 'react';

export default function Footer(){
	return (
		<footer className="bg-gray-900 text-gray-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="border-t border-gray-700 mt-8 pt-8 text-center">
					<p>&copy; {new Date().getFullYear()} Daniel Bertucci. Tutti i diritti riservati.</p>
				</div>
			</div>
		</footer>
	);
}