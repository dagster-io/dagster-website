import * as React from 'react'

export default class Typeform extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ marginBottom: '40px' }}>
            <p style={{ color: '#1F2023', textAlign: 'center', fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
            Dagster Cloud
            </p>
            <p style={{  color: '#383B40', textAlign: 'center', fontSize: '18px', fontWeight: 400, lineHeight: 1.45, marginBottom: '32px' }}>
            Effortless deployment and operations with hosted Dagster Cloud
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', color: '#383B40', textAlign: 'center', fontSize: '16px', fontWeight: 400, lineHeight: 1.45, marginBottom: '18px' }}>
                <div style={{ width: '200px', margin: '2%', justifyContent: 'start', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <img style={{ width: '70%' }} src="images/cloud.svg"/>
                <p>Fully-hosted Dagster components including Dagit, scheduler, metadata databases</p>
                </div>

                <div style={{ width: '200px', margin: '2%', justifyContent: 'start', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <img style={{ width: '70%' }} src="images/rbac.svg" />
                <p>Enterprise-grade features including access control, workspace management, audit logs and monitoring</p>
                </div>

                <div style={{ width: '200px', margin: '2%', justifyContent: 'start', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <img style={{ width: '70%' }} src="images/fast.svg"/>
                <p>Simple and lightweight to use, so your data team can productionize pipelines faster</p>
                </div>

                <div style={{ width: '200px', margin: '2%', justifyContent: 'start', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <img style={{ width: '70%' }} src="images/security.svg"/>
                <p>We value security, so your data is stored by you and your business logic stays with you</p>
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
            style={{ border: '1px solid #336ea5', backgroundColor: '#4485c2', padding: '16px', fontSize: '16px', fontWeight: 500, color: '#ffffff', borderRadius: '5px' }}
          >
            Join Dagster Cloud Beta
          </a>
        </div>
      </div>
    )
  }
}
