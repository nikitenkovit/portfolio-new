export const getAge = () => {
	return new Date().getFullYear() - 1986;
};
export const getExperience = () => {
	return new Date().getFullYear() - 2020;
};
export const getSegment = (pathname: string) => `/${pathname.split('/').at(1)}`;
