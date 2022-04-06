import React from 'react';
import classes from './MyModal.module.css';

const MyModal = ({visible, setVisible, ...props}) => {

  const rootClasses = [classes.modal];
  if(visible) {
    rootClasses.push(classes.active)
  }
  
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.content} onClick={e => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
};

export default MyModal;