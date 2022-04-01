import React from 'react';

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}
	static getDerivedStateFromError(error) {
		this.setState({hasError: true});
	}
	componentDidCatch(error, errorInfo) {
		logService(error, errorInfo);
	}
	render() {
		const {hasError} = this.state;
		const backupUI = <div>发生错误</div>
		return hasError ? backupUI : this.props.children;
	}
}
