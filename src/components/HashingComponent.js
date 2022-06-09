import React, {useState} from 'react';
import './HashingStyles.css';
import {sha1,sha256,sha384,sha512} from 'crypto-hash';

export default function HashingComponent() {

	//initial states
	const [algorithms] = useState(['sha1', 'sha256', 'sha384', 'sha512']);
	let [text_input, setTextInput] = useState('');
	let [file_input, setFileInput] = useState('');
	let [algorithm, setAlgorithm] = useState('sha1');
	let [output, setOutput] = useState('');

	//set up on change handlers
	// For handling text input
	const handleTextInput = async (e) => {
		// Get the value
		let value = e.target.value;

		let result = '';

		// Get the current active algorithm and hash the value using it.
		if (algorithm == 'sha1') {
			result = await sha1(value);
		} else if (algorithm == 'sha256') {
			result = await sha256(value);
		} else if (algorithm == 'sha384') {
			result = await sha384(value);
		} else if (algorithm == 'sha512') {
			result = await sha512(value);
		}

		// Set the hashed text as output
		setOutput(result);

		// Set the value of the text input
		setTextInput(value);
	};

  	// For handling file input
	const handleFileInput = (e) => {
	};

	// For handling algorithm change
	const handleAlgorithmChange = async (e) => {
	};


	//render the input fields
	return (
		<div className='hashing-container'>
			<div className='hashing-content'>

				{/*Start: Hashing form*/}

				<div className="hashing-form">
					<h4 className="hashing-form-heading">Input</h4>
					<form>
						<div className="form-group">
							<label htmlFor="text-input">Text</label>
							<input type="text" className="form-control" id="text-input" placeholder='Write some text' value={text_input} onChange={handleTextInput} />
						</div>
						<div className="form-group">
							<label htmlFor="file-input">File Input</label>
							<input type="file" className="form-control" id="file-input" onChange={handleFileInput} />
						</div>
					</form>
				</div>

				{/*// End: Hashing form*/}

				{/*// Start: Hashing algorithms*/}
				<div className="hashing-algorithms">
					<h4 className="hashing-algorithms-heading">Algorithms</h4>
					<div className="hashing-algorithms-list">
						{
							algorithms.map(algo => {
									return (
										<div className="form-check" key={algo}>
											<input className="form-check-input" type="radio" name="algorithm" id={algo} value={algo} checked={algorithm === algo} onChange={handleAlgorithmChange} />
											<label className="form-check-label" htmlFor={algo}>
												{algo}
											</label>
										</div>
									)
								}
							)}
					</div>
				</div>
				{/*// End: Hashing algorithms*/}

				{/*Start: Hashed output*/}
				<div className="hashed-output">
					<h4 className="hashed-algorithm-heading">Output</h4>
					<div className="hashed-algorithm-container">
						<p className="hashed-algorithm-text">
							{output}
						</p>
					</div>
				</div>
				{/*// End: Hashed output*/}

			</div>
		</div>
	);

}