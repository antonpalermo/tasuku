import Head from 'next/head'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      <Head>
        <title>{'Tasukuu'}</title>
      </Head>
      {children}
    </div>
  )
}

export default Layout
