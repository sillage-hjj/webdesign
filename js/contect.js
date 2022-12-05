getRandomId = function () {
    return 'id'.concat(Math.floor((Math.random(10) * 10000000000000000)).toString());
};
getCurrentTime = function () {
    return new Date().toLocaleString();
};

var curReplyTargetTag = null;

var curArr = null;

var parentId = null;

var commentList = [];

var commentTree = {
    id:'',
    commentator: '',
    author: '',
    comment: '',
    time: '',
    reply: []
};

window.onload = function (ev) {
    // the function will be called at first while page loads
    initTreeComment();
};

initTreeComment = function () {
    var commentView = document.getElementById('comment_view');
    if (commentList.length === 0) {
        noComment(commentView)
    } else {
        haveComment(commentView, commentList)
    }
};

noComment = function (commentView) {
    commentView.style.textAlign = 'center';
    commentView.innerText = 'No comments'
};

commentFocus = function (ev) {
    ev.stopPropagation();
    document.getElementById('comment_space').focus();
    renderReplyBar();
};

renderReplyBar = function () {

    var commentSpace = document.getElementById('comment_space');
    var textareaLen = commentSpace.value.length;

    var htmlText = '';
    htmlText +=
        '<div>' +
        '  <span style="color: lightgray; margin-right: 20px">' +
        '    还可以输入' +
        '    <span id="char_count">'+ (1000 - textareaLen) +'</span>' +
        '    个字符' +
        '  </span>';

    if(commentSpace.placeholder.charAt(0) === '回' || textareaLen > 0) {
        htmlText += '<button id="cancel_reply" ' +
            '        onclick="cancelReply(event, this)"' +
            '        style="margin-right: 20px;">'
    } else {
        htmlText += '<button id="cancel_reply"' +
            '        onclick="cancelReply(event, this)"' +
            '        style="margin-right: 20px;display: none;">'
    }

    htmlText += '取消回复</button>' +
        '<button id="submit_button">提交</button>' +
        '</div>';

    document.getElementById('button_submit_div').innerHTML = htmlText;

    submitComment(commentSpace);
};

submitTree = function (submitButton, textareaEle) {

    submitButton.onclick = function (ev) {
        ev.stopPropagation();
        console.log(parentId);
        var text = textareaEle.value;
        if (text.length > 0){
            var plcHolder = textareaEle.placeholder;
            if(plcHolder.charAt(0) === '回') {
                plcHolder = plcHolder.substring(plcHolder.indexOf(' '), plcHolder.length)
            } else {
                curArr = commentList;
                plcHolder = "anonymous";
            }
            var commentator = document.getElementById('commentator').value;

            if(commentator.trim().length === 0) {
                alarmIfEmpSpace();
            } else {
                commentTree = {
                    id: getRandomId(),
                    commentator: commentator,
                    author: plcHolder,
                    comment: text,
                    time: getCurrentTime(),
                    reply: []
                };
                curArr.push(commentTree);
                initTreeComment();
            }
        } else {
            alarmIfEmpSpace();
        }
    }

};

alarmIfEmpSpace = function () {
    alert("Nothing worse than itself!")
};

submitComment = function (textarea) {
    var submitButton = document.getElementById('submit_button');
    submitTree(submitButton, textarea);
};

cancelReply = function (ev, th) {
    ev.stopPropagation();
    th.style.display = 'none';
    parentId = null;
    document.getElementById('comment_space').value = "";
    countTextareaLength();
    fillPlaceholderOfCommentSpace("请输入您要评论的内容");

};

countTextareaLength = function () {
    var space = document.getElementById('comment_space');
    document.getElementById('char_count').innerText = 1000 - space.value.length;
};

readKey = function (ev) {
    var space = document.getElementById('comment_space');
    document.getElementById('char_count').innerText = 1000 - space.value.length;
    if(space.value.length > 0) {
        handleCancelButton(space, 'inline-block')
    } else {
        handleCancelButton(space, 'none')
    }
};

handleCancelButton = function (textArea, status) {
    document.getElementById('cancel_reply').style.display = status;
};

commentBlur = function () {
    document.getElementById('button_submit_div').innerHTML = ''
};

