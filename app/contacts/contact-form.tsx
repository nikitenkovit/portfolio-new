'use client';
import { useActionState } from 'react';
import { ContactActionState, sendMessage } from '../lib/actions';
import { Hint, MainForm, TextareaInput } from '../lib/components';
import { useUserData } from '../lib/hooks';
import { NotificationStatus } from '../lib/types';

export const ContactForm = () => {
	const { data: userData } = useUserData();

	const initialState: ContactActionState = {
		notice: undefined,
		error: undefined,
		fieldValue: '',
		status: NotificationStatus.Init,
	};

	const [{ notice, error, fieldValue, status }, formAction, isPending] =
		useActionState(sendMessage, initialState);

	const swap = (formData: FormData) => {
		if (!userData?.ip) {
			return formAction(formData);
		}

		formData.append('userIP', userData?.ip);

		return formAction(formData);
	};

	return (
		<MainForm
			formAction={swap}
			iconName="FaTelegramPlane"
			buttonName="Отправить"
			isPending={isPending}
			notice={notice}
			noticeVariant={status}
		>
			<Hint text={error?.join('\n\n')} variant="red">
				<TextareaInput
					id="message"
					name="message"
					rows={5}
					placeholder="ВАШЕ СООБЩЕНИЕ"
					defaultValue={fieldValue}
				/>
			</Hint>
		</MainForm>
	);
};
