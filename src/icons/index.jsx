import {
	Mail, Lock, Bell, BellRing,
	X, Plus, User, Pencil, Trash,
	Waves, Workflow,
} from "lucide-react";

export const AppLogo = ({ size = "24", className }) => {
	return (
		<svg
			height={size}
			width={size}
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			<text
				x="50%"
				y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
				fontSize="18"
				fontFamily="Arial"
				fill="#4D4D4D"
			>
        S
			</text>
			<text
				x="75%"
				y="80%"
				dominantBaseline="middle"
				textAnchor="middle"
				fontSize="18"
				fontFamily="Arial"
				fill="#4D4D4D"
			>
        P
			</text>
		</svg>
	);
};

const IconMap = {
	Email: Mail,
	Password: Lock,
	NotificationEmpty: Bell,
	Notification: BellRing,
	Close: X,
	Add: Plus,
	User: User,
	Edit: Pencil,
	Delete: Trash,
	Hamburger: Waves,
	Integration: Workflow,
};

export const Icon = ({ name, className, size = "24" }) => {
	if (!name) {
		return null;
	}

	const Val = IconMap[name];
	return (
		<Val className={className} size={size} />
	);
};
