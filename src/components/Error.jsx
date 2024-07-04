export const Error = ({
	subTitle, btnText, title,
	// eslint-disable-next-line no-unused-vars
	code, handleClick,
}) => {
	return (
		<>
			{subTitle}
			{btnText}
			{title}
			{code}
		</>
	);
};
