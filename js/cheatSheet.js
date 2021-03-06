angular.module('Befunge')
    .value('cheatSheetData', [
        ["0 – 9","Push corresponding number onto the stack"],
        ["+","Addition: Pop a and b, then push a+b"],
        ["-","Subtraction: Pop a and b, then push b-a"],
        ["*","Multiplication: Pop a and b, then push a*b"],
        ["/","Integer division: Pop a and b, then push b/a, rounded down. According to the specifications, if a is zero, ask the user what result they want."],
        ["%","Modulo: Pop a and b, then push the remainder of the integer division of b/a. According to the specifications, if a is zero, ask the user what result they want."],
        ["!","Logical NOT: Pop a value. If the value is zero, push 1; otherwise, push zero."],
        ["`","Greater than: Pop a and b, then push 1 if b>a, otherwise zero."],
        [">","PC direction right"],
        ["<","PC direction left"],
        ["^","PC direction up"],
        ["v","PC direction down"],
        ["?","Random PC direction"],
        ["_","Horizontal IF: pop a value; move right if value=0, left otherwise"],
        ["|","Vertical IF: pop a value; move down if value=0, up otherwise"],
        ["\"","Toggle stringmode (push each character's ASCII value all the way up to the next \")"],
        [":","Duplicate top stack value"],
        ["\\","Swap top stack values"],
        ["$","Pop (remove) top stack value and discard"],
        [".","Output top of stack as integer"],
        [",","Output top of stack as ASCII character"],
        ["#","Bridge: jump over next command"],
        ["g","A \"get\" call (a way to retrieve data in storage). Pop y and x, then push ASCII value of the character at that position in the program"],
        ["p","A \"put\" call (a way to store a value for later use). Pop y, x and v, then change the character at the position (x,y) in the program to the character with ASCII value v"],
        ["&","Get integer from user and push it"],
        ["~","Get character from user and push it"],
        ["@","End program"]
    ])
    .directive('cheatSheet', function (cheatSheetData) {
        return {
            templateUrl: "views/cheatSheet.html",
            replace: false,
            scope: true,
            link: function (scope) {
                scope.cheatSheet = cheatSheetData;
            }
        }
    });