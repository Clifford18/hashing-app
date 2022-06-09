import React,{useState} from 'react';
import './HashingStyles.css';

export default function HashingComponent(){

	//initial states
	const [algorithms] = useState(['sha1','sha256','sha384','sha512']);
	let [text_input, setTextInput] = useState('');
	let [file_input, setFileInput] = useState('');
	let [algorithm, setAlgorithm] = useState('sha1');
	let [output,setOutput] = useState('');

}