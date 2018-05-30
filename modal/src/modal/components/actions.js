import React from 'react';

const Actions = (props) => {
    const {
        ok,
        close,
    } = props;
    return (
        <div className="actions">
            <button type="button" className="btn ok" onClick={ok} >{ I18n.t('index.btn_ok') }</button>
            <button type="button" className="btn cancel" onClick={close}>{ I18n.t('index.btn_cancel') }</button>
        </div>
    )
};

export default Actions;
