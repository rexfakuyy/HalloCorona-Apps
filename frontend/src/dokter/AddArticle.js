import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="container">
        <div className="card">
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
          <textarea
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />
        </div>
      </div>
    );
  }
}
