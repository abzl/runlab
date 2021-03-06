import {useState} from 'react'

export default function Register(props) {
  const [formData, setFormData] = useState({
		username: '',
    email: '',
    password: '',
    confirmPassword: '',
	});
	const { username, email, password, confirmPassword } = formData;
	const { handleRegister } = props;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

  return (
    <form
			onSubmit={(e) => {
				e.preventDefault();
				handleRegister(formData);
			}}
		>
			<h3>Create an Account</h3>
			<label>
				Username:
				<input
					type='text'
					name='username'
					value={username}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Email:
				<input
					type='text'
					name='email'
					value={email}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Password:
				<input
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
				/>
			</label>
      <br />
      <label>
				Confirm Password:
				<input
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
				/>
      </label>
      <br />
			<button>Create</button>
		</form>
  )
}