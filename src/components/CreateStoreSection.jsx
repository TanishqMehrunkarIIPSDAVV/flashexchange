import { useTheme } from "../ThemeProvider";

function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 10h10m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M10 2.8 15.5 5v4.2c0 3.4-2.2 6.4-5.5 7.8-3.3-1.4-5.5-4.4-5.5-7.8V5L10 2.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m7.8 10.1 1.4 1.4 3-3.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StoreIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="currentColor"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.50002 10V15C3.50002 17.8284 3.50002 19.2426 4.37869 20.1213C5.25737 21 6.67159 21 9.50002 21H14.5C17.3284 21 18.7427 21 19.6213 20.1213C20.5 19.2426 20.5 17.8284 20.5 15V10" />
      <path d="M17 7.50184C17 8.88255 15.8807 9.99997 14.5 9.99997C13.1193 9.99997 12 8.88068 12 7.49997C12 8.88068 10.8807 9.99997 9.50002 9.99997C8.1193 9.99997 7.00002 8.88068 7.00002 7.49997C7.00002 8.88068 5.82655 9.99997 4.37901 9.99997C3.59984 9.99997 2.90008 9.67567 2.42 9.16087C1.59462 8.2758 2.12561 6.97403 2.81448 5.98842L3.20202 5.45851C4.08386 4.2527 4.52478 3.6498 5.16493 3.32494C5.80508 3.00008 6.55201 3.00018 8.04587 3.00038L15.9551 3.00143C17.4485 3.00163 18.1952 3.00173 18.8351 3.32658C19.475 3.65143 19.9158 4.25414 20.7974 5.45957L21.1855 5.99029C21.8744 6.97589 22.4054 8.27766 21.58 9.16273C21.0999 9.67754 20.4002 10.0018 19.621 10.0018C18.1734 10.0018 17 8.88255 17 7.50184Z" />
      <path d="M14.9971 17C14.3133 17.6072 13.2247 18 11.9985 18C10.7723 18 9.68376 17.6072 9 17" />
    </svg>
  );
}

function GridIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 4h4v4H4V4Zm8 0h4v4h-4V4ZM4 12h4v4H4v-4Zm8 0h4v4h-4v-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="currentColor"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M7 17L7 13" strokeLinecap="round" />
      <path d="M12 17L12 7" strokeLinecap="round" />
      <path d="M17 17L17 11" strokeLinecap="round" />
      <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaymentIcon({ className = "h-4 w-4" }) {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13.5 15H6C4.11438 15 3.17157 15 2.58579 14.4142C2 13.8284 2 12.8856 2 11V7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3H18C19.8856 3 20.8284 3 21.4142 3.58579C22 4.17157 22 5.11438 22 7V12C22 12.9319 22 13.3978 21.8478 13.7654C21.6448 14.2554 21.2554 14.6448 20.7654 14.8478C20.3978 15 19.9319 15 19 15" />
    <path d="M14 9C14 10.1045 13.1046 11 12 11C10.8954 11 10 10.1045 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" />
    <path d="M13 17C13 15.3431 14.3431 14 16 14V12C16 10.3431 17.3431 9 19 9V14.5C19 16.8346 19 18.0019 18.5277 18.8856C18.1548 19.5833 17.5833 20.1548 16.8856 20.5277C16.0019 21 14.8346 21 12.5 21H12C10.1362 21 9.20435 21 8.46927 20.6955C7.48915 20.2895 6.71046 19.5108 6.30448 18.5307C6 17.7956 6 16.8638 6 15" />
</svg>
  );
}

function UptimeIcon({ className = "h-4 w-4" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z" />
    <path d="M12 2C8.96243 2 6.5 4.46243 6.5 7.5C6.5 10.0176 8.1915 12.14 10.5 12.793L12 15L13.5 12.793C15.8085 12.14 17.5 10.0176 17.5 7.5C17.5 4.46243 15.0376 2 12 2Z" />
    <path d="M12 5V7.5L13.5 8.5" />
    <path d="M14 20H21M10 20H3" />
</svg>
  );
}
function CheckIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="m5.5 10.2 3 3 6-6.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlowArrow({ className = "h-6 w-6 text-cyan-400" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M13 7l5 5m0 0l-5 5m5-5H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VerticalFlowArrow({ isDark = false }) {
  return (
    <div className="flex justify-center py-6">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={`h-6 w-6 ${isDark ? "text-cyan-400/50" : "text-cyan-400/40"}`}
      >
        <path
          d="M12 5v14m0 0l-4-4m4 4l4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function RegisterIcon({ className = "h-7 w-7" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z" />
    <path d="M17.5 21L17.5 14M14 17.5H21" />
    <path d="M3 20C3 16.134 6.13401 13 10 13C11.4872 13 12.8662 13.4638 14 14.2547" />
</svg>
  );
}

