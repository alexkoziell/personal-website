import * as React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import Typewritten from '../components/typewritten'

const IndexPage = () => {
  return (
  <Layout>
    <Section darkmode={true}>
      <h1>
        <Typewritten delay={50}>
          Hello World!
        </Typewritten>
      </h1>
    </Section>
  </Layout>)
}

export default IndexPage