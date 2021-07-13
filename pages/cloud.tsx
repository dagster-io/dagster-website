import * as React from 'react'
import JotformEmbed from 'react-jotform-embed';

export default class Typeform extends React.Component {
  render() {
    return (
      <div className="flex flex-col p-16 m-24 bg-gradient-to-r from-blue-200 to-blue-300 rounded-md">
      <p className="text-blue-900 text-2xl flex justify-center pb-2">Dagster Cloud</p>
      <p className="text-blue-900 flex justify-center">We are excited to share that we are building a hosted version of the Dagster and are looking for early beta users!</p>
      <div className="flex justify-center">
        {/* <JotformEmbed src="https://form.jotform.com/211927952953163" /> */}
        <JotformEmbed src="https://form.jotform.com/211927287192159" />
      </div>
      </div>
    )
  }
}
