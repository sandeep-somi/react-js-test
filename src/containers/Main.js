import React, { Component } from 'react';
import moment from 'moment';
import { Header, Content } from '../components';
import { Container } from 'react-bootstrap';
import { getType, getFileName, isValid } from '../utils';

class Main extends Component {
  state = {
    files: [],
    file: {}
  }

  onUpload = ({ target: { files, value } }) => {
    let newFiles = [...this.state.files]
    const [file] = files;

    if (!isValid(file)) {
      alert("Invalid file type")
      return
    }

    let type = getType(file.type || '')
    let name = getFileName(file.name || '', file.type || '')

    let fileToLoad = {
      id: moment().valueOf(),
      name,
      type,
      link: URL.createObjectURL(file),
      author: 'Me, Dustin'
    }

    newFiles.push(fileToLoad);
    this.setState({ files: newFiles, file: fileToLoad });
  }

  onSelect = (file) => {
    this.setState({ file });
  }


  render() {
    const { file, files } = this.state;
    return (
      <Container fluid>
        <Header file={file} onUpload={this.onUpload} />
        <Content file={file} files={files} onSelect={this.onSelect} />
      </Container>
    );
  }
}

export default Main;