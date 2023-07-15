import React, { useState } from 'react';

export default function ConverterUm() {
	const [value, setValue] = useState('');
	const [fromUnit, setFromUnit] = useState('');
	const [toUnit, setToUnit] = useState('');
	const [result, setResult] = useState('');

	const handleConversion = () => {
		if (fromUnit === toUnit) {
			setResult(value);
			return;
		}

		let convertedValue;

		switch (fromUnit) {
			case 'm':
				convertedValue = convertFromMeter(value, toUnit);
				break;
			case 'cm':
				convertedValue = convertFromCentimeter(value, toUnit);
				break;
			case 'in':
				convertedValue = convertFromInch(value, toUnit);
				break;
			default:
				setResult('Invalid from unit');
				return;
		}

		if (isNaN(convertedValue)) {
			setResult('Invalid value');
		} else {
			setResult(convertedValue);
		}
	};

	const convertFromMeter = (value, toUnit) => {
		switch (toUnit) {
			case 'cm':
				return value * 100;
			case 'in':
				return value * 39.37;
			default:
				return NaN;
		}
	};

	const convertFromCentimeter = (value, toUnit) => {
		switch (toUnit) {
			case 'm':
				return value / 100;
			case 'in':
				return value / 2.54;
			default:
				return NaN;
		}
	};

	const convertFromInch = (value, toUnit) => {
		switch (toUnit) {
			case 'm':
				return value / 39.37;
			case 'cm':
				return value * 2.54;
			default:
				return NaN;
		}
	};

	return (
		<div className="max-w-md mx-auto mt-5 p-4 bg-gray-900 rounded shadow">
			<h2 className="text-2xl font-semibold text-white mb-4">Unit Converter</h2>
			<div className="flex items-center mb-4">
				<input
					type="number"
					className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					placeholder="Value"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<select
					className="w-5/12 ml-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					value={fromUnit}
					onChange={(e) => setFromUnit(e.target.value)}
				>
					<option value="">From</option>
					<option value="m">Meter (m)</option>
					<option value="cm">Centimeter (cm)</option>
					<option value="in">Inch (in)</option>
				</select>
				<select
					className="w-5/12 ml-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					value={toUnit}
					onChange={(e) => setToUnit(e.target.value)}
				>
					<option value="">To</option>
					<option value="m">Meter (m)</option>
					<option value="cm">Centimeter (cm)</option>
					<option value="in">Inch (in)</option>
				</select>
			</div>
			<button
				className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
				onClick={handleConversion}
			>
				Convert
			</button>
			{result && (
				<div className="mt-4">
					<p className="font-semibold text-white">Result:</p>
					<p className="text-white">{result}</p>
				</div>
			)}
		</div>
	);
}
