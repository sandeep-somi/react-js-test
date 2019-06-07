import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Header extends Component {
	render() {
		const { file, onUpload } = this.props;
		return (
			<Row className="header-wrapper">
				<Col xs={12} sm={3} md={3} className="header-title">
					<h1 className="no-padding inline-block">FILES</h1>
					<span className="upload-button">
						<span className="overlay-button">Upload <i class="fas fa-upload"></i></span>
						<input type="file" onChange={onUpload} />
					</span>
				</Col>
				<Col xs={12} sm={9} md={9} className="file-title">
					<h1 className="no-padding">{file && file.name || ''}</h1>
				</Col>
			</Row>
		);
	}
}

export default Header;