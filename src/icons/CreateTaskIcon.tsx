import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const CreateTaskIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 32 32"
    {...props}>
    <Path d="M27.2 8.22h-3.42v-2.8A3.42 3.42 0 0 0 20.36 2H5.42A3.42 3.42 0 0 0 2 5.42v14.94a3.42 3.42 0 0 0 3.42 3.42h2.8v3.42A2.81 2.81 0 0 0 11 30h16.2a2.81 2.81 0 0 0 2.8-2.8V11a2.81 2.81 0 0 0-2.8-2.78ZM5.42 21.91a1.55 1.55 0 0 1-1.55-1.55V5.42a1.54 1.54 0 0 1 1.55-1.55h14.94a1.55 1.55 0 0 1 1.55 1.55v2.8H11A2.81 2.81 0 0 0 8.22 11v10.91Zm22.71 5.29a.93.93 0 0 1-.93.93H11a.93.93 0 0 1-.93-.93V11a.93.93 0 0 1 .93-.93h16.2a.93.93 0 0 1 .93.93Z" />
    <Path d="M24.09 18.18H20v-4a.93.93 0 1 0-1.86 0v4h-4a.93.93 0 0 0 0 1.86h4v4.05a.93.93 0 1 0 1.86 0V20h4.05a.93.93 0 1 0 0-1.86Z" />
  </Svg>
);
export default CreateTaskIcon;
