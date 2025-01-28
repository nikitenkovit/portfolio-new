import { User } from './user.type';

export interface UserFormState {
	fields: {
		email: FormDataEntryValue | undefined;
		password: FormDataEntryValue | undefined;
	};
	user?: User;
	error?: string;
}