function CreateStoreIcon({ className = "h-7 w-7" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.5 9.99988V14.9999C3.5 17.8283 3.5 19.2425 4.37868 20.1212C5.25736 20.9999 6.67157 20.9999 9.5 20.9999H13M20.5 12.9999V9.99988" />
    <path d="M17 7.50171C17 8.88243 15.8807 9.99985 14.5 9.99985C13.1193 9.99985 12 8.88056 12 7.49985C12 8.88056 10.8807 9.99985 9.5 9.99985C8.11929 9.99985 7 8.88056 7 7.49985C7 8.88056 5.82654 9.99985 4.379 9.99985C3.59983 9.99985 2.90007 9.67555 2.41999 9.16075C1.59461 8.27567 2.12559 6.97391 2.81446 5.9883L3.202 5.45839C4.08384 4.25258 4.52476 3.64968 5.16491 3.32482C5.80507 2.99996 6.552 3.00005 8.04586 3.00025L15.9551 3.00131C17.4485 3.00151 18.1952 3.00161 18.8351 3.32646C19.475 3.65131 19.9158 4.25402 20.7974 5.45945L21.1855 5.99017C21.8744 6.97577 22.4054 8.27754 21.58 9.16261C21.0999 9.67742 20.4001 10.0017 19.621 10.0017C18.1734 10.0017 17 8.88243 17 7.50171Z" />
    <path d="M14.5 17.9999H20.5M17.5 20.9999V14.9999" />
</svg>
  );
}

function ListProductIcon({ className = "h-7 w-7" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M4.5 10.2653V6H19.5V10.2653C19.5 13.4401 19.5 15.0275 18.5237 16.0137C17.5474 17 15.976 17 12.8333 17H11.1667C8.02397 17 6.45262 17 5.47631 16.0137C4.5 15.0275 4.5 13.4401 4.5 10.2653Z" strokeLinejoin="round" />
    <path d="M4.5 6L5.22115 4.46154C5.78045 3.26838 6.06009 2.6718 6.62692 2.3359C7.19375 2 7.92084 2 9.375 2H14.625C16.0792 2 16.8062 2 17.3731 2.3359C17.9399 2.6718 18.2196 3.26838 18.7788 4.46154L19.5 6" />
    <path d="M10.5 9H13.5" />
    <path d="M12 19.5V22M12 19.5L7 19.5M12 19.5H17M7 19.5H4.5C3.11929 19.5 2 20.6193 2 22M7 19.5V22M17 19.5H19.5C20.8807 19.5 22 20.6193 22 22M17 19.5V22" strokeLinejoin="round" />
</svg>
  );
}

function ShareLinkIcon({ className = "h-7 w-7" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 6.5C21 8.15685 19.6569 9.5 18 9.5C16.3431 9.5 15 8.15685 15 6.5C15 4.84315 16.3431 3.5 18 3.5C19.6569 3.5 21 4.84315 21 6.5Z" />
    <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" />
    <path d="M21 17.5C21 19.1569 19.6569 20.5 18 20.5C16.3431 20.5 15 19.1569 15 17.5C15 15.8431 16.3431 14.5 18 14.5C19.6569 14.5 21 15.8431 21 17.5Z" />
    <path d="M8.72852 10.7495L15.2285 7.75M8.72852 13.25L15.2285 16.2495" />
</svg>
  );
}

function HoldIcon({ className = "h-7 w-7" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 11.1835V8.28041C21 6.64041 21 5.82041 20.5959 5.28541C20.1918 4.75042 19.2781 4.49068 17.4507 3.97122C16.2022 3.61632 15.1016 3.18875 14.2223 2.79841C13.0234 2.26622 12.424 2.00012 12 2.00012C11.576 2.00012 10.9766 2.26622 9.77771 2.79841C8.89839 3.18875 7.79784 3.61632 6.54933 3.97122C4.72193 4.49068 3.80822 4.75042 3.40411 5.28541C3 5.82041 3 6.64041 3 8.28041V11.1835C3 16.8086 8.06277 20.1836 10.594 21.5195C11.2011 21.8399 11.5046 22.0001 12 22.0001C12.4954 22.0001 12.7989 21.8399 13.406 21.5195C15.9372 20.1836 21 16.8086 21 11.1835Z" strokeLinecap="round" />
    <path d="M12 16.0001C12.1396 16.0001 12.2694 15.9365 12.5289 15.8093L14.6152 14.7869C15.5384 14.3345 16 14.1083 16 13.7501V9.25012M12 16.0001C11.8604 16.0001 11.7306 15.9365 11.4711 15.8093L9.38478 14.7869C8.4616 14.3345 8 14.1083 8 13.7501V9.25012M12 16.0001V11.5001M16 9.25012C16 8.89191 15.5384 8.6657 14.6152 8.2133L12.5289 7.19092C12.2694 7.06372 12.1396 7.00012 12 7.00012C11.8604 7.00012 11.7306 7.06372 11.4711 7.19092L9.38478 8.2133C8.46159 8.6657 8 8.89191 8 9.25012M16 9.25012C16 9.60834 15.5384 9.83454 14.6152 10.2869L12.5289 11.3093C12.2694 11.4365 12.1396 11.5001 12 11.5001M8 9.25012C8 9.60834 8.46159 9.83454 9.38478 10.2869L11.4711 11.3093C11.7306 11.4365 11.8604 11.5001 12 11.5001" strokeLinejoin="round" />
</svg>
  );
}

