const UserIcon = ({className}: {className?: string}) => (
  <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g filter="url(#filter0_d_3706_794)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9286 9.05302C16.1836 8.14463 17 6.66766 17 5C17 2.23858 14.7614 0 12 0C9.23858 0 7 2.23858 7 5C7 6.66766 7.81643 8.14463 9.0714 9.05302C6.1018 10.2218 4 13.1154 4 16.5V16.6429C4 17.3924 4.60761 18 5.35714 18H18.6429C19.3924 18 20 17.3924 20 16.6429V16.5C20 13.1154 17.8982 10.2218 14.9286 9.05302ZM15.5 5C15.5 6.933 13.933 8.5 12 8.5C10.067 8.5 8.5 6.933 8.5 5C8.5 3.067 10.067 1.5 12 1.5C13.933 1.5 15.5 3.067 15.5 5ZM12 10C8.41015 10 5.5 12.9101 5.5 16.5H18.5C18.5 12.9101 15.5899 10 12 10Z"
        fill="white"
      />
    </g>
    <defs>
      <filter id="filter0_d_3706_794" x="0" y="0" width="24" height="26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3706_794" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3706_794" result="shape" />
      </filter>
    </defs>
  </svg>
)

export default UserIcon
