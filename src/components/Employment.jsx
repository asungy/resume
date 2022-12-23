import "../styles/employment.css";
import memoEmoji from "../assets/memo_emoji.png";

function SectionHeader() {
  return (
    <div className="section-header">
      <span>
        <img
          src={memoEmoji}
          alt="memo emoji"
        />
        <span>&nbsp;</span>
        <span>Employment</span>
      </span>
      <hr/>
    </div>
  );
}

const entries = [
  {
    title: "Software Engineer",
    company: "Epistemix",
    location: "Remote",
    start: "02/2022",
    end: "Current",
    url: "https://www.epistemix.com/",
    bullets: [
      <span>
        Worked in a fast-pace, <b>start-up</b> environment delivering
        high-quality, documented code in a timely fashion.
      </span>,

      <span>
        Ownership over development lifecycle of client-facing <b>Python</b>
        &nbsp;package used in SaaS platform product.
      </span>,

      <span>
        Performed enhancements and streamlined build system of core engine
        software using <b>C++</b> best practices.
      </span>,

      <span>
        Ensured consistency and quality of various software products using&nbsp;
        <b>GitHub Actions</b> and <b>Docker</b>.
      </span>,

      <span>
        Liaised between engineering and research teams to ensure simulation
        models executed successfully.
      </span>,

      <span>
        Responsible for customer onboarding experience processes and product
        learning materials.
      </span>
    ],
  },
  {
    title: "Performance Test Engineer",
    company: "Vision Point Systems",
    location: "Remote",
    start: "08/2020",
    end: "01/2022",
    url: "https://www.visionpointsystems.com/",
    bullets: [
      <span>
        Engineered tests to measure performance of critical applications at
        scale using JMeter and Groovy.
      </span>,

      <span>
        Developed <b>Java</b> applications to perform large-scale data staging efforts
        saving hundreds of manual hours.
      </span>,

      <span>
        Architected graphing utility using <b>Express</b> and <b>ReactJS</b> to
        streamline data analysis and reporting.
      </span>,

      <span>
        Leveraged software engineering experience to develop tailored solutions
        for customers using <b>Python</b>.
      </span>,
    ],
  },
  {
    title: "Software Engineer",
    company: "AppGuard",
    location: "Chantilly, VA",
    start: "07/2018",
    end: "09/2019",
    url: "https://www.appguard.us/",
    bullets: [
      <span>
        Responsible for having deep understanding of <b>C++</b> codebase of over
        150,000 lines of code.
      </span>,

      <span>
        Interacted intimately with Windows OS internals using <b>Windows
        API</b> to implement and debug key features.
      </span>,

      <span>
        Worked closely with QA team to deploy quick bug fixes and ensure
        optimal performance of product.
      </span>,
    ],
  },
  {
    title: "AI Research Intern",
    company: "U.S Naval Research Laboratory",
    location: "Washington D.C.",
    start: "05/2016",
    end: "08/2016",
    url: "https://www.nrl.navy.mil/",
    bullets: [
      <span>
        Explored methods for incorporating PGMs CNNs in order to increase
        accuracy in vision detection problems.
      </span>,

      <span>
        Used <b>Python</b> for modeling probabilistic graphical models and
        setting up data pipelines.
      </span>,

      <span>
        Concluded using PGMs oversaturate weights in convoluted neural
        networks, rendering them useless.
      </span>,
    ],
  },
  {
    title: "UG Research Assistant",
    company: "SSRG",
    location: "Blacksburg, VA",
    start: "09/2015",
    end: "05/2016",
    url: "https://www.ssrg.ece.vt.edu/",
    bullets: [
      <span>
        Performed benchmark testing of Popcorn Linux, an operating system
        designed for Instruction Set Architecture heterogeneous hardware,
        multi-core architectures, and optimized scalability.
      </span>,
      <span>
        Used <b>Python</b> and <b>Octave</b> to analyze and plot results.
      </span>,
      <span>
        Presented project and results at conferences to sponsors and stakeholders.
      </span>,
    ],
  },
];

function Entry(props) {
  let entry = props.entry;
  return (
    <div className="employment-entry">
      <div className="entry-header">
        <span className="title">{entry.title}</span>
        <a
          className="company"
          href={entry.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {entry.company}
        </a>
        <div className="entry-header-right">
          <span>{entry.start} - {entry.end}</span>
          <span style={{fontStyle: "italic"}}>{entry.location}</span>
        </div>
      </div>

      <ul className="entry-bullets">
        {
          entry.bullets.map((bullet, index) => {
            /* Not the best practice, but suffices.
             * See: https://reactjs.org/docs/lists-and-keys.html#keys
             */
            return (<li key={index}>{bullet}</li>);
          })
        }
      </ul>
    </div>
  );
}

function Entries(props) {
  let entries = props.entries;
  return (
    <div>
      {entries.map((entry) => <Entry key={entry.company} entry={entry} />)}
    </div>
  );
}

function Employment() {
  return (
    <div id="employment">
      <SectionHeader />
      <Entries entries={entries} />
    </div>
  );
}

export default Employment;
