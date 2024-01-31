import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './landingCss/HireSection.css';



const HireSection = () => {


	const schema = yup.object().shape({
		name: yup.string().required("Name is required"),
		email: yup.string().email("Invalid email").required("Email is required"),
		projectname: yup.string().required("Project name is required"),
		contact: yup.number().required('Phone number is required').min(10, 'Phone number must be of 10 digits').nullable(),
		radioField: yup.string().required('Please select a option'),
		alternateEmail: yup.string()
			.email('Invalid email format')
			.test(
				'notSameAsEmail',
				'Alternate Email must be different from the main Email',
				function (value) {
					return value !== this.parent.email;
				}
			),
		alternateNumber: yup.number()
			.test('notSameAsPhoneNumber', 'Alternate number must be different from the main number', function (value) {
				// 'this' refers to the entire form values
				return value !== this.parent.contact;
			}),
	});



	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
		// Handle All the Logics
	};

	return (
		<>
			<div className='Hirecont'>
				<h1>We are Hiring</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input name="name" type="text" className="feedback-input" placeholder="Name"  {...register("name", { onBlur: true })} />
					{errors.name && (
						<span className="error-message">
							{errors.name.message}
						</span>
					)}

					<div className='contactmain'>
						<label htmlFor="email"><h5>Contact</h5></label>
						<div className='contactfield'>
							<div className='emailField'>
								<input name="email" type="email" className="feedback-input"
									placeholder="Email"
									{...register("email", { onBlur: true })} />

								{errors.email && (
									<span className="error-message" style={{ marginBottom: "8px" }}>
										{errors.email.message}
									</span>
								)}


							</div>
							<div className="emailField">

								<input name="email" type="email" className="feedback-input" placeholder="Alternate Email" {...register("alternateEmail", { onBlur: true })} />
								{errors.alternateEmail && (
									<span className="error-message" style={{ marginBottom: "8px" }}>
										{errors.alternateEmail.message}
									</span>
								)}
							</div>
						</div>
						<div className='contactfield'>
							<div className='numberField'>
								<input name="number" type="text" className="feedback-input" placeholder="Contact No."  {...register("contact", { onBlur: true })} />
								{errors.contact && (
									<span className="error-message">
										{errors.contact.message}
									</span>
								)}
							</div>
							<div className='numberField'>
								<input name="number" type="text" className="feedback-input " placeholder=" Alternate Contact No." {...register("alternateNumber", { onBlur: true })} />
								{errors.alternateNumber && (
									<span className="error-message">
										{errors.alternateNumber.message}
									</span>
								)}
							</div>
						</div>
					</div>
					<hr />

					<div className='projectmain'>
						<label htmlFor="projectfield"><h5>Projects</h5></label>
						<div className='projectfield'>
							<input name="projectname" type="text" className="feedback-input" placeholder="Projectname"  {...register("projectname", { onBlur: true })} />
							{errors.projectname && (
								<span className="error-message" style={{ marginBottom: "8px" }} >
									{errors.projectname.message}
								</span>
							)}
							<input name="projectbudjet" type="text" className="feedback-input" placeholder="Projectbudget" />
							<textarea name="text" className="feedback-input" placeholder="Project description" />
							<h6>Upload Project</h6>
							<input type="file" name="uploadfile" className='feedback-input' multiple />
							<textarea name="text" className="feedback-input" placeholder="Project SOP"></textarea>
							<h6>Other docs.</h6>
							<input type="file" name="uploadfile" className='feedback-input' multiple />
						</div>
						<hr />
						<div className='HireRadio'>
							<h4>Work AS</h4>
							<div className="radio-group">
								<input type="radio" id="option-one" name="selector" {...register("radioField", { onBlur: true })} />
								<label htmlFor="option-one">Individual</label>
								<input type="radio" id="option-two" name="selector" {...register("radioField", { onBlur: true })} />
								<label htmlFor="option-two">Company</label>
								<input type="radio" id="option-three" name="selector" {...register("radioField", { onBlur: true })} />
								<label htmlFor="option-three">Agency</label>
							</div>
						</div>
					</div>
					{errors.radioField && (
						<span className="error-message" style={{ marginBottom: "8px" }} >
							{errors.radioField.message}
						</span>
					)}



					<button className='submitbut' type='submit'>Submit</button>
				</form>
			</div>
		</>
	)
}

export default HireSection



