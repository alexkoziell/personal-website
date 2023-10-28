import * as React from 'react'
import Accordion from '../components/accordion'
import Layout from '../components/layout'
import Section from '../components/section'
import Typewritten from '../components/typewritten'

const projects = [
  {
    id: 1,
    title: 'Example Title',
    content: 'Example Content',
  },
]

const IndexPage = () => {
  return (
  <Layout>
    <Section title='Hello World!'>
        <Typewritten delay={25}>
          This is text with a typewriter effect.
        </Typewritten>
    </Section>
    <Section title='Accordion'>
      <Accordion items={projects} />
    </Section>
  </Layout>)
}

export default IndexPage