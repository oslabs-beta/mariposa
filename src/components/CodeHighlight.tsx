import React from "react";
import hljs from "highlight.js";

interface HighlighterProps {
  content: string;
  language?: string;
}

export default function Highlighter({
  content,
  language,
}: HighlighterProps): JSX.Element {
  const highlighted = language
    ? hljs.highlight(language, content)
    : hljs.highlightAuto(content);

  return (
    <pre className="hljs">
      <code dangerouslySetInnerHTML={{ __html: highlighted.value }} />
    </pre>
  );
}