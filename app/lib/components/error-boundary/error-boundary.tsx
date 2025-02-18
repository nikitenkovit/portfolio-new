'use client';
import React from 'react';
import styles from './error-boundary.module.scss';

interface ErrorBoundaryProps {
	fallback?: React.ReactNode;
	children: React.ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	errorMessage: string;
}

export class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, errorMessage: '' };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, errorMessage: error.message };
	}

	componentDidCatch(_error: Error, _info: { componentStack: string }): void {
		// TODO: Добавить логирование ошибок
		// logErrorToMyService(error, info.componentStack);
	}

	render(): React.ReactNode {
		if (this.state.hasError) {
			return (
				<div className={styles.container}>
					<h2 className={styles.title}>
						Произошла <span>ошибка</span> 😢
					</h2>
					<h3 className={styles.message}>{this.state.errorMessage}</h3>
				</div>
			);
		}

		return this.props.children;
	}
}
