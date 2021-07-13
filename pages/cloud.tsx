import * as React from 'react'
import JotformEmbed from 'react-jotform-embed'

export default class Typeform extends React.Component {
  render() {
    return (
      <div className="flex flex-col p-16 m-24 bg-gradient-to-r from-blue-200 to-blue-300 rounded-md">
        <p className="text-blue-900 text-2xl font-bold flex justify-center pb-2">Dagster Cloud</p>
        <p className="text-blue-900 medium flex justify-left">
          We are building a hosted version of Dagster and are accepting waitlist sign ups! We look
          forward to partnering with you to make Dagster Cloud the fastest way for teams to
          orchestrate and operate data pipelines.
        </p>
        <div className="flex justify-center">
          {/* <JotformEmbed src="https://form.jotform.com/211927952953163" /> */}
          <JotformEmbed src="https://form.jotform.com/211927287192159" />
        </div>
      </div>
    )
  }
}
