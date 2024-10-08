import React from "react";

function ChromeStoreIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="50"
      height="50"
      viewBox="0 0 192 192"
    >
      <path fill="none" d="M0 0h192v192H0z"></path>
      <defs>
        <path
          id="a"
          d="M8 20v140c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12V20H8zm108 32H76c-4.42 0-8-3.58-8-8s3.58-8 8-8h40c4.42 0 8 3.58 8 8s-3.58 8-8 8z"
        ></path>
      </defs>
      <clipPath id="b">
        <use overflow="visible" xlinkHref="#a"></use>
      </clipPath>
      <path fill="#eee" d="M8 20h176v152H8z" clipPath="url(#b)"></path>
      <path
        fill="#fff"
        d="M116 36H76c-4.42 0-8 3.58-8 8s3.58 8 8 8h40c4.42 0 8-3.58 8-8s-3.58-8-8-8z"
        clipPath="url(#b)"
      ></path>
      <g clipPath="url(#b)">
        <defs>
          <circle id="c" cx="96" cy="160" r="76"></circle>
        </defs>
        <clipPath id="d">
          <use overflow="visible" xlinkHref="#c"></use>
        </clipPath>
        <path
          fill="#DB4437"
          d="M32.07 84v93.27h34.01L96 125.45h76V84zm0 0v93.27h34.01L96 125.45h76V84z"
          clipPath="url(#d)"
        ></path>
        <path
          fill="#0F9D58"
          d="M20 236h72.34l33.58-33.58v-25.14l-59.84-.01L20 98.24zm0 0h72.34l33.58-33.58v-25.14l-59.84-.01L20 98.24z"
          clipPath="url(#d)"
        ></path>
        <path
          fill="#FFCD40"
          d="M96 125.45l29.92 51.82L92.35 236H172V125.45zm0 0l29.92 51.82L92.35 236H172V125.45z"
          clipPath="url(#d)"
        ></path>
        <g clipPath="url(#d)">
          <circle cx="96" cy="160" r="34.55" fill="#F1F1F1"></circle>
          <circle cx="96" cy="160" r="27.64" fill="#4285F4"></circle>
        </g>
      </g>
      <path
        fill="#212121"
        fillOpacity="0.05"
        d="M8 20h176v76H8z"
        clipPath="url(#b)"
      ></path>
      <path fill="#212121" fillOpacity="0.02" d="M8 95h176v1H8z"></path>
      <path fill="#fff" fillOpacity="0.05" d="M8 96h176v1H8z"></path>
      <path
        fill="#212121"
        fillOpacity="0.02"
        d="M116 52H76c-4.25 0-7.72-3.32-7.97-7.5-.02.17-.03.33-.03.5 0 4.42 3.58 8 8 8h40c4.42 0 8-3.58 8-8 0-.17-.01-.33-.03-.5A7.986 7.986 0 01116 52zM8 20v1h176v-1H8z"
      ></path>
      <path
        fill="#231F20"
        fillOpacity="0.1"
        d="M76 36h40c4.25 0 7.72 3.32 7.97 7.5.01-.17.03-.33.03-.5 0-4.42-3.58-8-8-8H76c-4.42 0-8 3.58-8 8 0 .17.01.33.03.5.25-4.18 3.72-7.5 7.97-7.5zm96 135H20c-6.6 0-12-5.4-12-12v1c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12v-1c0 6.6-5.4 12-12 12z"
      ></path>
      <radialGradient
        id="e"
        cx="7.502"
        cy="19.344"
        r="227.596"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" stopOpacity="0.1"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
      </radialGradient>
      <path
        fill="url(#e)"
        d="M8 20v140c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12V20H8zm108 32H76c-4.42 0-8-3.58-8-8s3.58-8 8-8h40c4.42 0 8 3.58 8 8s-3.58 8-8 8z"
      ></path>
    </svg>
  );
}

export default ChromeStoreIcon;
