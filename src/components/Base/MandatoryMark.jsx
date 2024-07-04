export const MandatoryMark = ({ isMandatory }) => {
	if (!isMandatory) {
		return null;
	}

	return <span className="text-amber-600">*</span>;
};
