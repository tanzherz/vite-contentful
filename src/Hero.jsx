import hero from './assets/hero3.svg'

export const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Seitan kale chips occupy cold-pressed heirloom palo santo PBR&B
            helvetica gluten-free. Venmo lo-fi hexagon, twee vape kinfolk
            skateboard typewriter lumbersexual iPhone unicorn disrupt marxism.
            Coloring book seitan la croix sartorial gentrify flannel. Copper mug
            cliche williamsburg cloud bread marfa sustainable flexitarian.
          </p>
        </div>
        <div className='img-container'>
          <img src={hero} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  )
}
