
export default function Home() {
  return (
    <main className="">
      <div className="relative">
        <div className="bg-hero-section bg-no-repeat h-screen bg-center bg-cover">
          <video autoPlay autoplay="autoplay" oncontextmenu="return false;"  preload="auto"  id="porscheVideo" muted className="absolute inset-0 h-screen ">
            <source
              src="homepage/comming_soon_background.mp4"
              type="video/mp4"
            />
          </video>
        <div className="absolute inset-0">
              <h1>Comming soon.</h1>
        </div>
      </div>

      </div>

    </main>
  )
}
