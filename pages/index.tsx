import { Hero } from 'components/home/Hero'

const IndexPage = () => (
  <div>
    <Hero />

    <div style={{ height: 100 }} />
    <div className="centered-content text-center">
      <h1 className="text-3xl mb-4 font-bold ">
        Dagster is a data orchestrator for machine learning, analytics, and ETL.
      </h1>
      <div style={{ display: 'flex' }} className="columns-on-mobile">
        <div className="text-center" style={{ flex: 1, marginTop: 50 }}>
          <img className="inline-block" src="images/hero-icon-1.svg" style={{ height: 70 }} />
          <p>Implement components in any tool, such as Pandas, Spark, SQL, or DBT.</p>
        </div>
        <div style={{ width: 40 }} />
        <div className="text-center" style={{ flex: 1, marginTop: 50 }}>
          <img className="inline-block" src="images/hero-icon-2.svg" style={{ height: 70 }} />
          <p>
            Define your pipelines in terms of the data flow between reusable, logical components.
          </p>
        </div>
        <div style={{ width: 40 }} />
        <div className="text-center" style={{ flex: 1, marginTop: 50 }}>
          <img className="inline-block" src="images/hero-icon-3.svg" style={{ height: 70 }} />
          <p>Test locally and run anywhere with a unified view of data pipelines and assets.</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 30,
          paddingBottom: 50,
        }}
      >
        <a href="https://docs.dagster.io/tutorial">
          <button className="large primary">Tutorial</button>
        </a>
        <div style={{ width: 10 }} />
        <a href="https://docs.dagster.io/">
          <button className="large">Documentation</button>
        </a>
      </div>
    </div>
    <div style={{ background: '#f5f9fc', paddingTop: 100, paddingBottom: 140 }}>
      <div className="centered-content columns-on-mobile" style={{ display: 'flex' }}>
        <div style={{ flex: 1 }} className="first-on-mobile">
          <img src="images/graphic-deployment.png" style={{ width: '100%', minWidth: 100 }} />
        </div>
        <div style={{ width: 60 }} />
        <div style={{ flex: 2 }}>
          <H1>
            Develop and test on your laptop,
            <br />
            deploy anywhere
          </H1>
          <p>
            With Dagster’s pluggable execution, the same pipeline can run in-process, against your
            local file system or on a distributed work queue, against your production data lake. You
            can set up Dagster’s web interface in a minute on your laptop, or deploy it on-premise
            or in any cloud.
          </p>
        </div>
      </div>
    </div>
    <div className="centered-content" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', left: -30, top: -80 }}>
        <img src="images/dots.svg" />
      </div>
    </div>
    <div
      className="centered-content"
      style={{
        background: 'white',
        position: 'relative',
        zIndex: 1,
        top: -60,
        marginBottom: -60,
        padding: 30,
      }}
    >
      <div className="feature-section columns-on-mobile">
        <div style={{ flex: 1.7 }}>
          <H1>Model and type the data produced and consumed&nbsp;by&nbsp;each&nbsp;step</H1>
          <p>
            Dagster models data dependencies between steps in your orchestration graph and handles
            passing data between them. Optional typing on inputs and outputs helps catch bugs early.
          </p>
          <a
            href="https://docs.dagster.io/overview/solids-pipelines/solids"
            target="_blank"
            className="inline-block py-4"
          >
            Learn More &gt;
          </a>
        </div>
        <div style={{ width: 60 }} />
        <div style={{ flex: 1 }} className="first-on-mobile">
          <img
            src="images/graphic-solid.png"
            style={{ width: '100%', minWidth: 100, transform: 'scale(1.2)' }}
          />
        </div>
      </div>

      <div className="feature-section columns-on-mobile">
        <div style={{ flex: 1 }} className="first-on-mobile">
          <img src="images/graphic-asset-manager.png" style={{ width: '100%', minWidth: 100 }} />
        </div>
        <div style={{ width: 60 }} />
        <div style={{ flex: 1.7 }}>
          <H1>Link data to computations</H1>
          <p>
            Track what’s produced by your pipelines with Dagster's Asset Manager, so you can
            understand how your data was generated and trace issues when it doesn’t look how you
            expect.
          </p>
          <a
            href="https://docs.dagster.io/overview/asset-materializations"
            target="_blank"
            className="inline-block py-4"
          >
            Learn More &gt;
          </a>
        </div>
      </div>

      <div className="feature-section columns-on-mobile">
        <div style={{ flex: 1.7 }}>
          <H1>Build a self-service data platform</H1>
          <p>
            Dagster helps platform teams build systems for data practitioners. Pipelines are built
            from shared, reusable, configurable data processing and infrastructure components.
            Dagster’s web interface lets anyone inspect these objects and discover how to use them.
          </p>
        </div>
        <div style={{ width: 60 }} />
        <div style={{ flex: 1 }} className="first-on-mobile">
          <img
            src="images/graphic-target-audience.png"
            style={{ width: '100%', minWidth: 100, transform: 'scale(1.1)' }}
          />
        </div>
      </div>

      <div className="feature-section columns-on-mobile">
        <div style={{ flex: 1 }} className="first-on-mobile">
          <img
            src="images/graphic-isolated-codebases.png"
            style={{ width: '100%', minWidth: 100 }}
          />
        </div>
        <div style={{ width: 60 }} />
        <div style={{ flex: 1.7 }}>
          <H1>Avoid dependency nightmares</H1>
          <p>
            Dagster’s repository model lets you isolate codebases, so that problems in one pipeline
            don’t bring down the rest. Each pipeline can have its own package dependencies and
            Python version. Pipelines run in isolated processes so user code issues can't bring the
            system down.
          </p>
          <a
            href="https://docs.dagster.io/overview/repositories-workspaces/workspaces"
            target="_blank"
            className="inline-block py-4"
          >
            Learn More &gt;
          </a>
        </div>
      </div>
    </div>

    <div style={{ background: '#f5f9fc', paddingTop: 50, position: 'relative' }}>
      <div className="centered-content screenshots">
        <div className="overview">
          <H1>Debug pipelines from a rich UI</H1>
          <p>
            Dagit, Dagster’s web interface, includes wide facilities for understanding the pipelines
            it orchestrates.
          </p>
          <p>
            When inspecting a pipeline run, you can query over logs, discover the most time
            consuming tasks via a Gantt chart, and re-execute subsets of steps.
          </p>
        </div>
        <div className="dots">
          <img src="images/dots.svg" />
        </div>
        <img src="images/screenshot-1.png" className="screenshot screenshot-1" />

        <img src="images/screenshot-2.png" className="screenshot screenshot-2" />

        <img src="images/screenshot-3.png" className="screenshot screenshot-3" />
        <div className="localnote">
          <p>
            Dagster’s UI runs locally on your machine and can also be deployed to your production
            infrastructure for operational monitoring.
          </p>
        </div>
        <div style={{ height: 160 }} className="hide-on-mobile" />
      </div>
    </div>

    <div className="hide-on-mobile" style={{ height: 240 }} />

    <div className="centered-content">
      <div className="centered-title">
        <H1>You’re in good company</H1>
        <p>Learn how companies use Dagster to orchestrate their data pipelines.</p>
      </div>
      <div style={{ display: 'flex', marginTop: 60 }} className="columns-on-mobile">
        <CustomerCard name="Prezi" link="#">
          <p>
            Prezi uses Dagster to wrangle insights from more than 100 million users who had created
            more than 325 million public.
          </p>
        </CustomerCard>
        <div style={{ width: 20 }} />
        <CustomerCard name="Prezi" link="#">
          <p>
            Prezi uses Dagster to wrangle insights from more than 100 million users who had created
            more than 325 million public presentations that have been viewed over 3.5 billion
            times.public presentations that have been viewed over 3.5 billion times.
          </p>
        </CustomerCard>
        <div style={{ width: 20 }} />
        <CustomerCard name="Prezi" link="#">
          <p>
            Prezi uses Dagster to wrangle insights from more than 100 million users who had created
            more than 325 million public presentations that have been viewed over 3.5 billion times.
          </p>
        </CustomerCard>
      </div>
    </div>

    <div className="centered-content" style={{ marginTop: 100 }}>
      <div className="centered-title">
        <H1>Broad support for existing pipelines and deployments</H1>
        <p>Incrementally adopt Dagster by wrapping existing code into Dagster solids.</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <img src="images/logos/1.png" style={{ padding: 8 }} />
          <img src="images/logos/2.png" style={{ padding: 8 }} />
          <img src="images/logos/3.png" style={{ padding: 8 }} />
          <img src="images/logos/4.png" style={{ padding: 8 }} />
          <img src="images/logos/5.png" style={{ padding: 8 }} />
          <img src="images/logos/6.png" style={{ padding: 8 }} />
          <img src="images/logos/7.png" style={{ padding: 8 }} />
          <img src="images/logos/8.png" style={{ padding: 8 }} />
          <img src="images/logos/9.png" style={{ padding: 8 }} />
        </div>
      </div>
    </div>

    <div className="centered-content" style={{ marginTop: 100 }} />
  </div>
)

const H1: React.FunctionComponent = (props) => (
  <h1 className="text-3xl leading-tight mb-4 font-bold">{props.children}</h1>
)

const CustomerCard: React.FunctionComponent<{ name: string; link: string }> = (props) => (
  <div className="customer-card">
    <H1>{props.name}</H1>
    {props.children}
    <div style={{ flex: 1 }} />
    <a href={props.link}>
      <button className="large">Learn More</button>
    </a>
  </div>
)
export default IndexPage
