import React from 'react'
import { dataFeatures } from '../../data/datafeatures'
import Feature from '../../components/Feature'

const Features = () => {
  return (
    <section className="features">
        <h2 className="sr-only">Features</h2>
            {dataFeatures.map ((feature) => (
                <Feature 
                key={feature.id}
                img={feature.img}
                imgAlt={feature.imgAlt}
                title={feature.title}
                content={feature.content}
                />
                
            ))}
      </section>
  )
}

export default Features