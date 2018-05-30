import React from 'react';
import cx  from 'classnames';

const Message = (props) => {
    const {
        type = "error",
        closeMessage,
        content = "",
    } = props;
    const clazz = cx('message', type)
    return (
        <div className={clazz}>
            <span>{content}</span>
            <i className="close" onClick={closeMessage}>X</i>
        </div>
    )
}

export default Message;
