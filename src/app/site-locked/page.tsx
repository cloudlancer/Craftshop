export default function SiteLockedPage() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {/* Error Code */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 500,
            margin: 0,
            padding: 0,
            letterSpacing: "-0.02em",
          }}
        >
          402
        </h1>
        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
        />
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            margin: 0,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Limit Exceeded
        </p>
      </div>

      {/* Main message */}
      <div style={{ maxWidth: "540px", padding: "0 24px" }}>
        <h2
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
            margin: "0 0 8px 0",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Deployment Suspended
        </h2>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.5)",
            margin: "0 0 40px 0",
          }}
        >
          This deployment has been suspended due to exceeding the hosting
          resource limits or a billing issue on the owner&apos;s account. If you
          are the owner, please check your billing settings.
        </p>
      </div>

      {/* Vercel-style triangle logo */}
      <div style={{ marginTop: "16px" }}>
        <svg
          width="20"
          height="18"
          viewBox="0 0 76 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="rgba(255,255,255,0.2)" />
        </svg>
      </div>
    </div>
  );
}