function DeliveryIcon({ className = "h-7 w-7" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M19.5 19.5C19.5 20.8807 18.3807 22 17 22C15.6193 22 14.5 20.8807 14.5 19.5C14.5 18.1193 15.6193 17 17 17C18.3807 17 19.5 18.1193 19.5 19.5Z" />
    <path d="M9.5 19.5C9.5 20.8807 8.38071 22 7 22C5.61929 22 4.5 20.8807 4.5 19.5C4.5 18.1193 5.61929 17 7 17C8.38071 17 9.5 18.1193 9.5 19.5Z" />
    <path d="M14.5 19.5H9.5M19.5 19.5H20.2632C20.4831 19.5 20.5931 19.5 20.6855 19.4885C21.3669 19.4036 21.9036 18.8669 21.9885 18.1855C22 18.0931 22 17.9831 22 17.7632V15C22 11.4101 19.0899 8.5 15.5 8.5M11 6H12C13.4142 6 14.1213 6 14.5607 6.43934C15 6.87868 15 7.58579 15 9V17.5M2 12V17C2 17.9346 2 18.4019 2.20096 18.75C2.33261 18.978 2.52197 19.1674 2.75 19.299C3.09808 19.5 3.56538 19.5 4.5 19.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.85 7.85L6.5 6.95V4.7M2 6.5C2 8.98528 4.01472 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5Z" strokeLinecap="round" strokeLinejoin="round" />
</svg>
  );
}

function FundsIcon({ className = "h-7 w-7" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20.9427 16.8354C20.2864 12.8866 18.2432 9.94613 16.467 8.219C15.9501 7.71642 15.6917 7.46513 15.1208 7.23257C14.5499 7 14.0592 7 13.0778 7H10.9222C9.94081 7 9.4501 7 8.87922 7.23257C8.30834 7.46513 8.04991 7.71642 7.53304 8.219C5.75682 9.94613 3.71361 12.8866 3.05727 16.8354C2.56893 19.7734 5.27927 22 8.30832 22H15.6917C18.7207 22 21.4311 19.7734 20.9427 16.8354Z" strokeLinecap="round" />
    <path d="M7.25662 4.44287C7.05031 4.14258 6.75128 3.73499 7.36899 3.64205C8.00392 3.54651 8.66321 3.98114 9.30855 3.97221C9.89237 3.96413 10.1898 3.70519 10.5089 3.33548C10.8449 2.94617 11.3652 2 12 2C12.6348 2 13.1551 2.94617 13.4911 3.33548C13.8102 3.70519 14.1076 3.96413 14.6914 3.97221C15.3368 3.98114 15.9961 3.54651 16.631 3.64205C17.2487 3.73499 16.9497 4.14258 16.7434 4.44287L15.8105 5.80064C15.4115 6.38146 15.212 6.67187 14.7944 6.83594C14.3769 7 13.8373 7 12.7582 7H11.2418C10.1627 7 9.6231 7 9.20556 6.83594C8.78802 6.67187 8.5885 6.38146 8.18945 5.80064L7.25662 4.44287Z" />
</svg>
  );
}

function LockIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6.5 8V6.8A3.5 3.5 0 0 1 10 3.3a3.5 3.5 0 0 1 3.5 3.5V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5.5 8h9v7.2h-9V8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10 10.4v1.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PackageIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 6.5 10 3l6 3.5-6 3.5L4 6.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 6.5v7l6 3.5 6-3.5v-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10 10v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MessageIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4.5 4.8h11v7.2h-5.8L6.6 15v-3H4.5V4.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="m10 3 1.9 4.1 4.5.6-3.2 3 1 4.4L10 12.9 5.8 15l1-4.3-3.2-3 4.5-.6L10 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScaleIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="currentColor"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3v15M8 8L4 4M20 4l-4 4M5 21h14M8 18h8" />
      <circle cx="8" cy="11" r="3" />
      <circle cx="16" cy="11" r="3" />
    </svg>
  );
}

function GamepadIcon({ className = "h-4 w-4" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M2.00825 15.8092C2.23114 12.3161 2.88737 9.7599 3.44345 8.27511C3.72419 7.5255 4.32818 6.96728 5.10145 6.78021C9.40147 5.73993 14.5986 5.73993 18.8986 6.78021C19.6719 6.96728 20.2759 7.5255 20.5566 8.27511C21.1127 9.7599 21.7689 12.3161 21.9918 15.8092C22.1251 17.8989 20.6148 19.0503 18.9429 19.8925C17.878 20.4289 17.0591 18.8457 16.5155 17.6203C16.2185 16.9508 15.5667 16.5356 14.8281 16.5356H9.17196C8.43331 16.5356 7.78158 16.9508 7.48456 17.6203C6.94089 18.8457 6.122 20.4289 5.05711 19.8925C3.40215 19.0588 1.87384 17.9157 2.00825 15.8092Z" stroke-linejoin="round" />
    <path d="M5 4.5L6.96285 4M19 4.5L17 4" stroke-linejoin="round" />
    <path d="M9 13L7.5 11.5M7.5 11.5L6 10M7.5 11.5L6 13M7.5 11.5L9 10" />
    <path d="M15.9881 10H15.9971" stroke-linejoin="round" />
    <path d="M17.9881 13H17.9971" stroke-linejoin="round" />
</svg>
  );
}

function ListIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="currentColor"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 6H3M21 6H9M9 12H3M21 12H9M9 18H3M21 18H9" />
    </svg>
  );
}

function ReleaseIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="currentColor"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3v18M3 12h18" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

