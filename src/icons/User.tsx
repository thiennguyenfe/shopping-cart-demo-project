import * as React from "react";
import { IIconSVGProps } from "../../typings/Icon";

export interface IAppProps {}

const UserIcon: React.FC<IIconSVGProps> = (props: IAppProps) => {
  return (
    <div>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.9863 14.0671C7.44059 14.0671 4.41376 14.6034 4.41376 16.7502C4.41376 18.8971 7.42134 19.4526 10.9863 19.4526C14.531 19.4526 17.5588 18.9154 17.5588 16.7695C17.5588 14.6236 14.5503 14.0671 10.9863 14.0671V14.0671Z"
          stroke="#272343"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.9863 11.0056C11.8195 11.0056 12.6341 10.7585 13.3269 10.2956C14.0197 9.83264 14.5597 9.17466 14.8786 8.40484C15.1975 7.63501 15.2809 6.78792 15.1183 5.97068C14.9558 5.15343 14.5545 4.40275 13.9653 3.81355C13.3761 3.22435 12.6254 2.8231 11.8082 2.66054C10.991 2.49798 10.1439 2.58142 9.37403 2.90029C8.60421 3.21916 7.94623 3.75915 7.4833 4.45197C7.02037 5.1448 6.77328 5.95934 6.77328 6.79259C6.76938 7.9059 7.20785 8.97518 7.99224 9.76524C8.77663 10.5553 9.84272 11.0015 10.956 11.0056H10.9863Z"
          stroke="#272343"
          stroke-width="1.429"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default UserIcon;