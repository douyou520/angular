'use strict';"use strict";
var ParseLocation = (function () {
    function ParseLocation(file, offset, line, col) {
        this.file = file;
        this.offset = offset;
        this.line = line;
        this.col = col;
    }
    ParseLocation.prototype.toString = function () { return this.file.url + "@" + this.line + ":" + this.col; };
    return ParseLocation;
}());
exports.ParseLocation = ParseLocation;
var ParseSourceFile = (function () {
    function ParseSourceFile(content, url) {
        this.content = content;
        this.url = url;
    }
    return ParseSourceFile;
}());
exports.ParseSourceFile = ParseSourceFile;
var ParseSourceSpan = (function () {
    function ParseSourceSpan(start, end) {
        this.start = start;
        this.end = end;
    }
    ParseSourceSpan.prototype.toString = function () {
        return this.start.file.content.substring(this.start.offset, this.end.offset);
    };
    return ParseSourceSpan;
}());
exports.ParseSourceSpan = ParseSourceSpan;
(function (ParseErrorLevel) {
    ParseErrorLevel[ParseErrorLevel["WARNING"] = 0] = "WARNING";
    ParseErrorLevel[ParseErrorLevel["FATAL"] = 1] = "FATAL";
})(exports.ParseErrorLevel || (exports.ParseErrorLevel = {}));
var ParseErrorLevel = exports.ParseErrorLevel;
var ParseError = (function () {
    function ParseError(span, msg, level) {
        if (level === void 0) { level = ParseErrorLevel.FATAL; }
        this.span = span;
        this.msg = msg;
        this.level = level;
    }
    ParseError.prototype.toString = function () {
        var source = this.span.start.file.content;
        var ctxStart = this.span.start.offset;
        if (ctxStart > source.length - 1) {
            ctxStart = source.length - 1;
        }
        var ctxEnd = ctxStart;
        var ctxLen = 0;
        var ctxLines = 0;
        while (ctxLen < 100 && ctxStart > 0) {
            ctxStart--;
            ctxLen++;
            if (source[ctxStart] == "\n") {
                if (++ctxLines == 3) {
                    break;
                }
            }
        }
        ctxLen = 0;
        ctxLines = 0;
        while (ctxLen < 100 && ctxEnd < source.length - 1) {
            ctxEnd++;
            ctxLen++;
            if (source[ctxEnd] == "\n") {
                if (++ctxLines == 3) {
                    break;
                }
            }
        }
        var context = source.substring(ctxStart, this.span.start.offset) + '[ERROR ->]' +
            source.substring(this.span.start.offset, ctxEnd + 1);
        return this.msg + " (\"" + context + "\"): " + this.span.start;
    };
    return ParseError;
}());
exports.ParseError = ParseError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VfdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtUWdFZ1dYbm0udG1wL2FuZ3VsYXIyL3NyYy9jb21waWxlci9wYXJzZV91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUNFLHVCQUFtQixJQUFxQixFQUFTLE1BQWMsRUFBUyxJQUFZLEVBQ2pFLEdBQVc7UUFEWCxTQUFJLEdBQUosSUFBSSxDQUFpQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ2pFLFFBQUcsR0FBSCxHQUFHLENBQVE7SUFBRyxDQUFDO0lBRWxDLGdDQUFRLEdBQVIsY0FBcUIsTUFBTSxDQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFJLElBQUksQ0FBQyxJQUFJLFNBQUksSUFBSSxDQUFDLEdBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUUsb0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLHFCQUFhLGdCQUt6QixDQUFBO0FBRUQ7SUFDRSx5QkFBbUIsT0FBZSxFQUFTLEdBQVc7UUFBbkMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQVE7SUFBRyxDQUFDO0lBQzVELHNCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSx1QkFBZSxrQkFFM0IsQ0FBQTtBQUVEO0lBQ0UseUJBQW1CLEtBQW9CLEVBQVMsR0FBa0I7UUFBL0MsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQWU7SUFBRyxDQUFDO0lBRXRFLGtDQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksdUJBQWUsa0JBTTNCLENBQUE7QUFFRCxXQUFZLGVBQWU7SUFDekIsMkRBQU8sQ0FBQTtJQUNQLHVEQUFLLENBQUE7QUFDUCxDQUFDLEVBSFcsdUJBQWUsS0FBZix1QkFBZSxRQUcxQjtBQUhELElBQVksZUFBZSxHQUFmLHVCQUdYLENBQUE7QUFFRDtJQUNFLG9CQUFtQixJQUFxQixFQUFTLEdBQVcsRUFDekMsS0FBOEM7UUFBckQscUJBQXFELEdBQXJELFFBQWdDLGVBQWUsQ0FBQyxLQUFLO1FBRDlDLFNBQUksR0FBSixJQUFJLENBQWlCO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUN6QyxVQUFLLEdBQUwsS0FBSyxDQUF5QztJQUFHLENBQUM7SUFFckUsNkJBQVEsR0FBUjtRQUNFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFDRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDdEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLE9BQU8sTUFBTSxHQUFHLEdBQUcsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDcEMsUUFBUSxFQUFFLENBQUM7WUFDWCxNQUFNLEVBQUUsQ0FBQztZQUNULEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixLQUFLLENBQUM7Z0JBQ1IsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBRUQsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixPQUFPLE1BQU0sR0FBRyxHQUFHLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDbEQsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsQ0FBQztZQUNULEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixLQUFLLENBQUM7Z0JBQ1IsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsWUFBWTtZQUNqRSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFbkUsTUFBTSxDQUFJLElBQUksQ0FBQyxHQUFHLFlBQU0sT0FBTyxhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBTyxDQUFDO0lBQzFELENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUF6Q3FCLGtCQUFVLGFBeUMvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhcnNlTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsZTogUGFyc2VTb3VyY2VGaWxlLCBwdWJsaWMgb2Zmc2V0OiBudW1iZXIsIHB1YmxpYyBsaW5lOiBudW1iZXIsXG4gICAgICAgICAgICAgIHB1YmxpYyBjb2w6IG51bWJlcikge31cblxuICB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gYCR7dGhpcy5maWxlLnVybH1AJHt0aGlzLmxpbmV9OiR7dGhpcy5jb2x9YDsgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VTb3VyY2VGaWxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnRlbnQ6IHN0cmluZywgcHVibGljIHVybDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VTb3VyY2VTcGFuIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0YXJ0OiBQYXJzZUxvY2F0aW9uLCBwdWJsaWMgZW5kOiBQYXJzZUxvY2F0aW9uKSB7fVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnQuZmlsZS5jb250ZW50LnN1YnN0cmluZyh0aGlzLnN0YXJ0Lm9mZnNldCwgdGhpcy5lbmQub2Zmc2V0KTtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBQYXJzZUVycm9yTGV2ZWwge1xuICBXQVJOSU5HLFxuICBGQVRBTFxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBtc2c6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHVibGljIGxldmVsOiBQYXJzZUVycm9yTGV2ZWwgPSBQYXJzZUVycm9yTGV2ZWwuRkFUQUwpIHt9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5zcGFuLnN0YXJ0LmZpbGUuY29udGVudDtcbiAgICB2YXIgY3R4U3RhcnQgPSB0aGlzLnNwYW4uc3RhcnQub2Zmc2V0O1xuICAgIGlmIChjdHhTdGFydCA+IHNvdXJjZS5sZW5ndGggLSAxKSB7XG4gICAgICBjdHhTdGFydCA9IHNvdXJjZS5sZW5ndGggLSAxO1xuICAgIH1cbiAgICB2YXIgY3R4RW5kID0gY3R4U3RhcnQ7XG4gICAgdmFyIGN0eExlbiA9IDA7XG4gICAgdmFyIGN0eExpbmVzID0gMDtcblxuICAgIHdoaWxlIChjdHhMZW4gPCAxMDAgJiYgY3R4U3RhcnQgPiAwKSB7XG4gICAgICBjdHhTdGFydC0tO1xuICAgICAgY3R4TGVuKys7XG4gICAgICBpZiAoc291cmNlW2N0eFN0YXJ0XSA9PSBcIlxcblwiKSB7XG4gICAgICAgIGlmICgrK2N0eExpbmVzID09IDMpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGN0eExlbiA9IDA7XG4gICAgY3R4TGluZXMgPSAwO1xuICAgIHdoaWxlIChjdHhMZW4gPCAxMDAgJiYgY3R4RW5kIDwgc291cmNlLmxlbmd0aCAtIDEpIHtcbiAgICAgIGN0eEVuZCsrO1xuICAgICAgY3R4TGVuKys7XG4gICAgICBpZiAoc291cmNlW2N0eEVuZF0gPT0gXCJcXG5cIikge1xuICAgICAgICBpZiAoKytjdHhMaW5lcyA9PSAzKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY29udGV4dCA9IHNvdXJjZS5zdWJzdHJpbmcoY3R4U3RhcnQsIHRoaXMuc3Bhbi5zdGFydC5vZmZzZXQpICsgJ1tFUlJPUiAtPl0nICtcbiAgICAgICAgICAgICAgICAgIHNvdXJjZS5zdWJzdHJpbmcodGhpcy5zcGFuLnN0YXJ0Lm9mZnNldCwgY3R4RW5kICsgMSk7XG5cbiAgICByZXR1cm4gYCR7dGhpcy5tc2d9IChcIiR7Y29udGV4dH1cIik6ICR7dGhpcy5zcGFuLnN0YXJ0fWA7XG4gIH1cbn1cbiJdfQ==