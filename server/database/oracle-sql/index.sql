CREATE INDEX idx_tool_name ON ai_tools(tool_name);
CREATE INDEX idx_tag_name ON tool_tags(tag_name);
CREATE INDEX tool_desc_idx ON AI_TOOLS (description) INDEXTYPE IS CTXSYS.CONTEXT;