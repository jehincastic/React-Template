import { useEffect } from "react";
import { useForm as hookUseForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useForm = ({ schema, initialValue, defaultValue }) => {
	const {
		watch,
		reset,
		setValue,
		register,
		setError,
		formState,
		handleSubmit,
	} = hookUseForm({
		resolver: zodResolver(schema),
		values: initialValue,
		defaultValues: defaultValue,
	});

	const getFormProps = (...args) => {
		return register.apply(null, args);
	};


	useEffect(() => {
		const key = Object.keys(formState.errors)?.[0];
		if (key) {
			formState.errors[key].ref?.focus?.();
		}
	}, [formState.errors]);

	return {
		setError,
		getFormProps,
		handleSubmit,
		resetFrom: reset,
		watchFieldValue: watch,
		setFieldValue: setValue,
		errors: formState.errors,
	};
};
