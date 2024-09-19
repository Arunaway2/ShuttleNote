import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">ShuttleNote</span></h1>
            </header>
            <main className="public__main">
                <p>An Easy To Use Note Taking App For Coaches Looking To Improve On Workflow</p>
                <address className="public__addr">
                    ShuttleNoteIndustries<br />
                    555 SkibidiServe Way <br />
                    Berkeley, CA 55555<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Arun Yadavalli</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public