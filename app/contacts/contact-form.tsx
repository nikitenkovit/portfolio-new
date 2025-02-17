'use client';
import { useActionState } from 'react';
import { ContactActionState, sendMessage } from '../actions/contact.action';
import { Hint } from '../components/hint/hint';
import { TextareaInput } from '../components/inputs/textarea-input';
import { MainForm } from '../components/main-form/main-form';
import { useUserData } from '../lib/hooks/use-user-data';
import { NotificationStatus } from '../lib/types/notification-status.type';

export const ContactForm = () => {
	// FIXME: перенести вызов на самый высокий из доступных уровней
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
		const newData = new FormData();
		newData.append('userIP', userData?.ip);

		for (let pair of formData.entries()) {
			newData.append(pair[0], pair[1]);
		}

		return formAction(newData);
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
