import "./About.css"

export default function About() {
  return (
    <section className="about-container">
      {/* Google Fonts — add to your index.html if not already present */}
      

      <div >

        {/* ── Hero ── */}
        <div className="intro">
          <p className="est">Est. 2018 · Ngong, Kenya</p>
          <h1 className="est">
            Rooted in{" "}
            <em >Rich</em>
            <br />
            Kenyan Soil
          </h1>
          <p className="est">GRAPE ENTHUSIAST</p>
          <hr  />
          <p className="est">
            From our farms across the Great Rift Valley to tables near and far — we
            grow, harvest, and craft fruit products that reflect the finest Kenya
            has to offer.
          </p>
        </div>

        {/* ── Stats Bar ── */}
        

        {/* ── Body ── */}
        <div className="intro">

          {/* Our Story */}
          <p className="est">Our Story</p>
          <h2 className="est">
            A passion for the vine,
            <br />
            grown from the ground up
          </h2>
          <p className="est">
            Founded over seven years ago by a seasoned entrepreneur with a lifelong
            love of agriculture, our company began with a simple conviction: that
            Kenya's diverse climate and fertile highlands were uniquely suited to
            producing world-class grapes. What started as a focused grape venture
            in Ngong has since grown into a multi-farm operation spanning some of
            the country's most productive agricultural regions.
          </p>
          <p className="est">
            Today, we are proud to bring premium table grapes, wine-grade grape
            varieties, and our own craft grape wine to discerning customers —
            alongside a selection of other seasonal fruits from our farms. Every
            product we offer carries the care, discipline, and pride that has
            defined us from day one.
          </p>

          <hr />

          {/* Products */}
          <p className="est">What We Offer</p>
          <h2 className="est">Our Products</h2>
         
          <hr />

          {/* Farm Locations */}
          <p className="est">Where We Farm</p>
          <h2 className="est">Our Locations</h2>
          <p className="est">
            Our farms are strategically positioned across Kenya's most
            agriculturally diverse regions, each offering unique growing conditions
            that contribute to the quality and character of our produce.
          </p>
        

          <hr />

          {/* Values + Founder */}
          <div >

            {/* Values */}
            

            {/* Founder */}
            <div>
              <p className="est">Our Founder</p>
              <h2 className="est">The man behind the vines</h2>
              <div >
                <div className="est">Professor Stanley Ndwigah</div>
                <div>
                  {/* Replace with actual founder name */}
                  <div className="est">Founder &amp; Director</div>
                  <div className="est">Ngong, Kenya · Est. 2018</div>
                  <p className="est">
                    "I always believed this land had something extraordinary to
                    offer. Seven years later, our grapes and wines are proof that
                    Kenya belongs among the world's great fruit-growing nations."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Footer Band ── */}
        <div className="intro">
          <p className="est">Rooted in Kenyan Soil.</p>
          <p className="est">
            Headquarters: Ngong, Kajiado County, Kenya
            <br />
            Farms: Ngong · Embu · Nakuru
          </p>
        </div>

      </div>
    </section>
  );
}