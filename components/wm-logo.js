import React from 'react';

export const WmLogo = ({ height, width }) => {
  const sizes = {};
  if (height !== '') {
    sizes.height = height;
  }
  if (width !== '') {
    sizes.width = width;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="wm-icon wm-logo"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 150 36"
      {...sizes}
    >
      <g fill="none">
        <path
          fill="#00CDBE"
          d="M15.015 21.956l-2.706-10.21h-.06l-2.59 10.21H5.34L.515 6.748h4.41L7.72 17.072h.06l2.53-10.324h4.06l2.587 10.295h.06L19.81 6.748h4.293L19.31 21.956m13.53-11.624c-.5-.55-1.26-.823-2.28-.823-.666 0-1.22.11-1.66.33-.44.22-.795.5-1.06.83-.264.33-.45.69-.558 1.06-.108.37-.17.7-.192 1h6.794c-.195-1.06-.543-1.86-1.044-2.41m-4.72 8c.628.61 1.53.91 2.706.91.842 0 1.568-.21 2.176-.63.608-.42.98-.87 1.118-1.34h3.677c-.59 1.82-1.49 3.13-2.706 3.91-1.21.78-2.68 1.17-4.41 1.17-1.19 0-2.27-.19-3.23-.57-.96-.38-1.77-.93-2.44-1.64-.66-.71-1.18-1.55-1.54-2.53-.36-.99-.54-2.06-.54-3.24 0-1.14.19-2.2.56-3.18.37-.98.9-1.83 1.59-2.55.69-.72 1.51-1.28 2.46-1.69.95-.42 2.01-.62 3.16-.62 1.3 0 2.42.25 3.38.75s1.75 1.17 2.37 2.01c.62.84 1.06 1.8 1.34 2.88.28 1.07.38 2.2.3 3.38h-11c.06 1.35.41 2.33 1.03 2.94m20.94-8c-.5-.55-1.26-.82-2.28-.82-.66 0-1.22.11-1.66.33-.44.22-.79.5-1.06.84-.26.33-.45.68-.56 1.06-.1.37-.17.7-.19 1h6.8c-.19-1.06-.54-1.87-1.04-2.42m-4.72 8c.63.61 1.53.91 2.71.91.85 0 1.57-.21 2.18-.63.61-.42.98-.87 1.12-1.34h3.68c-.59 1.82-1.49 3.13-2.7 3.91-1.21.79-2.68 1.18-4.41 1.18-1.2 0-2.28-.19-3.24-.58-.96-.38-1.77-.93-2.44-1.63-.66-.71-1.18-1.55-1.54-2.53-.36-.98-.54-2.06-.54-3.24 0-1.14.188-2.2.56-3.18.37-.98.9-1.83 1.59-2.55.69-.72 1.51-1.28 2.46-1.69.95-.417 2.01-.62 3.16-.62 1.3 0 2.42.25 3.38.75s1.75 1.17 2.37 2.012c.62.84 1.07 1.8 1.34 2.88.28 1.08.37 2.205.29 3.383h-11c.06 1.36.403 2.34 1.03 2.94m21.89-5.83c-.117-.58-.32-1.09-.603-1.53-.284-.44-.652-.79-1.102-1.07-.45-.27-1.02-.41-1.705-.41-.687 0-1.265.14-1.735.41-.47.28-.85.64-1.13 1.09-.28.455-.49.97-.62 1.55-.12.574-.19 1.18-.19 1.81 0 .583.07 1.172.21 1.76.14.585.36 1.11.66 1.57.31.46.69.83 1.15 1.115.46.28 1.02.427 1.66.427.69 0 1.26-.134 1.72-.41.46-.27.83-.64 1.11-1.1.28-.46.47-.99.59-1.573.12-.59.18-1.2.18-1.82 0-.63-.06-1.236-.17-1.81zm.177 7.53c-.49.82-1.132 1.42-1.926 1.78-.794.36-1.69.55-2.69.55-1.137 0-2.14-.22-3-.66-.864-.44-1.574-1.04-2.133-1.796-.56-.756-.98-1.624-1.264-2.604-.28-.98-.42-2-.42-3.06 0-1.02.14-2 .43-2.95.29-.95.71-1.79 1.27-2.52s1.26-1.31 2.11-1.75c.85-.445 1.83-.665 2.94-.665.9 0 1.76.19 2.58.57.82.38 1.46.948 1.93 1.69h.06V.96h4.18v21H66.5v-1.943h-.06zm41.916-7.49c-.116-.58-.32-1.09-.603-1.53-.29-.44-.65-.8-1.11-1.07-.45-.273-1.02-.41-1.71-.41s-1.27.137-1.74.41c-.47.277-.85.64-1.14 1.09-.29.45-.49.967-.62 1.546-.13.578-.19 1.18-.19 1.81 0 .587.06 1.176.2 1.765.13.59.36 1.117.66 1.578.3.46.68.84 1.14 1.12.46.28 1.01.43 1.66.43.68 0 1.26-.13 1.72-.41.46-.27.83-.64 1.1-1.1.27-.46.47-.983.59-1.57.11-.59.17-1.192.17-1.82 0-.63-.06-1.233-.17-1.81zm.17 7.54c-.49.82-1.13 1.415-1.93 1.78-.8.36-1.69.54-2.69.54-1.14 0-2.14-.22-3-.66-.86-.44-1.58-1.037-2.13-1.79-.56-.754-.98-1.62-1.27-2.6-.29-.98-.43-2-.43-3.06 0-1.02.14-2 .42-2.95.28-.95.7-1.79 1.26-2.517.56-.726 1.26-1.31 2.1-1.75.84-.44 1.82-.66 2.94-.66.9 0 1.76.19 2.57.573.81.38 1.45.94 1.92 1.69h.05V6.7h4.18v15.28h-3.97v-1.94h-.06zM77.06 6.77v2.06h.06c.548-.783 1.21-1.39 1.984-1.82.774-.43 1.663-.65 2.662-.65.96 0 1.838.188 2.633.56.79.373 1.39 1.028 1.8 1.97.45-.666 1.06-1.255 1.84-1.764.77-.508 1.69-.765 2.75-.765.8 0 1.55.1 2.23.3.68.2 1.27.51 1.76.94.49.44.87 1 1.15 1.7.27.7.41 1.54.41 2.52V22h-4.17v-8.63c0-.508-.02-.99-.06-1.44-.04-.45-.15-.84-.33-1.176-.18-.333-.44-.597-.78-.795-.34-.2-.81-.3-1.4-.3-.59 0-1.07.11-1.43.34-.37.22-.65.52-.86.88-.21.36-.35.77-.41 1.23-.07.46-.11.92-.11 1.4v8.47h-4.17v-8.53c0-.45-.01-.9-.03-1.34-.02-.44-.11-.85-.25-1.22-.15-.37-.39-.67-.74-.9-.35-.23-.85-.34-1.52-.34-.2 0-.46.04-.78.13-.33.09-.64.25-.94.5-.31.24-.57.6-.78 1.06-.22.46-.33 1.06-.33 1.81v8.82H73.1V6.77h3.94zm47.163 12.06c.462-.276.834-.634 1.12-1.075.284-.443.484-.957.602-1.546.118-.58.176-1.18.176-1.79 0-.61-.06-1.2-.19-1.79-.13-.58-.34-1.11-.63-1.57-.29-.46-.67-.83-1.13-1.11-.46-.28-1.02-.42-1.69-.42-.69 0-1.26.14-1.72.43-.46.29-.83.65-1.11 1.1-.28.45-.48.97-.6 1.56-.12.59-.17 1.2-.17 1.82 0 .61.07 1.2.19 1.79.13.59.34 1.1.62 1.54.28.44.66.8 1.13 1.07.47.27 1.04.41 1.71.41.69 0 1.26-.14 1.72-.41zM118.8 6.77v1.94h.056c.51-.823 1.157-1.42 1.942-1.793.784-.373 1.647-.56 2.588-.56 1.196 0 2.226.226 3.088.677.864.45 1.58 1.048 2.15 1.793.567.75.99 1.618 1.263 2.608.275.99.412 2.025.412 3.104 0 1.02-.14 2-.42 2.94-.28.94-.69 1.77-1.25 2.5-.56.72-1.26 1.3-2.09 1.73-.83.43-1.81.65-2.93.65-.94 0-1.81-.19-2.61-.58-.8-.38-1.45-.95-1.96-1.7H119v7.21h-4.176V6.77h3.972zm16.493 11.43c.187.324.426.59.72.794.295.207.632.36 1.016.458.38.097.77.146 1.19.146.29 0 .6-.034.92-.102.32-.068.61-.177.88-.325.26-.14.48-.34.66-.58.17-.24.26-.55.26-.93 0-.62-.42-1.09-1.25-1.41-.84-.31-2-.63-3.49-.94-.61-.13-1.2-.3-1.78-.48-.58-.18-1.1-.43-1.55-.73-.45-.3-.82-.68-1.09-1.14-.28-.46-.42-1.02-.42-1.69 0-.98.19-1.78.57-2.41.38-.62.88-1.12 1.51-1.48.62-.36 1.33-.61 2.11-.76.79-.15 1.59-.22 2.41-.22s1.62.08 2.4.24c.77.16 1.46.42 2.07.79.61.38 1.12.87 1.52 1.49.4.62.64 1.4.72 2.34h-3.97c-.06-.8-.37-1.35-.92-1.63-.55-.28-1.2-.43-1.94-.43-.24 0-.49.02-.77.04-.27.03-.52.09-.75.19-.22.1-.41.24-.57.43-.16.19-.24.44-.24.75 0 .38.14.68.41.91.27.24.63.43 1.07.58.44.15.94.28 1.51.4.57.12 1.145.25 1.734.38.605.14 1.2.3 1.78.5.58.2 1.09.46 1.542.78.45.32.81.72 1.09 1.2.27.48.41 1.07.41 1.78 0 1-.2 1.84-.61 2.51-.4.68-.925 1.22-1.57 1.64-.65.41-1.39.7-2.22.87-.837.17-1.686.25-2.55.25-.88 0-1.74-.09-2.59-.26-.84-.18-1.59-.47-2.25-.88-.654-.41-1.19-.96-1.614-1.636-.42-.672-.65-1.52-.69-2.54h4c0 .45.09.834.28 1.16"
        />
        <path
          fill="#FFF"
          d="M72.824 31.033c9.028 0 13.598-3.428 13.598-3.428l1.942 2.628s-6.74 5.715-15.54 5.715c-8.8 0-15.54-5.715-15.54-5.715l1.942-2.628s4.57 3.428 13.598 3.428"
        />
        <path
          fill="#00CDBE"
          d="M146.924 8.304h.182c.26 0 .42-.01.483-.03.06-.02.11-.054.14-.105.03-.05.05-.11.05-.17 0-.07-.02-.12-.06-.17-.04-.05-.09-.08-.15-.11-.07-.02-.23-.03-.48-.03h-.18v.61zm-.45 1.257V7.35h.45c.42 0 .656 0 .707.005.15.012.27.042.35.088.09.047.15.117.21.212.06.096.09.2.09.317 0 .16-.05.297-.15.41-.1.113-.25.184-.44.21.07.026.12.054.16.084.04.03.09.086.15.17.02.022.07.11.16.27l.26.445h-.55l-.18-.35c-.12-.24-.23-.39-.31-.45-.08-.06-.18-.09-.31-.09h-.11v.91h-.45zm.945-2.79c-.29 0-.57.08-.83.22-.27.15-.47.35-.62.62-.15.27-.23.55-.23.85 0 .29.07.57.22.84s.35.48.62.62c.26.15.54.23.83.23.29 0 .57-.07.83-.22.26-.14.47-.35.62-.62.15-.26.22-.54.22-.83 0-.29-.08-.57-.23-.84-.15-.27-.36-.47-.63-.62-.26-.14-.54-.21-.83-.21zm-.01-.41c.35 0 .7.09 1.03.27.32.18.58.44.77.77.19.34.28.69.28 1.05s-.1.71-.28 1.04c-.19.33-.44.59-.77.77-.33.19-.68.28-1.04.28s-.71-.09-1.04-.27c-.33-.18-.59-.44-.77-.77-.19-.33-.28-.67-.28-1.04 0-.36.09-.71.28-1.05.19-.33.44-.59.77-.77.33-.18.67-.27 1.03-.27z"
        />
      </g>
    </svg>
  );
};

export default WmLogo;
