import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ListItem } from './';

const iframeStyle = {
  width: '100%',
  height: '100%'
}

const Content = ({ file = {}, files = [], onSelect }) => {
  return (
    <Row>
      <Col xs={12} sm={3} md={3} className="sidebar no-padding">
        {files && files.length ? files.map(item => {
          return <ListItem name={item.name} author={item.author} key={item.id} active={item.id === file.id} onClick={() => onSelect(item)}/>
        }) : <div className="no-data-text"><h3>No Files Found!</h3></div>}
      </Col>
      <Col xs={12} sm={9} md={9} className="file-preview">
        {file && file.id ? file.type === 'PDF' ? <iframe style={iframeStyle} src={file.link}></iframe> : <img src={file.link} /> : <div className="no-data-text"><h3>Upload, Select File to View.</h3></div>}
      </Col>
    </Row>
  );
}
export default Content;