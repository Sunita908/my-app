import React from 'react'

export default function Alert(props) {
  const capitalize =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
   props.alertTitle && <div className={`alert alert-${props.alertTitle.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alertTitle.type)}</strong> : {props.alertTitle.msg}
</div>
  )
}
