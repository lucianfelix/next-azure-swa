export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'auto' }}>
      <head >
      </head>
      <body style={{ scrollBehavior: 'auto' }}>
      {children}
      </body>
    </html>
  );
}
