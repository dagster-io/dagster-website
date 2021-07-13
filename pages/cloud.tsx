import * as React from 'react'
import JotformEmbed from 'react-jotform-embed'

export default class Typeform extends React.Component {
  render() {
    return (
      <div className="flex flex-col p-16 m-24 bg-gradient-to-r from-blue-200 to-blue-300 rounded-md">
        <p className="text-blue-900 text-2xl font-bold flex justify-center pb-2">Dagster Cloud</p>
        <p className="text-blue-900 flex justify-left pb-2">
        We are building a hosted product to make deploying and operating Dagster fast, secure, and 
        effortless. Sign up below to get on the waitlist and stay informed of our progress.
        </p>
        {/* <p className="text-blue-900 font-light flex justify-left">
        Sign up below to get on the waitlist and stay informed of our progress.
        </p> */}
        <div className="flex justify-center">
          <JotformEmbed src="https://form.jotform.com/211927287192159" />
        </div>
      </div>
    )
  }
}
