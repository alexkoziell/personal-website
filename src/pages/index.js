import * as React from 'react'
import Accordion from '../components/accordion'
import Layout from '../components/layout'
import Section from '../components/section'
import Typewritten from '../components/typewritten'

const projects = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt neque non ante iaculis vestibulum ac a dui. Praesent dignissim posuere erat nec tempor. Cras scelerisque varius pretium. Pellentesque pretium cursus tellus eget commodo. Aliquam erat volutpat. Aenean at erat nec magna fermentum placerat ac in sem. Phasellus quis sollicitudin mauris. Vivamus quam nisi, ultricies fringilla nisi id, commodo volutpat leo. Aliquam non egestas lectus. Morbi malesuada ipsum et dui ullamcorper suscipit eget in mi. Pellentesque nec imperdiet leo. Praesent venenatis quam vitae arcu scelerisque, sed egestas mauris suscipit. Morbi et varius ligula, id scelerisque tellus. Praesent condimentum orci sodales arcu consequat fermentum. Cras tellus libero, laoreet eu consectetur nec, consequat et leo. Sed sollicitudin tortor et libero pretium vulputate. Fusce suscipit ligula eu porttitor aliquet. Mauris aliquam lorem sollicitudin, imperdiet libero ac, ullamcorper tortor. Suspendisse nibh mauris, dictum nec magna bibendum, consequat ultricies purus.',
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