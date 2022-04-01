import React from 'react'

const ChildSeven = ({name,memoizedFullname,MemoizedsayHello}) => {
    console.log("child rendered");
  return (
    <div>
        {name} {MemoizedsayHello()}
    </div>
  )
}


const MemoizedChildSeven = React.memo(ChildSeven);
export default MemoizedChildSeven;