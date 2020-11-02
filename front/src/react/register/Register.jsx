import React from 'react';
import logo from '../../assets/Logo.png';
import {
	Container,
	Left,
	Content,
	TitleContainer,
	Title,
	ButtonContainer,
	Button,
	FormContainer,
	Right,
	InputContainer,
	TitleInput,
	Input,
	InputInvalid,
	LogoContainer,
	Logo,
	InputInfo,
	InputInfoFields
} from './Styles';

const Register = ({
	username,
	email,
	document,
	phone,
	password,
	submit,
	handleEnter,
	emptyFields,
}) => {
	return (
		<Container>
			<Left>
				<Content>
					<TitleContainer>
						<Title>registrate</Title>
					</TitleContainer>
					<FormContainer>
						<InputContainer>
							<TitleInput>usuario</TitleInput>
							{username.valid ? (
								<Input
									type='text'
									value={username.value}
									placeholder='cristianluna'
									onChange={username.handler}
									ref={username.reference}
									onKeyPress={handleEnter}
								/>
							) : (
								<>
									<InputInvalid
										type='text'
										value={username.value}
										placeholder='cristianluna'
										onChange={username.handler}
										ref={username.reference}
										onKeyPress={handleEnter}
									/>
									<InputInfo>Este usuario ya esta registrado</InputInfo>
								</>
							)}
						</InputContainer>
						<InputContainer>
							<TitleInput>email</TitleInput>
							{email.valid ? (
								<Input
									type='email'
									value={email.value}
									placeholder='email@ejemplo.com'
									onChange={email.handler}
									ref={email.reference}
									onKeyPress={handleEnter}
								/>
							) : (
								<>
									<InputInvalid
										type='email'
										value={email.value}
										placeholder='email@ejemplo.com'
										onChange={email.handler}
										ref={email.reference}
										onKeyPress={handleEnter}
									/>
									<InputInfo>Este email ya esta registrado</InputInfo>
								</>
							)}
						</InputContainer>
						<InputContainer>
							<TitleInput>documento</TitleInput>
							{document.valid ? (
								<Input
									type='number'
									value={document.value}
									placeholder='95099817'
									onChange={document.handler}
									ref={document.reference}
									onKeyPress={handleEnter}
								/>
							) : (
								<>
									<InputInvalid
										type='number'
										value={document.value}
										placeholder='95099817'
										onChange={document.handler}
										ref={document.reference}
										onKeyPress={handleEnter}
									/>
									<InputInfo>Este documento ya esta registrado</InputInfo>
								</>
							)}
						</InputContainer>
						<InputContainer>
							<TitleInput>telefono</TitleInput>
							<Input
								type='number'
								placeholder='1123115566'
								onChange={phone.handler}
								value={phone.value}
								onKeyPress={handleEnter}
							/>
						</InputContainer>
						<InputContainer>
							<TitleInput>password</TitleInput>
							<Input
								type='password'
								value={password.value}
								onChange={password.handler}
								onKeyPress={handleEnter}
							/>
						</InputContainer>
					</FormContainer>
					{emptyFields && (
						<InputInfoFields>Todos los campos son requeridos</InputInfoFields>
					)}
					<Button onClick={submit}>enviar</Button>
				</Content>
			</Left>
			<Right>
				<LogoContainer>
					<Logo src={logo} />
				</LogoContainer>
			</Right>
		</Container>
	);
};

export default Register;
