import * as React from 'react'
import JotformEmbed from 'react-jotform-embed';

export default class Typeform extends React.Component {
  render() {
    return (
      <div>
      <div className="flex flex-col p-16 m-24 border-2 border-blue-100 bg-blue-100 rounded-md rounded-md">
      <p>We are excited to share that we are building a hosted version of the Dagster and are looking for early beta users!</p>
      <div className="flex justify-center">
        {/* style={{ display: 'flex', justifyContent: 'center', height: '200px' }} */}
        <JotformEmbed src="https://form.jotform.com/211927952953163" />
      
      </div>
      </div>
      </div>
    )
  }
}
