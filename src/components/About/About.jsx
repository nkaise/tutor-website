import './about.css';

const AboutMe = () => {
    return ( 
    <section className="about-me">
        <div className="container">
            <div className="about-block">
                <div className="about-me-block">
                    <h3 className="about-title main-word title lng-about-me">about me</h3>
                    <p className="about-text lng-about-text">The stars told that teaching is definitely for me. 
                    </p>
                    <p className="about-text lng-about-text-2">Students say that our classes are the best thing has ever happened to them. To my mind, a friendly way in studying is very important, and it leads to high results!</p>
                </div>
                <div className="about-methods-block">
                    <h3 className="about-title main-word title lng-methods-title">my methods.</h3>
                    <p className="about-text lng-methods-text">I teach from SpeakOut and Outcome textbooks. I adapt the topics from the textbooks by my own, so every student will like it. We focus on all key English skills (speaking, grammar, vocabulary, listening, reading, pronunciation, writing) at our lessons. 
                    </p>
                    <p className="about-text lng-methods-text-2">
                        We also work with students on reading books and watching TV series. I am excited to discuss themes that my students are fond of. Thanks to my students, I have learned more about Fortnite, Marvel, big tennis and more.
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default AboutMe;