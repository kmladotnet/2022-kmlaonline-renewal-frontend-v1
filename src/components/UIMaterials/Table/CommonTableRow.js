import React from 'react';

const CommonTableRow = ({ children }, props) => {
  
  return (
    <tr className="common-table-row">
      {
        children
      }
    </tr>
  )
}

export default CommonTableRow;