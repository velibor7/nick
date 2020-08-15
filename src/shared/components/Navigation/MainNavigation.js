import React from "react";
import { useFirebaseApp, useUser } from "reactfire";
import Button from "../FormElements/Button";
import "firebase/auth";
import "./MainNavigation.css";

const MainNavigation = () => {
  const firebase = useFirebaseApp();
  const user = useUser();

  const logoutHandler = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="main-navigation">
      <hr width="30%" />
      <div>
        <svg
          className="logo-svg"
          width="90"
          height="auto"
          viewBox="0 0 316 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M78.2329 19.459H80.7773V0.263672H78.2593V15.1216L68.5693 0.263672H66.0249V19.459H68.5693V4.66699L78.2329 19.459ZM127.308 19.459H129.839V0.263672H127.308V19.459ZM188.195 18.0747C189.46 16.9673 190.212 15.3984 190.449 13.3682H187.905C187.658 14.9502 187.158 16.062 186.402 16.7036C185.655 17.3364 184.578 17.6528 183.172 17.6528C181.607 17.6528 180.39 17.0376 179.52 15.8071C178.65 14.5767 178.215 12.9199 178.215 10.8369V8.97803C178.215 6.77197 178.672 5.07129 179.586 3.87598C180.509 2.68066 181.779 2.08301 183.396 2.08301C184.714 2.08301 185.738 2.42578 186.468 3.11133C187.206 3.79688 187.685 4.9043 187.905 6.43359H190.449C190.247 4.4209 189.531 2.84766 188.3 1.71387C187.07 0.571289 185.435 0 183.396 0C181.858 0 180.504 0.364746 179.335 1.09424C178.166 1.81494 177.261 2.85205 176.619 4.20557C175.987 5.55908 175.67 7.12793 175.67 8.91211V10.7578C175.67 13.4824 176.351 15.6577 177.714 17.2837C179.085 18.9097 180.904 19.7227 183.172 19.7227C185.263 19.7227 186.938 19.1733 188.195 18.0747ZM238.298 12.9727L240.644 10.5337L247.447 19.459H250.479L242.332 8.74072L249.886 0.263672H246.827L238.298 9.75586V0.263672H235.766V19.459H238.298V12.9727ZM26.123 60.6992H9.42383V89.459H0V18.3652H23.5352C31.543 18.3652 37.6953 20.1881 41.9922 23.834C46.3216 27.4798 48.4863 32.7858 48.4863 39.752C48.4863 44.179 47.2819 48.0365 44.873 51.3242C42.4967 54.612 39.1764 57.0697 34.9121 58.6973L51.6113 88.873V89.459H41.5527L26.123 60.6992ZM9.42383 53.0332H23.8281C28.4831 53.0332 32.1777 51.8288 34.9121 49.4199C37.679 47.0111 39.0625 43.7884 39.0625 39.752C39.0625 35.3574 37.7441 31.9883 35.1074 29.6445C32.5033 27.3008 28.7272 26.1126 23.7793 26.0801H9.42383V53.0332ZM87.8594 69.7422H69.373V84.8594H90.8477V89.459H63.748V46.8027H90.5547V51.4316H69.373V65.1426H87.8594V69.7422ZM124.121 46.8027H129.775V77.0078C129.775 81.0898 128.545 84.2832 126.084 86.5879C123.642 88.8926 120.38 90.0449 116.298 90.0449C112.06 90.0449 108.759 88.9609 106.396 86.793C104.033 84.625 102.851 81.5879 102.851 77.6816H108.476C108.476 80.123 109.14 82.0273 110.468 83.3945C111.816 84.7617 113.759 85.4453 116.298 85.4453C118.623 85.4453 120.498 84.7129 121.923 83.248C123.369 81.7832 124.101 79.7324 124.121 77.0957V46.8027ZM180.568 69.5078C180.568 73.6875 179.864 77.3398 178.458 80.4648C177.052 83.5703 175.06 85.9434 172.482 87.584C169.904 89.2246 166.896 90.0449 163.458 90.0449C160.099 90.0449 157.12 89.2246 154.523 87.584C151.925 85.9238 149.904 83.5703 148.458 80.5234C147.032 77.457 146.3 73.9121 146.261 69.8887V66.8125C146.261 62.7109 146.974 59.0879 148.4 55.9434C149.825 52.7988 151.837 50.3965 154.435 48.7363C157.052 47.0566 160.04 46.2168 163.4 46.2168C166.818 46.2168 169.825 47.0469 172.423 48.707C175.04 50.3477 177.052 52.7402 178.458 55.8848C179.864 59.0098 180.568 62.6523 180.568 66.8125V69.5078ZM174.972 66.7539C174.972 61.6953 173.956 57.8184 171.925 55.123C169.894 52.4082 167.052 51.0508 163.4 51.0508C159.845 51.0508 157.042 52.4082 154.991 55.123C152.96 57.8184 151.915 61.5684 151.857 66.373V69.5078C151.857 74.4102 152.882 78.2676 154.933 81.0801C157.003 83.873 159.845 85.2695 163.458 85.2695C167.091 85.2695 169.904 83.9512 171.896 81.3145C173.888 78.6582 174.913 74.8594 174.972 69.918V66.7539ZM203.44 89.459H197.815V46.8027H203.44V89.459ZM253.53 75.9238C253.002 80.4355 251.332 83.9219 248.52 86.3828C245.727 88.8242 242.006 90.0449 237.358 90.0449C232.319 90.0449 228.276 88.2383 225.229 84.625C222.202 81.0117 220.688 76.1777 220.688 70.123V66.0215C220.688 62.0566 221.391 58.5703 222.797 55.5625C224.223 52.5547 226.235 50.25 228.832 48.6484C231.43 47.0273 234.438 46.2168 237.856 46.2168C242.387 46.2168 246.02 47.4863 248.754 50.0254C251.489 52.5449 253.08 56.041 253.53 60.5137H247.875C247.387 57.1152 246.323 54.6543 244.682 53.1309C243.061 51.6074 240.786 50.8457 237.856 50.8457C234.262 50.8457 231.44 52.1738 229.389 54.8301C227.358 57.4863 226.342 61.2656 226.342 66.168V70.2988C226.342 74.9277 227.309 78.6094 229.243 81.3438C231.176 84.0781 233.881 85.4453 237.358 85.4453C240.483 85.4453 242.875 84.7422 244.536 83.3359C246.215 81.9102 247.329 79.4395 247.875 75.9238H253.53ZM279.424 56.5977H310.234V48.9316H279.424V26.0801H314.727V18.3652H270.049V89.459H315.215V81.793H279.424V56.5977ZM253.797 33.4433L63.7969 33.459L63.7965 28.459L253.797 28.4433L253.797 33.4433Z"
            fill="white"
          />
        </svg>
      </div>
      <hr width="30%" />
      {user ? (
        <Button type="button" onClick={logoutHandler}>
          LOGOUT
        </Button>
      ) : null}
    </div>
  );
};

export default MainNavigation;
