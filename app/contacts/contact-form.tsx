'use client';
import { useActionState } from 'react';
import { ContactActionState, sendMessage } from '../actions/contact.action';
import { Hint } from '../components/hint/hint';
import { TextareaInput } from '../components/inputs/textarea-input';
import { MainForm } from '../components/main-form/main-form';

export const ContactForm = () => {
	const initialState: ContactActionState = {
		notice: undefined,
		error: undefined,
		fieldValue: '',
	};
	const [{ notice, error, fieldValue, isSuccess }, formAction, isPending] =
		useActionState(sendMessage, initialState);

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
