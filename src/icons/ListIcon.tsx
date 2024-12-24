import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ListIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 6h13M8 12h13M8 18h13M3 6.5h1v-1H3v1Zm0 6h1v-1H3v1Zm0 6h1v-1H3v1Z"
    />
  </Svg>
);
export default ListIcon;
