import React, {useState} from 'react';
import './HashingStyles.css';

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

				// Start: Hashing form
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
				// End: Hashing form

			</div>
		</div>
	);

}