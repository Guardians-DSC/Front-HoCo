import React from 'react'
import { useTheme } from 'styled-components'
import { Wrapper } from './styles'

export const LightThemeIcon = () => {
  const theme = useTheme()

  return (
    <Wrapper>
      <svg
        width="228"
        height="145"
        viewBox="0 0 228 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="228" height="145" fill="#f5f5f5" />
        <rect width="84.8372" height="145" fill="#5E966A" />
        <g filter="url(#filter0_d)">
          <path
            d="M18.3039 19.5742V24.9334H25.6641V19.5742H27.3982V32.3069H25.6641V26.5487H18.3039V32.3069H16.5698V19.5742H18.3039ZM35.5098 22.6149C36.486 22.6149 37.353 22.8429 38.1109 23.299C38.8688 23.7551 39.4596 24.3632 39.8835 25.1234C40.3202 25.8835 40.5386 26.7134 40.5386 27.613C40.5386 28.5125 40.3202 29.3422 39.8835 30.1024C39.4596 30.85 38.8688 31.4517 38.1109 31.9078C37.353 32.3639 36.486 32.5919 35.5098 32.5919C34.5336 32.5919 33.6665 32.3639 32.9087 31.9078C32.1508 31.4517 31.5535 30.85 31.1169 30.1024C30.6929 29.3422 30.481 28.5125 30.481 27.613C30.481 26.7134 30.6929 25.8835 31.1169 25.1234C31.5535 24.3632 32.1508 23.7551 32.9087 23.299C33.6665 22.8429 34.5336 22.6149 35.5098 22.6149ZM35.5098 24.1352C34.829 24.1352 34.2317 24.2999 33.7179 24.6293C33.2041 24.946 32.806 25.3705 32.5233 25.9026C32.2535 26.422 32.1187 26.9921 32.1187 27.613C32.1187 28.2211 32.2535 28.7911 32.5233 29.3233C32.806 29.8428 33.2041 30.2671 33.7179 30.5966C34.2317 30.9132 34.829 31.0716 35.5098 31.0716C36.2035 31.0716 36.8007 30.9132 37.3017 30.5966C37.8155 30.2671 38.2073 29.8428 38.477 29.3233C38.7596 28.7911 38.9009 28.2211 38.9009 27.613C38.9009 26.9921 38.7596 26.422 38.477 25.9026C38.2073 25.3705 37.8155 24.946 37.3017 24.6293C36.8007 24.2999 36.2035 24.1352 35.5098 24.1352Z"
            fill="white"
          />
          <path
            d="M60.5875 22.6147C61.5637 22.6147 62.4308 22.8428 63.1887 23.2989C63.9465 23.755 64.5373 24.3631 64.9613 25.1233C65.3981 25.8834 65.6163 26.7133 65.6163 27.6129C65.6163 28.5123 65.3981 29.3421 64.9613 30.1023C64.5373 30.8499 63.9465 31.4516 63.1887 31.9077C62.4308 32.3638 61.5637 32.5918 60.5875 32.5918C59.6113 32.5918 58.7443 32.3638 57.9865 31.9077C57.2286 31.4516 56.6313 30.8499 56.1946 30.1023C55.7707 29.3421 55.5587 28.5123 55.5587 27.6129C55.5587 26.7133 55.7707 25.8834 56.1946 25.1233C56.6313 24.3631 57.2286 23.755 57.9865 23.2989C58.7443 22.8428 59.6113 22.6147 60.5875 22.6147ZM60.5875 24.1351C59.9068 24.1351 59.3095 24.2998 58.7957 24.6292C58.2819 24.9459 57.8837 25.3703 57.601 25.9025C57.3314 26.4219 57.1964 26.992 57.1964 27.6129C57.1964 28.221 57.3314 28.791 57.601 29.3232C57.8837 29.8427 58.2819 30.267 58.7957 30.5965C59.3095 30.9131 59.9068 31.0715 60.5875 31.0715C61.2812 31.0715 61.8785 30.9131 62.3794 30.5965C62.8932 30.267 63.285 29.8427 63.5548 29.3232C63.8373 28.791 63.9786 28.221 63.9786 27.6129C63.9786 26.992 63.8373 26.4219 63.5548 25.9025C63.285 25.3703 62.8932 24.9459 62.3794 24.6292C61.8785 24.2998 61.2812 24.1351 60.5875 24.1351Z"
            fill="white"
          />
          <path
            d="M46.8305 19.2891C45.8928 19.2891 45.1285 19.4158 44.5377 19.6691C43.934 19.9225 43.4073 20.2519 42.9578 20.6574V22.5387C43.2403 22.336 43.5615 22.1143 43.9211 21.8736C44.2679 21.6329 44.679 21.4238 45.1543 21.2465C45.6167 21.0564 46.1754 20.9614 46.8305 20.9614C47.7938 20.9614 48.6546 21.1768 49.4124 21.6075C50.1702 22.0383 50.7676 22.6338 51.2042 23.3939C51.641 24.1414 51.8593 24.9903 51.8593 25.9405C51.8593 26.8907 51.641 27.7395 51.2042 28.4869C50.7676 29.2345 50.1702 29.83 49.4124 30.2734C48.6546 30.7042 47.7938 30.9195 46.8305 30.9195C45.8414 30.9195 45.0001 30.7611 44.3064 30.4444C43.6 30.115 43.0219 29.7793 42.5724 29.4373V31.1476C43.0219 31.5403 43.6129 31.8823 44.3451 32.1738C45.0644 32.4525 45.8928 32.5918 46.8305 32.5918C47.8067 32.5918 48.7059 32.4209 49.528 32.0787C50.3501 31.7239 51.0694 31.2426 51.686 30.6345C52.3025 30.0263 52.7841 29.3232 53.1311 28.5251C53.465 27.7142 53.632 26.8527 53.632 25.9405C53.632 25.0283 53.465 24.1731 53.1311 23.3749C52.7841 22.5641 52.3025 21.8546 51.686 21.2465C51.0694 20.6383 50.3501 20.1632 49.528 19.8212C48.7059 19.4664 47.8067 19.2891 46.8305 19.2891Z"
            fill="white"
          />
          <rect
            x="44.8226"
            y="26.9216"
            width="0.701376"
            height="3.32196"
            transform="rotate(-90 44.8226 26.9216)"
            fill="white"
          />
          <rect
            x="47.1954"
            y="23.8823"
            width="0.711863"
            height="3.27308"
            fill="white"
          />
        </g>
        <rect
          x="16.5698"
          y="58.5322"
          width="49.0465"
          height="13.9679"
          rx="5"
          fill="white"
        />
        <rect
          x="16.5698"
          y="78.4863"
          width="33.8023"
          height="6.65137"
          rx="3.32569"
          fill="white"
          fillOpacity="0.5"
        />
        <rect
          x="16.5698"
          y="88.4634"
          width="26.5116"
          height="6.65137"
          rx="3.32569"
          fill="white"
          fillOpacity="0.5"
        />
        <rect
          x="16.5698"
          y="98.4404"
          width="29.1628"
          height="6.65137"
          rx="3.32569"
          fill="white"
          fillOpacity="0.5"
        />
        <path
          d="M0 0V-3H-3V0H0ZM228 0H231V-3H228V0ZM228 145V148H231V145H228ZM0 145H-3V148H0V145ZM0 3H228V-3H0V3ZM225 0V145H231V0H225ZM228 142H0V148H228V142ZM3 145V0H-3V145H3Z"
          fill={theme['main-font']}
        />
        <defs>
          <filter
            id="filter0_d"
            x="16.5698"
            y="19.2891"
            width="57.0465"
            height="21.3029"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Wrapper>
  )
}
