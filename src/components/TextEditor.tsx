import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Xử lý định dạng văn bản (Bold, Italic, Underline)
  const handleFormat = (style: any) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  return (
    <div
      className="w-full h-[194px] border rounded-2xl p-4 shadow-primary bg-white"
      style={{ border: "1px solid rgba(86, 44, 44, 0.3)" }}
    >
      {/* Toolbar */}
      <div className="flex space-x-2 mb-2 border-b pb-2">
        <button
          onClick={() => handleFormat("BOLD")}
          className="px-3 py-1 border rounded text-sm font-semibold hover:bg-gray-200"
        >
          B
        </button>
        <button
          onClick={() => handleFormat("ITALIC")}
          className="px-3 py-1 border rounded text-sm font-semibold hover:bg-gray-200"
        >
          I
        </button>
        <button
          onClick={() => handleFormat("UNDERLINE")}
          className="px-3 py-1 border rounded text-sm font-semibold hover:bg-gray-200"
        >
          U
        </button>
      </div>

      {/* Editor */}
      <div className="p-2 min-h-[120px] border rounded-md bg-gray-50">
        <Editor editorState={editorState} onChange={setEditorState} />
      </div>
    </div>
  );
};

export default TextEditor;
