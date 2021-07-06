import * as React from 'react'

export default class Typeform extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ marginBottom: '40px' }}>
            <p style={{ color: '#444444', textAlign: 'center', fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
            Dagster Cloud
            </p>
            <p style={{  color: '#7b88a8', textAlign: 'center', fontSize: '18px', fontWeight: 400, lineHeight: 1.45, marginBottom: '18px' }}>
            Turn your modern data stack into a modern data platform with hosted Dagster
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', color: '#7b88a8', textAlign: 'center', fontSize: '16px', fontWeight: 400, lineHeight: 1.45, marginBottom: '18px' }}>
                <div style={{ width: '200px', margin: '2%', justifyContent: 'start', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <img style={{ width: '70%' }} src="images/cloud.svg"/>
                <p>Fully-hosted Dagster components, including Dagit, scheduler, metadata databases</p>
                </div>

                <div style={{ width: '200px', margin: '2%', justifyContent: 'start', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <img style={{ width: '70%' }} src="images/rbac.svg" />
                <p>Enterprise-grade features, including access control, run attribution, audit logs, pipeline monitoring</p>
                </div>

                <div style={{ width: '200px', margin: '2%', justifyContent: 'start', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <img style={{ width: '70%' }} src="images/fast.svg"/>
                <p>Fast and lightweight way to run Dagster with limited infrastructure ops</p>
                </div>

                <div style={{ width: '200px', margin: '2%', justifyContent: 'start', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <img style={{ width: '70%' }} src="images/security.svg"/>
                <p>We value data security, and your data is stored with you</p>
                </div>
            </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <a
            href="https://ppho1i7017a.typeform.com/to/km4mFiDz"
            target="_blank"
            style={{ backgroundColor: '#519BE7', padding: '16px', fontSize: '16px', fontWeight: 500, color: '#ffffff', borderRadius: '5px' }}
          >
            Join Dagster Cloud Beta
          </a>
        </div>
      </div>
    )
  }
}
