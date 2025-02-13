'use client';
import { useActionState } from 'react';
import { ContactActionState, sendMessage } from '../actions/contact.action';
import { Hint } from '../components/hint/hint';
import { TextareaInput } from '../components/inputs/textarea-input';
import { MainForm } from '../components/main-form/main-form';
import { useUserData } from '../lib/hooks/use-user-data';

export const ContactForm = () => {
	// FIXME: перенести вызов на самый высокий из доступных уровней
	const { data: userData } = useUserData();
	const initialState: ContactActionState = {
		userIP: userData?.ip,
		notice: undefined,
		error: undefined,
		fieldValue: '',
	};
	const [{ notice, error, fieldValue, isSuccess }, formAction, isPending] =
		useActionState(sendMessage, initialState);

	console.log('userData', userData);

	return (
		<MainForm
			formAction={formAction}
			iconName="FaTelegramPlane"
			buttonName="Отправить"
			isPending={isPending}
			notice={notice}
			noticeVariant={isSuccess ? 'success' : 'error'}
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
