import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <div className='hero-title'>
                <h1>
                    CMS
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur natus architecto voluptates, dolores quia veritatis enim fuga alias error ducimus doloremque id tenetur, ullam fugit, quam deserunt sequi illo eum?</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman" />
            </div>
        </div>
    </section>
  )
}
export default Hero