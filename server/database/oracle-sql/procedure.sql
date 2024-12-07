CREATE OR REPLACE PROCEDURE add_review (
    p_tool_id NUMBER,
    p_user_id NUMBER,
    p_rating NUMBER,
    p_comment CLOB
) IS
BEGIN
    INSERT INTO reviews (tool_id, user_id, rating, comments)
    VALUES (p_tool_id, p_user_id, p_rating, p_comment);
    COMMIT;
END add_review;


CREATE OR REPLACE PROCEDURE save_tool (
    p_user_id NUMBER,
    p_tool_id NUMBER
) IS
BEGIN
    INSERT INTO user_saved_tools (user_id, tool_id) 
    VALUES (p_user_id, p_tool_id);
    COMMIT;
END save_tool;