const trustStats = [
  { value: "5,000+", label: "Stores Created", icon: TrendIcon },
  { value: "$100,000+", label: "Payments Processed", icon: PaymentIcon },
  { value: "99.9%", label: "Uptime", icon: UptimeIcon },
];

const paymentSteps = [
  { label: "List", icon: ListIcon },
  { label: "Hold", icon: HoldIcon },
  { label: "Release", icon: ReleaseIcon },
];

const howItWorks = [
  { label: "Register", icon: RegisterIcon },
  { label: "Create Store", icon: CreateStoreIcon },
  { label: "List Product", icon: ListProductIcon },
  { label: "Share Link", icon: ShareLinkIcon },
  { label: "Protected Hold", icon: HoldIcon },
  { label: "Instant Delivery", icon: DeliveryIcon },
  { label: "Funds Released", icon: FundsIcon },
];

const faqItems = [
  {
    question: "How secure is the payment hold?",
    answer:
      "The workflow is designed around a visible payment hold and release process so digital goods move only after payment and confirmation.",
  },
  {
    question: "What are the fees?",
    answer:
      "Keep the pricing surface simple: a flat store fee, a clear transaction cut, and no hidden platform steps.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes. The storefront layout is built to support a custom link or a branded domain without changing the core experience.",
  },
];

const productCards = [
  {
    name: "Premium Game Key",
    price: "$39.00",
    accent: "from-cyan-300 to-indigo-400",
  },
  {
    name: "Discord Boost Pack",
    price: "$12.00",
    accent: "from-violet-300 to-fuchsia-400",
  },
  {
    name: "Creator Toolkit",
    price: "$59.00",
    accent: "from-emerald-300 to-cyan-300",
  },
  {
    name: "Pro Login Bundle",
    price: "$99.00",
    accent: "from-slate-300 to-slate-500",
  },
];

const dashboardMetrics = [
  { label: "Today\'s revenue", value: "$14,230", delta: "+18%" },
  { label: "Orders", value: "128", delta: "+9" },
  { label: "Conversion", value: "6.4%", delta: "+0.8" },
  { label: "Active listings", value: "36", delta: "+4" },
];

const dashboardBars = [42, 56, 36, 72, 58, 90, 76, 66, 84, 61, 74, 88];

const dashboardOrders = [
  {
    id: "#2041",
    product: "Premium Game Key",
    status: "Paid",
    amount: "$39.00",
  },
  {
    id: "#2042",
    product: "Creator Toolkit",
    status: "Pending",
    amount: "$59.00",
  },
  {
    id: "#2043",
    product: "Discord Boost Pack",
    status: "Paid",
    amount: "$12.00",
  },
];

const sidebarItems = [
  "Overview",
  "Orders",
  "Listings",
  "Payments",
  "Messages",
  "Settings",
];

const features = [
  {
    title: "Instant Delivery",
    text: "Deliver digital items the moment payment clears.",
    icon: DeliveryIcon,
  },
  {
    title: "Dispute Resolution",
    text: "Handle disagreements with a visible, structured process.",
    icon: ScaleIcon,
  },
  {
    title: "Sell API Keys",
    text: "Support software products, tokens, and access keys.",
    icon: PackageIcon,
  },
  {
    title: "Sell Game Accounts",
    text: "Offer gaming goods with the same storefront flow.",
    icon: GamepadIcon,
  },
  {
    title: "Protected Payment Hold",
    text: "Keep both sides protected while a transaction is active.",
    icon: ShieldIcon,
  },
  {
    title: "24/7 Support",
    text: "Provide round-the-clock help for every buyer and seller.",
    icon: MessageIcon,
  },
];

function SectionTitle({ eyebrow, title, text, isDark }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full border bg-cyan-500/10 ${!isDark ? "border-cyan-200/60 text-cyan-700" : "text-cyan-200 border-cyan-300/20"}`}>
          <StarIcon className="h-4 w-4" />
        </span>
        <p className={`text-sm uppercase tracking-[0.28em] ${!isDark ? "text-cyan-700/75" : "text-cyan-200/80"}`}>
          {eyebrow}
        </p>
      </div>
      <h2 className={`text-2xl font-semibold tracking-tight ${!isDark ? "text-slate-900" : "text-white"} sm:text-3xl lg:text-[2.15rem]`}>
        {title}
      </h2>
      <p className={`max-w-3xl text-sm leading-6 ${!isDark ? "text-slate-600" : "text-slate-400"} sm:text-base`}>
        {text}
      </p>
    </div>
  );
}

function StatCard({ value, label, icon: Icon, isDark }) {
  return (
    <div className={`rounded-3xl border px-5 py-5 text-center shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur ${
      isDark ? "border-white/10 bg-slate-950/70" : "border-slate-200/80 bg-white/90"
    }`}>
      <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border bg-cyan-500/10 ${
        isDark ? "border-cyan-300/20 text-cyan-200" : "border-cyan-200/50 text-cyan-700"
      }`}>
        {Icon ? <Icon className="h-4 w-4" /> : <TrendIcon className="h-4 w-4" />}
      </div>
      <p className={`text-2xl font-semibold sm:text-[28px] ${
        isDark ? "text-white" : "text-slate-900"
      }`}>
        {value}
      </p>
      <p className={`mt-1 text-sm ${
        isDark ? "text-slate-400" : "text-slate-500"
      }`}>{label}</p>
    </div>
  );
}