haveComment = function (commentView, arr) {

    commentView.style.textAlign = 'left';

    var htmlText = '';
    arr.forEach(function (value) {
        htmlText +=
            '<ul id="'+ value.id +'" class="comment_ulist" style="">' +
            '  <li class="comment_line_box" id="'+ value.id.substring(0, 4) +'" style="border-radius: 1rem;">' +
            '    <a class="cmt_img">' +
            '      <img class="avatar" src="images/touxiang.jpeg" width="30px" style="border-radius: 100%">' +
            '    </a>' +
            '    <div class="right_box">' +
            '      <a class="commentator">'+ value.commentator +'</a>';

        if (value.author !== 'anonymous') {
            htmlText +=
                '<span style="margin: 0 10px;color: lightgray">回复</span>' +
                '<a class="author">'+ value.author +'</a>';
        }

        htmlText += '<span class="time">'+ value.time +'</span>';

        if (value.comment.length > 10){
            htmlText += ' <span style="display: block; margin-top: 8px" class="comment">'+ value.comment.substring(0, 10) +'</span>';
        } else {
            htmlText += ' <span class="comment">'+ value.comment.substring(0, 10) +'</span>';
        }

        htmlText +=
            '  </div>' +
            '  <span style="float: right;" id="'+ value.id.substring(0, 7) +'">' +
            '<a id="'+ value.id.substring(0, 5) +'"' +
            '  style="border: none;display: none;margin-right: 10px;">' +
            '回复</a>';

        if(value.reply.length > 0) {
            htmlText += '<a id="'+ value.id.substring(0, 6) +'"' +
                '         style="border: none;">' +
                '  查看回复('+ value.reply.length +')</a></span></li></ul>'
        } else {
            htmlText += '</span></li></ul>';
        }

    });

    commentView.innerHTML = htmlText;

    showButton(arr, 1)
};

showButton = function (arr, sign) {

    arr.forEach(function (value) {

        var parent = document.getElementById(value.id);
        var broEle = document.getElementById(value.id.substring(0, 4));
        var checkReply = document.getElementById(value.id.substring(0, 6));
        var reply = document.getElementById(value.id.substring(0, 5));

        broEle.onmouseover = function (ev) {
            reply.style.display = 'inline-block';
        };

        reply.onclick = function (ev) {
            ev.stopPropagation();
            renderReplyBar();
            curReplyTargetTag = parent;
            if(sign === 1) {
                parentId = value.id
                curArr = value.reply;
            } else {
                curArr = arr;
            }
            document.getElementById('cancel_reply').style.display = 'inline-block';
            var str = "回复 ".concat(value.commentator);
            fillPlaceholderOfCommentSpace(str)
        };

        if (value.reply.length > 0) {

            checkReply.onclick = function (ev) {
                ev.stopPropagation();
                if(checkReply.innerText.trim().charAt(0) === '查'){
                    ifHaveReply(parent, value.reply, broEle);
                    checkReply.innerText = "收起回复";
                } else {
                    toggleBackReplies(parent);
                    checkReply.innerText = "查看回复("+ value.reply.length +")";
                }
            };
        }

        broEle.onmouseleave = function (ev) {
            reply.style.display = 'none'
        };
    });
};

toggleBackReplies = function (parentTag) {
    var nodes = parentTag.childNodes;
    var len = nodes.length;
    parentTag.removeChild(nodes[len - 1]);
};

ifHaveReply = function (parentTag, arr, broEle) {

    var li = document.createElement("li");
    li.className = "reply_list";
    li.style.marginLeft = '42px';
    li.style.borderLeft = 'solid 5px lightgray';

    var htmlText = '<ul class="comment_ulist">';

    arr.forEach(function (value) {
        htmlText +=
            '<li class="comment_line_box" id="'+ value.id.substring(0, 4) +'"><a class="cmt_img" style="margin-left: 10px">' +
            '  <img class="avatar" src="images/touxiang.jpeg" width="30px" style="border-radius: 100%">' +
            '</a>' +
            '<div class="right_box">' +
            '  <a class="commentator">'+ value.commentator +'</a>' +
            '  <span style="margin: 0 10px;color: lightgray">回复</span>' +
            '  <a class="author">'+ value.author +'</a>' +
            '  <span class="time">'+ value.time +'</span>';

        if (value.comment.length > 10){
            htmlText += ' <span style="display: block; margin-top: 8px" class="comment">'+ value.comment.substring(0, 10) +'</span>';
        } else {
            htmlText += ' <span class="comment">'+ value.comment.substring(0, 10) +'</span>';
        }

        htmlText +=
            '</div>' +
            '<span style="float: right;" id="'+ value.id.substring(0, 7) +'">' +
            '<a id="'+ value.id.substring(0, 5) +'"' +
            '        style="display: none;border: none;margin-right: 10px;border-radius: 1rem">' +
            '回复</a>';


        if(value.reply.length > 0) {
            console.log(value.reply.length)
            htmlText += '<a id="'+ value.id.substring(0, 6) +'"' +
                '         style="border: none;">' +
                '查看回复('+ value.reply.length +')</a></span></li>'
        } else {
            htmlText += '</span></li>';
        }
    });

    htmlText += '</ul>';
    li.innerHTML = htmlText;
    parentTag.insertBefore(li, broEle.nextSibling);
    showButton(arr, 2)
};

fillPlaceholderOfCommentSpace = function (str) {
    document.getElementById('comment_space').placeholder = str
};

mainCLick = function (ev) {
    document.getElementById('button_submit_div').innerHTML = '';
};
