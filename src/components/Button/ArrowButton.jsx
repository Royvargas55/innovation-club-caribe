import * as React from "react"

// Styles
import '../../styles/components/Button.scss'

function ArrowButton(props) {
  return (
    <span className='icon'>
        <svg
      className='arrow'
      width={34}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
        >
        <path
        d="M33.456 13.679L21.178 1.4a1.847 1.847 0 00-1.316-.543 1.85 1.85 0 00-1.316.543l-1.115 1.115a1.85 1.85 0 00-.543 1.316c0 .498.193.981.543 1.331l7.163 7.18H1.837A1.816 1.816 0 000 14.17v1.576c0 1.026.81 1.91 1.837 1.91h22.839l-7.244 7.22a1.82 1.82 0 00-.543 1.303c0 .498.192.96.543 1.31l1.114 1.111c.35.35.818.542 1.317.542.498 0 .965-.194 1.315-.544L33.457 16.32c.351-.351.544-.82.543-1.32.001-.5-.192-.97-.544-1.321z"
        fill="#fff"
        />
        </svg>
    </span>
  )
}

export default ArrowButton;
