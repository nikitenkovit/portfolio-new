import { TAGS } from '../constants';
import { AppLink } from '../types';

export const getUserDataUrl = () => 'api/user';

export const getWorkTag = (slug?: string) =>
	`${TAGS.work}${slug ? '/' + slug : ''}`;
export const getWorkPath = (slug?: string) =>
	`${AppLink.Works}${slug ? '/' + slug : ''}`;
