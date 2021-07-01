import * as React from 'react'
import { Widget } from '@typeform/embed-react'

export default class Typeform extends React.Component {
  render() {
    return (
    <div style={{ width: '100%', paddingTop: '16px', paddingBottom: '16px'}}>
    <h1 style={{ color: 'black', textAlign: 'center', fontSize: '48px', fontWeight: 'bold' }}>Dagster Cloud</h1>
    <h1 style={{ color: 'black', textAlign: 'center', fontSize: '32px' }}>Turn your modern data stack into a modern data platform</h1>
    <Widget id="km4mFiDz" style={{ width: '100%', height: '500px' }} className="my-form" />
    </div>
    )
  }
}
