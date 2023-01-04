import Head from 'next/head'
import React from 'react'

export const Page = ({ title, className, children }: {title?: string, className?: string, children: JSX.Element[]}) => {
  return (
    <div className={'page '+className}>
        <Head>
            <title>{title ? title : 'Tranquility Base Hotel & Casino'}</title>
        </Head>
        {children}
    </div>
  )
}
