import React, { Component } from 'react';
import { CodePane } from 'spectacle';

class FilePane extends Component {
    constructor(props, context) {
        super(props, context);

        const { files } = props;

        if (!files || files.length === 0) {
            throw new Error('props.files must have file defined.');
        }
        this.state = {
            selectedFileName: files[0].filename
        };

        this.getSelectedFile = this.getSelectedFile.bind(this);
    }
    getSelectedFile() {
        const { selectedFileName } = this.state;
        const { files } = this.props;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.filename === selectedFileName) {
                return file;
            }
        }

        return '';
    }
    render() {
        const { selectedFileName } = this.state;
        const { files } = this.props;
        const selectedFile = this.getSelectedFile();

        return (
            <div>
                <div style={{ textAlign: 'left', marginBottom: 5 }}>
                    {files.map(({ filename }) => {
                        const style = {
                            marginRight: 10,
                            textDecoration: filename === selectedFileName ? 'underline' : 'none'
                        };
                        return (
                            <span
                                style={style}
                                onClick={() => {
                                    this.setState({
                                        selectedFileName: filename
                                    });
                                }}
                            >
                                {filename}
                            </span>
                        );
                    })}
                </div>
                <CodePane source={selectedFile.source} lang={selectedFile.lang} />
            </div>
        );
    }
}

export default FilePane;
