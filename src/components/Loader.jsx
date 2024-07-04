export const Loader = ({ helper }) => {
	return (
		<div className="flex flex-col justify-center items-center h-[100vh]">
			<span className="loading loading-infinity loading-lg"></span>
			{
				helper && (
					<p className="text-xl mt-4">{helper}</p>
				)
			}
		</div>
	);
};
