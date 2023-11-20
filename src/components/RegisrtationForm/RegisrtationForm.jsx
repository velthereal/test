import Input from '../Input';
import { useState } from 'react';
import './registrationForm.css';

const RegistrationForm = () => {
	const [name, setName] = useState();
	const [age, setAge] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const [error, setError] = useState('');

   const onGetName = (value) => {
		setName(value);
   };
   const onGetAge = (value) => {
		setAge(value);
   };

   const onGetEmail = (value) => {
   	setEmail(value)
   };
   const onGetPassword = (value) => {
		setPassword(value)
   };

	const handleSubmit = (e) => {
		e.preventDefault();
		if(name.trim() === ''){
			setError(`Будь ласка, заповніть Name поле`);
			return;
		}
		if(age.trim() === ''){
			setError(`Будь ласка, заповніть Age поле`);
			return;
		}
		if(email.trim() === ''){
			setError(`Будь ласка, заповніть Email поле`);
			return;
		}
		if(password.trim() === ''){
			setError(`Будь ласка, заповніть Password поле`);
			return;
		}

		setName('');
		setAge('');
		setEmail('');
		setPassword('');
		setError('');
	}

   return (
			<form onSubmit={handleSubmit} className="common-form">
				<Input 
					label="Name: " 
					placeholder="Enter Your Name" 
					onChangeFunction={onGetName}
					value={name} />
				<Input 
					label="Age: " 
					placeholder="Enter Your Age" 
					onChangeFunction={onGetAge}
					value={age} />
				<Input 
					label="Email: " 
					placeholder="Enter Your Email" 
					onChangeFunction={onGetEmail}
					value={email} />
				<Input 
					label="Password: " 
					placeholder="Enter Your Password" 
					type="password" 
					onChangeFunction={onGetPassword}
					value={password} />
				<button type='submit'>Sign Up</button>
				{error && <p>{error}</p>}
			</form>
   );
};


export default RegistrationForm;