function StepBubble({ label, icon: Icon, isDark }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center relative group">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition 
        bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400"
      />

      {/* Icon container */}
      <div
        className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full
        shadow-[0_10px_25px_rgba(34,211,238,0.25)]
        ${
          isDark
            ? "border-cyan-300/20 bg-slate-900/80 text-cyan-200 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
            : "border-cyan-200/40 bg-white/90 text-cyan-700"
        }
        border`}
      >
        <Icon className="h-7 w-7" />
      </div>

      <p className={`max-w-[100px] text-[11px] leading-4 ${
        isDark ? "text-slate-400" : "text-slate-600"
      }`}>
        {label}
      </p>
    </div>
  );
}

function FeatureCard({ title, text, icon: Icon, isDark }) {
  return (
    <div className={`rounded-2xl border p-5 shadow-[0_14px_30px_rgba(15,23,42,0.08)] backdrop-blur ${
      isDark ? "border-white/10 bg-slate-950/70" : "border-slate-200/80 bg-white/90"
    }`}>
      <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border bg-[linear-gradient(135deg,rgba(34,211,238,0.2),rgba(168,85,247,0.18))] ${
        isDark ? "border-cyan-300/15 text-cyan-200" : "border-cyan-200/30 text-cyan-700"
      }`}>
        {Icon ? <Icon className="h-5 w-5" /> : <LockIcon className="h-5 w-5" />}
      </div>
      <h3 className={`text-sm font-semibold ${
        isDark ? "text-white" : "text-slate-900"
      }`}>
        {title}
      </h3>
      <p className={`mt-2 text-xs leading-5 ${
        isDark ? "text-slate-400" : "text-slate-600"
      }`}>
        {text}
      </p>
    </div>
  );
}

function ProductCard({ product, isDark }) {
  return (
    <div className={`flex items-center gap-3 rounded-2xl border p-4 shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur ${
      isDark ? "border-white/10 bg-slate-950/70" : "border-slate-200/80 bg-white/90"
    }`}>
      <div
        className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${product.accent} shadow-[0_0_22px_rgba(168,85,247,0.18)]`}
      />
      <div className="min-w-0 flex-1">
        <p className={`font-medium ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
          {product.name}
        </p>
        <p className={`text-xs ${
          isDark ? "text-slate-400" : "text-slate-500"
        }`}>
          Digital product card
        </p>
      </div>
      <p className={`text-sm font-semibold ${
        isDark ? "text-cyan-100" : "text-slate-900"
      }`}>
        {product.price}
      </p>
    </div>
  );
}

