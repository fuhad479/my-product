import Button from "../Button";

import "./index.scss";

export default function SigninForm({ setSignin }) {
  return (
    <div className="modal">
      <div className="signup-form">
        <div className="top">
          <h2>Sign in</h2>
          <div onClick={() => setSignin((s) => !s)}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••"
          />
          <Button
            size="small"
            variant="filled"
            onClick={() => setSignin((s) => !s)}
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
