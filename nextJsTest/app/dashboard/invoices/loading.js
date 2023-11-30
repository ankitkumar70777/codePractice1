import React from "react";
import SkeletonN from "../../components/sceletons";

const TableDataSceleton = () => {
  return (
    <tbody>
      {[1,2,3,4,5,6,7,8,9,10].map((a, i) => (
        <tr key={i}>
          <td>
            <SkeletonN />
          </td>
          <td>
            <SkeletonN />
          </td>
          <td>
            <SkeletonN />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableDataSceleton;
