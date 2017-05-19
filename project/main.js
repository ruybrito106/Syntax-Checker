var reserved = ["EXISTS", "IN", "ALL", "ALTER", "AND", "ARRAY", "AS", "AUTHORIZATION", "BETWEEN", "BIGINT", "BINARY", "BOOLEAN", "BOTH", "BY", "CASE", "CAST", "CHAR", "COLUMN", "CONF", "CREATE", "CROSS", "CUBE", "CURRENT", "CURRENT_DATE", "CURRENT_TIMESTAMP", "CURSOR", "DATABASE", "DATE", "DECIMAL", "DELETE", "DESCRIBE", "DISTINCT", "DOUBLE", "DROP", "ELSE", "END", "EXCHANGE", "EXTENDED", "EXTERNAL", "FALSE", "FETCH", "FLOAT", "FOLLOWING", "FOR", "FROM", "FULL", "FUNCTION", "GRANT", "GROUP", "GROUPING", "HAVING", "IF", "IMPORT", "INNER", "INSERT", "INT", "INTERSECT", "INTERVAL", "INTO", "IS", "JOIN", "LATERAL", "LEFT", "LESS", "LIKE", "LOCAL", "MACRO", "MAP", "MORE", "NONE", "NOT", "NULL", "OF", "ON", "OR", "ORDER", "OUT", "OUTER", "OVER", "PARTIALSCAN", "PARTITION", "PERCENT", "PRECEDING", "PRESERVE", "PROCEDURE", "RANGE", "READS", "REDUCE", "REVOKE", "RIGHT", "ROLLUP", "ROW", "ROWS", "SELECT", "SET", "SMALLINT", "TABLE", "TABLESAMPLE", "THEN", "TIMESTAMP", "TO", "TRANSFORM", "TRIGGER", "TRUE", "TRUNCATE", "UNBOUNDED", "UNION", "UNIQUEJOIN", "UPDATE", "USER", "USING", "UTC_TMESTAMP", "VALUES", "VARCHAR", "WHEN", "WHERE", "WINDOW", "WITH", "COMMIT", "ONLY", "REGEXP", "RLIKE", "ROLLBACK", "START", "CACHE", "CONSTRAINT", "FOREIGN", "PRIMARY", "REFERENCES", "DAYOFWEEK", "EXTRACT", "FLOOR", "INTEGER", "PRECISION", "VIEWS"];
var textarea = $(".smartText");
var text_area = document.getElementsByClassName('smartText')[0];

function setBack(element) {
    var range, selection;
    range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);
    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

var highlight = function highlight() {
    var str = textarea.text();
    var regex;

    for (x in reserved) {
        regex = new RegExp("(\\s|^\)(" + reserved[x] + ")(\\s|$\)", 'ig');
        str = str.replace(regex, function (word) {
            return "<span class='exists'>" + word + "</span>";
        });
        textarea.html(str);
    }

    setBack(text_area);
};

var timer;

textarea.keyup(function (e) {
  clearTimeout(timer);
  if ($(this).text()) {
      timer = setTimeout(highlight, 500);
  }
});