function DashboardPreview({ isDark }) {
  const shellClass = isDark
    ? "border-white/10 bg-[linear-gradient(180deg,rgba(7,12,24,0.95),rgba(14,18,34,0.92))]"
    : "border-slate-200/80 bg-[linear-gradient(180deg,rgba(249,251,255,1),rgba(233,241,250,0.96))]";

  const panelClass = isDark
    ? "border-white/10 bg-slate-950/80"
    : "border-slate-200/80 bg-white/92";

  const textPrimary = isDark ? "text-white" : "text-slate-900";
  const textSecondary = isDark ? "text-slate-400" : "text-slate-500";
  const mutedCard = isDark
    ? "border-white/10 bg-slate-900/80"
    : "border-slate-200/80 bg-white";

  return (
    <div
      className={`rounded-[28px] border p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-5 ${panelClass}`}
    >
      <div
        className={`mb-4 flex items-center justify-between rounded-2xl border px-4 py-3 text-xs ${isDark ? "border-white/10 bg-slate-900/80 text-slate-400" : "border-slate-200/70 bg-slate-50 text-slate-500"}`}
      >
        <span>Store dashboard</span>
        <span
          className={`rounded-full px-3 py-1 font-medium ${isDark ? "bg-cyan-500/10 text-cyan-200" : "bg-cyan-500/10 text-cyan-700"}`}
        >
          Live preview
        </span>
      </div>

      <div className={`rounded-[24px] border p-4 ${shellClass}`}>
        <div className="grid gap-4 lg:grid-cols-[180px_1fr]">
          <aside className={`rounded-[22px] border p-4 ${mutedCard}`}>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(74,111,223,0.95),rgba(172,114,230,0.95))] text-sm font-bold text-white shadow-[0_10px_20px_rgba(76,103,199,0.22)]">
                D
              </div>
              <div>
                <p className={`text-sm font-semibold ${textPrimary}`}>
                  Dsell Admin
                </p>
                <p className={`text-[11px] ${textSecondary}`}>Store controls</p>
              </div>
            </div>

            <div className="space-y-2">
              {sidebarItems.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-2xl px-3 py-2 text-xs ${index === 0 ? isDark ? "bg-[linear-gradient(135deg,rgba(74,111,223),rgba(172,114,230,0.15))] font-medium text-white" : "bg-[linear-gradient(135deg,rgba(74,111,223),rgba(172,114,230,0.15))] font-medium text-slate-900" : textSecondary}`}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="space-y-4">
            <div className={`rounded-2xl border p-3 ${mutedCard}`}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className={`text-sm font-semibold ${textPrimary}`}>
                    Storefront overview
                  </p>
                  <p className={`text-xs ${textSecondary}`}>
                    Product shelf and live sales activity
                  </p>
                </div>
                <div
                  className={`rounded-full px-3 py-1 text-xs ${isDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-600"}`}
                >
                  Online
                </div>
              </div>
            </div>

            {/* <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {dashboardMetrics.map((metric) => (
                <div key={metric.label} className={`rounded-2xl border p-4 ${mutedCard}`}>
                  <div className="mb-3 flex items-center justify-between">
                    <p className={`text-[11px] uppercase tracking-[0.16em] ${textSecondary}`}>
                      {metric.label}
                    </p>
                    <span className={`rounded-full px-2 py-1 text-[10px] ${isDark ? 'bg-emerald-400/10 text-emerald-200' : 'bg-emerald-500/10 text-emerald-700'}`}>
                      {metric.delta}
                    </span>
                  </div>
                  <p className={`text-2xl font-semibold ${textPrimary}`}>{metric.value}</p>
                </div>
              ))}
            </div> */}

            {/* <div className={`rounded-2xl border p-4 ${mutedCard}`}>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className={`text-sm font-semibold ${textPrimary}`}>Revenue this month</p>
                  <p className={`text-xs ${textSecondary}`}>Net sales across all store listings</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs ${isDark ? 'bg-cyan-500/10 text-cyan-200' : 'bg-cyan-500/10 text-cyan-700'}`}>
                  +24.3%
                </span>
              </div>

              <div className="flex h-40 items-end gap-2">
                {dashboardBars.map((bar, index) => (
                  <div key={`${bar}-${index}`} className="flex flex-1 flex-col items-center gap-2">
                    <div className={`flex w-full items-end rounded-full ${isDark ? 'bg-white/5' : 'bg-slate-100'} p-1`}>
                      <div
                        className="w-full rounded-full bg-gradient-to-t from-violet-500 via-fuchsia-500 to-cyan-400"
                        style={{ height: `${bar}%` }}
                      />
                    </div>
                    <span className={`text-[10px] ${textSecondary}`}>{index + 1}</span>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="grid gap-3 xl:grid-cols-[1.05fr_0.95fr]">
              <div className={`rounded-2xl border p-4 ${mutedCard}`}>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-semibold ${textPrimary}`}>
                      Top listings
                    </p>
                    <p className={`text-xs ${textSecondary}`}>
                      Products ready for checkout
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${isDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-600"}`}
                  >
                    4 live
                  </span>
                </div>

                <div className="space-y-3">
                  {productCards.map((card) => (
                    <div
                      key={card.name}
                      className={`flex items-center gap-3 rounded-2xl border p-3 ${isDark ? "border-white/10 bg-slate-950/70" : "border-slate-200/80 bg-slate-50/80"}`}
                    >
                      <div
                        className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${card.accent}`}
                      />
                      <div className="min-w-0 flex-1">
                        <p className={`text-sm font-semibold ${textPrimary}`}>
                          {card.name}
                        </p>
                        <p className={`text-xs ${textSecondary}`}>
                          Featured listing
                        </p>
                      </div>
                      <p className={`text-sm font-semibold ${textPrimary}`}>
                        {card.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`rounded-2xl border p-4 ${mutedCard}`}>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-semibold ${textPrimary}`}>
                      Recent orders
                    </p>
                    <p className={`text-xs ${textSecondary}`}>
                      Latest customer activity
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${isDark ? "bg-violet-500/10 text-violet-200" : "bg-violet-500/10 text-violet-700"}`}
                  >
                    Today
                  </span>
                </div>

                <div className="space-y-2">
                  {dashboardOrders.map((order) => (
                    <div
                      key={order.id}
                      className={`flex items-center justify-between rounded-2xl border px-3 py-3 ${isDark ? "border-white/10 bg-slate-900/80" : "border-slate-200/80 bg-white/90"}`}
                    >
                      <div>
                        <p className={`text-sm font-semibold ${textPrimary}`}>
                          {order.id}
                        </p>
                        <p className={`text-xs ${textSecondary}`}>
                          {order.product}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-semibold ${textPrimary}`}>
                          {order.amount}
                        </p>
                        <p
                          className={`text-xs ${order.status === "Paid" ? isDark ? "text-emerald-300" : "text-emerald-600" : isDark ? "text-amber-300" : "text-amber-600"}`}
                        >
                          {order.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreateStoreSection() {
  const { isDark } = useTheme();

  const pageBg = isDark
    ? "bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.12),transparent_25%),radial-gradient(circle_at_top_right,rgba(192,132,252,0.18),transparent_25%),linear-gradient(180deg,rgba(4,10,24,0.96),rgba(4,10,24,1))]"
    : "bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.12),transparent_25%),radial-gradient(circle_at_top_right,rgba(192,132,252,0.12),transparent_25%),linear-gradient(180deg,rgba(255,255,255,1),rgba(247,250,252,0.94))]";

  const outerShell = isDark
    ? "border-white/10 bg-slate-950/75 shadow-[0_20px_60px_rgba(2,6,23,0.42)]"
    : "border-slate-200/80 bg-white/95 shadow-[0_20px_60px_rgba(15,23,42,0.08)]";

  const heroCard = isDark
    ? "border-white/10 bg-[linear-gradient(135deg,rgba(7,12,24,0.92),rgba(18,24,42,0.94))] shadow-[0_18px_40px_rgba(2,6,23,0.24)]"
    : "border-slate-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(240,246,252,0.92))] shadow-[0_18px_40px_rgba(15,23,42,0.08)]";

  const sectionCard = isDark
    ? "border-white/10 bg-slate-950/75"
    : "border-slate-200/80 bg-white/92";

  const innerCard = isDark
    ? "border-white/10 bg-slate-950/80"
    : "border-slate-200/80 bg-white/88";

  return (
    <section className="relative overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div className={`absolute inset-0 -z-10 ${pageBg}`} />
      <div className={`absolute left-0 top-24 -z-10 h-72 w-72 rounded-full blur-3xl ${
        isDark ? "bg-cyan-400/12" : "bg-cyan-300/20"
      }`} />
      <div className={`absolute right-0 top-24 -z-10 h-72 w-72 rounded-full blur-3xl ${
        isDark ? "bg-violet-500/12" : "bg-violet-300/20"
      }`} />

      <div className="flex flex-col gap-8 lg:gap-10">
        <div
          className={`rounded-[36px] border p-5 backdrop-blur sm:p-6 lg:p-8 ${outerShell}`}
        >
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div
              className={`flex flex-col justify-between rounded-[30px] border p-6 sm:p-7 lg:p-8 ${heroCard}`}
            >
              <div>
                <p
                  className={`text-sm uppercase tracking-[0.32em] ${isDark ? "text-cyan-200/80" : "text-cyan-700/70"}`}
                >
                  Digital commerce
                </p>
                <h2
                  className={`mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[50px] lg:leading-[1.05] ${isDark ? "text-white" : "text-slate-950"}`}
                >
                  Create Your Own Digital Store with Secure Payments
                </h2>
                <p
                  className={`mt-4 max-w-2xl text-sm leading-6 sm:text-base lg:text-[1.02rem] ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
                  Share your custom store link, manage storefronts, and keep
                  every transaction protected with a clean, modern workflow.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(74,111,223,0.95),rgba(172,114,230,0.95))] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(76,103,199,0.32)] transition hover:-translate-y-0.5"
                >
                  <span className="inline-flex items-center gap-2">
                    <StoreIcon className="h-4 w-4" />
                    Create your store
                    <ArrowRightIcon className="h-5 w-5" />
                  </span>
                </button>
                <button
                  type="button"
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                    isDark
                      ? "border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
                      : "border-slate-300 bg-white/80 text-slate-700 hover:border-slate-400 hover:bg-white"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <GridIcon className="h-4 w-4" />
                    See demo
                  </span>
                </button>
              </div>
            </div>

            <DashboardPreview isDark={isDark} />
          </div>
        </div>

        <div
          className={`space-y-5 rounded-[30px] border px-5 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:px-6 sm:py-7 ${sectionCard}`}
        >
          <div className="text-center">
            <p
              className={`text-lg font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}
            >
              Trust Strip
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {trustStats.map((stat) => (
              <StatCard key={stat.label} {...stat} isDark={isDark} />
            ))}
          </div>
        </div>

        <div
          className={`grid gap-5 rounded-[30px] border p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-6 ${sectionCard}`}
        >
          <SectionTitle
            eyebrow="Your Link Section"
            title="dsell.store/yourname"
            text="Share your custom store link with a polished, shareable storefront URL and a clean mobile-friendly presentation."
            isDark={isDark}
          />

          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div
              className={`rounded-[30px] border p-4 shadow-[0_16px_32px_rgba(15,23,42,0.08)] ${isDark ? "border-white/10 bg-[linear-gradient(135deg,rgba(10,15,28,0.95),rgba(20,26,42,0.92))]" : "border-slate-200/80 bg-[linear-gradient(135deg,rgba(245,248,252,0.98),rgba(228,240,248,0.94))]"}`}
            >
              <div
                className={`rounded-[24px] border px-5 py-4 text-2xl font-medium tracking-tight sm:px-6 sm:py-5 sm:text-3xl ${isDark ? "border-white/10 bg-slate-950/80 text-slate-200" : "border-slate-200/70 bg-white/88 text-slate-400"}`}
              >
                <span className="inline-flex items-center gap-3">
                  <ShieldIcon className={`h-5 w-5 ${
                    isDark ? "text-cyan-200" : "text-cyan-600"
                  }`} />
                  dsell.store/yourname
                </span>
              </div>
            </div>
          </div>
        </div>

        <VerticalFlowArrow isDark={isDark} />

        <div
          className={`space-y-5 rounded-[30px] border p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-6 ${sectionCard}`}
        >
          <SectionTitle
            eyebrow="How It Works"
            title="A simple 7-step flow"
            text="Guide buyers through registration, store creation, product listing, and release without clutter or visual noise."
            isDark={isDark}
          />

          <div
            className={`rounded-[28px] border px-4 py-5 sm:px-6 sm:py-6 ${innerCard}`}
          >
            <div className="grid gap-5 md:grid-cols-7 md:items-center">
              {howItWorks.map((step, index) => (
                <div key={step.label} className="flex items-center gap-2">
                  <StepBubble label={step.label} icon={step.icon} isDark={isDark} />
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:flex md:flex-1 md:items-center md:justify-center -mx-1">
                      <FlowArrow className={`h-5 w-5 ${
                        isDark ? "text-purple-400" : "text-cyan-400"
                      }`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <VerticalFlowArrow isDark={isDark} />

        <div
          className={`space-y-5 rounded-[30px] border p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-6 ${sectionCard}`}
        >
          <SectionTitle
            eyebrow="Storefront Preview"
            title="A clean product shelf with analytics"
            text="The storefront preview stays centered, polished, and functional in both themes, with the same layout rhythm as the reference."
            isDark={isDark}
          />

          <div
            className={`rounded-[32px] border p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-5 ${isDark ? "border-white/10 bg-[linear-gradient(180deg,rgba(9,14,26,0.98),rgba(15,20,34,0.94))]" : "border-slate-200/80 bg-[linear-gradient(180deg,rgba(248,250,252,0.96),rgba(236,242,249,0.92))]"}`}
          >
            <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
              <div
                className={`rounded-[26px] border p-4 ${isDark ? "border-white/10 bg-slate-950/80" : "border-slate-200/80 bg-white/88"}`}
              >
                <div
                  className={`mb-4 h-4 w-28 rounded-full ${isDark ? "bg-slate-700" : "bg-slate-200"}`}
                />
                <div
                  className={`space-y-3 text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}
                >
                  {[
                    "Dashboard",
                    "Orders",
                    "Products",
                    "Payments",
                    "Analytics",
                    "Support",
                  ].map((item) => (
                    <div
                      key={item}
                      className={`rounded-2xl border px-3 py-2 ${isDark ? "border-white/10 bg-slate-900/80" : "border-slate-200/70 bg-slate-50"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`space-y-4 rounded-[26px] border p-4 sm:p-5 ${isDark ? "border-white/10 bg-slate-950/80" : "border-slate-200/80 bg-white/88"}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p
                      className={`text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      dsell store
                    </p>
                    <p
                      className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}
                    >
                      Console view with product cards and quick stats.
                    </p>
                  </div>
                  <div
                    className={`rounded-full px-3 py-1 text-xs ${isDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-600"}`}
                  >
                    Location: storefront
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-4 xl:grid-cols-4">
                  {productCards.map((product) => (
                    <ProductCard key={product.name} product={product} isDark={isDark} />
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-5">
                  {[
                    ["$1000.00", "Voice balance"],
                    ["50", "Open orders"],
                    ["$20.00", "Cart total"],
                    ["$36.00", "Total sales"],
                    ["2", "Active alerts"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className={`rounded-2xl border p-3 ${isDark ? "border-white/10 bg-slate-900/80" : "border-slate-200/80 bg-slate-50"}`}
                    >
                      <p
                        className={`text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                      >
                        {value}
                      </p>
                      <p
                        className={`text-[11px] ${isDark ? "text-slate-400" : "text-slate-500"}`}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`space-y-5 rounded-[30px] border p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-6 ${sectionCard}`}
        >
          <SectionTitle
            eyebrow="Features & Use Cases"
            title="Flexible commerce blocks"
            text="These cards can represent instant delivery, dispute handling, API keys, game accounts, and support workflows while staying visually consistent."
            isDark={isDark}
          />

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} isDark={isDark} />
            ))}
          </div>
        </div>

        <div
          className={`grid gap-5 rounded-[30px] border p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] lg:grid-cols-[0.95fr_1.05fr] sm:p-6 ${sectionCard}`}
        >
          <div className="space-y-4">
            <SectionTitle
              eyebrow="Security & FAQ"
              title="Payments explained clearly"
              isDark={isDark}              
            />

            <div
              className={`rounded-[28px] border p-4 ${isDark ? "border-white/10 bg-[linear-gradient(180deg,rgba(7,12,24,0.95),rgba(16,22,36,0.92))]" : "border-slate-200/80 bg-[linear-gradient(180deg,rgba(249,251,255,0.95),rgba(231,239,249,0.9))]"}`}
            >
              <div className={`grid grid-cols-3 gap-2 text-center text-xs ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}>
                {paymentSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <div
                      key={step.label}
                      className={`rounded-2xl border p-3 ${isDark ? "border-white/10 bg-slate-900/80" : "border-slate-200/70 bg-white/80"}`}
                    >
                      <div className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(168,85,247,0.18))] ${
                        isDark ? "border-cyan-300/20 text-cyan-200" : "border-cyan-200/30 text-cyan-700"
                      }`}>
                        <StepIcon className="h-5 w-5" />
                      </div>
                      <p
                        className={`font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}
                      >
                        {index + 1}. {step.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-1">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className={`group rounded-[22px] border p-4 ${isDark ? "border-white/10 bg-slate-900/80" : "border-slate-200/80 bg-white/88"}`}
              >
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  <span>{item.question}</span>
                  <span className="text-lg text-slate-400 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p
                  className={`mt-3 text-sm leading-6 ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <footer
          className={`rounded-[30px] border px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ${sectionCard}`}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div
              className={`flex flex-wrap items-center gap-4 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
            >
              {["Terms", "Privacy", "Contact", "Twitter", "Discord"].map(
                (item) => (
                  <a key={item} href="#" className="nav-link text-sm">
                    {item}
                  </a>
                ),
              )}
            </div>

            <button
              type="button"
              className="rounded-full border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(74,111,223,0.95),rgba(172,114,230,0.95))] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(76,103,199,0.32)] transition hover:-translate-y-0.5"
            >
              Create Storefront
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default CreateStoreSection;

