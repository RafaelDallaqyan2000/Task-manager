import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const ViewIcon = (props: any) => (
  <Svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -4 20 20"
    {...props}>
    <Path
      fill="#007ea8"
      fillRule="evenodd"
      d="M12 6c0 1.148-.895 2.077-2 2.077S8 7.147 8 6c0-1.148.895-2.077 2-2.077s2 .93 2 2.077m-2 3.923C7.011 9.924 4.195 8.447 2.399 6 4.195 3.554 7.011 2.076 10 2.076s5.805 1.478 7.601 3.925C15.805 8.447 12.989 9.924 10 9.924M10 0C5.724 0 1.999 2.417 0 6c1.999 3.584 5.724 6 10 6s8.001-2.416 10-6c-1.999-3.583-5.724-6-10-6"
    />
  </Svg>
);
export default ViewIcon;
