import React, { FormEvent, useState } from "react";

export interface LoginComponentProps {
  apiUrl?: string;
}

export const LoginComponent = ({ apiUrl }: LoginComponentProps) => {
  const [isBusy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isBusy) {
      return;
    }

    setBusy(true);
    setError("");

    try {
      const form = document.querySelector(
        "#password-form form"
      ) as HTMLFormElement;

      const formData = new FormData(form);

      const res = await fetch(apiUrl || `/api/login`, {
        method: "post",
        credentials: "include",
        body: JSON.stringify({ password: formData.get("password") }),
        headers: { "Content-Type": "application/json" },
      });

      const { message } = await res.json();

      if (res.status === 200) {
        window.location.reload();
      } else {
        setError(message);
        setBusy(false);
      }
    } catch (e) {
      setError("An error has occured.");
      setBusy(false);
    }

    return false;
  };

  return (
    <div
      style={{
        backgroundColor: "#111111",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100vw",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          display: "flex",
          flex: 1,
          width: "100%",
          padding: "32px 16px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
            html {
              font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
            }

            body {
              margin: 0;
            }

            * {
              box-sizing: border-box;
            }

            .link {
              font-style: normal;
              text-decoration: none;
              color: #f4f0f0;
              transition: color 0.2s ease-out;
            }

            .link:hover, .link:focus {
              color: #eaeae7;
            }

            #password-form {
              padding: 40px;
            }

            @media (max-width: 767px) {
              #password-form {
                padding: 32px 16px;
              }
            }

            #password-form .invalid {
              border-color: #c49797 !important;
              animation: shake .4s linear;
            }

            #password-form .error {
              color: #c49797;
              margin-top: 12px;
              font-size: 18px;
            }

            @keyframes shake {
              8%, 41% {
                transform: translateX(-10px);
              }
              25%, 58% {
                transform: translateX(10px);
              }
              75% {
                transform: translateX(-5px);
              }
              92% {
                transform: translateX(5px);
              }
              0%, 100% {
                transform: translateX(0);
              }
            }
          `,
          }}
        />

        <div
          id="password-form"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            borderRadius: "8px",
            width: "420px",
            maxWidth: "100%",
            marginTop: "48px",
          }}
        >
          <form
            data-testid="form"
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <input
              className={error ? "invalid" : ""}
              name="password"
              type="password"
              id="password"
              placeholder="Enter password..."
              required
              style={{
                background: "transparent",
                border: "none",
                borderBottom: "2px solid #f4f0f0",
                padding: "0 16px",
                fontSize: "20px",
                color: "#f4f0f0",
                height: "48px",
              }}
            />
            {!!error && (
              <div className="error" data-testid="error">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isBusy}
              style={{
                appearance: "none",
                background: "transparent",
                borderRadius: "52px",
                border: "2px solid #f4f0f0",
                padding: "12px 32px",
                fontSize: "20px",
                color: "#f4f0f0",
                marginTop: "32px",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              {isBusy ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
