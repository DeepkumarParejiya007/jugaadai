CREATE OR REPLACE PACKAGE pkg_ai_tools IS
    g_tool_count NUMBER; 
    g_avg_rating NUMBER;
    FUNCTION get_tool_count RETURN NUMBER;
    FUNCTION get_average_rating(p_tool_id NUMBER) RETURN NUMBER;
END pkg_ai_tools;


CREATE OR REPLACE PACKAGE BODY pkg_ai_tools IS
    FUNCTION get_tool_count RETURN NUMBER IS
    BEGIN
        SELECT COUNT(*) INTO g_tool_count FROM ai_tools;
        RETURN g_tool_count;
    END get_tool_count;

    FUNCTION get_average_rating(p_tool_id NUMBER) RETURN NUMBER IS
        
    BEGIN
        SELECT AVG(rating) INTO g_avg_rating FROM reviews WHERE tool_id = p_tool_id;
        RETURN g_avg_rating;
    END get_average_rating;
END pkg_ai_tools;