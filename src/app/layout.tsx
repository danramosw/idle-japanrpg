import './globals.css'
import React from "react";

export const metadata = {
  title: 'Idle Japan RPG',
  description: 'Um jogo idle estilo JRPG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}