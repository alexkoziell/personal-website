import * as React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import Typewritten from '../components/typewritten'

const IndexPage = () => {
  return (
  <Layout>
    <Section title='Hello World!'>
        <Typewritten delay={25}>
          This is text with a typewriter effect.
        </Typewritten>
    </Section>
    <Section title='Projects'>

    </Section>
  </Layout>)
}

export default IndexPage